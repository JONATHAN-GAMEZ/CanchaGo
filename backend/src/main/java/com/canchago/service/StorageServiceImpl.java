package com.canchago.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class StorageServiceImpl implements StorageService {

  private final Path root = Paths.get("uploads");

  @Override
  public List<String> saveFiles(List<MultipartFile> files) {
    try {
      if (!Files.exists(root)) {
        Files.createDirectories(root);
      }
      List<String> urls = new ArrayList<>();

      for (MultipartFile file : files) {
        String original = file.getOriginalFilename().replace(" ", "_");
        String filename = UUID.randomUUID() + "-" + original;
        Files.copy(file.getInputStream(), root.resolve(filename));
        urls.add("uploads/" + filename);
      }

      return urls;
    } catch (IOException e) {
      throw  new RuntimeException("Error guardando imagenes", e);
    }
  }
}
