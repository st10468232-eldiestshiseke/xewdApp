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
