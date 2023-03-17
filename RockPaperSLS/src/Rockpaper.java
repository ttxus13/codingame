import java.util.*;
import java.io.*;
import java.math.*;

import static java.lang.Integer.parseInt;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {
    private static ArrayList newPlayers;

/*    public static char pelea(String[] j1, String[] j2, ArrayList <String> newPlayers){

        if(j1[1].equals(j2[1])){
            if(parseInt(j1[0])>parseInt(j2[0])){//gana j2
                j2[]+=j1[0];
                newPlayers.add(j2);
            }else {//gana j1
                j1[j1.length]=j2[0];
                newPlayers.add(j1);
            }
        }else{
            switch (j1[1]){
                case "R":
                    switch (j2[1]){
                        case "L":
                        case "C"://win R
                            break;
                        case "P":
                        case "S"://lose R
                            break;
                        default:
                            System.err.println(" error");
                            break;
                    }
                    break;
                case "P":
                    switch (j2[1]){
                        case "R":
                        case "S"://gana p
                            break;
                        case "C":
                        case "L"://pierde p
                            break;
                        default:
                            System.err.println(" error");
                            break;
                    }
                    break;
                case "C":
                    switch (j2[1]){
                        case "P":
                        case "L"://gana C
                            break;
                        case "R":
                        case "S"://pierde c
                            break;
                        default:
                            System.err.println(" error");
                            break;
                    }
                    break;
                case "L":
                    switch (j2[1]){
                        case "S":
                        case "P"://gana
                            break;
                        case "R":
                        case "C":
                            break;
                        default:
                            System.err.println(" error");
                            break;
                    }
                    break;
                case "S":
                    switch (j2[1]){
                        case "C":
                        case "R"://gana
                            break;
                        case "P":
                        case "L":
                            break;
                        default:
                            System.err.println(" error");
                            break;
                    }
                    break;
                default:
                    System.err.println("error");
                    break;

            }
        }
        return 1;



    }*/
    //instrucc abajo

//    Each player chooses a sign that he will keep throughout the tournament among:
//    Rock (R)
//    Paper (P)
//    sCissors (C)
//    Lizard (L)
//    Spock (S)
//
//    Scissors cuts Paper
//    Paper covers Rock
//    Rock crushes Lizard
//    Lizard poisons Spock
//    Spock smashes Scissors
//    Scissors decapitates Lizard
//    Lizard eats Paper
//    Paper disproves Spock
//    Spock vaporizes Rock
//    Rock crushes Scissors
//    and in case of a tie, the player with the lowest number wins (it's scandalous but it's the rule).
//
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        String[][] players = new String[0][0];
        String[][] newPlayers= new String[0][0];

        for (int i = 0; i < N; i++) {
            int NUMPLAYER = in.nextInt();
            String SIGNPLAYER = in.next();
            players[i][0]= Integer.toString(NUMPLAYER);
            players[i][1]= SIGNPLAYER;//en los siguientes se guarda los que gane


        }

        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");

        System.out.println("WHO IS THE WINNER?");
    }
}