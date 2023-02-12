// const tabs = document.querySelectorAll("[data-tab-target]");
// const tabContents = document.querySelectorAll("[data-tab-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");
//     target.classList.add("active");
//   });
// });

// by using only class

const tabs = document.querySelectorAll(".tab");
const tabContentDiv = document.querySelectorAll(".tab-content-div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTab = tab.getAttribute("id");
    tabContentDiv.forEach((tabdiv) => {
      tabdiv.classList.remove("active");
      if (targetTab === tabdiv.getAttribute("id")) {
        // tabdiv.classList.add("active");
        tabdiv.classList.add("active");
      }
    });
  });
});
