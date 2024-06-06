
function doAvg(){
  try{
    let a = document.getElementById('t1').value;
    if (a === "" || isNaN(a)) {
      throw new Error("Invalid input for 1st number.");
      
    }
      let b = document.getElementById('t2').value;
      if (b === "" || isNaN(b)) {
        throw new Error("Invalid input for 2nd number.");
        
      }

      let c = document.getElementById('t3').value;
      if (c === "" || isNaN(c)){
        throw new Error("Invalid input for 3rd number.");
        
      }

      let d = document.getElementById('t4').value;
      if (d === "" || isNaN(d)) {
        throw new Error("Invalid input for 4th number.");
        
      }

      let e = document.getElementById('t5').value;
      if (e === "" || isNaN(e)) {
        throw new Error("Invalid input for 5th number.");
    
      }

      let f = document.getElementById('t6').value;
      if (f === "" || isNaN(f)){
        throw new Error("Invalid input for 6th number.");
      
      }
      let sum = eval(a) + eval(b) + eval(c) + eval(d)+eval(e)+eval(f)
      let avg = sum/6
       alert(avg);
       return true;
    
    
  }
  catch(error){
    document.getElementById('s1').innerHTML=error.message
    document.getElementById('s2').innerHTML=error.message
    document.getElementById('s3').innerHTML=error.message
    document.getElementById('s4').innerHTML=error.message
    document.getElementById('s5').innerHTML=error.message
    document.getElementById('s6').innerHTML=error.message
    return false;
  
  
    

}   
}
  
  




  
    



      
   
    
    


function eraseData(){
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
    document.getElementById('t4').value = ""
    document.getElementById('t5').value = ""
    document.getElementById('t6').value = ""
  }


