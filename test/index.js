import assert from 'assert';
import {ghost} from '../index';

/** @test {ghostWriter} */
describe('ghostWriter', () => {
  it('param is Array', () => {
    const struct = [{
      i: 'shibuya',
      o: '渋谷'
    }];
    assert.deepEqual(ghost(struct), ['s', 'sh', 'し', 'しb', 'しぶ', 'しぶy', 'しぶや', '渋谷']);
  });

  it('param is String', () => {
    const struct = 'しぶや';
    assert.deepEqual(ghost(struct), ['し', 'しぶ', 'しぶや']);
  });
});
