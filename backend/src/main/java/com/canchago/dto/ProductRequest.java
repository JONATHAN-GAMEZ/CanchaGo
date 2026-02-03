package com.canchago.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProductRequest {
  @NotBlank
  private String name;

  @NotBlank
  private String description;
}
