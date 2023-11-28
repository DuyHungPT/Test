/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab3;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

/**
 *
 * @author buidu
 */
public class CollectionDemo {
    public static void main(String[] args) {
        Set<String> setStr = new HashSet<>();
        //add(): them gia tri va set
       setStr.add("java 1") ;
       setStr.add("java 2") ;
       setStr.add("java 3") ;
       setStr.add("c");
       System.out.println(setStr);
       //remove(): xoa cac phan tu bang gia tri
        setStr.remove("java 1");
        System.out.println("Set sau khi xoa: ");
        System.out.println("setStr");
        // treeset sap xep gai tri cac phan tu
        Set<Integer> setInt = new TreeSet<>();
        setInt.add(19);
        setInt.add(1);
        setInt.add(5);
        System.out.println(setInt);
        
        // luu tru danh sach laptop
        List<LapTop> listLap = new ArrayList<>();
        listLap.add(new LapTop("M2", 33000,"Mac", 1, false));
        listLap.add(new LapTop("M3", 33000,"Mac", 1, false));
        listLap.add(new LapTop("M4", 33000,"Mac", 1, false));
        listLap.add(new LapTop("M5", 33000,"Mac", 1, false));
        listLap.add(new LapTop("M6", 33000,"Mac", 1, false));
        Set<LapTop> hashSetLap = new HashSet<>();
        
        hashSetLap.addAll(listLap);
        System.out.println("danh sach lap top: ");
        for(LapTop item : hashSetLap){
            System.out.println(item.getTen()+" ");
        }
    }
}
