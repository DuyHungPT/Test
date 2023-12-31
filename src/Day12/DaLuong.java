/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package Day12;

import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author buidu
 */
public class DaLuong extends javax.swing.JFrame implements Runnable {

    /**
     * Creates new form DaLuong
     */
    public DaLuong() {
        initComponents();
        // Tao da luong 
        Thread th = new Thread(this);
        th.start();
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        lblTieuDe = new javax.swing.JLabel();
        lblChay = new javax.swing.JLabel();
        lblMayTinh = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        lblTieuDe.setFont(new java.awt.Font("Segoe UI", 3, 24)); // NOI18N
        lblTieuDe.setForeground(new java.awt.Color(255, 0, 0));
        lblTieuDe.setText("Da Luong");

        lblChay.setText("Thoi Gian Chay");

        lblMayTinh.setText("Thoi Gian May Tinh");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(25, 25, 25)
                .addComponent(lblChay, javax.swing.GroupLayout.PREFERRED_SIZE, 118, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(102, 102, 102)
                .addComponent(lblMayTinh, javax.swing.GroupLayout.DEFAULT_SIZE, 149, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(lblTieuDe, javax.swing.GroupLayout.PREFERRED_SIZE, 126, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(146, 146, 146))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(lblTieuDe)
                .addGap(27, 27, 27)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(lblChay)
                    .addComponent(lblMayTinh))
                .addContainerGap(219, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(DaLuong.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(DaLuong.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(DaLuong.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(DaLuong.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new DaLuong().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel lblChay;
    private javax.swing.JLabel lblMayTinh;
    private javax.swing.JLabel lblTieuDe;
    // End of variables declaration//GEN-END:variables

    @Override
    public void run() {
        int s = 0;// giay
        int m = 0;// phut 
        int h = 0;// gio
        int gio =0;
        int phut = 0;
        int giay = 0;
        while (true) {
            s += 1;
            if (s == 60) {
                m += 1;
                s = 0;
            }
            if (m == 60) {
                h += 1;
                m = 0;
                s = 0;
            }
            if (h == 24) {
                h = 0;
            }
            lblChay.setText(h+":"+m+":"+s);
            Calendar ca = Calendar.getInstance();
            gio = ca.get(Calendar.HOUR);
            phut = ca.get(Calendar.MINUTE);
            giay = ca.get(Calendar.SECOND);
            System.out.println(h + ":" + m + ":" + s);
            lblMayTinh.setText(gio+":"+phut+":"+giay);
            String kyTu = lblTieuDe.getText().substring(0, 1);
            String tieude = lblTieuDe.getText().substring(1);
            lblTieuDe.setText(tieude+kyTu);
            try {
                Thread.sleep(1000); // ngat giua cac vong lap
            } catch (InterruptedException ex) {
                Logger.getLogger(DongHo.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

}
