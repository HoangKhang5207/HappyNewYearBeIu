"use strict";
const _0x1ddfe3 = _0x3c36;
(function (_0x39c5e0, _0xb0b1b2) {
  const _0x42d3c9 = _0x3c36,
    _0x34c893 = _0x39c5e0();
  while (!![]) {
    try {
      const _0x1c8d96 =
        -parseInt(_0x42d3c9(0x157)) / 0x1 +
        (parseInt(_0x42d3c9(0x1a3)) / 0x2) * (parseInt(_0x42d3c9(0xfd)) / 0x3) +
        (parseInt(_0x42d3c9(0x184)) / 0x4) *
          (parseInt(_0x42d3c9(0x18b)) / 0x5) +
        parseInt(_0x42d3c9(0x1bb)) / 0x6 +
        (-parseInt(_0x42d3c9(0xa6)) / 0x7) *
          (-parseInt(_0x42d3c9(0x1c4)) / 0x8) +
        -parseInt(_0x42d3c9(0xe9)) / 0x9 +
        -parseInt(_0x42d3c9(0x177)) / 0xa;
      if (_0x1c8d96 === _0xb0b1b2) break;
      else _0x34c893["push"](_0x34c893["shift"]());
    } catch (_0x30b900) {
      _0x34c893["push"](_0x34c893["shift"]());
    }
  }
})(_0x8330, 0xbbc4a);
console[_0x1ddfe3(0x191)]();
const IS_MOBILE = window[_0x1ddfe3(0x105)] <= 0x280,
  IS_DESKTOP = window[_0x1ddfe3(0x105)] > 0x320,
  IS_HEADER = IS_DESKTOP && window[_0x1ddfe3(0x1aa)] < 0x12c,
  IS_HIGH_END_DEVICE = (() => {
    const _0x287250 = _0x1ddfe3,
      _0x3c4129 = navigator[_0x287250(0x1a0)];
    if (!_0x3c4129) return ![];
    const _0x4d4b17 = window[_0x287250(0x105)] <= 0x400 ? 0x4 : 0x8;
    return _0x3c4129 >= _0x4d4b17;
  })(),
  MAX_WIDTH = 0x1e00,
  MAX_HEIGHT = 0x10e0,
  GRAVITY = 0.9;
let simSpeed = 0x1;
function getDefaultScaleFactor() {
  if (IS_MOBILE) return 0.9;
  if (IS_HEADER) return 0.75;
  return 0x1;
}
let stageW,
  stageH,
  quality = 0x1,
  isLowQuality = ![],
  isNormalQuality = !![],
  isHighQuality = ![];
const QUALITY_LOW = 0x1,
  QUALITY_NORMAL = 0x2,
  QUALITY_HIGH = 0x3,
  SKY_LIGHT_NONE = 0x0,
  SKY_LIGHT_DIM = 0x1,
  SKY_LIGHT_NORMAL = 0x2,
  COLOR = {
    Red: _0x1ddfe3(0x126),
    Green: _0x1ddfe3(0x145),
    Blue: _0x1ddfe3(0x182),
    Purple: "#e60aff",
    Gold: _0x1ddfe3(0x12f),
    White: _0x1ddfe3(0x9d),
  },
  INVISIBLE = _0x1ddfe3(0x19a),
  PI_2 = Math["PI"] * 0x2,
  PI_HALF = Math["PI"] * 0.5,
  trailsStage = new Stage(_0x1ddfe3(0x11a)),
  mainStage = new Stage("main-canvas"),
  stages = [trailsStage, mainStage];
function fullscreenEnabled() {
  const _0x303066 = _0x1ddfe3;
  return fscreen[_0x303066(0x1c2)];
}
function isFullscreen() {
  return !!fscreen["fullscreenElement"];
}
function toggleFullscreen() {
  const _0x4ef47e = _0x1ddfe3;
  fullscreenEnabled() &&
    (isFullscreen()
      ? fscreen[_0x4ef47e(0xf8)]()
      : fscreen["requestFullscreen"](document["documentElement"]));
}
fscreen[_0x1ddfe3(0xf3)](_0x1ddfe3(0x19d), () => {
  const _0x3b2fd1 = _0x1ddfe3;
  store[_0x3b2fd1(0x113)]({ fullscreen: isFullscreen() });
});
const store = {
  _listeners: new Set(),
  _dispatch(_0x53ad77) {
    const _0x3b0d2a = _0x1ddfe3;
    this[_0x3b0d2a(0xdc)][_0x3b0d2a(0xc0)]((_0x2e59cd) =>
      _0x2e59cd(this[_0x3b0d2a(0xe6)], _0x53ad77)
    );
  },
  state: {
    paused: !![],
    soundEnabled: ![],
    menuOpen: ![],
    openHelpTopic: null,
    fullscreen: isFullscreen(),
    config: {
      quality: String(IS_HIGH_END_DEVICE ? QUALITY_HIGH : QUALITY_NORMAL),
      shell: "Random",
      size: IS_DESKTOP ? "3" : IS_HEADER ? _0x1ddfe3(0x18c) : "2",
      autoLaunch: !![],
      finale: !![],
      skyLighting: SKY_LIGHT_NORMAL + "",
      hideControls: IS_HEADER,
      longExposure: ![],
      scaleFactor: getDefaultScaleFactor(),
    },
  },
  setState(_0x5ce008) {
    const _0x3c5fc3 = _0x1ddfe3,
      _0x59a9f4 = this["state"];
    (this["state"] = Object["assign"]({}, this[_0x3c5fc3(0xe6)], _0x5ce008)),
      this[_0x3c5fc3(0xf0)](_0x59a9f4),
      this[_0x3c5fc3(0x111)]();
  },
  subscribe(_0x521b39) {
    const _0x4898e3 = _0x1ddfe3;
    return (
      this[_0x4898e3(0xdc)][_0x4898e3(0x1b8)](_0x521b39),
      () => this[_0x4898e3(0xdc)][_0x4898e3(0xcf)](_0x521b39)
    );
  },
  load() {
    const _0x37e3e3 = _0x1ddfe3,
      _0x3b0e96 = localStorage["getItem"]("cm_fireworks_data");
    if (_0x3b0e96) {
      const { schemaVersion: _0xb49456, data: _0x5c03fd } =
          JSON[_0x37e3e3(0x16b)](_0x3b0e96),
        _0x36b77d = this["state"][_0x37e3e3(0x136)];
      switch (_0xb49456) {
        case _0x37e3e3(0x1a2):
          (_0x36b77d["quality"] = _0x5c03fd[_0x37e3e3(0x165)]),
            (_0x36b77d[_0x37e3e3(0x14f)] = _0x5c03fd[_0x37e3e3(0x14f)]),
            (_0x36b77d[_0x37e3e3(0x110)] = _0x5c03fd["skyLighting"]);
          break;
        case _0x37e3e3(0x18c):
          (_0x36b77d[_0x37e3e3(0x165)] = _0x5c03fd[_0x37e3e3(0x165)]),
            (_0x36b77d[_0x37e3e3(0x14f)] = _0x5c03fd[_0x37e3e3(0x14f)]),
            (_0x36b77d[_0x37e3e3(0x110)] = _0x5c03fd[_0x37e3e3(0x110)]),
            (_0x36b77d[_0x37e3e3(0x172)] = _0x5c03fd["scaleFactor"]);
          break;
        default:
          throw new Error(_0x37e3e3(0x94));
      }
      console[_0x37e3e3(0xd0)](_0x37e3e3(0x112) + _0xb49456 + ")");
    } else {
      if (localStorage[_0x37e3e3(0xca)]("schemaVersion") === "1") {
        let _0x49f672;
        try {
          const _0xff22d7 = localStorage["getItem"](_0x37e3e3(0x1ab));
          _0x49f672 =
            typeof _0xff22d7 === _0x37e3e3(0xd5) &&
            JSON[_0x37e3e3(0x16b)](_0xff22d7);
        } catch (_0x4eb4ed) {
          console[_0x37e3e3(0xd0)](
            "Recovered\x20from\x20error\x20parsing\x20saved\x20config:"
          ),
            console[_0x37e3e3(0xc1)](_0x4eb4ed);
          return;
        }
        const _0x2959e3 = parseInt(_0x49f672, 0xa);
        _0x2959e3 >= 0x0 &&
          _0x2959e3 <= 0x4 &&
          (this["state"]["config"][_0x37e3e3(0x14f)] = String(_0x2959e3));
      }
    }
  },
  persist() {
    const _0x113122 = _0x1ddfe3,
      _0x518b9f = this[_0x113122(0xe6)][_0x113122(0x136)];
    localStorage["setItem"](
      _0x113122(0x103),
      JSON["stringify"]({
        schemaVersion: _0x113122(0x18c),
        data: {
          quality: _0x518b9f[_0x113122(0x165)],
          size: _0x518b9f[_0x113122(0x14f)],
          skyLighting: _0x518b9f[_0x113122(0x110)],
          scaleFactor: _0x518b9f[_0x113122(0x172)],
        },
      })
    );
  },
};
!IS_HEADER && store[_0x1ddfe3(0x17f)]();
function togglePause(_0x3ded43) {
  const _0x1cd878 = _0x1ddfe3,
    _0x1b5223 = store["state"][_0x1cd878(0x12e)];
  let _0x253841;
  typeof _0x3ded43 === "boolean"
    ? (_0x253841 = _0x3ded43)
    : (_0x253841 = !_0x1b5223),
    _0x1b5223 !== _0x253841 && store[_0x1cd878(0x113)]({ paused: _0x253841 });
}
function toggleSound(_0x393999) {
  const _0x391308 = _0x1ddfe3;
  typeof _0x393999 === _0x391308(0x127)
    ? store[_0x391308(0x113)]({ soundEnabled: _0x393999 })
    : store[_0x391308(0x113)]({
        soundEnabled: !store["state"][_0x391308(0xd2)],
      });
}
function _0x3c36(_0x591864, _0xd3a3b1) {
  const _0x833087 = _0x8330();
  return (
    (_0x3c36 = function (_0x3c36b0, _0x2d4ae6) {
      _0x3c36b0 = _0x3c36b0 - 0x90;
      let _0x4519d0 = _0x833087[_0x3c36b0];
      return _0x4519d0;
    }),
    _0x3c36(_0x591864, _0xd3a3b1)
  );
}
function toggleMenu(_0x1c1b4b) {
  const _0x18249c = _0x1ddfe3;
  typeof _0x1c1b4b === "boolean"
    ? store[_0x18249c(0x113)]({ menuOpen: _0x1c1b4b })
    : store["setState"]({ menuOpen: !store["state"]["menuOpen"] });
}
function updateConfig(_0x2c8449) {
  const _0xc015e1 = _0x1ddfe3;
  (_0x2c8449 = _0x2c8449 || getConfigFromDOM()),
    store[_0xc015e1(0x113)]({
      config: Object[_0xc015e1(0x142)](
        {},
        store[_0xc015e1(0xe6)][_0xc015e1(0x136)],
        _0x2c8449
      ),
    }),
    configDidUpdate();
}
function configDidUpdate() {
  const _0x3b7ac7 = _0x1ddfe3,
    _0x279677 = store[_0x3b7ac7(0xe6)][_0x3b7ac7(0x136)];
  (quality = qualitySelector()),
    (isLowQuality = quality === QUALITY_LOW),
    (isNormalQuality = quality === QUALITY_NORMAL),
    (isHighQuality = quality === QUALITY_HIGH),
    skyLightingSelector() === SKY_LIGHT_NONE &&
      (appNodes[_0x3b7ac7(0x173)][_0x3b7ac7(0x12a)][_0x3b7ac7(0x124)] =
        _0x3b7ac7(0x1b5)),
    (Spark[_0x3b7ac7(0x96)] = quality === QUALITY_HIGH ? 0.75 : 0x1);
}
const isRunning = (_0x14dec1 = store[_0x1ddfe3(0xe6)]) =>
    !_0x14dec1[_0x1ddfe3(0x12e)] && !_0x14dec1[_0x1ddfe3(0xec)],
  soundEnabledSelector = (_0x286c10 = store[_0x1ddfe3(0xe6)]) =>
    _0x286c10["soundEnabled"],
  canPlaySoundSelector = (_0x1f9188 = store[_0x1ddfe3(0xe6)]) =>
    isRunning(_0x1f9188) && soundEnabledSelector(_0x1f9188),
  qualitySelector = () =>
    +store[_0x1ddfe3(0xe6)][_0x1ddfe3(0x136)][_0x1ddfe3(0x165)],
  shellNameSelector = () => store["state"][_0x1ddfe3(0x136)]["shell"],
  shellSizeSelector = () => +store["state"]["config"]["size"],
  finaleSelector = () =>
    store[_0x1ddfe3(0xe6)][_0x1ddfe3(0x136)][_0x1ddfe3(0x163)],
  skyLightingSelector = () =>
    +store[_0x1ddfe3(0xe6)][_0x1ddfe3(0x136)][_0x1ddfe3(0x110)],
  scaleFactorSelector = () =>
    store[_0x1ddfe3(0xe6)][_0x1ddfe3(0x136)][_0x1ddfe3(0x172)],
  helpContent = {
    shellType: { header: _0x1ddfe3(0x1b1), body: _0x1ddfe3(0x1c0) },
    shellSize: {
      header: "Shell\x20Size",
      body: "The\x20size\x20of\x20the\x20fireworks.\x20Modeled\x20after\x20real\x20firework\x20shell\x20sizes,\x20larger\x20shells\x20have\x20bigger\x20bursts\x20with\x20more\x20stars,\x20and\x20sometimes\x20more\x20complex\x20effects.\x20However,\x20larger\x20shells\x20also\x20require\x20more\x20processing\x20power\x20and\x20may\x20cause\x20lag.",
    },
    quality: { header: _0x1ddfe3(0x116), body: _0x1ddfe3(0x170) },
    skyLighting: { header: "Sky\x20Lighting", body: _0x1ddfe3(0x10a) },
    scaleFactor: { header: _0x1ddfe3(0x12d), body: _0x1ddfe3(0x150) },
    autoLaunch: { header: _0x1ddfe3(0x16d), body: _0x1ddfe3(0x11f) },
    finaleMode: { header: "Finale\x20Mode", body: _0x1ddfe3(0x19f) },
    hideControls: { header: _0x1ddfe3(0x17c), body: _0x1ddfe3(0x1b3) },
    fullscreen: { header: _0x1ddfe3(0x158), body: _0x1ddfe3(0x19c) },
    longExposure: { header: _0x1ddfe3(0x1c3), body: _0x1ddfe3(0x1c1) },
  },
  nodeKeyToHelpKey = {
    shellTypeLabel: _0x1ddfe3(0x132),
    shellSizeLabel: _0x1ddfe3(0x1a8),
    qualityLabel: _0x1ddfe3(0x165),
    skyLightingLabel: _0x1ddfe3(0x110),
    scaleFactorLabel: _0x1ddfe3(0x172),
    autoLaunchLabel: _0x1ddfe3(0x166),
    finaleModeLabel: _0x1ddfe3(0x17a),
    hideControlsLabel: _0x1ddfe3(0xa5),
    fullscreenLabel: _0x1ddfe3(0x14e),
    longExposureLabel: _0x1ddfe3(0x159),
  },
  appNodes = {
    stageContainer: _0x1ddfe3(0xce),
    canvasContainer: _0x1ddfe3(0xd7),
    controls: _0x1ddfe3(0x9a),
    menu: ".menu",
    menuInnerWrap: _0x1ddfe3(0x167),
    pauseBtn: _0x1ddfe3(0x125),
    pauseBtnSVG: _0x1ddfe3(0xed),
    soundBtn: _0x1ddfe3(0xc2),
    soundBtnSVG: ".sound-btn\x20use",
    shellType: _0x1ddfe3(0xd3),
    shellTypeLabel: ".shell-type-label",
    shellSize: _0x1ddfe3(0xb4),
    shellSizeLabel: _0x1ddfe3(0xd4),
    quality: _0x1ddfe3(0x175),
    qualityLabel: _0x1ddfe3(0xb6),
    skyLighting: _0x1ddfe3(0xdf),
    skyLightingLabel: ".sky-lighting-label",
    scaleFactor: ".scaleFactor",
    scaleFactorLabel: ".scaleFactor-label",
    autoLaunch: ".auto-launch",
    autoLaunchLabel: _0x1ddfe3(0x14a),
    finaleModeFormOption: ".form-option--finale-mode",
    finaleMode: _0x1ddfe3(0xbe),
    finaleModeLabel: ".finale-mode-label",
    hideControls: _0x1ddfe3(0x134),
    hideControlsLabel: _0x1ddfe3(0x17d),
    fullscreenFormOption: ".form-option--fullscreen",
    fullscreen: _0x1ddfe3(0x1b2),
    fullscreenLabel: _0x1ddfe3(0xe4),
    longExposure: _0x1ddfe3(0x16e),
    longExposureLabel: ".long-exposure-label",
    helpModal: _0x1ddfe3(0x121),
    helpModalOverlay: ".help-modal__overlay",
    helpModalHeader: _0x1ddfe3(0x102),
    helpModalBody: _0x1ddfe3(0x131),
    helpModalCloseBtn: _0x1ddfe3(0x1b7),
  };
