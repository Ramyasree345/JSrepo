function eraseData(){
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
  }

function cube(){
  try{
    let a= document.getElementById('t1').value
    if (a === "" || isNaN(a)) {
      throw new Error("Invalid input for 1st number.");
    }
    let b= document.getElementById('t2').value
    if (b === "" || isNaN(b)) {
      throw new Error("Invalid input for 2nd number.");
    }
    

    else{
      let c = eval((a*a*a)+(b*b*b)+(3*a*a*b)+(3*a*b*b))
    alert(c);
    }
}
catch(error){
  document.getElementById('result').innerHTML=error.message
 
  return false
}
}
