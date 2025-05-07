package Java.Sheet02.ex05;

public class Main {
    public static void main(String[] args) {
        Estudiante estudiante = new Estudiante("Juan", 20, "Ingeniería");
        Empleado empleado = new Empleado("Ana", 30, "Gerente");

        estudiante.imprimir();
        System.out.println();
        empleado.imprimir();
    }
}