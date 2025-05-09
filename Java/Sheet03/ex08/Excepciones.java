package Java.Sheet03.ex07;

public class Excepciones {
    public static void main(String[] args) {
        try{
            int result = division (10,0);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Este bloque se ejecuta siempre.");
        }
    
    }
    static int division (int dividendo, int divisor) {
        if (divisor == 0)
        throw new ArithmeticException ("No se puede dividir por cero");
        return dividendo / divisor;
    }
}