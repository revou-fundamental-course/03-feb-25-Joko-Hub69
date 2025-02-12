// Ini file Javascript

console.log('Javascript is working!');

function validateForm() {
    let input = document.getElementById('main-input');
    console.log(input.value);

    if (input.value == '') {
        alert('Input tidak boleh kosong');
    } else {
        /// Proses Konversi
        let calc = convertToCelcius(input.value);

        /// Tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = 'S(F)=' + input.value + '(C)x9/5+32';
        console.log('Berhasil di eksekusi');
    }
}

/// Fungsi Konversi
let convertToCelcius = (input) => {
    return input * 9 / 5 + 32;
}