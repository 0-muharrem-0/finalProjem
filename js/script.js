document.addEventListener('DOMContentLoaded', function() {
  // Gece - Gündüz
  const body = document.body;
  const toggleButton = document.getElementById('mode-toggle');
  const icon = toggleButton.querySelector('i');

  toggleButton.addEventListener('click', function() {
      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          toggleButton.textContent = ' Dark Mode';
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          toggleButton.prepend(icon); 
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          toggleButton.textContent = ' Light Mode';
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          toggleButton.prepend(icon); 
      }
  });

  
  body.classList.add('light-mode');

  // Sol Menü
  const sections = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('#colorlib-main-menu ul li a');

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          const sectionID = entry.target.getAttribute('id');
          const menuLink = document.querySelector(`#colorlib-main-menu ul li a[href="#${sectionID}"]`);
          
          if (menuLink !== null) {
              if (entry.isIntersecting) {
                  menuLinks.forEach(link => link.parentElement.classList.remove('active'));
                  menuLink.parentElement.classList.add('active');
              }
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Mobile Menü Toogle Menu
  const aside = document.getElementById('colorlib-aside');
  const toggleButtonMobile = document.getElementById('menu-toggle');

  toggleButtonMobile.addEventListener('click', function() {
      aside.classList.toggle('active');
  });


});
