const Engineer = require('../lib/Engineer')

test('creates Engineer object', () => {
    const engineer = new Engineer('mari', '22', 'mari@gmail', 'mari20')

    expect(engineer.name).toBe('mari')
    expect(engineer.id).toBe('22')
    expect(engineer.email).toBe('mari@gmail')
    expect(engineer.github).toBe('mari20')
})

test('checks to see github', () => {
    const engineer = new Engineer('mari', '22', 'mari@gmail', 'mari20')

    expect(engineer.getGithub()).toBe('mari20')
}) 