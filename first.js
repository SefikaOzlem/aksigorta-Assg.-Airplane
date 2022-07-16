var leftMar = 100; // margin-left for clouds and images
var topMar = 0; // margin-top for clouds and images
var direction;
var intcloud; // set interval cloud
var intcloudUpd; // set interval update cloud
var intimages; // set interval image
var intiamgesUpd; // set interval update images
var score = 0;

function startGame() { // uygulamayı başlatan fonksiyondur. kod bloklarının tekrarlı çalışma sürelerini içerir.
    intcloud = setInterval(updateCloud, 3000);
    intcloudUpd = setInterval(updateCloudPos, 50);
    intimages = setInterval(updateImage, 2000);
    intiamgesUpd = setInterval(updateImagePos, 20);
    document.querySelector(".start").style.display = "none";
    document.querySelector(".stop").style.display = "inline";
}

function stopGame() { // uygulamanın çalışmasını bitiren ve resetleyen fonksiyondur.
    clearInterval(intcloud);
    clearInterval(intcloudUpd);
    clearInterval(intimages);
    clearInterval(intiamgesUpd);

    document.querySelector(".start").style.display = "inline";
    document.querySelector(".stop").style.display = "none";
}


function updateCloud() { // ekranda çıkan bulutların random olarak üretilen margin-top değerini css kodundaki belirteciyle çağırarak yeni random değer atar.
    leftMar = 100;
    topMar = (Math.floor(Math.random() * 85) + 1);
    direction = (Math.floor(Math.random() * 2) + 1);
    document.querySelector(".cloud").style.top = topMar + "vh";
}

function updateImage() { // ekranda çıkan resimlerin  random olarak üretilen margin-top değerini css kodundaki belirteciyle çağırarak yeni random değer atar.
    topMar = 100;
    leftMar = (Math.floor(Math.random() * 85) + 1);
    direction = (Math.floor(Math.random() * 2) + 1);
    document.querySelector(".image").style.left = leftMar + "vh";

    document.querySelector(".imageTwo").style.left = leftMar + 40 + "vh";
    document.querySelector(".imageThree").style.left = leftMar + 20 + "vh";
}

function updateCloudPos() { // ekranda çıkan bulutların pozisyonlarını günceller.
    leftMar -= 1;
    document.querySelector(".cloud").style.left = leftMar + "vw";
    document.querySelector(".upArrow").style.left = (leftMar + 8) + "vw";
    document.querySelector(".downArrow").style.left = (leftMar + 8) + "vw";

}

function updateImagePos() { // ekranda çıkan resimlerin pozisyonlarını günceller.
    topMar -= 1;
    document.querySelector(".image").style.top = topMar + "vw";
    document.querySelector(".imageTwo").style.top = topMar + "vw";
    document.querySelector(".imageThree").style.top = topMar + "vw";
    document.querySelector(".upArrow").style.top = (topMar + 8) + "vw";
    document.querySelector(".downArrow").style.top = (topMar + 8) + "vw";

}