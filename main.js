
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

function getVelu(id){
   const element = document.getElementById(id);
   return element;
}


let coin = parseInt(getVelu('coin').innerText);

// select all call buttons
const calBtnF = document.getElementsByClassName('btn-call');
const cardContainer = getVelu('card-section');
const clearBtn = getVelu('clear-btn');

for (const cbtnF of calBtnF) {
    cbtnF.addEventListener('click', function () {
        // ---- Coin Logic ----
        if (coin >= 20) {
            const titleAlert = cbtnF.parentNode.parentNode.children[1].innerText;
            const callingNum = cbtnF.parentNode.parentNode.children[3].innerText;

            alert(`${titleAlert} : ${callingNum}`);

            coin -= 20;
            if (coin < 0) coin = 0;
            getVelu('coin').innerText = coin;
        
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const newHestory = document.createElement('div');
            newHestory.classList.add('hestory', 'bg-green-100', 'w-full', 'rounded-lg', 'p-4', 'flex', 'justify-between', 'shadow', 'transition-transform', 'duration-200');
            newHestory.innerHTML = `
                <div class="title-card">
                    <h1 class="font-semibold">${titleAlert}</h1>
                    <h3>${callingNum}</h3>
                </div>
                <div>
                    <h2>${timeString}</h2>
                </div>
            `;
            cardContainer.appendChild(newHestory);

        } else {
            alert('You don’t have enough coin for call');
        }
    });
}

// Clear button logic
clearBtn.addEventListener('click', function(){
    cardContainer.innerHTML = "";
});


// Copy counter
let copy = 1;

// সব copy buttons নাও
const btnCopy = document.getElementsByClassName('btn-copy');

for (const btnC of btnCopy) {

    btnC.addEventListener('click', function () {

        // 1️⃣ Button text পরিবর্তন
        btnC.innerText = "Copied!";

        // 2️⃣ Copy counter update
        const headCopy = document.getElementById('CopyHead');
        headCopy.innerText = copy;
        copy++;

        // 3️⃣ Card text কপি করা
        // ধরে নিচ্ছি card text button এর parent card এর ভিতরে class="text"
        const cardText = btnC.parentNode.parentNode.children[3]

        console.log(cardText)

        if (cardText) {
            navigator.clipboard.writeText(cardText.innerText)
                .then(() => {
                    console.log('Text copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }

    });

}

