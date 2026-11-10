// ==========================================
// 1. 연작 아카이브 마스터 데이터셋 (13점)
// ==========================================
const exhibitionData = [
  {
    id: 1,
    title: "중첩된 온기 I: 첫 등교길",
    aspect: "landscape",
    weavingType: "flip", // 1번: 마우스가 닿은 개별 타일만 플립
    isLenticular: false, // 렌티큘러 탭 제외
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "가방을 메고 앞서 걷던 아이의 뒷모습. 손길이 닿은 자리마다 흩어진 기억의 조각들이 하나씩 뒤집혀 나타납니다.",
    pastImg: "assets/images/work-01-past.webp",
    presentImg: "assets/images/work-01-present.webp"
  },
  {
    id: 2,
    title: "중첩된 온기 II: 생일 고깔모자",
    aspect: "landscape",
    weavingType: "flip",
    isLenticular: true,
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "아이의 장난기 어린 웃음과 어른이 된 나의 미소가 렌티큘러 렌즈 아래 겹쳐집니다.",
    pastImg: "assets/images/work-02-past.webp",
    presentImg: "assets/images/work-02-present.webp"
  },
  {
    id: 3,
    title: "중첩된 온기 III: 바다를 가리키며",
    aspect: "landscape",
    weavingType: "depth",
    isLenticular: true,
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "아버지의 시선 너머 수평선을 마주보던 시간의 층위를 포착합니다.",
    pastImg: "assets/images/work-03-past.webp",
    presentImg: "assets/images/work-03-present.webp"
  },
  {
    id: 4,
    title: "중첩된 온기 IV: 바둑판 디졸브",
    aspect: "portrait",
    weavingType: "dissolve", // 4번: 바둑판 상호 디졸브
    isLenticular: false, // 렌티큘러 탭 제외
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "바둑판 형태로 직조된 과거와 현재의 타일들이 시선과 기울기에 따라 서로 부드럽게 스며들며 교차합니다.",
    pastImg: "assets/images/work-04-past.webp",
    presentImg: "assets/images/work-04-present.webp"
  },
  {
    id: 5,
    title: "중첩된 온기 V: 연작 5",
    aspect: "landscape",
    weavingType: "slide",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "기억의 파편들이 가로와 세로의 띠가 되어 결합합니다.",
    pastImg: "assets/images/work-05-past.webp",
    presentImg: "assets/images/work-05-present.webp"
  },
  {
    id: 6,
    title: "중첩된 온기 VI: 연작 6",
    aspect: "landscape",
    weavingType: "depth",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "손으로 엮은 인화지의 물질적 질감을 화면 위에 재현합니다.",
    pastImg: "assets/images/work-06-past.webp",
    presentImg: "assets/images/work-06-present.webp"
  },
  {
    id: 7,
    title: "중첩된 온기 VII: 연작 7",
    aspect: "landscape",
    weavingType: "flip",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-07-past.webp",
    presentImg: "assets/images/work-07-present.webp"
  },
  {
    id: 8,
    title: "중첩된 온기 VIII: 연작 8",
    aspect: "landscape",
    weavingType: "slide",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-08-past.webp",
    presentImg: "assets/images/work-08-present.webp"
  },
  {
    id: 9,
    title: "중첩된 온기 IX: 직조 해체와 결합",
    aspect: "landscape",
    weavingType: "slide", // 9번: 슬라이딩 직조 해체 결합
    isLenticular: false, // 렌티큘러 탭 제외
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "분리되어 흩어져 있던 가로와 세로의 시간 띠들이 관람자의 시점 각도에 맞춰 단단히 맞물려 완성됩니다.",
    pastImg: "assets/images/work-09-past.webp",
    presentImg: "assets/images/work-09-present.webp"
  },
  {
    id: 10,
    title: "중첩된 온기 X: 연작 10",
    aspect: "portrait",
    weavingType: "flip",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-10-past.webp",
    presentImg: "assets/images/work-10-present.webp"
  },
  {
    id: 11,
    title: "중첩된 온기 XI: 요철의 깊이",
    aspect: "portrait",
    weavingType: "depth", // 11번: 종이 요철 틸트
    isLenticular: false, // 렌티큘러 탭 제외
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "교차된 인화지 조각 사이로 생기는 실제 그림자와 입체적인 Z축 깊이감을 보여줍니다.",
    pastImg: "assets/images/work-11-past.webp",
    presentImg: "assets/images/work-11-present.webp"
  },
  {
    id: 12,
    title: "중첩된 온기 XII: 연작 12",
    aspect: "landscape",
    weavingType: "flip",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-12-past.webp",
    presentImg: "assets/images/work-12-present.webp"
  },
  {
    id: 13,
    title: "중첩된 온기 XIII: 마지막 시선",
    aspect: "landscape",
    weavingType: "depth",
    isLenticular: true,
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "두 시간대가 완전히 교차하며 하나의 자화상으로 응고됩니다.",
    pastImg: "assets/images/work-13-past.webp",
    presentImg: "assets/images/work-13-present.webp"
  }
];

