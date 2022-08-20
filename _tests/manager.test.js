const Manager = require ('../lib/manager');

test('creates an Manager object', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 10);
  
    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('bob@email.com');
    expect(manager.officeNumber).toBe(10);
    expect(manager.getOfficeNumber()).toEqual(10);
    expect(manager.getRole()).toBe("Manager");
  });