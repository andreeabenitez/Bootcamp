package Java.Sheet04.ex01;


public class Libro {
    private Integer ISBN;
    private String titulo;
    private Integer numPag;
    private String autor;
    private Boolean prestado;

    public Libro(Integer ISBN, String titulo, Integer numPag, String autor, Boolean prestado) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.numPag = numPag;
    this.autor = autor;
    this.prestado = prestado;
    }

    public void prestar() {
        if (prestado == true) {
            System.out.println("Imposible el préstamo");
        } else {
           this.prestado = true;
           System.out.println("El lubro ha sido prestado");
        }
    }

    public void devolver() {
        if (prestado == true) {
           this.prestado = false;
           System.out.println("El libro ha sido devuelto");
        } else {
            System.out.println("El libro no estaba prestado");
        }
    }

    public void imprimir(){
        int precio = 10;
     int resultado = numPag * precio;
     System.out.println("El precio total del libro es: " + resultado);
    }
    public void mostrarDetalles(){
    System.out.println("El libro " + ISBN + "con título" +  titulo + "y autor" + autor + "tiene" + numPag + "páginas y" + (prestado ? "prestado." : "disponible."));
    }
    public static void main(String[] args) {
        Libro libro = new Libro(12345, "Harry Potter", 300, "J.K.Rowling", true);
        libro.mostrarDetalles();
        libro.prestar();
        


    }
    }
    
