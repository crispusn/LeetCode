function once(fn) {
  let hasRun = false;

  return function(...args) {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
  };
}

