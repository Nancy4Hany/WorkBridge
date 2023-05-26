package com.example.job.joblistingservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.job.joblistingservice.model.JobPost;

@Repository
public interface JobPostRepository extends JpaRepository<JobPost, Long> {
    // Custom query methods if needed
}

