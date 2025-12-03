function markPresent() {
    let name = document.getElementById("studentName").value;
    if (name === "") {
        alert("Enter student name!");
        return;
    }
    addRecord(name, "Present");
}

function markAbsent() {
    let name = document.getElementById("studentName").value;
    if (name === "") {
        alert("Enter student name!");
        return;
    }
    addRecord(name, "Absent");
}

function addRecord(name, status) {
    let li = document.createElement("li");
    let today = new Date().toLocaleDateString();
    li.textContent = name + " - " + status + " - " + today;
    document.getElementById("attendanceList").appendChild(li);
}
