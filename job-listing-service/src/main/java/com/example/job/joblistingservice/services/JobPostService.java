package com.example.job.joblistingservice.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.job.joblistingservice.DTO.CategoryDTO;
import com.example.job.joblistingservice.DTO.CompanyDTO;
import com.example.job.joblistingservice.DTO.JobPostDTO;
import com.example.job.joblistingservice.DTO.RecruiterDTO;
import com.example.job.joblistingservice.model.Category;
import com.example.job.joblistingservice.model.Company;
import com.example.job.joblistingservice.model.JobPost;
import com.example.job.joblistingservice.model.Recruiter;
import com.example.job.joblistingservice.repositories.JobPostRepository;

@Service
public class JobPostService {

    private final JobPostRepository jobPostRepository;

    public JobPostService(JobPostRepository jobPostRepository) {
        this.jobPostRepository = jobPostRepository;
    }

    public JobPostDTO searchJobs(String search) {
        Optional<JobPost> posts = jobPostRepository.findByTitleOrDescriptionContaining(search, search);
        if (posts.isPresent()) {
            JobPost jobPost = posts.get();
            JobPostDTO jobPostDTO = new JobPostDTO();
            jobPostDTO.setId(jobPost.getId());
            jobPostDTO.setTitle(jobPost.getTitle());
            jobPostDTO.setDescription(jobPost.getDescription());
            // Assuming the associated entities (Category, Company, Recruiter) have appropriate DTO classes
            jobPostDTO.setCategory(convertToCategoryDTO(jobPost.getCategory()));
            jobPostDTO.setCompany(convertToCompanyDTO(jobPost.getCompany()));
            jobPostDTO.setRecruiter(convertToRecruiterDTO(jobPost.getRecruiter()));
            // Add any additional properties as needed
    
            return jobPostDTO;
        }
        return null; //or throw an exception if not found
    }

    public List<JobPostDTO> getAllJobPosts() {
        List<JobPost> jobPosts = jobPostRepository.findAll();
        List<JobPostDTO> jobPostDTOs = new ArrayList<>();
        for (JobPost jobPost : jobPosts) {
            JobPostDTO jobPostDTO = new JobPostDTO();
            jobPostDTO.setId(jobPost.getId());
            jobPostDTO.setTitle(jobPost.getTitle());
            jobPostDTO.setDescription(jobPost.getDescription());
            // Assuming the associated entities (Category, Company, Recruiter) have
            // appropriate DTO classes
            jobPostDTO.setCategory(convertToCategoryDTO(jobPost.getCategory()));
            jobPostDTO.setCompany(convertToCompanyDTO(jobPost.getCompany()));
            jobPostDTO.setRecruiter(convertToRecruiterDTO(jobPost.getRecruiter()));
            // Add any additional properties as needed
            jobPostDTOs.add(jobPostDTO);
        }
        return jobPostDTOs;
    }

    public JobPostDTO createJobPost(JobPostDTO jobPostDTO) {
        JobPost jobPost = new JobPost();
        jobPost.setTitle(jobPostDTO.getTitle());
        jobPost.setDescription(jobPostDTO.getDescription());
        // Assuming the associated entities (Category, Company, Recruiter) have
        // appropriate models
        jobPost.setCategory(convertToCategoryModel(jobPostDTO.getCategory()));
        jobPost.setCompany(convertToCompanyModel(jobPostDTO.getCompany()));
        jobPost.setRecruiter(convertToRecruiterModel(jobPostDTO.getRecruiter()));

        JobPost savedJobPost = jobPostRepository.save(jobPost);

        JobPostDTO savedJobPostDTO = new JobPostDTO();
        savedJobPostDTO.setId(savedJobPost.getId());
        savedJobPostDTO.setTitle(savedJobPost.getTitle());
        savedJobPostDTO.setDescription(savedJobPost.getDescription());
        // Assuming the associated entities (Category, Company, Recruiter) have
        // appropriate DTO classes
        savedJobPostDTO.setCategory(convertToCategoryDTO(savedJobPost.getCategory()));
        savedJobPostDTO.setCompany(convertToCompanyDTO(savedJobPost.getCompany()));
        savedJobPostDTO.setRecruiter(convertToRecruiterDTO(savedJobPost.getRecruiter()));
        // Add any additional properties as needed

        return savedJobPostDTO;
    }