Object[_0x1ddfe3(0x19b)](appNodes)[_0x1ddfe3(0xc0)]((_0x7cd625) => {
  appNodes[_0x7cd625] = document["querySelector"](appNodes[_0x7cd625]);
});
!fullscreenEnabled() &&
  appNodes[_0x1ddfe3(0xc3)][_0x1ddfe3(0xb0)][_0x1ddfe3(0x1b8)](_0x1ddfe3(0xcf));
function renderApp(_0x4aea95) {
  const _0x2c3fbd = _0x1ddfe3,
    _0x1c971b =
      _0x2c3fbd(0x13f) + (_0x4aea95["paused"] ? _0x2c3fbd(0x190) : "pause"),
    _0x2c38db =
      _0x2c3fbd(0xae) + (soundEnabledSelector() ? "on" : _0x2c3fbd(0xc6));
  appNodes["pauseBtnSVG"]["setAttribute"]("href", _0x1c971b),
    appNodes[_0x2c3fbd(0x141)]["setAttribute"]("xlink:href", _0x1c971b),
    appNodes["soundBtnSVG"][_0x2c3fbd(0xb9)](_0x2c3fbd(0x18a), _0x2c38db),
    appNodes[_0x2c3fbd(0xb8)][_0x2c3fbd(0xb9)](_0x2c3fbd(0x9c), _0x2c38db),
    appNodes["controls"]["classList"][_0x2c3fbd(0xac)](
      _0x2c3fbd(0x192),
      _0x4aea95[_0x2c3fbd(0xec)] || _0x4aea95[_0x2c3fbd(0x136)][_0x2c3fbd(0xa5)]
    ),
    appNodes[_0x2c3fbd(0x173)]["classList"][_0x2c3fbd(0xac)](
      _0x2c3fbd(0xe5),
      _0x4aea95[_0x2c3fbd(0xec)]
    ),
    appNodes[_0x2c3fbd(0x15b)][_0x2c3fbd(0xb0)][_0x2c3fbd(0xac)](
      _0x2c3fbd(0x192),
      !_0x4aea95[_0x2c3fbd(0xec)]
    ),
    (appNodes[_0x2c3fbd(0x123)][_0x2c3fbd(0x12a)][_0x2c3fbd(0x13a)] = _0x4aea95[
      _0x2c3fbd(0x136)
    ][_0x2c3fbd(0x166)]
      ? 0x1
      : 0.32),
    (appNodes[_0x2c3fbd(0x165)][_0x2c3fbd(0x119)] =
      _0x4aea95[_0x2c3fbd(0x136)][_0x2c3fbd(0x165)]),
    (appNodes[_0x2c3fbd(0x132)][_0x2c3fbd(0x119)] =
      _0x4aea95["config"][_0x2c3fbd(0x1b4)]),
    (appNodes["shellSize"][_0x2c3fbd(0x119)] =
      _0x4aea95[_0x2c3fbd(0x136)]["size"]),
    (appNodes[_0x2c3fbd(0x166)]["checked"] =
      _0x4aea95[_0x2c3fbd(0x136)]["autoLaunch"]),
    (appNodes[_0x2c3fbd(0x17a)][_0x2c3fbd(0x95)] =
      _0x4aea95["config"][_0x2c3fbd(0x163)]),
    (appNodes[_0x2c3fbd(0x110)][_0x2c3fbd(0x119)] =
      _0x4aea95["config"][_0x2c3fbd(0x110)]),
    (appNodes[_0x2c3fbd(0xa5)][_0x2c3fbd(0x95)] =
      _0x4aea95[_0x2c3fbd(0x136)][_0x2c3fbd(0xa5)]),
    (appNodes[_0x2c3fbd(0x14e)][_0x2c3fbd(0x95)] = _0x4aea95["fullscreen"]),
    (appNodes["longExposure"][_0x2c3fbd(0x95)] =
      _0x4aea95[_0x2c3fbd(0x136)][_0x2c3fbd(0x159)]),
    (appNodes[_0x2c3fbd(0x172)][_0x2c3fbd(0x119)] =
      _0x4aea95["config"][_0x2c3fbd(0x172)][_0x2c3fbd(0xa7)](0x2)),
    (appNodes[_0x2c3fbd(0x138)][_0x2c3fbd(0x12a)][_0x2c3fbd(0x13a)] = _0x4aea95[
      _0x2c3fbd(0x117)
    ]
      ? 0.12
      : 0x1),
    appNodes[_0x2c3fbd(0x193)][_0x2c3fbd(0xb0)][_0x2c3fbd(0xac)](
      "active",
      !!_0x4aea95[_0x2c3fbd(0x117)]
    );
  if (_0x4aea95[_0x2c3fbd(0x117)]) {
    const { header: _0x3a9f6b, body: _0x474f9c } =
      helpContent[_0x4aea95[_0x2c3fbd(0x117)]];
    (appNodes["helpModalHeader"][_0x2c3fbd(0x1a9)] = _0x3a9f6b),
      (appNodes[_0x2c3fbd(0x1a1)][_0x2c3fbd(0x1a9)] = _0x474f9c);
  }
}
store[_0x1ddfe3(0x98)](renderApp);
function handleStateChange(_0x4288da, _0xb56469) {
  const _0x33db6c = _0x1ddfe3,
    _0x53e915 = canPlaySoundSelector(_0x4288da),
    _0x1a68dd = canPlaySoundSelector(_0xb56469);
  _0x53e915 !== _0x1a68dd &&
    (_0x53e915 ? soundManager["resumeAll"]() : soundManager[_0x33db6c(0xf4)]());
}
store[_0x1ddfe3(0x98)](handleStateChange);
function getConfigFromDOM() {
  const _0x1810ac = _0x1ddfe3;
  return {
    quality: appNodes[_0x1810ac(0x165)][_0x1810ac(0x119)],
    shell: appNodes[_0x1810ac(0x132)][_0x1810ac(0x119)],
    size: appNodes[_0x1810ac(0x1a8)][_0x1810ac(0x119)],
    autoLaunch: appNodes[_0x1810ac(0x166)][_0x1810ac(0x95)],
    finale: appNodes[_0x1810ac(0x17a)][_0x1810ac(0x95)],
    skyLighting: appNodes[_0x1810ac(0x110)]["value"],
    longExposure: appNodes["longExposure"][_0x1810ac(0x95)],
    hideControls: appNodes[_0x1810ac(0xa5)]["checked"],
    scaleFactor: parseFloat(appNodes[_0x1810ac(0x172)]["value"]),
  };
}
const updateConfigNoEvent = () => updateConfig();
appNodes[_0x1ddfe3(0x165)][_0x1ddfe3(0xf3)]("input", updateConfigNoEvent),
  appNodes["shellType"][_0x1ddfe3(0xf3)](_0x1ddfe3(0xa8), updateConfigNoEvent),
  appNodes[_0x1ddfe3(0x1a8)][_0x1ddfe3(0xf3)](
    _0x1ddfe3(0xa8),
    updateConfigNoEvent
  ),
  appNodes[_0x1ddfe3(0x166)][_0x1ddfe3(0xf3)](_0x1ddfe3(0xde), () =>
    setTimeout(updateConfig, 0x0)
  ),
  appNodes["finaleMode"][_0x1ddfe3(0xf3)]("click", () =>
    setTimeout(updateConfig, 0x0)
  ),
  appNodes[_0x1ddfe3(0x110)][_0x1ddfe3(0xf3)](
    _0x1ddfe3(0xa8),
    updateConfigNoEvent
  ),
  appNodes[_0x1ddfe3(0x159)][_0x1ddfe3(0xf3)]("click", () =>
    setTimeout(updateConfig, 0x0)
  ),
  appNodes[_0x1ddfe3(0xa5)]["addEventListener"](_0x1ddfe3(0xde), () =>
    setTimeout(updateConfig, 0x0)
  ),
  appNodes[_0x1ddfe3(0x14e)][_0x1ddfe3(0xf3)](_0x1ddfe3(0xde), () =>
    setTimeout(toggleFullscreen, 0x0)
  ),
  appNodes[_0x1ddfe3(0x172)]["addEventListener"](_0x1ddfe3(0xa8), () => {
    updateConfig(), handleResize();
  }),
  Object[_0x1ddfe3(0x19b)](nodeKeyToHelpKey)[_0x1ddfe3(0xc0)]((_0x4ddf7a) => {
    const _0x1514e9 = _0x1ddfe3,
      _0x1e0d79 = nodeKeyToHelpKey[_0x4ddf7a];
    appNodes[_0x4ddf7a][_0x1514e9(0xf3)](_0x1514e9(0xde), () => {
      const _0xf4ad80 = _0x1514e9;
      store[_0xf4ad80(0x113)]({ openHelpTopic: _0x1e0d79 });
    });
  }),
  appNodes[_0x1ddfe3(0x1bd)]["addEventListener"](_0x1ddfe3(0xde), () => {
    const _0x6bf607 = _0x1ddfe3;
    store[_0x6bf607(0x113)]({ openHelpTopic: null });
  }),
  appNodes["helpModalOverlay"]["addEventListener"](_0x1ddfe3(0xde), () => {
    const _0x16f280 = _0x1ddfe3;
    store[_0x16f280(0x113)]({ openHelpTopic: null });
  });
const COLOR_NAMES = Object["keys"](COLOR),
  COLOR_CODES = COLOR_NAMES[_0x1ddfe3(0x189)]((_0x5eb836) => COLOR[_0x5eb836]),
  COLOR_CODES_W_INVIS = [...COLOR_CODES, INVISIBLE],
  COLOR_CODE_INDEXES = COLOR_CODES_W_INVIS[_0x1ddfe3(0xdd)](
    (_0x666cc6, _0x2ab891, _0x772b33) => {
      return (_0x666cc6[_0x2ab891] = _0x772b33), _0x666cc6;
    },
    {}
  ),
  COLOR_TUPLES = {};
