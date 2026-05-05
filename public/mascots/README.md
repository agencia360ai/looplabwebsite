# Mascots

Drop the rendered mascot PNGs (transparent backgrounds) into this folder using
these exact filenames. Anything missing will simply leave the card empty — the
title block still renders.

| Filename             | Used in              | Suggested pose                       |
| -------------------- | -------------------- | ------------------------------------ |
| `sensei-fight.png`   | Apps → Martial Artist| Older sensei, fighting stance        |
| `sensei-stand.png`   | (reserved)           | Older sensei, neutral standing pose  |
| `racer-trophy.png`   | Apps → Racer         | Race driver celebrating with trophy  |
| `racer-helmet.png`   | (reserved)           | Race driver holding helmet           |
| `boxer-jab.png`      | Apps → Boxer         | Boxer throwing a jab, ponytail flying|
| `boxer-guard.png`    | (reserved)           | Boxer in defensive guard stance      |
| `baker-flame.png`    | Apps → Baker         | Chef with flaming pan + spatula      |
| `baker-stand.png`    | (reserved)           | Chef with arms crossed, neutral pose |
| `rapper-mic.png`     | Apps → Rapper        | Rapper spitting into mic, hand out   |
| `rapper-point.png`   | (reserved)           | Rapper pointing, hands-in-pockets    |

Recommended: ~1024×1536 PNG, transparent background, character anchored to the
bottom of the canvas.

To add a Calligrapher mascot later, render the same way and wire the filename
into `src/components/AppsSection.tsx`.
