const afterVideo = document.querySelector('.after-video');

const show = (event) => {
  const video = event.fragment;
  if (video.classList.contains('last-new')) {
    // eslint-disable-next-line
    hide({
      fragment: afterVideo,
    });
  }
  if (video.play) {
    video.currentTime = 0;
    setTimeout(() => {
      video.play();
    }, 300);
  }
};

const hide = (event) => {
  const video = event.fragment;
  if (video.classList.contains('last-new')) {
    show({
      fragment: afterVideo,
    });
  }
  if (video.pause) {
    video.pause();
  }
};

export default (enter) => {
  if (enter) {
    Reveal.addEventListener('fragmentshown', show);
    Reveal.addEventListener('fragmenthidden', hide);
  } else {
    Reveal.removeEventListener('fragmentshown', show);
    Reveal.removeEventListener('fragmenthidden', hide);
  }
};
