## Task 1. Caesar cipher CLI tool
1. Clone this repo
2. npm i
3. cd caesar-cli\
4. How to use
## Cmd options
  **-s, --shift**: a shift
  **-i, --input**: an input file
  **-o, --output**: an output file
  **-a, --action**: an action encode/decode
```bash
$ node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
or
```bash
$ node caesar-cli --action encode --shift 7 --input input.txt --output output.txt
```