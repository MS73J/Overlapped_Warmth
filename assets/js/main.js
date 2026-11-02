// ==========================================
// 1. 12점 연작 아카이브 데이터셋
// ==========================================
const exhibitionData = [
  {
    id: 1,
    title: "중첩된 온기 I: 테스트",
    aspect: "landscape", // 4:3
    pastYear: "2007",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "테스트문장",
    pastImg: "assets/images/work-01-past.webp",
    presentImg: "assets/images/work-01-present.webp"
  },
  {
    id: 2,
    title: "중첩된 온기 II: 테스트 투",
    aspect: "landscape", // 4:3
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "테스트문장 투 생일",
    pastImg: "assets/images/work-02-past.webp",
    presentImg: "assets/images/work-02-present.webp"
  },
  {
    id: 3,
    title: "중첩된 온기 III: 테스트 쓰리",
    aspect: "landscape", // 4:3
    pastYear: "2009",
    presentYear: "2026",
    location: "제주 외도동 명진빌라",
    desc: "테스트 쓰리 문장.",
    pastImg: "assets/images/work-03-past.webp",
    presentImg: "assets/images/work-03-present.webp"
  },
  {
    id: 4,
    title: "중첩된 온기 IV: 테스트 포",
    aspect: "portrait",
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
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-05-past.webp",
    presentImg: "assets/images/work-05-present.webp"
  },
  {
    id: 6,
    title: "중첩된 온기 VI: 연작 6",
    aspect: "landscape",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-06-past.webp",
    presentImg: "assets/images/work-06-present.webp"
  },
  {
    id: 7,
    title: "중첩된 온기 VII: 연작 7",
    aspect: "landscape",
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
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-08-past.webp",
    presentImg: "assets/images/work-08-present.webp"
  },
  {
    id: 9,
    title: "중첩된 온기 IX: 연작 9",
    aspect: "landscape",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-09-past.webp",
    presentImg: "assets/images/work-09-present.webp"
  },
  {
    id: 10,
    title: "중첩된 온기 X: 연작 10",
    aspect: "portrait",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-10-past.webp",
    presentImg: "assets/images/work-10-present.webp"
  },
  {
    id: 11,
    title: "중첩된 온기 XI: 연작 11",
    aspect: "portrait",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-11-past.webp",
    presentImg: "assets/images/work-11-present.webp"
  },
  {
    id: 12,
    title: "중첩된 온기 XII: 연작 12",
    aspect: "landscape",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-12-past.webp",
    presentImg: "assets/images/work-12-present.webp"
  },
  {
    id: 13,
    title: "중첩된 온기 XIII: 연작 13",
    aspect: "landscape",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: "assets/images/work-12-past.webp",
    presentImg: "assets/images/work-12-present.webp"
  }
];

// ==========================================
// 2. DOM 요소 연결 (ReferenceError 방지)
// ==========================================
const frame = document.getElementById("lenticular-frame");
const layerPast = document.getElementById("layer-past");
const layerPresent = document.getElementById("layer-present");
const layerGlare = document.getElementById("layer-glare");
const indicatorPin = document.getElementById("indicator-pin");

const workIndexEl = document.getElementById("work-index");
const workTitleEl = document.getElementById("work-title");
const workMetaEl = document.getElementById("work-meta");
const workDescEl = document.getElementById("work-desc");
const trayContainer = document.getElementById("thumbnail-tray");

// ==========================================
// 3. 상태 제어 변수
// ==========================================
let currentIndex = 0;
let currentProgress = 0.5;
let targetProgress = 0.5;
let isDragging = false;
let startX = 0;
let baseProgress = 0.5;
let isTouching = false;
let gyroResumeTimeout = null;

