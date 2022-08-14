const fs = require('fs');

fs.stat("arquivo.txt", (err,stats) => {
if (err) {
    console.log(err);
} else {
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.atime)
    console.log(stats.size)
}
});