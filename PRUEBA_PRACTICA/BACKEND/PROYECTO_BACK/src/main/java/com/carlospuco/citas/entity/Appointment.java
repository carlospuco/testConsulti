package com.carlospuco.citas.entity;
import jakarta.persistence.*;
import java.util.Date;
import lombok.Data;

@Data
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateTime;
    private String specialty;
    private String observation;
    private String appointmentNumber;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}