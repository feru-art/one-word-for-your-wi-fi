// One Word for Your Wi-Fi — make.fun entry (program/v1).
// Writes the winning word to /output/entry.txt.
// The word: Ghosting — the Wi-Fi that vanishes mid-call, mid-game,
// mid-download, right when you need it most. One beat, true, fresh.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghosting";

// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 20
// characters, not only white space. Check our own word before writing, so a
// bad word can never ship: the program fails loudly instead of writing it.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 20 || WORD.trim().length === 0) {
  throw new Error(`word fails the gate: ${chars.length} characters`);
}

// The sandbox exposes the output directory as /output; the kit maps it to
// MAKEFUN_OUTPUT_DIR for local runs. Fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
