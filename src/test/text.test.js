const text = require('./text')

test ('Mostre um texto mais a', () => {
    expect(text("oi")).toBe("oia")
})