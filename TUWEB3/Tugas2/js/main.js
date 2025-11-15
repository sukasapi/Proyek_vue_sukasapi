// Main JavaScript untuk aplikasi Mobile SITTA

// Session Management
const SessionManager = {
    getCurrentUser: function() {
        const userStr = sessionStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    },

    setCurrentUser: function(user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    },

    clearSession: function() {
        sessionStorage.removeItem('currentUser');
    },

    isLoggedIn: function() {
        return this.getCurrentUser() !== null;
    },

    requireAuth: function() {
        if (!this.isLoggedIn()) {
            // Check if we're in html folder
            const currentPath = window.location.pathname;
            if (currentPath.includes('/html/')) {
                window.location.href = '../index.html';
            } else {
                window.location.href = 'index.html';
            }
            return false;
        }
        return true;
    }
};

// Authentication Functions
const Auth = {
    login: function(email, password) {
        // Validasi input
        if (!email || email.trim() === '') {
            return {
                success: false,
                message: 'Email tidak boleh kosong'
            };
        }

        if (!password || password.trim() === '') {
            return {
                success: false,
                message: 'Password tidak boleh kosong'
            };
        }

        // Cari user di data
        const user = SITTA_DATA.users.find(u => u.email === email.trim());

        if (!user) {
            return {
                success: false,
                message: 'User tidak dikenal. Email tidak terdaftar.'
            };
        }

        if (user.password !== password) {
            return {
                success: false,
                message: 'Password salah. Silakan coba lagi.'
            };
        }

        // Login berhasil
        SessionManager.setCurrentUser({
            id: user.id,
            email: user.email,
            nama: user.nama,
            nim: user.nim,
            role: user.role
        });

        return {
            success: true,
            message: 'Login berhasil!',
            user: user
        };
    },

    logout: function() {
        SessionManager.clearSession();
        // Check if we're in html folder
        const currentPath = window.location.pathname;
        if (currentPath.includes('/html/')) {
            window.location.href = '../index.html';
        } else {
            window.location.href = 'index.html';
        }
    }
};

// Tracking Functions
const TrackingService = {
    searchByBilling: function(noBilling) {
        // Validasi input
        if (!noBilling || noBilling.trim() === '') {
            return {
                success: false,
                message: 'No. Billing tidak boleh kosong'
            };
        }

        // Cari tracking data
        const tracking = SITTA_DATA.tracking.find(t => 
            t.noBilling.toLowerCase() === noBilling.trim().toLowerCase()
        );

        if (!tracking) {
            return {
                success: false,
                message: 'No. Billing tidak ditemukan. Pastikan No. Billing yang Anda masukkan benar.'
            };
        }

        return {
            success: true,
            data: tracking
        };
    }
};

// Histori Transaksi Functions
const HistoriService = {
    searchByNIM: function(nim) {
        // Validasi input
        if (!nim || nim.trim() === '') {
            return {
                success: false,
                message: 'NIM tidak boleh kosong'
            };
        }

        // Validasi format NIM (minimal 3 karakter)
        if (nim.trim().length < 3) {
            return {
                success: false,
                message: 'Format NIM tidak valid. NIM minimal 3 karakter.'
            };
        }

        // Cari histori transaksi
        const histori = SITTA_DATA.historiTransaksi.find(h => 
            h.nim.toLowerCase() === nim.trim().toLowerCase()
        );

        if (!histori) {
            return {
                success: false,
                message: 'NIM tidak ditemukan. Pastikan NIM yang Anda masukkan benar.'
            };
        }

        return {
            success: true,
            data: histori
        };
    }
};

