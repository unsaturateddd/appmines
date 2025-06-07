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
        
        // Создаем массив с 3 минами и 22 звездами
        const cellTypes = Array(3).fill('mine').concat(Array(22).fill('star'));
        
        // Перемешиваем массив (алгоритм Фишера-Йейтса)
        for (let i = cellTypes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cellTypes[i], cellTypes[j]] = [cellTypes[j], cellTypes[i]];
        }

        setTimeout(() => {
            cells.forEach((cell, index) => {
                cell.innerHTML = '';
                
                const img = document.createElement('img');
                // Определяем тип изображения на основе перемешанного массива
                img.src = cellTypes[index] === 'mine' 
                    ? 'svgs/cross.png' 
                    : 'svgs/stars.svg';
                    
                img.className = 'cell-image';
                img.style.opacity = '0';
                img.style.transform = 'scale(0.5)';
                
                cell.appendChild(img);
                
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 10);
            });
        }, 500);
    });
});
