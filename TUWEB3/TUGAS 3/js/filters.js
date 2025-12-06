// Vue Filters untuk formatting data teks
// Filter digunakan untuk memformat data sebelum ditampilkan

// Filter untuk format currency (Rupiah)
Vue.filter('currency', function(value) {
  if (!value && value !== 0) return '-';
  return 'Rp ' + value.toLocaleString('id-ID');
});

// Filter untuk format tanggal Indonesia
Vue.filter('formatTanggal', function(value) {
  if (!value) return '-';
  try {
    const date = new Date(value + 'T00:00:00');
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return date.toLocaleDateString('id-ID', options);
  } catch (error) {
    return value;
  }
});

// Filter untuk format tanggal dan waktu
Vue.filter('formatDateTime', function(value, waktu) {
  if (!value || !waktu) return '-';
  try {
    const dateTime = new Date(value + 'T' + waktu + ':00');
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta'
    };
    return dateTime.toLocaleString('id-ID', options);
  } catch (error) {
    return `${value} ${waktu}`;
  }
});

// Filter untuk uppercase
Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toString().toUpperCase();
});

// Filter untuk lowercase
Vue.filter('lowercase', function(value) {
  if (!value) return '';
  return value.toString().toLowerCase();
});

// Filter untuk capitalize (huruf pertama besar)
Vue.filter('capitalize', function(value) {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.toString().slice(1).toLowerCase();
});

// Filter untuk format angka dengan separator
Vue.filter('number', function(value) {
  if (!value && value !== 0) return '-';
  return value.toLocaleString('id-ID');
});

// Filter untuk memotong teks (truncate)
Vue.filter('truncate', function(value, length) {
  if (!value) return '';
  const maxLength = length || 50;
  if (value.length <= maxLength) return value;
  return value.substring(0, maxLength) + '...';
});

