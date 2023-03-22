
let surucuYasi = 19
if(surucuYasi>18){
  console.log(true)
}else{
  console.log(false)
}


let birinciDeger = 10
let ikinciDeger = 20
if(ikinciDeger > birinciDeger){
  birinciDeger = 15
}
console.log(birinciDeger);


let x = "1999"
let num = parseInt(x)
console.log(x);

function carpma(a,b) {
 return a * b;
}


function kopeginYasi(insanYasi) {
  return insanYasi * 7;
}

function oyun(oyuncu, bilgisayar) {
  if(oyuncu == "Taş" && bilgisayar == "Makas"){
    return "Kazandın!"
  }
  else if(oyuncu == "Taş" && bilgisayar == "Kağıt"){
    return "Kaybettin!";
  }
  else if(oyuncu == bilgisayar){
    return "Beraberlik";
  }else if(oyuncu == "Kağıt" && bilgisayar == "Taş"){ 
    return "Kazandın!"
  }else if(oyuncu == "Kağıt" && bilgisayar == "Makas"){
    return "Kaybettin!"
  }else if(oyuncu == "Makas" && bilgisayar == "Kağıt"){
    return "Kazandın!"
  }else if(oyuncu == "Makas" && bilgisayar == "Taş"){
    return "Kaybettin!"
  }
}

function bilgisayarinSecimi(){
  let secim;
  let index = Math.random() * 3;
  index = Math.ceil(index);
  console.log(index)
  if(index == 1){
    secim = "Makas";
  }else if(index == 2){
    secim == "Kağıt";
  }else if(index == 3){
    secim == "Taş";
  } 
  return secim;
}


console.log(oyun("Taş",bilgisayarinSecimi()))


function milDonusturucu(km) {
  return km * 0.621371
}

function feetDonusturucu(cm) {
  return cm / 30.48
}

function cocukSarkisi(i) {
  let sarki = i + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"
  return sarki
}

for(let i = 5 ; i > 0 ; i--){
  console.log(cocukSarkisi(i))
}

function notHesapla(not) {
  if(not > 89 && not < 101){
    return "A aldın"
  }
  if(not > 79 && not < 90){
    return "B aldın"
  }
  if(not > 69 && not < 80){
    return "C aldın"
  }
  if(not > 59 && not < 70){
    return "D aldın"
  }
  if(not < 60){
    return "F aldın"
  }
  
}

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}


function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
