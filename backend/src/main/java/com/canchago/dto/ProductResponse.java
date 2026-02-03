package com.canchago.dto;


import lombok.*;



import java.util.List;

@Getter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
  private Long id;
  private String name;
  private String description;
  private List<String> images;
}
