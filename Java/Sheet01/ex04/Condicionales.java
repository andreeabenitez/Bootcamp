package Java.Sheet01.ex04;

import java.util.Scanner;

public class Condicionales {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe un número entero: ");
        int n = scanner.nextInt();

        if (n > 0) {
            System.out.println("El número es positivo");
            
        } else if (n == 0) {
            System.out.println("El número es cero");
            
        } else { 
            System.out.println("El número es negativo");
            
        }
        scanner.close();
        }
      


    }

