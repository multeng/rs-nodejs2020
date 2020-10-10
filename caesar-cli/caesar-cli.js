const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const caesarCipher = require("./caesar-ciper");
const transformStream = require("./transform-stream");
const commands = require("./args-checker");

const { action, shift, input, output } = commands.opts();

const readStream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;

  
const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: "a" })
  : process.stdout;

const transform = new transformStream(caesarCipher, action, shift);

pipeline(readStream, transform, writeStream, (err) => {
  if (err) {
    console.error(err);
  } else {
    process.stdout.write("done");
  }
});
