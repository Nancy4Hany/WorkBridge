// package com.example.job_listing_event_bus.job_listing_event_bus.controller;

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.Map;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestTemplate;

// @RestController
// @RequestMapping("/events")
// public class EventController {
//     ArrayList<String> microserviceUrls = new ArrayList<>(Arrays.asList("http://localhost:8801", "http://localhost:8806"));
//     RestTemplate restTemplate = new RestTemplate();

//     public ResponseEntity<?> receiveEvent(@RequestBody Map<String, Object> event) {
//         System.out.println("--EVENT BUS -- RECEIVED EVENT OF TYPE: " + event.get("type"));
//         for (String url : microserviceUrls) {
//             System.out.println("--EVENT BUS-- FORWARDING TO MICROSERVICE AT: " + url);
//             restTemplate.postForLocation(url + "/events", event);
//         }
//         return new ResponseEntity<>(HttpStatus.OK);
//     }
// }
