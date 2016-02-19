<br>
<h1 align="center">Ghost Writer</h1>
<p align="center"><em>Ghost Writer outputs the sentence like typewriter.</em></p>
<p align="center">
<br>
|
<b><a href="#installation"> Installation </a></b>|
<b><a href="#usage"> Usage </a></b>|
<b><a href="http://ideyuta.com/ghost-writer/" target="_blank"> Demo → </a></b>|
</p>
<br>
<br>

## Installation

```
npm install ghost-writer
```

## Usage

```js
let text = '';

ghostWriter('あのイーハトーヴォのすきとおった風', t => text = t, 100);
```

#### type

```js
ghostWriter(text: string, CallbackFunction: (string) => void, msec: number = 100);
```

