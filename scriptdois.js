// Função para obter todos os itens do carrossel
    function getCarouselItems() {
      return document.querySelectorAll('.carousel-item');
    }

    // Função para ajustar o tamanho dos itens do carrossel
    function adjustCarouselItemSize() {
      var carouselItems = getCarouselItems();
      var containerWidth = document.querySelector('.carousel-container').offsetWidth;

      for (var i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.width = containerWidth + 'px';
      }
    }

    // Chamada inicial para ajustar o tamanho dos itens
    adjustCarouselItemSize();

    // Função para iniciar o carrossel
    function startCarousel() {
      var carouselSlide = document.querySelector('.carousel-slide');
      var carouselItems = getCarouselItems();

      var currentIndex = 0;
      var itemWidth = carouselItems[0].offsetWidth;

      setInterval(function() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselSlide.style.transform = 'translateX(' + (-itemWidth * currentIndex) + 'px)';
      }, 5000);
    }

    // Chamar a função para iniciar o carrossel
    startCarousel();