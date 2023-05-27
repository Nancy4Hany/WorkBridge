package main.java.com.example.user_recruiter_event_bus.userrecruitereventbus.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
public class EventBusService {
    private final List<String> microserviceUrls;

    public EventBusService() {
        // Initialize the microservice URLs
        this.microserviceUrls = new ArrayList<>(Arrays.asList("http://localhost:8801", "http://localhost:8806"));
    }

    public void forwardEvent(Map<String, Object> event) {
        System.out.println("--EVENT BUS-- RECEIVED EVENT OF TYPE: " + event.get("type"));
        RestTemplate restTemplate = new RestTemplate();
        for (String url : microserviceUrls) {
            System.out.println("--EVENT BUS-- FORWARDING TO MICROSERVICE AT: " + url);
            restTemplate.postForLocation(url + "/events", event);
        }
    }
}
