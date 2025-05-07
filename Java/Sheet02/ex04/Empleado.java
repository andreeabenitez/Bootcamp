package Java.Sheet02.ex04;

public class Empleado extends Persona {
    private int salario;

    public Empleado (String nombre, int edad, int salario) {
        super (nombre, edad);
        this.salario = salario;
    }
    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("Salario: " + salario);
    }
}
