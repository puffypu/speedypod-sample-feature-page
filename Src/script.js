// Add event listeners to each FAQ question to toggle the answer
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    // Toggle 'active' class on the parent div (faq)
    const faq = this.parentElement;
    faq.classList.toggle("active");
  });
});
