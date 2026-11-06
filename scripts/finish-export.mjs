/* Next.js marks its JSON data block with crossorigin, which is only valid on scripts that run. */
import fs from "node:fs";

for (const name of ["index.html", "404.html"]) {
  const file = new URL(`../out/${name}`, import.meta.url);
  const html = fs.readFileSync(file, "utf8");
  fs.writeFileSync(file, html.replace('type="application/json" crossorigin=""', 'type="application/json"'));
}
