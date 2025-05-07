package Java.Sheet02.ex02;

public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona("Juan", 25);

        persona.mostrarDetalles();

        persona.setNombre("Carlos");
        persona.setEdad(30);

        System.out.println("\nDetalles modificados:");
        System.out.println("Nombre: " + persona.getNombre());
        System.out.println("Edad: " + persona.getEdad());
    }
}