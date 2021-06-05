import typescript from '@rollup/plugin-typescript';
// import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import scss from "rollup-plugin-scss";
import { babel } from '@rollup/plugin-babel';
// import dts from "rollup-plugin-dts";

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
      plugins: [
        // terser({
        //   format: {
        //     indent_level: 2,
        //     beautify: true,
        //     comments: false,
        //   },
        //   safari10: true,
        // }),
      ]
    },
    plugins: [
      typescript({
        target: 'es3',
      }),
      resolve({
        browser: true
      }),
      scss({
        watch: 'src/scss/',
        output: `dev/${filename}.dev.css`,
        failOnError: true,
      }),
      babel({
        babelHelpers: 'bundled'
      }),
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
  // }, {
  //   input: "./my-input/index.d.ts",
  //   output: [{ file: "dist/my-library.d.ts", format: "es" }],
  //   plugins: [dts()],
  });
} else {  // Prod
  config.push({
  //   input: 'src/index.ts',
  //   external: ['@xaro/event-emitter', '@xaro/micro-dom'],
  //   output: [
  //     {
  //       sourcemap: true,
  //       name,
  //       format: 'es',
  //       file: `dist/${filename}.es.js`,
  //     }
  //   ],
  //   plugins: [
  //     typescript({
  //       target: 'esnext',
  //     }),
  //     terser({
  //       format: {
  //         beautify: true,
  //         comments: true,
  //       }
  //     }),
  //     scss({
  //       watch: 'src/scss/',
  //       output: `dist/${filename}.css`,
  //       failOnError: true,
  //     }),
  //   ]
  // }, {
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        name,
        format: 'iife',
        file: `dist/${filename}.js`,
      // }, {
      //   sourcemap: true,
      //   name,
      //   format: 'umd',
      //   file: `dist/${filename}.umd.js`,
      }
    ],
    plugins: [
      typescript({
        target: 'esnext',
      }),
      terser({
        format: {
          beautify: true,
          comments: true,
        }
      }),
      resolve({
        browser: true,
      }),
      scss({
        watch: 'src/scss/',
        output: `dist/${filename}.css`,
        failOnError: true,
      }),
      babel({
        babelHelpers: 'bundled'
      }),
    ]
  });
}

export default config;