package Java.Sheet02.ex06;

    
public class Persona {
    private String nombre;
    private int edad;
    private Direccion direccion;

    public Persona(String nombre, int edad, Direccion direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + nombre + ", Edad: " + edad);
        System.out.println("Direccion " + direccion);
    }

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public int getEdad() {
    return edad;
}

public void setEdad(int edad) {
    this.edad = edad;
}
}
