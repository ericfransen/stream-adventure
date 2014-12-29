var through = require('through')

var toUpperCase = function (buffer) {
  this.queue(buffer.toString().toUpperCase())
}

process.stdin.pipe(through(toUpperCase)).pipe(process.stdout)
