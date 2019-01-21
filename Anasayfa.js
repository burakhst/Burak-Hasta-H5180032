var arttir = 1;
setInterval(function () {
    degistir(arttir);
    if (arttir == 3) {
        arttir = 1;
    } else {
        arttir++;
    }
}, 3000);
function degistir(sayac) {
    if (sayac == 1) {
        document.getElementById("reklam1").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam1.png'></a>";
    } else if (sayac == 2) {
        document.getElementById("reklam1").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam2.png'></a>";
    } else if (sayac == 3) {
        document.getElementById("reklam1").innerHTML = "<a href='https://www.pubg.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam3.jpg'></a>";
    }
}
var arttir2 = 1;
setInterval(function () {
    degistir2(arttir2);
    if (arttir2 == 3) {
        arttir2 = 1;
    } else {
        arttir2++;
    }
}, 3000);
function degistir2(sayac) {
    if (sayac == 1) {
        document.getElementById("reklam2").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam1.png'></a>";
    } else if (sayac == 2) {
        document.getElementById("reklam2").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam2.png'></a>";
    } else if (sayac == 3) {
        document.getElementById("reklam2").innerHTML = "<a href='https://www.pubg.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam3.jpg'></a>";
    }
}
var arttir3 = 1;
setInterval(function () {
    degistir3(arttir3);
    if (arttir3 == 3) {
        arttir3 = 1;
    } else {
        arttir3++;
    }
}, 3000);
function degistir3(sayac) {
    if (sayac == 1) {
        document.getElementById("reklamBir").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam1.png'></a>";
    } else if (sayac == 2) {
        document.getElementById("reklamBir").innerHTML = "<a href='https://www.norsmt2.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam2.png'></a>";
    } else if (sayac == 3) {
        document.getElementById("reklamBir").innerHTML = "<a href='https://www.pubg.com/'><img src='file:///C:/Users/ENSAR%20HASTA/Desktop/Wike%20Up/Foto%C4%9Fraflar/reklam3.jpg'></a>";
    }
}