// ==========================================
// 2. DOM 요소 연결
// ==========================================
const lenticularFrame = document.getElementById("lenticular-frame");
const weavingFrame = document.getElementById("weaving-frame");
const layerPast = document.getElementById("layer-past");
const layerPresent = document.getElementById("layer-present");
const layerGlare = document.getElementById("layer-glare");
const indicatorPin = document.getElementById("indicator-pin");

const workIndexEl = document.getElementById("work-index");
const workTitleEl = document.getElementById("work-title");
const workMetaEl = document.getElementById("work-meta");
const workDescEl = document.getElementById("work-desc");
const trayContainer = document.getElementById("thumbnail-tray");

const tabLenticular = document.getElementById("tab-lenticular");
const tabWeaving = document.getElementById("tab-weaving");

// ==========================================
// 3. 상태 관리 변수
// ==========================================
let currentMode = "lenticular"; // "lenticular" | "weaving"
let currentIndex = 1; // 2번 작품(id: 2)부터 기본 표시
let currentProgress = 0.5;
let targetProgress = 0.5;
let isDragging = false;
let startX = 0;
let baseProgress = 0.5;
let isTouching = false;
let gyroResumeTimeout = null;

// ==========================================
// 4. 모드 전환 및 1, 4, 9, 11 필터링
// ==========================================
if (tabLenticular && tabWeaving) {
  tabLenticular.addEventListener("click", () => switchMode("lenticular"));
  tabWeaving.addEventListener("click", () => switchMode("weaving"));
}

function getFilteredData() {
  if (currentMode === "lenticular") {
    return exhibitionData.filter(item => item.isLenticular);
  } else {
    return exhibitionData;
  }
}

function switchMode(mode) {
  currentMode = mode;
  tabLenticular.classList.toggle("active", mode === "lenticular");
  tabWeaving.classList.toggle("active", mode === "weaving");

  const filtered = getFilteredData();
  const isCurrentValid = filtered.some(item => item.id === exhibitionData[currentIndex].id);
  if (!isCurrentValid) {
    currentIndex = exhibitionData.findIndex(item => item.id === filtered[0].id);
  }

  renderTray();
  loadCurrentArtwork();
}

function loadCurrentArtwork() {
  const item = exhibitionData[currentIndex];
  const filtered = getFilteredData();
  const currentFilteredPos = filtered.findIndex(w => w.id === item.id) + 1;

  workIndexEl.textContent = `${String(currentFilteredPos).padStart(2, "0")} / ${String(filtered.length).padStart(2, "0")}`;
  workTitleEl.textContent = item.title;
  workMetaEl.textContent = `${item.pastYear} / ${item.presentYear} · ${item.location}`;
  workDescEl.textContent = item.desc;

  const aspectClass = item.aspect === "landscape" ? "aspect-landscape" : "aspect-portrait";
  lenticularFrame.className = `lenticular-frame ${aspectClass} ${currentMode === "lenticular" ? "" : "hidden"}`;
  weavingFrame.className = `weaving-frame ${aspectClass} ${currentMode === "weaving" ? "" : "hidden"}`;

  if (currentMode === "lenticular") {
    layerPast.style.backgroundImage = `url('${item.pastImg}')`;
    layerPresent.style.backgroundImage = `url('${item.presentImg}')`;
  } else {
    buildWeavingArtwork(item);
  }

  document.querySelectorAll(".thumb-item").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.id, 10) === item.id);
  });
}