// Stok Bahan Ajar Functions
const StokService = {
    getStokPusat: function(jenis) {
        if (!SITTA_DATA.stokBahanAjar.pusat) {
            return {
                success: false,
                message: 'Data stok Pusat tidak tersedia'
            };
        }

        let data = [];
        switch(jenis) {
            case 'item':
                data = SITTA_DATA.stokBahanAjar.pusat.stokItem;
                break;
            case 'paket':
                data = SITTA_DATA.stokBahanAjar.pusat.stokPaket;
                break;
            case 'lokasi':
                data = SITTA_DATA.stokBahanAjar.pusat.stokLokasi;
                break;
            default:
                return {
                    success: false,
                    message: 'Jenis stok tidak valid'
                };
        }

        if (data.length === 0) {
            return {
                success: false,
                message: 'Data stok ' + jenis + ' Pusat tidak tersedia'
            };
        }

        return {
            success: true,
            data: data
        };
    },

    getStokUPBJJ: function(jenis) {
        if (!SITTA_DATA.stokBahanAjar.upbjj) {
            return {
                success: false,
                message: 'Data stok UPBJJ tidak tersedia'
            };
        }

        let data = [];
        switch(jenis) {
            case 'item':
                data = SITTA_DATA.stokBahanAjar.upbjj.stokItem;
                break;
            case 'paket':
                data = SITTA_DATA.stokBahanAjar.upbjj.stokPaket;
                break;
            case 'lokasi':
                data = SITTA_DATA.stokBahanAjar.upbjj.stokLokasi;
                break;
            default:
                return {
                    success: false,
                    message: 'Jenis stok tidak valid'
                };
        }

        if (data.length === 0) {
            return {
                success: false,
                message: 'Data stok ' + jenis + ' UPBJJ tidak tersedia'
            };
        }

        return {
            success: true,
            data: data
        };
    }
};

// Laporan Monitoring Functions
const LaporanService = {
    getProgressDO: function() {
        const data = SITTA_DATA.laporanMonitoring.progressDO;
        if (!data || data.length === 0) {
            return {
                success: false,
                message: 'Data Progress DO tidak tersedia'
            };
        }
        return {
            success: true,
            data: data
        };
    },

    getPengirimanDO: function() {
        const data = SITTA_DATA.laporanMonitoring.pengirimanDO;
        if (!data || data.length === 0) {
            return {
                success: false,
                message: 'Data Pengiriman DO tidak tersedia'
            };
        }
        return {
            success: true,
            data: data
        };
    },

    getGrafikKeluhan: function() {
        const data = SITTA_DATA.laporanMonitoring.grafikKeluhan;
        if (!data) {
            return {
                success: false,
                message: 'Data Grafik Rekap Keluhan tidak tersedia'
            };
        }
        return {
            success: true,
            data: data
        };
    }
};

// Utility Functions
const Utils = {
    showAlert: function(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        // Cari container untuk alert (bisa form atau card)
        const container = document.querySelector('.card') || document.querySelector('.login-card') || document.body;
        container.insertBefore(alertDiv, container.firstChild);

        // Auto remove setelah 5 detik
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    },

    formatCurrency: function(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(amount);
    },

    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    formatDateTime: function(dateString, timeString) {
        return `${this.formatDate(dateString)} ${timeString}`;
    },

    clearAlerts: function() {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => alert.remove());
    }
};

// Navigation Helper
const Navigation = {
    loadPage: function(page) {
        window.location.href = `html/${page}`;
    },

    goToDashboard: function() {
        window.location.href = 'html/dashboard.html';
    },

    goToTracking: function() {
        window.location.href = 'html/tracking.html';
    },

    goToInformasiBahanAjar: function() {
        window.location.href = 'html/informasi-bahan-ajar.html';
    },

    goToLaporanMonitoring: function() {
        window.location.href = 'html/laporan-monitoring.html';
    },

    goToHistoriBahanAjar: function() {
        window.location.href = 'html/histori-bahan-ajar.html';
    },

    goToProfil: function() {
        window.location.href = 'html/profil.html';
    }
};

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a protected page
    const currentPage = window.location.pathname;
    const protectedPages = [
        '/html/dashboard.html',
        '/html/tracking.html',
        '/html/informasi-bahan-ajar.html',
        '/html/laporan-monitoring.html',
        '/html/histori-bahan-ajar.html',
        '/html/profil.html'
    ];

    if (protectedPages.some(page => currentPage.includes(page))) {
        if (!SessionManager.isLoggedIn()) {
            window.location.href = '../index.html';
        }
    }

    // Update navigation active state
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});

