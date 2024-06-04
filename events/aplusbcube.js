function eraseData(){
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
  }

function cube(){
    let a= document.getElementById('t1').value
    let b= document.getElementById('t2').value
    let c = eval((a*a*a)+(b*b*b)+(3*a*a*b)+(3*a*b*b))
    alert(c);
}
