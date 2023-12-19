states = {
  views: {
    showKeys: document.querySelector("#show-keys"),
  },
};

const handleShowKeys = () => {
  document.querySelectorAll(".key span").forEach((element) => {
    element.classList.toggle("hidden");
  });
};

const addShowKeyListner = () => {
  states.views.showKeys.addEventListener("pointerdown", handleShowKeys);
};

const init = () => {
  addShowKeyListner();
};
init();
