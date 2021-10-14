import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

function chunk(input, name) {
  return {
    input: `dist/esm-browser/${input}.js`,
    output: {
      file: `dist/umd/${name}.min.js`,
      format: 'umd',
      name,
      compact: true,
    },
    plugins: [nodeResolve({ browser: true }), terser()],
  };
}

export default [
  chunk('index', 'uuid'),
  chunk('v1', 'uuidv1'),
  chunk('v3', 'uuidv3'),
  chunk('v4', 'uuidv4'),
  chunk('v5', 'uuidv5'),

  chunk('nil', 'uuidNIL'),

  chunk('version', 'uuidVersion'),
  chunk('validate', 'uuidValidate'),
  chunk('parse', 'uuidParse'),
  chunk('stringify', 'uuidStringify'),
  chunk('uuid-to-bin', 'uuidToBin'),
  chunk('array-uuids-to-bins', 'arrayUuidsToBins'),
  chunk('object-uuids-to-bins', 'arrayOfObjectsBinsToUuids'),
  chunk('object-bins-to-uuids', 'objectUuidsToBins'),
  chunk('array-of-objects-bins-to-uuids', 'arrayOfObjectsBinsToUuids'),
];
