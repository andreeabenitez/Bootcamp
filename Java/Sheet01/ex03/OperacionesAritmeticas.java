package Java.Sheet01.ex03;
import java.util.Scanner;

public class OperacionesAritmeticas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe un numero entero: ");
        int n = scanner.nextInt();
        System.out.println("Escribe otro numero entero: ");
        int i = scanner.nextInt();

        int suma = n + i;
        int resta = n - i;
        int division = n/i;
        int multiplicacion = n * i;

        System.out.println("El resultao es " + suma);
        System.out.println("El resultao es " + resta);
        System.out.println("El resultao es " + division);
        System.out.println("El resultao es " + multiplicacion);

        scanner.close();

    }
    
}
