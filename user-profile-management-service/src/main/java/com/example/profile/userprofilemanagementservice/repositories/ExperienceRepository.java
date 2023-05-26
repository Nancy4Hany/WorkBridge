package com.example.profile.userprofilemanagementservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.profile.userprofilemanagementservice.models.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long>{
    
    public List<Experience> findByUser_id(Long userID);

}
