const Employee = require('../lib/Employee')

test('creates employee class', () => {
    const employee = new Employee('angel', '22', 'angel@gmail.com')

    expect(employee.name).toBe('angel')
    expect(employee.id).toBe('22')
    expect(employee.email).toBe('angel@gmail.com')
})

test('gets the name property from employee', () => {
    const employee = new Employee('angel', '22', 'angel@gmail.com')

    expect(employee.getName()).toBe('angel')
    expect(employee.getId()).toBe('22')
    expect(employee.getEmail()).toBe('angel@gmail.com')
    expect(employee.getRole()).toBe('Employee')
})