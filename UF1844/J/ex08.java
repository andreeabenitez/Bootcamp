package UF1844.J;

import java.util.Scanner;

public class ex08 {
    public static void main(String[] args) {
        
    Scanner scanner = new Scanner(System.in);
    System.out.println("Ingresa un número del 1 al 7");
        int p = scanner.nextInt();
        switch (p) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("error");
        }
        scanner.close();
    }
}
