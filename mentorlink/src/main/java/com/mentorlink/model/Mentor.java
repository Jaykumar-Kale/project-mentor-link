
// package: com.mentorlink.model

package com.mentorlink.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mentor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String expertise;
}

// package com.mentorlink.model;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "mentors") // Optional: explicitly define table name
// public class Mentor {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;

// private String name;
// private String expertise;
// private String email;

// // Constructors
// public Mentor() {
// }

// public Mentor(String name, String expertise, String email) {
// this.name = name;
// this.expertise = expertise;
// this.email = email;
// }

// // Getters and setters
// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public String getExpertise() {
// return expertise;
// }

// public void setExpertise(String expertise) {
// this.expertise = expertise;
// }

// public String getEmail() {
// return email;
// }

// public void setEmail(String email) {
// this.email = email;
// }
// }
