
let count = 1;
const heartI = document.getElementsByClassName('heart-icon')
for (const heart of heartI){
    heart.addEventListener('click', function(){
        const mainCounter = document.getElementById('head-react').innerText=1 ;
        const mainCCounter= parseInt(mainCounter);
        document.getElementById('head-react').innerText= count++

        // mainCCounter.innerText= count+1
    })
}


// let coin =parseInt(document.getElementById('coin').innerText)
// // coin functional

// const calBtnF = document.getElementsByClassName('btn-call');


// for(const cbtnF of calBtnF){
//     cbtnF.addEventListener('click', function (){

//         if (coin=>20){
              
//         const titleAlert =cbtnF.parentNode.parentNode.children[1].innerText;
//         const conTitleAlert=parseInt(titleAlert)
//         const callingNum =cbtnF.parentNode.parentNode.children[3].innerText;

//         alert(`${titleAlert} :  ${callingNum}`);
//         coin = document.getElementById('coin').innerText=coin-20
//         return coin;
//         }
//         else if (coin<19){
//             alert('You dont have Proper coin for cal')
//         }
//         else{
//             alert('els')
//         }
     
        
//         // console.log(titleAlert,callingNum)
//     })
// }

//  if (coin=>20){
    
//  }

function getVelu(id){
   const element = document.getElementById(id);
   return element;
}

 let coin = parseInt(document.getElementById('coin').innerText);

// coin functional

/* const calBtnF = document.getElementsByClassName('btn-call');

for (const cbtnF of calBtnF) {
    cbtnF.addEventListener('click', function () {
        
        if (coin >= 20) {
            const titleAlert = cbtnF.parentNode.parentNode.children[1].innerText;
            const callingNum = cbtnF.parentNode.parentNode.children[3].innerText;

            alert(`${titleAlert} : ${callingNum}`);

            coin = coin - 20;
            document.getElementById('coin').innerText = coin;

    
            if (coin <= 0) {
                coin = 0;
                document.getElementById('coin').innerText = coin;
                // alert("Your coin is finished!");
            }

            return coin;
        } 
        else {
            // alert('You don’t have enough coin for call');
        }
    })
}*/



// card js stasrt 


// just time function 

function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            document.getElementById('clock').innerHTML = formattedTime;

            // Schedule the function to run again after 1 second
            setTimeout(updateClock, 1000);
        }




const hestory = document.getElementsByClassName('btn-call');


for (const cbtnF of hestory) {
    cbtnF.addEventListener('click', function () {
        const hestoryTitle = cbtnF.parentNode.parentNode.children[1].innerText
        const callingNum = cbtnF.parentNode.parentNode.children[3].innerText;
        

        const cardContainer = document.getElementById('card-section')
        const newHestory = document.createElement('div');
        newHestory.innerHTML=`
        
        
                                 <div class="hestory bg-green-200 w-full rounded-lg p-4  flex justify-between ">
                                    <div class="title-card">
                                    <h1 class="font-semibold">${hestoryTitle}</h1>
                                    <h3>${callingNum}</h3>
                                    </div>
                                    <div>
                                      <h2>time</h2>
                                    </div>
                                 </div>
        
        `;

        cardContainer.append(newHestory)


    })

    const clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', function(){
        document.getElementById('card-section').innerHTML="";
    })
}



l


