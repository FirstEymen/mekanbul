var express = require('express');
var router = express.Router();



const anaSayfa = function (req, res, next) {
   res.render('anasayfa', { baslik: 'Ana sayfa',
   'sayfaBaslik':{
      'siteAd':'Mekanbul',
      'slogan':'Civardaki Mekanları Keşfet!'
   },
   'mekanlar':[
      {
         'ad':'Barida Kafe',
         'adres':'Sdü Batı Kampüsü',
         'puan':'5',
         'mesafe':'2km',
         'imkanlar':['Kahve','Çay','Pasta']
      },
      {
         'ad':'Gloria',
         'adres':'Sdü Batı Kampüsü',
         'puan':'4',
         'mesafe':'5km',
         'imkanlar':['Pankek','kahve','Pasta']
      }


   ]


});
}

const mekanBilgisi = function (req, res, next) {
   res.render('mekanbilgisi', { baslik: 'Mekan bilgisi',
   'mekanBaslik':'Barida Kafe',
   'mekanDetay':{
      'ad':'Barida Kafe',
      'adres':'Bahçelievler',
      'puan':'5',
      'saatler':[
         {
            'gunler':'Pazartesi-Cuma',
            'acilis':'9:00',
            'kapanis':'23:00',
            'kapali':'false'
         },
         {
            'gunler':'Cumartesi-Pazar',
            'acilis':'10:00',
            'kapanis':'22:00',
            'kapali':'false'
         }
      ],
      'imkanlar':['kahve','çay','pasta'],
      'koordinatlar':{
         'enlem':'37.7',
         'boylam':'30.5'
      },
      'yorumlar':[

         {
            'yorumYapan':'Sinan',
            'puan':'3',
            'tarih':'20 Ekim 2022',
            'yorumMetni':'Çok berbat'
         },
         {
            'yorumYapan':'Ali',
            'puan':'5',
            'tarih':'20 Ekim 2022',
            'yorumMetni':'Süper'
         }
      ]


   }


});
}

const yorumEkle = function (req, res, next) {
   res.render('yorumekle', { title: 'Yorum ekle' });
}



module.exports = {

   anaSayfa,
   mekanBilgisi,
   yorumEkle

}