// using formspree

const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const url = form.action;
    const formData = new FormData(form);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        alert('Message sent. Thank you!');
        form.reset();
      } else {
        const data = await res.json();
        alert('Failed to send message. ' + (data?.error || 'Please try again.'));
      }
    } catch (err) {
      alert('Network error. Please try again later.');
      console.error(err);
    }
  });