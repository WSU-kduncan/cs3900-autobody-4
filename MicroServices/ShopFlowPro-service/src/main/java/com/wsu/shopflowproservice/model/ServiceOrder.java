package com.wsu.shopflowproservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
@Table(name = "service_order")
public class ServiceOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_order_id")
    private Integer serviceOrderId;
    @Column(name = "vin")
    private String vin;
    @Column(name = "mechanic_id")
    private Integer mechanicId;
    @Column(name = "service_id")
    private Integer serviceId;
    @Column(name = "date_recieved")
    private Date dateRecieved;
    @Column(name = "date_completed")
    private Date dateCompleted;
    @Column(name = "customer_first_name")
    private String customerFirstName;
    @Column(name = "customer_last_name")
    private String customerLastName;
    @Column(name = "service_cost")
    private Float totalCost;
    @JoinTable(name = "service_order_line_item", joinColumns =
    @JoinColumn(name = "service_order_id"), inverseJoinColumns =
    @JoinColumn(name = "service_id"))
    @ManyToMany
    private Set<ServiceType> lineItems;
    
    
}
