const arr = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|' ,'\n']
let t = 100;

for (let each of arr) {
  setTimeout(() => {
    process.stdout.write(each)
  }, t += 200);
}
