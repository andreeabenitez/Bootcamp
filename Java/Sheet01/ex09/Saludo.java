package Java.Sheet01.ex09;

import java.util.Scanner;

public class Saludo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe su nombre: ");
        String nombre = scanner.nextLine();
        System.out.println("Hola " + nombre);
        scanner.close();
    }
    
}
