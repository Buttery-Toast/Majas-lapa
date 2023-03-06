function toTop(){
    window.scrollTo(0, 0);
}
function yes(){
    document.getElementById("placeholder").innerHTML = "Tad tu esi pareizajā vietā!";
}
function no(){
    document.getElementById("placeholder").innerHTML="Lasies";
}

function Rezultati(){
    var vj1 = parseFloat(document.getElementById("Jautajums1").value);
    var vj2 = parseFloat(document.getElementById("Jautajums2").value);
    var vj3 = parseFloat(document.getElementById("Jautajums3").value);
    var vj4 = parseFloat(document.getElementById("Jautajums4").value);
    var vj5 = parseFloat(document.getElementById("Jautajums5").value);
    document.getElementById("Rezultati").innerHTML = vj1 + vj2;
    let vRez = document.getElementById("Rezultati").innerHTML = vj1 + vj2 + vj3 + vj4 + vj5;
    if (vRez <= 7) {
        document.getElementById("Rezultatii").innerHTML = "Tavs trauks ir bļoda! :D"
    } else {
        document.getElementById("Rezultatii").innerHTML = "Tavs trauks nav bļoda :("
    }
}
function atsauksme(){
    alert("Ļoti novērtēju jauko atsauksmi!");
}
function novertejums(){
    document.getElementById("novertejums").style.display = "none";
}