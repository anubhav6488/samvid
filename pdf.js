// Function to generate PDF from user data
function generatePDF(users) {
    return new Promise((resolve, reject) => {
        // Read HTML Template
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>User List</title>
            </head>
            <body>
                <h1>User List</h1>
                <ul>
                    ${users.map(user => `
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <br />
                    `).join('')}
                </ul>
            </body>
            </html>
        `;

        const options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
                contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
            },
            footer: {
                height: "28mm",
                contents: {
                    first: 'Cover page',
                    2: 'Second page', // Any page number is working. 1-based index
                    default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    last: 'Last Page'
                }
            }
        };

        const documentDefinition = {
            html: html,
            path: "./generate_pdf.pdf",
            type: ""
        };

        pdf.create(documentDefinition, options)
            .then((res) => {
                console.log(res);
                resolve();
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    }).then(() => {
        // Trigger PDF download after it is generated
        window.location.href = './generate_pdf.pdf';
    }).catch(error => {
        console.error("PDF generation error:", error);
    });
}
