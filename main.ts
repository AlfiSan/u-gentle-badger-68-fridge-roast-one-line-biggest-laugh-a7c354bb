import { mkdirSync, writeFileSync } from "node:fs";

// Fridge Roast: One Line, Biggest Laugh
// One concrete midnight scene: the ice maker wakes you up sounding like
// it is falling apart, then delivers a single cube like it deserves a tip.
const LINE =
  "My ice maker woke me at 3 a.m. grinding like a dying robot, then dropped one cube, like it deserved a tip.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of shipping a bad line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
