const Manager = require('../lib/Manager')

test('creates manager objects', () => {
    const manager = new Manager('khyan', '22', 'khyan@mail', '#1')

    expect(manager.name).toBe('khyan')
    expect(manager.id).toBe('22')
    expect(manager.email).toBe('khyan@mail')
    expect(manager.officeNumber).toBe('#1')
})

test('test office number function', () => {
    const manager = new Manager('khyan', '22', 'khyan@mail', '#1')

    expect(manager.getOfficeNumber()).toBe('#1')
})