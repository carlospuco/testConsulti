package com.carlospuco.citas.service.implement;
import com.carlospuco.citas.dto.UserResponse;
import com.carlospuco.citas.entity.User;
import com.carlospuco.citas.repository.UserRepository;
import com.carlospuco.citas.service.UserService;
import com.carlospuco.citas.utils.validations.EmailAlreadyExistsException;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
@Slf4j
@Service
public class UserServiceImpl implements UserService {
    private final String endpointUrl = "https://dummyjson.com/users"; // URL del endpoint
    private final UserRepository userRepository;
    private final RestTemplate restTemplate;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
    }

    @Override
    @Transactional
    @PostConstruct
    public void loadDataFromEndpoint() {
        try {
            // Realizar una solicitud HTTP GET al endpoint y obtener la respuesta como un objeto UserResponse
            UserResponse userResponse = restTemplate.getForObject(endpointUrl, UserResponse.class);

            // Obtener la matriz de usuarios de la respuesta
            User[] users = userResponse.getUsers();

            // Guardar los usuarios en la base de datos si no existen ya
            for (User user : users) {
                if (userRepository.findByEmail(user.getEmail()) == null) {
                    userRepository.save(user);
                }
            }

            System.out.println("Datos cargados desde el endpoint y guardados en la base de datos.");
        } catch (Exception e) {
            System.err.println("Error al cargar datos desde el endpoint: " + e.getMessage());
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    @Override
    public User updateUser(Long userId, User updatedUser) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setAge(updatedUser.getAge());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setImage(updatedUser.getImage());
            existingUser.setEmail(updatedUser.getEmail());
            // Guardar el usuario actualizado en la base de datos
            return userRepository.save(existingUser);
        } else {
            log.info("El usuario no existe");
        }
        return null;
    }

    @Override
    public User createUser(User newUser) {
        // Verificar si el correo electrónico ya está en uso
        if (userRepository.existsByEmail(newUser.getEmail())) {
            throw new EmailAlreadyExistsException("El correo electrónico ya está en uso.");
        }
        return userRepository.save(newUser);
    }

    @Override
    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            if (password.equals(user.getPassword())) {
                return user;
            }
        }
        return null;
    }

}
