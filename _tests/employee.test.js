const Employee = require ('../lib/employee');

test('creates an Employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@yahoo.com');
  
    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('bob@yahoo.com');

  });
  