import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {
    public String[] ganador(String[][] deck,int i){
        String[] res;
        if(batalla(deck[i],deck[i+1])){//gana player1
            res= new String[deck[i].length+1];
            res=Arrays.copyOf(deck[i],deck[i].length+1);
        }else{//gana player 2
            res= new String[deck[i+1].length+1];
            res=Arrays.copyOf(deck[i+1],deck[i+1].length+1);
            }
        return res;
    }
    public boolean batalla(String[]a,String[]b){//true si gana a, false si gana b
        return true;

    }


    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        String[][] jugs=new String[N][2];
        System.err.println(N);

        for (int i = 0; i < N; i++) {
            int NUMPLAYER = in.nextInt();
            String SIGNPLAYER = in.next();
            jugs[i][0]=Integer.toString(NUMPLAYER);
            jugs[i][1]=SIGNPLAYER;
        }
        for (int i = 0; i < N; i++) {
            System.err.println(jugs[i][0]+"-"+jugs[i][1]);

        }


        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");

        System.out.println("WHO IS THE WINNER?");
    }
}