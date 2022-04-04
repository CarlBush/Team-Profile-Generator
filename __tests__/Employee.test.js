const Employee = require("../lib/Employee");

//CLASS CONSTRUCTOR AND CREATING PROPERTIES
test("constructor | return Employee's properties name/id/email" , () => {
    const employee = new Employee("Meowzers", 5, "Meowmix@catnip.com")

    expect(employee.name).toBe("Meowzers");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

//GET NAME METHOD
test("getName() | return Employee's Name", () => {
    const employee = new Employee("Meowzers", 5, "Meowmix@catnip.com")

    expect(employee.getName()).toEqual(expect.any(String));
});

//GET ID METHOD
test("getId() | returns Employee's ID", () => {
    const employee = new Employee("Meowzers", 5, "Meowmix@catnip.com")

    expect(employee.getId()).toEqual(expect.any(Number));
});

//GET EMAIL METHOD
test("getEmail() | returns Employee's email", () => {
    const employee = new Employee("Meowzers", 5, "Meowmix@catnip.com")

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//GET ROLE METHOD
test("getRole() | returns Employee's role", () => {
    const employee = new Employee("Meowzers", 5, "Meowmix@catnip.com")

    expect(employee.getRole()).toBe("Employee")
});