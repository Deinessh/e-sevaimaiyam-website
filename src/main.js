// Import styles
import './style.css';

// --------------------------------------------------
// 1. Services Data Directory
// --------------------------------------------------
const SERVICES = [
  {
    id: 1,
    title: 'TNEGA Certificates',
    category: 'tnega',
    icon: 'fa-certificate',
    description: 'Apply for Income, Community, Nativity, First Graduate, and Legal Heir certificates directly through the official Tamil Nadu portal.'
  },
  {
    id: 2,
    title: 'New Ration Card | TNPDS',
    category: 'tnega',
    icon: 'fa-address-card',
    description: 'Scaffold new Smart Card applications, add/remove family members, change address, or update mobile link on the TNPDS portal.'
  },
  {
    id: 3,
    title: 'Land Record Services',
    category: 'tnega',
    icon: 'fa-map-marked-alt',
    description: 'Retrieve official Patta, Chitta extracts, A-Register summaries, and request FMB map layouts for lands in Tamil Nadu.'
  },
  {
    id: 4,
    title: 'Marriage Registration',
    category: 'tnega',
    icon: 'fa-ring',
    description: 'Get support in documenting, booking slots, and submitting files for official marriage certificates under the Hindu or Special Marriage Acts.'
  },
  {
    id: 5,
    title: 'Aadhaar Update',
    category: 'identity',
    icon: 'fa-fingerprint',
    description: 'Assistance with Aadhaar registration requests, name corrections, birthdate updates, address changes, and mobile number linking.'
  },
  {
    id: 6,
    title: 'New PAN Card | Correction',
    category: 'identity',
    icon: 'fa-id-card',
    description: 'Apply for a fresh Permanent Account Number (PAN) card, correct spelling/signature errors, or request a duplicate card.'
  },
  {
    id: 7,
    title: 'Passport Application',
    category: 'identity',
    icon: 'fa-passport',
    description: 'Complete registration for fresh/reissue passports, schedule appointments at PSK, and manage police verification paperwork.'
  },
  {
    id: 8,
    title: 'Voter ID Card',
    category: 'identity',
    icon: 'fa-check-to-slot',
    description: 'Register as a new voter (Form 6), apply for correction of details, or download digital e-EPIC cards securely.'
  },
  {
    id: 9,
    title: 'RTO Services',
    category: 'identity',
    icon: 'fa-id-badge',
    description: 'Apply for a Learner License (LLR), Driving License (DL) renewal, vehicle fitness certificate, or transfer of ownership.'
  },
  {
    id: 10,
    title: 'Food License (FSSAI)',
    category: 'business',
    icon: 'fa-utensils',
    description: 'Obtain state or central FSSAI registration/license for restaurants, food manufacturing units, packaging, and retail businesses.'
  },
  {
    id: 11,
    title: 'Firm Registration',
    category: 'business',
    icon: 'fa-building',
    description: 'Register sole proprietorships, partnership deeds, MSME/Udyam certificates, and GST filings for compliance operations.'
  },
  {
    id: 12,
    title: 'Digital Signature (DSC)',
    category: 'business',
    icon: 'fa-signature',
    description: 'Issue Class 3 secure Digital Signature Certificates (DSC) for e-tendering, company registration, and income tax filing.'
  },
  {
    id: 13,
    title: 'TN Electricity Board (TN EB)',
    category: 'utility',
    icon: 'fa-bolt',
    description: 'Register for new domestic/commercial EB connections, apply for load change, name transfer, or clear outstanding bill payments.'
  },
  {
    id: 14,
    title: 'Ticket Booking',
    category: 'utility',
    icon: 'fa-ticket',
    description: 'Confirm instant ticket bookings for trains (IRCTC), local/interstate government buses, and flight bookings at lowest prices.'
  },
  {
    id: 15,
    title: 'Website Development',
    category: 'business',
    icon: 'fa-laptop-code',
    description: 'Custom corporate/e-commerce website development, Google Business profile setup, and local SEO services to grow your business.'
  },
  {
    id: 16,
    title: 'Vehicle Insurance',
    category: 'financial',
    icon: 'fa-car-burst',
    description: 'Renew third-party or comprehensive motor insurance policy for bikes, cars, and commercial vehicles with instant updates.'
  },
  {
    id: 17,
    title: 'Loan Assistance',
    category: 'financial',
    icon: 'fa-hand-holding-dollar',
    description: 'Facilitate submissions and documents check for Mudra business loans, personal credit lines, and gold loans with banks.'
  },
  {
    id: 18,
    title: 'Tamilnadu Nalavaiyam',
    category: 'tnega',
    icon: 'fa-people-group',
    description: 'Register for unorganised workers welfare board membership, helping you secure social welfare pensions and safety benefits.'
  }
];

