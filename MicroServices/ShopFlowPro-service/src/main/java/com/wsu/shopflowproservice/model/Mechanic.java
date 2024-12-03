package com.wsu.shopflowproservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "Mechanic")
public class Mechanic {

    @Id
    @Column(name = "mechanic_id")
    private String mechanicId;

    @Column(name = "mechanic_first_name", nullable = false)
    private String firstName;

    @Column(name = "mechanic_last_name", nullable = false)
    private String lastName;

    @Column(name = "specialization", nullable = false)
    private String specialization;
}
