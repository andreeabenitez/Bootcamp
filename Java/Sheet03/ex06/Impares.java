package Java.Sheet03.ex06;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;

public class Impares {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(10);
        numeros.add(15);
        numeros.add(20);
        numeros.add(25);

        System.out.println("Lista original " + numeros);

        Iterator<Integer> iterador = numeros.iterator();
        while (iterador.hasNext()) {
            int numero = iterador.next();
        if (numero % 2 != 0) {
            iterador.remove();
        }
    }
    System.out.println("Lista después de eliminar impares: " + numeros);

}
}
