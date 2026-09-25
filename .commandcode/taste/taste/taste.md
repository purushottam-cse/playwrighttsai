# Taste
- Prefers technical concept / interview-prep explanations as Markdown files saved in an `InterviewQuestionNotes` folder, named with the `X_Y_Z_IQ.md` pattern (concept parts joined by underscores, `_IQ` suffix). Confidence: 0.7
- Wants each such note to follow a consistent structure: a comparison table with clear columns, a layer-by-layer walkthrough using a simple code/file example, a pipeline diagram, and a TL;DR. Confidence: 0.75
- Prefers tables to be quickly scannable: concise cells (no long prose blobs), and a short summary/"at a glance" table above the fuller detailed comparison table. Confidence: 0.55
- Works against a repo whose default branch is `master` (not `main`); "sync master" means fetch/verify origin then push to `origin/master`. Confidence: 0.7
- Wants commit messages to match the existing repo style: short imperative subject (e.g. "Add JS operator examples") with a `Co-authored-by: CommandCodeBot <noreply@commandcode.ai>` trailer. Confidence: 0.6
- Practice/lesson code is organized in numbered topic folders (e.g. `4_Operator/`) containing the exercise scripts for that lesson. Confidence: 0.55
- Works on Windows where the agent's shell tool runs under `cmd.exe` (not PowerShell) — use cmd-compatible command chaining (`&&`); PowerShell syntax like `; if ($?)` breaks. Confidence: 0.7
- Delegates the full git flow from terse requests like "push this code": expects the agent to inspect changed files, stage the right ones, craft a commit, and push — without hand-holding. Confidence: 0.6
- When he asks to do something "manually" ("I want to push code manually"), he wants to run it himself: give the exact commands step by step (with a short explanation of what each does) instead of executing them for him — he is learning the tooling. Confidence: 0.55
