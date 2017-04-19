var s = '1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1'
s = s.split(',')
var width = 21
var matrix = []
for (let i = 0; i < width; i++) {
  matrix[i] = []
}
for (let i = 0, index = 0; i < matrix.length; i++) {
  for (let j = 0; j < width; j++) {
    matrix[i][j] = parseInt(s[index])
    index++
  }
}
// console.table(matrix)
var s = '\n'
for (let i = 0; i < matrix.length; i += 2) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i + 1]) {
      if (matrix[i][j]) {
        if (matrix[i + 1][j]) {
          s += '█'
        } else {
          s += '▀'
        }
      } else {
        if (matrix[i + 1][j]) {
          s += '▄'
        } else {
          s += ' '
        }
      }
    } else {
      if (matrix[i][j]) {
        s += '▀'
      } else {
        s += ' '
      }
    }
  }
s += '\n'
}
console.log(s)
