import mode1 from "./mode1";
import mode2 from "./mode2";

console.log('mode1', mode1);
console.log('mode2', mode2);

fetch('/front/home', {
  method: 'GET',
}).then(res => res.json()).then(res => {
  console.log('res', res);
})