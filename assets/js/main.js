document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      // Check if mobile nav already exists, if not create it
      let mobileNav = document.querySelector('.mobile-nav');
      
      if (!mobileNav) {
        mobileNav = document.createElement('ul');
        mobileNav.className = 'mobile-nav';
        
        // Clone the nav links to the mobile nav
        const navItems = navLinks.querySelectorAll('li');
        navItems.forEach(function(item) {
          mobileNav.appendChild(item.cloneNode(true));
        });
        
        // Append mobile nav after the header
        const header = document.querySelector('header');
        header.after(mobileNav);
      }
      
      // Toggle active class
      mobileNav.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId.length > 1) {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add active class to nav links based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${sectionId}` || 
              link.getAttribute('href') === `/${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavLink);
  
  // Initialize active nav link on page load
  updateActiveNavLink();
});