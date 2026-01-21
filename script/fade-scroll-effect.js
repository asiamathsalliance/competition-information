document.addEventListener('DOMContentLoaded', () => {
  // Sections left/right → threshold 0.3
  const sideSections = document.querySelectorAll('.competition.left, .competition.right');

  const sideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  
        } 
      });
    },
    { threshold: 0.2 } 
  );

  sideSections.forEach((section) => sideObserver.observe(section));

  const aboutSections = document.querySelectorAll('.competition.about-left');

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const innerWrapper = entry.target.querySelector('.about-wrapper'); 
        if (innerWrapper && entry.isIntersecting) {
          if (entry.isIntersecting) {
            innerWrapper.classList.add('visible');
            observer.unobserve(entry.target);
          } 
        }
      });
    },
    { threshold: 0.2 } 
  );

  aboutSections.forEach((section) => aboutObserver.observe(section));
});
