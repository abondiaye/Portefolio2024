lastEntry = "number";
console.log('calculette chagreé')
result.onclick = function() {
    if(lastEntry == "number" && input.innerHTML != ""){
        valeur.value += input.innerHTML;
        console.log(valeur.value)
        resultat = eval(valeur.value);
        input.innerHTML = resultat;
        valeur.value=resultat;
        lastEntry = "result"
    }
};
clear.onclick = function() {
    valeur.value = "0+";
    resultat = "0+";
    input.innerHTML = "";
};
suppr.onclick = function() {
    if(lastEntry == "number" || lastEntry == "result"){
        input.innerHTML = input.innerHTML.slice(0,-1);
        lastEntry = "number"
    }
};
carre.onclick = function(){
    if(lastEntry == "number" || lastEntry == "result"){
        resultat= eval( valeur.value + input.innerHTML*input.innerHTML)
        input.innerHTML = resultat;
        valeur.value = resultat;
        lastEntry = "result";
    }
};
pourcent.onclick = function(){
    if(lastEntry == "number"){
        input.innerHTML += this.innerHTML;
        x = valeur.value.slice(0,-1);
        y = valeur.value.slice(-1);

        resultat = eval(x + y + (x*input.innerHTML.slice(0,-1)/100))

        input.innerHTML = resultat;
        valeur.value = resultat;
        lastEntry = "result"
    }
};
virgule.onclick = function() {
    if(lastEntry == "number" && input.innerHTML.indexOf(".") == -1){
        input.innerHTML += ".";
    }
};
let elements = document.querySelectorAll('.btnNombre');
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        if(lastEntry == "number"){
            input.innerHTML += this.innerHTML;
        }else if(lastEntry == "result"){
            input.innerHTML = this.innerHTML;
            valeur.value = 0;
            resultat = 0;
            lastEntry = "number"
        }else{
            input.innerHTML = this.innerHTML;
            lastEntry = "number"
        }
    }
}
let calcul = document.querySelectorAll('.btnCalcul');
for (let i = 0; i < calcul.length; i++) {
    calcul[i].onclick = function() {
        if(lastEntry == "number"){
            valeur.value += input.innerHTML;
            resultat = eval(valeur.value);
            input.innerHTML = resultat;
            valeur.value=resultat;
            valeur.value += this.value;
            lastEntry = "calcul"
        }else if(lastEntry == "result"){
            valeur.value += this.value;
            lastEntry = "calcul"
        }else{
            valeur.value = valeur.value.slice(0,-1);
            valeur.value += this.value;
            // console.log(valeur.value)
        }

        // console.log(resultat)
    }
}


document.addEventListener("keydown", clavierCalculette);

calculette.addEventListener("blur", function(event) {
    console.log('jksqdbfjsbfklqsdnbfklqsbfnqsldfqsdf')
    document.removeEventListener("keydown", clavierCalculette);
});
function clavierCalculette(event) {
    switch (event.key) {
        case "1":
            document.getElementById("1").click();
        break;
        case "2":
            document.getElementById("2").click();
        break;
        case "3":
            document.getElementById("3").click();
        break;
        case "4":
            document.getElementById("4").click();
        break;
        case "5":
            document.getElementById("5").click();
        break;
        case "6":
            document.getElementById("6").click();
        break;
        case "7":
            document.getElementById("7").click();
        break;
        case "8":
            document.getElementById("8").click();
        break;
        case "9":
            document.getElementById("9").click();
        break;
        case "0":
            document.getElementById("0").click();
        break;
        case "+":
            document.getElementById("plus").click();
        break;
        case "-":
            document.getElementById("moins").click();
        break;
        case "/":
            document.getElementById("divise").click();
        break;
        case "*":
            document.getElementById("multiplie").click();
        break;
        case "Enter":
            document.getElementById("result").click();
        break;
        case "Backspace":
            document.getElementById("suppr").click();
        break;
        case ".":
            document.getElementById("virgule").click();
        break;
        case "%":
            document.getElementById("pourcent").click();
        break;
        case "Delete":
            document.getElementById("clear").click();
        break;
        case "²":
            document.getElementById("carre").click();
        break;
        default:
        break;
    }
}

close_calculette.addEventListener("click", function(event) {

    // console.log(event.target)
    hide(calculette)
    show(bureau_titre)
    document.removeEventListener("keydown", clavierCalculette);
});

calculetteCharger = true
