export default function (cb, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    return new Promise((res) => {
      timer = setTimeout(() => {
        res(cb.apply(this, args));
      }, timeout);
    });
  };
}
