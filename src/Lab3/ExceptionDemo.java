/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab3;

import java.util.InputMismatchException;
import java.util.Scanner;

/**
 *
 * @author buidu
 */
public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            
        
        System.out.println("nhap so");
        int so = sc.nextInt();
        sc.nextLine();
            System.out.println("nhap so thuc: ");
            double soThuc = Double.parseDouble(sc.nextLine());
        } catch (InputMismatchException ie){
        System.out.println("nhap sai dinh dang du lieu");
    } catch (NumberFormatException nf){
            System.out.println("nhap sai dinh dang so thuc: ");
    }catch (Exception ex){
            System.out.println("Bo Cua exception: ");
    } 
        finally {
            System.out.println("Het Bai: ");
        }
    }
}
