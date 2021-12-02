function variable1() {
    var p;
    var l;
}

function variable2() {
    var name1, name2, name3, price1, price2, price3, quantity1, quantity2, quantity3, fprice1, fprice2, fprice3, sub;
}

function calcArea() {
    variable1();

    p = prompt("Berikan nilai panjang kotak dalam cm:");
    l = prompt("Berikan nilai lebar kotak dalam cm:");

    var result = p * l;

    document.getElementById("arearesult").innerHTML = result;

    window.alert("Luas kotak : " + result + " cm\u00B2");
}

function calcPrice() {
    variable2();

    name1 = prompt("Nama Barang *pertama*:");
    price1 = prompt(`Harga barang ${name1} :`);
    quantity1 = prompt(`Jumlah barang ${name1} :`);

    name2 = prompt("Nama Barang *kedua*:");
    price2 = prompt(`Harga barang ${name2} :`);
    quantity2 = prompt(`Jumlah barang ${name2} :`);

    name3 = prompt("Nama Barang *ketiga*:");
    price3 = prompt(`Harga barang ${name3} :`);
    quantity3 = prompt(`Jumlah barang ${name3} :`);

    fprice1 = price1 * quantity1;
    fprice2 = price2 * quantity2;
    fprice3 = price3 * quantity3;

    sub = fprice1 + fprice2 + fprice3;

    document.getElementById("container").innerHTML = 
    `
        <table>
            <tr>
                <th>Nama Barang</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Sub total</th>
            </tr>
            <tr>
                <td id="itemname">${name1}</td>
                <td>Rp ${price1},-</td>
                <td>${quantity1} pcs</td>
                <td>Rp ${fprice1},-</td>
            </tr>
            <tr>
                <td id="itemname">${name2}</td>
                <td>Rp ${price2},-</td>
                <td>${quantity2} pcs</td>
                <td>Rp ${fprice2},-</td>
            </tr>
            <tr>
                <td id="itemname">${name3}</td>
                <td>Rp ${price3},-</td>
                <td>${quantity3} pcs</td>
                <td>Rp ${fprice3},-</td>
            </tr>
            <tr>
                <td colspan="3">TOTAL</td>
                <td>Rp ${sub},-</td>
            </tr>
        </table>
    `
}