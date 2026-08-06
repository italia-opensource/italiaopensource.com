import { eslintWalleConfigs } from "./src/@walle/eslint.preset.js";

export default [
  // Repo-internal ignore: e2e sandboxes are generated and git-ignored.
  { ignores: ["tests/e2e/.sandbox/**"] },
  ...eslintWalleConfigs,
];
