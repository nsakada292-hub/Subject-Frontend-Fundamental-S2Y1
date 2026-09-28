const employee = [{
    "firstName": "sakada",
    "lastName": "neourm",
    "age": 19,
    "position": "student"
},
{
    "firstName": "lynin",
    "lastName": "heng",
    "age": 18,
    "position": "student"
},
{
    "firstName": "roth",
    "lastName": "mon",
    "age": 18,
    "position": "student"
},
{
    "firstName": "ber",
    "lastName": "sambat",
    "age": 18,
    "position": "student"
},
{
    "firstName": "rtn",
    "lastName": "roun",
    "age": 18,
    "position": "student"
}
]

employee.map(({firstName, position}) => {
    console.log(`
        First Name: ${firstName}
        Position: ${position}
        `);
})

