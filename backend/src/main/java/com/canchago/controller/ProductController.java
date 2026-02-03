package com.canchago.controller;

import com.canchago.dto.ProductRequest;
import com.canchago.dto.ProductResponse;
import com.canchago.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
  private final ProductService service;

  @GetMapping
  public List<ProductResponse> list() {
    return service.findAll();
  }

  @PostMapping(consumes = "multipart/form-data")
  @ResponseStatus(HttpStatus.CREATED)
  public ProductResponse create(
    @Valid @RequestPart("name") String name,
    @Valid @RequestPart("description") String description,
    @RequestPart("images") List<MultipartFile> images
  ){
    ProductRequest req = new ProductRequest();
    req.setName(name);
    req.setDescription(description);
    return  service.create(req, images);
  }

  @GetMapping("/random")
  public ResponseEntity<List<ProductResponse>> getRandomProducts() {
    return ResponseEntity.ok(service.findRandom());
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProductResponse> findById(@PathVariable Long id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @GetMapping
  public ResponseEntity<Page<ProductResponse>> findPaginated(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size
  ){
    return ResponseEntity.ok(service.findPaginated(page, size));
  }

}
