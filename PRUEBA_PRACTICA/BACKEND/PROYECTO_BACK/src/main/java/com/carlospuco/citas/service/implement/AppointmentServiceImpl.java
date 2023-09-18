package com.carlospuco.citas.service.implement;

import java.util.List;
import java.util.UUID;
import com.carlospuco.citas.dto.AppointmentRequest;
import com.carlospuco.citas.entity.Appointment;
import com.carlospuco.citas.entity.User;
import com.carlospuco.citas.repository.AppointmentRepository;
import com.carlospuco.citas.repository.UserRepository;
import com.carlospuco.citas.service.AppointmentService;
import com.carlospuco.citas.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Slf4j
@Service
public class AppointmentServiceImpl implements AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public AppointmentServiceImpl(AppointmentRepository appointmentRepository, UserService userService,
        UserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.userService = userService;
        this.userRepository=userRepository;
    }


    @Override
    public Appointment scheduleAppointment(AppointmentRequest appointmentRequest) {
        User user = this.userRepository.findById(appointmentRequest.getUserId()).get();
        if (user != null) {
            String appointmentNumber = generateAppointmentNumber();
            Appointment appointment = new Appointment();
            appointment.setUser(user);
            appointment.setDateTime(appointmentRequest.getDateTime());
            appointment.setSpecialty(appointmentRequest.getSpecialty());
            appointment.setObservation(appointmentRequest.getObservation());
            appointment.setAppointmentNumber(appointmentNumber);
            appointmentRepository.save(appointment);
            return appointment;
        }else{
            throw new RuntimeException();
        }

    }
    @Override
    public Appointment updateAppointment(Long appointmentId, Appointment updatedAppointment) {
        // Verificar si la cita médica existe
        Appointment existingAppointment = getAppointmentById(appointmentId);
        if(existingAppointment!=null){
            // Actualizar los campos de la cita médica existente con la información de updatedAppointment
            existingAppointment.setDateTime(updatedAppointment.getDateTime());
            existingAppointment.setSpecialty(updatedAppointment.getSpecialty());
            existingAppointment.setObservation(updatedAppointment.getObservation());
            existingAppointment.setAppointmentNumber(updatedAppointment.getAppointmentNumber());
        }
        return appointmentRepository.save(existingAppointment);
    }
    @Override
    public Appointment getAppointmentById(Long appointmentId) {
        return appointmentRepository.findById(appointmentId).get();
    }

    private String generateAppointmentNumber() {
        return UUID.randomUUID().toString();
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
    @Override
    public void deleteAppointment(Long appointmentId) {
        Appointment appointment=getAppointmentById(appointmentId);
        if(appointment!=null){
            appointmentRepository.deleteById(appointmentId);
        }
        log.info("No se encontro la cita");

    }
}