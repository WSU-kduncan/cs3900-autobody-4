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
import com.wsu.shopflowproservice.repository.ServiceTypeRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class ServiceTypeService {

    private final ServiceTypeRepository serviceRepository;

    public List<ServiceTypeDTO> get(Integer serviceID) {
        
    }

    public List<ServiceTypeDTO> mapToDTO(List<Service> services) {
        if (CollectionUtils.isEmpty(services)) {
            return Collections.emptyList();
        }
        return services.stream().map(service -> ServiceTypeDTO.builder().serviceID(service.getServiceId()).serviceName(service.getServicename()).active(service.isActive()).build()).collect(Collectors.toList());
    }
}