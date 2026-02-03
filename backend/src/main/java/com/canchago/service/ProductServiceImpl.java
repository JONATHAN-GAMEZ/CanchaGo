package com.canchago.service;

import com.canchago.dto.ProductRequest;
import com.canchago.dto.ProductResponse;
import com.canchago.exception.ResourceAlreadyExistsException;
import com.canchago.mapper.ProductMapper;
import com.canchago.model.Product;
import com.canchago.model.ProductImage;
import com.canchago.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

  private final ProductRepository repository;
  private final StorageService storageService;

  @Override
  public ProductResponse create (ProductRequest request, List<MultipartFile> images) {
    if (repository.existsByname(request.getName())) {
      throw new ResourceAlreadyExistsException("El nombre ya está en uso");
    }

    List<String> imageUrls = storageService.saveFiles(images);

    Product product = Product.builder()
      .name(request.getName())
      .description(request.getDescription())
      .build();

    // Convertir URLs a ProductImage y agregarlas al producto
    imageUrls.forEach(url -> {
      ProductImage img = ProductImage.builder()
        .imageUrl(url)       // coincide con tu entidad
        .product(product)
        .build();
      product.getImages().add(img);
    });

    repository.save(product);

    // Mapear ProductImage -> String para la respuesta
    List<String> responseImages = product.getImages().stream()
      .map(ProductImage::getImageUrl)
      .toList();

    return ProductResponse.builder()
      .id(product.getId())
      .name(product.getName())
      .description(product.getDescription())
      .images(responseImages)
      .build();
  }


  @Override
  public List<ProductResponse> findAll() {
    return repository.findAll().stream().map(p ->
      ProductResponse.builder()
        .id(p.getId())
        .name(p.getName())
        .description(p.getDescription())
        .images(p.getImages().stream().map(ProductImage::getImageUrl).toList())
        .build()
    ).toList();
  }

  @Override
  public List<ProductResponse> findRandom() {

    List<Product> products = repository.findRandomProducts();

    return products.stream()
      .map(ProductMapper::toResponse)
      .toList();
  }

  @Override
  public ProductResponse findById(Long id) {
    Product product = repository.findById(id)
      .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

    return ProductMapper.toResponse(product);
  }

  @Override
  public Page<ProductResponse> findPaginated(int page, int size) {
    Page<Product> productPage =
      repository.findAll(PageRequest.of(page,size));
    return productPage.map(ProductMapper::toResponse);
  }


}
