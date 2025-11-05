/* <!-- Code attribution -->
 <!--Title: IIE Modual Manual 2025-->
 <!--author: The Independent Institut Of Education (Pty) Ltd-->
 <!--Version: first Edition(2022)-->
 <!--Available at:https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B022BFEDB-81D5-47FC-98E0-571385158886%7D&file=XHAW5112_MM.docx&action=default&mobileredirect=true-->
 <!--Date accessed: 27/08/2025--> */
 
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
/* ========== CONTACT FORM VALIDATION & ERROR HANDLING ========== */
const contactForm = document.querySelector('section.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');
    let hasError = false;

    // Reset previous border styles
    [nameField, emailField, messageField].forEach(field => {
      field.style.border = '1px solid #ccc';
    });

    // === Validation rules ===
    if (!nameField.value.trim()) {
      nameField.style.border = '2px solid red';
      hasError = true;
    }
    if (!emailField.value.trim() || !emailField.value.includes('@')) {
      emailField.style.border = '2px solid red';
      hasError = true;
    }
    if (!messageField.value.trim()) {
      messageField.style.border = '2px solid red';
      hasError = true;
    }

    // === Show error or success message ===
    if (hasError) {
      alert("⚠ Please fill in all required fields correctly before submitting.");
      return;
    }

    alert("✅ Thank you for contacting Empowering the Nation! We'll get back to you soon.");

    // === Reset form ===
    contactForm.reset();
  });
}
