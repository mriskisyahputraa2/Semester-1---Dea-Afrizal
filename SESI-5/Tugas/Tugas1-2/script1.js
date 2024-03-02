let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let karyawan = document.getElementById("karyawan");

admin.style.display = "none";
karyawan.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";

  if (usernameInput.value == "admin" && passwordInput.value == "admin") {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "admin");

    karyawan.style.display = "none";
    admin.style.display = "block";
  } else if (usernameInput.value == "" && passwordInput.value == "") {
    alert("Masukkan username dan password dulu");
    logoutButton.style.display = "none";
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "karyawan");

    admin.style.display = "none";
    karyawan.style.display = "block";
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  logoutButton.style.display = "block";

  if (localStorage.getItem("role") == "admin") {
    karyawan.style.display = "none";
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
    karyawan.style.display = "block";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

//   # LocalStorage = memiliki 2 kewajiban yang harus di isi yaitu: key dan value seperti contoh diatas
//     key = "role" dan value = "admin/karyawan".
//     setItem(key, value) = digunakan untuk menyimpan data ke localStorage browser sementara
//     getItem(key) = digunakan untuk membaca data di localStorage
//     removeItem(key) = digunakan untuk menghapus data di localStorage
//     clear(key) = digunakan untuk menghapus semua data yang ada di localStorage
