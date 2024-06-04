function eraseData(){
    document.getElementById('t1').value = 0
    document.getElementById('t2').value = 0
    document.getElementById('t3').value = 0

  }

function simpleIntrest(){
    let a= document.getElementById('t1').value
    let b= document.getElementById('t2').value
    let c= document.getElementById('t3').value
    let simpleIntrest = eval(a*b*c)/100
    alert(simpleIntrest);
}
