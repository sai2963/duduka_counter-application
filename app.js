 let count= document.getElementById('count');
let button1= document.getElementById('btn1');
let button2= document.getElementById('btn2');
let button3= document.getElementById('btn3');
let a=0;
function update(){
    count.textContent=a;
}
function increment(){
    a++;
    update();
}
function decrement(){
    if(a>0){
        a--;
        update()
    }
   
}
function reset(){
    a=0;
    update()
}
button1.addEventListener('click',increment)
button2.addEventListener('click',decrement)
button3.addEventListener('click',reset)
