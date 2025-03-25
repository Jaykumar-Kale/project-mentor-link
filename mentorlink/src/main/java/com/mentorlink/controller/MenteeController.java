
package com.mentorlink.controller;

import com.mentorlink.model.Mentee;
import com.mentorlink.repository.MenteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentee")
public class MenteeController {

    @Autowired
    private MenteeRepository menteeRepository;

    @PutMapping("/{id}")
    public Mentee updateMentee(@PathVariable Long id, @RequestBody Mentee updatedMentee) {
        return menteeRepository.findById(id).map(mentee -> {
            mentee.setName(updatedMentee.getName());
            mentee.setEmail(updatedMentee.getEmail());
            mentee.setCourse(updatedMentee.getCourse());
            return menteeRepository.save(mentee);
        }).orElseThrow(() -> new RuntimeException("Mentee not found"));
    }
}






// package com.mentorlink.controller;

// import com.mentorlink.model.Mentee;
// import com.mentorlink.repository.MenteeRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/mentees")
// //@CrossOrigin("*")
// public class MenteeController {

//     @Autowired
//     private MenteeRepository menteeRepository;

//     @PostMapping
//     public Mentee createMentee(@RequestBody Mentee mentee) {
//         return menteeRepository.save(mentee);
//     }

//     @GetMapping
//     public List<Mentee> getAllMentees() {
//         return menteeRepository.findAll();
//     }

    

//     @GetMapping("/{id}")
//     public Mentee getMentee(@PathVariable Long id) {
//         return menteeRepository.findById(id).orElse(null);
//     }

//     @PutMapping("/{id}")
//     public Mentee updateMentee(@PathVariable Long id, @RequestBody Mentee updatedMentee) {
//         Mentee existing = menteeRepository.findById(id).orElse(null);
//         if (existing != null) {
//             existing.setName(updatedMentee.getName());
//             existing.setEmail(updatedMentee.getEmail());
//             existing.setCourse(updatedMentee.getCourse());
//             return menteeRepository.save(existing);
//         }
//         return null;
//     }

//     @DeleteMapping("/{id}")
//     public void deleteMentee(@PathVariable Long id) {
//         menteeRepository.deleteById(id);
//     }
// }


