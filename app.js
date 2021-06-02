console.log('funciona') 

const name = ()=>{
    return "Nicolas";
}

fetch("form.php",{
    body: "Nicolas",
    method:"POST"
}).then(data => response)