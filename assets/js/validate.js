$(document).ready(function() {
    $('#frm-mhs').validate({
        rules: {
            nim: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            tgl: {
                indonesianDate: true
            },
            umur: {
                digits: true,
                range: [0, 100]
            },
            email: {
                email: true
            },
            situs: {
                url: true
            },
            pass1: {
                equalTo: "#pass1"
            },
            pass2: {
                equalTo: "#pass1"
            }
        },
        messages: {
            nama: {
                required: "Nama harus diisi"
            },
            nim: {
                required: "Kolom nim harus diisi",
                digits: "Masukkan angka",
                minlength: "Kolom nim harus terdiri dari 10 digit",
                maxlength: "Kolom nim harus terdiri dari 10 digit"
            },
            tgl: {
                required: "Tanggal lahir harus diisi",
            },
            umur: {
                digits: "Masukkan angka",
                range: "Angka di luar batas 0 - 100",
                required: "Umur harus diisi"
            },
            situs: {
                required: "Situs harus diisi",
                url: "URL tidak valid"
            },
            email: {
                required: "Alamat email harus diisi",
                email: "Format email tidak valid"
            },
            pass1: {
                required: "Password harus diisi",
            },
            pass2: {
                required: "Konfirmasi password harus diisi",
                equalTo: "Password tidak sama"
            }
        }
    });
});

$.validator.addMethod(
    "indonesianDate",
    function(value, element) {
        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    },
    "Masukkan tanggal dalam format DD/MM/YYYY"
);