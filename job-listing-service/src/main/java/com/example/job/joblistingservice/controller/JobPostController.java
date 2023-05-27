package com.example.job.joblistingservice.controller;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.job.joblistingservice.DTO.JobPostDTO;
import com.example.job.joblistingservice.services.JobPostService;

@RestController
@RequestMapping("/jobposts")
public class JobPostController {

    private final JobPostService jobPostService;

    public JobPostController(JobPostService jobPostService) {
        this.jobPostService = jobPostService;
  
    }

   

    @PostMapping
    public JobPostDTO createJobPost(@RequestBody JobPostDTO jobPostDTO) {
        return jobPostService.createJobPost(jobPostDTO);
    }
    @GetMapping
    public List<JobPostDTO> getAllJobPosts() {
        return jobPostService.getAllJobPosts();
    }

    @GetMapping("/{id}")
    public JobPostDTO getJobPostById(@PathVariable Long id) {
        return jobPostService.getJobPostById(id);
    }

    @PutMapping("/{id}")
    public JobPostDTO updateJobPost(@PathVariable Long id, @RequestBody JobPostDTO jobPostDTO) {
        return jobPostService.updateJobPost(id, jobPostDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteJobPost(@PathVariable Long id) {
        jobPostService.deleteJobPost(id);
    }
}
