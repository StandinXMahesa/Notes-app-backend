const a = [];
const satu = "a";
const dua = "c";
const tiga = "s";
const empat = "g";

const b = { satu, dua, tiga, empat };

a.push(b);

const index = a.findIndex((note) => note.empat === "c");

console.log(index);
