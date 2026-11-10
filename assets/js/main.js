// ==========================================
// 1. 연작 아카이브 마스터 데이터셋 (13점)
// ==========================================
const exhibitionData = [
  {
    id: 1,
    title: "중첩된 온기 I: 첫 등교길",
    aspect: "landscape",
    weavingType: "flip", // 01번: 그리드 플립 & 웨이브
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "가방을 메고 앞서 걷던 아이의 뒷모습. 격자 조각들이 관람객의 손길과 기울기에 따라 3D로 파동치며 과거와 현재를 교차시킵니다.",
    pastImg: "assets/images/work-01-past.webp",
    presentImg: "assets/images/work-01-present.webp"
  },
  {
    id: 2,
    title: "중첩된 온기 II: 생일 고깔모자",
    aspect: "landscape",
    weavingType: "flip",
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "아이의 장난기 어린 웃음과 어른이 된 나의 미소가 직조 조각 사이로 비쳐 나옵니다.",
    pastImg: "assets/images/work-02-past.webp",
    presentImg: "assets/images/work-02-present.webp"
  },
  {
    id: 3,
    title: "중첩된 온기 III: 바다를 가리키며",
    aspect: "landscape",
    weavingType: "depth",
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "아버지의 시선 너머 수평선을 마주보던 시간의 층위를 종이 요철감으로 드러냅니다.",
    pastImg: "assets/images/work-03-past.webp",
    presentImg: "assets/images/work-03-present.webp"
  },
  {
    id: 4,
    title: "중첩된 온기 IV: 연작 4",
    aspect: "portrait",
    weavingType: "flip",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-04-past.webp",
    presentImg: "assets/images/work-04-present.webp"
  },
  {
    id: 5,
    title: "중첩된 온기 V: 연작 5",
    aspect: "landscape",
    weavingType: "slide",
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
    weavingType: "slide", // 09번: 직조 해체 및 슬라이딩 어셈블
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
    weavingType: "depth", // 11번: 심도 왜곡 & 조각 틸트
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "교차된 인화지 조각 사이로 생기는 실제 그림자와 입체적인 Z축 깊이감을 실시간 조명 반사로 보여줍니다.",
    pastImg: "assets/images/work-11-past.webp",
    presentImg: "assets/images/work-11-present.webp"
  },
  {
    id: 12,
    title: "중첩된 온기 XII: 연작 12",
    aspect: "landscape",
    weavingType: "flip",
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
let currentIndex = 0;
let currentProgress = 0.5;
let targetProgress = 0.5;
let isDragging = false;
let startX = 0;
let baseProgress = 0.5;
let isTouching = false;
let gyroResumeTimeout = null;

// ==========================================
// 4. 모드 전환 (렌티큘러 <-> 포토위빙)
// ==========================================
tabLenticular.addEventListener("click", () => switchMode("lenticular"));
tabWeaving.addEventListener("click", () => switchMode("weaving"));

function switchMode(mode) {
  currentMode = mode;
  tabLenticular.classList.toggle("active", mode === "lenticular");
  tabWeaving.classList.toggle("active", mode === "weaving");

  if (mode === "lenticular") {
    lenticularFrame.classList.remove("hidden");
    weavingFrame.classList.add("hidden");
  } else {
    lenticularFrame.classList.add("hidden");
    weavingFrame.classList.remove("hidden");
  }
  loadCurrentArtwork();
}

function loadCurrentArtwork() {
  const item = exhibitionData[currentIndex];
  const total = exhibitionData.length;

  workIndexEl.textContent = `${String(item.id).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  workTitleEl.textContent = item.title;
  workMetaEl.textContent = `${item.pastYear} / ${item.presentYear} · ${item.location}`;
  workDescEl.textContent = item.desc;

  // 액자 비율 클래스 적용
  const aspectClass = item.aspect === "landscape" ? "aspect-landscape" : "aspect-portrait";
  lenticularFrame.className = `lenticular-frame ${aspectClass} ${currentMode === "lenticular" ? "" : "hidden"}`;
  weavingFrame.className = `weaving-frame ${aspectClass} ${currentMode === "weaving" ? "" : "hidden"}`;

  if (currentMode === "lenticular") {
    // 렌티큘러 모드 이미지 할당
    layerPast.style.backgroundImage = `url('${item.pastImg}')`;
    layerPresent.style.backgroundImage = `url('${item.presentImg}')`;
  } else {
    // 포토 위빙 모드 빌드
    buildWeavingArtwork(item);
  }

  // 썸네일 활성화 상태
  document.querySelectorAll(".thumb-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === currentIndex);
  });
}

// ==========================================
// 5. 포토 위빙 3종 인터랙션 빌더
// ==========================================
function buildWeavingArtwork(item) {
  weavingFrame.innerHTML = "";
  const type = item.weavingType || "flip";

  if (type === "flip") {
    // [아이디어 1] 그리드 플립 & 웨이브 (예: 10x14 또는 12x9)
    const cols = item.aspect === "landscape" ? 12 : 9;
    const rows = item.aspect === "landscape" ? 9 : 12;

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
      tile.dataset.col = c;
      tile.dataset.row = r;

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

      tile.addEventListener("pointerenter", () => tile.classList.toggle("flipped"));
      tile.addEventListener("click", () => tile.classList.toggle("flipped"));

      grid.appendChild(tile);
    }
    weavingFrame.appendChild(grid);

  } else if (type === "slide") {
    // [아이디어 2] 직조 해체 및 슬라이딩 어셈블 (가로/세로 띠)
    const strips = 12;
    const container = document.createElement("div");
    container.className = "strip-container";

    for (let i = 0; i < strips; i++) {
      // 가로 띠 (Past)
      const hStrip = document.createElement("div");
      hStrip.className = "strip-horiz";
      hStrip.style.height = `${100 / strips}%`;
      hStrip.style.top = `${(i / strips) * 100}%`;
      hStrip.style.backgroundImage = `url('${item.pastImg}')`;
      hStrip.style.backgroundPosition = `0% ${(i / (strips - 1)) * 100}%`;
      hStrip.dataset.dir = i % 2 === 0 ? -1 : 1;
      container.appendChild(hStrip);

      // 세로 띠 (Present - 교차 레이어)
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
    // [아이디어 3] 심도 왜곡 & 조각 틸트 (종이 요철 교차)
    const cols = item.aspect === "landscape" ? 12 : 9;
    const rows = item.aspect === "landscape" ? 9 : 12;

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
// 6. 실시간 렌더 루프 (렌티큘러 & 위빙 동기화)
// ==========================================
function updateViews(progress) {
  currentProgress = Math.max(0, Math.min(1, progress));
  indicatorPin.style.left = `${currentProgress * 100}%`;

  const angle = (currentProgress - 0.5) * 2; // -1.0 ~ 1.0

  if (currentMode === "lenticular") {
    // 렌티큘러 광학 전환
    const presentOpacity = Math.max(0, Math.min(1, (currentProgress - 0.35) / 0.3));
    layerPresent.style.opacity = presentOpacity;

    const rotateY = angle * 12;
    lenticularFrame.style.transform = `rotateY(${rotateY}deg)`;
    layerGlare.style.opacity = Math.abs(angle) * 0.4;
    layerGlare.style.transform = `translateX(${angle * 100}%)`;

  } else {
    // 포토 위빙 3D 인터랙션
    const item = exhibitionData[currentIndex];
    const type = item.weavingType || "flip";

    if (type === "flip") {
      // 각도에 따른 웨이브 순차 플립
      const tiles = weavingFrame.querySelectorAll(".weave-tile");
      tiles.forEach((t) => {
        const c = parseInt(t.dataset.col, 10);
        const threshold = c / 12;
        if (currentProgress > threshold) {
          t.classList.add("flipped");
        } else {
          t.classList.remove("flipped");
        }
      });
      weavingFrame.style.transform = `rotateY(${angle * 8}deg)`;

    } else if (type === "slide") {
      // 슬라이딩 결합: 0.5에서 완벽히 맞물리고, 양끝으로 갈수록 해체
      const offset = (1 - Math.abs(currentProgress - 0.5) * 2); // 1.0(완전결합) ~ 0.0(해체)
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
      // 종이 요철 틸트 & 틈새 음영
      const warpTiles = weavingFrame.querySelectorAll(".tile-warp");
      const weftTiles = weavingFrame.querySelectorAll(".tile-weft");
      const lift = angle * 15;

      warpTiles.forEach((t) => {
        t.style.transform = `translateZ(${lift}px) rotateY(${angle * 5}deg)`;
      });
      weftTiles.forEach((t) => {
        t.style.transform = `translateZ(${-lift}px) rotateX(${angle * 5}deg)`;
      });
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
// 7. 터치 및 드래그 제어 (자이로 일시정지)
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

// 이벤트 바인딩
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
// 9. 썸네일 트레이 렌더링
// ==========================================
function renderTray() {
  trayContainer.innerHTML = "";
  exhibitionData.forEach((item, index) => {
    const thumb = document.createElement("div");
    thumb.className = `thumb-item aspect-${item.aspect}`;
    thumb.innerHTML = `
      <div class="thumb-preview" style="background-image: url('${item.presentImg}')"></div>
      <span class="thumb-label">${String(item.id).padStart(2, '0')}</span>
    `;
    thumb.addEventListener("click", () => {
      currentIndex = index;
      loadCurrentArtwork();
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

// 초기 구동
renderTray();
loadCurrentArtwork();
