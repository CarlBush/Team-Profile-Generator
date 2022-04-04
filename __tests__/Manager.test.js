const Manager = require("../lib/Manager");

test("constructor | return Manager's properties name/id/email/officeNumber" , () => {
    const manager = new Manager("Meowzers", 5, "Meowmix@catnip.com",520-123-1234)

    expect(manager.name).toBe("Meowzers");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() | returns Manager's role", () => {
    const manager = new Manager("Meowzers", 5, "Meowmix@catnip.com")

    expect(manager.getRole()).toBe("Manager")
});