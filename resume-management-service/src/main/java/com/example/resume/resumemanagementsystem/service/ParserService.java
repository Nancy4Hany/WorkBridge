package com.example.resume.resumemanagementsystem.service;

import org.springframework.web.multipart.MultipartFile;

import com.example.resume.resumemanagementsystem.service.ResponseWrapper;

public interface ParserService {

	ResponseWrapper parseResume(MultipartFile file);

}