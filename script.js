document.addEventListener('DOMContentLoaded', function() {
            const gridContainer = document.getElementById('gridContainer');
            
            // Создаем 25 ячеек
            for (let i = 0; i < 25; i++) {
                const cell = document.createElement('div');
                cell.className = 'cel';
                gridContainer.appendChild(cell);
            }
            
            // Функция для обновления ячеек
            function updateCells() {
                const cells = document.querySelectorAll('.cel');
                
                // 1. Анимация исчезновения текущих элементов
                cells.forEach(cell => {
                    if (cell.firstChild) {
                        cell.firstChild.classList.add('fade-out');
                    }
                });
                
                // 2. После завершения анимации исчезновения
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
            }
            
            // Обработчик клика
            document.addEventListener('click', updateCells);
            
            // Инициализация первых элементов
            updateCells();
        });
