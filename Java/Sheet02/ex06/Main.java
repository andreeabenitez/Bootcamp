package Java.Sheet02.ex06;

public class Main {
    public static void main(String[] args) {
        Direccion direccion = new Direccion ("Calle", "Malaga", 29190);
        Persona persona = new Persona ("Carlos", 18, direccion);
        persona.mostrarDetalles();
    }
}
