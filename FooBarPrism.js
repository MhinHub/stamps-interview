const angka = [];
for (let i = 1; i <= 100; i++) {
  angka.push(i);
}

function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const filteredAngka = angka.filter(num => !isPrime(num) && num !== "");

const result = filteredAngka
  .reverse()
  .map(num => {
    let output = '';
    if (num % 3 === 0) output += 'Foo';
    if (num % 5 === 0) output += 'Bar';
    return output || num.toString();
  })
  .join(", ")

console.log(result);
