function weekend(option) {
    switch (option) {
        case 1: return "Monday"; break;
        case 2: return "Tueday"; break;
        case 3: return "Wednesday"; break;
        case 4: return "Thursday"; break;
        case 5: return "Friday"; break;
        case 6: return "Saturday"; break;
        case 7: return "Sunday"; break;
        default: return "Invalid Option! Please choose option 1 - 7."; break;
    }
}

let msg = prompt("Enter number: ");
let result = weekend(Number(msg));
alert(result);