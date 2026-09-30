/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {
  /* Header navigation */

  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      var target =
        item.getAttribute('data-target') ||
        (item.getAttribute('href') ? item.getAttribute('href').replace('#', '') : null);
      if (target) {
        var section = document.getElementById(target);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* Sign-up flow */

  function startSignup() {
    var trial = document.getElementById('trial');
    if (trial) {
      trial.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html#trial';
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      e.preventDefault();
      startSignup();
    });
  }

  /* Trial form */

  var trialForm = document.getElementById('trial-form');
  var trialSubmit = document.getElementById('trial-submit');

  function handleTrialSubmit(e) {
    if (e) e.preventDefault();
    if (!trialForm) return;
    var email = trialForm.querySelector('input[name="email"]');

    if (!email.value) {
      email.style.boxShadow = '0 0 0 2px #fca5a5';
      return;
    }

    trialForm.innerHTML = '<p>Thanks — check your inbox, the workspace is being created.</p>';
  }

  if (trialForm) {
    trialForm.addEventListener('submit', handleTrialSubmit);
  } else if (trialSubmit) {
    trialSubmit.addEventListener('click', handleTrialSubmit);
  }

  /* FAQ accordion */

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      question.parentElement.classList.toggle('is-open');
    });
  });
});
