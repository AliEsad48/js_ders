const yaslar=[5, 10, 28, 42];

const isimler=["Hakan", "Alaaddin", "Furkan","Dayanch",20, 40, true, 23.5, yaslar,"Ayse" ];
// console.log(isimler);

 console.log( isimler[3]);
  console.log( isimler[3]="Sadi");
  // const değiştirilemiyordu ama non-primitive
// lerde (arrayler) değiştirilebiliyor. dizi bir adres gösterir isimler gibi, o yüzden primitive den farklı

isimler[isimler.length-2]=false;
 
console.log( isimler[8][0]);

//****** DİZİYİ DEĞİŞTİREN METODLAR********* */

let meyveler= ["Elma", "Armut" , "Muz", "Kivi"];

const baslik= document.querySelector(".baslik");


//pop() en son elemanı siler
//log içinde yazdırırsanız da sildiğini yazdırır.

// meyveler.pop();
console.log(meyveler.pop());


//shift() dizinin 0 indexl elmanını yani ilk elemanını siler , ve yazdırırsak sildiği elemanı döndürür

//meyveler.shift();//[Armut,Muz]
console.log(meyveler.shift());
//silme methodları log da yazdırılırsa sildiği elemanı döndürür.












baslik.textContent=meyveler;
console.log(meyveler);