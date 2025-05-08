package Java.Sheet02.ex05;


public class Estudiante extends Persona implements Imprimible {
    private String grado;

    public Estudiante (String nombre, int edad, String grado) {
        super (nombre, edad);
        this.grado = grado;
    }
    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("Grado: " + grado);
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante:");
        mostrarDetalles();
    }
}


