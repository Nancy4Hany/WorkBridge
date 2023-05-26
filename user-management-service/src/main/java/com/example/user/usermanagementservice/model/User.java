package com.example.user.usermanagementservice.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;


// The class is annotated with @Entity to allow mapping to a database table.
@Entity
public class User implements UserDetails { 

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    private String id;
    @Column(unique = true)
    private String username;

    private String name; 

    @JsonIgnore
    private String password;

    private String role;

    private String profilePicture;
    private String phoneNumber;
    private String address;
    private String biography;
    private String skills;
    private String education;
    private String workExperience;
    private String socialMediaProfiles;
    private String availability;

    public String getSkills() {
        return skills;
    }


    public void setSkills(String skills) {
        this.skills = skills;
    }
    public String getEducation() {
        return education;
    }
    public void setEducation(String education) {
        this.education = education;
    }
    public String getWorkExperience() {
        return workExperience;
    }
    public void setWorkExperience(String workExperience) {
        this.workExperience = workExperience;
    }
    public String getSocialMediaProfiles() {
        return socialMediaProfiles;
    }
    public void setSocialMediaProfiles(String socialMediaProfiles) {
        this.socialMediaProfiles = socialMediaProfiles;
    }
    public String getAvailability() {
        return availability;
    }
    public void setAvailability(String availability) {
        this.availability = availability;
    }
    public User(String id, String username, String password, String role, String profilePicture, String phoneNumber,
             String biography, String skills, String education, String workExperience,
            String socialMediaProfiles, String availability) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.profilePicture = profilePicture;
        this.phoneNumber = phoneNumber;
        // this.address = address;
        this.biography = biography;
        this.skills = skills;
        this.education = education;
        this.workExperience = workExperience;
        this.socialMediaProfiles = socialMediaProfiles;
        this.availability = availability;
    }

    public String getBiography() {
        return biography;
    }


    public void setBiography(String biography) {
        this.biography = biography;
    }
    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }


    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getProfilePicture() {
        return profilePicture;
    }


    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }


    public User() {
     
    }


    public User(String id, String username, String password, String role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }


    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User id(String id) {
        setId(id);
        return this;
    }

    public User username(String username) {
        setUsername(username);
        return this;
    }

    public User password(String password) {
        setPassword(password);
        return this;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList(Arrays.asList(new SimpleGrantedAuthority(this.role)));
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }


    @Override
    public boolean isAccountNonLocked() {
        return true;
    }


    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }


    @Override
    public boolean isEnabled() {
        return true;
    }



}
