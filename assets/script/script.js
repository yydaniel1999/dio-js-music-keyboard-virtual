states = {
  view: {
    showKeys: document.querySelector("#show-keys"),
    volume: document.querySelector("#volume"),
    pianoKeys: document.querySelectorAll(".piano__keys .key"),
  },
  value: {
    volume: 0.5,
    supportKeys: [],
  },
};

const playSound = (key) => {
  const sound = new Audio(`./assets/sound/${key}.wav`);
  sound.volume = states.value.volume;
  sound.play();

  const pushedKey = document.querySelector(`[data-key="${key}"]`);
  pushedKey.classList.add("active");
  setTimeout(() => {
    pushedKey.classList.remove("active");
  }, 200);
};

const handleShowKeys = () => {
  states.view.pianoKeys.forEach((element) => {
    element.classList.toggle("hidden");
  });
};

const handleVolumeChange = (e) => {
  states.value.volume = e.currentTarget.value;
};

const handleKeyClick = (e) => {
  const key = e.currentTarget.dataset.key;
  playSound(key);
};

const handleKeyDown = ({ key }) => {
  if (states.value.supportKeys.includes(key)) playSound(key);
};

const addShowKeyListener = () => {
  states.view.showKeys.addEventListener("pointerdown", handleShowKeys);
};

const addVolumeListener = () => {
  states.view.volume.addEventListener("input", handleVolumeChange);
};

const addPianoListener = () => {
  states.view.pianoKeys.forEach((key) => {
    key.addEventListener("pointerdown", handleKeyClick);
    states.value.supportKeys.push(key.dataset.key);
  });
  document.addEventListener("keydown", handleKeyDown);
};

const init = () => {
  addShowKeyListener();
  addVolumeListener();
  addPianoListener();
};

init();
