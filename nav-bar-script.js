
  // Make sure DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('link-about').addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.getElementById('about');
      const top = section.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });

    document.getElementById('link-contact').addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.getElementById('contact');
      const top = section.getBoundingClientRect().top + window.pageYOffset - 30;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });

  });