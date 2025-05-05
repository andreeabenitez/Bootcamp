package Java.Sheet01.ex08;

import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
     Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe una palabra: ");
        String palabra = scanner.nextLine();

        if (esPalindromo(palabra)) {
            System.out.println("La palabra \"" + palabra + "\" es un palíndromo.");
        } else {
            System.out.println("La palabra \"" + palabra + "\" no es un palíndromo.");
        }
        scanner.close();
    }
    public static boolean esPalindromo(String palabra) {
        palabra = palabra.toLowerCase();

        String reverso = new StringBuilder(palabra).reverse().toString();
        return palabra.equals(reverso);
    }
}
    
