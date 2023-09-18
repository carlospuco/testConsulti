package components;

public class ContadorDigitos {
    // Método para contar los dígitos de un número entero.
    public static int contarDigitos(long numero) {
        int contador = 0; // Inicializa el contador de dígitos.

        // Utiliza un bucle while para contar los dígitos.
        while (numero != 0) {
            numero /= 10; // Divide el número por 10 para quitar el último dígito.
            contador++; // Incrementa el contador de dígitos.
        }

        return contador; // Devuelve el número de dígitos contados.
    }
}
