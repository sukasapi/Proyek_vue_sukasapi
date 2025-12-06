-- Script SQL untuk membuat database dan tabel
-- Database: vue_db1
-- Password: root

-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS vue_db1 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Gunakan database
USE vue_db1;

-- Buat tabel mahasiswa
CREATE TABLE IF NOT EXISTS mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nim VARCHAR(20) NOT NULL UNIQUE,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    jurusan VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert data contoh (opsional)
INSERT INTO mahasiswa (nim, nama, email, jurusan) VALUES
('123456789', 'Ahmad Rizki', 'ahmad.rizki@example.com', 'Teknik Informatika'),
('123456790', 'Budi Santoso', 'budi.santoso@example.com', 'Sistem Informasi'),
('123456791', 'Siti Nurhaliza', 'siti.nurhaliza@example.com', 'Teknik Komputer');

-- Tampilkan data
SELECT * FROM mahasiswa;

