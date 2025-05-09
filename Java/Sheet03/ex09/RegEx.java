package Java.Sheet03.ex09;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegEx {
    public static void main(String[] args) {
        // Ejemplos de cadenas
        String correoValido = "test@example.com";
        String correoInvalido = "adiasfd.com";

        // Expresión regular para validar correos electrónicos
        String regex = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";

        // Compilar la expresión regular
        Pattern pattern = Pattern.compile(regex);

        // Validar el correo válido
        Matcher matcherValido = pattern.matcher(correoValido);
        System.out.println(correoValido + " es válido? " + matcherValido.matches());

        // Validar el correo inválido
        Matcher matcherInvalido = pattern.matcher(correoInvalido);
        System.out.println(correoInvalido + " es válido? " + matcherInvalido.matches());
    }
}