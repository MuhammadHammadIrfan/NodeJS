//This is how you import form es6 module
import simple23 from './second_mjs_module.mjs';//write .mjs extension
simple23();

import simple2 from './second_mjs_module.mjs';
import { simple } from './second_mjs_module.mjs';//write .mjs extension
import { simple as happy } from './second_mjs_module.mjs';// can not use as keyword with default export
simple();
simple2();
happy();

//If there is any default export in .mjs module then you cannot import both default and named exports in the same import statement. Use two separate import statements for that. Without curly braces, we import default exports, and with curly braces, we import named exports.

//If there is no default export in .mjs module then you can import both default and named exports in the same import statement.