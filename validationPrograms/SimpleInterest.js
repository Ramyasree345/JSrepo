
function simpleIntrest(){
  try{
    let P= document.getElementById('t1').value
    if (P === "" || isNaN(P) || P<0) {
      throw new Error("Principle amount is invalid");
    }
    let T= document.getElementById('t2').value
    if (T === "" || isNaN(T) || T<0) {
      throw new Error("Time period is invalid");
    }
    let R= document.getElementById('t3').value
    if (R === "" || isNaN(R) || R<0) {
      throw new Error("Rate of interest is invalid");
    }
    

    else{
      let SI = eval(P*T*R)/100
      alert(SI);
      return true;
    }
  }

catch(error){
  document.getElementById('result').innerHTML=error.message
 
  return false
}
}
function eraseData(){
  document.getElementById('t1').value = ""
  document.getElementById('t2').value = ""
}

