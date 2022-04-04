const Engineer = require("../lib/Engineer");

test("constructor | return engineer's properties name/id/email/github" , () => {
    const engineer = new Engineer("Meowzers", 5, "Meowmix@catnip.com","Meow")

    expect(engineer.name).toBe("Meowzers");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    
    expect(engineer.getGithub()).toBe("https://github.com/Meow")
});

test("getRole() | returns engineer's role", () => {
    const engineer = new Engineer("Meowzers", 5, "Meowmix@catnip.com", "Meow")

    expect(engineer.getRole()).toBe("Engineer")
});