const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('I am empty');
} else {
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i]) || args[i] < 0) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${args[i]} seconds`);
    }, args[i] * 1000);
  }
}
