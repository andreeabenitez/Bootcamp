package Java.Sheet02.ex07;

public class Main {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 25);
        Empleado empleado2 = new Empleado("Ana", 17);

        empleado1.mostrarDetalles();
        System.out.println("¿Es mayor de edad? " + Utilidades.esMayorDeEdad(empleado1));

        empleado2.mostrarDetalles();
        System.out.println("¿Es mayor de edad? " + Utilidades.esMayorDeEdad(empleado2));

        System.out.println("Total de empleados creados: " + Empleado.getContadorEmpleados());
    }
}