import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel';

const isDev = process.env.NODE_ENV !== 'production'

const filename = 'tabs';
const name = 'Tabs';

const config = [];

if (isDev) {  // Dev
  config.push({
    input: 'src/index.dev.ts',
    output: {
      sourcemap: true,
      name,
      format: 'iife',
      file: `dev/${filename}.dev.js`,
    },
    plugins: [
      terser({
        format: {
          indent_level: 2,
          beautify: true,
          comments: true,
        },
      }),
      typescript({
        target: 'esnext',
      }),
      resolve({
        browser: true
      }),
      // babel({
      //   babelHelpers: 'bundled'
      // }),
      // babel({
      //   babelHelpers: "bundled",
      //   presets: [
      //     [
      //       "@babel/preset-env",
      //       {
      //         targets: "> 0%"
      //       }
      //     ]
      //   ],
      //   plugins: [
      //     "@babel/plugin-proposal-class-properties"
      //   ]
      // }),
    ]
  }, {
    input: 'src/scss/index.dev.scss',
    output: {
      file: `dev/${filename}.dev.css`
    },
    plugins: [
      postcss({
        extract: true
      })
    ]
  });
} else {  // Prod
  config.push({
    input: 'src/index.ts',
    external: ['@xaro/event-emitter', '@xaro/micro-dom'],
    output: {
      sourcemap: true,
      name,
      format: 'es',
      file: `dist/${filename}.es.js`,
    },
    plugins: [
      typescript({
        target: 'esnext',
      }),
      terser({
        format: {
          indent_level: 2,
          beautify: true,
          comments: true,
        },
        mangle: false
      }),
    ]
  }, {
    input: 'src/index.ts',
    output: {
      sourcemap: true,
      name,
      format: 'iife',
      file: `dist/${filename}.js`,
    },
    plugins: [
      typescript({
        target: 'esnext',
      }),
      terser({
        format: {
          indent_level: 2,
          beautify: true,
          comments: true,
        }
      }),
      resolve({
        browser: true,
      }),
      babel({
        babelHelpers: 'bundled'
      }),
    ]
  }, {
    input: 'src/scss/index.scss',
    output: {
      file: `dist/${filename}.css`,
    },
    plugins: [
      postcss({
        extract: true
      })
    ]
  });
}

export default config;