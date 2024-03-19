console.log("welcome to my tic tac toe game");

let tap=new Audio("music/tap.wav");
let win= new Audio("music/win.wav");
let btnsound= new Audio("music/1.wav")
let mute=false;
let gameOver=false;
let turn="X"
let statusText=document.querySelector(".statusText")
let resetbtn= document.querySelector("#reset");
let mutebtn=document.querySelector('#mute')
let boxes=document.querySelectorAll('.block');
let winning_dance=document.querySelector("#winning_dance")


function changemute(){
    mute===false?true:false;
    
}

mutebtn.addEventListener('click',()=>{
    mute=changemute()
    mutebtn.innerText="unmute"
})

resetbtn.addEventListener("click",()=>{
    if(mute==false){
        btnsound.play()
    }
    
})




//chaing turn of players
let changeTurn= ()=>{
return turn==="X"?"O":"X";
}



// checking winning status 
const checkWin=()=>{
    let wincase=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i of wincase){
        let val1=boxes[i[0]].innerText;
        let val2=boxes[i[1]].innerText;
        let val3=boxes[i[2]].innerText;
        if(val1 != '' && val2 != "" && val3 != ""){
            if( val1 === val2 && val2 === val3){
                statusText.innerHTML=`Congretulation, Winner is ${val1} `
                for (let j=0;j<=2;j++){
                    boxes[i[j]].style.backgroundColor="rgb(69, 136, 33)"
                } 
                winning_dance.style.width="100px"
                if(mute==false){
                    win.play()

                }
                gameOver=true;
                
            }
        }
        
            
    }
}



boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        if(box.innerHTML==="" && gameOver==false){
            if(mute==false){
                tap.play();
            }
            
            box.innerText=turn;
            turn=changeTurn()
            statusText.innerHTML=`It's ${turn} turn`
            checkWin()
            
        }
    })
})

resetbtn.addEventListener('click',()=>{
    boxes.forEach(box =>{
        box.innerText="";
        box.style.backgroundColor=null
    })
    winning_dance.style.width="0px"
    turn="X"
    statusText.innerHTML=`It's ${turn} turn`
    gameOver=false
    mutebtn.innerText="mute"

})


  



    







