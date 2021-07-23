# name-generator
Simple vanilaJS name generator

### Usage
```
$ npm install ko-nickname
```


```js
import { generateNickname } from 'ko-nickname';

// default option
const result = generateNickname(); // ex) '멋진 고양이'

// only Name option
const result = generateNickname({ mode:"onlyName" }) // ex) '수달'

// only Adjective option
const result = generateNickname({ mode:"onlyAdjective" }) // ex) '멋'


```
### BETA
https://www.npmjs.com/package/ko-nickname