COLOR_CODES["forEach"]((_0x1daabe) => {
  const _0x4989d0 = _0x1ddfe3;
  COLOR_TUPLES[_0x1daabe] = {
    r: parseInt(_0x1daabe[_0x4989d0(0xeb)](0x1, 0x2), 0x10),
    g: parseInt(_0x1daabe[_0x4989d0(0xeb)](0x3, 0x2), 0x10),
    b: parseInt(_0x1daabe[_0x4989d0(0xeb)](0x5, 0x2), 0x10),
  };
});
function randomColorSimple() {
  const _0x540b11 = _0x1ddfe3;
  return COLOR_CODES[(Math["random"]() * COLOR_CODES[_0x540b11(0x115)]) | 0x0];
}
let lastColor;
function randomColor(_0x3dc5b1) {
  const _0x59a132 = _0x1ddfe3,
    _0x3effb6 = _0x3dc5b1 && _0x3dc5b1[_0x59a132(0xa1)],
    _0x323c6e = _0x3dc5b1 && _0x3dc5b1[_0x59a132(0x16a)],
    _0x5eb6b4 = _0x3dc5b1 && _0x3dc5b1[_0x59a132(0xa2)];
  let _0xb9ba06 = randomColorSimple();
  _0x5eb6b4 &&
    _0xb9ba06 === COLOR["White"] &&
    Math["random"]() < 0.6 &&
    (_0xb9ba06 = randomColorSimple());
  if (_0x3effb6)
    while (_0xb9ba06 === lastColor) {
      _0xb9ba06 = randomColorSimple();
    }
  else {
    if (_0x323c6e)
      while (_0xb9ba06 === _0x323c6e) {
        _0xb9ba06 = randomColorSimple();
      }
  }
  return (lastColor = _0xb9ba06), _0xb9ba06;
}
function whiteOrGold() {
  const _0x27add5 = _0x1ddfe3;
  return Math["random"]() < 0.5
    ? COLOR[_0x27add5(0x1bf)]
    : COLOR[_0x27add5(0x12c)];
}
function makePistilColor(_0xd2d01f) {
  const _0x551de0 = _0x1ddfe3;
  return _0xd2d01f === COLOR[_0x551de0(0x12c)] ||
    _0xd2d01f === COLOR[_0x551de0(0x1bf)]
    ? randomColor({ notColor: _0xd2d01f })
    : whiteOrGold();
}
const crysanthemumShell = (_0x34a5a3 = 0x1) => {
    const _0x1921cb = _0x1ddfe3,
      _0x152241 = Math[_0x1921cb(0x187)]() < 0.25,
      _0xd69dbd = Math[_0x1921cb(0x187)]() < 0.72,
      _0x37640a = _0xd69dbd
        ? randomColor({ limitWhite: !![] })
        : [randomColor(), randomColor({ notSame: !![] })],
      _0x4a8b75 = _0xd69dbd && Math[_0x1921cb(0x187)]() < 0.42,
      _0x50f121 = _0x4a8b75 && makePistilColor(_0x37640a),
      _0x33e652 =
        _0xd69dbd &&
        (Math["random"]() < 0.2 || _0x37640a === COLOR[_0x1921cb(0x12c)])
          ? _0x50f121 || randomColor({ notColor: _0x37640a, limitWhite: !![] })
          : null,
      _0x29b2ba =
        !_0x4a8b75 &&
        _0x37640a !== COLOR[_0x1921cb(0x12c)] &&
        Math[_0x1921cb(0x187)]() < 0.42;
    let _0x29486d = _0x152241 ? 1.1 : 1.25;
    if (isLowQuality) _0x29486d *= 0.8;
    if (isHighQuality) _0x29486d = 1.2;
    return {
      shellSize: _0x34a5a3,
      spreadSize: 0x12c + _0x34a5a3 * 0x64,
      starLife: 0x384 + _0x34a5a3 * 0xc8,
      starDensity: _0x29486d,
      color: _0x37640a,
      secondColor: _0x33e652,
      glitter: _0x152241 ? _0x1921cb(0x18f) : "",
      glitterColor: whiteOrGold(),
      pistil: _0x4a8b75,
      pistilColor: _0x50f121,
      streamers: _0x29b2ba,
    };
  },
  ghostShell = (_0x251bab = 0x1) => {
    const _0x59037c = _0x1ddfe3,
      _0xef05d6 = crysanthemumShell(_0x251bab);
    _0xef05d6[_0x59037c(0xa0)] *= 1.5;
    let _0x65baa8 = randomColor({ notColor: COLOR["White"] });
    _0xef05d6[_0x59037c(0xcb)] = !![];
    const _0x200c2f = Math[_0x59037c(0x187)]() < 0.42,
      _0x2c2886 = _0x200c2f && makePistilColor(_0x65baa8);
    return (
      (_0xef05d6[_0x59037c(0x162)] = INVISIBLE),
      (_0xef05d6[_0x59037c(0x1a6)] = _0x65baa8),
      (_0xef05d6[_0x59037c(0xf6)] = ""),
      _0xef05d6
    );
  },
  strobeShell = (_0x648e6e = 0x1) => {
    const _0x361adc = _0x1ddfe3,
      _0xd34c1b = randomColor({ limitWhite: !![] });
    return {
      shellSize: _0x648e6e,
      spreadSize: 0x118 + _0x648e6e * 0x5c,
      starLife: 0x44c + _0x648e6e * 0xc8,
      starLifeVariation: 0.4,
      starDensity: 1.1,
      color: _0xd34c1b,
      glitter: _0x361adc(0x18f),
      glitterColor: COLOR[_0x361adc(0x12c)],
      strobe: !![],
      strobeColor: Math["random"]() < 0.5 ? COLOR["White"] : null,
      pistil: Math[_0x361adc(0x187)]() < 0.5,
      pistilColor: makePistilColor(_0xd34c1b),
    };
  },
  palmShell = (_0x102f4c = 0x1) => {
    const _0x3f99c9 = _0x1ddfe3,
      _0xea7e45 = randomColor(),
      _0x5ab36a = Math[_0x3f99c9(0x187)]() < 0.5;
    return {
      shellSize: _0x102f4c,
      color: _0xea7e45,
      spreadSize: 0xfa + _0x102f4c * 0x4b,
      starDensity: _0x5ab36a ? 0.15 : 0.4,
      starLife: 0x708 + _0x102f4c * 0xc8,
      glitter: _0x5ab36a ? _0x3f99c9(0x101) : _0x3f99c9(0x183),
    };
  },
  ringShell = (_0x14e345 = 0x1) => {
    const _0x2fa85b = _0x1ddfe3,
      _0x3f5fb5 = randomColor(),
      _0x4e7d08 = Math[_0x2fa85b(0x187)]() < 0.75;
    return {
      shellSize: _0x14e345,
      ring: !![],
      color: _0x3f5fb5,
      spreadSize: 0x12c + _0x14e345 * 0x64,
      starLife: 0x384 + _0x14e345 * 0xc8,
      starCount: 2.2 * PI_2 * (_0x14e345 + 0x1),
      pistil: _0x4e7d08,
      pistilColor: makePistilColor(_0x3f5fb5),
      glitter: !_0x4e7d08 ? _0x2fa85b(0x18f) : "",
      glitterColor:
        _0x3f5fb5 === COLOR[_0x2fa85b(0x1bf)]
          ? COLOR[_0x2fa85b(0x1bf)]
          : COLOR[_0x2fa85b(0x12c)],
      streamers: Math["random"]() < 0.3,
    };
  },
  crossetteShell = (_0x1095ee = 0x1) => {
    const _0x5103e9 = _0x1ddfe3,
      _0x546740 = randomColor({ limitWhite: !![] });
    return {
      shellSize: _0x1095ee,
      spreadSize: 0x12c + _0x1095ee * 0x64,
      starLife: 0x2ee + _0x1095ee * 0xa0,
      starLifeVariation: 0.4,
      starDensity: 0.85,
      color: _0x546740,
      crossette: !![],
      pistil: Math[_0x5103e9(0x187)]() < 0.5,
      pistilColor: makePistilColor(_0x546740),
    };
  },
  floralShell = (_0x2e7bd5 = 0x1) => ({
    shellSize: _0x2e7bd5,
    spreadSize: 0x12c + _0x2e7bd5 * 0x78,
    starDensity: 0.12,
    starLife: 0x1f4 + _0x2e7bd5 * 0x32,
    starLifeVariation: 0.5,
    color:
      Math[_0x1ddfe3(0x187)]() < 0.65
        ? "random"
        : Math[_0x1ddfe3(0x187)]() < 0.15
        ? randomColor()
        : [randomColor(), randomColor({ notSame: !![] })],
    floral: !![],
  }),
  fallingLeavesShell = (_0x470c04 = 0x1) => ({
    shellSize: _0x470c04,
    color: INVISIBLE,
    spreadSize: 0x12c + _0x470c04 * 0x78,
    starDensity: 0.12,
    starLife: 0x1f4 + _0x470c04 * 0x32,
    starLifeVariation: 0.5,
    glitter: _0x1ddfe3(0x15f),
    glitterColor: COLOR[_0x1ddfe3(0x1bf)],
    fallingLeaves: !![],
  }),
  willowShell = (_0x4d5e71 = 0x1) => ({
    shellSize: _0x4d5e71,
    spreadSize: 0x12c + _0x4d5e71 * 0x64,
    starDensity: 0.6,
    starLife: 0xbb8 + _0x4d5e71 * 0x12c,
    glitter: _0x1ddfe3(0x91),
    glitterColor: COLOR[_0x1ddfe3(0x1bf)],
    color: INVISIBLE,
  }),
  crackleShell = (_0x43c23a = 0x1) => {
    const _0x56dd01 = _0x1ddfe3,
      _0x16a662 =
        Math[_0x56dd01(0x187)]() < 0.75
          ? COLOR[_0x56dd01(0x1bf)]
          : randomColor();
    return {
      shellSize: _0x43c23a,
      spreadSize: 0x17c + _0x43c23a * 0x4b,
      starDensity: isLowQuality ? 0.65 : 0x1,
      starLife: 0x258 + _0x43c23a * 0x64,
      starLifeVariation: 0.32,
      glitter: _0x56dd01(0x18f),
      glitterColor: COLOR[_0x56dd01(0x1bf)],
      color: _0x16a662,
      crackle: !![],
      pistil: Math[_0x56dd01(0x187)]() < 0.65,
      pistilColor: makePistilColor(_0x16a662),
    };
  },
  horsetailShell = (_0x1397f9 = 0x1) => {
    const _0x403de5 = _0x1ddfe3,
      _0x297487 = randomColor();
    return {
      shellSize: _0x1397f9,
      horsetail: !![],
      color: _0x297487,
      spreadSize: 0xfa + _0x1397f9 * 0x26,
      starDensity: 0.9,
      starLife: 0x9c4 + _0x1397f9 * 0x12c,
      glitter: "medium",
      glitterColor: Math[_0x403de5(0x187)]() < 0.5 ? whiteOrGold() : _0x297487,
      strobe: _0x297487 === COLOR[_0x403de5(0x12c)],
    };
  };
function randomShellName() {
  const _0x394228 = _0x1ddfe3;
  return Math[_0x394228(0x187)]() < 0.5
    ? _0x394228(0x97)
    : shellNames[
        (Math["random"]() * (shellNames[_0x394228(0x115)] - 0x1) + 0x1) | 0x0
      ];
}
function randomShell(_0x56c685) {
  if (IS_HEADER) return randomFastShell()(_0x56c685);
  return shellTypes[randomShellName()](_0x56c685);
}
function shellFromConfig(_0x4538e5) {
  return shellTypes[shellNameSelector()](_0x4538e5);
}
const fastShellBlacklist = [_0x1ddfe3(0x9b), _0x1ddfe3(0xe7), _0x1ddfe3(0x181)];
function randomFastShell() {
  const _0x3d40b8 = _0x1ddfe3,
    _0x85201a = shellNameSelector() === _0x3d40b8(0x144);
  let _0x1a9d1f = _0x85201a ? randomShellName() : shellNameSelector();
  if (_0x85201a)
    while (fastShellBlacklist[_0x3d40b8(0xb3)](_0x1a9d1f)) {
      _0x1a9d1f = randomShellName();
    }
  return shellTypes[_0x1a9d1f];
}
const shellTypes = {
    Random: randomShell,
    Crackle: crackleShell,
    Crossette: crossetteShell,
    Crysanthemum: crysanthemumShell,
    "Falling\x20Leaves": fallingLeavesShell,
    Floral: floralShell,
    Ghost: ghostShell,
    "Horse\x20Tail": horsetailShell,
    Palm: palmShell,
    Ring: ringShell,
    Strobe: strobeShell,
    Willow: willowShell,
  },
  shellNames = Object[_0x1ddfe3(0x19b)](shellTypes);
