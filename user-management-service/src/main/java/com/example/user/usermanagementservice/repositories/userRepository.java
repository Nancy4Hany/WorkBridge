package com.example.user.usermanagementservice.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.user.usermanagementservice.model.User;


@Repository
public interface userRepository extends JpaRepository<User, String>{
    public Optional<User> findByUsername(String username);
}