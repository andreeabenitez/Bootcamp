package Java.Sheet03.ex12;

import java.util.ArrayList;
import java.util.Collections;

public class Lambda {
    public static void main(String[] args) {
        
     ArrayList<String> cadena = new ArrayList<>();
        cadena.add("Apple");
        cadena.add("Banana");
        cadena.add("Cherry");

        Collections.sort(cadena, (s1, s2) -> s1.compareTo(s2));
        System.out.println("Lista ordenada: " + cadena);

 
    }
}