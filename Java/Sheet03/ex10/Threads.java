package Java.Sheet03.ex10;

public class Threads {
    public static void main(String[] args) {
        Thread hilo = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Número: " + i);
                try {
                    Thread.sleep(1000); 
                } catch (InterruptedException e) {
                    System.out.println("El hilo fue interrumpido.");
                }
            }
        });
        hilo.start();
    }
}
