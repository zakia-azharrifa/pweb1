<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracer Alumni</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Tracer Alumni</h1>
        
        <!-- Form Input Alumni -->
        <form id="formAlumni">
            <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" class="form-control" id="nama" name="nama" required>
            </div>
            <div class="mb-3">
                <label for="perusahaan" class="form-label">Perusahaan</label>
                <input type="text" class="form-control" id="perusahaan" name="perusahaan" required>
            </div>
            <div class="mb-3">
                <label for="posisi" class="form-label">Posisi</label>
                <input type="text" class="form-control" id="posisi" name="posisi" required>
            </div>
            <div class="mb-3">
                <label for="tahun_lulus" class="form-label">Tahun Lulus</label>
                <input type="number" class="form-control" id="tahun_lulus" name="tahun_lulus" required>
            </div>
            <button type="submit" class="btn btn-warning">Kirim</button>
        </form>

        <!-- Tabel Data Alumni -->
        <div class="mt-5">
            <h2>Data Alumni</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Perusahaan</th>
                        <th>Posisi</th>
                        <th>Tahun Lulus</th>
                    </tr>
                </thead>
                <tbody id="tabelAlumni">
                    <!-- Data alumni akan dimuat di sini -->
                </tbody>
            </table>
        </div>
    </div>

    <script>
        // Tampilkan data alumni saat halaman dimuat
        $(document).ready(function() {
            loadAlumni();

            // Proses Form Input
            $('#formAlumni').submit(function(e) {
                e.preventDefault();
                $.ajax({
                    url: 'process.php',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        alert(response);
                        loadAlumni();
                        $('#formAlumni')[0].reset();
                    }
                });
            });

            // Fungsi untuk memuat data alumni
            function loadAlumni() {
                $.ajax({
                    url: 'process.php',
                    type: 'GET',
                    success: function(data) {
                        $('#tabelAlumni').html(data);
                    }
                });
            }
        });
    </script>
</body>
</html>
