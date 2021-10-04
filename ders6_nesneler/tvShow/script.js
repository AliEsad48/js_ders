var showListe = [];
/* json dosyasindan veri cekme asamalari */
fetch("./tv-shows.json").then((cevap)=>cevap.json()).then((veri)=> {
showListe = veri;
showIzle(showListe)
})
function showIzle(showListe) {
//!https://getbootstrap.com/docs/4.0/components/card/  
var liste =  document.querySelector(".liste");
showListe.forEach((a)=> {
liste.innerHTML = liste.innerHTML +`<div class="col-md-3">
<img class="card-img-top" src=${a.show.image.medium} alt="Card image cap">
<div class="card-body">
  <h5>${a.show.name}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="${a.show.url}" target = "_blank" class="btn btn-primary">Detaylar</a>
</div>
</div>`;
})
}