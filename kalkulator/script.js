let display = document.getElementById('ekran');

let buttons = Array.from(document.getElementsByClassName('dugme'));

let maxbrojkaraktera = 8;
let trenutnibrojkaraktera = 0;

buttons.map(dugme => {
    dugme.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'CE':
                trenutnibrojkaraktera = 0;
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    trenutnibrojkaraktera--;
                    (display.innerText = display.innerText.slice(0, -1));
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    trenutnibrojkaraktera = display.innerText.length
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                if (trenutnibrojkaraktera < maxbrojkaraktera) {
                    display.innerText += e.target.innerText;
                    trenutnibrojkaraktera++;
                }
        }
    })
})