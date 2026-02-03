package com.canchago.service;

import com.canchago.dto.ProductRequest;
import com.canchago.dto.ProductResponse;
import org.jspecify.annotations.Nullable;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
  ProductResponse create(ProductRequest request, List<MultipartFile> images);
  List<ProductResponse> findAll();
  List<ProductResponse> findRandom();

  ProductResponse findById(Long id);

  Page<ProductResponse> findPaginated(int page, int size);
}
