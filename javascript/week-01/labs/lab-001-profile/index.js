const nameFull = "Nombre Apellido";
const age = 28;
const email = "usuario@example.com";
const statusAccount = true;
let accountBalance = 100;

console.log(`Nombre: ${nameFull}`);
console.log(`Edad: ${age}`);
console.log(`Correo electrónico: ${email}`);
console.log(`Cuenta activa: ${statusAccount}`);
console.log(`Saldo inicial: ${accountBalance}`);
accountBalance = accountBalance + 50;
console.log(`Saldo actualizado: ${accountBalance}`);
//Tipos de Datos
console.log(`Tipo de dato de Nombre: ${typeof nameFull}`);
console.log(`Tipo de dato de  Edad: ${typeof age}`);
console.log(`Tipo de dato de  Correo electrónico: ${typeof email}`);
console.log(`Tipo de dato de Cuenta activa: ${typeof statusAccount}`);
console.log(`Tipo de dato de Saldo de la cuenta: ${typeof accountBalance}`);
