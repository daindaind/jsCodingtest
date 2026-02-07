process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let str = "";
  new Array(a).fill(0).map((item) => (str += "*"));
  new Array(b).fill(0).map(() => console.log(str));
});
