var dataSet = [
    ["test123@mail.com", "Introduction", "Hello World!"],
    ["somethin@mail.org", "No. #512", "._.._..._"], ["hello.w@yahoo.com", "Express", "Your Package"], ["jyp@gmail.com", "K-chart", "1234567890"],
    ["32345@mail.id", "12345", '54321'],
    ["yourcreation@gmail.com", "Penting", "Jadi gini.."],
    ["kalbis.ac.id", "Title", "12133131"],
    ["temp@mail.com", "123", "456"], ["temp1@mail.com", "333", "222"], ["chart@mail.xyz", "45678", "Halo Dunia!"],
    ["2021105271@student.kalbis.ac.id", "Daniel Reynard", "Yes"]
    
]

$(document).ready(function() {
    $('#data-table').DataTable({
        data: dataSet,
        columns: [
            { title: "Pengirim" },
            { title: "Subject" },
            { title: "Message" }
        ]
    });
});

$(function() {
    $("form[name='myForm'").validate({
        //errorClass: "error-class",
        //validClass: "valid-class",


        rules: {
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: "required"
        },
        messages: {
            email: "Please enter a valid email.",
            subject: "Please enter a subject",
            message: "Please enter a message"
        },
        submitHandler: function(form) {
            //form.submit();
            alert("Success!");
            form.clear();
        }
    });
});



