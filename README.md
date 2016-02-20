<br>
<h1 align="center">Ghost Writer</h1>
<p align="center"><em>Ghost Writer outputs the sentence like typewriter.</em></p>
<p align="center">
<br>
|
<b><a href="#installation"> Installation </a></b>|
<b><a href="#usage"> Usage </a></b>|
<b><a href="#advanced-use"> Advanced Use </a></b>|
<b><a href="#types"> Types </a></b>|
<b><a href="#license"> License </a></b>|
<b><a href="http://ideyuta.com/ghost-writer/" target="_blank"> Demo → </a></b>|
</p>
<br>
<br>

## Installation

```
npm install ghost-writer
```

## Usage

#### Japanese typewriting

![Demo - Ghostruct](./demo-ghostruct.gif)

```js
import ghostWriter from 'ghost-writer';

const struct = [{
  i: 'anoiーhatoーvono',
  o: 'あのイーハトーヴォの'
}, {
  i: 'sukitoottakaze',
  o: 'すきとおった風、'
}, {
  i: 'natsudemo',
  o: '夏でも'
}, {
  i: 'sokoni',
  o: '底に'
}, {
  i: 'tsumetasawomotsu',
  o: '冷たさをもつ'
}, {
  i: 'aoisora',
  o: '青いそら'
}];
const writer = ghostWriter(struct);

let text = '';
writer(t => text = t);
```

#### Simple Typewriting

![Demo - Simple Text](./demo-simple-text.gif)

```js
import ghostWriter from 'ghost-writer';

const writer = ghostWriter('あのイーハトーヴォのすきとおった風');

let text = '';
writer(t => text = t);
```

![Demo - English](./demo-en.gif)

```js
import ghostWriter from 'ghost-writer';

const struct = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
const writer = ghostWriter(struct, 'en');

let text = '';
writer(t => text = t, 50);
```

## Advanced Use

```js
import {ghost} from 'ghost-writer';

ghost([{i: 'anoiーhatoーvono', o: 'あのイーハトーヴォの'}]);

/* return
  [
    'あ',
    'あn',
    'あの',
    'あのい',
    'あのいー',
    'あのいーh',
    'あのいーは',
    'あのいーはt',
    'あのいーはと',
    'あのいーはとー',
    'あのいーはとーv',
    'あのいーはとーゔぉ',
    'あのいーはとーゔぉn',
    'あのいーはとーゔぉの',
    'あのイーハトーヴォの'
  ]
*/
```


## Types

```js
ghostWriter: (
  struct: RawGhostruct|string,
  lang: 'en' | 'ja' = 'ja'
  ) => writer
```

```js
writer: (
  callbackFunction: (string) => void,
  msec: number
) => string
```

```js
ghost: (
  struct: RawGhostruct|string,
) => string[]
```

```js
RawGhostruct: [{
  i: RawGhostruct | string,
  o: string
}]
```

## License

[MIT](https://github.com/ideyuta/ghost-writer/blob/master/LICENSE)
