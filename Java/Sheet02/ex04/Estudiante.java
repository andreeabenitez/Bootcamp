package Java.Sheet02.ex04;

public class Estudiante extends Persona {
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
}

