package com.example.user_recruiter_event_bus.userrecruitereventbus.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/events")
public class EventController {
    private final List<String> microserviceUrls = Arrays.asList("http://localhost:8801", "http://localhost:8806");
    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping
    public ResponseEntity<?> receiveEvent(@RequestBody Map<String, Object> event) {
        System.out.println("--EVENT BUS-- RECEIVED EVENT OF TYPE: " + event.get("type"));
        // event type like: "order_placed", "payment_received", or "item_shipped" in a an ordering system
        for (String url : microserviceUrls) {
            System.out.println("--EVENT BUS-- FORWARDING TO MICROSERVICE AT: " + url);
            restTemplate.postForLocation(url + "/events", event);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}