function init() {
  const _0x406b46 = _0x1ddfe3;
  document[_0x406b46(0xf9)](".loading-init")[_0x406b46(0xcf)](),
    appNodes[_0x406b46(0x128)]["classList"][_0x406b46(0xcf)]("remove");
  function _0x14940a(_0x571467, _0x3905ce) {
    const _0x327b0f = _0x406b46;
    _0x571467[_0x327b0f(0x100)] = _0x3905ce["reduce"](
      (_0x299d29, _0x400671) =>
        (_0x299d29 +=
          "<option\x20value=\x22" +
          _0x400671["value"] +
          "\x22>" +
          _0x400671[_0x327b0f(0xaf)] +
          _0x327b0f(0x133)),
      ""
    );
  }
  let _0x47f8c2 = "";
  shellNames[_0x406b46(0xc0)](
    (_0x1f7e27) =>
      (_0x47f8c2 +=
        _0x406b46(0x15e) + _0x1f7e27 + "\x22>" + _0x1f7e27 + "</option>")
  ),
    (appNodes[_0x406b46(0x132)][_0x406b46(0x100)] = _0x47f8c2),
    (_0x47f8c2 = ""),
    ["3\x22", "4\x22", "6\x22", "8\x22", _0x406b46(0x11e), _0x406b46(0x9e)][
      _0x406b46(0xc0)
    ](
      (_0x1d3a0c, _0x58140e) =>
        (_0x47f8c2 +=
          _0x406b46(0x15e) + _0x58140e + "\x22>" + _0x1d3a0c + _0x406b46(0x133))
    ),
    (appNodes["shellSize"][_0x406b46(0x100)] = _0x47f8c2),
    _0x14940a(appNodes[_0x406b46(0x165)], [
      { label: _0x406b46(0x139), value: QUALITY_LOW },
      { label: _0x406b46(0x1ad), value: QUALITY_NORMAL },
      { label: _0x406b46(0xb5), value: QUALITY_HIGH },
    ]),
    _0x14940a(appNodes[_0x406b46(0x110)], [
      { label: _0x406b46(0x188), value: SKY_LIGHT_NONE },
      { label: _0x406b46(0x1c5), value: SKY_LIGHT_DIM },
      { label: "Normal", value: SKY_LIGHT_NORMAL },
    ]),
    _0x14940a(
      appNodes[_0x406b46(0x172)],
      [0.5, 0.62, 0.75, 0.9, 0x1, 1.5, 0x2][_0x406b46(0x189)]((_0x12f467) => ({
        value: _0x12f467[_0x406b46(0xa7)](0x2),
        label: _0x12f467 * 0x64 + "%",
      }))
    ),
    togglePause(![]),
    renderApp(store["state"]),
    configDidUpdate();
}
function fitShellPositionInBoundsH(_0x58b6ba) {
  const _0x33cc83 = 0.18;
  return (0x1 - _0x33cc83 * 0x2) * _0x58b6ba + _0x33cc83;
}
function fitShellPositionInBoundsV(_0x306a7c) {
  return _0x306a7c * 0.75;
}
function getRandomShellPositionH() {
  return fitShellPositionInBoundsH(Math["random"]());
}
function getRandomShellPositionV() {
  const _0x382311 = _0x1ddfe3;
  return fitShellPositionInBoundsV(Math[_0x382311(0x187)]());
}
function getRandomShellSize() {
  const _0x5ec68b = _0x1ddfe3,
    _0x4dfc4c = shellSizeSelector(),
    _0x541326 = Math["min"](2.5, _0x4dfc4c),
    _0x44f6db = Math["random"]() * _0x541326,
    _0x1c214e = _0x4dfc4c - _0x44f6db,
    _0x11b5a7 =
      _0x541326 === 0x0 ? Math["random"]() : 0x1 - _0x44f6db / _0x541326,
    _0xc0b72f = Math[_0x5ec68b(0x187)]() * (0x1 - _0x11b5a7 * 0.65) * 0.5,
    _0x4f9ddb =
      Math[_0x5ec68b(0x187)]() < 0.5 ? 0.5 - _0xc0b72f : 0.5 + _0xc0b72f;
  return {
    size: _0x1c214e,
    x: fitShellPositionInBoundsH(_0x4f9ddb),
    height: fitShellPositionInBoundsV(_0x11b5a7),
  };
}
function launchShellFromConfig(_0x337a06) {
  const _0x93227a = _0x1ddfe3,
    _0x43428c = new Shell(shellFromConfig(shellSizeSelector())),
    _0x25601b = mainStage[_0x93227a(0xbd)],
    _0x3e0dcf = mainStage[_0x93227a(0x16f)];
  _0x43428c["launch"](
    _0x337a06 ? _0x337a06["x"] / _0x25601b : getRandomShellPositionH(),
    _0x337a06 ? 0x1 - _0x337a06["y"] / _0x3e0dcf : getRandomShellPositionV()
  );
}
function seqRandomShell() {
  const _0x47c8c3 = _0x1ddfe3,
    _0x5d2e90 = getRandomShellSize(),
    _0x15da80 = new Shell(shellFromConfig(_0x5d2e90["size"]));
  _0x15da80[_0x47c8c3(0x17b)](_0x5d2e90["x"], _0x5d2e90[_0x47c8c3(0x16f)]);
  let _0x24b58f = _0x15da80[_0x47c8c3(0xa0)];
  return (
    _0x15da80[_0x47c8c3(0x13e)] && (_0x24b58f = 0x11f8),
    0x384 + Math[_0x47c8c3(0x187)]() * 0x258 + _0x24b58f
  );
}
function seqRandomFastShell() {
  const _0x3966cb = _0x1ddfe3,
    _0x46720e = randomFastShell(),
    _0x3b0293 = getRandomShellSize(),
    _0x494b9b = new Shell(_0x46720e(_0x3b0293[_0x3966cb(0x14f)]));
  _0x494b9b[_0x3966cb(0x17b)](_0x3b0293["x"], _0x3b0293["height"]);
  let _0x4d261a = _0x494b9b["starLife"];
  return 0x384 + Math[_0x3966cb(0x187)]() * 0x258 + _0x4d261a;
}
function seqTwoRandom() {
  const _0xec7626 = _0x1ddfe3,
    _0x3cc092 = getRandomShellSize(),
    _0x22e93f = getRandomShellSize(),
    _0x54ee18 = new Shell(shellFromConfig(_0x3cc092[_0xec7626(0x14f)])),
    _0x18ed29 = new Shell(shellFromConfig(_0x22e93f["size"])),
    _0x47e4db = Math[_0xec7626(0x187)]() * 0.2 - 0.1,
    _0x5289c6 = Math[_0xec7626(0x187)]() * 0.2 - 0.1;
  _0x54ee18[_0xec7626(0x17b)](0.3 + _0x47e4db, _0x3cc092[_0xec7626(0x16f)]),
    setTimeout(() => {
      const _0x541dcd = _0xec7626;
      _0x18ed29[_0x541dcd(0x17b)](0.7 + _0x5289c6, _0x22e93f[_0x541dcd(0x16f)]);
    }, 0x64);
  let _0x24db24 = Math[_0xec7626(0x11d)](
    _0x54ee18[_0xec7626(0xa0)],
    _0x18ed29[_0xec7626(0xa0)]
  );
  return (
    (_0x54ee18[_0xec7626(0x13e)] || _0x18ed29["fallingLeaves"]) &&
      (_0x24db24 = 0x11f8),
    0x384 + Math[_0xec7626(0x187)]() * 0x258 + _0x24db24
  );
}
function seqTriple() {
  const _0x224b83 = _0x1ddfe3,
    _0x443644 = randomFastShell(),
    _0x59622a = shellSizeSelector(),
    _0x111c4f = Math[_0x224b83(0x11d)](0x0, _0x59622a - 1.25),
    _0x3b49dd = Math[_0x224b83(0x187)]() * 0.08 - 0.04,
    _0x4e5080 = new Shell(_0x443644(_0x59622a));
  _0x4e5080[_0x224b83(0x17b)](0.5 + _0x3b49dd, 0.7);
  const _0x2d962a = 0x3e8 + Math[_0x224b83(0x187)]() * 0x190,
    _0x4a297c = 0x3e8 + Math["random"]() * 0x190;
  return (
    setTimeout(() => {
      const _0x2031a6 = _0x224b83,
        _0x29cf53 = Math["random"]() * 0.08 - 0.04,
        _0xebde67 = new Shell(_0x443644(_0x111c4f));
      _0xebde67[_0x2031a6(0x17b)](0.2 + _0x29cf53, 0.1);
    }, _0x2d962a),
    setTimeout(() => {
      const _0x53be81 = _0x224b83,
        _0x55f1bd = Math[_0x53be81(0x187)]() * 0.08 - 0.04,
        _0x30e56b = new Shell(_0x443644(_0x111c4f));
      _0x30e56b[_0x53be81(0x17b)](0.8 + _0x55f1bd, 0.1);
    }, _0x4a297c),
    0xfa0
  );
}
function seqPyramid() {
  const _0x378d91 = _0x1ddfe3,
    _0xa17e7a = IS_DESKTOP ? 0x7 : 0x4,
    _0x48664d = shellSizeSelector(),
    _0x3f9fd0 = Math[_0x378d91(0x11d)](0x0, _0x48664d - 0x3),
    _0x21deca = Math[_0x378d91(0x187)]() < 0.78 ? crysanthemumShell : ringShell,
    _0x1cab2e = randomShell;
  function _0x1f4a4f(_0x416ad9, _0xc267e0) {
    const _0x4e3785 = _0x378d91,
      _0x398998 = shellNameSelector() === _0x4e3785(0x144);
    let _0x1f26ef = _0x398998
      ? _0xc267e0
        ? _0x1cab2e
        : _0x21deca
      : shellTypes[shellNameSelector()];
    const _0x37c734 = new Shell(_0x1f26ef(_0xc267e0 ? _0x48664d : _0x3f9fd0)),
      _0x4ae996 = _0x416ad9 <= 0.5 ? _0x416ad9 / 0.5 : (0x1 - _0x416ad9) / 0.5;
    _0x37c734[_0x4e3785(0x17b)](_0x416ad9, _0xc267e0 ? 0.75 : _0x4ae996 * 0.42);
  }
  let _0x9b97c5 = 0x0,
    _0x3b021b = 0x0;
  while (_0x9b97c5 <= _0xa17e7a) {
    if (_0x9b97c5 === _0xa17e7a)
      setTimeout(() => {
        _0x1f4a4f(0.5, !![]);
      }, _0x3b021b);
    else {
      const _0x15d6dc = (_0x9b97c5 / _0xa17e7a) * 0.5,
        _0x2771e6 = Math[_0x378d91(0x187)]() * 0x1e + 0x1e;
      setTimeout(() => {
        _0x1f4a4f(_0x15d6dc, ![]);
      }, _0x3b021b),
        setTimeout(() => {
          _0x1f4a4f(0x1 - _0x15d6dc, ![]);
        }, _0x3b021b + _0x2771e6);
    }
    _0x9b97c5++, (_0x3b021b += 0xc8);
  }
  return 0xd48 + _0xa17e7a * 0xfa;
}
function seqSmallBarrage() {
  const _0xe1ada4 = _0x1ddfe3;
  seqSmallBarrage[_0xe1ada4(0xc8)] = Date["now"]();
  const _0x903b27 = IS_DESKTOP ? 0xb : 0x5,
    _0x1e4978 = IS_DESKTOP ? 0x3 : 0x1,
    _0x11fb36 = Math[_0xe1ada4(0x11d)](0x0, shellSizeSelector() - 0x2),
    _0xa92d46 = Math["random"]() < 0.78 ? crysanthemumShell : ringShell,
    _0x490678 = randomFastShell();
  function _0x328418(_0x43e8de, _0x4b2c9e) {
    const _0x15468c = _0xe1ada4,
      _0x1e6a7f = shellNameSelector() === _0x15468c(0x144);
    let _0x1eb6e5 = _0x1e6a7f
      ? _0x4b2c9e
        ? _0x490678
        : _0xa92d46
      : shellTypes[shellNameSelector()];
    const _0x33f266 = new Shell(_0x1eb6e5(_0x11fb36)),
      _0x71ed0 =
        (Math["cos"](_0x43e8de * 0x5 * Math["PI"] + PI_HALF) + 0x1) / 0x2;
    _0x33f266[_0x15468c(0x17b)](_0x43e8de, _0x71ed0 * 0.75);
  }
  let _0x31b8e3 = 0x0,
    _0x1f01e2 = 0x0;
  while (_0x31b8e3 < _0x903b27) {
    if (_0x31b8e3 === 0x0) _0x328418(0.5, ![]), (_0x31b8e3 += 0x1);
    else {
      const _0x4f7c25 = (_0x31b8e3 + 0x1) / _0x903b27 / 0x2,
        _0x122a84 = Math[_0xe1ada4(0x187)]() * 0x1e + 0x1e,
        _0x175226 = _0x31b8e3 === _0x1e4978;
      setTimeout(() => {
        _0x328418(0.5 + _0x4f7c25, _0x175226);
      }, _0x1f01e2),
        setTimeout(() => {
          _0x328418(0.5 - _0x4f7c25, _0x175226);
        }, _0x1f01e2 + _0x122a84),
        (_0x31b8e3 += 0x2);
    }
    _0x1f01e2 += 0xc8;
  }
  return 0xd48 + _0x903b27 * 0x78;
}
(seqSmallBarrage[_0x1ddfe3(0x143)] = 0x3a98),
  (seqSmallBarrage["lastCalled"] = Date[_0x1ddfe3(0x11b)]());
const sequences = [
  seqRandomShell,
  seqTwoRandom,
  seqTriple,
  seqPyramid,
  seqSmallBarrage,
];
let isFirstSeq = !![];
const finaleCount = 0x20;
let currentFinaleCount = 0x0;
function startSequence() {
  const _0x24cfc3 = _0x1ddfe3;
  if (isFirstSeq) {
    isFirstSeq = ![];
    if (IS_HEADER) return seqTwoRandom();
    else {
      const _0x49cb79 = new Shell(crysanthemumShell(shellSizeSelector()));
      return _0x49cb79[_0x24cfc3(0x17b)](0.5, 0.5), 0x960;
    }
  }
  if (finaleSelector())
    return (
      seqRandomFastShell(),
      currentFinaleCount < finaleCount
        ? (currentFinaleCount++, 0xaa)
        : ((currentFinaleCount = 0x0), 0x1770)
    );
  const _0xa4934 = Math[_0x24cfc3(0x187)]();
  if (
    _0xa4934 < 0.08 &&
    Date[_0x24cfc3(0x11b)]() - seqSmallBarrage[_0x24cfc3(0xc8)] >
      seqSmallBarrage[_0x24cfc3(0x143)]
  )
    return seqSmallBarrage();
  if (_0xa4934 < 0.1) return seqPyramid();
  if (_0xa4934 < 0.6 && !IS_HEADER) return seqRandomShell();
  else {
    if (_0xa4934 < 0.8) return seqTwoRandom();
    else {
      if (_0xa4934 < 0x1) return seqTriple();
    }
  }
}
let activePointerCount = 0x0,
  isUpdatingSpeed = ![];
function handlePointerStart(_0x5e5b8f) {
  const _0x436021 = _0x1ddfe3;
  activePointerCount++;
  const _0x111165 = 0x32;
  if (_0x5e5b8f["y"] < _0x111165) {
    if (_0x5e5b8f["x"] < _0x111165) {
      togglePause();
      return;
    }
    if (
      _0x5e5b8f["x"] > mainStage["width"] / 0x2 - _0x111165 / 0x2 &&
      _0x5e5b8f["x"] < mainStage[_0x436021(0xbd)] / 0x2 + _0x111165 / 0x2
    ) {
      toggleSound();
      return;
    }
    if (_0x5e5b8f["x"] > mainStage[_0x436021(0xbd)] - _0x111165) {
      toggleMenu();
      return;
    }
  }
  if (!isRunning()) return;
  if (updateSpeedFromEvent(_0x5e5b8f)) isUpdatingSpeed = !![];
  else _0x5e5b8f[_0x436021(0xff)] && launchShellFromConfig(_0x5e5b8f);
}
function handlePointerEnd(_0xbdf0b) {
  activePointerCount--, (isUpdatingSpeed = ![]);
}
function handlePointerMove(_0x411b84) {
  if (!isRunning()) return;
  isUpdatingSpeed && updateSpeedFromEvent(_0x411b84);
}
function handleKeydown(_0x3443fc) {
  const _0x30fbbc = _0x1ddfe3;
  if (_0x3443fc[_0x30fbbc(0x1af)] === 0x50) togglePause();
  else {
    if (_0x3443fc[_0x30fbbc(0x1af)] === 0x4f) toggleMenu();
    else _0x3443fc[_0x30fbbc(0x1af)] === 0x1b && toggleMenu(![]);
  }
}
mainStage["addEventListener"](_0x1ddfe3(0x164), handlePointerStart),
  mainStage["addEventListener"](_0x1ddfe3(0xee), handlePointerEnd),
  mainStage[_0x1ddfe3(0xf3)](_0x1ddfe3(0x1a4), handlePointerMove),
  window[_0x1ddfe3(0xf3)]("keydown", handleKeydown);
function handleResize() {
  const _0x367016 = _0x1ddfe3,
    _0x332c32 = window[_0x367016(0x105)],
    _0x4a7dc3 = window[_0x367016(0x1aa)],
    _0x494884 = Math[_0x367016(0x152)](_0x332c32, MAX_WIDTH),
    _0x139e7d =
      _0x332c32 <= 0x1a4
        ? _0x4a7dc3
        : Math[_0x367016(0x152)](_0x4a7dc3, MAX_HEIGHT);
  (appNodes["stageContainer"][_0x367016(0x12a)][_0x367016(0xbd)] =
    _0x494884 + "px"),
    (appNodes[_0x367016(0x128)][_0x367016(0x12a)]["height"] = _0x139e7d + "px"),
    stages[_0x367016(0xc0)]((_0x364847) =>
      _0x364847[_0x367016(0x161)](_0x494884, _0x139e7d)
    );
  const _0x522c10 = scaleFactorSelector();
  (stageW = _0x494884 / _0x522c10), (stageH = _0x139e7d / _0x522c10);
}
handleResize(), window[_0x1ddfe3(0xf3)](_0x1ddfe3(0x161), handleResize);
let currentFrame = 0x0,
  speedBarOpacity = 0x0,
  autoLaunchTime = 0x0;
