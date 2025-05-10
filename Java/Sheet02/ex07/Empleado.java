package Java.Sheet02.ex07;

public class Empleado extends Persona {
    private static int contadorEmpleados = 0;

    public Empleado (String nombre, int edad) {
        super (nombre, edad);
        contadorEmpleados++;
            }
    public static int getContadorEmpleados() {
        return contadorEmpleados;
    }
}
