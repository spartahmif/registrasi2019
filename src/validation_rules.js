module.exports = {
    nim: [
        v => !!v || 'NIM tidak boleh kosong',
        v => /16518\d{3}/.test(v) || 'Masukkan NIM TPB STEI 2018'
    ],
    major: [
        v => !!v || 'Program studi harus diisi'
    ],
    name: [
        v => !!v || 'Nama tidak boleh kosong',
        v => /([A-Z][a-zA-Z\-'.]*\s*)+/.test(v) || 'Kapitalisasi harus benar'
    ],
    email: [
        v => !!v || 'Email harus diisi',
        v => /\S+@\S+\.\S+/.test(v) || 'Format alamat e-mail salah'
    ],
    mobile: [
        v => !!v || 'Nomor telepon harus diisi',
        v => /\d{3,20}/.test(v) || 'Nomor telepon hanya terdiri dari 3-20 angka'
    ],
    line_id: [
        v => !!v || 'ID LINE harus diisi'
    ],
    gender: [
        v => !!v || 'Jenis kelamin harus diisi'
    ],
    bd: [
        v => !!v || 'Tanggal lahir harus diisi',
        v => /^(\d{2})(\d{2})(\d{4})$/.test(v) || 'Format tanggal lahir tidak benar'
    ],
    bp: [
        v => !!v || 'Tempat lahir harus diisi'
    ],
    hub_wali: [
        v => !!v || 'Hubungan dengan wali tidak boleh kosong'
    ],
    blood_type: [
        v => !!v || 'Golongan darah tidak boleh kosong'
    ],
    address: [
        v => !!v || 'Alamat harus diisi'
    ],
};