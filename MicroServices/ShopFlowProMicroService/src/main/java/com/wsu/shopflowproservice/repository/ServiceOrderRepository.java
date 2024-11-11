package com.wsu.shopflowproservice.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wsu.shopflowproservice.dto.ServiceOrderDTO;
import com.wsu.shopflowproservice.model.ServiceOrder;

public interface ServiceOrderRepository extends JpaRepository<ServiceOrder, Integer> {

    @Query(nativeQuery = true, value = "Select s.ServiceOrderID as serviceOrderId, c.CustomerFirstName as customerFirstName, " +
            "c.CustomerLastName as customerLastName, m.MID as mechanicId, s.VIN as VIN, s.ServiceID as serviceId, " +
            "s.DateRecieved as dateRecieved, s.DateCompleted as dateCompleted, s.ServiceCost as serviceCost, " +
            "INNER JOIN mechanic m on m.MID = s.MID " +
            "WHERE (:customerLastName IS NULL OR c.CustomerLastName = :customerLastName) " +
            "AND (:dateCompleted IS NULL OR s.DateCompleted = :dateCompleted)")
            Page<Object[]> findBySearch(String customerLastName, String VIN, Integer serviceOrderId, Pageable pageable);

            ServiceOrder save(ServiceOrderDTO serviceOrder);
}
