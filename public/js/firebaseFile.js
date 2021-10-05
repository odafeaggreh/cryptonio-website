const contactInfo = document.querySelector("#contactInfo");

db.collection("webDetails")
  .doc("9fjAMgSQYkqAaUy13XHE")
  .onSnapshot((details) => {
    console.log(details.data().email);
    contactInfo.innerHTML = `
    <div
            class="contact-items"
            style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                margin: 20px 0;
            "
            >
            <div
                style="
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                "
            >
                <span class="material-icons" style="margin-right: 5px">
                call
                </span>
                <a href="tel: ${details.data().Phone}" style="color: white"
                >${details.data().Phone}</a
                >
            </div>
            <div
                style="
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                "
            >
                <span class="material-icons" style="margin-right: 5px">
                email
                </span>
                <a
                href="mailto: ${details.data().email}"
                style="color: white"
                >${details.data().email}</a
                >
            </div>
            </div>
    `;
  });
