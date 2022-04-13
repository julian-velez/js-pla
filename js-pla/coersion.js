//var miNombre = undefined;

//console.log(miNombre);

//miNombre = "julian";

//Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

var a = 20; var b = a + "";
console.log(b);

var c = String(a);
typeof c;
console.log(c)

var d = Number(c);
typeof d;