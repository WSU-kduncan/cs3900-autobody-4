package com.wsu.shopflowproservice.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "ServiceOrder")
@IdClass(ServiceOrderLineItemId.class)
public class ServiceOrderLineItem {

    @Id
    @Column(name = "ServiceOrderID")
    private Integer serviceOrderId;
    @Id
    @Column(name = "ServiceCost")
    private BigDecimal serviceCost; 
}