// Document database lookup map
const SERVICE_DOCS_DB = {
  'TNEGA Certificates': {
    docs: ['Aadhaar Card copy of Applicant', 'Ration Card or Address proof copy', 'Self-Declaration Form (Generated at Center)', 'Salary Certificate or Payslip (for Income Cert)', 'School Transfer Certificate / Community Cert of Parents (for Community Cert)', 'Death Certificate & Family card copy (for Legal Heir Certificate)'],
    timeline: '10 - 15 Working Days',
    fees: '₹60 (Government Portal Fee) + Minimum Processing Charge',
    url: 'https://www.tnesevai.tn.gov.in/'
  },
  'New Ration Card | TNPDS': {
    docs: ['Aadhaar Cards of all family members', 'Active mobile number (Mandatory)', 'De-deletion certificate copy (if previously in another card)', 'Gas Connection Bill copy', 'House tenancy agreement or Land tax receipt copy'],
    timeline: '15 - 30 Working Days',
    fees: '₹50 + Processing Charge',
    url: 'https://www.tnpds.gov.in/'
  },
  'Land Record Services': {
    docs: ['Land Survey Number or Subdivision Survey details', 'District, Taluk, and Village details', 'Previous Sale Deed copy (Optional)', 'Owner Identity Proof copy'],
    timeline: '1 - 3 Working Days',
    fees: '₹60 + Minimal Processing Charge',
    url: 'https://eservices.tn.gov.in/'
  },
  'Marriage Registration': {
    docs: ['Husband & Wife Identity & Address proof copies', 'Proof of Age (Birth Certificate or SSLC Marksheet)', 'Wedding Invitation Card copy', 'Wedding Hall Receipt / Temple receipt', '3 Witnesses with Identity cards'],
    timeline: '7 - 10 Working Days',
    fees: '₹150 Registration Fee + Preparation charges',
    url: 'https://tnreginet.gov.in/'
  },
  'Aadhaar Update': {
    docs: ['Valid Proof of Identity copy (Passport, PAN Card, DL)', 'Valid Proof of Address copy (EB Bill, Bank statement, Voter ID)', 'Active linked mobile number', 'Birth certificate copy (for Name/DoB updates)'],
    timeline: '5 - 7 Working Days',
    fees: '₹50 (Demographic) / ₹100 (Biometric Scan updates)',
    url: 'https://myaadhaar.uidai.gov.in/'
  },
  'New PAN Card | Correction': {
    docs: ['Aadhaar Card (Mandatory copy)', 'Proof of Date of Birth (Birth Certificate/Marksheet)', 'Two recent passport size color photographs', 'Signature verification copy'],
    timeline: '8 - 12 Working Days',
    fees: '₹107 (Physical PAN card dispatch) / ₹72 (e-PAN card)',
    url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html'
  },
  'Passport Application': {
    docs: ['Aadhaar Card / Voter ID copy', 'Proof of Date of Birth (SSLC Marksheet or Transfer Certificate)', 'Educational qualifications certificate (for Non-ECR status)', 'Active bank passbook statement with photo (Proof of residence)'],
    timeline: '15 - 25 Days (Subject to police verification)',
    fees: '₹1,500 (Normal 36 pages) / ₹2,000 (60 pages)',
    url: 'https://www.passportindia.gov.in/'
  },
  'Voter ID Card': {
    docs: ['Aadhaar Card copy', 'Address proof copy (Ration card / Rental agreement)', 'Age proof copy (if age is 18-21 years)', 'One passport size color photograph'],
    timeline: '15 - 40 Working Days',
    fees: 'Free of Cost (Government) + Submission support fee',
    url: 'https://voters.eci.gov.in/'
  },
  'Food License (FSSAI)': {
    docs: ['Passport photo of Applicant / Proprietor', 'Identity proof copy (PAN Card / Aadhaar Card)', 'Proof of premises (Rental agreement / EB Bill copy)', 'NOC from property owner', 'Water analysis report (for manufacturing units)'],
    timeline: '7 - 30 Working Days',
    fees: '₹100/yr (Basic registration) / ₹2000+/yr (State License)',
    url: 'https://foscos.fssai.gov.in/'
  },
  'Firm Registration': {
    docs: ['Draft Partnership Deed on stamp paper', 'PAN Card of partnership firm and all partners', 'Address proof of firm premises', 'NOC from premises owner with EB bill copy'],
    timeline: '10 - 15 Working Days',
    fees: 'State fees vary based on capital + Legal drafting cost',
    url: 'https://tnreginet.gov.in/'
  },
  'Digital Signature (DSC)': {
    docs: ['PAN Card copy of Applicant', 'Aadhaar Card copy', 'Video & Mobile verification confirmation', 'GST registration copy (for Organization DSC)'],
    timeline: '1 - 2 Working Days',
    fees: '₹800 (Class 3 - 2 Yrs Validity) / ₹1,200 (3 Yrs Validity)',
    url: 'https://www.cca.gov.in/'
  },
  'TN Electricity Board (TN EB)': {
    docs: ['Ownership Sale Deed copy / Property Tax Receipt', 'NOC from landlord (if tenant)', 'EB connection application form signed', 'Identity & Address proof copy'],
    timeline: '10 - 20 Working Days',
    fees: 'Service charge varies based on phase load requests',
    url: 'https://www.tangedco.gov.in/'
  }
};

