package Java;

public class ex07 {
    public static void main(String[] args) {
        
    System.out.println("Escribe dos números enteros");
        int s = scanner.nextInt();
        System.out.println("El primer número entero es: " + s);
        int a = scanner.nextInt();
        System.out.println("El segundo número entero es: " + a);
        if (s != 0 && s % a == 0) {
            System.out.println(" El resultado es: " + (s / a));
        } else {
            System.out.println("error");
        }
    }
    
}
