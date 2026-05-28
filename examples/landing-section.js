const copyVariants = {
  professional: {
    label: "Professional",
    title: "Build with clarity before the first beam goes up.",
    body:
      "Planning-led construction support for teams that need safer timelines, cleaner coordination, and confidence from concept to site delivery.",
    cta: "Plan the next phase",
  },
  bold: {
    label: "Bold",
    title: "Make every phase of the build move with purpose.",
    body:
      "Give industrial teams a sharper path from planning to delivery, with coordinated decisions before work reaches the site.",
    cta: "Start the build plan",
  },
  direct: {
    label: "Direct",
    title: "Plan the work. Align the team. Deliver the site.",
    body:
      "A focused landing section for construction teams that need clear scope, visible next steps, and fewer handoff gaps.",
    cta: "Review the plan",
  },
};

const titleElement = document.querySelector("#hero-title");
const copyElement = document.querySelector("#hero-copy");
const ctaElement = document.querySelector("#hero-cta");
const toneButtons = document.querySelectorAll(".tone-button");
const qaItems = document.querySelectorAll(".qa-item");
const summaryButton = document.querySelector("#generate-summary");
const summaryElement = document.querySelector("#delivery-summary");

let selectedTone = "professional";

function updateCopy(tone) {
  const variant = copyVariants[tone];

  selectedTone = tone;
  titleElement.textContent = variant.title;
  copyElement.textContent = variant.body;
  ctaElement.textContent = variant.cta;

  toneButtons.forEach((button) => {
    const isSelected = button.dataset.tone === tone;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function generateSummary() {
  const completedItems = [...qaItems].filter((item) => item.checked).length;
  const totalItems = qaItems.length;
  const toneLabel = copyVariants[selectedTone].label;

  summaryElement.textContent =
    `Delivery ready: ${toneLabel} version selected. ` +
    `${completedItems}/${totalItems} QA items completed. ` +
    "Final human review recommended before publishing.";
}

toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateCopy(button.dataset.tone);
  });
});

summaryButton.addEventListener("click", generateSummary);
