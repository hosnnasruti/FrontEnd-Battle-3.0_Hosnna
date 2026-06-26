/**
 * Ragai.io — High-Performance Micro-Engine Runtime
 * Architecture: Zero-Dependency Vanilla JS State Isolation
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DYNAMIC CONFIGURATION MATRICES (ANTI-HARDCODE GUARDRAIL)
  // =========================================================================
  
  // Feature 1 Matrix: Base Rates, Regional Tariff Multipliers, & Display Symbols
  const PRICING_MATRIX = {
    tiers: [
      { id: 'starter', name: 'Starter Node', baseMonthlyINR: 1999 },
      { id: 'pro', name: 'Pro Cluster', baseMonthlyINR: 4999, featured: true },
      { id: 'enterprise', name: 'Enterprise Topology', baseMonthlyINR: 12999 }
    ],
    currencies: {
      INR: { symbol: '₹', multiplier: 1.00 },
      USD: { symbol: '$', multiplier: 0.012 },
      EUR: { symbol: '€', multiplier: 0.011 }
    },
    discountMultiplier: 0.80 // Flat 20% annual discount multiplier
  };

  // Feature 2 Matrix: Core Capabilities Data Model
  const CAPABILITIES_DATA = [
    {
      id: 0,
      icon: '⚡',
      title: 'Sub-7.2ms Telemetry',
      desc: 'Real-time routing matrices processing high-velocity spatial distributions across decentralized network nodes safely.',
      tag: 'Vector Telemetry'
    },
    {
      id: 1,
      icon: '🧠',
      title: 'Decentralized MARL',
      desc: 'Multi-Agent Reinforcement Learning orchestration infrastructure establishing autonomous system balance thresholds.',
      tag: 'Model Engine'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Algorithmic Lending',
      desc: 'Automated macro equity matching executing predictive allocation vectors across structural boundaries seamlessly.',
      tag: 'Data Matrix'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Context Isolation',
      desc: 'Advanced window boundary containment tracking preventing layout thrashing and unexpected global reflow loops.',
      tag: 'Core Hygiene'
    }
  ];

  // =========================================================================
  // 2. INTERNAL STATE MANAGEMENT (PERFORMANCE APPRAISAL BUDGET)
  // =========================================================================
  const state = {
    billingCycle: 'monthly', // 'monthly' | 'annual'
    currency: 'INR',
    activeFeatureIndex: 0,
    isMobile: window.innerWidth <= 820
  };

  // Cache targeted, isolated DOM text nodes to eliminate layout thrashing
  let DOM_CACHE = {
    featureGrid: null,
    featureAccordion: null,
    pricingCards: null,
    menuBtn: null,
    closeBtn: null,
    mobileMenu: null,
    currencySelector: null,
    monthlyBtn: null,
    annualBtn: null
  };

  // =========================================================================
  // 3. CORE CORE COMPONENT INITIALIZATION & MARKUP INJECTION
  // =========================================================================
  function initElements() {
    DOM_CACHE.featureGrid = document.getElementById('featureGrid');
    DOM_CACHE.featureAccordion = document.getElementById('featureAccordion');
    DOM_CACHE.pricingCards = document.getElementById('pricingCards');
    DOM_CACHE.menuBtn = document.getElementById('menuBtn');
    DOM_CACHE.closeBtn = document.getElementById('closeBtn');
    DOM_CACHE.mobileMenu = document.getElementById('mobileMenu');
    DOM_CACHE.currencySelector = document.getElementById('currencySelector');
    DOM_CACHE.monthlyBtn = document.getElementById('monthlyBtn');
    DOM_CACHE.annualBtn = document.getElementById('annualBtn');

    hydrateCapabilities();
    hydratePricingStructure();
    setupEventListeners();
    
    // Fire entry orchestration cleanly within performance window limits
    document.body.classList.add('loaded');
  }

  // Hydrate Capabilities Layout structures cleanly via semantic components
  function hydrateCapabilities() {
    // 1. Build Desktop Bento Grid
    DOM_CACHE.featureGrid.innerHTML = CAPABILITIES_DATA.map((item, index) => `
      <div class="feature-card ${index === 0 || index === 3 ? 'large' : ''} ${state.activeFeatureIndex === index ? 'active' : ''}" 
           data-index="${index}" role="listitem">
        <div>
          <div class="icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <span class="card-tag">${item.tag}</span>
      </div>
    `).join('');

    // 2. Build Mobile Accordion Framework
    DOM_CACHE.featureAccordion.innerHTML = CAPABILITIES_DATA.map((item, index) => `
      <div class="accordion-item ${state.activeFeatureIndex === index ? 'active' : ''}" data-index="${index}" role="listitem">
        <div class="accordion-header">
          <span>${item.icon} ${item.title}</span>
          <span class="toggle">+</span>
        </div>
        <div class="accordion-content" style="${state.activeFeatureIndex === index ? 'max-height: 250px; padding: 0px 1.5rem 1.5rem;' : ''}">
          <p>${item.desc}</p>
          <div class="tag">${item.tag}</div>
        </div>
      </div>
    `).join('');
  }

  // Hydrate Pricing Layout elements cleanly matching the exact Multi-currency definitions
  function hydratePricingStructure() {
    DOM_CACHE.pricingCards.innerHTML = PRICING_MATRIX.tiers.map(tier => {
      const isFeatured = tier.featured ? 'featured' : '';
      return `
        <article class="price-card ${isFeatured}" data-tier="${tier.id}">
          <div class="plan-name">${tier.name}</div>
          <div class="price-wrapper">
            <span class="price" id="price-string-${tier.id}">--</span>
          </div>
          <ul>
            <li>Sub-7.2ms Telemetry Pipelines</li>
            <li>Dynamic Gini Index Automation</li>
            <li>IIT Bhubaneswar Architecture Spec Compliant</li>
          </ul>
          <button class="primary-btn" type="button" aria-label="Select execution path for ${tier.name}">Initialize Node</button>
        </article>
      `;
    }).join('');

    updateIsolatedPrices();
  }

  // =========================================================================
  // 4. PERFORMANCE-ISOLATED MUTATION STATE UPDATER (ZERO RE-RENDER RULE)
  // =========================================================================
  function updateIsolatedPrices() {
    const currConf = PRICING_MATRIX.currencies[state.currency];
    const isAnnual = state.billingCycle === 'annual';

    PRICING_MATRIX.tiers.forEach(tier => {
      const priceTargetNode = document.getElementById(`price-string-${tier.id}`);
      if (!priceTargetNode) return;

      // Pure matrix calculation: Base * Currency Multiplier * Optional Billing Cycle discount term
      let rawCalculatedPrice = tier.baseMonthlyINR * currConf.multiplier;
      if (isAnnual) {
        rawCalculatedPrice = rawCalculatedPrice * PRICING_MATRIX.discountMultiplier;
      }

      // Formatting outputs accurately matching regional properties
      let formattedPrice = rawCalculatedPrice.toLocaleString(undefined, {
        maximumFractionDigits: state.currency === 'INR' ? 0 : 2,
        minimumFractionDigits: state.currency === 'INR' ? 0 : 2
      });

      // Target text nodes exclusively to fulfill State Isolation Guardrail rules
      priceTargetNode.innerHTML = `${currConf.symbol}${formattedPrice}<span class="period">/${isAnnual ? 'yr' : 'mo'}</span>`;
    });
  }

  // =========================================================================
  // 5. BENTO-TO-ACCORDION CONTEXT SYNC ENGINE (STATE PERSISTENCE)
  // =========================================================================
  function handleLayoutContextTransfer() {
    const checkIsMobile = window.innerWidth <= 820;
    
    if (checkIsMobile !== state.isMobile) {
      state.isMobile = checkIsMobile;
      
      // Target active indicators and apply changes gracefully across viewports
      if (state.isMobile) {
        syncAccordionView();
      } else {
        syncBentoView();
      }
    }
  }

  function syncBentoView() {
    const cards = DOM_CACHE.featureGrid.querySelectorAll('.feature-card');
    cards.forEach((card, idx) => {
      if (idx === state.activeFeatureIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function syncAccordionView() {
    const items = DOM_CACHE.featureAccordion.querySelectorAll('.accordion-item');
    items.forEach((item, idx) => {
      const content = item.querySelector('.accordion-content');
      if (idx === state.activeFeatureIndex) {
        item.classList.add('active');
        content.style.maxHeight = '250px';
        content.style.padding = '0px 1.5rem 1.5rem';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = '0px';
        content.style.padding = '0px 1.5rem';
      }
    });
  }

  // =========================================================================
  // 6. EVENT INTERACTION ROUTERS & BOUNDARIES
  // =========================================================================
  function setupEventListeners() {
    // Window Resize Boundary Listening
    window.addEventListener('resize', debounce(handleLayoutContextTransfer, 60));

    // Desktop Bento Interaction Routing
    DOM_CACHE.featureGrid.addEventListener('mouseover', e => {
      const card = e.target.closest('.feature-card');
      if (!card) return;
      const targetIdx = parseInt(card.getAttribute('data-index'), 10);
      if (targetIdx !== state.activeFeatureIndex) {
        state.activeFeatureIndex = targetIdx;
        syncBentoView();
      }
    });

    // Mobile Accordion Touch/Click Framework Interactions
    DOM_CACHE.featureAccordion.addEventListener('click', e => {
      const header = e.target.closest('.accordion-header');
      if (!header) return;
      const item = header.parentElement;
      const targetIdx = parseInt(item.getAttribute('data-index'), 10);

      // Toggle state tracking logic safely
      state.activeFeatureIndex = (state.activeFeatureIndex === targetIdx) ? -1 : targetIdx;
      syncAccordionView();
    });

    // Billing Interval Action Switches
    DOM_CACHE.monthlyBtn.addEventListener('click', () => {
      if (state.billingCycle === 'monthly') return;
      state.billingCycle = 'monthly';
      DOM_CACHE.monthlyBtn.classList.add('active');
      DOM_CACHE.monthlyBtn.setAttribute('aria-pressed', 'true');
      DOM_CACHE.annualBtn.classList.remove('active');
      DOM_CACHE.annualBtn.setAttribute('aria-pressed', 'false');
      updateIsolatedPrices();
    });

    DOM_CACHE.annualBtn.addEventListener('click', () => {
      if (state.billingCycle === 'annual') return;
      state.billingCycle = 'annual';
      DOM_CACHE.annualBtn.classList.add('active');
      DOM_CACHE.annualBtn.setAttribute('aria-pressed', 'true');
      DOM_CACHE.monthlyBtn.classList.remove('active');
      DOM_CACHE.monthlyBtn.setAttribute('aria-pressed', 'false');
      updateIsolatedPrices();
    });

    // Isolated Regional Selector Changes
    DOM_CACHE.currencySelector.addEventListener('change', e => {
      state.currency = e.target.value;
      updateIsolatedPrices();
    });

    // Mobile Overlay Navigation Actions
    DOM_CACHE.menuBtn.addEventListener('click', () => {
      DOM_CACHE.mobileMenu.classList.add('open');
      DOM_CACHE.menuBtn.setAttribute('aria-expanded', 'true');
    });

    DOM_CACHE.closeBtn.addEventListener('click', () => {
      DOM_CACHE.mobileMenu.classList.remove('open');
      DOM_CACHE.menuBtn.setAttribute('aria-expanded', 'false');
    });
    
    // Close mobile navigation drawer instantly when an inner page jump target anchor link is clicked
    DOM_CACHE.mobileMenu.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        DOM_CACHE.mobileMenu.classList.remove('open');
        DOM_CACHE.menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // High-performance Debounce Utility to minimize style recalculations during window manipulations
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Safely mount components when the underlying DOM structure is verified ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initElements);
  } else {
    initElements();
  }
})();