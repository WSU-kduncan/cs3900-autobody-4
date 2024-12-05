package com.wsu.shopflowproservice.repository;

import com.wsu.shopflowproservice.model.Mechanic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MechanicRepository extends JpaRepository<Mechanic, String> {

    @Query(nativeQuery = true, value = "SELECT mechanic_id as mechanicId, mechanic_first_name as firstName, mechanic_last_name as lastName FROM mechanic where :search IS NULL OR (mechanic_first_name = :search OR mechanic_last_name = :search)")

    Page<Object[]> findBySearch(String search, Pageable pageable);

}
