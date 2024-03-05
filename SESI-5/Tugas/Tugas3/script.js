const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // mencegah halaman web ter-refresh otomatis setelah submit.

  // mengambil nilai(value) input dari form yang dimasukkan oleh user
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Menyimpan data ke local storage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  // localStorage.setItem("password", password);

  // Menampilkan pesan sukses
  alert("Registrasi berhasil!");

  // setelah alert register berhasil, user akan dibawa kehalaman tugas3.html
  window.location.href = "tugas3.html";
});
