package com.example.profile.userprofilemanagementservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class UserProfileManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserProfileManagementServiceApplication.class, args);
	}

}
