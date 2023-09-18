package com.carlospuco.citas.service;

import java.util.List;
import com.carlospuco.citas.dto.AppointmentRequest;
import com.carlospuco.citas.entity.Appointment;

public interface AppointmentService {
    Appointment scheduleAppointment(AppointmentRequest appointmentRequest);
    List<Appointment> getAllAppointments();
    Appointment updateAppointment(Long appointmentId, Appointment updatedAppointment);
    Appointment getAppointmentById(Long appointmentId);
    void deleteAppointment(Long appointmentId);
}