// operador spread (...)
let valores = [1,2,3,4,5];
console.log(...valores);

function accion(parametros) {
    console.log();
}
accion(...valores);

function suma(a,b,c,d,e) {
    return a+b+c+d+e;
}
// haciendo uso de [] por cada valor
let valorSuma = suma(valores[0],valores[1],valores[2],valores[3],valores[4]);
console.log(valorSuma);

// haciendo uso de ... por todo el conjunto
let sumaSpread = suma(...valores);
console.log(sumaSpread);

let obj = {
    name:"jose",
    last:"Moncada",
    nick:"Monk",
}

console.log(...Object.keys(obj));
console.log(...Object.values(obj));
console.log("-----------------");
console.log(...Object.entries(obj));
