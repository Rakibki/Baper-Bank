document.getElementById('Withdraw-btn').addEventListener('click', function() {

    // withdrow update
    const withdrawFildElement = document.getElementById('WindrewFild');
    const WindrewFildValue = withdrawFildElement.value;
    const withdrawInput = parseFloat(WindrewFildValue);

    const WindrewTotalElement = document.getElementById('WindrewTotal');
    const withdrawTotalValue = WindrewTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalValue);

    const correntWidthreo = withdrawInput + withdrawTotal;
    WindrewTotalElement.innerText = correntWidthreo;
    withdrawFildElement.value = " ";

    //blance undate
    const BlanceTotal = document.getElementById('Blance')
    const blance = BlanceTotal.innerText;
    const totalBalnceNumber = parseFloat(blance)
    BlanceTotal.innerText = totalBalnceNumber - withdrawInput;

})