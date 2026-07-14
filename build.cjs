const { existsSync, cpSync, mkdirSync, rmSync, writeFileSync } = require("fs");
const { spawnSync } = require("child_process");

const executable = process.platform === "win32"
  ? "node_modules\\.bin\\vinext.cmd"
  : "node_modules/.bin/vinext";

rmSync("dist", { recursive: true, force: true });
const result = spawnSync(executable, ["build"], { stdio: "inherit", shell: process.platform === "win32" });
const esmEntry = "dist/server/index.mjs";
const jsEntry = "dist/server/index.js";

if (!existsSync(esmEntry) && !existsSync(jsEntry)) {
  process.exit(result.status || 1);
}

writeFileSync(jsEntry, `export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return Response.redirect(new URL("/course.html?v=6", url), 302);
    }
    return new Response("Not found", { status: 404 });
  }
};
`, "utf8");

mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
