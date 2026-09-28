// const { use } = require("react");

const userInfo = [
    {
        name: "Neourm Sakada",
        position: "Student",
        age: 19,
        profileImage: "../image/photo_2026-06-17_11-40-13.jpg"
    },

    {
        name: "Sambat Samber",
        position: "Student",
        age: 18,
        profileImage: "../image/photo_2026-06-26_11-19-19.jpg"
    },

    {
        name: "Mon Srey Roth",
        position: "Student",
        age: 18,
        profileImage: "../image/photo_2026-06-26_11-20-32.jpg"
    },

    {
        name: "Roun Rothana",
        position: "Student",
        age: 19,
        profileImage: "../image/photo_2026-06-26_11-23-13.jpg"
    },

    {
        name: "Hai Heng Ravit",
        position: "Student",
        age: 19,
        profileImage: "../image/photo_2026-06-26_11-52-46.jpg"
    },
]

let userCard="";
userInfo.map((info)=> {
    userCard = `
        <div style="border: 1px solid gray; padding: 10px; border-radius: 20px">

        <img src="${info.profileImage}" style="width:75px; height: 75px; border-radius: 50%;">
        <hr>
            <h1>Name: ${info.name}</h1>
            <h1>Age: ${info.age}</h1>
            <h1>Position: ${info.position}</h1>
        </div>
    `
    document.getElementById('userDisplay').innerHTML += userCard;
}
)