
// Array of exam centers (cities)
const examCenters = ["Panvel","Pune","Pawai","Mumabai","Nagpur","Pen","Nashik","Thane","Satara","Kolhapur"];

// Array to store allocated emails
const allocatedEmails = [];

function allocateExamCenter() {
    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Validate email uniqueness
    if (allocatedEmails.includes(email)) {
        alert("Email already allocated. Please use a different email.");
        return;
    }

    // Validate name and email presence
    if (!name || !email) {
        alert("Name and email are required fields.");
        return;
    }

    // Randomly allocate an exam center
    const randomIndex = Math.floor(Math.random() * examCenters.length);
    const allocatedCenter = examCenters[randomIndex];

    // Store allocated email and display user information
    allocatedEmails.push(email);
    displayUserInfo(name, email, allocatedCenter);
}

function displayUserInfo(name, email, center) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>User Information:</p>
                           <p>Name: ${name}</p>
                           <p>Email: ${email}</p>
                           <p>Allocated Exam Center: ${center}</p>`;
}
