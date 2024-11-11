package com.wsu.shopflowproservice.controller;

import com.wsu.shopflowproservice.dto.ServiceResponseDTO;
import com.wsu.shopflowproservice.dto.MechanicDTO;
import com.wsu.shopflowproservice.exception.InvalidRequestException;
import com.wsu.shopflowproservice.service.MechanicService;
import com.wsu.shopflowproservice.utilities.Constants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.Map;

import static com.wsu.shopflowproservice.utilities.Constants.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mechanics")
public class MechanicController {

    private final MechanicService mechanicService;

    /** 
     * This endpoint retrieves a page of mechanics based on the given filter and pagination.
     * @param search - optional, allows typeahead search by mechanic's name, code, or status
     * @param page - optional, specifies the page number (default value is 1)
     * @param rpp - optional, specifies results per page (default value is 10)
     * @param sortField - optional, specifies the field to sort results by (default is mechanicCode)
     * @param sortOrder - optional, specifies sort order (default is Descending)
     * @return - ServiceResponseDTO which includes a list of mechanics and pagination info with a success message
     **/
    @GetMapping
    public ResponseEntity<ServiceResponseDTO> getAllMechanics(@RequestParam(required = false) String search,
                                                              @RequestParam(required = false, defaultValue = "1") Integer page,
                                                              @RequestParam(required = false, defaultValue = "10") Integer rpp,
                                                              @RequestParam(required = false, defaultValue = "mechanicId") String sortField,
                                                              @RequestParam(required = false, defaultValue = Constants.DESC) String sortOrder) {
        Page<MechanicDTO> mechanicDTOPage = mechanicService.get(search, sortField, sortOrder, page, rpp);
        return new ResponseEntity<>(ServiceResponseDTO.builder()
                .meta(Map.of(MESSAGE, "Successfully retrieved mechanics.", PAGE_COUNT, mechanicDTOPage.getTotalPages(), RESULT_COUNT, mechanicDTOPage.getTotalElements()))
                .data(mechanicDTOPage.getContent()).build(), HttpStatus.OK);
    }

    /**
     * This endpoint creates a new mechanic in the database.
     * @param mechanicDTO - payload containing mechanic details
     * @return - ServiceResponseDTO with HTTP status and the newly created mechanic details
     **/
    @PostMapping
    public ResponseEntity<ServiceResponseDTO> save(@RequestBody @Valid MechanicDTO mechanicDTO) {
        if (!StringUtils.hasLength(mechanicDTO.getId())) {
            throw new InvalidRequestException("Mechanic code must be provided.");
        }
        return new ResponseEntity<>(ServiceResponseDTO.builder()
                .meta(Map.of(MESSAGE, "Successfully added mechanic"))
                .data(mechanicService.save(mechanicDTO)).build(), HttpStatus.CREATED);
    }

    /**
     * This endpoint updates a mechanic's details by mechanic code.
     * @param mechanicId - mechanic's unique code
     * @param mechanicDTO - payload containing updated mechanic details
     * @return - HTTP status with the updated mechanic DTO
     **/
    @PutMapping("/{mechanicId}")
    public ResponseEntity<ServiceResponseDTO> update(@PathVariable Integer mechanicId,
                                                     @RequestBody @Valid MechanicDTO mechanicDTO) {
        return new ResponseEntity<>(ServiceResponseDTO.builder()
                .meta(Map.of(MESSAGE, "Mechanic updated successfully"))
                .data(mechanicService.update(mechanicId, mechanicDTO)).build(), HttpStatus.OK);
    }

    /**
     * This endpoint deletes a mechanic by mechanic code.
     * @param code - the code of the mechanic to be deleted
     * @return - HTTP status confirming the deletion
     **/
    @DeleteMapping("/{id}")
    public ResponseEntity<ServiceResponseDTO> deleteMechanic(@PathVariable String id) {
        mechanicService.delete(id);
        return new ResponseEntity<>(ServiceResponseDTO.builder()
                .meta(Map.of(MESSAGE, "Mechanic deleted successfully")).build(), HttpStatus.OK);
    } 

    
}
