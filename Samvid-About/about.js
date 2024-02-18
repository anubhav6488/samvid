//Falling blossoms



for(let i =1;i < 23 ;i++){
    let random = Math.floor(Math.random()*8)+3;
    let d = document.getElementById("d"+i);
    const string = random+"px";
    console.log(d.style.height);
    d.style.height=string;
    d.style.width=string;
    console.log(string);    
}

for(let i = 1;i < 23; i++){
let d = document.getElementById("d"+i);
const attr = window.getComputedStyle(d).getPropertyValue("top")
console.log(attr);
if(attr === "95%"){
    let random = Math.floor(Math.random()*10)+3;
    let d = document.getElementById("d"+i);
    const string = random+"px";
    d.style.height=string;
    d.style.width=string;
    console.log(string);  
}

}