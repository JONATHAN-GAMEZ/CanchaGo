package com.canchago.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface StorageService {
  List<String> saveFiles(List<MultipartFile> files);
}
