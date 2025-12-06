<?php
/**
 * API Backend untuk CRUD Mahasiswa
 * Database: vue_db1
 * Password: root
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Konfigurasi Database
$host = 'localhost';
$dbname = 'vue_db1';
$username = 'root';
$password = 'root';

try {
    // Koneksi ke database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Koneksi database gagal: ' . $e->getMessage()
    ]);
    exit;
}

// Ambil action dari query string
$action = $_GET['action'] ?? '';

// Switch berdasarkan action
switch ($action) {
    case 'read':
        // READ - Ambil semua data
        try {
            $stmt = $pdo->query("SELECT * FROM mahasiswa ORDER BY id DESC");
            $students = $stmt->fetchAll();
            
            echo json_encode($students);
        } catch (PDOException $e) {
            echo json_encode([
                'success' => false,
                'error' => 'Error membaca data: ' . $e->getMessage()
            ]);
        }
        break;
        
    case 'create':
        // CREATE - Tambah data baru
        try {
            $nim = $_POST['nim'] ?? '';
            $nama = $_POST['nama'] ?? '';
            $email = $_POST['email'] ?? '';
            $jurusan = $_POST['jurusan'] ?? '';
            
            // Validasi
            if (empty($nim) || empty($nama) || empty($email) || empty($jurusan)) {
                throw new Exception('Semua field harus diisi');
            }
            
            // Check NIM sudah ada
            $stmt = $pdo->prepare("SELECT id FROM mahasiswa WHERE nim = ?");
            $stmt->execute([$nim]);
            if ($stmt->fetch()) {
                throw new Exception('NIM sudah terdaftar');
            }
            
            // Insert data
            $stmt = $pdo->prepare("
                INSERT INTO mahasiswa (nim, nama, email, jurusan) 
                VALUES (?, ?, ?, ?)
            ");
            $stmt->execute([$nim, $nama, $email, $jurusan]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Data berhasil ditambahkan',
                'id' => $pdo->lastInsertId()
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                'success' => false,
                'error' => 'Error menyimpan data: ' . $e->getMessage()
            ]);
        } catch (Exception $e) {
            echo json_encode([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
        break;
        
    case 'update':
        // UPDATE - Update data yang ada
        try {
            $id = $_POST['id'] ?? '';
            $nama = $_POST['nama'] ?? '';
            $email = $_POST['email'] ?? '';
            $jurusan = $_POST['jurusan'] ?? '';
            
            // Validasi
            if (empty($id) || empty($nama) || empty($email) || empty($jurusan)) {
                throw new Exception('Semua field harus diisi');
            }
            
            // Update data
            $stmt = $pdo->prepare("
                UPDATE mahasiswa 
                SET nama = ?, email = ?, jurusan = ? 
                WHERE id = ?
            ");
            $stmt->execute([$nama, $email, $jurusan, $id]);
            
            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Data berhasil diupdate'
                ]);
            } else {
                throw new Exception('Data tidak ditemukan');
            }
        } catch (PDOException $e) {
            echo json_encode([
                'success' => false,
                'error' => 'Error mengupdate data: ' . $e->getMessage()
            ]);
        } catch (Exception $e) {
            echo json_encode([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
        break;
        
    case 'delete':
        // DELETE - Hapus data
        try {
            $id = $_POST['id'] ?? '';
            
            if (empty($id)) {
                throw new Exception('ID tidak valid');
            }
            
            // Delete data
            $stmt = $pdo->prepare("DELETE FROM mahasiswa WHERE id = ?");
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Data berhasil dihapus'
                ]);
            } else {
                throw new Exception('Data tidak ditemukan');
            }
        } catch (PDOException $e) {
            echo json_encode([
                'success' => false,
                'error' => 'Error menghapus data: ' . $e->getMessage()
            ]);
        } catch (Exception $e) {
            echo json_encode([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
        break;
        
    default:
        echo json_encode([
            'success' => false,
            'error' => 'Action tidak valid'
        ]);
        break;
}
?>

