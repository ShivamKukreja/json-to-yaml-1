import { describe, it } from 'mocha';
import { assert } from 'chai';
import convertToYaml from '../app/convertToYaml';

describe('convertToYaml.js', () => {
  it('Converts', () => convertToYaml('input/data.json', 'output/data.yaml').then((result) => {
    assert(result, true);
  }));
});
