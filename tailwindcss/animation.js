/* eslint-env node */
const animation = {
  "animation-compass": "compass-rotate 2s linear infinite",
  "animation-rotate": "rotate 1s linear infinite",
  "animation-prixClipFix": "prixClipFix 2s linear infinite",
};

const keyframes = {
  "compass-rotate": {
    "0%": {
      transform: "rotate(45deg)",
    },
    "30%,50%,70%": {
      transform: "rotate(230deg)",
    },
    "40%,60%,80%": {
      transform: "rotate(240deg)",
    },
    "100%": {
      transform: "rotate(245deg)",
    },
  },
  rotate: {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  prixClipFix: {
    "0%": {
      "clip-path": "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)",
    },
    "25%": {
      "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
    },
    "50%": {
      "clip-path":
        "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
    },
    "75%": {
      "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
    },
    "100%": {
      "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
    },
  },
};
module.exports = { animation, keyframes };
