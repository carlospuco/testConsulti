package components;

public class LogicaReordenar {
    public String reordenarCadena(String frase, String palabraReemplazo) {
        // Eliminar espacios y reemplazarlos con la palabra ingresada
        String fraseSinEspacios = frase.replace(" ", palabraReemplazo);

        // Revertir la cadena
        StringBuilder reverso = new StringBuilder(fraseSinEspacios).reverse();

        return reverso.toString();
    }
}
