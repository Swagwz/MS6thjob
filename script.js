const btn = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const skillNum = document.querySelector(".skill-progress");
const commonNum = document.querySelector(".common-progress");
const mastery1Num = document.querySelector(".mastery-1-progress");
const mastery2Num = document.querySelector(".mastery-2-progress");
const enhancement1Num = document.querySelector(".enhancement-1-progress");
const enhancement2Num = document.querySelector(".enhancement-2-progress");
const enhancement3Num = document.querySelector(".enhancement-3-progress");
const enhancement4Num = document.querySelector(".enhancement-4-progress");
const progressNum = document.querySelector(".total-progress");
const fragmentNum = document.querySelector(".total-fragment");
const allInputs = document.querySelectorAll("input");

// 從LocalStorage拿data
document.getElementById("skill").value = localStorage.getItem("skill");
document.getElementById("common").value = localStorage.getItem("common");
document.getElementById("mastery-1").value = localStorage.getItem("mastery1");
document.getElementById("mastery-2").value = localStorage.getItem("mastery2");
document.getElementById("enhancement-1").value =
  localStorage.getItem("enhancement1");
document.getElementById("enhancement-2").value =
  localStorage.getItem("enhancement2");
document.getElementById("enhancement-3").value =
  localStorage.getItem("enhancement3");
document.getElementById("enhancement-4").value =
  localStorage.getItem("enhancement4");

// 技能核心 6轉技能
const skillCore = [
  [5, 100],
  [1, 30],
  [1, 35],
  [1, 40],
  [2, 45],
  [2, 50],
  [2, 55],
  [3, 60],
  [3, 65],
  [10, 200],
  [3, 80],
  [3, 90],
  [4, 100],
  [4, 110],
  [4, 120],
  [4, 130],
  [4, 140],
  [4, 150],
  [5, 160],
  [15, 350],
  [5, 170],
  [5, 180],
  [5, 190],
  [5, 200],
  [5, 210],
  [6, 220],
  [6, 230],
  [6, 240],
  [7, 250],
  [20, 500],
];

// 精通核心 強化1-4轉技能
const masteryCore = [
  [3, 50],
  [1, 15],
  [1, 18],
  [1, 20],
  [1, 23],
  [1, 25],
  [1, 28],
  [2, 30],
  [2, 33],
  [5, 100],
  [2, 40],
  [2, 45],
  [2, 50],
  [2, 55],
  [2, 60],
  [2, 65],
  [2, 70],
  [2, 75],
  [3, 80],
  [8, 175],
  [3, 85],
  [3, 90],
  [3, 95],
  [3, 100],
  [3, 105],
  [3, 110],
  [3, 115],
  [3, 120],
  [4, 125],
  [10, 250],
];

// 強化核心 強化5轉技能
const enhancementCore = [
  [4, 75],
  [1, 23],
  [1, 27],
  [1, 30],
  [2, 34],
  [2, 38],
  [2, 42],
  [3, 45],
  [3, 49],
  [8, 150],
  [3, 60],
  [3, 68],
  [3, 75],
  [3, 83],
  [3, 90],
  [3, 98],
  [3, 105],
  [3, 113],
  [4, 120],
  [12, 263],
  [4, 128],
  [4, 135],
  [4, 143],
  [4, 150],
  [4, 158],
  [5, 165],
  [5, 173],
  [5, 180],
  [6, 188],
  [15, 375],
];

// 共通核心 6轉共通技能
const commonCore = [
  [7, 125],
  [2, 38],
  [2, 44],
  [2, 50],
  [3, 57],
  [3, 63],
  [3, 69],
  [5, 75],
  [5, 82],
  [14, 300],
  [5, 110],
  [5, 124],
  [6, 138],
  [6, 152],
  [6, 165],
  [6, 179],
  [6, 193],
  [6, 207],
  [7, 220],
  [17, 525],
  [7, 234],
  [7, 248],
  [7, 262],
  [7, 275],
  [7, 289],
  [9, 303],
  [9, 317],
  [9, 330],
  [10, 344],
  [20, 750],
];

// 計算靈魂愛爾達總量
const calcSoulErdaNum = function (coreArr) {
  const soulErdaNum = [];
  coreArr.forEach((element) => {
    soulErdaNum.push(element[0]);
  });
  const numSkillEdra = soulErdaNum.reduce((acc, cur) => acc + cur, 0);
  return numSkillEdra;
};

// 計算靈魂愛爾達"碎片"總量
const calcErdaFragNum = function (coreArr) {
  const erdaFragNum = [];
  coreArr.forEach((element) => {
    erdaFragNum.push(element[1]);
  });
  const numSkillEdra = erdaFragNum.reduce((acc, cur) => acc + cur, 0);
  return numSkillEdra;
};

