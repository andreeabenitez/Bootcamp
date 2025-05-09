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
           System.out.println("El libro ha sido prestado");
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
        System.out.println("El libro " + ISBN + " con título " + titulo + " y autor " + autor + " tiene " + numPag + " páginas y está " + (prestado ? "prestado." : "disponible."));
    }

    public static void main(String[] args) {
        Libro libro = new Libro(12345, "Harry Potter", 300, "J.K.Rowling", false);
        libro.mostrarDetalles();
        libro.prestar();
        libro.mostrarDetalles();
        libro.devolver();
        libro.mostrarDetalles();
        libro.imprimir();


    }
}
    
/*  public class Libro {
    // Atributos privados (encapsulados)
    private Integer ISBN;
    private String titulo;
    private Integer numPag;
    private String autor;
    private Boolean prestado;

    // Constructor vacío
    public Libro() {
        this.ISBN = 0;
        this.titulo = "";
        this.numPag = 0;
        this.autor = "";
        this.prestado = false;
    }

    // Constructor por defecto
    public Libro(Integer ISBN, String titulo, Integer numPag, String autor, Boolean prestado) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.numPag = numPag;
        this.autor = autor;
        this.prestado = prestado;
    }

    // Métodos getter y setter (encapsulación)
    public Integer getISBN() {
        return ISBN;
    }

    public void setISBN(Integer ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Integer getNumPag() {
        return numPag;
    }

    public void setNumPag(Integer numPag) {
        this.numPag = numPag;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Boolean getPrestado() {
        return prestado;
    }

    public void setPrestado(Boolean prestado) {
        this.prestado = prestado;
    }

    // Método para prestar el libro
    public void prestar() {
        if (prestado) {
            System.out.println("Imposible el préstamo. El libro ya está prestado.");
        } else {
            this.prestado = true;
            System.out.println("El libro ha sido prestado.");
        }
    }

    // Método para devolver el libro
    public void devolver() {
        if (prestado) {
            this.prestado = false;
            System.out.println("El libro ha sido devuelto.");
        } else {
            System.out.println("El libro no estaba prestado.");
        }
    }

    // Método para calcular el coste de impresión
    public void imprimir(int costePorPagina) {
        int resultado = numPag * costePorPagina;
        System.out.println("El coste total de imprimir el libro es: " + resultado + "€");
    }

    // Método toString personalizado
    @Override
    public String toString() {
        return "El libro (" + ISBN + ") con título \"" + titulo + "\" y autor \"" + autor + "\" tiene " + numPag +
                " páginas y " + (prestado ? "está prestado." : "no está prestado.");
    }

    // Método principal para probar la clase
    public static void main(String[] args) {
        // Crear un libro usando el constructor por defecto
        Libro libro = new Libro(12345, "Harry Potter", 300, "J.K. Rowling", false);

        // Mostrar detalles del libro
        System.out.println(libro);

        // Intentar prestar el libro
        libro.prestar();
        System.out.println(libro);

        // Intentar devolver el libro
        libro.devolver();
        System.out.println(libro);

        // Calcular el coste de impresión
        libro.imprimir(10); // Suponiendo un coste de 10€ por página
    }
} 
*/
