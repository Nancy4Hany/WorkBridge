package com.example.job.joblistingservice.sorter;

import com.example.job.joblistingservice.DTO.JobPostDTO;
import com.example.job.joblistingservice.strategy.JobPostSortStrategy;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class JobPostSorter {

    public List<JobPostDTO> sortJobPosts(List<JobPostDTO> jobPosts, JobPostSortStrategy sortStrategy) {
        Collections.sort(jobPosts, new JobPostComparator(sortStrategy));
        return jobPosts;
    }

    private static class JobPostComparator implements Comparator<JobPostDTO> {

        private final JobPostSortStrategy sortStrategy;

        public JobPostComparator(JobPostSortStrategy sortStrategy) {
            this.sortStrategy = sortStrategy;
        }

        @Override
        public int compare(JobPostDTO jobPost1, JobPostDTO jobPost2) {
            return sortStrategy.compare(jobPost1, jobPost2);
        }
    }
}