// ==========================================
// 5. 포토 위빙 3종 인터랙션 빌더
// ==========================================
function buildWeavingArtwork(item) {
  weavingFrame.innerHTML = "";
  const type = item.weavingType || "flip";

  const cols = item.aspect === "landscape" ? 12 : 9;
  const rows = item.aspect === "landscape" ? 9 : 12;

  if (type === "flip") {
    // [1번]: 마우스가 스쳐 지나간 특정 타일만 개별 3D 플립
    const grid = document.createElement("div");
    grid.className = "weave-grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    const total = cols * rows;
    for (let i = 0; i < total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);

      const tile = document.createElement("div");
      tile.className = "weave-tile";

      const faceFront = document.createElement("div");
      faceFront.className = "face face-front";
      faceFront.style.backgroundImage = `url('${item.pastImg}')`;
      faceFront.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      faceFront.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      const faceBack = document.createElement("div");
      faceBack.className = "face face-back";
      faceBack.style.backgroundImage = `url('${item.presentImg}')`;
      faceBack.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      faceBack.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      tile.appendChild(faceFront);
      tile.appendChild(faceBack);

      const flipAction = () => tile.classList.toggle("flipped");
      tile.addEventListener("mouseenter", flipAction);
      tile.addEventListener("touchstart", flipAction, { passive: true });

      grid.appendChild(tile);
    }
    weavingFrame.appendChild(grid);

  } else if (type === "dissolve") {
    // [4번]: 바둑판 직조 + 상호 디졸브
    const grid = document.createElement("div");
    grid.className = "weave-grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    const total = cols * rows;
    for (let i = 0; i < total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const isBasePast = (c + r) % 2 === 0;

      const tile = document.createElement("div");
      tile.className = "weave-dissolve-tile";
      tile.style.position = "relative";
      tile.style.overflow = "hidden";

      const layerA = document.createElement("div");
      layerA.className = "face layer-a";
      layerA.style.position = "absolute";
      layerA.style.inset = "0";
      layerA.style.backgroundImage = `url('${item.pastImg}')`;
      layerA.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      layerA.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      const layerB = document.createElement("div");
      layerB.className = "face layer-b";
      layerB.style.position = "absolute";
      layerB.style.inset = "0";
      layerB.style.backgroundImage = `url('${item.presentImg}')`;
      layerB.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      layerB.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
      layerB.style.transition = "opacity 0.25s ease-out";
      layerB.style.opacity = isBasePast ? "0" : "1";

      tile.appendChild(layerA);
      tile.appendChild(layerB);
      tile.dataset.isBasePast = isBasePast;

      tile.addEventListener("mouseenter", () => {
        layerB.style.opacity = layerB.style.opacity === "1" ? "0" : "1";
      });

      grid.appendChild(tile);
    }
    weavingFrame.appendChild(grid);

  } else if (type === "slide") {
    // [9번]: 슬라이딩 결합
    const strips = 12;
    const container = document.createElement("div");
    container.className = "strip-container";

    for (let i = 0; i < strips; i++) {
      const hStrip = document.createElement("div");
      hStrip.className = "strip-horiz";
      hStrip.style.height = `${100 / strips}%`;
      hStrip.style.top = `${(i / strips) * 100}%`;
      hStrip.style.backgroundImage = `url('${item.pastImg}')`;
      hStrip.style.backgroundPosition = `0% ${(i / (strips - 1)) * 100}%`;
      hStrip.dataset.dir = i % 2 === 0 ? -1 : 1;
      container.appendChild(hStrip);

      const vStrip = document.createElement("div");
      vStrip.className = "strip-vert";
      vStrip.style.width = `${100 / strips}%`;
      vStrip.style.left = `${(i / strips) * 100}%`;
      vStrip.style.backgroundImage = `url('${item.presentImg}')`;
      vStrip.style.backgroundPosition = `${(i / (strips - 1)) * 100}% 0%`;
      vStrip.dataset.dir = i % 2 === 0 ? 1 : -1;
      container.appendChild(vStrip);
    }
    weavingFrame.appendChild(container);

  } else if (type === "depth") {
    // [11번]: 종이 요철 틸트
    const grid = document.createElement("div");
    grid.className = "weave-grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    const total = cols * rows;
    for (let i = 0; i < total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const isWarp = (c + r) % 2 === 0;

      const tile = document.createElement("div");
      tile.className = `weave-paper-tile ${isWarp ? "tile-warp" : "tile-weft"}`;
      tile.style.backgroundImage = `url('${isWarp ? item.pastImg : item.presentImg}')`;
      tile.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      tile.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      grid.appendChild(tile);
    }
    weavingFrame.appendChild(grid);
  }
}

