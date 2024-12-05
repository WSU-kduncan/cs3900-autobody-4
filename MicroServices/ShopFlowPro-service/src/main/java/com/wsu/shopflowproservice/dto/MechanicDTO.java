package com.wsu.shopflowproservice.dto;

import jakarta.validation.constraints.NotBlank;
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
public class MechanicDTO {

    private String mechanicId;

    @NotBlank(message = "First Name must not be null or blank")
    private String firstName;

    @NotBlank(message = "Last Name must not be null or blank")
    private String lastName;

   

}