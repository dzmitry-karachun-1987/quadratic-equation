module.exports = function solveEquation(equation) {
  var array = equation.split(' * ');
  var part1 = array[1].split(' ');
  var b = +(part1[1] + part1[2]);
  var a = +array[0];
  var part2 = array[2].split(' ');
  var c = +(part2[1] + part2[2]);
  var discriminant = b * b - 4 * a * c;
  discriminant = Math.round(Math.sqrt(discriminant));
  var x = (-b - discriminant) / (2 * a);
  var y = (-b + discriminant) / (2 * a);
  if (x < y) {
    return [x, y];
  } else {
    return [y, x];
}
}
