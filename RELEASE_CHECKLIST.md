# Release checklist

1. Test Curam
   - Set up a backend renderer as described in documentation
   - Create a custom component
   - `npm run mock-graphql-service`
   - `npm run dev`
   - Check Curam works including Components, CSS styling and fonts
2. Test Storybook
   - `npm run storybook`
   - Navigate to http://localhost:6006
   - Verify all stories are correct
3. Test Gatsby
   - `cd cookbook`
   - `npm run dev`
   - Navigate to http://localhost:8000
   - Verify documentation is correct
4. License checker
   - See [npm-license-report](https://github.com/wh-spm-scratch/npm-license-report?tab=readme-ov-file#npm-license-report) repo for steps to generate the new license file
   - Go to [Release Management issues github](https://github.com/WH-GovSPM-Doc/SPM-Release-Management/issues/new/choose) and create a new "Unsupported asset release" PR
   - Fill in the above PR
