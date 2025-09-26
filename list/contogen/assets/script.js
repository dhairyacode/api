console.log("Official Site: https://dhairyacode.github.io");

function copyCode() {
    const codeText = "GET /api/contogen?query=<term>";
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Copied to clipboard: " + codeText);
    });
}
