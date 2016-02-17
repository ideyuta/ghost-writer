/**
 * ghostWriter
 *
 * @param {string} text - text
 * @param {Function} cb - callback function
 * @param {number} [msec] - interval milliseconds
 */
export default function ghostWriter(text, cb, msec = 100) {
  const g = ghost(text);
  let count = -2;
  writer();

  /**
   * writer
   *
   * @return {string|null}
   */
  function writer() {
    count++;
    if (count < g.length - 1) {
      setTimeout(writer, msec);
    }
    if (count >= 0) {
      return cb(g[count]);
    }
  }
}

/**
 * ghost
 *
 * @param {string} text - text
 * @return {string[]}
 */
export function ghost(text) {
  const struct = [];
  text.split('').forEach((t, key) => {
    struct.push(key > 0 ? struct[key - 1] + t : t);
  });
  return struct;
}
