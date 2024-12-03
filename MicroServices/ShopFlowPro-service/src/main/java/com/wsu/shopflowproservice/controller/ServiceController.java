package com.wsu.shopflowproservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wsu.shopflowproservice.dto.ServiceResponseDTO;
import com.wsu.shopflowproservice.service.ServiceService;
import static com.wsu.shopflowproservice.utilities.Constants.MESSAGE;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
@Slf4j
public class ServiceController {
    private final ServiceService serviceService;

    @GetMapping
    public ResponseEntity<ServiceResponseDTO> getServices(@RequestParam(required = false) boolean isActive) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Services retrieved successfully."))
                .data(serviceService.get(isActive)).build(), HttpStatus.OK);
    }
}
