while(true){
    var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var op=prompt("Enter operator");
var res;
if(op==="+"){
    res= a+b;
    document.getElementById("output").innerHTML+="output is"+res;
    break;
}
else if(op==="-"){
    res=a-b;
    document.getElementById("output").innerHTML+="output is"+res;
    break;
}
else if(op==="*"){
    res =a*b;
    document.getElementById("output").innerHTML+="output is"+res;
    break;
}
else if(op==="/"){
    res= a/b;
    document.getElementById("output").innerHTML+="output is"+res;
    break;
}

}



