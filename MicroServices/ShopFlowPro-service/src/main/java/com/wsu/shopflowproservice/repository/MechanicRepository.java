package com.wsu.shopflowproservice.repository;

import com.wsu.shopflowproservice.model.Mechanic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MechanicRepository extends JpaRepository<Mechanic, String> {

    @Query(nativeQuery = true, value = "SELECT mechanic_id as mechanicId, first_name as firstName, last_name as lastName, specialization as specialization FROM mechanic where :search IS NULL OR (first_name = :search OR last_name = :search OR specialization = :search)")

    Page<Object[]> findBySearch(String search, Pageable pageable);

}
