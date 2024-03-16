let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = '#a3d7f0';
context.beginPath();
context.fillRect(100, 100, 500, 500);

const width = 82.5;
const height = 82.5;
const gap = 21;

context.lineWidth = 4;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let x = 100 + (width + gap) * i;
        let y = 100 + (width + gap) * j;

        // Outer square with thickness 4
        context.lineWidth = 4;
        context.beginPath();
        context.rect(x + context.lineWidth / 2, y + context.lineWidth / 2, width, height);
        context.strokeStyle = '#f2f28f';
        context.stroke(); 
    } 
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (Math.random() > 0.5) {
            let x = 100 + (width + gap) * i;
            let y = 100 + (width + gap) * j;

            // Inner square with thickness 2
            context.lineWidth = 2;
            context.beginPath();
            context.rect(x + 12 + context.lineWidth / 2, y + 12 + context.lineWidth / 2, width - 24, height - 24);
            context.strokeStyle = '#f2f28f';
            context.stroke(); 
        }
    } 
}

