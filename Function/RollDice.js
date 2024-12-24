function dice() {
    const random = Math.floor( Math.random() * 6)+1;
    console.log(random);
}

function display() {
    for(let i= 0; i<6; i++) {
        dice();
    }
}

