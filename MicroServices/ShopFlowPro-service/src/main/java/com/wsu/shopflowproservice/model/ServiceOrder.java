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
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
@Table(name = "service_order")
public class ServiceOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_order_id")
    private Integer serviceOrderId;
    @Column(name = "vin")
    private String VIN;
    @Column(name = "mid")
    private Integer mechanicId;
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
