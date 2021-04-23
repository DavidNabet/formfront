const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("use strict");
  $.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    // console.log(data);
    const response = await axios.post(
      "https://form-back-project.herokuapp.com/form",
      data
    );
    if (response.data) {
      alert("Votre soumission a bien été effectué");
    }
    // console.log(response);
  });
});
