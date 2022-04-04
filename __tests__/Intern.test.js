const Intern = require("../lib/Intern");

test("constructor | return Intern's properties name/id/email/school" , () => {
    const intern = new Intern("Meowzers", 5, "Meowmix@catnip.com","Wildcats")

    expect(intern.name).toBe("Meowzers");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    
    expect(intern.school).toEqual(expect.any(String));
});

test("getRole() | returns intern's role", () => {
    const intern = new Intern("Meowzers", 5, "Meowmix@catnip.com", "Wildcats")

    expect(intern.getRole()).toBe("Intern")
});

test("getSchool() | returns the Intern's school", () => {
    const intern = new Intern("Meowzers", 5, "Meowmix@catnip.com", "Wildcats")
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});