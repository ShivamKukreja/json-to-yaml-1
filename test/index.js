import convertToYaml from '../convertToYaml';
import { assert } from 'chai';

describe("convertToYaml.js", () => {
    it('Converts', () => {
        return convertToYaml('input/data.json', 'output/data.yaml').then((result) => {
            assert(result, true);
        });
    });
});