import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  output: [
    {
      file: './dist/test_cjs',
      format: 'cjs',
    },
    {
      file: './dist/test_es',
      format: 'es',
    },
    {
      file: './dist/test_amd',
      format: 'es',
    },
  ],
  input: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['es2015', { modules: false }], 'stage-0', 'react'],
      plugins: ['external-helpers'],
    }),
    resolve({
      browser: true,
      main: true,
    }),
  ],
  sourceMap: true,
};
