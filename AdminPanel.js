function giris(adres) {

    if (document.getElementById('kullanici').value != "") {
        if (document.getElementById('kullanici').value == localStorage.getItem('kullanici1') && document.getElementById('sifre').value == localStorage.getItem('sifre1')) {
            window.open(adres);
        }
        else {
            alert("Giriş Yetkiniz Yok Lütfen Kayıt Olunuz!");
            
        }
    }
    else {
        alert("Kullanıcı Adı ve Şifrenizi Giriniz!");

    window.location.reload;
    }
}
function pencereAcTest() {
    giris("Profil.html");

}
function kayıtOl() {
    localStorage.setItem('kullanici1', document.getElementById('kullanici1').value);
    document.getElementById('kullanici1').value
    localStorage.setItem('sifre1', document.getElementById('sifre1').value);
    localStorage.getItem('sifre1');
    if (document.getElementById('kullanici1').value.length <= 3) {
        alert('Kullanıcı adı 3 karakterden uzun olmalı!')
        
    }
    else if (document.getElementById('kullanici1').value == "") {
        alert('Kayıt Başarısız.Lütfen Tekrar Deneyin')
    } else if(document.getElementById('kullanici1').value.length > 3) {
        if(document.getElementById('sifre1').value.length > 3){
        alert('Kaydınız Basarıyla tamamlanmıştır,Giriş yapabilirsiniz');
        window.location.href = 'AdminPanel.html';
        }else {
            alert('Şifre 3 karakterden uzun olmalı!')
        }
    }
    
}
function geriGel() {
    window.location.href = 'AdminPanel.html';
}
