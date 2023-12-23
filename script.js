function calculateLoan() {
    loanAmount = document.querySelector('#loan-amount').value;
    interestRate = document.querySelector('#interest-rate').value;
    monthsToPay = document.querySelector('#months-to-pay').value;

    interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
    monthlyPay = (loanAmount / monthsToPay + interest).toFixed(2);

    document.querySelector('#payment').innerHTML = `Monthly Payment: ${monthlyPay}`;
}
