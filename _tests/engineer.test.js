const Engineer = require ('../lib/engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 'bob@github.com');
  
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('bob@email.com');
    expect(engineer.github).toBe('bob@github.com');
    expect(engineer.getGithub()).toEqual('bob@github.com');
    expect(engineer.getRole()).toBe("Engineer");
  });