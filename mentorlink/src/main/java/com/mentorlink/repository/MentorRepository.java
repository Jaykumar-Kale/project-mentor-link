
// src/main/java/com/mentorlink/repository/MentorRepository.java
package com.mentorlink.repository;

import com.mentorlink.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MentorRepository extends JpaRepository<Mentor, Long> {
}

// package com.mentorlink.repository;

// import com.mentorlink.model.Mentor;
// import org.springframework.data.jpa.repository.JpaRepository;

// public interface MentorRepository extends JpaRepository<Mentor, Long> {
// // Additional query methods (if needed) can be declared here.
// }
