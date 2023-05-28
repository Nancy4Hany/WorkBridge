package com.example.candidate.candidatemanagementservice.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.candidate.candidatemanagementservice.model.JobApplication;
import com.example.candidate.candidatemanagementservice.services.JobApplicationService;
import com.example.candidate.candidatemanagementservice.services.FileStorageService;

@RestController
@RequestMapping("/job-application")
public class JobApplicationController {
    private final JobApplicationService jobApplicationService;
    private final FileStorageService fileStorageService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService, FileStorageService fileStorageService) {
        this.jobApplicationService = jobApplicationService;
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/submit")
    public JobApplication submitApplication(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("cv") MultipartFile cv) {
        // Save the CV file and get its path
        String cvPath = null;
        try {
            cvPath = fileStorageService.saveCVFile(cv);
        } catch (IOException e) {
            // Handle the exception (e.g., log the error, return an error response)
            e.printStackTrace();
            // You can throw a custom exception or return an error response here,
            // depending on your application's requirements
        }

        // Create a new JobApplication object and set the attributes
        JobApplication jobApplication = new JobApplication();
        jobApplication.setName(name);
        jobApplication.setEmail(email);
        jobApplication.setCvPath(cvPath);

        // Submit the application using the service
        return jobApplicationService.submitApplication(jobApplication);
    }

    @GetMapping("/submissions")
    public List<JobApplication> getAllSubmissions() {
        return jobApplicationService.getAllSubmissions();
    }
}
