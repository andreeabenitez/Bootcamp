package Java.Sheet03.ex02;

import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<Integer> cadenas = new ArrayList<>();

        cadenas.add(10);
        cadenas.add(20);
        cadenas.add(30);

        int suma = 0;
        for (int cadena : cadenas) {
            suma += cadena;
        }

        System.out.println("La suma de los números es: " + suma);
    }
}



