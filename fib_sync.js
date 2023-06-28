async function fib(n) {
  return n <= 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

const doFib = (times) =>
  new Promise( (resolve) => {
    const start = Date.now();
    const result =  fib(times);
    console.log(`doFib done in ${Date.now() - start}ms`);
    resolve(result);
  });

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log(`values: ${values}`);

  console.log(`main done in ${Date.now() - start}ms`);
};

main().catch(console.error);
