/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Day15;


public class QuanAo {
    private String ma,ten;
    private int loai;
    private int size;
    private double gia;

    public QuanAo() {
    }

    public QuanAo(String ma, String ten, int loai, int size, double gia) {
        this.ma = ma;
        this.ten = ten;
        this.loai = loai;
        this.size = size;
        this.gia = gia;
    }

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public int getLoai() {
        return loai;
    }

    public void setLoai(int loai) {
        this.loai = loai;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public double getGia() {
        return gia;
    }

    public void setGia(double gia) {
        this.gia = gia;
    }

    @Override
    public String toString() {
        return "QuanAo{" + "ma=" + ma + ", ten=" + ten + ", loai=" + loai + ", size=" + size + ", gia=" + gia + '}';
    }

   
    
    public String getTrangThai(){
        if(gia > 5000){
            return "Dat";
        }
        else{
            return "Binh Thuong";
        }
    }
}
