const btn = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const skillNum = document.querySelector(".skill-num");
const masteryNum = document.querySelector(".mastery-num");
const enhancement1Num = document.querySelector(".enhancement-1-num");
const enhancement2Num = document.querySelector(".enhancement-2-num");
const enhancement3Num = document.querySelector(".enhancement-3-num");
const enhancement4Num = document.querySelector(".enhancement-4-num");
const progressNum = document.querySelector(".progress-num");
// 技能核心 6轉技能
const skillCore = [
    [
        5,
        100
    ],
    [
        1,
        30
    ],
    [
        1,
        35
    ],
    [
        1,
        40
    ],
    [
        2,
        45
    ],
    [
        2,
        50
    ],
    [
        2,
        55
    ],
    [
        3,
        60
    ],
    [
        3,
        65
    ],
    [
        10,
        200
    ],
    [
        3,
        80
    ],
    [
        3,
        90
    ],
    [
        4,
        100
    ],
    [
        4,
        110
    ],
    [
        4,
        120
    ],
    [
        4,
        130
    ],
    [
        4,
        140
    ],
    [
        4,
        150
    ],
    [
        5,
        160
    ],
    [
        15,
        350
    ],
    [
        5,
        170
    ],
    [
        5,
        180
    ],
    [
        5,
        190
    ],
    [
        5,
        200
    ],
    [
        5,
        210
    ],
    [
        6,
        220
    ],
    [
        6,
        230
    ],
    [
        6,
        240
    ],
    [
        7,
        250
    ],
    [
        20,
        500
    ]
];
// 精通核心 強化1-4轉技能
const masteryCore = [
    [
        3,
        50
    ],
    [
        1,
        15
    ],
    [
        1,
        18
    ],
    [
        1,
        20
    ],
    [
        1,
        23
    ],
    [
        1,
        25
    ],
    [
        1,
        28
    ],
    [
        2,
        30
    ],
    [
        2,
        33
    ],
    [
        5,
        100
    ],
    [
        2,
        40
    ],
    [
        2,
        45
    ],
    [
        2,
        50
    ],
    [
        2,
        55
    ],
    [
        2,
        60
    ],
    [
        2,
        65
    ],
    [
        2,
        70
    ],
    [
        2,
        75
    ],
    [
        3,
        80
    ],
    [
        8,
        175
    ],
    [
        3,
        85
    ],
    [
        3,
        90
    ],
    [
        3,
        95
    ],
    [
        3,
        100
    ],
    [
        3,
        105
    ],
    [
        3,
        110
    ],
    [
        3,
        115
    ],
    [
        3,
        120
    ],
    [
        4,
        125
    ],
    [
        10,
        250
    ]
];
// 強化核心 強化5轉技能
const enhancementCore = [
    [
        4,
        75
    ],
    [
        1,
        23
    ],
    [
        1,
        27
    ],
    [
        1,
        30
    ],
    [
        2,
        34
    ],
    [
        2,
        38
    ],
    [
        2,
        42
    ],
    [
        3,
        45
    ],
    [
        3,
        49
    ],
    [
        8,
        150
    ],
    [
        3,
        60
    ],
    [
        3,
        68
    ],
    [
        3,
        75
    ],
    [
        3,
        83
    ],
    [
        3,
        90
    ],
    [
        3,
        98
    ],
    [
        3,
        105
    ],
    [
        3,
        113
    ],
    [
        4,
        120
    ],
    [
        12,
        263
    ],
    [
        4,
        128
    ],
    [
        4,
        135
    ],
    [
        4,
        143
    ],
    [
        4,
        150
    ],
    [
        4,
        158
    ],
    [
        5,
        165
    ],
    [
        5,
        173
    ],
    [
        5,
        180
    ],
    [
        6,
        188
    ],
    [
        15,
        375
    ]
];
// 共通核心 6轉共通技能
const commonCore = [
    [
        7,
        125
    ],
    [
        2,
        38
    ],
    [
        2,
        44
    ],
    [
        2,
        50
    ],
    [
        3,
        57
    ],
    [
        3,
        63
    ],
    [
        3,
        69
    ],
    [
        5,
        75
    ],
    [
        5,
        82
    ],
    [
        14,
        300
    ],
    [
        5,
        110
    ],
    [
        5,
        124
    ],
    [
        6,
        138
    ],
    [
        6,
        152
    ],
    [
        6,
        165
    ],
    [
        6,
        179
    ],
    [
        6,
        193
    ],
    [
        6,
        207
    ],
    [
        7,
        220
    ],
    [
        17,
        525
    ],
    [
        7,
        234
    ],
    [
        7,
        248
    ],
    [
        7,
        262
    ],
    [
        7,
        275
    ],
    [
        7,
        289
    ],
    [
        9,
        303
    ],
    [
        9,
        317
    ],
    [
        9,
        330
    ],
    [
        10,
        344
    ],
    [
        20,
        750
    ]
];
// 計算靈魂愛爾達總量
const calcSoulErdaNum = function(coreArr) {
    const soulErdaNum = [];
    coreArr.forEach((element)=>{
        soulErdaNum.push(element[0]);
    });
    const numSkillEdra = soulErdaNum.reduce((acc, cur)=>acc + cur, 0);
    return numSkillEdra;
};
// 計算靈魂愛爾達"碎片"總量
const calcErdaFragNum = function(coreArr) {
    const erdaFragNum = [];
    coreArr.forEach((element)=>{
        erdaFragNum.push(element[1]);
    });
    const numSkillEdra = erdaFragNum.reduce((acc, cur)=>acc + cur, 0);
    return numSkillEdra;
};
// 每個核心滿等所需數量
const maxSkill = calcErdaFragNum(skillCore);
const maxMastery = calcErdaFragNum(masteryCore);
const maxEnhancement = calcErdaFragNum(enhancementCore);
const total = maxSkill + maxMastery + 4 * maxEnhancement;
btn.addEventListener("click", function() {
    //獲得按下按鈕當下的input value
    const skill = document.getElementById("skill").value;
    const mastery = document.getElementById("mastery").value;
    const enhancement1 = document.getElementById("enhancement-1").value;
    const enhancement2 = document.getElementById("enhancement-2").value;
    const enhancement3 = document.getElementById("enhancement-3").value;
    const enhancement4 = document.getElementById("enhancement-4").value;
    // 技能核心進度
    const skillProgress = calcErdaFragNum(skillCore.slice(0, skill)) / maxSkill;
    // 精通核心進度
    const masteryProgress = calcErdaFragNum(masteryCore.slice(0, mastery)) / maxMastery;
    // 強化核心進度
    const enhancement1Progress = calcErdaFragNum(enhancementCore.slice(0, enhancement1)) / maxEnhancement;
    const enhancement2Progress = calcErdaFragNum(enhancementCore.slice(0, enhancement2)) / maxEnhancement;
    const enhancement3Progress = calcErdaFragNum(enhancementCore.slice(0, enhancement3)) / maxEnhancement;
    const enhancement4Progress = calcErdaFragNum(enhancementCore.slice(0, enhancement4)) / maxEnhancement;
    // 六轉總進度
    const totalProgress = (skillProgress * maxSkill + masteryProgress * maxMastery + enhancement1Progress * maxEnhancement + enhancement2Progress * maxEnhancement + enhancement3Progress * maxEnhancement + enhancement4Progress * maxEnhancement) / total;
    // 改變html上顯示的數值
    skillNum.textContent = (skillProgress * 100).toFixed(2);
    masteryNum.textContent = (masteryProgress * 100).toFixed(2);
    enhancement1Num.textContent = (enhancement1Progress * 100).toFixed(2);
    enhancement2Num.textContent = (enhancement2Progress * 100).toFixed(2);
    enhancement3Num.textContent = (enhancement3Progress * 100).toFixed(2);
    enhancement4Num.textContent = (enhancement4Progress * 100).toFixed(2);
    progressNum.textContent = (totalProgress * 100).toFixed(2);
});

//# sourceMappingURL=index.672d4772.js.map
