package com.mentorlink.controller;

import com.mentorlink.model.Mentor;
import com.mentorlink.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentor")
public class MentorController {

    @Autowired
    private MentorRepository mentorRepository;

    @PostMapping("/")
    public Mentor createMentor(@RequestBody Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @PutMapping("/{id}")
    public Mentor updateMentor(@PathVariable Long id, @RequestBody Mentor updatedMentor) {
        return mentorRepository.findById(id).map(mentor -> {
            mentor.setName(updatedMentor.getName());
            mentor.setEmail(updatedMentor.getEmail());
            mentor.setExpertise(updatedMentor.getExpertise());
            return mentorRepository.save(mentor);
        }).orElseThrow(() -> new RuntimeException("Mentor not found"));
    }
}
