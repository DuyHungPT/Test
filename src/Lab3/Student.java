/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab3;


public class Student {
    private String id;
    private String name;
    private double mark;
    private  String major;

    public Student() {
    }

    public Student(String id, String name, double mark, String major) {
        this.id = id;
        this.name = name;
        this.mark = mark;
        this.major = major;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMark() {
        return mark;
    }

    public void setMark(double mark) {
        this.mark = mark;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

  public  String getHocLuc(){
      if(mark <=3){
          return "kem";
      }
       if(mark <5){
          return "yeu";
      }
        if(mark <6.5){
          return "TB";
      }
         if(mark <7.5){
          return "KHa";
      }
         if(mark <9){
          return "Gioi";
      }
       
          return "Xuat Sac";
      
  }
  public boolean isHocBong(){
      return mark >= 7.5;
  }

 
}
