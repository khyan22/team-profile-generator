const Intern = require('../lib/Intern')

test('creates intern objects', () => {
    const intern = new Intern('khyan', '22', 'khyan@gmail.com', 'UCF')

    expect(intern.name).toBe('khyan')
    expect(intern.id).toBe('22')
    expect(intern.email).toBe('khyan@gmail.com')
    expect(intern.school).toBe('UCF')
})

test('gets school property', () => {
    const intern = new Intern('khyan', '22', 'khyan@gmail.com', 'UCF')

    expect(intern.getSchool()).toBe('UCF')
})