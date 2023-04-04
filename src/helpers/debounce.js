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

// // fetch function
// function fetchData() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("success data");
//     }, 1000);
//   });
// }

// // render function
// function render() {
//   console.log("rendering...");
// }

// const result = debounce(() => "emir");
// async function start() {
//   const item = await result();
//   console.log(item);
// }
// start();
// // call render function here and pass data from the line above to it

// /**
//  * эти две функции должны быть разделены
//  * функция fetchData должна вызываться в функции debounce
//  * функция render должна вызываться после подгрузки данных
//  */
