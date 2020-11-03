let timer = 100;
const output = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
while (timer <= 1900) {
  let animFrame = (timer - 100) / 200;
  setTimeout(() => {
    process.stdout.write(output[animFrame]);
  }, timer);
  timer += 200;
}