// --------------------------------------------------
// 2. DOM Rendering - Services Catalog
// --------------------------------------------------
const servicesContainer = document.getElementById('services-container');
const noServicesState = document.getElementById('no-services-state');
const serviceSearch = document.getElementById('service-search');
const searchClearBtn = document.getElementById('search-clear-btn');
const categoryTabs = document.querySelectorAll('.filter-tab');
const resetSearchBtn = document.getElementById('reset-search-btn');

let activeCategory = 'all';
let searchQuery = '';

function renderServices() {
  // Filter list
  const filtered = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle empty state
  if (servicesContainer && noServicesState) {
    if (filtered.length === 0) {
      servicesContainer.innerHTML = '';
      noServicesState.classList.remove('hidden');
    } else {
      noServicesState.classList.add('hidden');
      
      // Render cards
      servicesContainer.innerHTML = filtered.map(service => `
      <article class="service-card" data-category="${service.category}" id="service-card-${service.id}">
        <div class="sc-header">
          <div class="sc-icon"><i class="fa-solid ${service.icon}"></i></div>
          <span class="sc-tag">${service.category}</span>
        </div>
        <h3 class="sc-title">${service.title}</h3>
        <p class="sc-desc">${service.description}</p>
        <a href="#booking" class="sc-action" data-service-name="${service.title}">
          <span>Book Assistance</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </article>
    `).join('');

      // Attach click listeners to cards to populate select box
      const cardActions = servicesContainer.querySelectorAll('.sc-action');
      cardActions.forEach(action => {
        action.addEventListener('click', (e) => {
          const sName = action.getAttribute('data-service-name');
          if (typeof selectServiceInForm === 'function') {
            selectServiceInForm(sName);
          }
        });
      });
    }
  }
}

