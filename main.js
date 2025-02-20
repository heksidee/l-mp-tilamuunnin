document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("lomake");
    const select = document.getElementById("valikko");
    const input = document.getElementById("tempe");
    const radios = document.getElementById("desimaali");
    const button = document.getElementById("nappi");
});

button.addEventListener("click", function() {
    const lämpötila = parseFloat(input.value);
    const muunninTyyppi = select.value;
    let muunnettuLämpötila;

    if (isNaN(lämpötila)) {
        alert("Syötä luku.");
    }
    switch (muunninTyyppi) {
        case "fahrCels":
            muunnettuLämpötila = (lämpötila - 32) / 1.8;
            break;
        case "celsFahr":
            muunnettuLämpötila = (lämpötila * 1.8) + 32;
            break;
        case "fahrKelv":
            muunnettuLämpötila = (lämpötila + 459.67) / 1.8;
            break;
        case "kelvFahr":
            muunnettuLämpötila = lämpötila * 1.8 - 459.67;
            break;
        case "kelvCels":
            muunnettuLämpötila = lämpötila - 273.15;
            break;
        case "celsKelv":
            muunnettuLämpötila = lämpötila + 273.15;
            break;
        

    }
})