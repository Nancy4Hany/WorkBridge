package com.example.job.joblistingservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.job.joblistingservice.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Custom query methods if needed
}

