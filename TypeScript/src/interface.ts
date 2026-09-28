interface Student { 
    stuId: string | number,
    stuName: string,
    stuGrade: string | number
}

interface Classroom extends Student {
    clsId: string | number,
    clsName: string,
}

let stu: Classroom ={
    clsId: "M1-ISTAD",
    clsName: "AI-LAB",
    stuId: "B01-0070",
    stuName: "Sakada",
    stuGrade: "Bachelor-1st"
}

console.table([stu]);
