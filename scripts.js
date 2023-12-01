let userData = document.getElementById("userData");
let otpLessLoginPage = document.getElementById("otpless-login-page");

    otpLessLoginPage.style.display = "block"; 

    function otpless(otplessUser) {
      console.log(JSON.stringify(otplessUser));
      otpLessLoginPage.style.display = "none";
      userData.style.display = "block";
      displayUserData(otplessUser);
    }

    function displayUserData(user) {
      userData.innerHTML = `
        <div class="user-Details">
          <div>
            <h1>🌟 User Information 🌟</h1>
            <p>📆 Event Time: ${user.timestamp}</p>
            <p>⏰ Event Timezone: ${user.timezone}</p>

            <h1>🌈 Contact Details 🌈</h1>

            <p>📱 Mobile: ${user.mobile.number}</p>
            <p>📧 Email: ${user.email.email}</p>
            <p>💬 WhatsApp: ${user.waNumber}</p>
          </div>
        </div>
      `;
    }