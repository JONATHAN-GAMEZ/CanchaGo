package com.canchago.mapper;

import com.canchago.dto.ProductResponse;
import com.canchago.model.Product;
import com.canchago.model.ProductImage;

import java.util.stream.Collectors;

public class ProductMapper {

  public static ProductResponse toResponse(Product product) {

    return new ProductResponse(
      product.getId(),
      product.getName(),
      product.getDescription(),
      product.getImages()
        .stream()
        .map(ProductImage::getImageUrl)
        .collect(Collectors.toList())
    );
  }
}

