let images = ["Dice_Images/dice_1.png",
"Dice_Images/dice_2.png",
"Dice_Images/dice_3.png",
"Dice_Images/dice_4.png",
"Dice_Images/dice_5.png",
"Dice_Images/dice_6.png"];

let defimages = ["img/defimg1.jpg","img/defimg2.jpg"];

let dice= document.querySelectorAll("img");
let player01score=0;
let player02score=0;
let player01turn=true;

function roll(){
    const rollbtn = document.getElementById("rollbtn");
    const p01scoreboard= document.getElementById("p1score");
    const p02scoreboard= document.getElementById("p2score");
    const message = document.getElementById("message");
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOnevalue = Math.floor(Math.random()*6);
        let dieTwovalue = Math.floor(Math.random()*6);

        document.querySelector("#dice-1").setAttribute("src",images[dieOnevalue]);
        document.querySelector("#dice-2").setAttribute("src",images[dieTwovalue]);
        let totalvalue=(dieOnevalue+1)+(dieTwovalue+1);
        if (player01turn) {
            if(dieOnevalue==dieTwovalue && totalvalue!=2){
                player01score+=totalvalue;
                p01scoreboard.textContent = player01score;
                player01turn=true;
                message.textContent="Player 01 Turn";    
            }else if(totalvalue==2){
                player01score=0;
                p01scoreboard.textContent = player01score;
                message.textContent="Player 02 Turn";
                player01turn=false;
            }else{
                player01score+=totalvalue;
                p01scoreboard.textContent = player01score;
                player01turn=false;
                message.textContent="Player 02 Turn";
            }
        }else{
            if(dieOnevalue==dieTwovalue && totalvalue!=2){
                player02score+=totalvalue;
                p02scoreboard.textContent = player02score;
                player01turn=false;
                message.textContent="Player 02 Turn";
            }else if(totalvalue==2){
                player02score=0;
                p02scoreboard.textContent = player02score;
                message.textContent="Player 01 Turn";
                player01turn=false;
            }else{
                player02score+=totalvalue;
                p02scoreboard.textContent = player02score;
                player01turn=true;
                message.textContent="Player 01 Turn";
            }
        }

        if (player01score>=100) {
            document.querySelector("#dice-1").setAttribute("src",defimages[0]);
            document.querySelector("#dice-2").setAttribute("src",defimages[1]);
            message.textContent= "Player 01 Win";
            rollbtn.remove();
        
        }else if(player02score>=100){
            document.querySelector("#dice-1").setAttribute("src",defimages[0]);
            document.querySelector("#dice-2").setAttribute("src",defimages[1]);
            message.textContent= "Player 02 Win";
            rollbtn.remove();
            
        }

    },
    1000
    );
}

function reset(){
    
    location.reload();
    
}