package com.wsu.shopflowproservice.dto;

import java.util.Date;
import java.util.Set;

import com.wsu.shopflowproservice.model.ServiceOrderLineItem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ServiceOrderDTO {

    private Integer serviceOrderId;
    private String VIN;
    private Integer mechanicId;
    private Integer serviceId;
    private Date dateRecieved;
    private Date dateCompleted;
    private String customerFirstName;
    private String customerLastName;
    private Float serviceCost;
    private Set<ServiceOrderLineItem> lineItems;
}
