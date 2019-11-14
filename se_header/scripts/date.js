var meses = new Array(
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
);
var f = new Date();
document.getElementById('title').children[0].innerHTML =
  f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear();
