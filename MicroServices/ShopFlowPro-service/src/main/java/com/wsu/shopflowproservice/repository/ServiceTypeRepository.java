package com.wsu.shopflowproservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.shopflowproservice.model.ServiceType;

import java.util.List;

public interface ServiceTypeRepository extends JpaRepository<ServiceType, Integer> {

}