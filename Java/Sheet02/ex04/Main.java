package Java.Sheet02.ex04;

// Idea para el main
public class Main {
public static void main(String[] args) {
Persona[] personas = {
new Estudiante("Ana", 20, "Ingeniería"),
new Empleado("Luis", 30, 50000),
new Persona("Marta", 40)
};
// Recorre el array para mostrar los detalles de los objetos y hacer uso del polimorfismo
 for (Persona persona : personas) {
            persona.mostrarDetalles();
            System.out.println();
        }
}
}
