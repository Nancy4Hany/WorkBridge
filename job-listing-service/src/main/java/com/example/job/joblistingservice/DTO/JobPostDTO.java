package com.example.job.joblistingservice.DTO;

import java.sql.Date;

public class JobPostDTO {

    private Long id;
    private String title;
    private Date date; 
    private String description;
    private CompanyDTO company;
    private RecruiterDTO recruiter;
    private CategoryDTO category;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public CompanyDTO getCompany() {
        return company;
    }
    public void setCompany(CompanyDTO company) {
        this.company = company;
    }
    public CategoryDTO getCategory() {
        return category;
    }
    public void setCategory(CategoryDTO category) {
        this.category = category;
    }
    public RecruiterDTO getRecruiter() {
        return recruiter;
    }
    public void setRecruiter(RecruiterDTO recruiter) {
        this.recruiter = recruiter;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    
    // Constructors, getters, and setters
}
