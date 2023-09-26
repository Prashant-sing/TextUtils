//default export names can be changed, means instead of 
//'ui' we can use anything
import ui from './module2.mjs'
console.log(ui);

//named exports, names can't be changed 
import {a, c, d} from './module2.mjs'
console.log(a)
console.log(c)
console.log(d)