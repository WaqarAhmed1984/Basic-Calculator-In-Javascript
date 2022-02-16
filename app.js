// var a=1;
// while(a<=10){
//     document.write(a+"<br>");
//     a++;
// }

//test

// var b=1;
// while(b<=10){
//     document.write("Hello World"+"<br>");
//     b++;
// }

// var birthyear = 
// `Yah! ican write html 
// content throug
//  Java Script`;
// alert(birthyear);

// var birthYear = 1990;

// const year = document.write(`my birth year is ${birthYear} <br /> Data Type of my declared variable is number `)


// var a = 10;
// var b = 20;
// var c= a+b;
// document.write(c);

function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}