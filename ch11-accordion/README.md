# Accordion CH 11 Advent of JS

## WHat I Have Learned

1. Learned about `transform-style:preserve-3d;` on parent elements and `transform:translateZ(-10px)` on child elements to move child elements behind parent elements.
2. `isolation:isolate` on parent element will make `transform-style:preserve-3d;` invalid.
3. `transform:translate` is purely visual, the elementws sizes and position remain the same.
4. `clientHeight` excludes border, margin and horizontal scrollbar if present. use `getBoundingClientRect` instead.

## TODO

1. Implementation is way too JS heavy.
2. Transition is janky.
3. Use more semantic html tags, `<details>`, `<summary/>`
4. Read https://css-tricks.com/how-to-animate-the-details-element-using-waapi/
