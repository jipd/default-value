import defaultValue from '../lib/index'

test('converts an undefined value to default value', () => {
    expect(defaultValue(undefined, 'apple')).toBe('apple')
})

test('does not convert a false value to the default value', () => {
    expect(defaultValue(false, 'apple')).toBe(false)
})
