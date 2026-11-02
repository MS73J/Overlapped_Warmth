// 기존 변수 선언부에 자이로 일시정지 제어용 변수 추가
let isTouching = false;
let gyroResumeTimeout = null;

// 3. 마우스 드래그 & 모바일 터치 인터랙션
frame.addEventListener("pointerdown", (e) => {
  isTouching = true;
  isDragging = true;
  startX = e.clientX;
  baseProgress = currentProgress;

  // 손을 대는 순간 대기 중이던 자이로 재가동 타이머 즉시 취소
  if (gyroResumeTimeout) {
    clearTimeout(gyroResumeTimeout);
    gyroResumeTimeout = null;
  }

  frame.setPointerCapture(e.pointerId);
});

frame.addEventListener("pointermove", (e) => {
  if (!isDragging) {
    // 데스크톱 마우스 호버 처리 (터치가 아닐 때만)
    if (e.pointerType === "mouse") {
      const rect = frame.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      targetProgress = ratio;
    }
    return;
  }

  // 터치/드래그 시 실시간 반영
  const deltaX = e.clientX - startX;
  const sensitivity = 0.003;
  targetProgress = baseProgress + (deltaX * sensitivity);
});

function handlePointerRelease(e) {
  isDragging = false;
  try { frame.releasePointerCapture(e.pointerId); } catch(err) {}

  // 화면에서 손을 떼었을 때 기존 타이머 초기화 후 0.5초 뒤 자이로 복구
  if (gyroResumeTimeout) clearTimeout(gyroResumeTimeout);
  gyroResumeTimeout = setTimeout(() => {
    isTouching = false;
  }, 500); // 0.5초 딜레이
}

frame.addEventListener("pointerup", handlePointerRelease);
frame.addEventListener("pointercancel", handlePointerRelease);

// 4. 스마트폰 자이로스코프(DeviceOrientation) 연동
function handleOrientation(e) {
  // 사용자가 화면을 터치 중이거나 손을 뗀 직후 0.5초 동안은 자이로 연산 차단
  if (isTouching) return;

  if (e.gamma === null) return;
  const gamma = Math.max(-25, Math.min(25, e.gamma));
  // -25도 ~ +25도를 0.0 ~ 1.0 범위로 매핑
  targetProgress = (gamma + 25) / 50;
}
