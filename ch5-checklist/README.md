- tricks to using custom images as checkboxes

1.  put `display:none` on the input checkbox
2.  immeadiately after the input element add a `label` element
3.  use the custom image as the bg image of the `label` element
4.  use adjacent sibling combinator (+) to change the bg image of the `label` element whenever `input` is checked
    ```
        input:checked + label {
            bg:url(....)
        }
    ```
