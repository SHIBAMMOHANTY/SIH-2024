document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', () => {
        alert(`You clicked on: ${node.textContent}`);
    });
});
