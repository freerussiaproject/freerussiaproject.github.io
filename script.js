// Set the date we're counting down to
const countDownDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 120); // 4 months in milliseconds

// Update the countdown every second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Calculate the time remaining in months, days, hours, minutes, and seconds
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the timer elements on the page
  document.querySelector('.months').innerText = months.toString().padStart(2, '0');
  document.querySelector('.days').innerText = days.toString().padStart(2, '0');
  document.querySelector('.hours').innerText = hours.toString().padStart(2, '0');
  document.querySelector('.minutes').innerText = minutes.toString().padStart(2, '0');
  document.querySelector('.seconds').innerText = seconds.toString().padStart(2, '0');
  
  // If the countdown is finished, display a message
  if (distance < 0) {
  clearInterval(x);
  document.querySelector('.timer').innerText = 'EXPIRED';
  }
  }, 1000);