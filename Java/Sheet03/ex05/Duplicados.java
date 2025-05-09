package Java.Sheet03.ex05;

import java.util.ArrayList;
import java.util.HashSet;

public class Duplicados {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        numeros.add(10);

        System.out.println("Lista original " + numeros);
        HashSet<Integer> unique = new HashSet<>(numeros);
        System.out.println("Lista sin duplicados" + unique);
    }
}
