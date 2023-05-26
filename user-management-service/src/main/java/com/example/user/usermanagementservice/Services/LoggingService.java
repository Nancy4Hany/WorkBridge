package com.example.user.usermanagementservice.Services;

import org.springframework.stereotype.Service;

@Service
public class LoggingService {
   public void Log(String data) {
    System.out.println("LOGGER: "+ data);
   }
}
