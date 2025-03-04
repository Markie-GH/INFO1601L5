//object literal

function getAverageGrade(students, course) {
    let sum = 0;
    let count = 0;
    for (let student of students) {
        for (let courseInfo of student.transcript) {
            if (courseInfo.course === course) {
                for (let i of courseInfo.grades) {
                    sum = sum + i;
                    count++;
                }
            }

        }
    }
    if (count === 0) {
        return -1;
    } else {
        return sum / count;
    }
}

function getAssignmentMark(student, course, num) {
    for (let courseID of student.transcript) {
        if (courseID.course === course) {
            for (let numID = 0; numID <= courseID.grades.length; numID++) {
                if (numID + 1 === num) {
                    return courseID.grades[numID];
                }
            }
        }
    }
    return -1;
}

function averageAssessment(students, courseName, assignment) {
    let sum1 = 0;
    let count2 = 0;
    for (let student of students) {
        for (let courseID of student.transcript) {
            if (courseID.course === courseName) {
                for (let numID = 0; numID <= courseID.grades.length; numID++) {
                    if (numID + 1 === assignment) {
                        sum1 = sum1 + courseID.grades[numID]
                        count2++;
                    }
                }
            }
        }

    }
return sum1/count2;
}

let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript: [
        {
            course: 'INFO 1603',
            grades: [89, 34, 67]
        },
        {
            course: 'INFO 1601',
            grades: [89, 34, 67]
        }
    ]
};

let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript: [
        {
            course: 'INFO 1601',
            grades: [100, 89, 79]
        }
    ]
};

let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript: [
        {
            course: 'INFO 1600',
            grades: [89, 34, 67]
        }
    ]
};


const students = [bob, sally, paul];


let avgGrade = getAverageGrade(students, 'INFO 1601');
let assignGrade = getAssignmentMark(bob, 'INFO 1601', 2);
let avgAsses = averageAssessment(students,'INFO 1601',3);
console.log(assignGrade);
console.log(avgGrade);
console.log(avgAsses);


