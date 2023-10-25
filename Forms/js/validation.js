document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const loadingSpinner = document.getElementById("loading-spinner");
    form.addEventListener("submit", (e) => {
    e.preventDefault();

 
    const username = form.username.value;
    const birthdate = form.birthdate.value;
    const creditcard = form.creditcard.value;
    const postal = form.postal.value;

  
    const usernamePattern = /^[A-Za-z0-9]{4,12}$/;
    const birthdatePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
    const creditcardPattern = /^[0-9]{13,16}$/;
    const postalPattern = /^\d{5}$/;

    let isValid = true;

    if (!usernamePattern.test(username)) {
        form.username.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        form.username.nextElementSibling.style.display = "none";
    }

    if (!birthdatePattern.test(birthdate)) {
        form.birthdate.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        form.birthdate.nextElementSibling.style.display = "none";
    }

    if (!creditcardPattern.test(creditcard)) {
        form.creditcard.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        form.creditcard.nextElementSibling.style.display = "none";
    }

    if (!postalPattern.test(postal)) {
        form.postal.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        form.postal.nextElementSibling.style.display = "none";
    }

    if (isValid) {
        
        loadingSpinner.classList.remove("d-none");
        form.querySelector("button[type=submit]").classList.add("d-none");


        setTimeout(() => {

            alert("Formulario enviado con éxito");
           
            loadingSpinner.classList.add("d-none");
            form.querySelector("button[type=submit]").classList.remove("d-none");
        }, 2000); 
    }
    });
});
