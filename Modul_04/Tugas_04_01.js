const searchInput = document.getElementById("search");
const row = document.querySelectorAll("table tr");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 1; i < row.length; i++) {
    const rowCel = row[i].cells[4];
    const jurusanText = rowCel.textContent.toLowerCase();

    if (jurusanText.includes(searchTerm)) {
      row[i].style.display = "";
    } else {
      row[i].style.display = "none";
    }
  }
});
