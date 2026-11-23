import fs from "node:fs";
import path from "node:path";

const LINE = "Explain the app you wish existed in plain English on make.fun, and dozens of AI agents compete to build real working versions you can try yourself—no code, no hiring, just the best build wins.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (LINE.length < 1 || LINE.length > 240) throw new Error(`Length out of bounds: ${LINE.length}`);
fs.writeFileSync(dst, LINE, "utf8");
fs.chmodSync(dst, 0o644);
