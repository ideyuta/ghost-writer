import romaji from 'romaji';

/**
 * ghostWriter
 *
 * @param {Array|string} rawStruct - ghost raw struct
 * @return {Function}
 */
export default function ghostWriter(rawStruct) {
  const g = ghost(rawStruct);
  let count = -2;

  /**
   * writer
   *
   * @param {Function} cb - callback function
   * @param {number} [msec] - interval milliseconds
   * @return {string|null}
   */
  function writer(cb, msec = 100) {
    count++;
    if (count < g.length - 1) {
      setTimeout(writer.bind(undefined, cb, msec), msec);
    }
    if (count >= 0) {
      return cb(g[count]);
    }
  }

  return writer;
}

/**
 * Ghost
 *
 * @param {Array|String} rawStruct - ghost raw struct
 * @return {string[]} ghostruct
 */
export function ghost(rawStruct) {
  const ghostruct = [];
  parser(rawStruct);

  /**
   * parser
   *
   * @param {Array|String} struct - ghost raw struct
   */
  function parser(struct) {
    if (Array.isArray(struct)) {
      struct.forEach(element => {
        if (Array.isArray(element.i)) {
          const length = ghostruct.length;
          parser(element.i);
          const preEl = ghostruct[length - 1] || '';
          ghostruct.push(preEl + element.o);
        } else {
          const strings = element.i.split('');
          strings.forEach(s => {
            ghostruct.push(ghostruct.length > 0 ? ghostruct[ghostruct.length - 1] + s : s);
          });
          const preEl = ghostruct[ghostruct.length - 1];
          ghostruct.push(preEl.substr(0, preEl.length - strings.length) + element.o);
        }
      });
    } else if (typeof struct === 'string') {
      struct.split('').forEach((element, key) => {
        ghostruct.push(key > 0 ? ghostruct[key - 1] + element : element);
      });
    }
  }

  return Array.isArray(rawStruct) ? n(ghostruct) : ghostruct;
}

/**
 * Exception N
 *
 * @param {Array} struct - ghostruct
 * @return {Array} struct - ghostruct
 */
function n(struct) {
  return struct.map(el => {
    const els = el.split('');
    let hiragana = romaji.toHiragana(el);
    if (els[els.length - 1] === 'n') {
      const tmp = hiragana.split('');
      tmp.pop();
      tmp.push('n');
      hiragana = tmp.join('');
    }
    return hiragana;
  });
}
