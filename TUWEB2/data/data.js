// Data untuk aplikasi Mobile SITTA
const SITTA_DATA = {
    // Data Users untuk Authentication
    users: [ 
        {
            id: 1,
            email: "admin@sitta.ac.id",
            password: "admin123",
            nama: "Administrator",
            nim: "A001",
            role: "admin",
            telepon: "081234567890",
            alamat: "Jakarta"
        },
        {
            id: 2,
            email: "mahasiswa1@student.sitta.ac.id",
            password: "mahasiswa123",
            nama: "Budi Santoso",
            nim: "M001",
            role: "mahasiswa",
            telepon: "081234567891",
            alamat: "Bandung"
        },
        {
            id: 3,
            email: "mahasiswa2@student.sitta.ac.id",
            password: "mahasiswa123",
            nama: "Siti Nurhaliza",
            nim: "M002",
            role: "mahasiswa",
            telepon: "081234567892",
            alamat: "Surabaya"
        }
    ],

    // Data Tracking Pengiriman Bahan Ajar
    tracking: [
        {
            noBilling: "BLG-2024-001",
            nim: "M001",
            nama: "Budi Santoso",
            email: "mahasiswa1@student.sitta.ac.id",
            telepon: "081234567891",
            alamat: "Jl. Merdeka No. 123, Bandung",
            dataPengiriman: {
                noResi: "RESI-2024-001",
                kurir: "JNE",
                tanggalPengiriman: "2024-01-15",
                estimasiSampai: "2024-01-20",
                status: "Dalam Perjalanan",
                lokasiTerakhir: "Bandung",
                detailPerjalanan: [
                    {
                        tanggal: "2024-01-15",
                        waktu: "10:00",
                        status: "Paket diterima di gudang",
                        lokasi: "Jakarta Pusat"
                    },
                    {
                        tanggal: "2024-01-16",
                        waktu: "14:30",
                        status: "Paket sedang dalam perjalanan",
                        lokasi: "Jakarta Pusat"
                    },
                    {
                        tanggal: "2024-01-17",
                        waktu: "09:15",
                        status: "Paket sampai di kota tujuan",
                        lokasi: "Bandung"
                    }
                ]
            },
            dataPembayaran: {
                totalBayar: 250000,
                metodePembayaran: "Transfer Bank",
                tanggalBayar: "2024-01-10",
                statusPembayaran: "Lunas",
                buktiPembayaran: "BUKTI-001.pdf"
            }
        },
        {
            noBilling: "BLG-2024-002",
            nim: "M002",
            nama: "Siti Nurhaliza",
            email: "mahasiswa2@student.sitta.ac.id",
            telepon: "081234567892",
            alamat: "Jl. Diponegoro No. 456, Surabaya",
            dataPengiriman: {
                noResi: "RESI-2024-002",
                kurir: "TIKI",
                tanggalPengiriman: "2024-01-20",
                estimasiSampai: "2024-01-25",
                status: "Sampai Tujuan",
                lokasiTerakhir: "Surabaya",
                detailPerjalanan: [
                    {
                        tanggal: "2024-01-20",
                        waktu: "11:00",
                        status: "Paket diterima di gudang",
                        lokasi: "Jakarta Pusat"
                    },
                    {
                        tanggal: "2024-01-22",
                        waktu: "16:20",
                        status: "Paket sedang dalam perjalanan",
                        lokasi: "Jakarta Pusat"
                    },
                    {
                        tanggal: "2024-01-24",
                        waktu: "10:45",
                        status: "Paket sampai di kota tujuan",
                        lokasi: "Surabaya"
                    },
                    {
                        tanggal: "2024-01-25",
                        waktu: "09:30",
                        status: "Paket diterima oleh penerima",
                        lokasi: "Surabaya"
                    }
                ]
            },
            dataPembayaran: {
                totalBayar: 300000,
                metodePembayaran: "E-Wallet",
                tanggalBayar: "2024-01-18",
                statusPembayaran: "Lunas",
                buktiPembayaran: "BUKTI-002.pdf"
            }
        },
        {
            noBilling: "BLG-2024-003",
            nim: "M003",
            nama: "Ahmad Fauzi",
            email: "mahasiswa3@student.sitta.ac.id",
            telepon: "081234567893",
            alamat: "Jl. Gatot Subroto No. 789, Medan",
            dataPengiriman: {
                noResi: "RESI-2024-003",
                kurir: "POS Indonesia",
                tanggalPengiriman: "2024-02-01",
                estimasiSampai: "2024-02-08",
                status: "Dipesan",
                lokasiTerakhir: "Jakarta Pusat",
                detailPerjalanan: [
                    {
                        tanggal: "2024-02-01",
                        waktu: "08:00",
                        status: "Paket sedang dipersiapkan",
                        lokasi: "Jakarta Pusat"
                    }
                ]
            },
            dataPembayaran: {
                totalBayar: 275000,
                metodePembayaran: "Transfer Bank",
                tanggalBayar: "2024-01-30",
                statusPembayaran: "Lunas",
                buktiPembayaran: "BUKTI-003.pdf"
            }
        }
    ],

    // Data Stok Bahan Ajar
    stokBahanAjar: {
        pusat: {
            stokItem: [
                { id: "ITEM-001", nama: "Buku Modul 1", stok: 150, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop" },
                { id: "ITEM-002", nama: "Buku Modul 2", stok: 120, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=200&fit=crop" },
                { id: "ITEM-003", nama: "Buku Modul 3", stok: 180, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop" },
                { id: "ITEM-004", nama: "CD Pembelajaran", stok: 200, satuan: "keping", thumbnail: "https://images.unsplash.com/photo-1593113616828-c4b77101c85c?w=200&h=200&fit=crop" },
                { id: "ITEM-005", nama: "Lembar Kerja", stok: 500, satuan: "lembar", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=200&fit=crop" }
            ],
            stokPaket: [
                { id: "PAKET-001", nama: "Paket Semester 1", stok: 45, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
                { id: "PAKET-002", nama: "Paket Semester 2", stok: 38, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop" },
                { id: "PAKET-003", nama: "Paket Semester 3", stok: 52, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop" },
                { id: "PAKET-004", nama: "Paket Semester 4", stok: 41, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" }
            ],
            stokLokasi: [
                { lokasi: "Gudang A - Jakarta", stokTotal: 350, item: 15, paket: 25 },
                { lokasi: "Gudang B - Jakarta", stokTotal: 280, item: 12, paket: 18 },
                { lokasi: "Gudang C - Jakarta", stokTotal: 420, item: 18, paket: 32 }
            ]
        },
        upbjj: {
            stokItem: [
                { id: "ITEM-UP-001", nama: "Buku Modul 1", stok: 80, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop" },
                { id: "ITEM-UP-002", nama: "Buku Modul 2", stok: 65, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=200&fit=crop" },
                { id: "ITEM-UP-003", nama: "Buku Modul 3", stok: 95, satuan: "buku", thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop" },
                { id: "ITEM-UP-004", nama: "CD Pembelajaran", stok: 120, satuan: "keping", thumbnail: "https://images.unsplash.com/photo-1593113616828-c4b77101c85c?w=200&h=200&fit=crop" },
                { id: "ITEM-UP-005", nama: "Lembar Kerja", stok: 300, satuan: "lembar", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=200&fit=crop" }
            ],
            stokPaket: [
                { id: "PAKET-UP-001", nama: "Paket Semester 1", stok: 25, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
                { id: "PAKET-UP-002", nama: "Paket Semester 2", stok: 20, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop" },
                { id: "PAKET-UP-003", nama: "Paket Semester 3", stok: 28, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop" },
                { id: "PAKET-UP-004", nama: "Paket Semester 4", stok: 22, satuan: "paket", thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" }
            ],
            stokLokasi: [
                { lokasi: "UPBJJ Bandung", stokTotal: 180, item: 8, paket: 12 },
                { lokasi: "UPBJJ Surabaya", stokTotal: 165, item: 7, paket: 10 },
                { lokasi: "UPBJJ Medan", stokTotal: 150, item: 6, paket: 9 },
                { lokasi: "UPBJJ Yogyakarta", stokTotal: 175, item: 8, paket: 11 }
            ]
        }
    },

    // Data Laporan Monitoring
    laporanMonitoring: {
        progressDO: [
            { id: "DO-001", namaMahasiswa: "Budi Santoso", nim: "M001", progress: 75, status: "On Progress" },
            { id: "DO-002", namaMahasiswa: "Siti Nurhaliza", nim: "M002", progress: 100, status: "Selesai" },
            { id: "DO-003", namaMahasiswa: "Ahmad Fauzi", nim: "M003", progress: 50, status: "On Progress" },
            { id: "DO-004", namaMahasiswa: "Dewi Sartika", nim: "M004", progress: 90, status: "On Progress" },
            { id: "DO-005", namaMahasiswa: "Rudi Hartono", nim: "M005", progress: 100, status: "Selesai" }
        ],
        pengirimanDO: [
            { id: "DO-001", tanggal: "2024-01-15", kurir: "JNE", status: "Dalam Perjalanan", estimasi: "2024-01-20" },
            { id: "DO-002", tanggal: "2024-01-20", kurir: "TIKI", status: "Sampai Tujuan", estimasi: "2024-01-25" },
            { id: "DO-003", tanggal: "2024-02-01", kurir: "POS Indonesia", status: "Dipesan", estimasi: "2024-02-08" },
            { id: "DO-004", tanggal: "2024-02-05", kurir: "JNE", status: "Dalam Perjalanan", estimasi: "2024-02-10" },
            { id: "DO-005", tanggal: "2024-02-10", kurir: "TIKI", status: "Dipesan", estimasi: "2024-02-15" }
        ],
        grafikKeluhan: {
            labels: ["Januari", "Februari", "Maret", "April", "Mei"],
            data: [
                { kategori: "Paket Rusak", jumlah: [5, 3, 8, 4, 6] },
                { kategori: "Paket Terlambat", jumlah: [12, 10, 15, 9, 11] },
                { kategori: "Paket Tidak Sesuai", jumlah: [3, 2, 5, 3, 4] },
                { kategori: "Paket Hilang", jumlah: [1, 0, 2, 1, 1] }
            ]
        }
    },

    // Data Histori Transaksi Bahan Ajar
    historiTransaksi: [
        {
            nim: "M001",
            nama: "Budi Santoso",
            transaksi: [
                {
                    id: "TRX-001",
                    tanggal: "2024-01-10",
                    jenis: "Pembelian",
                    item: "Paket Semester 1",
                    jumlah: 1,
                    total: 250000,
                    status: "Lunas",
                    noBilling: "BLG-2024-001"
                },
                {
                    id: "TRX-002",
                    tanggal: "2024-01-25",
                    jenis: "Pengembalian",
                    item: "Buku Modul 1",
                    jumlah: 1,
                    total: 0,
                    status: "Diproses",
                    noBilling: "BLG-2024-002"
                }
            ]
        },
        {
            nim: "M002",
            nama: "Siti Nurhaliza",
            transaksi: [
                {
                    id: "TRX-003",
                    tanggal: "2024-01-18",
                    jenis: "Pembelian",
                    item: "Paket Semester 2",
                    jumlah: 1,
                    total: 300000,
                    status: "Lunas",
                    noBilling: "BLG-2024-002"
                },
                {
                    id: "TRX-004",
                    tanggal: "2024-02-01",
                    jenis: "Pembelian",
                    item: "Paket Semester 3",
                    jumlah: 1,
                    total: 280000,
                    status: "Menunggu Pembayaran",
                    noBilling: "BLG-2024-005"
                }
            ]
        },
        {
            nim: "M003",
            nama: "Ahmad Fauzi",
            transaksi: [
                {
                    id: "TRX-005",
                    tanggal: "2024-01-30",
                    jenis: "Pembelian",
                    item: "Paket Semester 1",
                    jumlah: 1,
                    total: 275000,
                    status: "Lunas",
                    noBilling: "BLG-2024-003"
                }
            ]
        },
        {
            nim: "M004",
            nama: "Dewi Sartika",
            transaksi: [
                {
                    id: "TRX-006",
                    tanggal: "2024-02-05",
                    jenis: "Pembelian",
                    item: "Paket Semester 2",
                    jumlah: 1,
                    total: 290000,
                    status: "Lunas",
                    noBilling: "BLG-2024-006"
                }
            ]
        },
        {
            nim: "M005",
            nama: "Rudi Hartono",
            transaksi: [
                {
                    id: "TRX-007",
                    tanggal: "2024-02-10",
                    jenis: "Pembelian",
                    item: "Paket Semester 1",
                    jumlah: 1,
                    total: 250000,
                    status: "Menunggu Pembayaran",
                    noBilling: "BLG-2024-007"
                }
            ]
        }
    ]
};

