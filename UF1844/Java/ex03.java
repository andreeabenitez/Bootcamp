package Java;
import java.util.Scanner;
// Ej 3 Estructuras de control variadas
public class ex03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe un numero entero: ");
        //ingreso un input por teclado
        int n = scanner.nextInt();
        System.out.println("El numero ingresado es: " + n);
        if (n % 2 == 0) {
            System.out.println("El número es par");
        } else {
            System.out.println("El número es impar");
        }
    }
}