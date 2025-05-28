const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".header__burger");
const closeMenu = document.querySelector(".close-menu");


burger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
    if (mobileMenu.classList.contains("mobile-menu")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
})


const hasSubmenu = document.querySelectorAll('.mobile-menu-nav > ul > .has-submenu > a');

hasSubmenu.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');
    if(item.classList.contains('active')) {
       e.preventDefault();
       item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
    } else {
       e.preventDefault();
       item.nextElementSibling.style.maxHeight = 0;
    }
  });
});


// Slider

 var swiper = new Swiper(".catalog-swiper", {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      spaceBetween: 24, 
      slidesPerView: 4,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            el: ".swiper-pagination",
          }
        },
        577: {
          slidesPerView: 2,
          
        },
        870: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      },
  });
  var productsSwiper = new Swiper(".products-swiper", {     
      grid: {
          rows: 2,
      },
      slidesPerView: 4,
      spaceBetween: 24,

       navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
      },
      autoplay: window.innerWidth < 577 ? {
            delay: 3000,
            disableOnInteraction: false,
      } : false,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          grid: {
            rows: 1,
          },
        },
        577: {
          slidesPerView: 2,
        },
        870: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      },
  })
  var newsSwiper = new Swiper(".news-swiper", {
      slidesPerView: 2,
      spaceBetween: 24, 
      loop: true,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        577: {
          slidesPerView: 2,
        },
      },
  })
  var servicesSwiper = new Swiper(".services__swiper", {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      spaceBetween: 24, 
      slidesPerView: 3,
      loop: true,
      
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
      },
  });
  var partnersSwiper = new Swiper(".partners__swiper", {
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 24, 
      slidesPerView: 6,
      loop: true,
      
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1440: {
          slidesPerView: 6,
        },
      },
  })
 var valuesSwiper = new Swiper(".values-swiper", {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      spaceBetween: 24, 
      slidesPerView: 1,
      loop: true,
 })
 var swiper = new Swiper(".certificates-swiper", {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 24, 
      slidesPerView: 5,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        577: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
      },
  });

  var servicesSwiper = new Swiper(".news-card-container-swiper", {
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 24, 
      slidesPerView: 3,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
      },
  });
  var careerSwiper = new Swiper(".career-swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 24, 
      slidesPerView: 1,
      loop: true,
  })
  document.addEventListener('DOMContentLoaded', () => {
    // слайдер продукта
    const productThumbs = new Swiper(".product-thumbs", {
        spaceBetween: 10,
        direction: "vertical",
        slidesPerView: 4,
        // freeMode: true,
        navigation: {
            nextEl: ".product-btn-next",
            prevEl: ".product-btn-prev",
        },
    });
    // слайдер продукта
    const productSwiper = new Swiper(".product-swiper", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        },
        thumbs: {
            swiper: productThumbs,
        },

       
  });

})

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#product-video');
    const playBtn = document.querySelector('.play-btn');

    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    function togglePlay() {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = `
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                                <rect x="0" y="0" width="5" height="17" fill="white"/>
                                                <rect x="7" y="0" width="5" height="17" fill="white"/>
                                            </svg>`;
        } else {
            video.pause();
            playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                           <path d="M13.1367 7.634C13.8034 8.0189 13.8034 8.98115 13.1367 9.36605L1.84127 15.8875C1.1746 16.2724 0.341265 15.7913 0.341265 15.0215V1.9786C0.341265 1.2088 1.1746 0.72767 1.84126 1.11257L13.1367 7.634Z" fill="white"/>
                                       </svg>`;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все необходимые элементы
    const years = document.querySelectorAll('.year');
    const slides = document.querySelectorAll('.slide');
    const rangeInput = document.querySelector('.slider-range');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Устанавливаем максимальное значение для ползунка
    rangeInput.max = years.length - 1;

    // Функция для обновления внешнего вида ползунка
    function updateSliderAppearance() {
        // Получаем процент заполненности (от 0 до 1)
        const progressPercent = currentIndex / rangeInput.max;
        
        // Цвета для разных состояний
        const activeColor = '#ff0000'; // Красный
        const inactiveColor = '#e0e0e0'; // Серый
        
        // Для браузеров на WebKit (Chrome, Safari)
        rangeInput.style.background = `
            linear-gradient(to right,
                ${activeColor} 0%,
                ${activeColor} ${progressPercent * 100}%,
                ${inactiveColor} ${progressPercent * 100}%,
                ${inactiveColor} 100%)
        `;
        
        // Для Firefox
        rangeInput.style.setProperty('--progress', progressPercent);
    }

    // Основная функция обновления интерфейса
    function updateDisplay() {
        // 1. Обновляем активный год
        years.forEach((year, index) => {
            year.classList.toggle('active', index === currentIndex);
        });

        // 2. Обновляем активный слайд
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        // 3. Устанавливаем значение ползунка
        rangeInput.value = currentIndex;

        // 4. Обновляем внешний вид ползунка
        updateSliderAppearance();
    }

    // Обработчик клика по году
    years.forEach(year => {
        year.addEventListener('click', function() {
            currentIndex = parseInt(this.dataset.index);
            updateDisplay();
        });
    });

    // Обработчик перемещения ползунка
    rangeInput.addEventListener('input', function() {
        currentIndex = parseInt(this.value);
        updateDisplay();
    });

    // Обработчик кнопки "Назад"
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateDisplay();
        }
    });

    // Обработчик кнопки "Вперед"
    nextBtn.addEventListener('click', function() {
        if (currentIndex < years.length - 1) {
            currentIndex++;
            updateDisplay();
        }
    });

    // Инициализация при загрузке
    updateDisplay();

    // Добавляем CSS-переменные для Firefox
    const style = document.createElement('style');
    style.textContent = `
        .slider-range {
            --progress: 0;
            --active-color: #ff0000;
            --inactive-color: #e0e0e0;
        }
        
        @-moz-document url-prefix() {
            .slider-range::-moz-range-progress {
                background: var(--active-color);
                height: 4px;
                border-radius: 4px 0 0 4px;
            }
            
            .slider-range::-moz-range-track {
                background: var(--inactive-color);
                height: 4px;
                border-radius: 0 4px 4px 0;
            }
        }
    `;
    document.head.appendChild(style);
});


const industrySwipers = document.querySelectorAll('.about-industry__slider');

industrySwipers.forEach(swiper => {
    const industrySwiper = swiper.querySelector('.industry__swiper');
    const nextBtn = swiper.querySelector('.swiper-btn-next');
    const prevBtn = swiper.querySelector('.swiper-btn-prev');

    var swiper = new Swiper(industrySwiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        
    })
})



const faqItemTitle = document.querySelectorAll('.faq__item-title');

faqItemTitle.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        item.nextElementSibling.style.maxHeight = item.classList.contains('active') ? item.nextElementSibling.scrollHeight + 'px' : '0';
    })
}) 

const vacancyItemTitle = document.querySelectorAll('.vacancy__title');

vacancyItemTitle.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        item.nextElementSibling.style.maxHeight = item.classList.contains('active') ? item.nextElementSibling.scrollHeight + 'px' : '0';
    })
})





  const popupFeedback = document.querySelector('.popup-feedback');
  const popupFeedbackClose = document.querySelector('.popup-feedback-close');
  const marquees = document.querySelectorAll('.marquee__item, .popup-btn');

  marquees.forEach(marquee => {
    marquee.addEventListener('click', () => {
      popupFeedback.style.display = 'flex';
    });
  });

  popupFeedbackClose.addEventListener('click', () => {
    popupFeedback.style.display = 'none';
  })

const popupFeedbackForm = document.querySelector('.popup-feedback-form');
const vacancyBtns = document.querySelectorAll('.vacancy .btn');

vacancyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popupFeedbackForm.style.display = 'flex';
    })
})

const careerValues = document.querySelector('.career__values');

if(careerValues.offsetHeight > 850) {
    careerValues.style.overflowY = 'scroll';
}


