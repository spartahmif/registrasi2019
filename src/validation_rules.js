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
        v => /([A-Z][a-zA-Z\-'.]*\s*)+/.test(v) || 'Kapitalisasi harus benar',
        v => v.length <= 50 || 'Maksimum 50 karakter'
    ],
    nickname: [
        v => !!v || 'Nama tidak boleh kosong',
        v => /([A-Z][a-zA-Z\-'.]*\s*)+/.test(v) || 'Kapitalisasi harus benar',
        v => v.length <= 15 || 'Maksimum 15 karakter'
    ],
    email: [
        v => !!v || 'Email harus diisi',
        v => /\S+@\S+\.\S+/.test(v) || 'Format alamat e-mail salah',
        v => v.length <= 40 || 'Maksimum 40 karakter'
    ],
    mobile: [
        v => !!v || 'Nomor telepon harus diisi',
        v => /\d{3,20}/.test(v) || 'Nomor telepon hanya terdiri dari 3-20 angka',
        v => v.length <= 20 || 'Maksimum 20 karakter'
    ],
    line_id: [
        v => !!v || 'ID LINE harus diisi',
        v => v.length <= 30 || 'Maksimum 30 karakter'
    ],
    gender: [
        v => !!v || 'Jenis kelamin harus diisi'
    ],
    bd: [
        v => !!v || 'Tanggal lahir harus diisi',
        v => /^(\d{2})(\d{2})(\d{4})$/.test(v) || 'Format tanggal lahir tidak benar'
    ],
    bp: [
        v => !!v || 'Tempat lahir harus diisi',
        v => v.length <= 30 || 'Maksimum 30 karakter'
    ],
    hub_wali: [
        v => !!v || 'Hubungan dengan wali tidak boleh kosong',
        v => v.length <= 20 || 'Maksimum 20 karakter'
    ],
    blood_type: [
        v => !!v || 'Golongan darah tidak boleh kosong'
    ],
    address: [
        v => !!v || 'Alamat harus diisi',
        v => v.length <= 100 || 'Maksimum 100 karakter'
    ],
    disease: [
        v => v.length <= 100 || 'Maksimum 100 karakter'
    ],
    materi_others: [
        v => v.length <= 100 || 'Maksimum 100 karakter'
    ]
};