
const { Worker } = require("worker_threads");

const dofib = async (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    // Start worker
    const worker = new Worker("./fib.js", { workerData: { iterations } });
    // Listen for message
    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start}ms`
      );
      resolve(data);
    });
    // Listen for error
    worker.once("error", (err) => reject(err));
  });
};

const main = async () => {
  try {
    const start = Date.now();
    const values = await Promise.all([
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
      dofib(40),
    ]);
    console.log(`values: ${values}`);
    console.log(`main done in ${Date.now() - start}ms`);
  } catch (error) {
    console.log(error);
  }
};

main().catch(console.error);
