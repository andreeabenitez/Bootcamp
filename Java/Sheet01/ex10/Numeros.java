package Java.Sheet01.ex10;
import java.util.Scanner;

public class Numeros {
    public static void main(String[] args) {
        // Generar un número aleatorio entre 1 y 100
        int numero = (int) Math.random();

        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt(); // 0

        System.out.println("Adivine el número (entre 1 y 100): ");

        while (true) {
            n = scanner.nextInt();

            if (n == numero) {
                System.out.println("Acertaste");
                break;

            } else {
                System.out.println("vuelve a intentarlo");

            }

            }
        scanner.close();
        }
    }

    /* 
public class Numeros {
    public static void main(String[] args) {
        int numero = (int) (Math.random() * 100) + 1;

        Scanner scanner = new Scanner(System.in);
        int n = 0; 

        System.out.println("Adivine el número (entre 1 y 100): ");

        while (true) {
            n = scanner.nextInt();

            if (n < numero) {
                System.out.println("El número es mayor. Intenta de nuevo:");
            } else if (n > numero) {
                System.out.println("El número es menor. Intenta de nuevo:");
            } else {
                System.out.println("¡Acertaste! El número era: " + numero);
                break; // Salir del bucle cuando el usuario adivine
            }
        }

        scanner.close(); // Cerrar el scanner
    }
}
    */ 