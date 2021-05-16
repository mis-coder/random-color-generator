const generateBtn = document.querySelector("#generate-btn");
const codeText = document.querySelector("#code-text")
const cloneBtn = document.querySelector("#clone-btn")


function generateRandomNum(){
    return Math.floor(Math.random() * 255);
}

function rgbToHex(r,g,b){
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
      
    if(r.length == 1)
        r = `0${r}`;
    if(g.length == 1)
        g = `0${g}`;
    if(b.length == 1)
        b = `0${b}`;
        
    return `#${r}${g}${b}`.toUpperCase();
}


function generateRandomColor() {
    red = generateRandomNum();
    blue = generateRandomNum();
    green = generateRandomNum();

    return [red, green, blue, rgbToHex(red, green, blue)];
}

function copyToClipboard(){
    codeText.select();
    document.execCommand("copy");

    alert("copied to clipboard");
}

generateBtn.addEventListener('click', () => {
    const [r, g, b, code] = generateRandomColor()

    codeText.value = code;
    codeText.style.color = code;

    const brightness = Math.round(((parseInt(r) * 299) +
    (parseInt(g) * 587) +
    (parseInt(b) * 114)) / 1000);

    document.querySelector('.page-title').style.color = (brightness > 125) ? 'black' : 'white';
    document.body.style.backgroundColor = code;
})

cloneBtn.addEventListener('click', copyToClipboard)
