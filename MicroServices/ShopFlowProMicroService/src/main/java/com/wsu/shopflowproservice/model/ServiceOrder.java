package com.wsu.shopflowproservice.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "ServiceOrder")
public class ServiceOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ServiceOrderID")
    private Integer serviceOrderId;
    @Column(name = "VIN")
    private String VIN;
    @Column(name = "MID")
    private Integer mechanicId;
    @Column(name = "ServiceID")
    private Integer serviceId;
    @Column(name = "DateRecieved")
    private Date dateRecieved;
    @Column(name = "DateCompleted")
    private Date dateCompleted;
    @Column(name = "CustomerFirstName")
    private String customerFirstName;
    @Column(name = "CustomerLastName")
    private String customerLastName;
    @Column(name = "ServiceCost")
    private Float serviceCost;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "serviceOrderID", updatable = false)
    private Set<ServiceOrderLineItem> lineItems;

}
