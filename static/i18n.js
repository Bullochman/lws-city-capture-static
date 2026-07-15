/*
 * LWS City / Dig-Site Capture Planner — i18n dictionary.
 *
 * Every user-visible string flows through here. No hardcoded English in the DOM.
 *
 * KR terminology sourced from:
 *   - LWS_Knowledge_Base/kb/06-season-2-frozen.md  (KR ↔ EN table)
 *   - LWS_Knowledge_Base/kb/15-glossary.md         (unified glossary)
 */
(function (global) {
  'use strict';

  var I18N = {
    en: {
      // ---- header / brand ----
      brand: 'R5TOOLS.IO',
      brandSub: 'LWS Suite',
      langToggle: '한국어',

      // ---- main title / lede ----
      title: 'City / Dig-Site Capture Planner',
      lede: 'Season 2 territory planner. Pick which of the 6 cities and 4 dig-sites your alliance captures on each day of Weeks 1–4, factoring city temperature bonuses (+5 °C at L1 → +60 °C at L6) and the 36-hour post-capture protection window.',

      // ---- capacity ----
      capacityCities: 'Cities captured',
      capacityDigs: 'Dig sites captured',
      capacityCitiesHelp: 'Max 6 cities per alliance',
      capacityDigsHelp: 'Max 4 dig sites per alliance',
      captureCounterLabel: 'Captures used today',
      captureCounterMax: 'of 2 max',

      // ---- priority queue ----
      queueHeading: 'Priority queue',
      queueEmpty: 'No candidates loaded yet. Paste candidate coordinates below or upload your scouted list.',
      thPriority: 'Priority',
      thType: 'Type',
      thCoord: 'Coordinate',
      thTargetLevel: 'Target L',
      thHeatDelta: 'Heat Δ',
      thSoilPerHr: 'Soil/hr',
      thUnlock: 'Unlocks',
      thNotes: 'Notes',
      typeCity: 'City',
      typeDig: 'Dig',

      // ---- protection timers ----
      protectionHeading: 'Post-capture protection (36 h)',
      protectionEmpty: 'No captured territories yet. Once you capture, the 36-hour shield countdown appears here.',
      protectionExpires: 'expires in',
      protectionExpired: 'expired — rally-vulnerable',
      protectionExpiringSoon: 'expiring soon',

      // ---- buttons ----
      importRoster: 'Import roster CSV',
      importCandidates: 'Import candidates',
      exportPng: 'Export PNG roadmap',
      exportCsv: 'Export CSV queue',
      exportJson: 'Export JSON queue',
      copyDiscord: 'Copy Discord summary',
      openHeatSim: 'Open Heat Simulator on target',
      rank: 'Rank candidates',
      addCandidate: 'Add candidate',

      // ---- roster panel ----
      rosterHeading: 'Alliance roster',
      rosterEmpty: 'No roster loaded. Upload your alliance CSV (same format as Hive Grid Manager).',
      rosterExposed: 'freeze-exposed',
      rosterCovered: 'covered',

      // ---- hive center ----
      hiveCenterHeading: 'Hive center coordinate',
      hiveCenterHelp: 'Alliance Furnace location (used for adjacency + proximity scoring)',
      hiveCenterX: 'X',
      hiveCenterY: 'Y',

      // ---- week / day picker ----
      weekPickerHeading: 'Season timeline',
      week: 'Week',
      day: 'Day',
      unlockSchedule: 'Unlock schedule',
      unlockL1: 'L1 Village — W1 D3+12h',
      unlockL2: 'L2 Town — W1 D6+12h',
      unlockL3: 'L3 — W2 D3+12h',
      unlockL4: 'L4 — W2 D6+12h',
      unlockL5: 'L5 — W3 D3+12h',
      unlockL6: 'L6 — W3 D6+12h',
      unlockL7: 'L7 (Capitol-tier) — W4 D7+12h',

      // ---- adjacency rule note ----
      adjacencyRule: 'Rule: first capture MUST be a L1 dig site. Every subsequent capture must be adjacent to owned territory.',

      // ---- KB citation ----
      kbCite: 'Numbers sourced from LWS Knowledge Base',

      // ---- footer ----
      footerCred: 'Powered by the LWS Knowledge Base',
      footerLink: 'r5tools.io',

      // ---- gate messages ----
      gateLoading: 'Checking access…',
      gateBlocked: 'This tool requires an Alliance Access Code. Unlocking…',
    },

    ko: {
      brand: 'R5TOOLS.IO',
      brandSub: 'LWS 스위트',
      langToggle: 'EN',

      title: '도시 / 발굴지 점령 플래너',
      lede: '시즌 2 영토 플래너. 도시 6개 + 채굴장 4개 중 어떤 곳을 1~4주차 각 날짜에 점령할지 계획하세요. 도시 온도 보너스(L1 +5°C → L6 +60°C)와 점령 후 36시간 보호 창을 반영합니다.',

      capacityCities: '점령한 도시',
      capacityDigs: '점령한 채굴장',
      capacityCitiesHelp: '연맹당 최대 6개 도시',
      capacityDigsHelp: '연맹당 최대 4개 채굴장',
      captureCounterLabel: '오늘 사용한 점령',
      captureCounterMax: '/ 최대 2회',

      queueHeading: '우선순위 큐',
      queueEmpty: '아직 후보가 없습니다. 아래에 후보 좌표를 붙여넣거나 정찰 목록을 업로드하세요.',
      thPriority: '우선순위',
      thType: '유형',
      thCoord: '좌표',
      thTargetLevel: '목표 레벨',
      thHeatDelta: '온도 Δ',
      thSoilPerHr: '희토/시간',
      thUnlock: '개방',
      thNotes: '메모',
      typeCity: '도시',
      typeDig: '채굴장',

      protectionHeading: '점령 후 보호 (36시간)',
      protectionEmpty: '아직 점령한 영토가 없습니다. 점령 시 36시간 보호막 카운트다운이 여기에 표시됩니다.',
      protectionExpires: '만료까지',
      protectionExpired: '만료됨 — 집결 취약',
      protectionExpiringSoon: '곧 만료',

      importRoster: '연맹원 CSV 가져오기',
      importCandidates: '후보 가져오기',
      exportPng: 'PNG 로드맵 내보내기',
      exportCsv: 'CSV 큐 내보내기',
      exportJson: 'JSON 큐 내보내기',
      copyDiscord: '디스코드 요약 복사',
      openHeatSim: '목표 좌표로 히트 시뮬레이터 열기',
      rank: '후보 순위 매기기',
      addCandidate: '후보 추가',

      rosterHeading: '연맹원 명단',
      rosterEmpty: '명단이 로드되지 않았습니다. 연맹 CSV를 업로드하세요 (하이브 그리드 매니저와 동일 형식).',
      rosterExposed: '동결 노출',
      rosterCovered: '보호됨',

      hiveCenterHeading: '연맹 중심 좌표',
      hiveCenterHelp: '동맹 화로 위치 (인접성 + 근접성 점수 계산에 사용)',
      hiveCenterX: 'X',
      hiveCenterY: 'Y',

      weekPickerHeading: '시즌 타임라인',
      week: '주차',
      day: '일차',
      unlockSchedule: '개방 일정',
      unlockL1: 'L1 마을 — 1주 3일차+12h',
      unlockL2: 'L2 도시 — 1주 6일차+12h',
      unlockL3: 'L3 — 2주 3일차+12h',
      unlockL4: 'L4 — 2주 6일차+12h',
      unlockL5: 'L5 — 3주 3일차+12h',
      unlockL6: 'L6 — 3주 6일차+12h',
      unlockL7: 'L7 (수도급) — 4주 7일차+12h',

      adjacencyRule: '규칙: 첫 번째 점령은 반드시 L1 채굴장이어야 합니다. 이후 모든 점령은 소유 영토에 인접해야 합니다.',

      kbCite: 'LWS 지식 베이스 출처',

      footerCred: 'LWS 지식 베이스에서 지원',
      footerLink: 'r5tools.io',

      gateLoading: '접근 권한 확인 중…',
      gateBlocked: '이 도구는 연맹 액세스 코드가 필요합니다. 잠금 해제 중…',
    },
  };

  // ---- language detection + apply ----

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem('lws_lang'); } catch (e) { /* private mode */ }
    if (stored === 'en' || stored === 'ko') return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('ko') ? 'ko' : 'en';
  }

  var current = detectLang();

  function t(key) {
    var dict = I18N[current] || I18N.en;
    return dict[key] !== undefined ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val !== undefined) el.placeholder = val;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var val = t(key);
      if (val !== undefined) el.title = val;
    });
  }

  function toggle() {
    current = (current === 'en') ? 'ko' : 'en';
    try { localStorage.setItem('lws_lang', current); } catch (e) { /* ignore */ }
    apply();
  }

  global.LWSi18n = {
    t: t,
    apply: apply,
    toggle: toggle,
    lang: function () { return current; },
    dict: I18N,
  };
})(window);
