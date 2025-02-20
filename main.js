let painike = document.getElementById("nappi");
painike.addEventListener("click", lämpötilaMuunnin)

function lämpötilaMuunnin(event) {
    document.getElementById("nollap").innerHTML = ""

    let lämpötila = parseFloat(document.getElementById("tempe").value);
    if (lämpötila.length < 1) { 
        alert("Pitää antaa luku!");
        return
    }
    if (isNaN(lämpötila)) {
        alert("Pitää antaa luku!")
        return
    }
    let valitsin = document.getElementById("valikko").value;

    switch (valitsin) {
        case "fahrCels":
            muunnos = (lämpötila - 32) / 1.8;
            yksiköstä = "Fahrenheit";
            yksikköön = "Celsius";
            absNollaP = -273.15;
            break;
        case "celsFahr":
            muunnos = (lämpötila * 1.8) + 32;
            yksiköstä = "Celsius";
            yksikköön = "Fahrenheit";
            absNollaP = (-273.15 * 1.8) + 32;
            break;
        case "fahrKelv":
            muunnos = (lämpötila + 459.67) / 1.8;
            yksiköstä = "Fahrenheit";
            yksikköön = "Kelvin";
            absNollaP = -273.15 + 273.15
            break;
        case "kelvFahr":
            muunnos = lämpötila * 1.8 - 459.67;
            yksiköstä = "Kelvin";
            yksikköön = "Fahrenheit";
            absNollaP = (-273.15 * 1.8) + 32;
            break;
        case "kelvCels":
            muunnos = lämpötila - 273.15;
            yksiköstä = "Kelvin";
            yksikköön = "Celsius";
            absNollaP = -273.15
            break;
        case "celsKelv":
            muunnos = lämpötila + 273.15;
            yksiköstä = "Celsius";
            yksikköön = "Kelvin";
            absNollaP = -273.15 + 273.15
            break;
    }
    if (muunnos < absNollaP) {
        document.getElementById("nollap").innerHTML = "Syöttämäsi lämpötila on alle absoluuttisen nollapisteen joka on -273,15 celsius -astetta."
    }
    let pyöristysValitsin = document.querySelector('input[name="desimaali"]:checked').value;
    muunnos = muunnos.toFixed(pyöristysValitsin);

    document.getElementById("tulos").innerHTML = `${lämpötila} ${yksiköstä} -astetta on ${muunnos} ${yksikköön} -astetta.`;
    
    }
