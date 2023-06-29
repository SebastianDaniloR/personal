/*const profesores=[];
const pf1={
    Nombre:prompt("Profesor nro 1"),
  materia:prompt("Materia 1"),
    Tema:prompt("ingrese el tema 1"),
};
const pf2={
    Nombre:prompt("Profesor nro 2"),
    materia:prompt("Materia 2"),
    Tema:prompt("ingrese el tema 2"),
};
const pf3={
    Nombre:prompt("Profesor nro 3"),
    materia:prompt("Materia 3"),
    Tema:prompt("ingrese el tema 3"),
};
profesores.unshift(pf3);
profesores.push(pf2);
profesores.push(pf1);
console.table(profesores);
console.log(profesores);//
const dias=["arriba", "abajo", "derecha", "izquierda", "centro"];
const [ , ,d1, ,d2]=ubicacion;
console.log(d1);
console.log(d2); */

//EJERCICIO 6
/*
function saludo (nombre,apellido, ciudad){
    
    console.log(`Bienvenido ${nombre} ${apellido} a la sesion en la ciudad de ${ciudad}`)
}
saludo(
 prompt(`nombre`),
prompt(`apellido`),
prompt(`ciudad`),);*/


//EJERCICIO 4
 /*function preciofinal(a,b){
 console.log(a+b);
 }
 preciofinal(2,3);
 preciofinal (5,2);

 function usuario(u){
  console.log('Felicitaciones eres un nuevo usuario');
 }
 prompt('ingrese su nombre');
 function rol(r){
  console.log('Tu rol es de');
 }
 prompt('ingrese su rol');

 function rolu(){
  console.log(
 }
 let total=0;
 function agregar(precio){
  return total+=(precio);
 }
 function iva(){
  return total*1.19;
 }
 total=agregar(200);
 total=agregar(100);
 total=agregar(500);
 const totalpagar = iva(total);
 console.log(total);
 console.log(`el valor total de la factura es ${totalpagar}`);*/

 /*const aprender = function(asignatura){
  console.log(`estamos aprendiendo ${asignatura}`);
 }

 aprender('matematicas');
 const aprender1=(asignatura)=> `Estamos aprendiendo ${asignatura}`;
 console.log(aprender1('ciencias politicas')); */

 /*let nota = 12;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);
*/

//EJERCICIO USO DE ITERADORES

/*const Estudiante=[
  {nombre: 'Andres Estiven', Apellido:'Mbape', edad: 18},
  {nombre: 'Jhon Jairo', Apellido:'Rivera', edad: 15},
  {nombre: 'Julian', Apellido:'Calvo', edad: 19},
  {nombre: 'Sebastian', Apellido:'Rivera', edad: 21},
  {nombre: 'Danilo', Apellido:'Meneses', edad: 12},
  {nombre: 'Johan', Apellido:'Peconpe', edad: 13},
]

const Profesor=[
  {nombre: 'Andres Estiven', Apellido:'Mbape', Materia:'español'},
  {nombre: 'Brayan', Apellido:'Messi', Materia:'ingles'},
  {nombre: 'Roben', Apellido:'ronaldo', Materia:'matematicas'},
  {nombre: 'Levwandowki', Apellido:'elbicho', Materia:'matematicas'},
  {nombre: 'Radamel', Apellido:'pcp', Materia:'natural'},
  {nombre: 'gakpo', Apellido:'Mbape', Materia:'español'},
]
let i;

for(i=0;  i < Estudiante.length; i++){
  console.table('EL ESTUDIANTE',`${Estudiante[i].nombre}`,`${Estudiante[i].Apellido}`,'TIENE CLASE CON EL DOCENTE',`${Profesor[i].nombre}`,`${Profesor[i].Apellido}`, )
}*/


