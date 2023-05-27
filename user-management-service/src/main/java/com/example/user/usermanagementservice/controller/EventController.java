// package com.example.user.usermanagementservice.controller;
// import com.example.user_recruiter_event_bus.userrecruitereventbus.service.EventBusService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.Map;

// @RestController
// @RequestMapping("/events")
// public class EventController {
//     private final EventBusService eventBusService;

//     @Autowired
//     public EventController(EventBusService eventBusService) {
//         this.eventBusService = eventBusService;
//     }

//     @PostMapping
//     public ResponseEntity<?> receiveEvent(@RequestBody Map<String, Object> event) {
//         System.out.println("--USER MANAGEMENT SERVICE-- RECEIVED EVENT OF TYPE: " + event.get("type"));

//         // Perform mapping logic for USER CREATED event
//         if ("USER CREATED".equals(event.get("type"))) {
//             // Extract necessary data from the event and perform mapping logic
//             // For example:
//             // String userId = event.get("userId").toString();
//             // String username = event.get("username").toString();
//             // String userRole = event.get("userRole").toString();
//             // Perform mapping logic and store/update the recruiter table in the Job Posting and Listing Service
//         }

//         // Forward the event to the event bus
//         eventBusService.forwardEvent(event);

//         return new ResponseEntity<>(HttpStatus.OK);
//     }
// }
