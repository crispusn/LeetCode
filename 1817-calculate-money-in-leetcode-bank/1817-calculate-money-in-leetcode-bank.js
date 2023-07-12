/**
 * @param {number} n
 * @return {number}
 */
 function totalMoney(n) {
  const total = Math.ceil(n / 7); 
  let rem = n % 7;

  if (total === 1) {
    return (n * (n + 1)) / 2;
  }

  let sum = 0;
  if (rem) {
    for (let i = 1; i < total; i++) {
      sum += 7 * (i + 3);
    }
  } else {
   
    for (let i = 1; i <= total; i++) {
      sum += 7 * (i + 3);
    }
  }

  let i = 0;
  while (rem--) {
    sum += total + i;
    i++;
  }

  return sum;
}