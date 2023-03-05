// FUNGSI CALLBACK
// FUNGSI AWAL
function halo(nama) {
    console.log(`halo ${nama}`)
}

// FUNGSI YANG MEMILIKI FUNGSI LAIN SEBAGAI PARAMETER
function tampilkanPesan(anotherFunction) {
    const nama = 'Edwin';
    // MEMANGGIL FUNGSI DI DALAM PARAMETER, DENGAN PARAMETER AWAL DARI FUNGSI TERSEBUT
    anotherFunction(nama);
}

// EKSEKUSI AKHIR
tampilkanPesan(halo);
// -----------------------------------------


// LATIHAN MENGAMBIL DATA DARI JSON DENGAN ASYNC CALLBACK

function getData(url, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Memasukkan isi response kedalam parameter function success
                success(xhr.response)
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

getData('../JSON/contoh-data.json', function (results) {
    console.log(results)
}, function () {
    console.log('error')
})