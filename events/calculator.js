function Addition(){
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let c=eval(document.getElementById('t3').value)

    let result=a+b+c;
    document.getElementById('t4').value=result;
}
function subtraction(){
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let c=eval(document.getElementById('t3').value)
    let result=a-b-c;
    document.getElementById('t4').value=result;
}
function Multiply(){
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let c=eval(document.getElementById('t3').value)
    let result=a*b*c;
    document.getElementById('t4').value=result;
}
function Division(){
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let c=eval(document.getElementById('t3').value)
    let result=a/b/c;
    document.getElementById('t4').value=result;
}
function Modulus(){
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let c=eval(document.getElementById('t3').value)
    let result=a%b%c;
    document.getElementById('t4').value=result;
}
function Clear(){
    document.getElementById('t1').value=0
    document.getElementById('t2').value=0
    document.getElementById('t3').value=0

    document.getElementById('t4').value=""

}