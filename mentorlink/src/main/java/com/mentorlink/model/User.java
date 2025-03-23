
package com.mentorlink.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String role; // e.g. ADMIN, MENTOR, MENTEE

    // constructors, getters, setters...
}
