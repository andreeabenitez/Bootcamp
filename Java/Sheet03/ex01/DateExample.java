package Java.Sheet03.ex01;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {
        Date fechaActual = new Date();
        SimpleDateFormat formato1 = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formato2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat formato3 = new SimpleDateFormat("EEEE, dd MMMM yyyy");
        SimpleDateFormat formato4 = new SimpleDateFormat("hh:mm a");

        System.out.println(formato1.format(fechaActual));
        System.out.println(formato2.format(fechaActual));
        System.out.println(formato3.format(fechaActual));
        System.out.println(formato4.format(fechaActual));

        
    }
}
