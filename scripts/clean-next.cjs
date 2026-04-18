/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const targets = [".next", path.join("node_modules", ".cache")];

for (const rel of targets) {
  const abs = path.join(root, rel);
  try {
    fs.rmSync(abs, { recursive: true, force: true });
    console.log("Removed:", rel);
  } catch (err) {
    console.warn("Could not remove", rel, err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}
