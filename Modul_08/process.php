<?php
session_start();

// Jika array belum ada, buat array kosong
if (!isset($_SESSION['alumni'])) {
    $_SESSION['alumni'] = [];
}

// Proses input data alumni
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama        = $_POST['nama'];
    $perusahaan  = $_POST['perusahaan'];
    $posisi      = $_POST['posisi'];
    $tahun_lulus = $_POST['tahun_lulus'];

    // Simpan data ke dalam array session
    $_SESSION['alumni'][] = [
        'nama' => $nama,
        'perusahaan' => $perusahaan,
        'posisi' => $posisi,
        'tahun_lulus' => $tahun_lulus
    ];

    echo "Data alumni berhasil disimpan!";
}

// Menampilkan data alumni dalam tabel
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!empty($_SESSION['alumni'])) {
        foreach ($_SESSION['alumni'] as $row) {
            echo "<tr>
                    <td>{$row['nama']}</td>
                    <td>{$row['perusahaan']}</td>
                    <td>{$row['posisi']}</td>
                    <td>{$row['tahun_lulus']}</td>
                  </tr>";
        }
    } else {
        echo "<tr><td colspan='4'>Tidak ada data alumni.</td></tr>";
    }
}
?>