// ==========================================
// 6. 실시간 렌더 루프
// ==========================================
function updateViews(progress) {
  currentProgress = Math.max(0, Math.min(1, progress));
  indicatorPin.style.left = `${currentProgress * 100}%`;

  const angle = (currentProgress - 0.5) * 2; // -1.0 ~ 1.0

  if (currentMode === "lenticular") {
    const presentOpacity = Math.max(0, Math.min(1, (currentProgress - 0.35) / 0.3));
    layerPresent.style.opacity = presentOpacity;

    const rotateY = angle * 12;
    lenticularFrame.style.transform = `rotateY(${rotateY}deg)`;
    layerGlare.style.opacity = Math.abs(angle) * 0.4;
    layerGlare.style.transform = `translateX(${angle * 100}%)`;

  } else {
    const item = exhibitionData[currentIndex];
    const type = item.weavingType || "flip";

    if (type === "flip") {
      weavingFrame.style.transform = `rotateY(${angle * 10}deg)`;

    } else if (type === "dissolve") {
      const tiles = weavingFrame.querySelectorAll(".weave-dissolve-tile");
      tiles.forEach((t) => {
        const isBasePast = t.dataset.isBasePast === "true";
        const layerB = t.querySelector(".layer-b");
        if (layerB) {
          const blend = isBasePast ? currentProgress : (1 - currentProgress);
          layerB.style.opacity = blend;
        }
      });
      weavingFrame.style.transform = `rotateY(${angle * 8}deg)`;

    } else if (type === "slide") {
      const offset = (1 - Math.abs(currentProgress - 0.5) * 2);
      const hStrips = weavingFrame.querySelectorAll(".strip-horiz");
      const vStrips = weavingFrame.querySelectorAll(".strip-vert");

      hStrips.forEach((s) => {
        const dir = parseFloat(s.dataset.dir);
        s.style.transform = `translateX(${dir * (1 - offset) * 60}px)`;
      });
      vStrips.forEach((s) => {
        const dir = parseFloat(s.dataset.dir);
        s.style.transform = `translateY(${dir * (1 - offset) * 60}px)`;
        s.style.opacity = 0.3 + (offset * 0.7);
      });

    } else if (type === "depth") {
      const warpTiles = weavingFrame.querySelectorAll(".tile-warp");
      const weftTiles = weavingFrame.querySelectorAll(".tile-weft");
      const lift = angle * 16;

      warpTiles.forEach(t => t.style.transform = `translateZ(${lift}px) rotateY(${angle * 6}deg)`);
      weftTiles.forEach(t => t.style.transform = `translateZ(${-lift}px) rotateX(${angle * 6}deg)`);
    }
  }
}

function animationLoop() {
  currentProgress += (targetProgress - currentProgress) * 0.15;
  updateViews(currentProgress);
  requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);

// ==========================================
// 7. 터치, 마우스 및 키보드 제어
// ==========================================
const activeTargetFrame = () => (currentMode === "lenticular" ? lenticularFrame : weavingFrame);

function onTouchStart(clientX) {
  isTouching = true;
  isDragging = true;
  startX = clientX;
  baseProgress = currentProgress;

  if (gyroResumeTimeout) {
    clearTimeout(gyroResumeTimeout);
    gyroResumeTimeout = null;
  }
}

function onTouchMove(clientX) {
  if (!isDragging) return;
  const deltaX = clientX - startX;
  const fWidth = activeTargetFrame().offsetWidth || 300;
  targetProgress = Math.max(0, Math.min(1, baseProgress + (deltaX / fWidth)));
}

