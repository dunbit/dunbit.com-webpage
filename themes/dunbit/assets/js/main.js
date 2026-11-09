(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var done = document.getElementById('contact-done');
  var to = form.dataset.email, endpoint = form.dataset.endpoint;
  var btn = form.querySelector('button[type=submit]');
  var count = form.querySelector('[data-count]');
  var tried = false;

  // Preselect topic from ?topic= (set by "Ask about this" on the services page)
  var topic = new URLSearchParams(location.search).get('topic');
  if (topic) form.querySelectorAll('input[name=topics]').forEach(function (c) { if (c.value === topic) c.checked = true; });

  function val(n) { return (form.elements[n].value || '').trim(); }
  function topics() { return [].map.call(form.querySelectorAll('input[name=topics]:checked'), function (c) { return c.value; }); }
  function setErr(n, msg) {
    var el = form.querySelector('[data-for="' + n + '"]');
    if (el) el.textContent = msg || '';
    var field = el && el.closest('.field');
    if (field) field.classList.toggle('invalid', !!msg);
  }
  function validate() {
    var e = {};
    if (!val('name')) e.name = 'Please add your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('email'))) e.email = 'Enter a valid email';
    if (val('message').length < 10) e.message = 'A sentence or two helps us reply properly';
    ['name', 'email', 'message'].forEach(function (n) { setErr(n, e[n]); });
    return Object.keys(e).length === 0;
  }
  function summary() {
    var parts = [];
    if (topics().length) parts.push('Topics: ' + topics().join(', '));
    if (val('company')) parts.push('Company: ' + val('company'));
    if (val('timeline')) parts.push('Timeline: ' + val('timeline'));
    return parts.join(' · ') || 'General enquiry';
  }
  function mailto() {
    var body = val('message') + '\n\n' + summary() + '\n\n— ' + val('name') + (val('company') ? ', ' + val('company') : '') + '\n' + val('email');
    return 'mailto:' + to + '?subject=' + encodeURIComponent('Project enquiry — ' + (val('company') || val('name'))) + '&body=' + encodeURIComponent(body);
  }
  function showDone(viaMail) {
    done.querySelector('[data-done-title]').textContent = 'Thanks, ' + val('name').split(' ')[0] + '.';
    done.querySelector('[data-done-text]').textContent = viaMail
      ? 'Your email app should have opened with the message ready — just hit send.'
      : "We'll get back to you at " + val('email') + ' within two working days.';
    done.querySelector('[data-done-summary]').textContent = summary();
    done.querySelector('[data-done-mailto]').href = mailto();
    form.hidden = true; done.hidden = false;
  }

  form.addEventListener('input', function (e) {
    if (e.target.name === 'message') count.textContent = e.target.value.length + ' / 1000';
    if (tried) validate();
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    tried = true; setErr('form', '');
    if (!validate() || form.elements._gotcha.value) return;
    if (!endpoint) { window.location.href = mailto(); showDone(true); return; }
    btn.disabled = true; btn.textContent = 'Sending…';
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: val('name'), email: val('email'), company: val('company'), timeline: val('timeline'), topics: topics().join(', '), message: val('message'), _subject: 'Project enquiry — ' + (val('company') || val('name')) })
    }).then(function (r) {
      if (!r.ok) throw new Error();
      showDone(false);
    }).catch(function () {
      setErr('form', "Couldn't send right now. Please email us at " + to + '.');
    }).then(function () { btn.disabled = false; btn.textContent = 'Send message →'; });
  });
  done.querySelector('[data-done-reset]').addEventListener('click', function () {
    form.reset(); count.textContent = '0 / 1000'; tried = false;
    ['name', 'email', 'message', 'form'].forEach(function (n) { setErr(n, ''); });
    done.hidden = true; form.hidden = false;
  });
})();
