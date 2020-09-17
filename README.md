# rj-console-log 

We can use this to print log messages as below
> npm i rj-console-log

```
const log = require('rj-console-log')

let blue = log.color.blue;
let cyan = log.color.cyan;
let green = log.color.green;
let magenta = log.color.magenta;
let red = log.color.red;
let yellow = log.color.yellow;

log.message('I am blue color',blue)
log.message('I am cyan color',cyan)
log.message('I am green color',green)
log.message('I am magenta color',magenta)
log.message('I am red color',red)
log.message('I am yellow color',yellow)
log.message('I am Default color')

log.success('I am success message')
log.info('I am info message')
log.warning('I am warning message')
log.error('I am error message')

```

> In future we will add more features in this package.
> Stay connected to [My GitHub Page](https://github.com/rohitkumar-jha)