// ==========================================
// 4. 작품 로드 함수
// ==========================================
function loadArtwork(index) {
  currentIndex = index;
  const item = exhibitionData[index];

  if (item.aspect === "landscape") {
    frame.classList.remove("aspect-portrait");
    frame.classList.add("aspect-landscape");
  } else {
    frame.classList.remove("aspect-landscape");
    frame.classList.add("aspect-portrait");
  }

  layerPast.style.backgroundImage = `url('${item.pastImg}')`;
  layerPresent.style.backgroundImage = `url('${item.presentImg}')`;

  workIndexEl.textContent = `${String(item.id).padStart(2, "0")} / 12`;
  workTitleEl.textContent = item.title;
  workMetaEl.textContent = `${item.pastYear} / ${item.presentYear} · ${item.location}`;
  workDescEl.textContent = item.desc;

  document.querySelectorAll(".thumb-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === index);
  });
}

// ==========================================
// 5. 렌티큘러 뷰 업데이트 (물리 및 각도 계산)
// ==========================================
function updateLenticularView(progress) {
  currentProgress = Math.max(0, Math.min(1, progress));

  // 선명한 렌티큘러 전환
  const presentOpacity = Math.max(0, Math.min(1, (currentProgress - 0.35) / 0.3));
  layerPresent.style.opacity = presentOpacity;

  // 3D 틸트 및 패럴랙스
  const angle = (currentProgress - 0.5) * 2;
  const rotateY = angle * 12;
  frame.style.transform = `rotateY(${rotateY}deg)`;

  // 표면 글레어 반사
  layerGlare.style.opacity = Math.abs(angle) * 0.4;
  layerGlare.style.transform = `translateX(${angle * 100}%)`;

  // 인디케이터 핀 위치
  indicatorPin.style.left = `${currentProgress * 100}%`;
}

function animationLoop() {
  currentProgress += (targetProgress - currentProgress) * 0.15;
  updateLenticularView(currentProgress);
  requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);

// ==========================================
// 6. 터치 및 드래그 제어 (터치 시 자이로 일시정지, 0.5초 복구)
// ==========================================
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
  const frameWidth = frame.offsetWidth || 300;
  targetProgress = Math.max(0, Math.min(1, baseProgress + (deltaX / frameWidth)));
}

function onTouchEnd() {
  isDragging = false;
  if (gyroResumeTimeout) clearTimeout(gyroResumeTimeout);
  gyroResumeTimeout = setTimeout(() => {
    isTouching = false;
  }, 500); // 0.5초 딜레이 복구
}

// 모바일 네이티브 터치
frame.addEventListener("touchstart", (e) => {
  if (e.touches && e.touches.length > 0) {
    onTouchStart(e.touches[0].clientX);
  }
}, { passive: true });

frame.addEventListener("touchmove", (e) => {
  if (e.touches && e.touches.length > 0) {
    onTouchMove(e.touches[0].clientX);
  }
}, { passive: true });

frame.addEventListener("touchend", onTouchEnd, { passive: true });
frame.addEventListener("touchcancel", onTouchEnd, { passive: true });

// 데스크톱 마우스
frame.addEventListener("mousedown", (e) => {
  onTouchStart(e.clientX);
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    onTouchMove(e.clientX);
  } else {
    const rect = frame.getBoundingClientRect();
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
// 7. 모바일 자이로 센서 (DeviceOrientation)
// ==========================================
function handleOrientation(e) {
  if (isTouching) return; // 터치 중 또는 손 뗀 직후 0.5초 동안은 자이로 연산 중단
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
// 8. 썸네일 트레이 렌더링
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
      loadArtwork(index);
    });
    trayContainer.appendChild(thumb);
  });
}

// ==========================================
// 9. 전시 서문 모달
// ==========================================
const btnStatement = document.getElementById("btn-statement");
const modal = document.getElementById("statement-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalBackdrop = modal ? modal.querySelector(".modal-backdrop") : null;

if (btnStatement && modal) {
  btnStatement.addEventListener("click", () => modal.classList.remove("hidden"));
}
if (btnCloseModal && modal) {
  btnCloseModal.addEventListener("click", () => modal.classList.add("hidden"));
}
if (modalBackdrop && modal) {
  modalBackdrop.addEventListener("click", () => modal.classList.add("hidden"));
}

// ==========================================
// 10. 초기 구동 실행
// ==========================================
renderTray();
loadArtwork(0);
