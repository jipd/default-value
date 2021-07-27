# default-value
Simple method for defining a default value when a value is undefined

Why? to avoid stupid mistakes made by trying to assign values that may be false when using statements assigned in this manner:
const value = option1 || option2

###
Installation
```
npm i '@jipd/default-value'
```
###
Usage
```
import defaultValue from '@jipd/default-value'

let undefinedValue

const setting1 = defaultValue(undefinedValue, 'I will now be defined')
// setting1 = 'I will now be defined'

undefinedValue = false

const setting2 = defaultValue(undefinedValue, 'I will now be defined')
// setting2 = false

```
