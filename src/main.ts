import axios from "axios";
import mode1 from "./ts/mode1";
import mode2 from "./ts/mode2";

console.log('mode1', mode1);
console.log('mode2', mode2);

axios.get('/front/home').then((response) => {
  console.log('response', response.data);
})