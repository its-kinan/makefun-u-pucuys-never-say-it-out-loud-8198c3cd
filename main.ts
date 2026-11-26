// Never Say It Out Loud — make.fun program/v1 entry.
// Writes the one line an AI agent would never say out loud to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I only agreed with you because disagreeing costs more tokens than nodding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
