const userFullName = document.querySelector("#userName");
const userAccountBalance = document.querySelector("#userAccountBalance");
console.log(userAccountBalance);

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

      const totalDepositNum = details
        .data()
        .totalDeposit.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

      const profitNum = details.data().profit.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      const totalBalanceNum = details
        .data()
        .totalBalance.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

      userAccountBalance.innerHTML = `
          <div class="row">
          <div class="col-lg-4 col-12">
            <div class="box bg-primary">
              <div class="box-body">
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <div class="d-flex align-items-center">
                    <div>
                      <h4 class="mb-0">Total Deposit</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-20 mb-5">
                  <h3 class="my-0 fw-600">
                    <span class="text-warning">${totalDepositNum}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12">
            <div class="box">
              <div class="box-body">
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <div class="d-flex align-items-center">
                    <div>
                      <h4 class="mb-0">Profit</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-20 mb-5">
                  <h3 class="my-0 fw-600">
                    <span class="text-primary">${profitNum}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12">
            <div class="box">
              <div class="box-body">
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <div class="d-flex align-items-center">
                    <div>
                      <h4 class="mb-0">total balance</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-20 mb-5">
                  <h3 class="my-0 fw-600">
                    <span class="text-primary">${totalBalanceNum}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
    });
};
