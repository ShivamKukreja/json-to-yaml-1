import fs from 'fs';
import YAML from 'json2yaml';

const readFile = inputFile => new Promise((resolve, reject) => {
  fs.readFile(inputFile, (err, data) => {
    if (err) {
      reject();
    } else {
      resolve(data);
    }
  });
});

const writeFile = (outputFile, data) => new Promise((resolve, reject) => {
  const array = JSON.parse(data);
  const size = array.length;
  const parsedData = YAML.stringify(array.map(item => ({ ...item, size })));

  fs.writeFile(
    outputFile,
    parsedData,
    (err) => {
      if (err) {
        reject();
      } else {
        resolve(true);
      }
    },
  );
});

const convertToYaml = (inputFile, outputFile) => readFile(inputFile)
  .then(data => writeFile(outputFile, data));

export default convertToYaml;
