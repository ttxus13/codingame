<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (TRUE)
{
    // $nextCheckpointX: x position of the next check point
    // $nextCheckpointY: y position of the next check point
    // $nextCheckpointDist: distance to the next checkpoint
    // $nextCheckpointAngle: angle between your pod orientation and the direction of the next checkpoint
    fscanf(STDIN, "%d %d %d %d %d %d", $x, $y, $nextCheckpointX, $nextCheckpointY, $nextCheckpointDist, $nextCheckpointAngle);
    fscanf(STDIN, "%d %d", $opponentX, $opponentY);

    // Write an action using echo(). DON'T FORGET THE TRAILING \n
    // To debug: error_log(var_export($var, true)); (equivalent to var_dump)


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    //echo($nextCheckpointX . " " . $nextCheckpointY . " 80\n");
   // error_log($nextCheckpointDist $nextCheckpointAngle);

    if (-45 < $nextCheckpointAngle && $nextCheckpointAngle < 45){
        if (-5 < $nextCheckpointAngle && $nextCheckpointAngle < 5 & $nextCheckpointDist > 4000){
            echo($nextCheckpointX . " " . $nextCheckpointY . " BOOST\n");
            
            }else{
        echo($nextCheckpointX . " " . $nextCheckpointY . " 100\n");
            }
    //console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 95');
    }else if ($nextCheckpointAngle >= 70 || $nextCheckpointAngle <= -70) {
        echo($nextCheckpointX . " " . $nextCheckpointY . " 60\n");
        //console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }else if ($nextCheckpointAngle >= 100 || $nextCheckpointAngle <= -100) {
        echo($nextCheckpointX . " " . $nextCheckpointY . " 45\n");
        //console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }else if ($nextCheckpointAngle >= 140 || $nextCheckpointAngle <= -140) {
        echo($nextCheckpointX . " " . $nextCheckpointY . " 0\n");
        //console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }else{
        echo($nextCheckpointX . " " . $nextCheckpointY . " 80\n");
       // console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }

    //echo($nextCheckpointX . " " . $nextCheckpointY . " 95\n");
}
?>