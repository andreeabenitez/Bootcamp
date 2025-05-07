package Java.Sheet02.ex03;

public class Main {
    public static void main(String[] args) {
        Estudiante estudiante = new Estudiante("Pedro", 28, "Ingenieria");
        Persona persona = new Persona("Pedro", 28);
        estudiante.mostrarDetalles();
        persona.mostrarDetalles();
        
    }
}
