$(document).ready(function () {
  // 1. Fade-in semua gambar saat halaman dimuat
  $(".gallery img").each(function (index) {
    $(this)
      .delay(index * 200)
      .animate({ opacity: 1 }, 500);
  });

  // 2. Klik gambar untuk menampilkan modal
  $(".gallery img").on("click", function () {
    const src = $(this).attr("src");
    $("#modalImage").attr("src", src);
    $("#imageModal").fadeIn(300);
  });

  // 3. Tutup modal dengan tombol "close" atau klik luar modal
  $(".close, #imageModal").on("click", function (event) {
    if (event.target !== event.currentTarget) return;
    $("#imageModal").fadeOut(300);
  });
});
