const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs = min = sec = ms = 0;


btnStart.addEventListener('click',()=>{
    startTimer = setInterval(()=>{
        btnStart.classList.add('start-active');
        btnStop.classList.remove('stop-active');
        ms++;
        if(ms == 100){
            sec++;
            ms = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hrs++;
            min = 0;
        }
        updateDispaly();
    },10);
});

btnStop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
});

btnReset.addEventListener('click',()=>{
    hrs = min = sec = ms = 0;
    clearInterval(startTimer);
    updateDispaly();
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
});


function updateDispaly(){
    //Formated display
    phrs = hrs<10?'0' + hrs:hrs;
    pmin = min<10?'0' + min:min;
    psec = sec<10?'0' + sec:sec;
    pms = ms<10?'0' + ms:ms;

    //out put
    document.querySelector('.hrs').innerText=hrs;
    document.querySelector('.min').innerText=min;
    document.querySelector('.sec').innerText=sec;
    document.querySelector('.ms').innerText=ms;
}