package com.wsu.shopflowproservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wsu.shopflowproservice.model.ServiceType;

import java.util.List;
import java.util.Optional;

public interface ServiceTypeRepository extends JpaRepository<ServiceType, Integer> {

    Optional<ServiceType> findByServiceId(Integer serviceId);

    @Query("SELECT s FROM services s WHERE s.serviceId = :serviceId")
    List<ServiceType> findAllByServiceId(@Param("serviceId") Integer serviceId);

}