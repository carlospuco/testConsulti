import components.LogicaReordenar;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Ingresar una frase
        System.out.print("Ingrese una frase: ");
        String frase = scanner.nextLine();

        // Ingresar la palabra de reemplazo
        System.out.print("Ingrese palabra de reemplazo: ");
        String palabraReemplazo = scanner.nextLine();

        // Crear una instancia de la clase LogicaReordenar
        LogicaReordenar logica = new LogicaReordenar();

        // Obtener el resultado y mostrarlo
        String resultado = logica.reordenarCadena(frase, palabraReemplazo);

        System.out.println("Salida:");
        System.out.println(resultado);
    }
}