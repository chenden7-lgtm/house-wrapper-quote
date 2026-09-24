/**
 * 特斯拉隔熱紙 價目數據表 (2026 最新校對版)
 * 部位說明：
 * - 前擋：前擋風玻璃
 * - 車身：前座 + 駕駛座 + 後擋
 * - 天窗：全景天窗
 * - 全車：前擋 + 車身 + 天窗 完整套餐
 */

export const TINTING_BRANDS = [
  {
    id: "sunmark_smart",
    brand: "桑馬克",
    series: "Smart 系列",
    name: "桑馬克 Smart",
    features: "高隔熱率、高透光微金屬奈米技術、視線極致清晰",
    prices: {
      m3: { front: 16000, body: 23000, sunroof: 10000, full: 49000 },
      my: { front: 14000, body: 21000, sunroof: null, full: null }
    }
  },
  {
    id: "sunmark_xc",
    brand: "桑馬克",
    series: "XC 頂級系列",
    name: "桑馬克 XC",
    features: "陶瓷防爆隔熱、不影響電子訊號、尊榮暗色隱密性",
    prices: {
      m3: { front: 12000, body: 19000, sunroof: 9000, full: 40000 },
      my: { front: 12000, body: 15000, sunroof: 9000, full: 36000 }
    }
  },
  {
    id: "3m_ultra",
    brand: "3M",
    series: "極透 Ultra Clear",
    name: "3M 極透",
    features: "仿生百層奈米光學膜、超高透光與頂級絕熱效果",
    prices: {
      m3: { front: 14000, body: 25000, sunroof: 7000, full: 46000 },
      my: { front: 12000, body: 19000, sunroof: 13000, full: 44000 }
    }
  },
  {
    id: "3m_black",
    brand: "3M",
    series: "極黑 Extreme Black",
    name: "3M 極黑",
    features: "高隱密黑色質感、低紅外線穿透、奈米陶瓷不退色",
    prices: {
      m3: { front: 12000, body: 17000, sunroof: 6000, full: 35000 },
      my: { front: 12000, body: 15000, sunroof: 11000, full: 38000 }
    }
  },
  {
    id: "solargard_lx",
    brand: "舒熱佳 Solar Gard",
    series: "LX 頂級金屬防爆膜",
    name: "舒熱佳 LX",
    features: "頂級金屬磁控濺射技術、立體防爆安全性極高",
    prices: {
      m3: { front: 15000, body: null, sunroof: 10000, full: null },
      my: { front: 14000, body: 22000, sunroof: null, full: null }
    }
  },
  {
    id: "solargard_xe",
    brand: "舒熱佳 Solar Gard",
    series: "XE 陶瓷高隔熱系列",
    name: "舒熱佳 XE",
    features: "黑透質感、奈米陶瓷不擋 GPS / eTag 訊號",
    prices: {
      m3: { front: 13000, body: 25000, sunroof: 9000, full: 47000 },
      my: { front: 13000, body: 19000, sunroof: 13000, full: 45000 }
    }
  },
  {
    id: "fsk_kt",
    brand: "FSK 冰鑽",
    series: "KT 尊爵系列",
    name: "FSK 冰鑽KT",
    features: "N-HD 超高清晰度、最高紅外線阻隔率、奢華隱密色澤",
    prices: {
      m3: { front: 12000, body: 25000, sunroof: 7000, full: 44000 },
      my: { front: 12000, body: 17000, sunroof: 13000, full: 42000 }
    }
  },
  {
    id: "fsk_f",
    brand: "FSK 冰鑽",
    series: "F 旗艦系列",
    name: "FSK 冰鑽F",
    features: "無毒環保高質感、無眩光夜間視線佳",
    prices: {
      m3: { front: 11000, body: 17000, sunroof: 6000, full: 34000 },
      my: { front: 11000, body: 12000, sunroof: null, full: null }
    }
  },
  {
    id: "xpel_x2plus",
    brand: "XPEL",
    series: "X2 Plus 奈米陶瓷",
    name: "Xpel X2 Plus",
    features: "美國頂級漆面保護膜品牌出品、高效阻隔 99% 紫外線",
    prices: {
      m3: { front: 12000, body: 19000, sunroof: 7000, full: 38000 },
      my: { front: 12000, body: 15000, sunroof: 12000, full: 39000 }
    }
  },
  {
    id: "ezsun_ev",
    brand: "Ezsun",
    series: "Ev 前擋專用",
    name: "Ezsun Ev",
    features: "前擋高清晰高隔熱性 CP 值首選",
    prices: {
      m3: { front: 11000, body: null, sunroof: null, full: null },
      my: { front: 11000, body: null, sunroof: null, full: null }
    }
  },
  {
    id: "ezsun_es",
    brand: "Ezsun",
    series: "Es 車身/天窗專用",
    name: "Ezsun Es",
    features: "經濟實惠、防曬隔熱效果優良",
    prices: {
      m3: { front: null, body: 11000, sunroof: 4000, full: null },
      my: { front: null, body: 9000, sunroof: 7000, full: null }
    }
  }
];