// Interactive Document Checker Logic
const dcSelect = document.getElementById('dc-service-select');
const dcDetailsPanel = document.getElementById('dc-details-panel');
const dcPlaceholder = document.getElementById('dc-placeholder');
const dcDocList = document.getElementById('dc-doc-list');
const dcTimeline = document.getElementById('dc-timeline');
const dcFees = document.getElementById('dc-fees');
const dcPortalLink = document.getElementById('dc-portal-link');
const dcApplyBtn = document.getElementById('dc-apply-btn');

// Populate checker dropdown options
if (dcSelect) {
  dcSelect.innerHTML = '<option value="" disabled selected>Select a service to audit...</option>' + 
    Object.keys(SERVICE_DOCS_DB).map(sName => `<option value="${sName}">${sName}</option>`).join('');

  dcSelect.addEventListener('change', (e) => {
  const selectedService = e.target.value;
  const serviceData = SERVICE_DOCS_DB[selectedService];
  
  if (serviceData) {
    // Populate details
    dcDocList.innerHTML = serviceData.docs.map(doc => `<li>${doc}</li>`).join('');
    dcTimeline.textContent = serviceData.timeline;
    dcFees.textContent = serviceData.fees;
    dcPortalLink.href = serviceData.url;
    
    // Toggle panels
    dcPlaceholder.classList.add('hidden');
    dcDetailsPanel.classList.remove('hidden');
    }
  });

  // Link apply button inside Checker to slot booking
  if (dcApplyBtn) {
    dcApplyBtn.addEventListener('click', () => {
      selectServiceInForm(dcSelect.value);
    });
  }
}

function selectServiceInForm(serviceName) {
  const serviceSelect = document.getElementById('service-select');
  if (!serviceSelect) return;

  // Search option and select it
  let found = false;
  for (let i = 0; i < serviceSelect.options.length; i++) {
    if (serviceSelect.options[i].text.includes(serviceName) || serviceSelect.options[i].value === serviceName) {
      serviceSelect.selectedIndex = i;
      found = true;
      break;
    }
  }

  // If not found in standard values, add custom temporary option
  if (!found) {
    const newOpt = document.createElement('option');
    newOpt.value = serviceName;
    newOpt.text = serviceName;
    newOpt.selected = true;
    serviceSelect.appendChild(newOpt);
  }

  // Set Step 1 active in wizard
  goToSendStep(1);

  // Smooth scroll to booking form
  const bookingSec = document.getElementById('booking');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// Search Event Listeners
if (serviceSearch) {
  serviceSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      searchClearBtn.style.display = 'block';
    } else {
      searchClearBtn.style.display = 'none';
    }
    renderServices();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    serviceSearch.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    renderServices();
    serviceSearch.focus();
  });
}

if (resetSearchBtn) {
  resetSearchBtn.addEventListener('click', () => {
    serviceSearch.value = '';
    searchQuery = '';
    activeCategory = 'all';
    searchClearBtn.style.display = 'none';
    categoryTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('.filter-tab[data-category="all"]').classList.add('active');
    renderServices();
  });
}

// Category Filter Tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.getAttribute('data-category');
    renderServices();
  });
});

// Initialize directory rendering
renderServices();


// --------------------------------------------------
// 3. Theme Toggle (Light / Dark Mode)
// --------------------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector('i');

  // Check Local Storage or preferences
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme + '-mode';
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.className = newTheme + '-mode';
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  }
}


