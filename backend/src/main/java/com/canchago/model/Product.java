package com.canchago.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
  name = "products",
  uniqueConstraints = @UniqueConstraint(columnNames = "name")
)
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 150)
  private String name;

  @Column(nullable = false, length = 1000, columnDefinition = "TEXT")
  private String description;

  @Builder.Default
  @OneToMany(
    mappedBy = "product",
    cascade = CascadeType.ALL,
    orphanRemoval = true
  )
  private List<ProductImage> images = new ArrayList<>();

  /*public void addImage(ProductImage image) {
    images.add(image);
    image.setProduct(this);
  }

  public void removeImage(ProductImage image) {
    images.remove(image);
    image.setProduct(null);
  }*/
}
