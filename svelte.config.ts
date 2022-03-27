import sveltePreprocess from 'svelte-preprocess';
import path from 'path'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(
    { includePaths: [path.join(__dirname, 'relative/path')] }
  )
}
