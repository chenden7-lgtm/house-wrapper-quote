/**
 * 好室多膜 一站式服務 - 特斯拉電系改裝價目表 (包含多車型價格切換)
 * 車型說明：
 * - 舊3: 2024年前的 Model 3 (2017-2023 舊款中控)
 * - 新3: 2024+ 煥新版 Model 3 (Highland)
 * - 舊Y: 2020-2024 Model Y (經典款)
 * - 新Y: 2025+ 煥新版 Model Y (Juniper)
 */

export const ELECTRICAL_MODS = [
  {
    id: "elec-soft-frunk",
    name: "電吸前箱",
    category: "power_trunk",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&auto=format&fit=crop&q=60",
    note: "升級半自動電吸功能，輕推前箱蓋即自動吸合，保護原車鎖頭完工",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 5000,
        discountPrice: 4000
      }
    ]
  },
  {
    id: "elec-power-frunk",
    name: "電動前箱",
    category: "power_trunk",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&auto=format&fit=crop&q=60",
    note: "全自動雙撐桿開合前箱蓋，支援手機 APP、中控螢幕與感應開合完工",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 15000,
        discountPrice: 12000
      }
    ]
  },
  {
    id: "elec-sunroof",
    name: "電動天窗遮陽簾",
    category: "sunroof",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500&auto=format&fit=crop&q=60",
    note: "雙馬力靜音馬達，高效抗 UV 遮陽隔熱，支援原車控制一鍵開合",
    fitmentText: "舊Y / 新Y / 舊3 / 新3",
    fitmentModels: ["my_classic", "my_juniper", "m3_classic", "m3_highland"],
    options: [
      {
        modelId: "my_classic",
        label: "舊 Model Y (2020-24)",
        originalPrice: 15000,
        discountPrice: 12000
      },
      {
        modelId: "my_juniper",
        label: "煥新 Model Y (2025+ Juniper)",
        originalPrice: 17000,
        discountPrice: 13600
      },
      {
        modelId: "m3_all",
        label: "Model 3 全車系 (舊3 / 新3)",
        originalPrice: 20000,
        discountPrice: 16000
      }
    ]
  },
  {
    id: "elec-handles",
    name: "電動感應隱藏手把",
    category: "door",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60",
    note: "靠近車輛自動彈出手把，內建璀璨 LED 迎賓照明與防夾安全保護",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 16000,
        discountPrice: 12800
      }
    ]
  },
  {
    id: "elec-doors",
    name: "靜音智能電吸門 (四門組)",
    category: "door",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60",
    note: "輕合即自動靜音吸緊，升級原廠尊榮開關門質感，無損安裝完工",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 17500,
        discountPrice: 14000
      }
    ]
  },
  {
    id: "elec-screen-swivel",
    name: "中控大螢幕旋轉轉向支架",
    category: "interior",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60",
    note: "左右/上下多向自由調整角度，消除太陽反光，提升駕駛視野與操作體驗",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 3500,
        discountPrice: 2800
      }
    ]
  },
  {
    id: "elec-yoke-wheel",
    name: "Yoke 賽車風格方向盤",
    category: "steering",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60",
    note: "頂級 Nappa 真皮/碳纖維質感工藝，開闊前視野，操控手感大躍進",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 12000,
        discountPrice: 9600
      }
    ]
  },
  {
    id: "elec-shifter",
    name: "實體方向盤換檔撥桿",
    category: "control",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60",
    note: "專為煥新版車款設計，完美還原實體 PRND 檔位與方向燈撥桿手感",
    fitmentText: "新3 / 新Y",
    fitmentModels: ["m3_highland", "my_juniper"],
    options: [
      {
        modelId: "m3_highland",
        label: "煥新 Model 3 (2024+ Highland)",
        originalPrice: 19000,
        discountPrice: 15200
      },
      {
        modelId: "my_juniper",
        label: "煥新 Model Y (2025+ Juniper)",
        originalPrice: 9500,
        discountPrice: 7600
      }
    ]
  },
  {
    id: "elec-buttons",
    name: "中控車用實體控制按鍵盤",
    category: "control",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60",
    note: "專用直覺按鍵，一鍵開啟手套箱、解鎖車門、開前箱與車況快捷控制",
    fitmentText: "舊3.Y / 新3",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 (舊3/新3) / Model Y (舊Y)",
        originalPrice: 7000,
        discountPrice: 5600
      }
    ]
  },
  {
    id: "elec-rear-screen",
    name: "後排獨立多媒體影音控制螢幕",
    category: "display",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60",
    note: "舊款升級煥新同款後排 LCD，支援後座獨立空調風量控制與座椅加熱",
    fitmentText: "舊3.Y (2017-2024)",
    fitmentModels: ["m3_classic", "my_classic"],
    options: [
      {
        modelId: "classic_3y",
        label: "舊 Model 3 / 舊 Model Y (2017-2024)",
        originalPrice: 12000,
        discountPrice: 9600
      }
    ]
  },
  {
    id: "elec-cluster-89",
    name: "8.9 吋駕駛前液晶大儀表",
    category: "cluster",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60",
    note: "前置高清液晶顯示，支援 Apple CarPlay / Android Auto 與車側盲區影像",
    fitmentText: "舊3.Y / 新3.Y",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic", "my_juniper"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 / Model Y (全車系)",
        originalPrice: 13000,
        discountPrice: 10400
      }
    ]
  },
  {
    id: "elec-cluster-68",
    name: "6.8 吋前駕駛迷你儀表",
    category: "cluster",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60",
    note: "簡約薄型設計不擋出風口，實時同步顯示行車檔位、車速與電池剩餘電量",
    fitmentText: "舊3.Y / 新3",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 (舊3/新3) / Model Y (舊Y)",
        originalPrice: 11000,
        discountPrice: 8800
      }
    ]
  },
  {
    id: "elec-ambient-light",
    name: "全車環抱式動態氣氛燈組",
    category: "lighting",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60",
    note: "128 色漸變與動態音樂律動，原車螢幕整合控制，沉浸式座艙氛圍",
    fitmentText: "舊3.Y (2017-2024)",
    fitmentModels: ["m3_classic", "my_classic"],
    options: [
      {
        modelId: "classic_3y",
        label: "舊 Model 3 / 舊 Model Y (2017-2024)",
        originalPrice: 18000,
        discountPrice: 14400
      }
    ]
  },
  {
    id: "elec-angel-wings",
    name: "天使之翼迎賓地照燈",
    category: "lighting",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60",
    note: "開啟車門即向地面投影流光天使羽翼，高質感迎賓效果與夜間路面照明",
    fitmentText: "舊3.Y / 新3",
    fitmentModels: ["m3_classic", "m3_highland", "my_classic"],
    options: [
      {
        modelId: "all_models",
        label: "Model 3 (舊3/新3) / Model Y (舊Y)",
        originalPrice: 5000,
        discountPrice: 4000
      }
    ]
  }
];
