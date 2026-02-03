package com.canchago.repository;

import com.canchago.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
  boolean existsByname(String name);

  @Query(value = "SELECT * FROM products ORDER BY RAND() LIMIT 10", nativeQuery = true)
  List<Product> findRandomProducts();

  Optional<Product> findById(Long id);

  Page<Product> findAll(Pageable pageable);
}
