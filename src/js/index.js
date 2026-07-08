const body = document.getElementById('body');
const moon = document.querySelectorAll('.moon');
const sidebar = document.getElementById('sidebar');
const bars = document.getElementById('bars');
const SlideUp = document.getElementById('slideUp');
const Arrow = document.getElementById('Arrow');
const Chevron = document.getElementById('chevron');
const line = document.querySelectorAll('.line');
const footer = document.getElementById('footer');


const SlideUp2 = document.getElementById('slideUp2');
const Arrow2 = document.getElementById('Arrow2');
const Chevron2 = document.getElementById('chevron2');

const SlideUp3 = document.getElementById('slideUp3');
const Arrow3 = document.getElementById('Arrow3');
const Chevron3 = document.getElementById('chevron3');


moon.forEach((moon) => {
  moon.addEventListener('click', () => {
    body.classList.toggle('bg-[#ffffff]');
    moon.classList.toggle('fa-sun');
    moon.classList.toggle('fa-moon');
    footer.classList.toggle('bg-[#e1e1e1]');
    line.forEach((line) => {
    line.classList.toggle('bg-[#dcdcdc]');
    line.classList.toggle('bg-[#ffffff]');
    });
  });
});

bars.addEventListener('click', () => {
    sidebar.classList.toggle('w-0');
    sidebar.classList.toggle('w-42');
    bars.classList.toggle('fa-xmark');
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('text-[#dcbc0c]');
    sidebar.classList.toggle('opacity-100');
    sidebar.classList.toggle('opacity-0');
});

  Arrow.addEventListener('click', () => {
      SlideUp.classList.toggle('p-5');
      SlideUp.classList.toggle('overflow-visible');
      SlideUp.classList.toggle('h-auto');
      SlideUp.classList.toggle('opacity-100');
      Chevron.classList.toggle('fa-chevron-up');
      Chevron.classList.toggle('fa-chevron-down');
      });

  Arrow2.addEventListener('click', () => {
      SlideUp2.classList.toggle('p-5');
      SlideUp2.classList.toggle('overflow-visible');
      SlideUp2.classList.toggle('h-auto');
      SlideUp2.classList.toggle('opacity-100');
      Chevron2.classList.toggle('fa-chevron-up');
      Chevron2.classList.toggle('fa-chevron-down');
      });
  Arrow3.addEventListener('click', () => {
      SlideUp3.classList.toggle('p-5');
      SlideUp3.classList.toggle('overflow-visible');
      SlideUp3.classList.toggle('h-auto');
      SlideUp3.classList.toggle('opacity-100');
      Chevron3.classList.toggle('fa-chevron-up');
      Chevron3.classList.toggle('fa-chevron-down');
      });

      // 1. Find the HTML elements first (DO THIS OUTSIDE THE CLICK EVENT)
const fullNameInput = document.getElementById('FullName');
const dateInput = document.getElementById('Date');
const submitBtn = document.getElementById('Submit'); 

// 2. Listen for the click
submitBtn.addEventListener('click', () => {
    
    // 3. Extract the text values inside the click event using unique variable names
    const customerName = fullNameInput.value;
    const bookingDate = dateInput.value;

    // 4. Construct and send your message safely
    const message = `Name: ${customerName}\nDate: ${bookingDate}`;
    const url = `https://wa.me/2349134729702?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); 
});