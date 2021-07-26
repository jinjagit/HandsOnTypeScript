Working through the book: "Full-Stack React, Typescript & Node", by David Choi

### Notes

To run `tsc` commands, without installing typescript globally:
- Open terminal in `node_modules/.bin` dir
- Run tsc binary directly
- remember to use relative location of file when compiling, e.g. `$ ./tsc ../../string-vs-number.ts`

Adding `export {};` to top of typescript file prevents `cannot redeclare...` error in VSCode (when JS compiled from typescript). I don't fully understand how/why this works yet.