// 每個核心滿等所需數量
const maxSkill = calcErdaFragNum(skillCore);
const maxMastery = calcErdaFragNum(masteryCore);
const maxEnhancement = calcErdaFragNum(enhancementCore);
const maxCommon = calcErdaFragNum(commonCore);
const total = maxSkill + maxCommon + 2 * maxMastery + 4 * maxEnhancement;

btn.addEventListener("click", function () {
  //獲得按下按鈕當下的input value
  const skill = document.getElementById("skill").value;
  const common = document.getElementById("common").value;
  const mastery1 = document.getElementById("mastery-1").value;
  const mastery2 = document.getElementById("mastery-2").value;
  const enhancement1 = document.getElementById("enhancement-1").value;
  const enhancement2 = document.getElementById("enhancement-2").value;
  const enhancement3 = document.getElementById("enhancement-3").value;
  const enhancement4 = document.getElementById("enhancement-4").value;

  // LocalStorage 紀錄數值
  localStorage.setItem("skill", skill);
  localStorage.setItem("common", common);
  localStorage.setItem("mastery1", mastery1);
  localStorage.setItem("mastery2", mastery2);
  localStorage.setItem("enhancement1", enhancement1);
  localStorage.setItem("enhancement2", enhancement2);
  localStorage.setItem("enhancement3", enhancement3);
  localStorage.setItem("enhancement4", enhancement4);

  // 技能核心進度
  const skillFrag = calcErdaFragNum(skillCore.slice(0, skill));
  const skillProgress = skillFrag / maxSkill;

  // 共通核心進度
  const commonFrag = calcErdaFragNum(commonCore.slice(0, common));
  const comonProgress = commonFrag / maxCommon;

  // 精通核心進度
  const mastery1Frag = calcErdaFragNum(masteryCore.slice(0, mastery1));
  const masteryProgress1 = mastery1Frag / maxMastery;

  const mastery2Frag = calcErdaFragNum(masteryCore.slice(0, mastery2));
  const masteryProgress2 = mastery2Frag / maxMastery;

  // 強化核心進度
  const enhance1Frag = calcErdaFragNum(enhancementCore.slice(0, enhancement1));
  const enhancement1Progress = enhance1Frag / maxEnhancement;

  const enhance2Frag = calcErdaFragNum(enhancementCore.slice(0, enhancement2));
  const enhancement2Progress = enhance2Frag / maxEnhancement;

  const enhance3Frag = calcErdaFragNum(enhancementCore.slice(0, enhancement3));
  const enhancement3Progress = enhance3Frag / maxEnhancement;

  const enhance4Frag = calcErdaFragNum(enhancementCore.slice(0, enhancement4));
  const enhancement4Progress = enhance4Frag / maxEnhancement;

  // 六轉總進度
  const totalProgress =
    (skillProgress * maxSkill +
      comonProgress * maxCommon +
      masteryProgress1 * maxMastery +
      masteryProgress2 * maxMastery +
      enhancement1Progress * maxEnhancement +
      enhancement2Progress * maxEnhancement +
      enhancement3Progress * maxEnhancement +
      enhancement4Progress * maxEnhancement) /
    total;

  const totalFragment =
    skillFrag +
    commonFrag +
    mastery1Frag +
    mastery2Frag +
    enhance1Frag +
    enhance2Frag +
    enhance3Frag +
    enhance4Frag;

  // 改變html上顯示的數值
  skillNum.textContent = `進度 : ${(skillProgress * 100).toFixed(2)}%`;
  commonNum.textContent = `進度 : ${(comonProgress * 100).toFixed(2)}%`;
  mastery1Num.textContent = `進度 : ${(masteryProgress1 * 100).toFixed(2)}%`;
  mastery2Num.textContent = `進度 : ${(masteryProgress2 * 100).toFixed(2)}%`;
  enhancement1Num.textContent = `進度 : ${(enhancement1Progress * 100).toFixed(
    2
  )}%`;
  enhancement2Num.textContent = `進度 : ${(enhancement2Progress * 100).toFixed(
    2
  )}%`;
  enhancement3Num.textContent = `進度 : ${(enhancement3Progress * 100).toFixed(
    2
  )}%`;
  enhancement4Num.textContent = `進度 : ${(enhancement4Progress * 100).toFixed(
    2
  )}%`;
  progressNum.textContent = `目前6轉進度為: ${(totalProgress * 100).toFixed(
    2
  )}%`;
  fragmentNum.textContent = `累積碎片量為: ${totalFragment}個`;
});

// 限制input max 跟 min
allInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    if (+e.target.value >= 30) e.target.value = 30;
    else if (+e.target.value < 0) e.target.value = 0;
  })
);
