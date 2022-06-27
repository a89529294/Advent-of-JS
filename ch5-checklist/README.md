- tricks to using custom images as checkboxes

1.  put `display:none` on the input checkbox
2.  immeadiately after the input element add a `label` element
3.  use the custom image as the bg image of the `label` element
4.  use adjacent sibling combinator (+) to change the bg image of the `label` element whenever `input` is checked
    ```js
        input:checked + label {
            bg:url(....)
        }
    ```

- use `e.shiftKey` boolean property to see if the shift key was pressed in combination with any other key. `e` can be any event, not just keyboard events.

```js
    if (e.shiftKey && e.code = '...') {
        ...
    }
```

- functionalities

1. click to strike through
2. shift click to strike through multiple items
3. tab + space/enter to strike through

- TODO

1. Add an animation on load, have the podcast list slide out from under the podcast artwork
