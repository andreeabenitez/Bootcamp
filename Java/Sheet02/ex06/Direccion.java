package Java.Sheet02.ex06;

public class Direccion {
    private String calle;
    private String ciudad;
    private int codigo;

    public Direccion (String calle, String ciudad, int codigo) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigo = codigo;
    }

    public String getCalle() {
        return calle;
    }
    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getCiudad(){
        return ciudad;
    }
    public void setCiudad(String ciudad){
    this.ciudad = ciudad;
    }
    public int getCodigo(){
        return codigo;
    }
    public void setCodigo(int codigo){
        this.codigo = codigo;
    }

    @Override
    public String toString(){
        return "Calle" + calle + "Ciudad" + ciudad + "Codigo" + codigo;
    }
}
