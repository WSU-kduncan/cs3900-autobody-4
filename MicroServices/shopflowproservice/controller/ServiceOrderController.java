package com.wsu.shopflowproservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wsu.shopflowproservice.dto.ServiceOrderDTO;
import com.wsu.shopflowproservice.dto.ServiceResponseDTO;
import com.wsu.shopflowproservice.service.ServiceOrderService;

import io.micrometer.core.ipc.http.HttpSender.Response;
import lombok.RequiredArgsConstructor;

import static com.wsu.shopflowproservice.utilities.Constants.MESSAGE;
import static com.wsu.shopflowproservice.utilities.Constants.PAGE_COUNT;
import static com.wsu.shopflowproservice.utilities.Constants.RESULT_COUNT;

import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/serviceOrders")
public class ServiceOrderController {

    private final ServiceOrderService serviceOrderService;

    /**
     * This endpoint is used to get details of serviceOrder via the serviceOrderid
     * @param serviceOrderId - id used to get serviceORder details
     * @return - ServiceResponseDTO which contains details of serviceOrder
     */
    @GetMapping(value = "{serviceOrderId}")
    public ResponseEntity<ServiceResponseDTO> getServiceOrder(@PathVariable Integer serviceOrderId) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Service Order retrieved successfully"))
        .data(serviceOrderService.get(serviceOrderId)).build(), HttpStatus.OK);
    }

    /**
     * This endpoint used for add a new serviceOrder
     * @param serviceOrder - serviceOrder
     * @return - ServiceResponseDTO which include serviceOrder saved entity
     */
    @PostMapping
    public ResponseEntity<ServiceResponseDTO> addServiceOrder(@RequestBody ServiceOrderDTO serviceOrder) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "ServiceOrder added successfully."))
        .data(ServiceOrderService.add(serviceOrder)).build(), HttpStatus.CREATED);
    }

    /**
     * This endpoint used for update existing serviceOrders
     * @param serviceOrderId - serviceOrderId used to update existing serviceOrder
     * @param serviceOrder - serviceOrder payload contains updated serviceOrder
     * @return - ServiceResponseDTO which include serviceOrder updated entity model class.
     */
    //
    @PutMapping(value = "{serviceOrderId}")
    public ResponseEntity<ServiceResponseDTO> updateServiceOrder(@PathVariable Integer serviceOrderId, @RequestBody ServiceOrderDTO serviceOrder) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "ServiceOrder updated successfully"))
        .data(ServiceOrderService.update(serviceOrderId, serviceOrder)).build(), HttpStatus.OK);
    }

    @DeleteMapping("/{serviceOrderId}")
    public ResponseEntity<ServiceResponseDTO> deleteServiceOrder(@PathVariable Integer serviceOrderId) {
        serviceOrderService.delete(serviceOrderId);
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "ServiceOrder deleted successfully")).build(), HttpStatus.OK);
    }
}
