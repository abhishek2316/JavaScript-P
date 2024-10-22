

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;

document.querySelector('#start').addEventListener('click', () => {
    if(!interval){
        interval = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
    console.log('start');
    
})

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
    console.log('stoped');
    
})
