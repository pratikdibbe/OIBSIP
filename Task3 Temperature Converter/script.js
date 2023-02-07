function celcius(val) {


    val = parseFloat(val);
    document.getElementById("fh").value = (val * (9 / 5)) + 32;
    document.getElementById("kl").value = val + 273.15

    document.getElementById("cel").style.color = "black";
    document.getElementById("fh").style.color = "black";
    document.getElementById("kl").style.color = "black";

}