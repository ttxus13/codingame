import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // the number of temperatures to analyse
        boolean neg=false;
        int res= 0;

        for (int i = 0; i < n; i++) {
            int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
            if (i==0){
                res=t;
            }else{
                if(Math.abs(t)==Math.abs(res)){
                    if (neg&&t>=0){
                        res=t;
                    }}else{

                        if(Math.abs(t)<Math.abs(res)){//cambia a t nueva
                            res=t;
                            if(t<0){neg=true;}else{neg=false;}
                        }
                }
            }

        }

        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");

        System.out.println(res);
    }
}