//********* Nesneler  */
//Diziler sirali bellek bolgeleridir. Dolayisiyla dizilere erisim index ile oluyor.
//Eger diziler komplex yapida (nesne) ise index ile erisim guclugu ortaya cikar.
//Bu yuzden => ...
//!Object(Nesne)
//Nesnelerde key-value (property-value) yapisi kullanilir.
//Nesnelerde aradigimiz veriye erismek icin key kullanmak gerekir.
const insan = {
    ad: "Kenan",
    soyad: "Kul",
    yas: 30,
    meslek: "developer",
    diller: ["Java", "JS", "SQL", "HTML"],
  };
  console.log(insan);
  //1.Yol:
  console.log(insan.ad);
  console.log(insan.diller);
  //2.Yol:
  console.log(insan["ad"]);
  console.log(insan["diller"]);
  console.log(`adim ${insan.ad} ve yasim ${insan.yas}`);
  //const bilgi = prompt("Insan nesnesinden hangisini gormek istersin? (ad, soyad, yas")
  //console.log(insan[bilgi]);  //--> Prompt'tan gelen girdiler cift tirnak ile geldigi icin nesne icerisinden eleman cagirimini bu yol (2.yol) ile yapmak zorundayiz.
  //console.log(insan.bilgi); //--> Cift tirnak ile geldigi icin bu yol calismaz.
  //Objeye key-value ekleme (sonradan)
  //1.Yol:
  insan.konum = "Turkiye";
  insan.email = "insan@hotmail.com";
  //2.Yol:
  insan["dogumTarihi"] = 1991;
  console.log(insan);
  //********* Nesne methodlari */
  const kisi = {
    ad: "Merve",
    soyad: "Aslan",
    dogumTarihi: "1990",
    mesle: "tester",
    tool: "selenium",
    ahliyet: "true",
    yasHesapla: function () {
      //Bugunun tarihini al => Date().getFullYear()
      return new Date().getFullYear() - this.dogumTarihi;
    },
    ozet: function () {
      return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
    },
  };
  console.log(kisi);
  console.log(kisi.yasHesapla());
  console.log(kisi.ozet());
  //Nesne (object) iterasyon ornekleri
  const people = [
    {
      ad: "Hakan",
      soyad: "Inal",
      meslek: "Developer",
      yas: 41,
    },
    {
      ad: "Said",
      soyad: "Cin",
      meslek: "Tester",
      yas: 37,
    },
    {
      ad: "Kubilay",
      soyad: "Tuncel",
      meslek: "Team Lead",
      yas: 33,
    },
    {
      ad: "Osman",
      soyad: "Turker",
      meslek: "Grafiker",
      yas: 29,
    },
    {
      ad: "Huseyin",
      soyad: "Harran",
      meslek: "Doktor",
      yas: 32,
    },
  ];
  console.log(people);
  //Ornek1: People dizisindeki kisilerin mesleklerini konsolda yazdiralim
  people.forEach((x)=> console.log(x.meslek));
  //Ornek2: People dizisindeki tum kisilerin yaslarini 1 arttirarak yazdiriniz
  people.map((x) => x.yas+1).forEach((x)=> console.log(x));
  //Ornek3: Yasi 25'e esit ve ya kucuk olanlarin adlarini yazdir
  people.filter((x) => x.yas <= 35).forEach((x)=> console.log(x.ad));
  //Ornerk4:

