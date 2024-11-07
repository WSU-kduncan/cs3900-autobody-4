package com.wsu.workorderproservice.service;

import com.wsu.workorderproservice.repository.ServiceRepository;
import com.wsu.workorderproservice.dto.ServiceDTO;
import com.wsu.workorderproservice.model.Service;
import com.wsu.workorderproservice.exception.DatabaseErrorException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.cglib.core.CollectionUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public List<ServiceDTO> get(boolean isActive) {
        try {
            if (isActive) {
                return mapToDTO(serviceRepository.findByActive(true));
            }
            return mapToDTO(serviceRepository.findAll());
        } catch (Exception e) {
            log.error("Failed to retrieve services. Exception:", e);
            throw new DatabaseErrorException("Failed to retrieve services.", e);
        }
    }

    public List<ServiceDTO> mapToDTO(List<Service> services) {
        if (CollectionUtils.isEmpty(services)) {
            return Collections.emptyList();
        }
        return services.stream().map(service -> ServiceDTO.builder().serviceID(service.getServiceId()).serviceName(service.getServicename()).active(service.isActive()).build()).collect(Collectors.toList());
    }
}