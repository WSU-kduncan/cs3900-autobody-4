package com.wsu.shopflowproservice.service;

import com.wsu.shopflowproservice.dto.MechanicDTO;
import com.wsu.shopflowproservice.exception.DatabaseErrorException;
import com.wsu.shopflowproservice.exception.InvalidRequestException;
import com.wsu.shopflowproservice.model.Mechanic;
import com.wsu.shopflowproservice.repository.MechanicRepository;
import com.wsu.shopflowproservice.utilities.CommonUtils;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
@Slf4j
public class MechanicService {

    private final MechanicRepository mechanicRepository;

    /**
     * This method retrieves a page of mechanics based on search criteria.
     * @param search - allows for typeahead search by mechanic name or code
     * @param sortField - field used for sorting the results (default is mechanic code)
     * @param sortOrder - sort order (default is descending)
     * @param page - specifies which page of results to return
     * @param rpp - specifies the number of records per page
     * @return - Returns a Page of MechanicDTOs mapped from database results
     **/
    public Page<MechanicDTO> get(String search, String sortField, String sortOrder, Integer page, Integer rpp) {
        try {
            Page<Object[]> mechanics = mechanicRepository.findBySearch(search, PageRequest.of(page - 1, rpp, CommonUtils.sort(sortField, sortOrder)));
            return mechanics.map(mechanic -> MechanicDTO.builder()
                    .mechanicId((String) mechanic[0])
                    .firstName((String) mechanic[1])
                    .lastName((String) mechanic[2])
                    .specialization((String) mechanic[3])
                    .build());
        } catch (Exception e) {
            log.error("Failed to retrieve mechanics. search: {}, sortField: {}, sortOrder: {}, page: {}, rpp: {}, Exception: {}",
                    search, sortField, sortOrder, page, rpp, e);
            throw new DatabaseErrorException("Failed to retrieve mechanics", e);
        }
    }

    /**
     * Creates a new Mechanic entity based on the provided DTO.
     * @param mechanicDTO - the details of the mechanic to create
     * @return - the saved MechanicDTO object
     **/
    public MechanicDTO save(MechanicDTO mechanicDTO) {
        if (mechanicRepository.existsById(mechanicDTO.getMechanicId())) {
            throw new InvalidRequestException("Mechanic already exists with this code.");
        }
        try {
            Mechanic mechanic = mapToEntity(mechanicDTO);
            mechanic.setMechanicId(mechanicDTO.getMechanicId());
            return mapToDto(mechanicRepository.save(mechanic));
        } catch (Exception e) {
            log.error("Failed to add mechanic. mechanic Id: {}, Exception: {}", mechanicDTO.getMechanicId(), e);
            throw new DatabaseErrorException("Failed to add mechanic.", e);
        }
    }

    /**
     * Updates a mechanic entity by its code.
     * @param mechanicId - the unique code of the mechanic
     * @param mechanicDTO - the details to update
     * @return - the updated mechanic entity
     **/
    public Mechanic update(String mechanicId, MechanicDTO mechanicDTO) {
        if (!mechanicRepository.existsById(mechanicId)) {
            throw new InvalidRequestException("Invalid mechanic code.");
        }
        try {
            Mechanic mechanic = mapToEntity(mechanicDTO);
            mechanic.setMechanicId(mechanicId);
            return mechanicRepository.save(mechanic);
        } catch (Exception e) {
            log.error("Failed to update mechanic, mechanicCode: {}. Exception: {}", mechanicId, e);
            throw new DatabaseErrorException("Failed to update mechanic", e);
        }
    }

    /**
     * Deletes a mechanic by its code.
     * @param id - the code of the mechanic to delete
     **/
    public void delete(String id) {
        if (!mechanicRepository.existsById(id)) {
            throw new InvalidRequestException("Invalid mechanic Id.");
        }
        try {
            mechanicRepository.deleteById(id);
        } catch (Exception e) {
            log.error("Failed to delete mechanic, mechanicId: {}. Exception: {}", id, e);
            throw new DatabaseErrorException("Failed to delete mechanic", e);
        }
    }

    /**
     * Maps a MechanicDTO to a Mechanic entity.
     **/
    private Mechanic mapToEntity(MechanicDTO mechanicDTO) {
        return Mechanic.builder()
                .firstName(mechanicDTO.getFirstName())
                .lastName(mechanicDTO.getLastName())
                .specialization(mechanicDTO.getSpecialization())
                .build();
    }

    /**
     * Maps a Mechanic entity to a MechanicDTO.
     **/
    private MechanicDTO mapToDto(Mechanic mechanic) {
        return mechanic != null ? MechanicDTO.builder()
                .mechanicId(mechanic.getMechanicId())
                .firstName(mechanic.getFirstName())
                .lastName(mechanic.getLastName())
                .specialization(mechanic.getSpecialization())
                .build() : null;

    } 
}
