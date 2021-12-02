function checkForm() {
    var a = document.forms["myForm"]["from"].value;
    var b = document.forms["myForm"]["subject"].value;
    var c = document.forms["myForm"]["to"].value;
    var d = document.forms["myForm"]["cc"].value;
    var e = document.forms["myForm"]["bcc"].value;
    var f = document.forms["myForm"]["message"].value;

    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!a || !b || !c || !d || !e || !f) {
        alert("Please fill all the required fields!");
        return false;
    } else if 
        (
            pattern.test(a.toLowerCase()) && 
            pattern.test(c.toLowerCase()) && 
            pattern.test(d.toLowerCase()) && 
            pattern.test(e.toLowerCase())
        ) { if (confirm("Are you sure you want to send the email?")) {
            alert("Success!");
            return false;
        } else {
            alert("Cancelled.");
            return false;
        }   
        
    } else {
        alert("Email is not valid!");
        return false;
    }
}

function clearForm() {
    if (confirm("Are you sure you want to clear all forms?")) {
        alert("Form cleared!");
        document.getElementById("reset").reset();
    } else {
        alert("Cancelled.")
    }
}