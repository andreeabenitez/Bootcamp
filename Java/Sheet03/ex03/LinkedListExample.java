package Java.Sheet03.ex03;
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
    LinkedList<String> cadenas = new LinkedList<>();

    cadenas.add("Hola");
    cadenas.add("Mundo");
    cadenas.add("Java");

    for (String cadena : cadenas) {
        System.out.println(cadena);
    }
}
}

    
