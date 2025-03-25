
// package com.mentorlink.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import com.mentorlink.model.User;
// import com.mentorlink.service.UserService;

// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "*") // allow React calls from anywhere (for dev)
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @PostMapping("/register")
//     public User register(@RequestBody User user) {
//         return userService.createUser(user);
//     }

//     @GetMapping("/{username}")
//     public User getUser(@PathVariable String username) {
//         return userService.getUserByUsername(username);
//     }

//     // more endpoints: login, update, delete...
// }

package com.mentorlink.controller;

import com.mentorlink.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getUser() {
        return userService.getUser();
    }
}
