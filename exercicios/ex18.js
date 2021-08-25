//Agora imprima todas as tabuadas do número 1 ao 10.

function tabuada(n) {
  for (let i = 1; i < 10; i++) {
    const resp = n + " * " + i + " = " + n * i;
    console.log(resp);
  }
}

for (let n = 1; n < 10; n++) {
  tabuada(n);
  console.log;
}
