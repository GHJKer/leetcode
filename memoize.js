function memoize(fn) {
    let cache = new Map();

      return function(...args) {
        const strArgs = args.join('');
        if (cache.has(strArgs)) {
          return cache.get(strArgs);
        }

        let result = fn(...args);
        cache.set(strArgs, result);
        return result;
      }
  }
