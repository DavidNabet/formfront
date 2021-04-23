const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("use strict");
  $.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
  });
});
