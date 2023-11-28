/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DayLab6;

/**
 *-	Thuộc tính: TenGV, namSinh, gioiTinh, bomon, loaiHopDong.
-	Hàm tạo, set, get, toString.
-	public String getStatus(boolean loaiHopDong): nếu loaiHopDong = true thì hiển thị full time, còn lại hiển thị parttime.

 * @author buidu
 */
public class GiangVien {
    private String tenGV;
    private int namSinh;
    private String gioiTinh;
    private String boMon;
    private boolean LoaiHopDong;

    public GiangVien() {
    }

    public GiangVien(String tenGV, int namSinh, String gioiTinh, String boMon, boolean LoaiHopDong) {
        this.tenGV = tenGV;
        this.namSinh = namSinh;
        this.gioiTinh = gioiTinh;
        this.boMon = boMon;
        this.LoaiHopDong = LoaiHopDong;
    }

    public String getTenGV() {
        return tenGV;
    }

    public void setTenGV(String tenGV) {
        this.tenGV = tenGV;
    }

    public int getNamSinh() {
        return namSinh;
    }

    public void setNamSinh(int namSinh) {
        this.namSinh = namSinh;
    }

    public String getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getBoMon() {
        return boMon;
    }

    public void setBoMon(String boMon) {
        this.boMon = boMon;
    }

    public boolean isLoaiHopDong() {
        return LoaiHopDong;
    }

    public void setLoaiHopDong(boolean LoaiHopDong) {
        this.LoaiHopDong = LoaiHopDong;
    }

    @Override
    public String toString() {
        return "GiangVien{" + "tenGV=" + tenGV + ", namSinh=" + namSinh + ", gioiTinh=" + gioiTinh + ", boMon=" + boMon + ", LoaiHopDong=" + LoaiHopDong + '}';
    }

    public String getStatus(boolean loaiHopDong){
        if(LoaiHopDong == true){
            return tenGV;
        }
        else{
            return "parttime";
        }
    }
} 
