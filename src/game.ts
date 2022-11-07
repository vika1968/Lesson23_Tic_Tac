
let player: string = "X"
let gameover: boolean = false

// Change the player
const changePlayer = ()=>{ // Ternary Operator
    return player == "X"? "0": "X"
}

// Check for a winnner
function getWinner(){
    let btnClicked = document.getElementsByClassName('btnClicked')   

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

   for(let i = 0; i < wins.length; i++){ 
    for(let e = 0; e < wins[i].length; e++)
        if((btnClicked[wins[i][0]].textContent == btnClicked[wins[i][1]].textContent) && (btnClicked[wins[i][2]].textContent == btnClicked[wins[i][1]].textContent) && (btnClicked[wins[i][0]].textContent !== "") ){
           
            document.querySelector('.info')!.textContent = btnClicked[wins[i][0]].textContent + " player Won !!!!!!!!!!";          
            (document.getElementsByClassName("info")[0] as HTMLElement).style.color = "blue"
          
            gameover = true;
            (btnClicked[wins[i][0]] as HTMLElement).style.color = "red";
            (btnClicked[wins[i][1]] as HTMLElement).style.color = "red";
            (btnClicked[wins[i][2]] as HTMLElement).style.color = "red";         
          
           }       
        }        
   }
   

// The main game logic
let cells = document.getElementsByClassName("cell");
for(let i = 0; i < cells.length; i++){
    let btnClicked = cells[i].querySelector('.btnClicked')

    cells[i].addEventListener("click", ()=>{
                 if(btnClicked?.textContent == ""){                 
                    btnClicked.textContent = player
                    player = changePlayer()
                  
                    getWinner()
        
                    if (!gameover){
                        document.getElementsByClassName("info")[0].textContent  = "Turn for " + player
                    }                    
                }
        })
  }


// Add onclick listener to reset button
let btnReset = document.getElementById("reset")!
btnReset.addEventListener("click", onClickResetbtn)

function onClickResetbtn(){  
    cleangameBoard()
    player = "X";
    gameover = false;   
    document.getElementsByClassName("info")[0].textContent  = "The new game. Turn for " + player
 
}

// Reset board 
function cleangameBoard(){ 
     let btnClickedArray = document.querySelectorAll(".btnClicked")
     for(let i = 0; i < btnClickedArray.length; i++){
        btnClickedArray[i].textContent = "";
        (btnClickedArray[i] as HTMLElement).style.color = "black";
        (document.getElementsByClassName("info")[0] as HTMLElement).style.color = "black"
    }   
}



