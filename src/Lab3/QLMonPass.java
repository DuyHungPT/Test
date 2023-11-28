/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab3;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author buidu
 */
public class QLMonPass {
        public static List<Student> lists = new ArrayList<>();
    public int add(Student st){
        lists.add(st);
        return 1;
    }
    public int findStudentByID(String id){
        for (int i = 0; i < lists.size(); i++) {
          if(lists.get(i) .getId().equalsIgnoreCase(id)){
             return i; 
          }
        }
       return -1; 
    }


    public List<Student> getAll(){
        return lists;
    }
}

