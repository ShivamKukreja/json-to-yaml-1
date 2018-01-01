import convertToYaml from './convertToYaml';

convertToYaml('input/data.json', 'output/data.yaml').then(() => {
  console.log('Conversion Completed.');
}).catch(() => {
  console.log('Conversion Failed.');
});
