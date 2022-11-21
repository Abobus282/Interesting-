// let Car = function(brand, model, color){
//     this.brand = brand
//     this.model = model
//     this.color = color
// }
// // let tesla = new Car ('tesla', 'x', 'black')
// // console.log(tesla)
// // let audi = new Car ('audi', '3', 'red')
// // console.log(audi)
let interval


function timer() {
    let time = new Date();
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()
    let s = time.getSeconds().toString()


    let clock = document.getElementById("clock");
    if(h.length < 2){
        h = "0" + h;
    }
    if(m.length < 2){
        m = "0" + m;
    }
    if(s.length < 2){
        s = "0" + s;
    }
    clock.innerHTML = h + ':' + m + ':' + s
    document.body.style.backgroundColor = '#' + h + m + s
    document.body.style.color = '#' + s + 'ffff'
}
let isTimeShowed = false
function enableTimer() {
    interval = setInterval(timer, 1000)
}
function disableTimer(){
    clearInterval(interval)
    clock.innerHTML = '00:00:00'
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}
function start(){
    isTimeShowed=!isTimeShowed
    timer()
    isTimeShowed ? enableTimer() : disableTimer()
}