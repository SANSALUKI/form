function startAnimation() {
    const h2Element = document.querySelector("h2");
    h2Element.classList.add("animate__bounce");
  }
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const komentar = document.getElementById("komentar");
    const resetButton = document.getElementById("reset");
  
    // Sembunyikan form komentar saat halaman dimuat
    form.style.display = "none";
  
    // Menampilkan form komentar dengan efek fadeIn saat tombol "Kirim" diklik
    document.querySelector("input[type='submit']").addEventListener("click", function() {
      form.style.display = "block";
      form.classList.add("animate__animated", "animate__fadeIn");
    });
  
    // Tombol "Batal" akan menghilangkan form komentar dengan efek fadeOut
    resetButton.addEventListener("click", function() {
      form.classList.add("animate__animated", "animate__fadeOut");
      form.addEventListener("animationend", function() {
        form.style.display = "none";
        form.classList.remove("animate__animated", "animate__fadeOut");
        komentar.value = ""; // Reset teks komentar
      });
    });
  });
    