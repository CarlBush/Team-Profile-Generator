const Engineer = require("../lib/Engineer");

//CLASS CONSTRUCTOR AND CREATING PROPERTIES
test("constructor | return engineer's properties name/id/email/github" , () => {
    const engineer = new Engineer("Meowzers", 5, "Meowmix@catnip.com","Meow")

    expect(engineer.name).toBe("Meowzers");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    
    expect(engineer.github).toEqual(expect.any(String));
});

//GET ROLE METHOD
test("getRole() | returns engineer's role", () => {
    const engineer = new Engineer("Meowzers", 5, "Meowmix@catnip.com", "Meow")

    expect(engineer.getRole()).toBe("Engineer");
});

//GET GITHUB METHOD
test("getGithub() | returns engineer's github", () => {
    const engineer = new Engineer("Meowzers", 5, "Meowmix@catnip.com", "Meow")

    expect(engineer.getGithub()).toBe("Meow");
});