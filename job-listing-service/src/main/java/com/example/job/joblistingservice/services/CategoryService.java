package com.example.job.joblistingservice.services;

import org.springframework.stereotype.Service;

import com.example.job.joblistingservice.repositories.CategoryRepository;
import com.example.job.joblistingservice.model.Category;
import com.example.job.joblistingservice.DTO.CategoryDTO;

import java.util.ArrayList;
import java.util.List;
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOs = new ArrayList<>();
        for (Category category : categories) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(category.getId());
            categoryDTO.setName(category.getName());
            categoryDTOs.add(categoryDTO);
        }
        return categoryDTOs;
    }

    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());

        Category savedCategory = categoryRepository.save(category);

        CategoryDTO savedCategoryDTO = new CategoryDTO();
        savedCategoryDTO.setId(savedCategory.getId());
        savedCategoryDTO.setName(savedCategory.getName());

        return savedCategoryDTO;
    }

    public CategoryDTO getCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(category.getId());
            categoryDTO.setName(category.getName());
            return categoryDTO;
        }
        return null;
    }

    public CategoryDTO updateCategory(Long id, CategoryDTO categoryDTO) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            category.setName(categoryDTO.getName());
            Category updatedCategory = categoryRepository.save(category);
            CategoryDTO updatedCategoryDTO = new CategoryDTO();
            updatedCategoryDTO.setId(updatedCategory.getId());
            updatedCategoryDTO.setName(updatedCategory.getName());
            return updatedCategoryDTO;
        }
        return null;
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
