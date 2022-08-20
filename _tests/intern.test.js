const Intern = require ('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern ('Bob', 1, 'bob@email.com', 'Yale');
  
    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('bob@email.com');
    expect(intern.school).toEqual('Yale');
    expect(intern.getSchool()).toEqual('Yale');
    expect(intern.getRole()).toBe("Intern");
  });