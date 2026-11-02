// 12점 연작 데이터셋 (작품별 세부 정보 및 비율 지정)
const exhibitionData = [
  {
    id: 1,
    title: "중첩된 온기 I: 첫 등교길",
    aspect: "landscape", // 4:3
    pastYear: "2007",
    presentYear: "2026",
    location: "초등학교 앞 골목길",
    desc: "가방을 메고 앞서 걷던 아이의 뒷모습을 담던 아버지의 시선. 같은 골목에서 카메라를 들고 선 나는 어느덧 그 시절 아버지의 나이가 되었습니다.",
    pastImg: "assets/images/work-01-past.webp",
    presentImg: "assets/images/work-01-present.webp"
  },
  {
    id: 2,
    title: "중첩된 온기 II: 유달산의 바람",
    aspect: "portrait", // 3:4
    pastYear: "2009",
    presentYear: "2026",
    location: "목포 유달산 마당바위",
    desc: "바람에 흩날리던 옷깃과 어린 미소. 세월이 흘러 같은 바위 위에 서서, 나를 향해 셔터를 누르던 아버지의 호흡을 떠올립니다.",
    pastImg: "assets/images/work-02-past.webp",
    presentImg: "assets/images/work-02-present.webp"
  },
  {
    id: 3,
    title: "중첩된 온기 III: 바다를 가리키며",
    aspect: "landscape", // 4:3
    pastYear: "2010",
    presentYear: "2026",
    location: "제주 서쪽 해안도로",
    desc: "먼 수평선을 가리키던 작은 손. 그 손은 이제 카메라 그립을 단단히 쥐고 아버지의 시야 너머를 응시합니다.",
    pastImg: "assets/images/work-03-past.webp",
    presentImg: "assets/images/work-03-present.webp"
  }
  // 필요에 따라 work-04부터 work-12까지 동일한 포맷으로 확장
];

// 작품 12개 인덱스 채우기 (데이터가 부족할 경우 12개까지 반복 생성)
while (exhibitionData.length < 12) {
  const i = exhibitionData.length + 1;
  const isLandscape = i % 2 !== 0; // 홀수 4:3, 짝수 3:4 예시
  exhibitionData.push({
    id: i,
    title: `중첩된 온기 ${toRoman(i)}: 연작`,
    aspect: isLandscape ? "landscape" : "portrait",
    pastYear: "200X",
    presentYear: "2026",
    location: "기억의 아카이브 장소",
    desc: "아버지의 필름과 나의 디지털 센서가 동일한 공간의 시간을 중첩합니다.",
    pastImg: `assets/images/work-${String(i).padStart(2, '0')}-past.webp`,
    presentImg: `assets/images/work-${String(i).padStart(2, '0')}-present.webp`
  });
}

function toRoman(num) {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  return roman[num - 1] || num;
}

// DOM Elements
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

let currentIndex = 0;
let currentProgress = 0.5; // 0.0 (완전 과거) ~ 1.0 (완전 현재)
let targetProgress = 0.5;
let isDragging = false;
let startX = 0;
let baseProgress = 0.5;

// 1. 작품 교체 함수
function loadArtwork(index) {
  currentIndex = index;
  const item = exhibitionData[index];

  // 프레임 비율 적용 (4:3 vs 3:4)
  if (item.aspect === "landscape") {
    frame.classList.remove("aspect-portrait");
    frame.classList.add("aspect-landscape");
  } else {
    frame.classList.remove("aspect-landscape");
    frame.classList.add("aspect-portrait");
  }

  // 이미지 할당
  layerPast.style.backgroundImage = `url('${item.pastImg}')`;
  layerPresent.style.backgroundImage = `url('${item.presentImg}')`;

  // 텍스트 정보 업데이트
  workIndexEl.textContent = `${String(item.id).padStart(2, "0")} / 12`;
  workTitleEl.textContent = item.title;
  workMetaEl.textContent = `${item.pastYear} / ${item.presentYear} · ${item.location}`;
  workDescEl.textContent = item.desc;

  // 썸네일 활성화 상태
  document.querySelectorAll(".thumb-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === index);
  });
}

// 2. 렌티큘러 렌더링 루프 (물리 엔진)
function updateLenticularView(progress) {
  // progress: 0 (과거) ~ 1 (현재)
  currentProgress = Math.max(0, Math.min(1, progress));

  // 날카로운 렌티큘러 전환 곡선 (Step-blend)
  const presentOpacity = Math.max(0, Math.min(1, (currentProgress - 0.35) / 0.3));
  layerPresent.style.opacity = presentOpacity;

  // 시점에 따른 3D 틸트 및 패럴랙스 (입체감 부여)
  const angle = (currentProgress - 0.5) * 2; // -1.0 ~ 1.0
  const rotateY = angle * 12; // -12deg ~ 12deg
  frame.style.transform = `rotateY(${rotateY}deg)`;

  // 표면 글레어 반사 효과
  layerGlare.style.opacity = Math.abs(angle) * 0.4;
  layerGlare.style.transform = `translateX(${angle * 100}%)`;

  // 인디케이터 핀 위치 업데이트
  indicatorPin.style.left = `${currentProgress * 100}%`;
}

// 3. 마우스 드래그 & 터치 인터랙션
frame.addEventListener("pointerdown", (e) => {
  isDragging = true;
  startX = e.clientX;
  baseProgress = currentProgress;
  frame.setPointerCapture(e.pointerId);
});

frame.addEventListener("pointermove", (e) => {
  if (!isDragging) {
    // 호버 시 부드러운 반응 (데스크톱)
    const rect = frame.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    targetProgress = ratio;
    return;
  }
  const deltaX = e.clientX - startX;
  const sensitivity = 0.003;
  targetProgress = baseProgress + (deltaX * sensitivity);
});

frame.addEventListener("pointerup", (e) => {
  isDragging = false;
  try { frame.releasePointerCapture(e.pointerId); } catch(err) {}
});

// 부드러운 감속 렌더 루프
function animationLoop() {
  currentProgress += (targetProgress - currentProgress) * 0.15;
  updateLenticularView(currentProgress);
  requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);

// 4. 스마트폰 자이로스코프(DeviceOrientation) 연동
const sensorBanner = document.getElementById("sensor-permission-banner");
const btnEnableSensor = document.getElementById("btn-enable-sensor");

function handleOrientation(e) {
  // gamma: 폰을 좌우로 기울일 때의 각도 (-90 ~ 90)
  if (e.gamma === null) return;
  const gamma = Math.max(-25, Math.min(25, e.gamma));
  // -25도 ~ +25도를 0.0 ~ 1.0 범위로 매핑
  targetProgress = (gamma + 25) / 50;
}

// iOS 13+ 권한 확인
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
  // 안드로이드 및 일반 환경
  window.addEventListener("deviceorientation", handleOrientation);
}

// 5. 12개 연작 썸네일 트레이 렌더링
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

// 6. 전시 서문 모달
const btnStatement = document.getElementById("btn-statement");
const modal = document.getElementById("statement-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalBackdrop = modal.querySelector(".modal-backdrop");

btnStatement.addEventListener("click", () => modal.classList.remove("hidden"));
btnCloseModal.addEventListener("click", () => modal.classList.add("hidden"));
modalBackdrop.addEventListener("click", () => modal.classList.add("hidden"));

// 초기화
renderTray();
loadArtwork(0);