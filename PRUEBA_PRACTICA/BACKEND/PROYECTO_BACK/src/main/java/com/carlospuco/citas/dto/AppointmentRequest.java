package com.carlospuco.citas.dto;

import java.sql.Date;
import lombok.Data;

@Data
public class AppointmentRequest {
    private Date dateTime;
    private String specialty;
    private String observation;
    private Long userId;


}