function updateSpeedFromEvent(_0x3a32f3) {
  const _0x52f08b = _0x1ddfe3;
  if (isUpdatingSpeed || _0x3a32f3["y"] >= mainStage[_0x52f08b(0x16f)] - 0x2c) {
    const _0x5cde56 = 0x10,
      _0xb5f43d =
        (_0x3a32f3["x"] - _0x5cde56) / (mainStage["width"] - _0x5cde56 * 0x2);
    return (
      (simSpeed = Math[_0x52f08b(0x152)](Math["max"](_0xb5f43d, 0x0), 0x1)),
      (speedBarOpacity = 0x1),
      !![]
    );
  }
  return ![];
}
function updateGlobals(_0xffee31, _0x48ecea) {
  const _0x37d75a = _0x1ddfe3;
  currentFrame++,
    !isUpdatingSpeed &&
      ((speedBarOpacity -= _0x48ecea / 0x1e),
      speedBarOpacity < 0x0 && (speedBarOpacity = 0x0)),
    store[_0x37d75a(0xe6)][_0x37d75a(0x136)][_0x37d75a(0x166)] &&
      ((autoLaunchTime -= _0xffee31),
      autoLaunchTime <= 0x0 && (autoLaunchTime = startSequence() * 1.25));
}
function update(_0x5a60f8, _0x199abe) {
  const _0x3a7750 = _0x1ddfe3;
  if (!isRunning()) return;
  const _0x28754a = stageW,
    _0x1a8cb4 = stageH,
    _0x4a7a7d = _0x5a60f8 * simSpeed,
    _0x118e98 = simSpeed * _0x199abe;
  updateGlobals(_0x4a7a7d, _0x199abe);
  const _0x536ef7 = 0x1 - (0x1 - Star["airDrag"]) * _0x118e98,
    _0x3bf290 = 0x1 - (0x1 - Star[_0x3a7750(0x168)]) * _0x118e98,
    _0x39f154 = 0x1 - (0x1 - Spark[_0x3a7750(0x9f)]) * _0x118e98,
    _0x19648c = (_0x4a7a7d / 0x3e8) * GRAVITY;
  COLOR_CODES_W_INVIS[_0x3a7750(0xc0)]((_0x71a50e) => {
    const _0x1531d6 = _0x3a7750,
      _0x3b5f49 = Star[_0x1531d6(0x18d)][_0x71a50e];
    for (
      let _0x399373 = _0x3b5f49[_0x1531d6(0x115)] - 0x1;
      _0x399373 >= 0x0;
      _0x399373 = _0x399373 - 0x1
    ) {
      const _0x60e04 = _0x3b5f49[_0x399373];
      if (_0x60e04[_0x1531d6(0xba)] === currentFrame) continue;
      (_0x60e04["updateFrame"] = currentFrame),
        (_0x60e04[_0x1531d6(0x1b6)] -= _0x4a7a7d);
      if (_0x60e04[_0x1531d6(0x1b6)] <= 0x0)
        _0x3b5f49[_0x1531d6(0x109)](_0x399373, 0x1),
          Star["returnInstance"](_0x60e04);
      else {
        const _0x478404 = Math["pow"](
            _0x60e04["life"] / _0x60e04[_0x1531d6(0xfe)],
            0.5
          ),
          _0x1adf14 = 0x1 - _0x478404;
        (_0x60e04[_0x1531d6(0x156)] = _0x60e04["x"]),
          (_0x60e04[_0x1531d6(0xc5)] = _0x60e04["y"]),
          (_0x60e04["x"] += _0x60e04[_0x1531d6(0x130)] * _0x118e98),
          (_0x60e04["y"] += _0x60e04[_0x1531d6(0xa4)] * _0x118e98);
        !_0x60e04[_0x1531d6(0x183)]
          ? ((_0x60e04["speedX"] *= _0x536ef7),
            (_0x60e04[_0x1531d6(0xa4)] *= _0x536ef7))
          : ((_0x60e04[_0x1531d6(0x130)] *= _0x3bf290),
            (_0x60e04[_0x1531d6(0xa4)] *= _0x3bf290));
        _0x60e04["speedY"] += _0x19648c;
        _0x60e04["spinRadius"] &&
          ((_0x60e04[_0x1531d6(0x1b0)] +=
            _0x60e04[_0x1531d6(0xb2)] * _0x118e98),
          (_0x60e04["x"] +=
            Math["sin"](_0x60e04["spinAngle"]) *
            _0x60e04[_0x1531d6(0x16c)] *
            _0x118e98),
          (_0x60e04["y"] +=
            Math[_0x1531d6(0x129)](_0x60e04[_0x1531d6(0x1b0)]) *
            _0x60e04[_0x1531d6(0x16c)] *
            _0x118e98));
        if (_0x60e04[_0x1531d6(0x185)]) {
          _0x60e04[_0x1531d6(0x10f)] -= _0x4a7a7d;
          while (_0x60e04[_0x1531d6(0x10f)] < 0x0) {
            (_0x60e04[_0x1531d6(0x10f)] +=
              _0x60e04[_0x1531d6(0x185)] * 0.75 +
              _0x60e04[_0x1531d6(0x185)] * _0x1adf14 * 0x4),
              Spark[_0x1531d6(0x1b8)](
                _0x60e04["x"],
                _0x60e04["y"],
                _0x60e04["sparkColor"],
                Math[_0x1531d6(0x187)]() * PI_2,
                Math[_0x1531d6(0x187)]() * _0x60e04["sparkSpeed"] * _0x478404,
                _0x60e04[_0x1531d6(0x1be)] * 0.8 +
                  Math[_0x1531d6(0x187)]() *
                    _0x60e04["sparkLifeVariation"] *
                    _0x60e04["sparkLife"]
              );
          }
        }
        _0x60e04[_0x1531d6(0x1b6)] < _0x60e04[_0x1531d6(0x195)] &&
          (_0x60e04[_0x1531d6(0x1a6)] &&
            !_0x60e04[_0x1531d6(0xd8)] &&
            ((_0x60e04[_0x1531d6(0xd8)] = !![]),
            (_0x60e04[_0x1531d6(0x162)] = _0x60e04[_0x1531d6(0x1a6)]),
            _0x3b5f49[_0x1531d6(0x109)](_0x399373, 0x1),
            Star["active"][_0x60e04[_0x1531d6(0x1a6)]]["push"](_0x60e04),
            _0x60e04[_0x1531d6(0x1a6)] === INVISIBLE &&
              (_0x60e04["sparkFreq"] = 0x0)),
          _0x60e04[_0x1531d6(0x1a5)] &&
            (_0x60e04["visible"] =
              Math[_0x1531d6(0x108)](
                _0x60e04["life"] / _0x60e04[_0x1531d6(0xaa)]
              ) %
                0x3 ===
              0x0));
      }
    }
    const _0x503eb6 = Spark[_0x1531d6(0x18d)][_0x71a50e];
    for (
      let _0x58c2e7 = _0x503eb6[_0x1531d6(0x115)] - 0x1;
      _0x58c2e7 >= 0x0;
      _0x58c2e7 = _0x58c2e7 - 0x1
    ) {
      const _0x2c6427 = _0x503eb6[_0x58c2e7];
      (_0x2c6427[_0x1531d6(0x1b6)] -= _0x4a7a7d),
        _0x2c6427[_0x1531d6(0x1b6)] <= 0x0
          ? (_0x503eb6[_0x1531d6(0x109)](_0x58c2e7, 0x1),
            Spark[_0x1531d6(0xe2)](_0x2c6427))
          : ((_0x2c6427["prevX"] = _0x2c6427["x"]),
            (_0x2c6427["prevY"] = _0x2c6427["y"]),
            (_0x2c6427["x"] += _0x2c6427[_0x1531d6(0x130)] * _0x118e98),
            (_0x2c6427["y"] += _0x2c6427[_0x1531d6(0xa4)] * _0x118e98),
            (_0x2c6427[_0x1531d6(0x130)] *= _0x39f154),
            (_0x2c6427[_0x1531d6(0xa4)] *= _0x39f154),
            (_0x2c6427["speedY"] += _0x19648c));
    }
  }),
    render(_0x118e98);
}
function render(_0x1f1048) {
  const _0x4f169d = _0x1ddfe3,
    { dpr: _0x273ee5 } = mainStage,
    _0x17af5a = stageW,
    _0x5052b2 = stageH,
    _0x48a37d = trailsStage[_0x4f169d(0xc7)],
    _0x3ced4f = mainStage[_0x4f169d(0xc7)];
  skyLightingSelector() !== SKY_LIGHT_NONE && colorSky(_0x1f1048);
  const _0x5db1c1 = scaleFactorSelector();
  _0x48a37d[_0x4f169d(0x11c)](_0x273ee5 * _0x5db1c1, _0x273ee5 * _0x5db1c1),
    _0x3ced4f[_0x4f169d(0x11c)](_0x273ee5 * _0x5db1c1, _0x273ee5 * _0x5db1c1),
    (_0x48a37d[_0x4f169d(0x10b)] = _0x4f169d(0x107)),
    (_0x48a37d[_0x4f169d(0xd9)] =
      _0x4f169d(0x93) +
      (store["state"][_0x4f169d(0x136)][_0x4f169d(0x159)]
        ? 0.0025
        : 0.175 * _0x1f1048) +
      ")"),
    _0x48a37d["fillRect"](0x0, 0x0, _0x17af5a, _0x5052b2),
    _0x3ced4f[_0x4f169d(0xc9)](0x0, 0x0, _0x17af5a, _0x5052b2);
  while (BurstFlash[_0x4f169d(0x18d)][_0x4f169d(0x115)]) {
    const _0x2a5d78 = BurstFlash[_0x4f169d(0x18d)][_0x4f169d(0xe3)](),
      _0x17088b = _0x48a37d["createRadialGradient"](
        _0x2a5d78["x"],
        _0x2a5d78["y"],
        0x0,
        _0x2a5d78["x"],
        _0x2a5d78["y"],
        _0x2a5d78[_0x4f169d(0x140)]
      );
    _0x17088b[_0x4f169d(0x18e)](0.024, "rgba(255,\x20255,\x20255,\x201)"),
      _0x17088b[_0x4f169d(0x18e)](0.125, _0x4f169d(0x13b)),
      _0x17088b[_0x4f169d(0x18e)](0.32, "rgba(255,\x20140,\x2020,\x200.11)"),
      _0x17088b["addColorStop"](0x1, "rgba(255,\x20120,\x2020,\x200)"),
      (_0x48a37d["fillStyle"] = _0x17088b),
      _0x48a37d[_0x4f169d(0x14c)](
        _0x2a5d78["x"] - _0x2a5d78[_0x4f169d(0x140)],
        _0x2a5d78["y"] - _0x2a5d78["radius"],
        _0x2a5d78[_0x4f169d(0x140)] * 0x2,
        _0x2a5d78[_0x4f169d(0x140)] * 0x2
      ),
      BurstFlash["returnInstance"](_0x2a5d78);
  }
  (_0x48a37d["globalCompositeOperation"] = "lighten"),
    (_0x48a37d["lineWidth"] = Star[_0x4f169d(0x96)]),
    (_0x48a37d["lineCap"] = isLowQuality ? _0x4f169d(0xb7) : _0x4f169d(0xbb)),
    (_0x3ced4f[_0x4f169d(0xbc)] = "#fff"),
    (_0x3ced4f[_0x4f169d(0x174)] = 0x1),
    _0x3ced4f["beginPath"](),
    COLOR_CODES["forEach"]((_0x138ddd) => {
      const _0x2638e2 = _0x4f169d,
        _0x266c70 = Star[_0x2638e2(0x18d)][_0x138ddd];
      (_0x48a37d["strokeStyle"] = _0x138ddd),
        _0x48a37d[_0x2638e2(0x178)](),
        _0x266c70[_0x2638e2(0xc0)]((_0x23269f) => {
          const _0x408534 = _0x2638e2;
          _0x23269f[_0x408534(0x176)] &&
            (_0x48a37d[_0x408534(0xb1)](_0x23269f["x"], _0x23269f["y"]),
            _0x48a37d[_0x408534(0x169)](
              _0x23269f["prevX"],
              _0x23269f[_0x408534(0xc5)]
            ),
            _0x3ced4f[_0x408534(0xb1)](_0x23269f["x"], _0x23269f["y"]),
            _0x3ced4f[_0x408534(0x169)](
              _0x23269f["x"] - _0x23269f[_0x408534(0x130)] * 1.6,
              _0x23269f["y"] - _0x23269f["speedY"] * 1.6
            ));
        }),
        _0x48a37d[_0x2638e2(0x198)]();
    }),
    _0x3ced4f[_0x4f169d(0x198)](),
    (_0x48a37d[_0x4f169d(0x174)] = Spark[_0x4f169d(0x96)]),
    (_0x48a37d[_0x4f169d(0x147)] = _0x4f169d(0x137)),
    COLOR_CODES[_0x4f169d(0xc0)]((_0x4e03a0) => {
      const _0x4eea3f = _0x4f169d,
        _0x54d4d0 = Spark[_0x4eea3f(0x18d)][_0x4e03a0];
      (_0x48a37d[_0x4eea3f(0xbc)] = _0x4e03a0),
        _0x48a37d[_0x4eea3f(0x178)](),
        _0x54d4d0["forEach"]((_0x216502) => {
          const _0x3d761b = _0x4eea3f;
          _0x48a37d[_0x3d761b(0xb1)](_0x216502["x"], _0x216502["y"]),
            _0x48a37d[_0x3d761b(0x169)](
              _0x216502[_0x3d761b(0x156)],
              _0x216502[_0x3d761b(0xc5)]
            );
        }),
        _0x48a37d[_0x4eea3f(0x198)]();
    });
  if (speedBarOpacity) {
    const _0x4204e8 = 0x6;
    (_0x3ced4f[_0x4f169d(0x106)] = speedBarOpacity),
      (_0x3ced4f[_0x4f169d(0xd9)] = COLOR[_0x4f169d(0xfa)]),
      _0x3ced4f[_0x4f169d(0x14c)](
        0x0,
        _0x5052b2 - _0x4204e8,
        _0x17af5a * simSpeed,
        _0x4204e8
      ),
      (_0x3ced4f["globalAlpha"] = 0x1);
  }
  _0x48a37d[_0x4f169d(0x180)](0x1, 0x0, 0x0, 0x1, 0x0, 0x0),
    _0x3ced4f["setTransform"](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
}
const currentSkyColor = { r: 0x0, g: 0x0, b: 0x0 },
  targetSkyColor = { r: 0x0, g: 0x0, b: 0x0 };
function colorSky(_0x228949) {
  const _0x51682b = _0x1ddfe3,
    _0x4cea29 = skyLightingSelector() * 0xf,
    _0x55c8e = 0x1f4;
  let _0x22b75a = 0x0;
  (targetSkyColor["r"] = 0x0),
    (targetSkyColor["g"] = 0x0),
    (targetSkyColor["b"] = 0x0),
    COLOR_CODES[_0x51682b(0xc0)]((_0x2e4da6) => {
      const _0x2e3f6c = _0x51682b,
        _0x29716a = COLOR_TUPLES[_0x2e4da6],
        _0x3a5790 = Star["active"][_0x2e4da6][_0x2e3f6c(0x115)];
      (_0x22b75a += _0x3a5790),
        (targetSkyColor["r"] += _0x29716a["r"] * _0x3a5790),
        (targetSkyColor["g"] += _0x29716a["g"] * _0x3a5790),
        (targetSkyColor["b"] += _0x29716a["b"] * _0x3a5790);
    });
  const _0x4b6d8b = Math[_0x51682b(0x135)](
      Math[_0x51682b(0x152)](0x1, _0x22b75a / _0x55c8e),
      0.3
    ),
    _0x35c9aa = Math["max"](
      0x1,
      targetSkyColor["r"],
      targetSkyColor["g"],
      targetSkyColor["b"]
    );
  (targetSkyColor["r"] =
    (targetSkyColor["r"] / _0x35c9aa) * _0x4cea29 * _0x4b6d8b),
    (targetSkyColor["g"] =
      (targetSkyColor["g"] / _0x35c9aa) * _0x4cea29 * _0x4b6d8b),
    (targetSkyColor["b"] =
      (targetSkyColor["b"] / _0x35c9aa) * _0x4cea29 * _0x4b6d8b);
  const _0x2f41e6 = 0xa;
  (currentSkyColor["r"] +=
    ((targetSkyColor["r"] - currentSkyColor["r"]) / _0x2f41e6) * _0x228949),
    (currentSkyColor["g"] +=
      ((targetSkyColor["g"] - currentSkyColor["g"]) / _0x2f41e6) * _0x228949),
    (currentSkyColor["b"] +=
      ((targetSkyColor["b"] - currentSkyColor["b"]) / _0x2f41e6) * _0x228949),
    (appNodes["canvasContainer"][_0x51682b(0x12a)][_0x51682b(0x124)] =
      "rgb(" +
      (currentSkyColor["r"] | 0x0) +
      ",\x20" +
      (currentSkyColor["g"] | 0x0) +
      ",\x20" +
      (currentSkyColor["b"] | 0x0) +
      ")");
}
mainStage[_0x1ddfe3(0xf3)](_0x1ddfe3(0x160), update);
function _0x8330() {
  const _0xa48083 = [
    "pistil",
    "length",
    "Quality",
    "openHelpTopic",
    "Lighting\x20Fuses",
    "value",
    "trails-canvas",
    "now",
    "scale",
    "max",
    "12\x22",
    "Launches\x20sequences\x20of\x20fireworks\x20automatically.\x20Sit\x20back\x20and\x20enjoy\x20the\x20show,\x20or\x20disable\x20to\x20have\x20full\x20control.",
    "suspend",
    ".help-modal",
    "all",
    "finaleModeFormOption",
    "backgroundColor",
    ".pause-btn",
    "#ff0043",
    "boolean",
    "stageContainer",
    "cos",
    "style",
    "arrayBuffer",
    "White",
    "Scale",
    "paused",
    "#ffbf36",
    "speedX",
    ".help-modal__body",
    "shellType",
    "</option>",
    ".hide-controls",
    "pow",
    "config",
    "butt",
    "menuInnerWrap",
    "Low",
    "opacity",
    "rgba(255,\x20160,\x2020,\x200.2)",
    "status",
    "strobeColor",
    "fallingLeaves",
    "#icon-",
    "radius",
    "pauseBtnSVG",
    "assign",
    "cooldown",
    "Random",
    "#14fc56",
    "burst-sm-2.mp3",
    "lineCap",
    "AudioContext",
    "burst2.mp3",
    ".auto-launch-label",
    "then",
    "fillRect",
    "playbackRateMax",
    "fullscreen",
    "size",
    "Allows\x20scaling\x20the\x20size\x20of\x20all\x20fireworks,\x20essentially\x20moving\x20you\x20closer\x20or\x20farther\x20away.\x20For\x20larger\x20shell\x20sizes,\x20it\x20can\x20be\x20convenient\x20to\x20decrease\x20the\x20scale\x20a\x20bit,\x20especially\x20on\x20phones\x20or\x20tablets.",
    "lift2.mp3",
    "min",
    "buffers",
    "glitterColor",
    "createGain",
    "prevX",
    "39720rgmShs",
    "Fullscreen",
    "longExposure",
    "playSound",
    "menu",
    "starLifeVariation",
    "resume",
    "<option\x20value=\x22",
    "medium",
    "ticker",
    "resize",
    "color",
    "finale",
    "pointerstart",
    "quality",
    "autoLaunch",
    ".menu__inner-wrap",
    "airDragHeavy",
    "lineTo",
    "notColor",
    "parse",
    "spinRadius",
    "Auto\x20Fire",
    ".long-exposure",
    "height",
    "Overall\x20graphics\x20quality.\x20If\x20the\x20animation\x20is\x20not\x20running\x20smoothly,\x20try\x20lowering\x20the\x20quality.\x20High\x20quality\x20greatly\x20increases\x20the\x20amount\x20of\x20sparks\x20rendered\x20and\x20may\x20cause\x20lag.",
    "pointAngle",
    "scaleFactor",
    "canvasContainer",
    "lineWidth",
    ".quality-ui",
    "visible",
    "28085020csgJjZ",
    "beginPath",
    "starDensity",
    "finaleMode",
    "launch",
    "Hide\x20Controls",
    ".hide-controls-label",
    "firework-container",
    "load",
    "setTransform",
    "Willow",
    "#1e7fff",
    "heavy",
    "746660tNFfOE",
    "sparkFreq",
    "createBufferSource",
    "random",
    "None",
    "map",
    "href",
    "35ElYlVH",
    "1.2",
    "active",
    "addColorStop",
    "light",
    "play",
    "clear",
    "hide",
    "helpModal",
    "randomChoice",
    "transitionTime",
    "ring",
    "clamp",
    "stroke",
    "crackle-sm-1.mp3",
    "_INVISIBLE_",
    "keys",
    "Toggles\x20fullscreen\x20mode.",
    "fullscreenchange",
    "playbackRateMin",
    "Launches\x20intense\x20bursts\x20of\x20fireworks.\x20May\x20cause\x20lag.\x20Requires\x20\x22Auto\x20Fire\x22\x20to\x20be\x20enabled.",
    "hardwareConcurrency",
    "helpModalBody",
    "1.1",
    "2eJXBmU",
    "pointermove",
    "strobe",
    "secondColor",
    "push",
    "shellSize",
    "textContent",
    "innerHeight",
    "configSize",
    "connect",
    "Normal",
    "preload",
    "keyCode",
    "spinAngle",
    "Shell\x20Type",
    ".fullscreen",
    "Hides\x20the\x20translucent\x20controls\x20along\x20the\x20top\x20of\x20the\x20screen.\x20Useful\x20for\x20screenshots,\x20or\x20just\x20a\x20more\x20seamless\x20experience.\x20While\x20hidden,\x20you\x20can\x20still\x20tap\x20the\x20top-right\x20corner\x20to\x20re-open\x20this\x20menu.",
    "shell",
    "#000",
    "life",
    ".help-modal__close-btn",
    "add",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/",
    "sqrt",
    "7071132jgqmjw",
    "pointDist",
    "helpModalCloseBtn",
    "sparkLife",
    "Gold",
    "The\x20type\x20of\x20firework\x20that\x20will\x20be\x20launched.\x20Select\x20\x22Random\x22\x20for\x20a\x20nice\x20assortment!",
    "Experimental\x20effect\x20that\x20preserves\x20long\x20streaks\x20of\x20light,\x20similar\x20to\x20leaving\x20a\x20camera\x20shutter\x20open.",
    "fullscreenEnabled",
    "Open\x20Shutter",
    "64072gKnwtC",
    "Dim",
    "starCount",
    "willow",
    "crossette",
    "rgba(0,\x200,\x200,\x20",
    "version\x20switch\x20should\x20be\x20exhaustive",
    "checked",
    "drawWidth",
    "Crysanthemum",
    "subscribe",
    "burst1.mp3",
    ".controls",
    "Falling\x20Leaves",
    "xlink:href",
    "#ffffff",
    "16\x22",
    "airDrag",
    "starLife",
    "notSame",
    "limitWhite",
    "Sound\x20of\x20type\x20\x22",
    "speedY",
    "hideControls",
    "623KJXbyC",
    "toFixed",
    "input",
    "_lastSmallBurstTime",
    "strobeFreq",
    "comet",
    "toggle",
    "spreadSize",
    "#icon-sound-",
    "label",
    "classList",
    "moveTo",
    "spinSpeed",
    "includes",
    ".shell-size",
    "High",
    ".quality-ui-label",
    "square",
    "soundBtnSVG",
    "setAttribute",
    "updateFrame",
    "round",
    "strokeStyle",
    "width",
    ".finale-mode",
    "webkitAudioContext",
    "forEach",
    "error",
    ".sound-btn",
    "fullscreenFormOption",
    "sparkColor",
    "prevY",
    "off",
    "ctx",
    "lastCalled",
    "clearRect",
    "getItem",
    "streamers",
    "sparkLifeVariation",
    "Invalid\x20shell\x20color.\x20Expected\x20string\x20or\x20array\x20of\x20strings,\x20but\x20got:\x20",
    ".stage-container",
    "remove",
    "log",
    "_pool",
    "soundEnabled",
    ".shell-type",
    ".shell-size-label",
    "string",
    "buffer",
    ".canvas-container",
    "colorChanged",
    "fillStyle",
    "crackle",
    "lift3.mp3",
    "_listeners",
    "reduce",
    "click",
    ".sky-lighting",
    "crackle1.mp3",
    "streamer",
    "returnInstance",
    "pop",
    ".fullscreen-label",
    "blur",
    "state",
    "Floral",
    "response",
    "3806145mIruOf",
    "gain",
    "substr",
    "menuOpen",
    ".pause-btn\x20use",
    "pointerend",
    "isArray",
    "_dispatch",
    "sparkSpeed",
    "onDeath",
    "addEventListener",
    "pauseAll",
    "start",
    "glitter",
    "lift1.mp3",
    "exitFullscreen",
    "querySelector",
    "Blue",
    "burstSmall",
    "sources",
    "2526741zOLJKz",
    "fullLife",
    "onCanvas",
    "innerHTML",
    "thick",
    ".help-modal__header",
    "cm_fireworks_data",
    "horsetail",
    "innerWidth",
    "globalAlpha",
    "source-over",
    "floor",
    "splice",
    "Illuminates\x20the\x20background\x20as\x20fireworks\x20explode.\x20If\x20the\x20background\x20looks\x20too\x20bright\x20on\x20your\x20screen,\x20try\x20setting\x20it\x20to\x20\x22Dim\x22\x20or\x20\x22None\x22.",
    "globalCompositeOperation",
    "burst",
    "pistilColor",
    "sin",
    "sparkTimer",
    "skyLighting",
    "persist",
    "Loaded\x20config\x20(schema\x20version\x20",
    "setState",
  ];
  _0x8330 = function () {
    return _0xa48083;
  };
  return _0x8330();
}
function createParticleArc(
  _0x50f66e,
  _0x26ea7a,
  _0x1cead5,
  _0x39d6bf,
  _0x1cf997
) {
  const _0xfebd92 = _0x1ddfe3,
    _0x2e66c5 = _0x26ea7a / _0x1cead5,
    _0x420478 = _0x50f66e + _0x26ea7a - _0x2e66c5 * 0.5;
  if (_0x420478 > _0x50f66e)
    for (
      let _0x4859b6 = _0x50f66e;
      _0x4859b6 < _0x420478;
      _0x4859b6 = _0x4859b6 + _0x2e66c5
    ) {
      _0x1cf997(_0x4859b6 + Math[_0xfebd92(0x187)]() * _0x2e66c5 * _0x39d6bf);
    }
  else
    for (
      let _0x180fcd = _0x50f66e;
      _0x180fcd > _0x420478;
      _0x180fcd = _0x180fcd + _0x2e66c5
    ) {
      _0x1cf997(_0x180fcd + Math[_0xfebd92(0x187)]() * _0x2e66c5 * _0x39d6bf);
    }
}
function createBurst(_0x59ec7e, _0x2ed280, _0x2b24ff = 0x0, _0x30468c = PI_2) {
  const _0x20fb40 = _0x1ddfe3,
    _0x126c96 = 0.5 * Math[_0x20fb40(0x1ba)](_0x59ec7e / Math["PI"]),
    _0x14a788 = 0x2 * _0x126c96 * Math["PI"],
    _0x46819a = _0x14a788 / 0x2;
  for (let _0x27dcdc = 0x0; _0x27dcdc <= _0x46819a; _0x27dcdc++) {
    const _0x4e5a2f = (_0x27dcdc / _0x46819a) * PI_HALF,
      _0x586146 = Math["cos"](_0x4e5a2f),
      _0x7cf4ee = _0x14a788 * _0x586146,
      _0x3195e6 = _0x7cf4ee * (_0x30468c / PI_2),
      _0xcf86cd = PI_2 / _0x7cf4ee,
      _0x25ca38 = Math[_0x20fb40(0x187)]() * _0xcf86cd + _0x2b24ff,
      _0x3b828d = _0xcf86cd * 0.33;
    for (let _0xd995e3 = 0x0; _0xd995e3 < _0x3195e6; _0xd995e3++) {
      const _0xc63a14 = Math[_0x20fb40(0x187)]() * _0x3b828d;
      let _0x5eaaf3 = _0xcf86cd * _0xd995e3 + _0x25ca38 + _0xc63a14;
      _0x2ed280(_0x5eaaf3, _0x586146);
    }
  }
}
function crossetteEffect(_0x1e1dc5) {
  const _0x2290f4 = Math["random"]() * PI_HALF;
  createParticleArc(_0x2290f4, PI_2, 0x4, 0.5, (_0x414c34) => {
    const _0x4f380c = _0x3c36;
    Star[_0x4f380c(0x1b8)](
      _0x1e1dc5["x"],
      _0x1e1dc5["y"],
      _0x1e1dc5[_0x4f380c(0x162)],
      _0x414c34,
      Math[_0x4f380c(0x187)]() * 0.6 + 0.75,
      0x258
    );
  });
}
function floralEffect(_0x360246) {
  const _0x34cd8a = _0x1ddfe3,
    _0x41ef16 = 0xc + 0x6 * quality;
  createBurst(_0x41ef16, (_0x1ca227, _0x226bd8) => {
    const _0x432148 = _0x3c36;
    Star[_0x432148(0x1b8)](
      _0x360246["x"],
      _0x360246["y"],
      _0x360246["color"],
      _0x1ca227,
      _0x226bd8 * 2.4,
      0x3e8 + Math[_0x432148(0x187)]() * 0x12c,
      _0x360246[_0x432148(0x130)],
      _0x360246["speedY"]
    );
  }),
    BurstFlash[_0x34cd8a(0x1b8)](_0x360246["x"], _0x360246["y"], 0x2e),
    soundManager[_0x34cd8a(0x15a)](_0x34cd8a(0xfb));
}
function fallingLeavesEffect(_0x56feb2) {
  const _0x30b0fd = _0x1ddfe3;
  createBurst(0x7, (_0x532cfc, _0x590be6) => {
    const _0x532f85 = _0x3c36,
      _0x6b5afc = Star[_0x532f85(0x1b8)](
        _0x56feb2["x"],
        _0x56feb2["y"],
        INVISIBLE,
        _0x532cfc,
        _0x590be6 * 2.4,
        0x960 + Math[_0x532f85(0x187)]() * 0x258,
        _0x56feb2["speedX"],
        _0x56feb2[_0x532f85(0xa4)]
      );
    (_0x6b5afc[_0x532f85(0xc4)] = COLOR[_0x532f85(0x1bf)]),
      (_0x6b5afc[_0x532f85(0x185)] = 0x90 / quality),
      (_0x6b5afc[_0x532f85(0xf1)] = 0.28),
      (_0x6b5afc["sparkLife"] = 0x2ee),
      (_0x6b5afc[_0x532f85(0xcc)] = 3.2);
  }),
    BurstFlash[_0x30b0fd(0x1b8)](_0x56feb2["x"], _0x56feb2["y"], 0x2e),
    soundManager[_0x30b0fd(0x15a)](_0x30b0fd(0xfb));
}
function crackleEffect(_0x5ba4b7) {
  const _0x4a43ee = isHighQuality ? 0x20 : 0x10;
  createParticleArc(0x0, PI_2, _0x4a43ee, 1.8, (_0x27cca0) => {
    const _0x1dddd3 = _0x3c36;
    Spark["add"](
      _0x5ba4b7["x"],
      _0x5ba4b7["y"],
      COLOR[_0x1dddd3(0x1bf)],
      _0x27cca0,
      Math["pow"](Math[_0x1dddd3(0x187)](), 0.45) * 2.4,
      0x12c + Math[_0x1dddd3(0x187)]() * 0xc8
    );
  });
}
class Shell {
  constructor(_0x3750a8) {
    const _0x48e289 = _0x1ddfe3;
    Object[_0x48e289(0x142)](this, _0x3750a8),
      (this[_0x48e289(0x15c)] = _0x3750a8["starLifeVariation"] || 0.125),
      (this[_0x48e289(0x162)] = _0x3750a8[_0x48e289(0x162)] || randomColor()),
      (this[_0x48e289(0x154)] = _0x3750a8[_0x48e289(0x154)] || this["color"]);
    if (!this[_0x48e289(0x90)]) {
      const _0x130b6a = _0x3750a8[_0x48e289(0x179)] || 0x1,
        _0x3a9afa = this[_0x48e289(0xad)] / 0x36;
      this["starCount"] = Math["max"](0x6, _0x3a9afa * _0x3a9afa * _0x130b6a);
    }
  }
  [_0x1ddfe3(0x17b)](_0x12c243, _0x5a3760) {
    const _0x482a5a = _0x1ddfe3,
      _0x42711b = stageW,
      _0x3c554d = stageH,
      _0x325cc3 = 0x3c,
      _0x3b0104 = 0x32,
      _0x30c5f4 = 0.45,
      _0x17e7a9 = _0x3c554d - _0x3c554d * _0x30c5f4,
      _0x287f55 = _0x12c243 * (_0x42711b - _0x325cc3 * 0x2) + _0x325cc3,
      _0x22f713 = _0x3c554d,
      _0x293831 = _0x17e7a9 - _0x5a3760 * (_0x17e7a9 - _0x3b0104),
      _0x19b902 = _0x22f713 - _0x293831,
      _0xbe0454 = Math[_0x482a5a(0x135)](_0x19b902 * 0.04, 0.64),
      _0xb9978 = (this[_0x482a5a(0xab)] = Star[_0x482a5a(0x1b8)](
        _0x287f55,
        _0x22f713,
        typeof this[_0x482a5a(0x162)] === _0x482a5a(0xd5) &&
          this[_0x482a5a(0x162)] !== _0x482a5a(0x187)
          ? this[_0x482a5a(0x162)]
          : COLOR[_0x482a5a(0x12c)],
        Math["PI"],
        _0xbe0454 * (this[_0x482a5a(0x104)] ? 1.2 : 0x1),
        _0xbe0454 * (this[_0x482a5a(0x104)] ? 0x64 : 0x190)
      ));
    (_0xb9978[_0x482a5a(0x183)] = !![]),
      (_0xb9978[_0x482a5a(0x16c)] = MyMath[_0x482a5a(0x187)](0.32, 0.85)),
      (_0xb9978[_0x482a5a(0x185)] = 0x20 / quality);
    if (isHighQuality) _0xb9978["sparkFreq"] = 0x8;
    (_0xb9978[_0x482a5a(0x1be)] = 0x140),
      (_0xb9978["sparkLifeVariation"] = 0x3),
      (this[_0x482a5a(0xf6)] === _0x482a5a(0x91) || this[_0x482a5a(0x13e)]) &&
        ((_0xb9978["sparkFreq"] = 0x14 / quality),
        (_0xb9978[_0x482a5a(0xf1)] = 0.5),
        (_0xb9978["sparkLife"] = 0x1f4)),
      this["color"] === INVISIBLE &&
        (_0xb9978[_0x482a5a(0xc4)] = COLOR[_0x482a5a(0x1bf)]),
      Math[_0x482a5a(0x187)]() > 0.4 &&
        !this[_0x482a5a(0x104)] &&
        ((_0xb9978[_0x482a5a(0x1a6)] = INVISIBLE),
        (_0xb9978[_0x482a5a(0x195)] =
          Math[_0x482a5a(0x135)](Math[_0x482a5a(0x187)](), 1.5) * 0x2bc +
          0x1f4)),
      (_0xb9978[_0x482a5a(0xf2)] = (_0xc5f231) =>
        this["burst"](_0xc5f231["x"], _0xc5f231["y"])),
      soundManager[_0x482a5a(0x15a)]("lift");
  }
  [_0x1ddfe3(0x10c)](_0x1e5b2d, _0x24abb3) {
    const _0x5994d4 = _0x1ddfe3,
      _0x40abd9 = this[_0x5994d4(0xad)] / 0x60;
    let _0x218e24,
      _0x3cee8d,
      _0xf9ce66,
      _0x40439e,
      _0x44064b,
      _0x5bb9e0 = 0.25,
      _0x5675b8 = ![];
    if (this[_0x5994d4(0x92)])
      _0x3cee8d = (_0x9034e2) => {
        !_0x5675b8 &&
          (soundManager["playSound"]("crackleSmall"), (_0x5675b8 = !![])),
          crossetteEffect(_0x9034e2);
      };
    if (this["crackle"])
      _0x3cee8d = (_0x3dadfe) => {
        const _0x1ccdcb = _0x5994d4;
        !_0x5675b8 &&
          (soundManager[_0x1ccdcb(0x15a)](_0x1ccdcb(0xda)), (_0x5675b8 = !![])),
          crackleEffect(_0x3dadfe);
      };
    if (this["floral"]) _0x3cee8d = floralEffect;
    if (this[_0x5994d4(0x13e)]) _0x3cee8d = fallingLeavesEffect;
    if (this[_0x5994d4(0xf6)] === _0x5994d4(0x18f))
      (_0xf9ce66 = 0x190),
        (_0x40439e = 0.3),
        (_0x44064b = 0x12c),
        (_0x5bb9e0 = 0x2);
    else {
      if (this[_0x5994d4(0xf6)] === _0x5994d4(0x15f))
        (_0xf9ce66 = 0xc8),
          (_0x40439e = 0.44),
          (_0x44064b = 0x2bc),
          (_0x5bb9e0 = 0x2);
      else {
        if (this[_0x5994d4(0xf6)] === _0x5994d4(0x183))
          (_0xf9ce66 = 0x50),
            (_0x40439e = 0.8),
            (_0x44064b = 0x578),
            (_0x5bb9e0 = 0x2);
        else {
          if (this[_0x5994d4(0xf6)] === _0x5994d4(0x101))
            (_0xf9ce66 = 0x10),
              (_0x40439e = isHighQuality ? 1.65 : 1.5),
              (_0x44064b = 0x578),
              (_0x5bb9e0 = 0x3);
          else {
            if (this[_0x5994d4(0xf6)] === "streamer")
              (_0xf9ce66 = 0x20),
                (_0x40439e = 1.05),
                (_0x44064b = 0x26c),
                (_0x5bb9e0 = 0x2);
            else
              this[_0x5994d4(0xf6)] === _0x5994d4(0x91) &&
                ((_0xf9ce66 = 0x78),
                (_0x40439e = 0.34),
                (_0x44064b = 0x578),
                (_0x5bb9e0 = 3.8));
          }
        }
      }
    }
    _0xf9ce66 = _0xf9ce66 / quality;
    let _0x4f2ff1 = !![];
    const _0x2f70c9 = (_0x52790f, _0x6f67f8) => {
      const _0x49fe70 = _0x5994d4,
        _0xb136d3 = this[_0x49fe70(0xad)] / 0x708,
        _0x617586 = Star["add"](
          _0x1e5b2d,
          _0x24abb3,
          _0x218e24 || randomColor(),
          _0x52790f,
          _0x6f67f8 * _0x40abd9,
          this[_0x49fe70(0xa0)] +
            Math[_0x49fe70(0x187)]() *
              this["starLife"] *
              this[_0x49fe70(0x15c)],
          this[_0x49fe70(0x104)]
            ? this[_0x49fe70(0xab)] && this[_0x49fe70(0xab)][_0x49fe70(0x130)]
            : 0x0,
          this[_0x49fe70(0x104)]
            ? this[_0x49fe70(0xab)] && this[_0x49fe70(0xab)]["speedY"]
            : -_0xb136d3
        );
      this[_0x49fe70(0x1a6)] &&
        ((_0x617586[_0x49fe70(0x195)] =
          this[_0x49fe70(0xa0)] * (Math[_0x49fe70(0x187)]() * 0.05 + 0.32)),
        (_0x617586[_0x49fe70(0x1a6)] = this[_0x49fe70(0x1a6)])),
        this[_0x49fe70(0x1a5)] &&
          ((_0x617586[_0x49fe70(0x195)] =
            this[_0x49fe70(0xa0)] * (Math[_0x49fe70(0x187)]() * 0.08 + 0.46)),
          (_0x617586[_0x49fe70(0x1a5)] = !![]),
          (_0x617586[_0x49fe70(0xaa)] = Math[_0x49fe70(0x187)]() * 0x14 + 0x28),
          this["strobeColor"] &&
            (_0x617586["secondColor"] = this[_0x49fe70(0x13d)])),
        (_0x617586["onDeath"] = _0x3cee8d),
        this[_0x49fe70(0xf6)] &&
          ((_0x617586["sparkFreq"] = _0xf9ce66),
          (_0x617586[_0x49fe70(0xf1)] = _0x40439e),
          (_0x617586[_0x49fe70(0x1be)] = _0x44064b),
          (_0x617586["sparkLifeVariation"] = _0x5bb9e0),
          (_0x617586[_0x49fe70(0xc4)] = this[_0x49fe70(0x154)]),
          (_0x617586[_0x49fe70(0x10f)] =
            Math["random"]() * _0x617586["sparkFreq"]));
    };
    if (typeof this[_0x5994d4(0x162)] === "string") {
      this[_0x5994d4(0x162)] === _0x5994d4(0x187)
        ? (_0x218e24 = null)
        : (_0x218e24 = this[_0x5994d4(0x162)]);
      if (this[_0x5994d4(0x196)]) {
        const _0x2c9e98 = Math[_0x5994d4(0x187)]() * Math["PI"],
          _0x4f40a7 =
            Math[_0x5994d4(0x135)](Math["random"](), 0x2) * 0.85 + 0.15;
        createParticleArc(0x0, PI_2, this["starCount"], 0x0, (_0x286966) => {
          const _0x363a43 = _0x5994d4,
            _0x1a8c32 =
              Math[_0x363a43(0x10e)](_0x286966) * _0x40abd9 * _0x4f40a7,
            _0x455e0e = Math["cos"](_0x286966) * _0x40abd9,
            _0x4ecaa5 = MyMath[_0x363a43(0x1bc)](
              0x0,
              0x0,
              _0x1a8c32,
              _0x455e0e
            ),
            _0x2d676a =
              MyMath[_0x363a43(0x171)](0x0, 0x0, _0x1a8c32, _0x455e0e) +
              _0x2c9e98,
            _0x584a4f = Star[_0x363a43(0x1b8)](
              _0x1e5b2d,
              _0x24abb3,
              _0x218e24,
              _0x2d676a,
              _0x4ecaa5,
              this["starLife"] +
                Math[_0x363a43(0x187)]() *
                  this[_0x363a43(0xa0)] *
                  this[_0x363a43(0x15c)]
            );
          this[_0x363a43(0xf6)] &&
            ((_0x584a4f[_0x363a43(0x185)] = _0xf9ce66),
            (_0x584a4f[_0x363a43(0xf1)] = _0x40439e),
            (_0x584a4f[_0x363a43(0x1be)] = _0x44064b),
            (_0x584a4f[_0x363a43(0xcc)] = _0x5bb9e0),
            (_0x584a4f[_0x363a43(0xc4)] = this[_0x363a43(0x154)]),
            (_0x584a4f[_0x363a43(0x10f)] =
              Math[_0x363a43(0x187)]() * _0x584a4f[_0x363a43(0x185)]));
        });
      } else createBurst(this[_0x5994d4(0x90)], _0x2f70c9);
    } else {
      if (Array[_0x5994d4(0xef)](this[_0x5994d4(0x162)])) {
        if (Math[_0x5994d4(0x187)]() < 0.5) {
          const _0x1c194e = Math[_0x5994d4(0x187)]() * Math["PI"],
            _0x9322ff = _0x1c194e + Math["PI"],
            _0x3d6f85 = Math["PI"];
          (_0x218e24 = this["color"][0x0]),
            createBurst(this[_0x5994d4(0x90)], _0x2f70c9, _0x1c194e, _0x3d6f85),
            (_0x218e24 = this[_0x5994d4(0x162)][0x1]),
            createBurst(this["starCount"], _0x2f70c9, _0x9322ff, _0x3d6f85);
        } else
          (_0x218e24 = this[_0x5994d4(0x162)][0x0]),
            createBurst(this[_0x5994d4(0x90)] / 0x2, _0x2f70c9),
            (_0x218e24 = this[_0x5994d4(0x162)][0x1]),
            createBurst(this["starCount"] / 0x2, _0x2f70c9);
      } else throw new Error(_0x5994d4(0xcd) + this[_0x5994d4(0x162)]);
    }
    if (this[_0x5994d4(0x114)]) {
      const _0x95ee24 = new Shell({
        spreadSize: this[_0x5994d4(0xad)] * 0.5,
        starLife: this["starLife"] * 0.6,
        starLifeVariation: this[_0x5994d4(0x15c)],
        starDensity: 1.4,
        color: this[_0x5994d4(0x10d)],
        glitter: _0x5994d4(0x18f),
        glitterColor:
          this[_0x5994d4(0x10d)] === COLOR["Gold"]
            ? COLOR["Gold"]
            : COLOR[_0x5994d4(0x12c)],
      });
      _0x95ee24[_0x5994d4(0x10c)](_0x1e5b2d, _0x24abb3);
    }
    if (this[_0x5994d4(0xcb)]) {
      const _0x330d5e = new Shell({
        spreadSize: this["spreadSize"] * 0.9,
        starLife: this[_0x5994d4(0xa0)] * 0.8,
        starLifeVariation: this["starLifeVariation"],
        starCount: Math[_0x5994d4(0x108)](
          Math[_0x5994d4(0x11d)](0x6, this[_0x5994d4(0xad)] / 0x2d)
        ),
        color: COLOR[_0x5994d4(0x12c)],
        glitter: _0x5994d4(0xe1),
      });
      _0x330d5e[_0x5994d4(0x10c)](_0x1e5b2d, _0x24abb3);
    }
    BurstFlash[_0x5994d4(0x1b8)](
      _0x1e5b2d,
      _0x24abb3,
      this[_0x5994d4(0xad)] / 0x4
    );
    if (this[_0x5994d4(0xab)]) {
      const _0x363227 = 0x2,
        _0x455cb8 = Math[_0x5994d4(0x152)](
          _0x363227,
          shellSizeSelector() - this[_0x5994d4(0x1a8)]
        ),
        _0x2dbc61 = (0x1 - _0x455cb8 / _0x363227) * 0.3 + 0.7;
      soundManager[_0x5994d4(0x15a)](_0x5994d4(0x10c), _0x2dbc61);
    }
  }
}
const BurstFlash = {
  active: [],
  _pool: [],
  _new() {
    return {};
  },
  add(_0x232c47, _0x3e7b44, _0x3736ab) {
    const _0x376eec = _0x1ddfe3,
      _0x53abd6 = this[_0x376eec(0xd1)][_0x376eec(0xe3)]() || this["_new"]();
    return (
      (_0x53abd6["x"] = _0x232c47),
      (_0x53abd6["y"] = _0x3e7b44),
      (_0x53abd6["radius"] = _0x3736ab),
      this[_0x376eec(0x18d)][_0x376eec(0x1a7)](_0x53abd6),
      _0x53abd6
    );
  },
  returnInstance(_0x2523ca) {
    const _0x4021ed = _0x1ddfe3;
    this["_pool"][_0x4021ed(0x1a7)](_0x2523ca);
  },
};
function createParticleCollection() {
  const _0x575706 = _0x1ddfe3,
    _0x576167 = {};
  return (
    COLOR_CODES_W_INVIS[_0x575706(0xc0)]((_0x4dea9a) => {
      _0x576167[_0x4dea9a] = [];
    }),
    _0x576167
  );
}
const Star = {
    drawWidth: 0x3,
    airDrag: 0.98,
    airDragHeavy: 0.992,
    active: createParticleCollection(),
    _pool: [],
    _new() {
      return {};
    },
    add(
      _0x23a955,
      _0x284c50,
      _0x48f6d0,
      _0x56e38d,
      _0x431a0a,
      _0x59364f,
      _0x175ac9,
      _0x1354b4
    ) {
      const _0x298ec3 = _0x1ddfe3,
        _0x11067f = this["_pool"][_0x298ec3(0xe3)]() || this["_new"]();
      return (
        (_0x11067f["visible"] = !![]),
        (_0x11067f[_0x298ec3(0x183)] = ![]),
        (_0x11067f["x"] = _0x23a955),
        (_0x11067f["y"] = _0x284c50),
        (_0x11067f[_0x298ec3(0x156)] = _0x23a955),
        (_0x11067f[_0x298ec3(0xc5)] = _0x284c50),
        (_0x11067f["color"] = _0x48f6d0),
        (_0x11067f[_0x298ec3(0x130)] =
          Math[_0x298ec3(0x10e)](_0x56e38d) * _0x431a0a + (_0x175ac9 || 0x0)),
        (_0x11067f[_0x298ec3(0xa4)] =
          Math[_0x298ec3(0x129)](_0x56e38d) * _0x431a0a + (_0x1354b4 || 0x0)),
        (_0x11067f[_0x298ec3(0x1b6)] = _0x59364f),
        (_0x11067f[_0x298ec3(0xfe)] = _0x59364f),
        (_0x11067f[_0x298ec3(0x1b0)] = Math[_0x298ec3(0x187)]() * PI_2),
        (_0x11067f[_0x298ec3(0xb2)] = 0.8),
        (_0x11067f[_0x298ec3(0x16c)] = 0x0),
        (_0x11067f[_0x298ec3(0x185)] = 0x0),
        (_0x11067f["sparkSpeed"] = 0x1),
        (_0x11067f[_0x298ec3(0x10f)] = 0x0),
        (_0x11067f["sparkColor"] = _0x48f6d0),
        (_0x11067f[_0x298ec3(0x1be)] = 0x2ee),
        (_0x11067f[_0x298ec3(0xcc)] = 0.25),
        (_0x11067f["strobe"] = ![]),
        this[_0x298ec3(0x18d)][_0x48f6d0][_0x298ec3(0x1a7)](_0x11067f),
        _0x11067f
      );
    },
    returnInstance(_0x2a3cef) {
      const _0x334663 = _0x1ddfe3;
      _0x2a3cef[_0x334663(0xf2)] && _0x2a3cef[_0x334663(0xf2)](_0x2a3cef),
        (_0x2a3cef[_0x334663(0xf2)] = null),
        (_0x2a3cef["secondColor"] = null),
        (_0x2a3cef[_0x334663(0x195)] = 0x0),
        (_0x2a3cef["colorChanged"] = ![]),
        this[_0x334663(0xd1)]["push"](_0x2a3cef);
    },
  },
  Spark = {
    drawWidth: 0x0,
    airDrag: 0.9,
    active: createParticleCollection(),
    _pool: [],
    _new() {
      return {};
    },
    add(_0x50477b, _0x4c445b, _0x29e15a, _0x4d8a30, _0x25e5e0, _0x4ece39) {
      const _0x5082a5 = _0x1ddfe3,
        _0x4e5f50 = this[_0x5082a5(0xd1)]["pop"]() || this["_new"]();
      return (
        (_0x4e5f50["x"] = _0x50477b),
        (_0x4e5f50["y"] = _0x4c445b),
        (_0x4e5f50[_0x5082a5(0x156)] = _0x50477b),
        (_0x4e5f50[_0x5082a5(0xc5)] = _0x4c445b),
        (_0x4e5f50[_0x5082a5(0x162)] = _0x29e15a),
        (_0x4e5f50[_0x5082a5(0x130)] =
          Math[_0x5082a5(0x10e)](_0x4d8a30) * _0x25e5e0),
        (_0x4e5f50["speedY"] = Math[_0x5082a5(0x129)](_0x4d8a30) * _0x25e5e0),
        (_0x4e5f50["life"] = _0x4ece39),
        this["active"][_0x29e15a][_0x5082a5(0x1a7)](_0x4e5f50),
        _0x4e5f50
      );
    },
    returnInstance(_0x153ef4) {
      const _0x53daaa = _0x1ddfe3;
      this[_0x53daaa(0xd1)][_0x53daaa(0x1a7)](_0x153ef4);
    },
  },
  soundManager = {
    baseURL: _0x1ddfe3(0x1b9),
    ctx: new (window[_0x1ddfe3(0x148)] || window[_0x1ddfe3(0xbf)])(),
    sources: {
      lift: {
        volume: 0x1,
        playbackRateMin: 0.85,
        playbackRateMax: 0.95,
        fileNames: [_0x1ddfe3(0xf7), _0x1ddfe3(0x151), _0x1ddfe3(0xdb)],
      },
      burst: {
        volume: 0x1,
        playbackRateMin: 0.8,
        playbackRateMax: 0.9,
        fileNames: [_0x1ddfe3(0x99), _0x1ddfe3(0x149)],
      },
      burstSmall: {
        volume: 0.25,
        playbackRateMin: 0.8,
        playbackRateMax: 0x1,
        fileNames: ["burst-sm-1.mp3", _0x1ddfe3(0x146)],
      },
      crackle: {
        volume: 0.2,
        playbackRateMin: 0x1,
        playbackRateMax: 0x1,
        fileNames: [_0x1ddfe3(0xe0)],
      },
      crackleSmall: {
        volume: 0.3,
        playbackRateMin: 0x1,
        playbackRateMax: 0x1,
        fileNames: [_0x1ddfe3(0x199)],
      },
    },
    preload() {
      const _0x27fbfa = _0x1ddfe3,
        _0x488abe = [];
      function _0x264b97(_0xa36a1d) {
        const _0x574921 = _0x3c36;
        if (
          _0xa36a1d[_0x574921(0x13c)] >= 0xc8 &&
          _0xa36a1d[_0x574921(0x13c)] < 0x12c
        )
          return _0xa36a1d;
        const _0x370db6 = new Error(_0xa36a1d["statusText"]);
        _0x370db6[_0x574921(0xe8)] = _0xa36a1d;
        throw _0x370db6;
      }
      const _0x4d8a55 = Object[_0x27fbfa(0x19b)](this[_0x27fbfa(0xfc)]);
      return (
        _0x4d8a55[_0x27fbfa(0xc0)]((_0x57d3da) => {
          const _0x2a93c9 = _0x27fbfa,
            _0x45b198 = this[_0x2a93c9(0xfc)][_0x57d3da],
            { fileNames: _0x365a26 } = _0x45b198,
            _0x3d66c3 = [];
          _0x365a26[_0x2a93c9(0xc0)]((_0x48f3b2) => {
            const _0x3a4d04 = _0x2a93c9,
              _0x5ef87e = this["baseURL"] + _0x48f3b2,
              _0x13cbab = fetch(_0x5ef87e)
                ["then"](_0x264b97)
                ["then"]((_0x120ff6) => _0x120ff6[_0x3a4d04(0x12b)]())
                [_0x3a4d04(0x14b)](
                  (_0x5ed1ca) =>
                    new Promise((_0x4b12fb) => {
                      const _0x33a8df = _0x3a4d04;
                      this[_0x33a8df(0xc7)]["decodeAudioData"](
                        _0x5ed1ca,
                        _0x4b12fb
                      );
                    })
                );
            _0x3d66c3[_0x3a4d04(0x1a7)](_0x13cbab),
              _0x488abe[_0x3a4d04(0x1a7)](_0x13cbab);
          }),
            Promise[_0x2a93c9(0x122)](_0x3d66c3)[_0x2a93c9(0x14b)](
              (_0x323d04) => {
                _0x45b198["buffers"] = _0x323d04;
              }
            );
        }),
        Promise[_0x27fbfa(0x122)](_0x488abe)
      );
    },
    pauseAll() {
      const _0x4d5154 = _0x1ddfe3;
      this[_0x4d5154(0xc7)][_0x4d5154(0x120)]();
    },
    resumeAll() {
      const _0x67755c = _0x1ddfe3;
      this[_0x67755c(0x15a)]("lift", 0x0),
        setTimeout(() => {
          const _0x5eea68 = _0x67755c;
          this[_0x5eea68(0xc7)][_0x5eea68(0x15d)]();
        }, 0xfa);
    },
    _lastSmallBurstTime: 0x0,
    playSound(_0x33b96a, _0x261e92 = 0x1) {
      const _0x204089 = _0x1ddfe3;
      _0x261e92 = MyMath[_0x204089(0x197)](_0x261e92, 0x0, 0x1);
      if (!canPlaySoundSelector() || simSpeed < 0.95) return;
      if (_0x33b96a === _0x204089(0xfb)) {
        const _0x2b4bb8 = Date[_0x204089(0x11b)]();
        if (_0x2b4bb8 - this[_0x204089(0xa9)] < 0x14) return;
        this["_lastSmallBurstTime"] = _0x2b4bb8;
      }
      const _0x266fad = this["sources"][_0x33b96a];
      if (!_0x266fad)
        throw new Error(
          _0x204089(0xa3) + _0x33b96a + "\x22\x20doesn\x27t\x20exist."
        );
      const _0x166993 = _0x266fad["volume"],
        _0x59e45a = MyMath[_0x204089(0x187)](
          _0x266fad[_0x204089(0x19e)],
          _0x266fad[_0x204089(0x14d)]
        ),
        _0x4078f6 = _0x166993 * _0x261e92,
        _0x9f4086 = _0x59e45a * (0x2 - _0x261e92),
        _0x2e1ef0 = this[_0x204089(0xc7)][_0x204089(0x155)]();
      _0x2e1ef0[_0x204089(0xea)]["value"] = _0x4078f6;
      const _0x311e9a = MyMath[_0x204089(0x194)](_0x266fad[_0x204089(0x153)]),
        _0x3531cd = this["ctx"][_0x204089(0x186)]();
      (_0x3531cd["playbackRate"]["value"] = _0x9f4086),
        (_0x3531cd[_0x204089(0xd6)] = _0x311e9a),
        _0x3531cd[_0x204089(0x1ac)](_0x2e1ef0),
        _0x2e1ef0[_0x204089(0x1ac)](this["ctx"]["destination"]),
        _0x3531cd[_0x204089(0xf5)](0x0);
    },
  };
function setLoadingStatus(_0x496cf3) {}
IS_HEADER
  ? init()
  : (setLoadingStatus(_0x1ddfe3(0x118)),
    setTimeout(() => {
      const _0x31b5f4 = _0x1ddfe3;
      soundManager[_0x31b5f4(0x1ae)]()[_0x31b5f4(0x14b)](init, (_0x377739) => {
        return init(), Promise["reject"](_0x377739);
      });
    }, 0x0));
setTimeout(function () {
  const _0x35c7d3 = _0x1ddfe3;
  let _0x409db5 = document["getElementById"](_0x35c7d3(0x17e)),
    _0x5f05ff = _0x409db5["getAttribute"]("hidden");
  _0x409db5["removeAttribute"]("hidden");
}, 0x2328);
1;
