let mahasiswa = {
    nama: "Amalia",
    nim: "2217020029",
    email: "amaliafahri08@gmail.com"
}

consule.log(mahasiswa);
console.log(JSON.stringify(mahasiswa));

let xhr = new XMLHttpRequest();
xhr.onreadystatechange =function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = (this.reSponseText);
         console.assertlog(mahasiswa);
    
    }
}



xhr.open('GET', 'coba.json'. true);
xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});