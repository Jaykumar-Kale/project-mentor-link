

package com.mentorlink.controller;

import com.mentorlink.model.Admin;
import com.mentorlink.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
        Admin dbAdmin = adminRepository.findByUsername(admin.getUsername());
        if (dbAdmin != null && dbAdmin.getPassword().equals(admin.getPassword())) {
            return "Login successful";
        }
        return "Invalid credentials";
    }

    @PostMapping("/register")
    public Admin register(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }
}
