package components;

import java.util.Scanner;

import java.util.Scanner;

public class InteraccionUsuario {
    private Scanner scanner;

    // Constructor que recibe un objeto Scanner para interactuar con el usuario.
    public InteraccionUsuario(Scanner scanner) {
        this.scanner = scanner;
    }

    // Método para obtener un número entero válido del usuario.
    public long obtenerNumero() {
        while (true) {
            System.out.print("Ingrese un número entero: ");
            if (scanner.hasNextLong()) { // Verifica si la entrada es un número entero.
                return scanner.nextLong(); // Devuelve el número ingresado.
            } else {
                System.out.println("Entrada no válida. Por favor, ingrese un número entero.");
                scanner.next(); // Limpia la entrada incorrecta del usuario.
            }
        }
    }

    // Método para preguntar al usuario si desea continuar.
    public boolean preguntarSiContinuar() {
        while (true) {
            System.out.print("¿Desea continuar? (S/N): ");
            String respuesta = scanner.next();

            if (respuesta.equalsIgnoreCase("S")) {
                return true; // El usuario desea continuar.
            } else if (respuesta.equalsIgnoreCase("N")) {
                return false; // El usuario desea finalizar.
            } else {
                System.out.println("Respuesta no válida. Por favor, ingrese 'S' o 'N'.");
            }
        }
    }
}

