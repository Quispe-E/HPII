function compra(b,f,a){
    var pago=b+f+a;
    return pago;
}

document.write('Las compras de un dia de supermercado:')
document.write('<hr>')
document.write(Math.round(compra(80.564,15.335,60.242)*100)/100);
document.write('<hr>')