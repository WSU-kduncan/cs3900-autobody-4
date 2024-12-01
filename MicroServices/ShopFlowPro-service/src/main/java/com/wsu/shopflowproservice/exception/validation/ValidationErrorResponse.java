package com.wsu.shopflowproservice.exception.validation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ValidationErrorResponse {

    private String entity;
    private List<ValidationError> errors;
}
