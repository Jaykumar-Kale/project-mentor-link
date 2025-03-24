

// package: com.mentorlink.controller

package com.mentorlink.controller;

import com.mentorlink.model.Mentor;
import com.mentorlink.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentors")
@CrossOrigin("*")
public class MentorController {

    @Autowired
    private MentorRepository mentorRepository;

    @PostMapping
    public Mentor createMentor(@RequestBody Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @GetMapping
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }
}



// package com.mentorlink.controller;

// import com.mentorlink.model.Mentor;
// import com.mentorlink.repository.MentorRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/mentors")
// public class MentorController {

//     @Autowired
//     private MentorRepository mentorRepository;

//     // Create a new mentor
//     @PostMapping
//     public Mentor createMentor(@RequestBody Mentor mentor) {
//         return mentorRepository.save(mentor);
//     }

//     // Retrieve all mentors
//     @GetMapping
//     public List<Mentor> getAllMentors() {
//         return mentorRepository.findAll();
//     }

//     // Retrieve a mentor by ID
//     @GetMapping("/{id}")
//     public Mentor getMentorById(@PathVariable Long id) {
//         return mentorRepository.findById(id).orElse(null);
//     }

//     // Update a mentor
//     @PutMapping("/{id}")
//     public Mentor updateMentor(@PathVariable Long id, @RequestBody Mentor updatedMentor) {
//         return mentorRepository.findById(id).map(mentor -> {
//             mentor.setName(updatedMentor.getName());
//             mentor.setExpertise(updatedMentor.getExpertise());
//             mentor.setEmail(updatedMentor.getEmail());
//             return mentorRepository.save(mentor);
//         }).orElse(null);
//     }

//     // Delete a mentor
//     @DeleteMapping("/{id}")
//     public void deleteMentor(@PathVariable Long id) {
//         mentorRepository.deleteById(id);
//     }
// }
