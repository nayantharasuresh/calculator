const displaydata=(data)=>{
    result.value+=data
}

const removeAll=()=>{
    result.value=""
    result.placeholder="0"
}
const removeLastItem=()=>{
    result.value=result.value.slice(0,-1)
}
const showresult=()=>{
    try{

   console.log("inside try block");
   
    result.value=eval(result.value)
}
catch(err){
    console.log("inside catch block");

    console.log(err);
    result.placeholder="invalid expression"
    result.value=""  
}
finally{
    console.log("inside fanally block");
    
}
}
// run time error: we using try-catch.
