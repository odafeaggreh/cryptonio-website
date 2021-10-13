const userFullName = document.querySelector("#userName");
const userDetails = document.querySelector("#userDetails");
const personalDetails = document.querySelector("#personalDetails");
const presonalAddress = document.querySelector("#presonalAddress");
const message = document.querySelector("#message");
const message2 = document.querySelector("#message2");

const setUpDashboard = (user) => {
  db.collection("users")
    .doc(user.uid)
    .onSnapshot((details) => {
      userFullName.innerHTML = `
              <p class="pt-5 fs-14 mb-0 fw-700 text-primary">
                  ${details.data().fullName}
              </p>
  
              <small class="fs-10 mb-0 text-uppercase text-mute">
                  User
              </small>
            `;

      userDetails.innerHTML = `
                <img
                class="rounded img-fluid mx-auto d-block max-w-150"
                src="../images/avatar.jpg"
                alt="User profile picture"
            />

            <h3 class="profile-username text-center mb-0">
                ${details.data().fullName}
            </h3>

            <h4 class="text-center mt-0">
                <i class="fa fa-envelope-o me-10"></i
                >${details.data().email}
            </h4>
        `;
    });
};

const userUpdate = (user) => {
  personalDetails.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = personalDetails["fullName"].value;
    const email = personalDetails["email"].value;
    const phone = personalDetails["phone"].value;

    db.collection("users")
      .doc(user.uid)
      .update({
        fullName: fullName,
        email: email,
        phone: phone,
      })
      .then(() => {
        message.innerHTML = `
        <div style="
            height: auto;
            width: 90%;
            max-width: 750px;
            margin: 50px auto 10px auto;
            padding: 1rem;
            color: #0f5132;
            background-color: #d1e7dd;
            border-color: #badbcc;
            text-align: center;
            border: 1px solid transparent;
            border-radius: .25rem;
      
            ">
            Personal details updated successfully
        </div>
      `;
      });
  });
};

const userAddress = (user) => {
  presonalAddress.addEventListener("submit", (e) => {
    e.preventDefault();
    const street = presonalAddress["street"].value;
    const city = presonalAddress["city"].value;
    const state = presonalAddress["state"].value;
    const postcode = presonalAddress["postcode"].value;

    db.collection("users")
      .doc(user.uid)
      .update({
        street: street,
        city: city,
        state: state,
        postCode: postcode,
      })
      .then(() => {
        message.innerHTML = `
      <div style="
          height: auto;
          width: 90%;
          max-width: 750px;
          margin: 50px auto 10px auto;
          padding: 1rem;
          color: #0f5132;
          background-color: #d1e7dd;
          border-color: #badbcc;
          text-align: center;
          border: 1px solid transparent;
          border-radius: .25rem;
    
          ">
          Personal address updated successfully
      </div>
    `;
      });
  });
};
