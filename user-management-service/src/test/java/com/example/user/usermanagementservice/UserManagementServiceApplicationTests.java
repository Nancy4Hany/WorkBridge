package com.example.user.usermanagementservice;

import com.example.user.usermanagementservice.model.User;
import com.example.user.usermanagementservice.repositories.userRepository;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.testcontainers.containers.MySQLContainer;
// import org.testcontainers.junit.jupiter.Container;
// import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

// @Testcontainers
@SpringBootTest
// @ContextConfiguration(initializers = UserManagementServiceIntegrationTests.Initializer.class)
@DataJpaTest
class UserManagementServiceApplicationTests {
	// @Container
    private static final MySQLContainer<?> mySQLContainer = new MySQLContainer<>("mysql:8.0");
	@Autowired
    private userRepository userRepository;

    @BeforeAll
    static void beforeAll() {
        mySQLContainer.start();
    }

    @AfterAll
    static void afterAll() {
        mySQLContainer.stop();
    }

	@Test
	void contextLoads() {
	}

	@Test
    void testCreateUser() {
        // Create a new user
        User user = new User();
        user.setUsername("testuser");
        userRepository.save(user);

        // Retrieve the user from the database
        User savedUser = userRepository.findByUsername("testuser").orElse(null);

        // Assertions
        assertNotNull(savedUser);
        assertEquals("testuser", savedUser.getUsername());
    }

	static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
            TestPropertyValues.of(
                    "spring.datasource.url=" + mySQLContainer.getJdbcUrl(),
                    "spring.datasource.username=" + mySQLContainer.getUsername(),
                    "spring.datasource.password=" + mySQLContainer.getPassword()
            ).applyTo(configurableApplicationContext.getEnvironment());
        }
    }

}
