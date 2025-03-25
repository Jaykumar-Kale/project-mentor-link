package com.mentorlink.controller;

import com.mentorlink.model.Admin;
import com.mentorlink.repository.AdminRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // ✅ 1. Create Admin (POST)
    // @PostMapping
    // public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
    // return ResponseEntity.ok(adminRepository.save(admin));
    // }

    // ✅ 2. Get All Admins (GET)
    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmins() {
        return ResponseEntity.ok(adminRepository.findAll());
    }

    // ✅ 3. Get Admin by ID (GET)
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Optional<Admin> admin = adminRepository.findById(id);
        return admin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ 4. Update Admin (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin updatedAdmin) {
        return adminRepository.findById(id)
                .map(admin -> {
                    admin.setName(updatedAdmin.getName());
                    admin.setEmail(updatedAdmin.getEmail());
                    admin.setRole(updatedAdmin.getRole());
                    return ResponseEntity.ok(adminRepository.save(admin));
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ 5. Delete Admin (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        if (adminRepository.existsById(id)) {
            adminRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<?> createAdmin(@RequestBody Admin admin) {
        // Check if an admin with this email already exists
        Optional<Admin> existingAdmin = adminRepository.findByEmail(admin.getEmail());
        if (existingAdmin.isPresent()) {
            return ResponseEntity.badRequest().body("Error: Admin with email " + admin.getEmail() + " already exists!");
        }

        // Save new admin if email is unique
        Admin savedAdmin = adminRepository.save(admin);
        return ResponseEntity.ok(savedAdmin);
    }

}

// package com.mentorlink.controller;

// import com.mentorlink.model.Admin;
// import com.mentorlink.repository.AdminRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/admin")
// @CrossOrigin("*")
// public class AdminController {

// @Autowired
// private AdminRepository adminRepository;

// @PostMapping("/login")
// public String login(@RequestBody Admin admin) {
// Admin dbAdmin = adminRepository.findByUsername(admin.getUsername());
// if (dbAdmin != null && dbAdmin.getPassword().equals(admin.getPassword())) {
// return "Login successful";
// }
// return "Invalid credentials";
// }

// @PostMapping("/register")
// public Admin register(@RequestBody Admin admin) {
// return adminRepository.save(admin);
// }
// }
