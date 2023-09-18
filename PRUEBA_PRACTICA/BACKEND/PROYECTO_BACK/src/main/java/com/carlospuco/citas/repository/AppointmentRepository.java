package com.carlospuco.citas.repository;


import com.carlospuco.citas.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}