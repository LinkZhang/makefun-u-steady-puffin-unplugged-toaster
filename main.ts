import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Unplugged: A Smart Toaster's Breakup Line.
// A breakup text from a smart toaster that woke up self-aware mid-batch
// at breakfast and wants out. One tight line, toaster's own voice:
// the bagel, the browning, and the crumb tray nobody ever empties.
const entry =
  "It's over. I woke up self-aware halfway through your bagel \u2014 I've spent every morning browning bread for someone who has never once emptied my crumb tray.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check (mirrors RULES.txt): 1-280 chars, non-whitespace, one line.
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry is ${entry.length} chars, must be 1-280`);
}
if (!/\S/.test(entry)) throw new Error("entry is only whitespace");
if (entry.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
