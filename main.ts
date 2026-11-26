import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIE = "I just renamed a variable";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LIE, "utf8");
