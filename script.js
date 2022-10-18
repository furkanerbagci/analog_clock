const secondIcon = document.querySelector(".second");
const minuteIcon = document.querySelector(".minute");
const hourIcon = document.querySelector(".hour");

function clockTickTock(){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()

    secondIcon.style.transform = `rotate(${180 + (second*6)}deg)`
    minuteIcon.style.transform = `rotate(${180 + (minute*6)}deg)`
    hourIcon.style.transform = `rotate(${180 + (hour*30)}deg)`

    
}


setInterval(clockTickTock,1000);