package com.wsu.workorderproservice.repository;

import com.wsu.workorderproservice.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, String> {

    List<Service> findByActive(boolean active);
}