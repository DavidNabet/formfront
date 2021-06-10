const $ = document;
let formEl;
let submitBtn;
$.addEventListener("DOMContentLoaded", () => {
  console.log("use strict");

  formEl = $.querySelector("form");
  submitBtn = $.querySelector(`input[type="submit"]`);

  const elsToValidate = [
    "firstname",
    "lastname",
    "email",
    "subject",
    "message",
  ];

  // submitBtn.removeAttribute("type");
  const submitUrl = formEl.getAttribute("action");
  const methodForm = formEl.getAttribute("method");
  // formEl.removeAttribute("action");
  // formEl.removeAttribute("method");

  formEl.addEventListener("change", ({ target }) => {
    // if (target.matches("input")) {}
    target.closest(".form-group").classList.remove("error");
  });

  submitBtn.addEventListener("submit", async (e) => {
    // e.preventDefault();
    let formIsValid = true;
    // boucle tous les éléments
    elsToValidate.forEach((selector) => {
      const el = $.querySelector(`[name="${selector}"]`);
      // checkValidity est en lien direct avec l'attribut required
      if (!el.checkValidity()) {
        formIsValid = false;
        el.closest(".form-group").classList.add("error");
      }
    });
    if (formIsValid) {
      console.log("Send to server");
      const body = {};

      elsToValidate.forEach((selector) => {
        const el = $.querySelector(`[name="${selector}"]`);
        // Si on rajoute une checkbox
        if (!["accept"].includes(selector)) {
          body[selector] = el.value;
        }
        // else {
        //   body[selector] = el.checked;
        // }
      });

      await axios({
        method: methodForm,
        url: submitUrl,
        data: body,
      }).then((res) => {
        console.log(res.data);
        formEl.style.display = "none";
        $.querySelector(".container").textContent = "Formulaire envoyé !";
      });

      /* fetch(submitUrl, {
        method: methodForm,
        body,
      })
        .then((res) => res.json())
        .then((result) => {
          formEl.style.display = "none";
          $.querySelector(".container").textContent = "Formulaire envoyé !";
        }); */
    }
  });

  /* $.getElementById("contact-form").addEventListener("submit", async (e) => {
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
      // "https://form-back-project.herokuapp.com/form",
      "http://localhost:3000/form",
      data
    );
    if (response.data) {
      alert("Votre soumission a bien été effectué");
    }
    // console.log(response);
  }); */
});
