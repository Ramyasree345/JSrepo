function eraseData(){
    document.getElementById('t1').value = ""
  }

function area(){
  try{

    let r =  document.getElementById('t1').value
    if(r==""){
      throw new Error("radius cannot be empty")
    }
    if(isNaN(r)){
      throw new Error("radius should be a number")
    }
    if(r<0){
      throw new Error("radius should be a positive number")
    }
    else{
      const PI = 3.14
      let Area = PI*r*r
      alert(Area);
      return true;
    }
    
    

  }
    
    
catch(error){
  document.getElementById('s1').innerHTML=error.message
  return false;

}
finally{
  document.getElementById('s2').innerHTML="Thanks"
}
}
