document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
    
    // Создаем 25 ячеек
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.className = 'cel';
        gridContainer.appendChild(cell);
    }
    
    // Обработчик клика
    document.addEventListener('click', function() {
        const cells = document.querySelectorAll('.cel');
        
        cells.forEach(cell => {
            cell.innerHTML = '';
            const img = document.createElement('img');
            const isMine = Math.random() > 0.3;
            img.src = isMine ? 'svgs/stars.svg' : 'svgs/cross.png';
            img.className = 'cell-image';
            img.style.width = '90%';
            img.style.height = '90%';
            cell.appendChild(img);
        });
    });
});