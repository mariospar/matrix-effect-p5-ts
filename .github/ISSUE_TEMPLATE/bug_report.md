---
name: Setup Fail
about: Javascript doesn't run on the browser
title: ''
labels: 'critical'
assignees: ''

---

**Describe the bug**
There issues regarding the interpretation of javascript on the browser. I suspect that
there are misconfigurations in TypeScript or Parcel.

**To Reproduce**
Steps to reproduce the behavior:

1. Open the index.html file
2. Go to console
3. See `require is not defined`

**Expected behavior**
Everything should work fine and p5.js should run on the browser

**Desktop (please complete the following information):**
    - OS: Windows
    - Browser Chrome
    - Version 98.0.4758.102

**Additional context**
I think there are issues regarding tsconfig since I have doubts that the javascript that is exported
is compatible with the browser. I've tried different configurations and so far I am facing the blank
page issue.
