/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* eslint-disable  no-console */
const path = require('path');
const gulp = require('gulp');
const shell = require('shelljs');

// Load env vars from the .env file.
require('dotenv').config();

/*
 * This task generates a development bundle to the specified output folder.
 * Also the bundle is generated, it watches the projects folder for changes.
 * Any changes in the project kicks off a Delta bundle generator only for
 * the file that was changed.
 *
 * - The output folder is defined in the .env file
 * through the variable: DEV_BUNDLE_OUTPUT
 * If not variable is defined, it defaults to /dist
 *
 * - The development bundle uses the source maps strategy "eval-source-map"
 * It is the slowest build option but it enables the developer to debug
 * on the browser exactly the same code he sees in the code editor
 * before it is transpiled by Babel.
 */

gulp.task('dev:spm', () => {
  const output =
    process.env.DEV_BUNDLE_OUTPUT ||
    path.resolve(__dirname, '/dist');
  if (!process.env.DEV_BUNDLE_OUTPUT) {
    shell.echo(
      `\n[WARNING] Env var DEV_BUNDLE_OUTPUT not defined in the .env file.
Using Default Output: ${output}`
    );
  }

  shell.echo(`\n[INFO] Generating the dev bundle to path: ${output}
[INFO] Any changes to the files will automatically trigger a new bundle generation.`);

  shell.exec(
    `webpack --mode=development --devtool=eval-source-map\
    --output-path=${output} --watch=true --hide-modules=true\
    --build-delimiter="\n\n[INFO] Bundle Generated into ${output} \n[INFO] Watching for file changes."`,
    { fatal: true }
  );
});

gulp.task('prod:spm', (done) => {
  const output = path.resolve(__dirname, '/dist');
  
  shell.echo(`\n[INFO] Generating the dev bundle to path: ${output}.`);

  shell.exec(
    `webpack --mode production`,
    { fatal: true, silent: true }
  );
  done();
});

