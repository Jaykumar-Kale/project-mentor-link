
package com.mentorlink.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.mentorlink.model.User;
import com.mentorlink.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // allow React calls from anywhere (for dev)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    // more endpoints: login, update, delete...
}