/*var es = prompt("Ingrese solo un número entero:");

if () {
  var numerico = parseInt(es);
  console.log("Conteo hasta " + numerico + ":");

 
  for (var i = ; i <= numerico; i++) {
    var es = "";
    
    if(i % 3 === 0) {
      es = "ping";
    }
    
    if (i % 5 === 0) {
      es = "pong";
    }
    

    
    console.log(es);
  }
} else {
  console.log("El valor ingresado no es válido. Por favor, ingrese un número entero.");
}

var valor = prompt("Ingrese un número entero:");*/

//EJERCICIO PING PONG

/* let user= (prompt("Ingresa un número entero:"));


if (user%user!==0) {
  console.log('no es valido');
}

else { 

  let i;
  
  for (i = 1; i <= user; i++) {

    console.log(i);
    if (i% 3 === 0 && i % 5 === 0) {
      console.log('pingpong');
      continue;
    } 


    else if (i % 3 ===  0) {
      console.log('ping');
    }
    else if (i % 5 ===  0) {
      console.log('pong');
    }
    
  }
}

let i=0;


/* let valor=prompt('Ingrese un valor');
let i=1;

do { 
  if (valor% 3 === 0 && valor % 5 === 0){
  console.log('pingpong');
 }
 else if (valor % 3 == 0){
  console.log('ping');
 }
 else if(valor % 5 == 0){
  console.log('pong');
 }
 i++;
  
}
while(i<=valor); */





//EJERCICIO DE MESES-ESTACIONES EN CLASE



 /* let mes = parseInt(prompt('Ingrese el número de mes, de 1 a 12'));
if(mes==1 || mes==2 || mes==3){
  console.log('este mes es enero, febrero, marzo y es invierno')
}
else if( mes==4 || mes==5){
  console.log('este mes es abril, mayo y es primavera')
}
else if(mes==6 || mes==7 || mes==8){
  console.log('este mes es junio, julio, agosto y es verano')
}
else if( mes==9 || mes==10 || mes==11 || mes== 12){
  console.log('este mes es septiembre, octubre, noviembre, diciembre y es otoño')
}

switch (mes) {
  case 12:
    fecha = "Este mes es diciembre, es otoño y es Navidad";
    break;
  case 11:
    fecha = "Este mes es noviembre, es otoño y tiene 30 días";
    break;
  case 10:
    fecha = "Este mes es octubre, es otoño y tiene 31 días";
    break;
  case 9:
    fecha = "Este mes es septiembre, es otoño y tiene 30 días";
    break;
  case 8:
    fecha = "Este mes es agosto, es verano y tiene 31 días";
    break;
  case 7:
    fecha = "Este mes es julio, es verano y tiene 31 días";
    break;
  case 6:
    fecha = "Este mes es junio, es verano y tiene 30 días";
    break;
  case 5:
    fecha = "Este mes es mayo, es primavera y tiene 31 días";
    break;
  case 4:
    fecha = "Este mes es abril, es primavera y tiene 30 días";
    break;
  case 3:
    fecha = "Este mes es marzo, es invierno y tiene 31 días";
    break;
  case 2:
    fecha = "Este mes es febrero, es invierno y tiene 28 días";
    break;
  case 1:
    fecha = "Este mes es enero, es invierno y tiene 31 días";
    break;
  default:
    fecha = "Número no válido";
    break;
}

console.log("Resultado:", fecha); */



//EJERCIO APUESTAS

/*let saldo = 5000;

while (saldo > 0 && saldo<=) {
  let numeroApostado = parseInt(prompt("ingresa un numero del 1 al 10: "));
  let valorApostado = parseInt(prompt("ingresa la cantidad a apostar: "));

  if (valorApostado > saldo) {
    alert("no tienes saldo para realizar esa apuesta.");
    break;
  }

  
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  

  if (numeroApostado === numeroAleatorio) {
    saldo += valorApostado * 3;
    alert("ganaste " + valorApostado + " peso. Saldo restante: " + saldo + " pesos");
  } else {
    saldo -= valorApostado;
    alert("no adivinaste el número. Perdiste " + valorApostado + " pesos Saldo restante: " + saldo + " peso");
  }
}

alert("no tienes saldo El juego ha terminado");*/





