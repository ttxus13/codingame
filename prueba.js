function war(){//guerra, completo
   /* if(b1.length<=3||b2.length<=3){
        W='PAT';
    }
    if(b1.length=4||b2.length=4){
        
    }*/
    
    //cp1=b1[0].slice(0,-1);
    //cp2=b2[0].slice(0,-1);
    boteadd();


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
    
    //si 4 omenos cartas pat
    //si 5 ver si pierde  
    console.error('fin  war',b1.length,b2.length,R);
    }
function boteadd(){// roba 3 de cada mazo y los mete al bote
        for (let i = 0; i <= 4; i++) {
            bote.push(b1.shift()); 
        }
        for (let i = 0; i <= 4; i++) {
            bote.push(b2.shift());
    }}
function botew(ganador){//añade el bote al ganador
        ganador.push(bote);
        R++;
        console.error(b1.length,b2.length,R);
    }
function fight(ganador){//b1 o b2 dentro, lleva console detras
        ganador.push(b1.shift());
        ganador.push(b2.shift());
        R++;
        console.error(b1.length,b2.length,R);
    }
const b1=['7','5','9','1','5'];
const b2=['4','8','4','3','2'];
var R;
const bote=[];
cp1=7;
cp2=4;
console.log(b1,b2);

/*
fight(b1);
console.log(b1,b2);
fight(b1);
console.log(b1,b2);
*/

//war();
//boteadd();
console.log(bote)
console.log(b1,b2,b1.length,b2.length,bote,bote.length);
var b3=b1.concat(bote);
console.log(b3);


/*fight(b2);
console.log(b1,b2);
fight(b2);
console.log(b1,b2);
*/