    public JobPostDTO getJobPostById(Long id) {
        Optional<JobPost> jobPostOptional = jobPostRepository.findById(id);
        if (jobPostOptional.isPresent()) {
            JobPost jobPost = jobPostOptional.get();
            JobPostDTO jobPostDTO = new JobPostDTO();
            jobPostDTO.setId(jobPost.getId());
            jobPostDTO.setTitle(jobPost.getTitle());
            jobPostDTO.setDescription(jobPost.getDescription());
            // Assuming the associated entities (Category, Company, Recruiter) have
            // appropriate DTO classes
            jobPostDTO.setCategory(convertToCategoryDTO(jobPost.getCategory()));
            jobPostDTO.setCompany(convertToCompanyDTO(jobPost.getCompany()));
            jobPostDTO.setRecruiter(convertToRecruiterDTO(jobPost.getRecruiter()));
            // Add any additional properties as needed

            return jobPostDTO;
        }
        return null; // or throw an exception if not found
    }

    public JobPostDTO updateJobPost(Long id, JobPostDTO jobPostDTO) {
        Optional<JobPost> jobPostOptional = jobPostRepository.findById(id);
        if (jobPostOptional.isPresent()) {
            JobPost jobPost = jobPostOptional.get();
            jobPost.setTitle(jobPostDTO.getTitle());
            jobPost.setDescription(jobPostDTO.getDescription());
            // Assuming the associated entities (Category, Company, Recruiter) have
            // appropriate models
            jobPost.setCategory(convertToCategoryModel(jobPostDTO.getCategory()));
            jobPost.setCompany(convertToCompanyModel(jobPostDTO.getCompany()));
            jobPost.setRecruiter(convertToRecruiterModel(jobPostDTO.getRecruiter()));

            JobPost updatedJobPost = jobPostRepository.save(jobPost);

            JobPostDTO updatedJobPostDTO = new JobPostDTO();
            updatedJobPostDTO.setId(updatedJobPost.getId());
            updatedJobPostDTO.setTitle(updatedJobPost.getTitle());
            updatedJobPostDTO.setDescription(updatedJobPost.getDescription());
            // Assuming the associated entities (Category, Company, Recruiter) have
            // appropriate DTO classes
            updatedJobPostDTO.setCategory(convertToCategoryDTO(updatedJobPost.getCategory()));
            updatedJobPostDTO.setCompany(convertToCompanyDTO(updatedJobPost.getCompany()));
            updatedJobPostDTO.setRecruiter(convertToRecruiterDTO(updatedJobPost.getRecruiter()));
            // Add any additional properties as needed

            return updatedJobPostDTO;
        }
        return null; // or throw an exception if not found
    }

    public void deleteJobPost(Long id) {
        jobPostRepository.deleteById(id);
    }

    // Helper methods to convert between DTOs and models for associated entities
    private CategoryDTO convertToCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        // Add any additional properties as needed
        return categoryDTO;
    }

    private CompanyDTO convertToCompanyDTO(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(company.getId());
        companyDTO.setName(company.getName());
        // Add any additional properties as needed
        return companyDTO;
    }

    private RecruiterDTO convertToRecruiterDTO(Recruiter recruiter) {
        RecruiterDTO recruiterDTO = new RecruiterDTO();
        recruiterDTO.setId(recruiter.getId());
        recruiterDTO.setName(recruiter.getName());
        // Add any additional properties as needed
        return recruiterDTO;
    }

    private Category convertToCategoryModel(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(categoryDTO.getId());
        category.setName(categoryDTO.getName());
        // Add any additional properties as needed
        return category;
    }

    private Company convertToCompanyModel(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setId(companyDTO.getId());
        company.setName(companyDTO.getName());
        // Add any additional properties as needed
        return company;
    }

    private Recruiter convertToRecruiterModel(RecruiterDTO recruiterDTO) {
        Recruiter recruiter = new Recruiter();
        recruiter.setId(recruiterDTO.getId());
        recruiter.setName(recruiterDTO.getName());
        // Add any additional properties as needed
        return recruiter;
    }
}
