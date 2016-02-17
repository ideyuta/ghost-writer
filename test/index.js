import assert from 'assert';
import ghostWriter from '../index';

/** @test {ghostWriter} */
describe('ghostWriter', () => {
  let text = '';

  beforeEach(() => {
    text = 'あのイーハトーヴォのすきとおった風';
  });

  it('should return string', () => {
    let t = '';
    ghostWriter(text, _text => t = _text, 1);
    assert(t === 'あ');
  });
});
