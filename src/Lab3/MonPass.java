
package Lab3;


public class MonPass {
    private String ten;
    private String id;
    private  double mark;
    private boolean trangThai;

    public MonPass() {
    }

    public MonPass(String ten, String id, double mark, boolean trangThai) {
        this.ten = ten;
        this.id = id;
        this.mark = mark;
        this.trangThai = trangThai;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getMark() {
        return mark;
    }

    public void setMark(double mark) {
        this.mark = mark;
    }

    public boolean isTrangThai() {
        return trangThai;
    }

    public void setTrangThai(boolean trangThai) {
        this.trangThai = trangThai;
    }
    
}
