document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("enquiry-form");
    const confirmation = document.getElementById("confirmation");

    const container = document.querySelector(".contact-form");
    const originalFormHTML = container.innerHTML;

    function sendMail( ) {
        let parms = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            message : document.getElementById("message").value,
            phone : document.getElementById("phone").value
        }
        emailjs.send("service_8pruku7","template_gjpyvxe",parms)
    }


   function handleFormSubmit(e) {
        e.preventDefault(); // prevent default submission
        const form = e.target;
        const submitButton = form.querySelector("#enquiry-submit");
        const buttonText = submitButton.querySelector(".button-text");
        const spinner = submitButton.querySelector(".spinner");

        // Show spinner
        buttonText.style.display = "none";
        spinner.style.display = "inline-block";

        sendMail();

        // Simulate 3-second email sending
        setTimeout(() => {
            // Fade out form
            form.classList.add("fade-out");

            setTimeout(() => {
                // Replace with confirmation
                container.innerHTML = `
                    <div id="confirmation" class="fade-in" style="
                        background: white;
                        padding: 2rem;
                        border-radius: 12px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        min-height: 70vh;
                    ">
                        <h2 style="text-align:center; font-weight:bold; margin-bottom:1rem; margin-top: 1rem; font-size: 1.7rem">
                            Thank you for reaching out to us!
                        </h2>
                        <p style="text-align:center; font-size:1.2rem; margin:0 0 1.5rem 0; max-width: 80%;">
                            We have received your enquiry and will get back to you as soon as possible.
                        </p>
                        <a href="#contact" id="submit-another">Submit another enquiry!</a>
                    </div>
                `;

                // Fade in confirmation
                const confirmationDiv = container.querySelector("#confirmation");
                requestAnimationFrame(() => {
                    confirmationDiv.classList.add("show");
                });

                // Re-attach click handler
                document.getElementById("submit-another").addEventListener("click", (ev) => {
                    ev.preventDefault();
                    confirmationDiv.classList.add("fade-out");

                    container.innerHTML = originalFormHTML;
                    const newForm = container.querySelector("form");
                    newForm.addEventListener("submit", handleFormSubmit);
                    window.scrollTo({ top: container.offsetTop, behavior: "smooth" });
                });

            }, 400); // fade-out duration
        }, 6000); // spinner duration

    };

    const initialForm = container.querySelector("form");
    initialForm.addEventListener("submit", handleFormSubmit);

});
    
