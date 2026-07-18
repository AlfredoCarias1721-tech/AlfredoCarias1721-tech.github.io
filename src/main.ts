import './style.css';

const timeElement = document.getElementById('time-display');
const dateElement = document.getElementById('date-display');

const modal = document.getElementById('pricing-modal');
const closeBtn = document.getElementById('close-modal-btn');
const basicPlanBtnModal = document.getElementById('basic-plan-btn');
const resumeBasicBtnMain = document.getElementById('resume-basic-btn');

let clockState: 'normal' | 'paused' | 'basic' = 'normal';

function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

function updateClock() {
  if (clockState === 'paused') return;

  const now = new Date();
  
  if (timeElement) {
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (clockState === 'basic') {
      minutes = (minutes - 2 + 60) % 60; 
    }

    timeElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  if (dateElement && clockState === 'normal') {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('es-ES', options).toUpperCase();
  }
}

updateClock();
setInterval(updateClock, 1000);

setTimeout(() => {
  if (modal) modal.classList.remove('hidden');
  clockState = 'paused';
}, 15000);

function activateBasicPlan() {
  if (modal) modal.classList.add('hidden');
  if (resumeBasicBtnMain) resumeBasicBtnMain.classList.add('hidden');
  
  clockState = 'basic'; 

  const buildDisplay = document.getElementById('build-display');
  if (buildDisplay) {
    buildDisplay.textContent = "Build 0.4.2-a (LIMITADA)";
    buildDisplay.style.color = "#ef4444";
  }
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    if (modal) modal.classList.add('hidden');
    if (resumeBasicBtnMain) resumeBasicBtnMain.classList.remove('hidden');
  });
}

if (basicPlanBtnModal) {
  basicPlanBtnModal.addEventListener('click', activateBasicPlan);
}

if (resumeBasicBtnMain) {
  resumeBasicBtnMain.addEventListener('click', activateBasicPlan);
}

const latencyDisplay = document.getElementById('latency-display');
setInterval(() => {
  if (latencyDisplay && clockState !== 'paused') {
    const ping = Math.floor(Math.random() * (28 - 12 + 1)) + 12;
    latencyDisplay.textContent = `Latencia ${ping}ms`;
  }
}, 2500);

const proBtn = document.getElementById('pro-plan-btn');
const paymentModal = document.getElementById('payment-modal');
const closePaymentBtn = document.getElementById('close-payment-btn');
const fakePaymentForm = document.getElementById('fake-payment-form') as HTMLFormElement;

if (proBtn && paymentModal) {
  proBtn.addEventListener('click', () => {
    paymentModal.classList.remove('hidden');
  });
}

if (closePaymentBtn && paymentModal) {
  closePaymentBtn.addEventListener('click', () => {
    paymentModal.classList.add('hidden');
  });
}

if (fakePaymentForm) {
  fakePaymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    alert("❌ ERROR 503: Fallo de Transferencia.\n\nEl servidor del banco temporal rechazó la solicitud. No se pudo procesar la información. Por favor, inténtelo más tarde.");
    
    fakePaymentForm.reset();
  });
}
