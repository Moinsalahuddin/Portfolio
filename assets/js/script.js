// Sticky navbar blur on scroll
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function onScroll() {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Mobile menu toggle
mobileToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
});

// Close mobile menu on nav click
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Tree-like typing effect configuration
const typingConfig = {
  typeSpeed: 80,         // Base typing speed
  deleteSpeed: 30,       // Base deleting speed
  pauseTime: 2000,       // Pause between words
  startDelay: 1000,      // Initial delay
  branchDelay: 200,      // Delay between tree branches
  cursorBlinkSpeed: 600, // Cursor blink speed
  
  // Tree structure for the text
  textTree: [
    {
      main: 'Software Engineer',
      branches: [
        { text: 'Full Stack', className: '' },
        { text: 'Cloud', className: 'cloud-text' },
        { text: 'DevOps', className: '' }
      ]
    },
    {
      main: 'Web Developer',
      branches: [
        { text: 'Frontend', className: '' },
        { text: 'Backend', className: '' },
        { text: 'APIs', className: '' }
      ]
    },
    {
      main: 'Cloud Architect',
      branches: [
        { text: 'AWS', className: 'cloud-text' },
        { text: 'Azure', className: 'cloud-text' },
        { text: 'GCP', className: 'cloud-text' }
      ]
    },
    {
      main: 'Tech Enthusiast',
      branches: [
        { text: 'AI/ML', className: '' },
        { text: 'Cloud Native', className: 'cloud-text' },
        { text: 'IoT', className: '' }
      ]
    }
  ]
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing-text');
  const cursorElement = document.querySelector('.cursor');
  const branchElement = document.querySelector('.branch-text');
  
  if (!typingElement || !cursorElement) return;
  
  let treeIndex = 0;
  let branchIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let isBranching = false;
  let typeTimeout;
  
  // Cursor blink effect
  setInterval(() => {
    cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
  }, typingConfig.cursorBlinkSpeed);
  
  function type() {
    const currentTree = typingConfig.textTree[treeIndex % typingConfig.textTree.length];
    const fullText = isBranching && currentTree.branches[branchIndex] 
      ? currentTree.branches[branchIndex].text 
      : currentTree.main;
    const className = isBranching && currentTree.branches[branchIndex] 
      ? currentTree.branches[branchIndex].className 
      : '';
    
    if (isDeleting) {
      // Deleting text
      currentText = fullText.substring(0, currentText.length - 1);
      typingElement.textContent = currentText;
      typingElement.className = className;
      
      if (currentText === '') {
        isDeleting = false;
        
        if (isBranching) {
          branchIndex++;
          if (branchIndex >= currentTree.branches.length) {
            isBranching = false;
            treeIndex++;
            branchIndex = 0;
          }
        } else if (currentTree.branches && currentTree.branches.length > 0) {
          isBranching = true;
        } else {
          treeIndex++;
        }
        
        typeTimeout = setTimeout(type, typingConfig.branchDelay);
        return;
      }
      
      typeTimeout = setTimeout(type, typingConfig.deleteSpeed);
    } else {
      // Typing text
      currentText = fullText.substring(0, currentText.length + 1);
      typingElement.textContent = currentText;
      typingElement.className = className;
      
      if (currentText === fullText) {
        // Pause at the end of the word
        typeTimeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, typingConfig.pauseTime);
        return;
      }
      
      // Random speed variation for natural feel
      const speed = Math.random() * 20 + typingConfig.typeSpeed;
      typeTimeout = setTimeout(type, speed);
    }
  }
  
  // Start typing effect after initial delay
  setTimeout(type, typingConfig.startDelay);
  
  // Clean up on unmount
  return () => {
    clearTimeout(typeTimeout);
  };
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

// Throttle scroll events
let isScrolling;
window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(revealOnScroll, 66);
}, false);

// Initial check
revealOnScroll();

// Testimonials carousel
const track = document.getElementById('testimonial-track');
const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
let current = 0;

function goTo(index) {
  if (!track || !slides.length) return;
  current = (index + slides.length) % slides.length;
  const offset = -current * 100;
  track.style.transform = `translateX(${offset}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index || '0', 10))));

let timer = null;
function startAuto() {
  stopAuto();
  timer = setInterval(() => goTo(current + 1), 4000);
}
function stopAuto() { if (timer) clearInterval(timer); }

if (track && slides.length) {
  goTo(0);
  startAuto();
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);
}

// Newsletter form (fake submit)
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm?.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(newsletterForm);
  const email = String(formData.get('email') || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }
  newsletterForm.reset();
  alert('Thanks for subscribing!');
});

// Contact form (fake submit)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
contactForm?.addEventListener('submit', async e => {
  e.preventDefault();
  formStatus.textContent = '';
  const fd = new FormData(contactForm);
  const name = String(fd.get('name') || '').trim();
  const email = String(fd.get('email') || '').trim();
  const message = String(fd.get('message') || '').trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill all fields.';
    formStatus.style.color = '#fca5a5';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.style.color = '#fca5a5';
    return;
  }

  // Fake delay to simulate request
  formStatus.textContent = 'Sending...';
  formStatus.style.color = '#cbd5e1';
  await new Promise(r => setTimeout(r, 1000));

  formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
  formStatus.style.color = '#86efac';
  contactForm.reset();
});
