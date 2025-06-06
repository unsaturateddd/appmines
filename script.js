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

        setTimeout(() => {
                    cells.forEach(cell => {
                        cell.innerHTML = '';
                        
                        // Создаем новое изображение
                        const img = document.createElement('img');
                        const isMine = Math.random() > 0.3;
                        img.src = isMine ? 'svgs/stars.svg' : 'svgs/cross.png';
                        img.className = 'cell-image';
                        img.style.opacity = '0';
                        img.style.transform = 'scale(0.5)';
                        
                        // Добавляем изображение в ячейку
                        cell.appendChild(img);
                        
                        // Запускаем анимацию появления
                        setTimeout(() => {
                            img.style.opacity = '1';
                            img.style.transform = 'scale(1)';
                        }, 10);
                    });
                }, 500);
            });
        });
