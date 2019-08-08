//2) Faça um programa em JS para exibir a tabuada de 0 a 9.
var msg = "Tabuada em JavaScript";
document.write(msg);

for (var i = 0; i < 11; i++) {
   document.write("<br />[Tabuada de " + i + "]<br /><br />");
for (var j = 0; j < 11; j++) {
   document.write(i + " x " + j + " = " + i * j + "<br />");
}
}
