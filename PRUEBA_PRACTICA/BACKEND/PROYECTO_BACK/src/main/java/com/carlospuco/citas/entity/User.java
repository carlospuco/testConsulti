package com.carlospuco.citas.entity;


import jakarta.persistence.*;

import lombok.*;

@Data
@SequenceGenerator(name = "users_sequence", sequenceName = "users_sequence", allocationSize = 1)
@Table(name = "users")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private String password;
    @Column(unique = true)
    private String email;
    private String image;

    // getters y setters
}

