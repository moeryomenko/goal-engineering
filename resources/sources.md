# Sources & Further Reading

## Canonical references

- [Goal Engineering repo](https://github.com/cobusgreyling/goal-engineering) — `/goal`, patterns, CLIs
- [Loop Engineering](https://github.com/cobusgreyling/loop-engineering) — scheduled discovery; hands off to goals
- [Fleet Engineering](https://github.com/cobusgreyling/fleet-engineering) — governed agent populations

## Grok Build

- Grok Build CLI `/goal` and `update_goal` tool
- [API reference](../docs/api-reference.md)

## Related concepts

- Maker / checker split (verifier must not implement)
- [Addy Osmani — Loop Engineering](https://addyosmani.com/blog/loop-engineering/) — control systems over prompts
- [Cobus Greyling — Loop Engineering (Substack)](https://cobusgreyling.substack.com/p/loop-engineering) — primitives and Grok mapping

## CLIs

```bash
npx @cobusgreyling/goal-audit . --suggest
npx @cobusgreyling/goal-init . --pattern tests-green --tool grok
npx @cobusgreyling/goal-cost --pattern fix-bug
```