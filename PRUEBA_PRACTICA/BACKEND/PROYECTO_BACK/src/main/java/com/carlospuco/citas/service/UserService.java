package com.carlospuco.citas.service;

import java.util.List;

import com.carlospuco.citas.entity.User;

public interface UserService {
    void loadDataFromEndpoint();
    List<User> getAllUsers();
    User getUserByEmail(String email);
    void deleteUser(Long id);
    User updateUser(Long userId, User updatedUser);
    User createUser(User newUser);
    User login(String email, String password);
}





