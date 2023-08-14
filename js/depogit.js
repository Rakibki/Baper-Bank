document.getElementById('deposit-btn').addEventListener('click', function() {
    // dipogit update
    const depogitAmaoutElement = document.getElementById('depogitFild');
    const depogitAmaout = depogitAmaoutElement.value
    
    const depogitTotalElement = document.getElementById('depogitTotal');
    const depogitTotal = depogitTotalElement.innerText;
    const currentDepogit = parseFloat(depogitTotal) + parseFloat(depogitAmaout);
    depogitTotalElement.innerText = currentDepogit;

    // blance update
    const BlanceTotal = document.getElementById('Blance')
    const blance = BlanceTotal.innerText;
    const totalBalnce = parseFloat(blance) + parseFloat(depogitAmaout)
    BlanceTotal.innerText = totalBalnce;

    depogitAmaoutElement.value = " ";
})

