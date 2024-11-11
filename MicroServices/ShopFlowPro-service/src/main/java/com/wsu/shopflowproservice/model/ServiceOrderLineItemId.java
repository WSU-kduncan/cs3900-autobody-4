package com.wsu.shopflowproservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ServiceOrderLineItemId implements Serializable{

    private Integer serviceOrderId;
    
}