// --------------------------------------------------
// 4. Header Scroll styling and Active Menu Highlighting
// --------------------------------------------------
const header = document.getElementById('main-header');
const sections = document.querySelectorAll('main > section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  // Sticky Navbar shadow
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Active section highlights in Navbar
  let currentSecId = 'home';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSecId = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSecId}`) {
      item.classList.add('active');
    }
  });
});


// --------------------------------------------------
// 5. Mobile Toggle Menu Drawer
// --------------------------------------------------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileDrawer = document.getElementById('mobile-menu-drawer');
const drawerItems = document.querySelectorAll('.drawer-item, .drawer-cta');

if (mobileMenuBtn && mobileDrawer) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
  });
}

if (closeMenuBtn && mobileDrawer) {
  closeMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
  });
}

drawerItems.forEach(item => {
  item.addEventListener('click', () => {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  });
});


// --------------------------------------------------
// 6. Testimonial Slider / Carousel Logic
// --------------------------------------------------
const testimonialSlider = document.getElementById('testimonial-slider');
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('slider-prev-btn');
const nextBtn = document.getElementById('slider-next-btn');
const dotsContainer = document.getElementById('slider-dots-container');

let currentSlideIdx = 0;
const totalSlides = slides.length;

if (dotsContainer) {
  dotsContainer.innerHTML = Array.from({ length: totalSlides }).map((_, idx) => `
    <span class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
  `).join('');
}

const dots = document.querySelectorAll('.slider-dot');

function updateSlider(targetIdx) {
  let newIdx = targetIdx;
  if (targetIdx < 0) newIdx = totalSlides - 1;
  if (targetIdx >= totalSlides) newIdx = 0;

  slides.forEach((slide, idx) => {
    if (idx === newIdx) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === newIdx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  currentSlideIdx = newIdx;
}

if (prevBtn) prevBtn.addEventListener('click', () => updateSlider(currentSlideIdx - 1));
if (nextBtn) nextBtn.addEventListener('click', () => updateSlider(currentSlideIdx + 1));

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index'), 10);
    updateSlider(idx);
  });
});

// Auto slide
let autoSlideInterval;
if (testimonialSlider) {
  autoSlideInterval = setInterval(() => {
    updateSlider(currentSlideIdx + 1);
  }, 6000);

  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });

  testimonialSlider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      updateSlider(currentSlideIdx + 1);
    }, 6000);
  });
}


// --------------------------------------------------
// 7. Interactive Portal status console simulator
// --------------------------------------------------
const logFeedContainer = document.getElementById('console-feed-container');
const processedCountEl = document.getElementById('processed-count');
const lastUpdateEl = document.getElementById('console-last-update');
const serverGridPills = document.querySelectorAll('.server-status-pill');

// Log database
const LOG_MESSAGES = [
  'Aadhaar Demographic Update API ping: 38ms (Stable).',
  'Income Certificate - Minjur Center: Upload Success.',
  'NSDL PAN Correction: Receipt Dispatch Success.',
  'TNPDS Smart Card verification query complete.',
  'Patta Chitta database retrieval: 0.12s response.',
  'Passport PSK slot checker: API handshakes active.',
  'FSSAI State license application: File verified.',
  'RTO LLR slot availability sync: database online.',
  'Marriage registration slot block complete.',
  'Voter ID Form 6 upload verification success.'
];

let counterVal = 1429;
if (processedCountEl) {
  processedCountEl.textContent = counterVal;
}

// Append simulated log function
function appendConsoleLog() {
  if (!logFeedContainer) return;
  
  const timestamp = new Date().toLocaleTimeString('en-IN', { hour12: false });
  const randomMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
  
  const newLogLine = document.createElement('div');
  newLogLine.className = 'feed-line';
  newLogLine.innerHTML = `<span>[${timestamp}]</span> ${randomMsg}`;
  
  logFeedContainer.appendChild(newLogLine);
  
  // Auto-scroll console container
  logFeedContainer.scrollTop = logFeedContainer.scrollHeight;
  
  // Fluctuate count and update stats
  counterVal += Math.floor(Math.random() * 2) + 1;
  processedCountEl.textContent = counterVal;
  lastUpdateEl.textContent = 'Just Now';
}

// Periodically update servers status classes
function updateServerStatuses() {
  serverGridPills.forEach(pill => {
    const statuses = ['status-fast', 'status-normal', 'status-slow'];
    const names = ['Fast', 'Normal', 'Slow'];
    
    // Choose index
    const roll = Math.random();
    let choiceIdx = 1; // Default Normal
    if (roll > 0.65) choiceIdx = 0; // Fast
    if (roll > 0.95) choiceIdx = 2; // Slow
    
    // Clear classes
    pill.className = `server-status-pill ${statuses[choiceIdx]}`;
    pill.innerHTML = `<span class="dot"></span> ${names[choiceIdx]}`;
  });
}

// Start simulation intervals
if (logFeedContainer) {
  setInterval(appendConsoleLog, 5000);
  setInterval(updateServerStatuses, 8000);
  
  // Update last active ticker
  let lastActiveMins = 0;
  setInterval(() => {
    lastActiveMins++;
    lastUpdateEl.textContent = lastActiveMins === 1 ? '1m ago' : `${lastActiveMins}m ago`;
  }, 60000);
}


// --------------------------------------------------
// 8. Step Wizard Form Navigation & Submission
// --------------------------------------------------
const appForm = document.getElementById('appointment-form');
const successCard = document.getElementById('form-success-card');
const formSubmitBtn = document.getElementById('form-submit-btn');

const sUserName = document.getElementById('success-user-name');
const sServiceName = document.getElementById('success-service-name');
const sUserPhone = document.getElementById('success-user-phone');
const ticketId = document.getElementById('ticket-id');
const ticketDatetime = document.getElementById('ticket-datetime');
const newBookingBtn = document.getElementById('new-booking-btn');

// Wizard controls
const wizardSteps = document.querySelectorAll('.wizard-step');
const stepPanels = document.querySelectorAll('.wizard-step-panel');
const wizardLines = document.querySelectorAll('.wizard-line');

let activeStepIdx = 1;

// Step Validation check
function validateStep(stepIdx) {
  if (stepIdx === 1) {
    const serviceVal = document.getElementById('service-select').value;
    if (!serviceVal) {
      alert('Please choose a government service category before continuing.');
      return false;
    }
  }
  if (stepIdx === 2) {
    // Date & Time have defaults or are optional, but check formatting if set
    const dateVal = document.getElementById('appointment-date').value;
    if (dateVal) {
      const selectedDate = new Date(dateVal);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        alert('Preferred appointment date cannot be in the past.');
        return false;
      }
    }
  }
  return true;
}

function goToSendStep(targetStep) {
  if (targetStep < 1 || targetStep > 3) return;

  // Render panels visibility
  stepPanels.forEach(panel => panel.classList.remove('active'));
  document.getElementById(`step-panel-${targetStep}`).classList.add('active');

  // Render steps indicator circles
  wizardSteps.forEach((step, idx) => {
    const stepNum = idx + 1;
    step.className = 'wizard-step';
    
    if (stepNum === targetStep) {
      step.classList.add('active');
    } else if (stepNum < targetStep) {
      step.classList.add('completed');
    }
  });

  // Render progress lines
  wizardLines.forEach((line, idx) => {
    const lineNum = idx + 1;
    line.className = 'wizard-line';
    if (lineNum < targetStep) {
      line.classList.add('active');
    }
  });

  activeStepIdx = targetStep;
}

// Next Step triggers
const nextStepBtns = document.querySelectorAll('.next-step-btn');
if (nextStepBtns.length > 0) {
  nextStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-target'), 10);
      // Validate current step before advancing
      if (validateStep(activeStepIdx)) {
        goToSendStep(target);
      }
    });
  });
}

// Previous Step triggers
const prevStepBtns = document.querySelectorAll('.prev-step-btn');
if (prevStepBtns.length > 0) {
  prevStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-target'), 10);
      goToSendStep(target);
    });
  });
}

// Final Submit
if (appForm) {
  appForm.addEventListener('submit', (e) => {
    e.preventDefault();

  // Validate contact info fields in Step 3
  const nameVal = document.getElementById('user-name').value.trim();
  const phoneVal = document.getElementById('user-phone').value.trim();
  const serviceVal = document.getElementById('service-select').value;
  const dateVal = document.getElementById('appointment-date').value;
  const timeVal = document.getElementById('appointment-time').options[document.getElementById('appointment-time').selectedIndex].text;

  if (!nameVal || !phoneVal) {
    alert('Please enter your full name and a valid 10-digit mobile number.');
    return;
  }

  // Load button spinner simulation
  formSubmitBtn.disabled = true;
  const originalText = formSubmitBtn.innerHTML;
  formSubmitBtn.innerHTML = `<span>Processing Ticket...</span> <i class="fa-solid fa-spinner fa-spin btn-icon"></i>`;

  setTimeout(() => {
    // Generate simulated ticket data
    const randomRef = 'ESM-' + Math.floor(1000 + Math.random() * 9000) + '-' + String.fromCharCode(65 + Math.floor(Math.random() * 26));
    
    let appointmentString = 'Online inquiry (No appointment selected)';
    if (dateVal) {
      const dateFormatted = new Date(dateVal).toLocaleDateString('en-IN', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
      });
      appointmentString = `${dateFormatted} at ${timeVal}`;
    }

    // Set success fields
    sUserName.textContent = nameVal;
    sServiceName.textContent = serviceVal;
    sUserPhone.textContent = '+91-' + phoneVal;
    ticketId.textContent = randomRef;
    ticketDatetime.textContent = appointmentString;

    // Show card and hide wizard container with animations
    document.querySelector('.wizard-progress').classList.add('hidden');
    appForm.classList.add('hidden');
    successCard.classList.remove('hidden');
    formSubmitBtn.disabled = false;
    formSubmitBtn.innerHTML = originalText;
  }, 1200);
});
} // Close if(appForm)

// Allow booking another slot
if (newBookingBtn) {
  newBookingBtn.addEventListener('click', () => {
    appForm.reset();
    successCard.classList.add('hidden');
    document.querySelector('.wizard-progress').classList.remove('hidden');
    appForm.classList.remove('hidden');
    goToSendStep(1);
  });
}

// --------------------------------------------------
// Blog Fetch Logic
// --------------------------------------------------
const blogPostsContainer = document.getElementById('blog-posts-container');

if (blogPostsContainer) {
  fetchBlogPosts();
}

async function fetchBlogPosts() {
  blogPostsContainer.innerHTML = '<div class="blog-loading"><i class="fa-solid fa-circle-notch fa-spin"></i> Loading posts...</div>';
  
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://e-sevaimaiyam-admin-production.up.railway.app/api/posts';
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const posts = await response.json();
    
    if (posts.length === 0) {
      blogPostsContainer.innerHTML = '<div class="blog-error">No posts found.</div>';
      return;
    }
    
    blogPostsContainer.innerHTML = posts.map(post => {
      // Format date from "2026-06-29T14:00:00.000000Z" to readable string or just use as is
      const dateStr = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently';
      const imageHtml = post.image ? `<div class="blog-card-image" style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid #f1f5f9;"><img src="${post.image}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" alt="${post.title}"></div>` : '';
      
      return `
        <div class="blog-card" style="overflow: hidden; display: flex; flex-direction: column;">
          ${imageHtml}
          <div class="blog-card-content" style="padding: 1.5rem; flex: 1;">
            <span class="blog-date">${dateStr}</span>
            <h3 class="blog-title" style="margin-top: 0.5rem; margin-bottom: 0.75rem;">${post.title}</h3>
            <div class="blog-excerpt" style="line-height: 1.6; color: var(--text-muted); font-size: 0.95rem;">${post.content}</div>
          </div>
        </div>
      `;
    }).join('');
    
  } catch(err) {
    console.error('Error fetching posts:', err);
    blogPostsContainer.innerHTML = '<div class="blog-error">Failed to load posts. Please try again later.</div>';
  }
}
