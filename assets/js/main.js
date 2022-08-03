function test(){
    let ddt = "inputd";
    var input = document.getElementById(ddt);
    if(input.value === "R"){
        let output = document.getElementById("output");
        document.getElementById("output").innerHTML = "Playing Paper!";
    } else 
    if(input.value === "P"){
        document.getElementById("output").innerHTML = "Playing Scissors!";
    } else 
    if(input.value === "S"){
        document.getElementById("output").innerHTML = "Playing Rock!";
    } else {
        document.getElementById("output").innerHTML = "Input not accepted";
    }
}