function onTouchEnd() {
  isDragging = false;
  if (gyroResumeTimeout) clearTimeout(gyroResumeTimeout);
  gyroResumeTimeout = setTimeout(() => {
    isTouching = false;
  }, 500);
}

[lenticularFrame, weavingFrame].forEach((el) => {
  el.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) onTouchStart(e.touches[0].clientX);
  }, { passive: true });

  el.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) onTouchMove(e.touches[0].clientX);
  }, { passive: true });

  el.addEventListener("touchend", onTouchEnd, { passive: true });
  el.addEventListener("touchcancel", onTouchEnd, { passive: true });

  el.addEventListener("mousedown", (e) => onTouchStart(e.clientX));
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    onTouchMove(e.clientX);
  } else {
    const f = activeTargetFrame();
    const rect = f.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      targetProgress = (e.clientX - rect.left) / rect.width;
    }
  }
});

window.addEventListener("mouseup", () => {
  if (isDragging) onTouchEnd();
});

window.addEventListener("keydown", (e) => {
  const filtered = getFilteredData();
  const currentPos = filtered.findIndex(w => w.id === exhibitionData[currentIndex].id);

  if (e.key === "ArrowRight") {
    const nextPos = (currentPos + 1) % filtered.length;
    currentIndex = exhibitionData.findIndex(w => w.id === filtered[nextPos].id);
    loadCurrentArtwork();
  } else if (e.key === "ArrowLeft") {
    const prevPos = (currentPos - 1 + filtered.length) % filtered.length;
    currentIndex = exhibitionData.findIndex(w => w.id === filtered[prevPos].id);
    loadCurrentArtwork();
  }
});

// ==========================================
// 8. 모바일 자이로 센서
// ==========================================
function handleOrientation(e) {
  if (isTouching) return;
  if (e.gamma === null) return;
  const gamma = Math.max(-25, Math.min(25, e.gamma));
  targetProgress = (gamma + 25) / 50;
}

const sensorBanner = document.getElementById("sensor-permission-banner");
const btnEnableSensor = document.getElementById("btn-enable-sensor");

if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
  sensorBanner.classList.remove("hidden");
  btnEnableSensor.addEventListener("click", async () => {
    try {
      const state = await DeviceOrientationEvent.requestPermission();
      if (state === "granted") {
        window.addEventListener("deviceorientation", handleOrientation);
        sensorBanner.classList.add("hidden");
      }
    } catch (err) {
      console.error(err);
    }
  });
} else {
  window.addEventListener("deviceorientation", handleOrientation);
}

// ==========================================
// 9. 썸네일 트레이 렌더링 (강제 스크롤 제거)
// ==========================================
function renderTray() {
  trayContainer.innerHTML = "";
  const filtered = getFilteredData();

  filtered.forEach((item) => {
    const thumb = document.createElement("div");
    thumb.className = `thumb-item aspect-${item.aspect} ${item.id === exhibitionData[currentIndex].id ? "active" : ""}`;
    thumb.dataset.id = item.id;
    thumb.innerHTML = `
      <div class="thumb-preview" style="background-image: url('${item.presentImg}')"></div>
      <span class="thumb-label">${String(item.id).padStart(2, '0')}</span>
    `;
    thumb.addEventListener("click", () => {
      currentIndex = exhibitionData.findIndex(w => w.id === item.id);
      loadCurrentArtwork();
      // 스크롤 꼬임 방지를 위해 scrollIntoView를 완전히 배제
    });
    trayContainer.appendChild(thumb);
  });
}

// ==========================================
// 10. 작가 노트 모달
// ==========================================
const btnStatement = document.getElementById("btn-statement");
const modal = document.getElementById("statement-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalBackdrop = modal ? modal.querySelector(".modal-backdrop") : null;

if (btnStatement && modal) btnStatement.addEventListener("click", () => modal.classList.remove("hidden"));
if (btnCloseModal && modal) btnCloseModal.addEventListener("click", () => modal.classList.add("hidden"));
if (modalBackdrop && modal) modalBackdrop.addEventListener("click", () => modal.classList.add("hidden"));

// ==========================================
// 11. 초기 구동 실행
// ==========================================
switchMode("lenticular");
