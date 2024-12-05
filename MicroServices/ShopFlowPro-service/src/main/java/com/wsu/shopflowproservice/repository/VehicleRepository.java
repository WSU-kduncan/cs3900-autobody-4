package com.wsu.shopflowproservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wsu.shopflowproservice.model.Vehicle;

import jakarta.transaction.Transactional;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, String> {

    @Modifying
    @Transactional
    @Query(value = "INSERT IGNORE INTO vehicle (vin) VALUES (:vin)", nativeQuery = true)
    void insertIfNotExists(@Param("vin") String vin);
}
