package Java.Sheet02.ex05;

public class Main {
    public static void main(String[] args) {
        Imprimible[] imprimibles = {
            new Estudiante("Ana", 20, "Ingeniería"),
            new Empleado("Luis", 30, 50000)
        };
        for (Imprimible imprimible : imprimibles) {
            imprimible.imprimir();
            System.out.println();
        }
    }
}