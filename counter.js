document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const countButton = document.getElementById('countButton');

    countButton.addEventListener('click', () => {
        count++;
        counterDisplay.innerText = count;
    });
});
