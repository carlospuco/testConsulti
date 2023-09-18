package com.carlospuco.citas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carlospuco.citas.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    boolean existsByEmail(String email);
}