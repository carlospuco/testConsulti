import components.ContadorDigitos;
import components.InteraccionUsuario;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean continuar = true;

        // Crear una instancia de la clase InteraccionUsuario para manejar interacciones con el usuario.
        InteraccionUsuario interaccion = new InteraccionUsuario(scanner);

        // Bucle principal para continuar o finalizar el programa.
        while (continuar) {
            // Obtener un número entero válido del usuario.
            long numero = interaccion.obtenerNumero();

            // Contar los dígitos del número.
            int contador = ContadorDigitos.contarDigitos(numero);

            // Mostrar el resultado.
            mostrarResultado(numero, contador);

            // Preguntar al usuario si desea continuar.
            continuar = interaccion.preguntarSiContinuar();
        }

        // Imprimir un mensaje de despedida al finalizar el programa.
        System.out.println("Fin del programa.");
    }

    private static void mostrarResultado(long numero, int contador) {
        System.out.println("El número " + numero + " tiene " + contador + " dígitos.");
    }
}


