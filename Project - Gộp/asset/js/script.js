//js contact
const inputUsername = document.querySelector(".input-username");
const inputAddress = document.querySelector(".input-address");
const inputPhone = document.querySelector(".input-phone-username");
const inputEmail = document.querySelector(".input-email-username");
const inputText = document.querySelector(".input-text-username");
const btnSend = document.querySelector(".send-now");

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputUsername.value === "" ||
    inputAddress.value === "" ||
    inputPhone.value === "" ||
    inputEmail.value === "" ||
    inputText.value === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  alert("Gửi yêu cầu thành công");
  window.location.href = "3TOT.html";
});
