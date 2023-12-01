import { rollup } from 'rollup'
import { findWorkspacePackages } from '@pnpm/find-workspace-packages';
import path from 'node:path';
import { DEFAULT, generateExternal} from './ustils';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';

interface Options {
  /**
   * @description
   */
  input?:string;
}

export async function build(root:string,options:Options) {
  const {input:_input = DEFAULT} = options;
  const input = path.resolve(root,_input)
  const output = path.resolve(root,'dist')

  const packages = await findWorkspacePackages(root);
  const manifest = packages[0].manifest;

  const bundle =  await rollup({
    input,
    plugins:[
      svelte({
        compilerOptions:{
          customElement:true,
          generate:'dom'
        }
      }),
      resolve({
        browser: true,
        exportConditions: ['svelte'],
        extensions: ['.mjs', '.js', '.json', '.ts', 'tsx','.svelte'],
      }),
      // terser(),
      // cleanup()
    ],
    treeshake:true,
    external:generateExternal(manifest),
  })

  await bundle.write({
    format:'esm',
    dir:output,
  })
}
