package com.example.job.joblistingservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.job.joblistingservice.DTO.JobPostDTO;
import com.example.job.joblistingservice.services.JobPostService;
import com.example.job.joblistingservice.sorter.JobPostSorter;
import com.example.job.joblistingservice.strategy.DateSortStrategy;
import com.example.job.joblistingservice.strategy.JobPostSortStrategy;
import com.example.job.joblistingservice.strategy.RelevanceSortStrategy;

@RestController
@RequestMapping("/jobposts")
public class JobPostController {

    private final JobPostService jobPostService;
    private final JobPostSorter jobPostSorter;

    public JobPostController(JobPostService jobPostService, JobPostSorter jobPostSorter) {
        this.jobPostService = jobPostService;
        this.jobPostSorter = jobPostSorter;
    }

    @GetMapping
    public List<JobPostDTO> getAllJobPosts(@RequestParam(required = false) String sortStrategy) {
        List<JobPostDTO> jobPosts = jobPostService.getAllJobPosts();

        if (sortStrategy != null) {
            JobPostSortStrategy jobPostSortStrategy;

            switch (sortStrategy) {
                case "date":
                    jobPostSortStrategy = new DateSortStrategy();
                    break;
                case "relevance":
                    jobPostSortStrategy = new RelevanceSortStrategy();
                    break;
                // Add other sorting strategies as needed
                default:
                    // Handle unsupported sorting strategy
                    throw new IllegalArgumentException("Unsupported sort strategy: " + sortStrategy);
            }

            List<JobPostDTO> sortedJobPosts = jobPostSorter.sortJobPosts(jobPosts, jobPostSortStrategy);
            return sortedJobPosts;
        }

        return jobPosts;
    }

    @PostMapping
    public JobPostDTO createJobPost(@RequestBody JobPostDTO jobPostDTO) {
        return jobPostService.createJobPost(jobPostDTO);
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
