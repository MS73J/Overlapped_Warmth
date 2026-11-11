// ==========================================
// 1. 연작 아카이브 마스터 데이터셋 (13점)
// mediaType 옵션: 
// - "lenticular": 렌티큘러 뷰어 전용
// - "flip": 포토 위빙 개별 플립 전용
// - "dissolve": 포토 위빙 바둑판 디졸브 전용
// - "slide": 포토 위빙 슬라이딩 직조 전용
// - "depth": 포토 위빙 종이 요철 틸트 전용
// ==========================================
const exhibitionData = [
  {
    id: 1,
    title: "중첩된 온기 I: 2007",
    aspect: "landscape",
    mediaType: "dissolve", // 포토위빙 전용
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "테스트 문장입니다. 2007년 명진빌라에서 아버지가 촬영한 저의 모습입니다.",
    pastImg: "assets/images/work-01-past.webp",
    presentImg: "assets/images/work-01-present.webp"
  },
  {
    id: 2,
    title: "중첩된 온기 II: 2007",
    aspect: "landscape",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "2007년 7월 30일 생일을 맞이하여 행복한 모습입니다.",
    pastImg: "assets/images/work-02-past.webp",
    presentImg: "assets/images/work-02-present.webp"
  },
  {
    id: 3,
    title: "중첩된 온기 III: 2007",
    aspect: "landscape",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "어릴적 저는 그저 해맑은 모습입니다.",
    pastImg: "assets/images/work-03-past.webp",
    presentImg: "assets/images/work-03-present.webp"
  },
  {
    id: 4,
    title: "중첩된 온기 IV: 2009",
    aspect: "portrait",
    mediaType: "slide", // 포토위빙 전용
    pastYear: "2009",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 솜사탕 먹고 있습니다.",
    pastImg: "assets/images/work-04-past.webp",
    presentImg: "assets/images/work-04-present.webp"
  },
  {
    id: 5,
    title: "중첩된 온기 V: 2007",
    aspect: "landscape",
    mediaType: "flip", // 포토위빙 전용
    pastYear: "2007",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트문장입니다. 재밌는 얼굴을 하고 있네요.",
    pastImg: "assets/images/work-05-past.webp",
    presentImg: "assets/images/work-05-present.webp"
  },
  {
    id: 6,
    title: "중첩된 온기 VI: 2009",
    aspect: "landscape",
    mediaType: "depth", // 포토위빙 전용
    pastYear: "2009",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 뎁스 오류 수정중입니다.",
    pastImg: "assets/images/work-06-past.webp",
    presentImg: "assets/images/work-06-present.webp"
  },
  {
    id: 7,
    title: "중첩된 온기 VII: 2010",
    aspect: "landscape",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2010",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 이 사진을 렌티큘러 전시할 예정입니다.",
    pastImg: "assets/images/work-07-past.webp",
    presentImg: "assets/images/work-07-present.webp"
  },
  {
    id: 8,
    title: "중첩된 온기 VIII: 2009",
    aspect: "landscape",
    mediaType: "slide", // 포토위빙 전용
    pastYear: "2009",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 누가 공항도둑 같다고 하는데 그렇게 보이긴 합니다.",
    pastImg: "assets/images/work-08-past.webp",
    presentImg: "assets/images/work-08-present.webp"
  },
  {
    id: 9,
    title: "중첩된 온기 IX: 2010",
    aspect: "landscape",
    mediaType: "slide", // 포토위빙 전용
    pastYear: "2010",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 그냥 귀신인데요",
    pastImg: "assets/images/work-09-past.webp",
    presentImg: "assets/images/work-09-present.webp"
  },
  {
    id: 10,
    title: "중첩된 온기 X: 2012",
    aspect: "portrait",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2012",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 부담스럽습니다.",
    pastImg: "assets/images/work-10-past.webp",
    presentImg: "assets/images/work-10-present.webp"
  },
  {
    id: 11,
    title: "중첩된 온기 XI: 2013",
    aspect: "portrait",
    mediaType: "depth", // 포토위빙 전용
    pastYear: "2013",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 스케이트 탄다고 지쳤습니다.",
    pastImg: "assets/images/work-11-past.webp",
    presentImg: "assets/images/work-11-present.webp"
  },
  {
    id: 12,
    title: "중첩된 온기 XII: 2014",
    aspect: "landscape",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2014",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 중학생떄랑 얼굴이 다른게 없네요.",
    pastImg: "assets/images/work-12-past.webp",
    presentImg: "assets/images/work-12-present.webp"
  },
  {
    id: 13,
    title: "중첩된 온기 XIII: 2018",
    aspect: "landscape",
    mediaType: "lenticular", // 렌티큘러 전용
    pastYear: "2018",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "테스트 문장입니다. 8년이나 지났는데 얼굴이 똑같네요.",
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

const tabAll = document.getElementById("tab-all");
const tabLenticular = document.getElementById("tab-lenticular");
const tabWeaving = document.getElementById("tab-weaving");

// ==========================================
// 3. 상태 관리 변수
// ==========================================
let currentTab = "all"; // "all" | "lenticular" | "weaving"
let currentIndex = 0;   // 마스터 데이터셋 기준 index
let currentProgress = 0.5;
let targetProgress = 0.5;
let isDragging = false;
let startX = 0;
let baseProgress = 0.5;
let isTouching = false;
let gyroResumeTimeout = null;

// ==========================================
// 4. 모드 탭 필터링 및 전환
// ==========================================
function getFilteredData() {
  if (currentTab === "lenticular") {
    // 렌티큘러 전용 탭: mediaType이 lenticular인 것만
    return exhibitionData.filter(item => item.mediaType === "lenticular");
  } else if (currentTab === "weaving") {
    // 포토 위빙 전용 탭: mediaType이 lenticular가 아닌 것만 (flip, dissolve, slide, depth)
    return exhibitionData.filter(item => item.mediaType !== "lenticular");
  } else {
    // ALL 탭: 전체 13개 노출
    return exhibitionData;
  }
}

function switchTab(tabName) {
  currentTab = tabName;
  if (tabAll) tabAll.classList.toggle("active", tabName === "all");
  if (tabLenticular) tabLenticular.classList.toggle("active", tabName === "lenticular");
  if (tabWeaving) tabWeaving.classList.toggle("active", tabName === "weaving");

  const filtered = getFilteredData();
  const currentItem = exhibitionData[currentIndex];
  const isCurrentValid = filtered.some(item => item.id === currentItem.id);

  if (!isCurrentValid && filtered.length > 0) {
    currentIndex = exhibitionData.findIndex(item => item.id === filtered[0].id);
  }

  renderTray();
  loadCurrentArtwork();
}

if (tabAll) tabAll.addEventListener("click", () => switchTab("all"));
if (tabLenticular) tabLenticular.addEventListener("click", () => switchTab("lenticular"));
if (tabWeaving) tabWeaving.addEventListener("click", () => switchTab("weaving"));

function loadCurrentArtwork() {
  const item = exhibitionData[currentIndex];
  const filtered = getFilteredData();
  const currentFilteredPos = filtered.findIndex(w => w.id === item.id) + 1;

  workIndexEl.textContent = `${String(currentFilteredPos).padStart(2, "0")} / ${String(filtered.length).padStart(2, "0")}`;
  workTitleEl.textContent = item.title;
  workMetaEl.textContent = `${item.pastYear} / ${item.presentYear} · ${item.location}`;
  workDescEl.textContent = item.desc;

  const aspectClass = item.aspect === "landscape" ? "aspect-landscape" : "aspect-portrait";
  const isLenti = item.mediaType === "lenticular";

  // 현재 작품의 mediaType에 따라 알맞은 뷰어 자동 활성화
  lenticularFrame.className = `lenticular-frame ${aspectClass} ${isLenti ? "" : "hidden"}`;
  weavingFrame.className = `weaving-frame ${aspectClass} ${!isLenti ? "" : "hidden"}`;

  if (isLenti) {
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
// 5. 포토 위빙 4종 인터랙션 빌더
// ==========================================
function buildWeavingArtwork(item) {
  weavingFrame.innerHTML = "";
  const type = item.mediaType;

  const cols = item.aspect === "landscape" ? 12 : 9;
  const rows = item.aspect === "landscape" ? 9 : 12;

  if (type === "flip") {
    // [1번]: 모바일 터치 스와이프 & 데스크톱 마우스 호버 타일 3D 플립
    const grid = document.createElement("div");
    grid.className = "weave-grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.touchAction = "none";

    const total = cols * rows;
    for (let i = 0; i < total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);

      const tile = document.createElement("div");
      tile.className = "weave-tile";

      const faceFront = document.createElement("div");
      faceFront.className = "face face-front";
      faceFront.style.pointerEvents = "none";
      faceFront.style.backgroundImage = `url('${item.pastImg}')`;
      faceFront.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      faceFront.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      const faceBack = document.createElement("div");
      faceBack.className = "face face-back";
      faceBack.style.pointerEvents = "none";
      faceBack.style.backgroundImage = `url('${item.presentImg}')`;
      faceBack.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      faceBack.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

      tile.appendChild(faceFront);
      tile.appendChild(faceBack);

      tile.addEventListener("mouseenter", () => tile.classList.toggle("flipped"));
      tile.addEventListener("click", () => tile.classList.toggle("flipped"));

      grid.appendChild(tile);
    }

    let lastTile = null;
    const onSwipeMove = (e) => {
      if (e.cancelable) e.preventDefault();
      const touch = e.touches ? e.touches[0] : e;
      if (!touch) return;

      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!target) return;

      const tile = target.closest(".weave-tile");
      if (tile && tile !== lastTile) {
        tile.classList.toggle("flipped");
        lastTile = tile;
      }
    };

    grid.addEventListener("touchstart", onSwipeMove, { passive: false });
    grid.addEventListener("touchmove", onSwipeMove, { passive: false });
    grid.addEventListener("touchend", () => { lastTile = null; });
    grid.addEventListener("touchcancel", () => { lastTile = null; });

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
    // [5, 8, 9번]: 가로 띠 엇갈림 직조 슬라이드
    const slideRows = item.aspect === "landscape" ? 10 : 14;
    const slideCols = item.aspect === "landscape" ? 14 : 10;
    const container = document.createElement("div");
    container.className = "weave-slide-container";
    container.style.position = "absolute";
    container.style.inset = "0";
    container.style.overflow = "hidden";

    for (let r = 0; r < slideRows; r++) {
      const rowStrip = document.createElement("div");
      rowStrip.className = "slide-row-strip";
      rowStrip.dataset.row = r;
      rowStrip.style.position = "absolute";
      rowStrip.style.left = "0";
      rowStrip.style.top = `${(r / slideRows) * 100}%`;
      rowStrip.style.width = "100%";
      rowStrip.style.height = `${100 / slideRows}%`;
      rowStrip.style.display = "flex";
      rowStrip.style.overflow = "hidden";
      rowStrip.dataset.isEven = (r % 2 === 0);

      for (let c = 0; c < slideCols; c++) {
        const cell = document.createElement("div");
        cell.className = "slide-cell";
        cell.style.flex = `0 0 ${100 / slideCols}%`;
        cell.style.height = "100%";
        cell.style.position = "relative";

        const isPastInitial = (r + c) % 2 === 0;

        const pastFace = document.createElement("div");
        pastFace.className = "face-past";
        pastFace.style.position = "absolute";
        pastFace.style.inset = "0";
        pastFace.style.backgroundImage = `url('${item.pastImg}')`;
        pastFace.style.backgroundPosition = `${(c / (slideCols - 1)) * 100}% ${(r / (slideRows - 1)) * 100}%`;
        pastFace.style.backgroundSize = `${slideCols * 100}% ${slideRows * 100}%`;

        const presentFace = document.createElement("div");
        presentFace.className = "face-present";
        presentFace.style.position = "absolute";
        presentFace.style.inset = "0";
        presentFace.style.backgroundImage = `url('${item.presentImg}')`;
        presentFace.style.backgroundPosition = `${(c / (slideCols - 1)) * 100}% ${(r / (slideRows - 1)) * 100}%`;
        presentFace.style.backgroundSize = `${slideCols * 100}% ${slideRows * 100}%`;
        presentFace.style.opacity = "0";

        cell.appendChild(pastFace);
        cell.appendChild(presentFace);
        cell.dataset.isPastInitial = isPastInitial;

        rowStrip.appendChild(cell);
      }
      container.appendChild(rowStrip);
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
  const item = exhibitionData[currentIndex];

  if (item.mediaType === "lenticular") {
    const presentOpacity = Math.max(0, Math.min(1, (currentProgress - 0.35) / 0.3));
    layerPresent.style.opacity = presentOpacity;

    const rotateY = angle * 12;
    lenticularFrame.style.transform = `rotateY(${rotateY}deg)`;
    layerGlare.style.opacity = Math.abs(angle) * 0.4;
    layerGlare.style.transform = `translateX(${angle * 100}%)`;

  } else {
    const type = item.mediaType;

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
      const rows = weavingFrame.querySelectorAll(".slide-row-strip");
      const weaveIntensity = 1 - Math.abs(currentProgress - 0.5) * 2;

      rows.forEach((strip) => {
        const isEven = strip.dataset.isEven === "true";
        const dir = isEven ? 1 : -1;
        const slideX = dir * weaveIntensity * 16;
        strip.style.transform = `translateX(${slideX}px)`;

        const cells = strip.querySelectorAll(".slide-cell");
        cells.forEach((cell) => {
          const isPastInit = cell.dataset.isPastInitial === "true";
          const presentFace = cell.querySelector(".face-present");

          if (currentProgress <= 0.5) {
            const localProgress = currentProgress / 0.5;
            if (isPastInit) {
              presentFace.style.opacity = 0;
            } else {
              presentFace.style.opacity = localProgress;
            }
          } else {
            const localProgress = (currentProgress - 0.5) / 0.5;
            if (isPastInit) {
              presentFace.style.opacity = localProgress;
            } else {
              presentFace.style.opacity = 1;
            }
          }
        });
      });

      weavingFrame.style.transform = `rotateY(${angle * 6}deg)`;

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
const activeTargetFrame = () => (exhibitionData[currentIndex].mediaType === "lenticular" ? lenticularFrame : weavingFrame);

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
    if (exhibitionData[currentIndex].mediaType === "flip") return;
    if (e.touches && e.touches.length > 0) onTouchStart(e.touches[0].clientX);
  }, { passive: true });

  el.addEventListener("touchmove", (e) => {
    if (exhibitionData[currentIndex].mediaType === "flip") return;
    if (e.touches && e.touches.length > 0) onTouchMove(e.touches[0].clientX);
  }, { passive: true });

  el.addEventListener("touchend", onTouchEnd, { passive: true });
  el.addEventListener("touchcancel", onTouchEnd, { passive: true });

  el.addEventListener("mousedown", (e) => {
    if (exhibitionData[currentIndex].mediaType === "flip") return;
    onTouchStart(e.clientX);
  });
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
// 9. 썸네일 트레이 렌더링
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
// 11. 초기 구동 실행 (ALL 탭 기본)
// ==========================================
switchTab("all");
