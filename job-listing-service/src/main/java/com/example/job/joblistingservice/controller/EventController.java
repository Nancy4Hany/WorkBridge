package com.example.job.joblistingservice.controller;

public class EventController {
    
}

// public responseentity recieveEvent(@RequestBody() Map<String, Object> event){
//     String type = event.get("type").toString();
//     Sout("--postmicroservice -- recieved event of type"+type); 
//     switch(type){
//     case "USER CREATED" : 
//     User user = new User(); 
//     Map<String,Object>data = ((Map<String,Object>event.get("data"))); //casting to map 
//     user.setId(data.getId("id").toString()); //casting to map 
//     break; 
//     }