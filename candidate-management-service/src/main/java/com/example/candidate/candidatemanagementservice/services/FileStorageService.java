package com.example.candidate.candidatemanagementservice.services;

import java.io.File;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {
    @Value("${file.upload-dir}") // Configure the file upload directory in application.properties
    private String uploadDir;

    public String saveCVFile(MultipartFile cv) throws IOException {
        String fileName = StringUtils.cleanPath(cv.getOriginalFilename());
        String filePath = uploadDir + File.separator + fileName;

        // Create the upload directory if it doesn't exist
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Save the CV file to the specified path
        File dest = new File(filePath);
        cv.transferTo(dest);

        return filePath;
    }
}
