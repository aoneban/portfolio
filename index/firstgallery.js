export default function observerFirstGallery() {
    const gallery = document.querySelector('.first__image-gallery');
    let galleryVisible = false; 
    let startScrollPosition = 0; 
    let lastScrollY = 0; 
    
    const options = {
      root: null, 
      threshold: 0.1 
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          galleryVisible = true;
          startScrollPosition = window.scrollY;
          lastScrollY = window.scrollY;
        } else {
          galleryVisible = false;
        }
      });
    }, options);
    
    observer.observe(gallery);
    
    function moveGalleryOnScroll() {
      if (galleryVisible) {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > lastScrollY) {
          gallery.style.transform = `translateX(-${500}px)`;
        } else {
          gallery.style.transform = `translateX(${500}px)`;
        }
    
        lastScrollY = currentScrollY;
      }
    }
    
    window.addEventListener('scroll', moveGalleryOnScroll);
  }