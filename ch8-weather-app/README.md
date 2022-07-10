# README

## Lessons

1. If you pull in svg as an img `<img src={'path/to/svg' />}`, the result looks different
   than putting the svg directly in your jsx/tsx as in `<svg>...<svg/>`
2. drop-shadow is acutally a filter value so it might affect the bg. Trying box shadow might solve the issue.
3. To specify the shape of the props object when using _React Functional Component Type_ `React.FC<{ className: string }>`

## TODO

1. Make actual API calls for weather data
