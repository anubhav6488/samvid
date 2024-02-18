document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button
    var submitBtn = document.querySelector('.signupbtn');

    // Add event listener to the submit button
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();

        // Get the values of the input fields
        var firstName = document.getElementById('First_Name').value;
        var lastName = document.getElementById('Last_Name').value;
        var number = document.getElementById('Number').value;
        var email = document.getElementById('email').value;
        var token = generateToken(8); // Generate a token
        var timestamp = new Date().getTime();
        // Create a FormData object and append the values
        var formData = new FormData();
        formData.append('First_Name', firstName);
        formData.append('Last_Name', lastName);
        formData.append('Number', number);
        formData.append('email', email);
        formData.append('token', token);
        formData.append('timestamp', timestamp);
        console.log(timestamp)

        // Send the data using fetch
        fetch('https://sheetdb.io/api/v1/7xew1pphufyj5', {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle response as needed
            console.log(data);
            // Open the next page
            const queryString = new URLSearchParams(formData).toString();
      window.location.href = `page2.html?${queryString}`;
        })
        .catch(error => console.error('Error:', error));
    });

});

// Function to generate a random alphanumeric token
function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}
