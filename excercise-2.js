/**
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
 */

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    // var ongkos = []
    // var naik = 0
    // var turun = 0

    var output = []
    var iberangkat = 0
    var itujuan = 0

    if (arrPenumpang.length == 0) {
        return output;
    } else {
        for (var i = 0; i < arrPenumpang.length; i++) {
            output.push({
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: 0
            })
            for (var a = 0; a < rute.length; a++) {
                if (rute[a] === output[i]['naikDari']) {
                    iberangkat = a
                } else if (rute[a] === output[i]['tujuan']) {
                    itujuan = a
                }
            }
            output[i].bayar = (itujuan - iberangkat) * 2000
        }


        return output;
    }


}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]