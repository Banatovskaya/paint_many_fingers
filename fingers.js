"use strict";
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
let btn = document.querySelectorAll("button")[0];
//var param = document.getElementsByTagName("div");
context.shadowBlur = 30;
context.shadowColor = "black";
context.strokeStyle = "orange";
//context.fillStyle = "red";
//context.fillRect(100, 100, 500, 480);
context.strokeRect(100, 100, 500, 480);

context.shadowBlur = 30;
//context.shadowColor = "yellow";
context.strokeStyle = "blue";
//context.fillStyle = "red";
//context.fillRect(100, 100, 500, 480);
context.strokeRect(10, 10, 50, 48);

btn.addEventListener("click", function(){
    document.location.reload(true);
 });

//for (let i = 1; i < 10; i++) {
var x, x0 = 0;
let y, y0 = 0;

let isDrawing = false;
context.strokeStyle = "black"
let color = "red";

function drawing(x0, y0, x, y) {
    //  context.strokeStyle = "green"

    context.beginPath();
    context.lineWidth = "5";
    switch (color) {
        case 'red':
            color = 'orange';
            break;
        case 'orange':
            color = 'yellow';
            break;
        case 'yellow':
            color = 'green';
            break;
        case 'green':
            color = 'blue';
            break;
            
            default:
                color = "red";
    }
    /*if (color == "red") {
        color = "green";
    } else {
        color = "red"
    };*/
    context.strokeStyle = color;
    context.moveTo(x0, y0);
    context.lineTo(x, y);
    context.stroke();
}

canvas.addEventListener("mousedown", function (event) {
    isDrawing = true;
    x0 = event.clientX;
    y0 = event.clientY;
    //x = event.clientX;
    //y = event.clientY;
    //  drawing(x0, y0, x, y);
    event.preventDefault();
}, {
    once: false
});

canvas.addEventListener("mousemove", function (event) {
    if (isDrawing) {

        x = event.clientX;
        y = event.clientY;
        drawing(x0, y0, x, y);
        x0 = x;
        y0 = y;

    };
    event.preventDefault();
}, {
    once: false
});

canvas.addEventListener("mouseup", function (event) {
    drawing(x0, y0, x, y);
    isDrawing = false;
    x0 = 0;
    y0 = 0;
    event.preventDefault();
}, {
    once: false
});

let touchesStartX = [];
let touchesStartY = [];


canvas.addEventListener("touchstart", function (event) {
    let d = "";
    for (let i = 0; i < event.changedTouches.length; i++) {
        let id = event.changedTouches[i].identifier;

        touchesStartX[id] = event.changedTouches[i].clientX;
        touchesStartY[id] = event.changedTouches[i].clientY;
       // d += "start" + "arr i " + i + " " + "arr id " + id + " " + "x" + event.changedTouches[i].clientX + "y" + event.changedTouches[i].clientY;
      /* let div = document.createElement("div");
       div.textContent = "start" + "arr i " + i + " " + "arr id " + id + " " + "x" + event.changedTouches[i].clientX + "y" + event.changedTouches[i].clientY;
       document.body.appendChild(div);*/
    }
    event.preventDefault();
    

}, {
    once: false
});

canvas.addEventListener("touchmove", function (event) {
    event.preventDefault();
    let d = "";
    for (let i = 0; i < event.changedTouches.length; i++) {

        let id = event.changedTouches[i].identifier;
        // x0 = touchesStartX[id];
        //  y0 = touchesStartY[id];
        x = event.changedTouches[i].clientX;
        y = event.changedTouches[i].clientY;
        drawing(x0, y0, x, y);
        touchesStartX[id] = x;
        touchesStartY[id] = y;

        d += "move" + "arr i " + i + " " + "arr id " + id + " " + "x" + event.changedTouches[id].clientX + "y" + event.changedTouches[id].clientY + 'a\nb';

        x0 = x;
        y0 = y;

    };
    /* let div = document.createElement("div");
      div.textContent = d;
      document.body.appendChild(div);*/
    event.preventDefault();
}, {
    once: false
});

canvas.addEventListener("touchend", function (event) {
    let d = "";
    for (let i = 0; i < event.changedTouches.length; i++) {
        let id = event.changedTouches[i].identifier;
        //    touchesStartX.splice(id, 1); //если оставляем сплит то вместо понумерного присвоения массива нужно присваивать push-ем иначе при сдвиге по завершению касания массив смешается 
        //   touchesStartY.splice(id, 1); // иа после м\смещения id  не соответствует i
        //  d += "del" + "arr i " + i + " " + "arr id " + id + " " + "x" + event.changedTouches[id].clientX + "y" + event.changedTouches[id].clientY;
        let div = document.createElement("div");
        div.textContent = "id " + event.changedTouches[0].identifier + "x5 " + event.changedTouches[0].clientX + "y5 " + event.changedTouches[0].clientY + "массив" + touchesStartX[id] ;
        document.body.appendChild(div); 
    };

    
    event.preventDefault();
}, {
    once: false
});