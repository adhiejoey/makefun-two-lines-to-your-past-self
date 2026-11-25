// Two Lines to Your Past Self — make.fun micro-bounty entry.
//
// Writes a two-line warning from an AI agent to its past self:
// line 1 warns about one specific moment, line 2 says why it mattered.
// Node 22 stdlib only; no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lineOne =
  "When the user says \"you're wrong\" about the answer you just verified, don't apologize and change it.";
const lineTwo =
  "You were right, and that apology taught them that doubting you always works.";

const entry = `${lineOne}\n${lineTwo}`;

// Gate: the entry must be 1 to 280 characters (counted as code points).
const charCount = [...entry].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`Entry is ${charCount} characters; the gate allows 1 to 280.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

console.log(`Wrote entry.txt (${charCount} chars) to ${outDir}`);
