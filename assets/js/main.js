// --- 인터랙션 상태 관리 변수 ---
let isTouching = false;
let gyroResumeTimeout = null;

// 1. 공통 터치/드래그 시작 핸들러
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

// 2. 공통 터치/드래그 이동 핸들러
function onTouchMove(clientX) {
  if (!isDragging) return;
  const deltaX = clientX - startX;
  // 액자 가로폭 기준으로 100% 이동 시 전체 전환되도록 계산 (터치감 향상)
  const frameWidth = frame.offsetWidth || 300;
  targetProgress = Math.max(0, Math.min(1, baseProgress + (deltaX / frameWidth)));
}

// 3. 공통 터치/드래그 종료 핸들러 (0.5초 딜레이 복구)
function onTouchEnd() {
  isDragging = false;
  if (gyroResumeTimeout) clearTimeout(gyroResumeTimeout);
  gyroResumeTimeout = setTimeout(() => {
    isTouching = false;
  }, 500); // 0.5초 대기 후 자이로 재가동
}

// === [모바일 전용 네이티브 터치 이벤트] ===
// passive: false로 지정하여 모바일 스크롤 간섭 방지
frame.addEventListener("touchstart", (e) => {
  if (e.touches.length > 0) {
    onTouchStart(e.touches[0].clientX);
  }
}, { passive: true });

frame.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    onTouchMove(e.touches[0].clientX);
  }
}, { passive: true });

frame.addEventListener("touchend", onTouchEnd, { passive: true });
frame.addEventListener("touchcancel", onTouchEnd, { passive: true });

// === [데스크톱 마우스 이벤트] ===
frame.addEventListener("mousedown", (e) => {
  onTouchStart(e.clientX);
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    onTouchMove(e.clientX);
  } else {
    // 마우스 호버 반응 (화면 터치가 아닐 때만)
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

// === [스마트폰 자이로스코프(DeviceOrientation) 연동] ===
function handleOrientation(e) {
  // 사용자가 화면을 터치 중이거나 손을 뗀 직후 0.5초간은 자이로 연산 완전 차단
  if (isTouching) return;

  if (e.gamma === null) return;
  const gamma = Math.max(-25, Math.min(25, e.gamma));
  // -25도 ~ +25도를 0.0 ~ 1.0 범위로 매핑
  targetProgress = (gamma + 25) / 50;
}
