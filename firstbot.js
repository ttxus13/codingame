/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
        const x = parseInt(inputs[0]);
        const y = parseInt(inputs[1]);
        const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
        const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
        const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
        const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
        var inputs = readline().split(' ');
        const opponentX = parseInt(inputs[0]);
        const opponentY = parseInt(inputs[1]);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    //console.log (nextCheckpointAngle + ' ' + 0 + ' ' + 0);
    console.error(nextCheckpointDist + ' ' + nextCheckpointAngle);
    if(-45 < nextCheckpointAngle < 45){
    console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 95');
    }else if (nextCheckpointAngle >= 70 | nextCheckpointAngle <= -70) {
        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }else{

        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
    }
    
}

'as'.charCodeAt(0);
console.log('as'.length);