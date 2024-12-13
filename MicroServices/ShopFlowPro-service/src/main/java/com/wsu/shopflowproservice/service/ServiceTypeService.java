package com.wsu.shopflowproservice.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.cglib.core.CollectionUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.wsu.shopflowproservice.dto.ServiceTypeDTO;
import com.wsu.shopflowproservice.exception.DatabaseErrorException;
import com.wsu.shopflowproservice.model.ServiceType;
import com.wsu.shopflowproservice.repository.ServiceTypeRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class ServiceTypeService {

    private final ServiceTypeRepository serviceRepository;

    public List<ServiceTypeDTO> get(Integer serviceID) {
    try {
        // Fetch matching services
        List<ServiceType> services = serviceRepository.findAllByServiceId(serviceID);
        
        // Convert entities to DTOs
        return services.stream()
                       .map(service -> ServiceTypeDTO.builder()
                           .serviceID(service.getServiceId())
                           .serviceName(service.getServiceName())
                           .build())
                       .collect(Collectors.toList());
    } catch (Exception e) {
        log.error("Error retrieving services by serviceID {}: {}", serviceID, e.getMessage());
        throw new DatabaseErrorException("Error fetching services.", e);
    }
}

public List<ServiceTypeDTO> getAll() {
    return serviceRepository.findAll().stream()
                            .map(service -> ServiceTypeDTO.builder()
                                .serviceID(service.getServiceId())
                                .serviceName(service.getServiceName())
                                .build())
                            .collect(Collectors.toList());
}



   
}