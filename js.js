var me = {};
me.avatar = "avatar/me.jpg";

var you = {};
you.avatar = "avatar/covid.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ';
    return strTime;
}            

function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var controls = "";
    var end = "";
    var informasi = "Ada lagi yang ingin kamu tanyakan? Kalau ada, ketik <b>Menu</b> untuk kembali ke menu utama, atau ketik <b>SELESAI</b> bila mau mengakhiri perbincangan kita hari ini.";
    var date = formatAMPM(new Date());
    


    if ( text == "Halo" || text=="Menu" ){
        end='';
        control = '<li style="width:100%">' +
        '<div class="msj-rta macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
            '<div class="text text-r">' +
                '<p>'+ text  +'</p>' +
                '<p><small>'+date+'</small></p>' +
            '</div>' +
        '</div>' +
    '</li>';       
    
    controls = '<li style="width:100%;">' +
                        '<div class="msj macro">' +
                            '<div class="text text-l">' +
                                '<p>Halo! Selamat datang di Pusat Informasi Covid-19 powered by Kemkominfo RI. Semoga kamu sehat-sehat selalu.</p>' +
                                '<p>Apa saja sih yang ingin kamu ketahui mengenai Covid-19? </p> <br>' +
                                '<p>1. Kabar Covid-19 terkini di Indonesia</p>' +
                                '<p>2. Sebenarnya apa sih Covid-19 itu?</p>' +
                                '<p>3. Apa saja gejala Covid-19? </p>' +
                                '<p>4. Bagaimana cara melindungi diri? </p>' +
                                '<p>5. Bagaimana cara melindungi orang lain? </p>' +
                                '<p>6. Masker perlu gak sih? </p>' +
                                '<p>7. Rumah Sakit Rujukan Covid-19 </p>' +
                                '<br>'+
                                '<p> Ketik 1, 2, 3, 4, 5, 6, atau 7, lalu kirim ke kami. Maka, kami akan menjawab pertanyaan kamu. </p>' +
                               
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';

    }else if ( text == "1"){
        end='';
        control = '<li style="width:100%">' +
        '<div class="msj-rta macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
            '<div class="text text-r">' +
                '<p>'+ text  +'</p>' +
                '<p><small>'+date+'</small></p>' +
            '</div>' +
        '</div>' +
    '</li>';       
    
    controls = '<li style="width:100%;">' +
                        '<div class="msj macro">' +
                            '<div class="text text-l">' +
                                '<p><b>Situasi virus corona (COVID-19) 21 Maret 2020 </b></p>' +
                                '<p>Global</p>' +
                                '<p>Negara / Kawasan: 159 (8 baru)</p>' +
                                '<p>Kasus Terkonfirmasi: 244,525</p>' +
                                '<p>Sembuh: 86,032</p>' +
                                '<p>Kematian: 10,031</p>' +

                                '<p><br></p>' +
                                '<p><b>Indonesia</b></p>' +
                                '<p>Positif COVID-19 : 450 </p>' +
                                '<p>Sembuh (Positif COVID-19) : 20  </p>' +
                                '<p>Meninggal (Positif COVID-19):  38 </p>' +
                                '<p>Positif COVID-19 : 450 </p>' +
                                '<p>Untuk info peta sebaran COVID-19 bisa klik link berikut  </p>' +
                                '<p>https://www.covid19.go.id/situasi-virus-corona/</p>' +
                                '<p><br></p>' +
                                '<p>'+informasi+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';

    
    }else if ( text == "2"){
                    end='';
                    control = '<li style="width:100%">' +
                    '<div class="msj-rta macro">' +
                    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                        '<div class="text text-r">' +
                            '<p>'+ text  +'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '</div>' +
                '</li>';       
                
                controls = '<li style="width:100%;">' +
                                    '<div class="msj macro">' +
                                        '<div class="text text-l">' +
                                            '<p>Coronavirus itu merupakan keluarga besar virus yang dapat menyerang manusia dan hewan. Nah, pada manusia, biasanya menyebabkan penyakit infeksi saluran pernafasan, mulai dari flu biasa hingga penyakit serius, seperti MERS dan SARS. </p>' +
                                            '<p><br></p>' +
                                            '<p>Covid-19 sendiri merupakan coronavirus jenis baru yang ditemukan pada manusia di daerah Wuhan, Provinsi Hubei, China pada tahun 2019.</p>' +
                                            '<p><br></p>' +
                                            '<p>Maka dari itu, Coronavirus jenis baru ini diberi nama Coronavirus Disease-2019 yang disingkat menjadi Covid-19.</p>' +
                                            '<p><br></p>' +
                                            '<p>'+informasi+'</p>' +
                                            '<p><small>'+date+'</small></p>' +
                                        '</div>' +
                                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                              '</li>';
        }else if ( text == "3"){
            end='';
            control = '<li style="width:100%">' +
            '<div class="msj-rta macro">' +
            '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                '<div class="text text-r">' +
                    '<p>'+ text  +'</p>' +
                    '<p><small>'+date+'</small></p>' +
                '</div>' +
            '</div>' +
        '</li>';       
        
        controls = '<li style="width:100%;">' +
                            '<div class="msj macro">' +
                                '<div class="text text-l">' +
                                    '<p>Gejala Covid-19 ini pada umumnya berupa:</p>' +
                                    '<p><b>Demam 38°C</b></p>' +
                                    '<p><b>Batuk kering</b></p>' +
                                    '<p><b>Sesak nafas</b></p>' +
                                    '<p><br></p>' +
                                    '<p>Nah, kalau kamu habis berpergian dan 14 hari kemudian mengalami gejala ini, segera ke Rumah Sakit rujukan untuk memeriksakan diri kamu lebih menyeluruh. <b>Oh ya, saat ke Rumah Sakit, jangan menggunakan transportasi umum ya. </b></p>' +
                                    '<p><br></p>' +
                                    '<p>Kenapa? Untuk mencegah penyebaran Covid-19 lebih luas. </p>' +
                                    '<p><br></p>' +
                                    '<p>'+informasi+'</p>' +
                                    '<p><small>'+date+'</small></p>' +
                                '</div>' +
                            '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                      '</li>';

}else if ( text == "4"){
    end='';
    control = '<li style="width:100%">' +
    '<div class="msj-rta macro">' +
    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-r">' +
            '<p>'+ text  +'</p>' +
            '<p><small>'+date+'</small></p>' +
        '</div>' +
    '</div>' +
'</li>';       

controls = '<li style="width:100%;">' +
                    '<div class="msj macro">' +
                        '<div class="text text-l">' +
                            '<p><b>Yang dapat kamu lakukan dalam melindungi diri sendiri adalah dengan cara: </b></p>' +
                            '<p><br></p>' +
                            '<p>-Rajin-rajin cuci tangan dengan sabun! Jangan lupa! Sebelum makan, setelah dari toilet, setelah memegang binatang, atau setelah berpergian.</p>' +
                            '<p>-Ketika batuk atau bersin jangan lupa untuk menutup mulut dan hidung kamu, ya. Pakai tissue, saputangan, atau lipatan siku.</p>' +
                            '<p>-Hindari kontak dekat dengan orang yang menunjukkan gejala Covid-19</p>' +
                            '<p>-Hindari kerumunan</p>' +
                            '<p>-Jangan lupa untuk jaga jarak lebih dari 1 meter  antar kamu dan orang-orang di sekitarmu (social distancing) </p>'+
                            '<p><br></p>' +
                            '<p>'+informasi+'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
              '</li>';
}else if ( text == "5"){
    end='';
    control = '<li style="width:100%">' +
    '<div class="msj-rta macro">' +
    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-r">' +
            '<p>'+ text  +'</p>' +
            '<p><small>'+date+'</small></p>' +
        '</div>' +
    '</div>' +
'</li>';       

controls = '<li style="width:100%;">' +
                    '<div class="msj macro">' +
                        '<div class="text text-l">' +
                            '<p>Yang bisa kamu lakukan untuk melindungi orang-orang terdekatmu dari Covid-19, yaitu:</p>' +
                            '<p><br></p>' +
                            '<p>- Saat kamu batuk atau bersin, jangan lupa untuk menjauh dan menutup mulut serta  hidung kamu dengan tissue, saputangan, atau lipatan siku.</p>' +
                            '<p>- Segera membuang tisu atau masker yang telah kamu gunakan ke tempat sampah. </p>' +
                            '<p>- Jangan lupa untuk merobek masker yang telah digunakan ya, untuk mencegah penggunaan ulang masker. </p>' +
                            '<p>- Jangan lupa untuk mencuci tanganmu dengan sabun setelah batuk atau bersin. </p>' +
                            '<p>- Jangan meludah disembarang tempat</p>' +
                            '<p>-Segera menghubungi Rumah Sakit rujukan bila orang terdekatmu  </p>' +
                            '<p><br></p>' +
                            '<p>'+informasi+'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
              '</li>';
}else if ( text == "6"){
    end='';
    control = '<li style="width:100%">' +
    '<div class="msj-rta macro">' +
    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-r">' +
            '<p>'+ text  +'</p>' +
            '<p><small>'+date+'</small></p>' +
        '</div>' +
    '</div>' +
'</li>';       

controls = '<li style="width:100%;">' +
                    '<div class="msj macro">' +
                        '<div class="text text-l">' +
                            '<p>Pemakaian masker sebenarnya <b>hanya</b> untuk mereka yang sedang batuk-batuk atau bersin. Penggunaan masker juga dikhususkan <b> bagi petugas</b> yang merawat Covid-19 ataupun <b>orang-orang terdekat </b> yang merawat orang bergejala Covid-19 </p>' +
                            '<p><br></p>' +
                            '<p>Bagi kamu yang masih merasa khawatir dan tidak memiliki masker, alternatif yang dapat kamu lakukan adalah dengan menggunakan kain. Jangan lupa untuk <b> selalu mencuci kain yang dijadikan masker. </b></p>' +
                            '<p><br></p>' +
                            '<p>'+informasi+'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
              '</li>';
}else if ( text == "7"){
    end='';
    control = '<li style="width:100%">' +
    '<div class="msj-rta macro">' +
    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-r">' +
            '<p>'+ text  +'</p>' +
            '<p><small>'+date+'</small></p>' +
        '</div>' +
    '</div>' +
'</li>';       

controls = '<li style="width:100%;">' +
                    '<div class="msj macro">' +
                        '<div class="text text-l">' +
                            '<p>Kementerian Kesehatan sudah menentukan 132 Rumah Sakit rujukan untuk menangani kasus Covid-19.</p>' +
                            '<p><br></p>' +
                            '<p>Untuk meminimalisir membludaknya isi chat kamu, saya perlu tahu kamu berada di Provinsi mana. Jawab saja kamu berada di Provinsi mana, contohnya Jawa Barat. </p>' +
                            '<p><br></p>' +
                            '<p>'+informasi+'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
              '</li>';
}else{
    end='';
    control = '<li style="width:100%">' +
    '<div class="msj-rta macro">' +
    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-r">' +
            '<p>'+ text  +'</p>' +
            '<p><small>'+date+'</small></p>' +
        '</div>' +
    '</div>' +
'</li>';    

    }


    setTimeout(
        function(){        
            $("ul").append(end).scrollTop($("ul").prop('scrollHeight'));                
            $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
            $("ul").append(controls).scrollTop($("ul").prop('scrollHeight'));
        }, 500);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
})


resetChat();

