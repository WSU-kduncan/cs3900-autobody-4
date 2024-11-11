package com.wsu.shopflowproservice.service;

import java.util.Date;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.wsu.shopflowproservice.exception.DatabaseErrorException;
import com.wsu.shopflowproservice.exception.InvalidRequestException;

import com.wsu.shopflowproservice.dto.ServiceOrderDTO;
import com.wsu.shopflowproservice.model.ServiceOrder;
import com.wsu.shopflowproservice.model.ServiceOrderLineItem;
import com.wsu.shopflowproservice.repository.ServiceOrderRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ServiceOrderService {

    private final ServiceOrderRepository serviceOrderRepository;


    public ServiceOrder get(Integer serviceOrderId){
        Optional<ServiceOrder> serviceOrder = serviceOrderRepository.findById(serviceOrderId);
        if (serviceOrder.isEmpty()) {
            throw new InvalidRequestException("Invalid ServiceOrder Id");
        }
        try {
            return serviceOrderRepository.findById(serviceOrderId).orElse(null);
        } catch (Exception e) {
            log.error("Failed to retrieve ServiceOrder details. serviceOrderId:{}, Exception{}", serviceOrderId, e);
            throw new DatabaseErrorException("Failed to retrieve ServiceOrder details.", e);
        }
    }

    @Transactional(rollbackOn = Exception.class)
    public ServiceOrder add(ServiceOrderDTO serviceOrder) {
        try {
            Set<ServiceOrderLineItem> lineItems = serviceOrder.getLineItems();
            serviceOrder.setLineItems(null);
            ServiceOrder serviceOrderResp = serviceOrderRepository.save(serviceOrder);
            lineItems.forEach(lineItem -> lineItem.setServiceOrderId(serviceOrderResp.getServiceOrderId()));
            serviceOrderResp.setLineItems(lineItems);
            return serviceOrderRepository.save(serviceOrderResp);
        } catch (Exception e) {
            log.error("Failed to add ServiceOrder. Exception: ", e);
            throw new DatabaseErrorException("Failed to add new ServiceOrder", e);
        }
    }

    @Transactional(rollbackOn = Exception.class)
    public ServiceOrder update(Integer serviceOrderId, ServiceOrderDTO serviceOrder){
        Optional<ServiceOrder> serviceOrderResp = serviceOrderRepository.findById(serviceOrderId);
        if (serviceOrderResp.isEmpty()) {
            throw new InvalidRequestException("Invalid ServiceOrder Id");
        }
        try {
            serviceOrder.setServiceOrderId(serviceOrderResp.get().getServiceOrderId());
            serviceOrder.setDateCompleted(new Date());
            if (!CollectionUtils.isEmpty(serviceOrder.getLineItems())) {
                serviceOrder.getLineItems().forEach(lineItem -> lineItem.setServiceOrderId(serviceOrder.getServiceOrderId()));
            }
            return serviceOrderRepository.save(serviceOrder);
        } catch (Exception e) {
            log.error("Failed to update ServiceOrder. serviceOrderId:{}, Exception:{}", serviceOrderId, e);
            throw new DatabaseErrorException("Failed to update ServiceOrder", e);
        }
    }

    public void delete(Integer serviceOrderId){
        try {
            Optional<ServiceOrder> serviceOrder = serviceOrderRepository.findById(serviceOrderId);
            if (serviceOrder.isEmpty()) {
                throw new InvalidRequestException("Invalid ServiceOrder Id");
            }
            serviceOrderRepository.deleteById(serviceOrderId);
            log.info("ServiceOrder with id {} deleted successfully.", serviceOrderId);
        } catch (Exception e) {
            log.error("Failed to delete ServiceOrder. serviceOrderId:{}, Exception:{}", serviceOrderId, e);
            throw new DatabaseErrorException("Failed to delete ServiceOrder", e);
        }
    }

}
