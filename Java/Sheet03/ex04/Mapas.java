package Java.Sheet03.ex04;
import java.util.HashMap;

public class Mapas {
    public static void main(String[] args) {
    HashMap<String, Integer> personas = new HashMap<>();
    
    personas.put("Juan", 30);
    personas.put("Ana", 25);
    personas.put("Luis", 35);



    for (String nombre : personas.keySet()){
        System.out.println("Nombre: " + nombre + ", Edad: " + personas.get(nombre));
    }
}
}