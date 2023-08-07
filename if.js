let kullaniciAdi = prompt("Kullanici adinizi girin:");
let sifre = prompt("Şifrenizi girin:");

if (kullaniciAdi === "admin" && sifre === "12345") {
  console.log("Giriş başarili Hoş geldiniz Admin");
} else if (kullaniciAdi === "user" && sifre === "6789") {
  console.log("Giriş başarili Hoş geldiniz Kullanici");
} else {
  console.log("Giriş başarisiz Geçersiz kullanici adi veya şifre");
}
