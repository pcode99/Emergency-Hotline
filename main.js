
let count = 0;
const heartI = document.getElementsByClassName('heart-icon')
for (const heart of heartI){
    heart.addEventListener('click', function(){
        const mainCounter = document.getElementById('head-react').innerText=1 ;
        const mainCCounter= parseInt(mainCounter);
        document.getElementById('head-react').innerText= count++

        // mainCCounter.innerText= count+1
    })
}


let coin =parseInt(document.getElementById('coin').innerText)
// coin functional

const calBtnF = document.getElementsByClassName('btn-call');


for(const cbtnF of calBtnF){
    cbtnF.addEventListener('click', function (){

        if (coin=>20){
              
        const titleAlert =cbtnF.parentNode.parentNode.children[1].innerText;
        const conTitleAlert=parseInt(titleAlert)
        const callingNum =cbtnF.parentNode.parentNode.children[3].innerText;

        alert(`${titleAlert} :  ${callingNum}`);
        coin = document.getElementById('coin').innerText=coin-20
        return
        }
        else {
            alert('You must be need 20 coin')
        }
     
        
        // console.log(titleAlert,callingNum)
    })
}

