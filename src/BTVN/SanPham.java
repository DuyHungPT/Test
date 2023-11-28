/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package BTVN;

/**
 *1. Xây dựng lớp SanPham: (0.5 điểm)
- Thuộc tính: ma, ten, theLoai, hang, so luong.
- Hàm tạo, set, get, toString.
- public String getTrangThai(String theLoai): theLoai = “Mới”: thì trạng thái Tốt, còn lại
Bình thường
 * @author buidu
 */
public class SanPham {
    private String ma;
    private String ten;
    private String theLoai;
    private String hang;
    private int soLuong;

    public SanPham() {
    }

    public SanPham(String ma, String ten, String theLoai, String hang, int soLuong) {
        this.ma = ma;
        this.ten = ten;
        this.theLoai = theLoai;
        this.hang = hang;
        this.soLuong = soLuong;
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

    public String getTheLoai() {
        return theLoai;
    }

    public void setTheLoai(String theLoai) {
        this.theLoai = theLoai;
    }

    public String getHang() {
        return hang;
    }

    public void setHang(String hang) {
        this.hang = hang;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    @Override
    public String toString() {
        return "SanPham{" + "ma=" + ma + ", ten=" + ten + ", theLoai=" + theLoai + ", hang=" + hang + ", soLuong=" + soLuong + '}';
    }


    
   public String getTrangThai(String theLoai){
       if(theLoai == "Moi"){
       return "trạng thái Tốt";
   }
    else{
    return "Binh Thuong";
       }
}
}
