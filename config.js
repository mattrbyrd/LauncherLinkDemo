function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var name = prompt("Please enter your first and last name")
var email = prompt("Please enter your email address")

var ccLauncherConfig = {
    studentId: email,
    studentName: name,
    postStudentData: false,
    postUrl: ''
};
