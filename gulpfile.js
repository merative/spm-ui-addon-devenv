const path = require("path");
const gulp = require("gulp");
const shell = require("shelljs");

// Load env vars from the .env file.
require("dotenv").config();

/*
 * This task generates a development bundle to the specified output folder.
 * Also the bundle is generated, it watches the projects folder for changes.
 * Any changes in the project kicks off a Delta bundle generator only for
 * the file that was changed.
 *
 * - The output folder is defined in the .env file
 * through the variable: CLIENT_DIR
 * If not variable is defined, it defaults to /dist
 *
 * - The development bundle uses the source maps strategy "eval-source-map"
 * It is the slowest build option but it enables the developer to debug
 * on the browser exactly the same code he sees in the code editor
 * before it is transpiled by Babel.
 */

gulp.task("deploy:spm", async () => {
  if (process.env.CLIENT_DIR) {
    const customComponentName = process.env.CUSTOM_COMPONENT_NAME || "custom";
    const customComponentLocation = `${process.env.CLIENT_DIR}/components/${customComponentName}/WebContent/CDEJ/jscript/SPMUIComponents`;
    shell.echo(
      `\n[INFO] Copying the generated files to custom component: ${customComponentLocation}`,
    );
    shell.exec(
      `webpack --mode=development --devtool=eval-source-map\
      --output-path=${customComponentLocation}`,
      { fatal: true },
    );
  } else {
    throw new Error(
      "Env var CLIENT_DIR is not defined in the .env file. It should be set to the weblicent directory.",
    );
  }
});

gulp.task("dev:spm", () => {
  if (!process.env.CLIENT_DIR) {
    throw new Error(
      "Env var CLIENT_DIR is not defined in the .env file. It should be set to the weblicent directory.",
    );
  }
  const cdejLocation =
    process.env.RELATIVE_PATH_TO_BUNDLE || "CDEJ/jscript/SPMUIComponents";
  const output =
    `${process.env.CLIENT_DIR}/WebContent/${cdejLocation}` ||
    path.resolve(__dirname, "/dist");

  shell.echo(`\n[INFO] Generating the dev bundle to path: ${output}
[INFO] Any changes to the files will automatically trigger a new bundle generation.`);

  shell.exec(
    `webpack --mode=development --devtool=eval-source-map\
    --output-path=${output} --watch\
   `,
    { fatal: true },
  );

  shell.echo(
    `\n\n[INFO] Bundle Generated into ${output} \n[INFO] Watching for file changes`,
  );
});

gulp.task("prod:spm", (done) => {
  const output = path.resolve(__dirname, "/dist");

  shell.echo(`\n[INFO] Generating the dev bundle to path: ${output}.`);

  shell.exec(`webpack --mode production`, { fatal: true });
  done();
});
