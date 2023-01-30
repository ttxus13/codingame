const b1=[];
const b2=[];
var R=0;
var W;
const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    b1.push(cardp1);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2 
    b2.push(cardp2);
}
console.error(b1,b2);

var cp1;
var cp2;
const bote=[];


function fight(ganador){
    ganador.push(b1.shift());
    ganador.push(b2.shift());
    R++;
    console.error(b1.length,b2.length,R);
}
function botew(ganador){
    ganador.push(bote);
    R++;
    console.error(b1.length,b2.length,R);
}
function war(){
    
    for (let i = 0; i <= 3; i++) {
        bote.push(b1.shift()); 
    }
    for (let i = 0; i <= 3; i++) {
        bote.push(b2.shift()); 
    }
    cp1=b1[0].slice(0,-1);
    cp2=b2[0].slice(0,-1);

    if (cp1==cp2){//guerra
        war();
    }
    else if(cp1=='J'||cp1=='Q'||cp1=='K'||cp1=='A'||cp2=='J'||cp2=='Q'||cp2=='K'||cp2=='A'){//figuras
        switch (cp1) {
            case 'J':
                if(cp2=='Q'){
                    botew(b2);                        
                } else if(cp2=='K'){
                    botew(b2);                  
                } else if(cp2=='A'){//cp2 A                    
                    botew(b2);              
                }else{//num
                    botew(b1);              
                }                
                break;
            case 'Q':
                if (cp2=='J'){
                    botew(b1);              
                } else if(cp2=='K'){
                    botew(b2);              
                } else if(cp2=='A'){//cp2 A
                    botew(b2);              
                }else{
                    botew(b1);              
                }
                break;
            case 'K':
                if (cp2=='J'){
                    botew(b1);              
                } else if(cp2=='Q'){
                    botew(b1);              
                } else if(cp2=='A'){//cp2 A
                    botew(b2);              
                }else{
                    botew(b1);              
                }
                break;
            case 'A':
                if (cp2=='J'){
                    botew(b1);              
                } else if(cp2=='Q'){
                    botew(b1);              
                } else if(cp2=='K'){
                    botew(b1);              
                } else{//cp2num
                    botew(b1);              
                }
                break;
            default://cp1 num gana 2
                    botew(b2);              
                break;

        }
        //console.error('fin switch',R);
        
    }else{//numeros
        cp1=parseInt(cp1);
        cp2=parseInt(cp2);
    
        if(cp1>cp2){//gana cp1
            botew(b1);              
        }else {//gana cp2 
            botew(b2);              
        }
    } 
    if(b1.length<=3||b2.length<=3){
        W='PAT';
    }
    if(b1.length=4||b2.length=4){
        
    }
    //si 4 omenos cartas pat
    //si 5 ver si pierde  
    console.error('fin  war',b1.length,b2.length,R);
    }


while (b1.length!=0 && b2.length!=0) {
console.error('inicio while');

cp1=b1[0].slice(0,-1);
cp2=b2[0].slice(0,-1);
console.error(cp1,cp2);
if (cp1==cp2){//guerra
    war()
}
else if(cp1=='J'||cp1=='Q'||cp1=='K'||cp1=='A'||cp2=='J'||cp2=='Q'||cp2=='K'||cp2=='A'){//figuras
    switch (cp1) {
        case 'J':
            if(cp2=='Q'){
                fight(b2);
            } else if(cp2=='K'){
                fight(b2);
            } else if(cp2=='A'){//cp2 A
                fight(b2);
            }else{//num
                fight(b1);
            }
            break;
        case 'Q':
            if (cp2=='J'){
                fight(b1);
            } else if(cp2=='K'){
                fight(b2);
            } else if(cp2=='A'){//cp2 A
                fight(b2);
            }else{
                fight(b1);
            }
            break;
        case 'K':
            if (cp2=='J'){
                fight(b1);
            } else if(cp2=='Q'){
                fight(b1);
            } else if(cp2=='A'){//cp2 A
                fight(b2);
            }else{
                fight(b1);
            }
            break;
        case 'A':
            if (cp2=='J'){
                fight(b1);
            } else if(cp2=='Q'){
                fight(b1);
            } else if(cp2=='K'){
                fight(b1);
            } else{
                fight(b1);
            }
            break;
        default://cp1 num gana 2
            fight(b2);
        //console.error('fallo');
            break;
    }
    //console.error('fin switch',R);
    
}else{//numeros
    cp1=parseInt(cp1);
    cp2=parseInt(cp2);

    if(cp1>cp2){//gana cp1
        fight(b1);
    }else {//gana cp2 
        fight(b2);
    }
}   
console.error('fin while',b1.length,b2.length,R);
}//fin while

if (b2.length==0){
    W=1;
}else{
    W=2;
}
//If a player runs out of cards during a "war" 
//(when giving up the three cards or when doing the battle),
// then the game ends and both players are placed equally first.

console.log(W,R);
