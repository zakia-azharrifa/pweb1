$(document).ready(function () {
  // Event Mouse: Click
  $("#contactButton").click(function () {
    alert("Anda akan menghubungi alumni!");
  });

  // Event Mouse: Hover (mouseenter dan mouseleave)
  $("#hoverProfile").hover(
    function () {
      // Mouse enter
      $(this).css({
        "background-color": "lightblue",
        transform: "scale(1.05)",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.3)",
      });
      $(this).find("img").css({
        transform: "scale(1.1)",
        filter: "brightness(1.2)",
      });
    },
    function () {
      // Mouse leave
      $(this).css({
        "background-color": "lightgray",
        transform: "scale(1)",
        "box-shadow": "none",
      });
      $(this).find("img").css({
        transform: "scale(1)",
        filter: "brightness(1)",
      });
    }
  );

  // Event Keyboard: keydown
  $("#searchAlumni").keydown(function (event) {
    $("#output").text("Anda Mengetik: " + event.key);
  });

  //   Event Form: Submit
  $("#alumniForm").submit(function (event) {
    event.preventDefault(); //mencegah pengiriman form
    const name = $("#name").val();
    const year = $("#year").val();
    const photo = $("#photo")[0].files[0];

    if (name && year && photo) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newRow = `
        <tr>
        <td class = "name">${name}</td>
        <td class = "year">${year}</td>
        <td><img src = "${e.target.result}" alt = "Photo ${name}" class = "alumni-photo"></td>
        <td class = "action-buttons"><button class = "delete">Hapus</button></td>
        </tr>
        `;
        $("#alumniTable tbody").append(newRow);

        // Bersihkan form
        $("#name").val("");
        $("#year").val("");
        $("#photo").val("");

        alert("Data Alumni ditambahkan!\nNama: " + name + "\nTahun: " + year);
      };
      reader.readAsDataURL(photo);
    } else {
      alert("Harap isi semua kolom");
    }
  });

  //   Event Dokumen / Window: Resize
  $(window).resize(function () {
    const width = $(window).width();
    const height = $(window).height();
    $("#windowSize").text("Ukuran jendela: " + width + "x" + height);
  });

  //   Event Miscellaneous: Ready
  $(document).ready(function () {
    $("#output").text("Dokumen siap! Semua event siap digunakan");
  });

  //   Event Kustom: Trigger custom Event
  $("#contactButton").click(function () {
    $("#output").trigger("customEvent", ["Kontak Alumni diklik"]);
  });

  $("#output").on("customEvent", function (event, message) {
    $(this).append("<p>Event Kustom dipicu: " + message + "</p>");
  });

  //   Animasi Foto: Fokus, Hilang Fokus, Digeser, Klik, Klik Dua Kali
  $("#alumniTable")
    .on("mouseenter", "img", function () {
      $(this).css({
        transform: "scale(1)",
        filter: "brightness(1)",
      });
    })
    .on("mousedown", "img", function () {
      $(this).css({
        transform: "scale(0.95)",
        filter: "brightness(0.8)",
      });
    })
    .on("mouseup", "img", function () {
      $(this).css({
        transform: "scale(1)",
        filter: "brightness(1)",
      });
    })
    .on("dblclick", "img", function () {
      $(this).css({
        transform: "rotate(15deg)",
        filter: "brightness(1.2)",
      });
      setTimeout(() => {
        $(this).css({
          transform: "rotate(0deg)",
          filter: "brightness(1)",
        });
      }, 500);
    });

  // Event Select, Mouseup, Mousemove, Resize pada gambar
  $("#alumniTable")
    .on("selectstart", "img", function () {
      $("#output").text("Gambar sedang dipilih...");
    })
    .on("mouseup", "img", function () {
      $("#output").text("Mouse button dilepaskan pada gambar.");
    })
    .on("mousemove", "img", function (event) {
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;
      $("#output").text(`Gerakan Mouse: X = ${offsetX}, Y = ${offsetY}`);
    })
    .on("resize", function () {
      $("#windowSize").text("Ukuran jendela: " + $(window).width() + " X" + $(window).height());
    });

  // Hapus Alumni
  $("#alumniTable").on("click", ".delete", function () {
    $(this).closest("tr").remove();
  });
});
