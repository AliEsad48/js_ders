/*================================================================
FONKSİYONLAR
============================================================================/*/

//!1.YÖNTE:FUNCTİON DECLARATİON
//DECLARATİON yöntemi ile fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir


//fonksiyonun tanımlanması
function yazdirAd()
{
console.log("Hakan");
}
//fonksiyonun çağırılması
yazdirAd();//hakan
//ornek: klavyeden girilen sayının tek mi çift mi olduğunu gösteren bir fonksiyon yazınız

const sayiniz=prompt("sayı giriniz");

console.log(tekCift(sayiniz));
function tekCift(sayiniz){
return sayiniz%2==0?`${sayiniz} çifttir`:`${sayiniz} tekdir`;
}

//!2.YÖNTEM : FUNCTİON EXPRESSİON (bu yöntem daha yaygın)






















