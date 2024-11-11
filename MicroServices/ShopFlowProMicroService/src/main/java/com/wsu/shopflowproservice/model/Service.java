package com.wsu.workorderproservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity(name = "service")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Service {
    @Id
    @Column(name = "ServiceID")
    private int code;
    @Column(name = "ServiceName")
    private String name;
}
