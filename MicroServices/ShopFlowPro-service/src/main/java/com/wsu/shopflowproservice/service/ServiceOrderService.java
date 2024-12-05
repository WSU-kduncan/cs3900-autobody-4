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
import com.wsu.shopflowproservice.model.Vehicle;
import com.wsu.shopflowproservice.repository.ServiceOrderRepository;
import com.wsu.shopflowproservice.repository.VehicleRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ServiceOrderService {

    private final ServiceOrderRepository serviceOrderRepository;
    private final VehicleRepository vehicleRepository;


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
            vehicleRepository.save(
            Vehicle.builder().vin(serviceOrder.getVin()).build());
            serviceOrder.setDateRecieved(new Date());
            return serviceOrderRepository.save(convertToEntity(serviceOrder));
        } catch (Exception e) {
            log.error("Failed to add ServiceOrder. Exception: ", e);
            throw new DatabaseErrorException("Failed to add new ServiceOrder", e);
        }
    }

    @Transactional(rollbackOn = Exception.class)
public ServiceOrder update(Integer serviceOrderId, ServiceOrderDTO serviceOrderDTO) {
    Optional<ServiceOrder> serviceOrderOptional = serviceOrderRepository.findById(serviceOrderId);

    if (serviceOrderOptional.isEmpty()) {
        throw new InvalidRequestException("Invalid ServiceOrder Id");
    }

    try {
        ServiceOrder serviceOrder = serviceOrderOptional.get();

        // Update the existing service order's properties
        serviceOrder.setMechanicId(serviceOrderDTO.getMechanicId());
        serviceOrder.setCustomerFirstName(serviceOrderDTO.getCustomerFirstName());
        serviceOrder.setCustomerLastName(serviceOrderDTO.getCustomerLastName());
        serviceOrder.setVin(serviceOrderDTO.getVin());
        serviceOrder.setDateCompleted(serviceOrderDTO.getDateCompleted());
        serviceOrder.setDateRecieved(serviceOrderDTO.getDateRecieved());
        serviceOrder.setTotalCost(serviceOrderDTO.getTotalCost());
        
        // If the service_id has changed, update it
        if (serviceOrderDTO.getServiceId() != null) {
            serviceOrder.setServiceId(serviceOrderDTO.getServiceId());
        }
        
        // If you still want to manage line items (if needed), update that as well
        serviceOrder.setLineItems(serviceOrderDTO.getLineItems());

        // Save the updated service order
        return serviceOrderRepository.save(serviceOrder);  // Save the updated entity
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

        private ServiceOrder convertToEntity(ServiceOrderDTO serviceOrderDTO) {
            return ServiceOrder.builder().mechanicId(serviceOrderDTO.getMechanicId())
            .customerFirstName(serviceOrderDTO.getCustomerFirstName())
           .customerLastName(serviceOrderDTO.getCustomerLastName())
           .vin(serviceOrderDTO.getVin())
           .serviceId(serviceOrderDTO.getServiceId())
            .dateCompleted(serviceOrderDTO.getDateCompleted())
            .dateRecieved(serviceOrderDTO.getDateRecieved())
           .totalCost(serviceOrderDTO.getTotalCost()).lineItems(serviceOrderDTO.getLineItems()).build();
        
    }


}
