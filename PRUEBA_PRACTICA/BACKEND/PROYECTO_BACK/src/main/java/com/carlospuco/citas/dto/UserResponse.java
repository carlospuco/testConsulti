package com.carlospuco.citas.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.carlospuco.citas.entity.User;
import lombok.Data;

@Data
public class UserResponse {
    @JsonProperty("users")
    private User[] users;

    @JsonProperty("total")
    private int total;

    @JsonProperty("skip")
    private int skip;

    @JsonProperty("limit")
    private int limit;

    // Getters y setters
}