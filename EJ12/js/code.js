let sometext = prompt("Introduzca texto");

let arrayOfWords = sometext.split(" ");

arrayOfWords.forEach(word => {
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(word)) {
	document.write("<p>" + `The date in the text is ${word}` + "</p>");
    }

    if (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(word)) {
	document.write("<p>" + `The email in the test is ${word}` + "</p>");
    }
})

document.write("<p>" + escapeHTML( filterScriptText(sometext))  + "</p>");

invertNameAndSecondName();

function escapeHTML(text) {
    // format [regex,replacement]
    let replacements = [[/&/g, "&amp;"], [/\"/g, "&quot;"], [/>/g,"&lt;"], [/</g,"&gt;"]];

    replacements.forEach(replace => {
	text = text.replace(replace[0], replace[1]);
    })

    return text;
}

function invertNameAndSecondName() {
    let name = prompt("Introduzca nombre");
    let lastname = prompt("Introduzca apellido");

    document.write(lastname + ", " + name);
}

function filterScriptText(sometext) {
    sometext = sometext.replace(/<script>.*<\/script>/g, "");
    return sometext
}
