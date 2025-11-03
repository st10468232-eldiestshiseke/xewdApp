document.getElementById("feeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const price = parseFloat(document.getElementById("courseType").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const discountCode = document.getElementById("discount").value.trim().toLowerCase();

  if (!price || quantity < 1) {
    alert("Please select a valid course and quantity.");
    return;
  }

  let total = price * quantity;

  // Apply discount if code matches
  let discountApplied = 0;
  if (discountCode === "save10") {
    discountApplied = total * 0.10;
    total -= discountApplied;
  }

  // Add VAT (15%)
  const vat = total * 0.15;
  total += vat;

  document.getElementById("result").innerHTML = `
    Base Price: R${(price * quantity).toFixed(2)}<br>
    Discount: R${discountApplied.toFixed(2)}<br>
    VAT (15%): R${vat.toFixed(2)}<br>
    <strong>Total: R${total.toFixed(2)}</strong>
  `;
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Reset error and success messages
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.getElementById('successMessage').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    isValid = false;
  }

  // Validate email
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  // If the form is valid, display success message
  if (isValid) {
    const formData = {
      name: name,
      email: email,
      message: message
    };

    console.log('Form submitted successfully:', formData);
    document.getElementById('successMessage').textContent =
      'Thank you for your message! We will get back to you soon.';
    this.reset(); // Reset the form
  }
});
