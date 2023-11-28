/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Day12;

import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DongHo implements Runnable {

    @Override
    public void run() {
       int s = 0;// giay
       int m = 0;// phut 
       int h = 0;// gio
       while(true){
     /*      s += 1;
           if(s == 60){
               m += 1;
               s = 0;
           }
           if(m == 60){
               h+=1;
               m = 0;
               s = 0;
           }
           if(h == 24){
               h =0;
           }
           */
     Calendar ca = Calendar.getInstance();
     h = ca.get(Calendar.HOUR);
     m = ca.get(Calendar.MINUTE);
     s = ca.get(Calendar.SECOND);
           System.out.println(h+":"+m+":"+s);
           try {
               Thread.sleep(1000); // ngat giua cac vong lap
           } catch (InterruptedException ex) {
               Logger.getLogger(DongHo.class.getName()).log(Level.SEVERE, null, ex);
           }
       }
    }
    public static void main(String[] args) {
        DongHo dh = new DongHo();
        dh.run();
    }
}
