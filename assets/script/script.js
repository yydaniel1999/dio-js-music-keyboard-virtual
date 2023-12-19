states = {
  view: {
    showKeys: document.querySelector("#show-keys"),
    volume: document.querySelector("#volume"),
  },
  value: {
    volume: 0.5,
  },
};

const handleShowKeys = () => {
  document.querySelectorAll(".key span").forEach((element) => {
    element.classList.toggle("hidden");
  });
};

const addShowKeyListner = () => {
  states.view.showKeys.addEventListener("pointerdown", handleShowKeys);
};

const handleVolumeChange = (e) => {
  states.value.volume = e.currentTarget.value;
};

const addVolumeListener = () => {
  states.view.volume.addEventListener("input", handleVolumeChange);
};

const init = () => {
  addShowKeyListner();
  addVolumeListener();
};

init();
