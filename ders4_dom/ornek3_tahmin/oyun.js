//bilgisayar 1-20 arasında bir sayı tut

 let rastgeleSayi=   Math.floor(Math.random()*20+1);
let puanPc=10;
 let rekorPc=0;
 
 //her kontrol et butonuna tıklandığında çalıştırdım
 document.querySelector(".kontrol").onclick=function()
 {
   //tahminim doğruysa
   const tahmin=document.querySelector(".tahmin").value;
   if(tahmin==rastgeleSayi){
document.querySelector("body").style.backgroundColor="green";
document.querySelector(".question").textContent=rastgeleSayi;
document.querySelector(".mesaj").textContent="🎉Tebrikler Bildiniz";

//rekoru güncelle
if (puanPc>rekorPc) {

    rekorPc=puanPc;
    document.querySelector(".rekor-skor").textContent=puanPc;
    
}

   }

   else{
       if (puanPc>1) {
        puanPc--;  
        
        tahmin<rastgeleSayi ? (document.querySelector(".mesaj").textContent= "📈Arttır"):(document.querySelector(".mesaj").textContent="📉Azalt");
        document.querySelector(".skor").textContent=puanPc;
       }
   }

 };










