 document.addEventListener('DOMContentLoaded', function() {
            const yearsContainer = document.getElementById('yearsContainer');
            const yearsWrapper = document.getElementById('yearsWrapper');
            const years = document.querySelectorAll('.history__year');
            const contentItems = document.querySelectorAll('.history__content-item');
            const prevArrow = document.getElementById('prevArrow');
            const nextArrow = document.getElementById('nextArrow');
            const sliderThumb = document.getElementById('sliderThumb');
            const sliderProgress = document.getElementById('sliderProgress');
            const sliderTrack = document.querySelector('.slider-track');
            const scrollLeft = document.getElementById('scrollLeft');
            const scrollRight = document.getElementById('scrollRight');
            
            let currentIndex = 0;
            const totalSlides = years.length;
            let isDragging = false;
            
            // Проверяем нужно ли показывать кнопки прокрутки
            function checkScrollButtons() {
                const wrapperWidth = yearsWrapper.clientWidth;
                const containerWidth = yearsContainer.scrollWidth;
                
                scrollLeft.classList.toggle('hidden', yearsWrapper.scrollLeft <= 0);
                scrollRight.classList.toggle('hidden', 
                    yearsWrapper.scrollLeft >= containerWidth - wrapperWidth);
            }
            
            // Прокручиваем к активному году
            function scrollToActiveYear() {
                const activeYear = years[currentIndex];
                const wrapperWidth = yearsWrapper.clientWidth;
                const yearLeft = activeYear.offsetLeft;
                const yearWidth = activeYear.offsetWidth;
                
                yearsWrapper.scrollTo({
                    left: yearLeft - (wrapperWidth / 2) + (yearWidth / 2),
                    behavior: 'smooth'
                });
            }
            
            // Инициализация
            updateSlider();
            checkScrollButtons();
            yearsWrapper.addEventListener('scroll', checkScrollButtons);
            
            // Обработчики кликов на года
            years.forEach(year => {
                year.addEventListener('click', function() {
                    goToSlide(parseInt(this.dataset.index));
                });
            });
            
            // Обработчики для стрелок навигации
            prevArrow.addEventListener('click', () => {
                if (currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            });
            
            nextArrow.addEventListener('click', () => {
                if (currentIndex < totalSlides - 1) {
                    goToSlide(currentIndex + 1);
                }
            });
            
            // Обработчики для кнопок прокрутки
            scrollLeft.addEventListener('click', () => {
                yearsWrapper.scrollBy({
                    left: -200,
                    behavior: 'smooth'
                });
            });
            
            scrollRight.addEventListener('click', () => {
                yearsWrapper.scrollBy({
                    left: 200,
                    behavior: 'smooth'
                });
            });
            
            // Обработчики для кастомного слайдера
            sliderThumb.addEventListener('mousedown', startDrag);
            sliderTrack.addEventListener('click', handleTrackClick);
            
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('mouseleave', endDrag);
            
            // Функции для работы с перетаскиванием
            function startDrag(e) {
                isDragging = true;
                e.preventDefault();
            }
            
            function handleDrag(e) {
                if (!isDragging) return;
                
                const trackRect = sliderTrack.getBoundingClientRect();
                let position = (e.clientX - trackRect.left) / trackRect.width;
                position = Math.max(0, Math.min(1, position));
                
                const newIndex = Math.round(position * (totalSlides - 1));
                goToSlide(newIndex);
            }
            
            function endDrag() {
                isDragging = false;
            }
            
            function handleTrackClick(e) {
                if (e.target === sliderThumb) return;
                
                const trackRect = sliderTrack.getBoundingClientRect();
                let clickX = e.clientX - trackRect.left;
                let position = clickX / trackRect.width;
                
                if (clickX <= 10) position = 0;
                if (clickX >= trackRect.width - 10) position = 1;
                
                position = Math.max(0, Math.min(1, position));
                const newIndex = Math.round(position * (totalSlides - 1));
                goToSlide(newIndex);
            }
            
            // Функция перехода к слайду
            function goToSlide(index) {
                if (index < 0 || index >= totalSlides) return;
                
                currentIndex = index;
                
                // Обновляем активный год
                years.forEach((year, i) => {
                    year.classList.toggle('active', i === index);
                });
                
                // Прокручиваем к активному году
                scrollToActiveYear();
                
                // Обновляем активный контент
                contentItems.forEach((item, i) => {
                    item.classList.toggle ('active', i === index);
                });
                
                // Обновляем слайдер
                updateSlider();
                
                // Обновляем состояние кнопок
                prevArrow.classList.toggle('disabled', index === 0);
                nextArrow.classList.toggle('disabled', index === totalSlides - 1);
                
                // Проверяем кнопки прокрутки
                checkScrollButtons();
            }
            
            // Функция обновления положения слайдера
            function updateSlider() {
                const progress = (currentIndex / (totalSlides - 1)) * 100;
                sliderThumb.style.left = `${progress}%`;
                sliderProgress.style.width = `${progress}%`;
            }
        });