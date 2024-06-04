function doAvg(){
    let a= document.getElementById('t1').value
    let b= document.getElementById('t2').value
    let c= document.getElementById('t3').value
    let d= document.getElementById('t4').value
    let e= document.getElementById('t5').value
    let f= document.getElementById('t6').value

    let sum = eval(a) + eval(b) + eval(c) + eval(d)+eval(e)+eval(f)
    let avg = sum/6
    alert(avg);
}

function eraseData(){
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
    document.getElementById('t4').value = ""
    document.getElementById('t5').value = ""
    document.getElementById('t6').value = ""
  }


