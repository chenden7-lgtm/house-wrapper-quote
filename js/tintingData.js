/**
 * 特斯拉隔熱紙 價目數據表 (2026 最終及對外報價表 - 完整校對版)
 * 資料來源：Tesla_Model3_ModelY_最終及對外報價表.xlsx
 * 
 * 對外報價規則：
 * 1. 前擋 / 車身 / 天窗：採三家廠商（錸沛、ACME、星輝）最高成本價各加 NT$ 1,500
 * 2. 全車套裝優惠價（不含天窗）：維持內部三家最高套裝價（即不加價，作為套裝優惠）
 * 3. 客戶自選混搭折扣規則：
 *    - 選【前擋 ＋ 車身】：總金額自動現折 NT$ 500
 *    - 選【前擋 ＋ 車身 ＋ 天窗】：三部位全選總金額自動現折 NT$ 1,000
 * 
 * 廠商合作夥伴：
 * - 錸沛 (Lai Pei)
 * - ACME (昆哥)
 * - 星輝 (Xing Hui)
 */

export const VENDOR_INFO = {
  yingge: { id: "yingge", name: "營哥", shortName: "營哥" },
  laipei: { id: "laipei", name: "錸沛", shortName: "錸沛" },
  acme: { id: "acme", name: "ACME", shortName: "ACME (昆哥)" },
  xinghui: { id: "xinghui", name: "星輝", shortName: "星輝" }
};

export const TINTING_BRANDS = [
  {
    id: "sunmark_rr",
    brand: "桑瑪克",
    series: "RR 頂級旗艦系列",
    name: "桑瑪克 RR",
    features: "頂級多層微金屬奈米磁控濺射、極致高隔熱、夜視清晰低內反光",
    // 廠商原始成本
    vendorCosts: {
      m3: {
        yingge: { front: 9000, body: 17000, sunroof: 9000, full: 28000 },
        laipei: {},
        acme: {},
        xinghui: { front: 15000, body: 35000, sunroof: 10000, full: 50000 }
      },
      my: {
        yingge: { front: 9000, body: 17000, full: 25000 },
        laipei: {},
        acme: {},
        xinghui: { front: 15000, body: 25000, sunroof: 15000, full: 40000 }
      }
    },
    // 對外報價 (各部位+1500，全車維持內部最高)
    prices: {
      m3: { front: 16500, body: 36500, sunroof: 11500, full: 50000 },
      my: { front: 16500, body: 26500, sunroof: 16500, full: 40000 }
    }
  },
  {
    id: "sunmark_smart",
    brand: "桑瑪克",
    series: "Smart 智能系列",
    name: "桑瑪克 Smart",
    features: "高隔熱率、高透光微金屬奈米技術、後擋原廠分開兩張貼工",
    vendorCosts: {
      m3: {
        yingge: { front: 7000, body: 14000, sunroof: 7000, full: 21000 },
        laipei: { front: 14000, sunroof: 9000 },
        acme: { front: 12000, body: 22000, full: 32000 },
        xinghui: { front: 10000, body: 20000, sunroof: 8000, full: 30000 }
      },
      my: {
        yingge: { front: 7000, body: 14000, full: 21000 },
        laipei: { front: 12000 },
        acme: { front: 12000, body: 20000, full: 30000 },
        xinghui: { front: 10000, body: 20000, sunroof: 12000, full: 30000 }
      }
    },
    prices: {
      m3: { front: 15500, body: 23500, sunroof: 10500, full: 41000 },
      my: { front: 13500, body: 21500, sunroof: 13500, full: 30000 }
    }
  },
  {
    id: "sunmark_xc",
    brand: "桑瑪克",
    series: "XC 頂級系列",
    name: "桑瑪克 XC",
    features: "陶瓷防爆隔熱、不影響電子訊號、尊榮暗色高隱密性",
    vendorCosts: {
      m3: {
        yingge: { front: 6000, body: 15000, sunroof: 6000, full: 27000 },
        laipei: { front: 10000, body: 16000, sunroof: 8000, full: 34000 },
        acme: { front: 10000, body: 18000, sunroof: 4000, full: 32000 },
        xinghui: { front: 9000, body: 20000, sunroof: 8000, full: 29000 }
      },
      my: {
        yingge: { front: 6000, body: 12000, sunroof: 10000, full: 28000 },
        laipei: { front: 10000, body: 14000, sunroof: 8000, full: 32000 },
        acme: { front: 10000, body: 16000, sunroof: 8000, full: 34000 },
        xinghui: { front: 9000, body: 18000, sunroof: 8000, full: 27000 }
      }
    },
    prices: {
      m3: { front: 11500, body: 21500, sunroof: 9500, full: 34000 },
      my: { front: 11500, body: 19500, sunroof: 9500, full: 34000 }
    }
  },
  {
    id: "sunmark_kc",
    brand: "桑瑪克",
    series: "KC 經典系列",
    name: "桑瑪克 KC",
    features: "高 CP 值隔熱之選、清晰高透光、親民實惠",
    vendorCosts: {
      m3: {
        yingge: { front: 3000, body: 8000, sunroof: 3000, full: 14000 },
        laipei: {},
        acme: {},
        xinghui: { front: 6000, body: 15000, sunroof: 6000, full: 21000 }
      },
      my: {
        yingge: { front: 3000, body: 6000, sunroof: 5000, full: 14000 },
        laipei: {},
        acme: {},
        xinghui: { front: 6500, body: 12000, sunroof: 6000, full: 18500 }
      }
    },
    prices: {
      m3: { front: 7500, body: 16500, sunroof: 7500, full: 21000 },
      my: { front: 8000, body: 13500, sunroof: 7500, full: 18500 }
    }
  },
  {
    id: "3m_ultra",
    brand: "3M",
    series: "極透 Ultra Clear",
    name: "3M 極透",
    features: "仿生百層奈米光學膜、超高透光與頂級絕熱效果、不擋電子訊號",
    vendorCosts: {
      m3: {
        yingge: { front: 9000, body: 20000, sunroof: 8000, full: 29000 },
        laipei: { front: 10000, body: 24000, sunroof: 6000, full: 40000 },
        acme: { front: 12000, body: 20000, sunroof: 4000, full: 30000 },
        xinghui: { front: 10000, body: 20000, sunroof: 4000, full: 30000 }
      },
      my: {
        yingge: { front: 9000, body: 17000, sunroof: 14000, full: 36000 },
        laipei: { front: 10000, body: 16000, sunroof: 12000, full: 38000 },
        acme: { front: 12000, body: 18000, sunroof: 10000, full: 28000 },
        xinghui: { front: 10000, body: 20000, sunroof: 10000, full: 30000 }
      }
    },
    prices: {
      m3: { front: 13500, body: 25500, sunroof: 7500, full: 40000 },
      my: { front: 13500, body: 21500, sunroof: 13500, full: 38000 }
    }
  },
  {
    id: "3m_black",
    brand: "3M",
    series: "極黑 Extreme Black",
    name: "3M 極黑",
    features: "極致黑色質感美學、低紅外線穿透、奈米陶瓷不退色、高隱密性",
    vendorCosts: {
      m3: {
        yingge: { front: 6000, body: 14000, sunroof: 6000, full: 24000 },
        laipei: { front: 9000, body: 16000, sunroof: 5000, full: 30000 },
        acme: { front: 10000, body: 16000, sunroof: 3000, full: 24000 },
        xinghui: { front: 6500, body: 15000, sunroof: 3000, full: 21500 }
      },
      my: {
        yingge: { front: 6000, body: 12000, sunroof: 10000, full: 26000 },
        laipei: { front: 9000, body: 11000, sunroof: 10000, full: 30000 },
        acme: { front: 10000, body: 14000, sunroof: 8000, full: 22000 },
        xinghui: { front: 7000, body: 15000, sunroof: 8000, full: 22000 }
      }
    },
    prices: {
      m3: { front: 11500, body: 17500, sunroof: 6500, full: 30000 },
      my: { front: 11500, body: 16500, sunroof: 11500, full: 30000 }
    }
  },
  {
    id: "solargard_lx",
    brand: "舒熱佳",
    series: "LX 頂級金屬防爆膜",
    name: "舒熱佳 LX",
    features: "14層磁控濺射貴金屬、頂級立體防爆安全性極高、超強隔熱實力",
    vendorCosts: {
      m3: {
        yingge: { front: 10000, body: 18000, sunroof: 8000, full: 28000 },
        laipei: { front: 13000, sunroof: 9000 },
        acme: {},
        xinghui: { front: 15000, body: 30000, sunroof: 8000, full: 45000 }
      },
      my: {
        yingge: { front: 10000, body: 18000, full: 25000 },
        laipei: { front: 12000, body: 21000 },
        acme: {},
        xinghui: { front: 15000, body: 30000, sunroof: 15000, full: 45000 }
      }
    },
    prices: {
      m3: { front: 16500, body: 31500, sunroof: 10500, full: 45000 },
      my: { front: 16500, body: 31500, sunroof: 16500, full: 45000 }
    }
  },
  {
    id: "solargard_xe",
    brand: "舒熱佳",
    series: "XE 陶瓷高隔熱系列",
    name: "舒熱佳 XE",
    features: "純黑沉穩色澤、奈米陶瓷不擋 GPS / eTag 訊號、極佳清透視線",
    vendorCosts: {
      m3: {
        yingge: { front: 7000, body: 17000, sunroof: 7000, full: 28000 },
        laipei: { front: 11000, body: 24000, sunroof: 8000, full: 43000 },
        acme: {},
        xinghui: { front: 15000, body: 30000, sunroof: 8000, full: 45000 }
      },
      my: {
        yingge: { front: 7000, body: 15000, sunroof: 12000, full: 30000 },
        laipei: { front: 11000, body: 18000, sunroof: 12000, full: 41000 },
        acme: {},
        xinghui: { front: 15000, body: 30000, sunroof: 15000, full: 45000 }
      }
    },
    prices: {
      m3: { front: 16500, body: 31500, sunroof: 9500, full: 45000 },
      my: { front: 16500, body: 31500, sunroof: 16500, full: 45000 }
    }
  },
  {
    id: "fsk_kt",
    brand: "FSK 冰鑽",
    series: "KT 尊爵系列",
    name: "FSK 冰鑽KT",
    features: "N-HD 超高清晰度、極高紅外線阻隔率、奢華隱密黑色澤",
    vendorCosts: {
      m3: {
        yingge: { front: 8000, body: 18000, sunroof: 7000, full: 27000 },
        laipei: { front: 10000, body: 24000, sunroof: 6000, full: 40000 },
        acme: {},
        xinghui: { front: 10000, body: 20000, sunroof: 8000, full: 30000 }
      },
      my: {
        yingge: { front: 8000, body: 10000, sunroof: 12000, full: 30000 },
        laipei: { front: 10000, body: 16000, sunroof: 12000, full: 38000 },
        acme: {},
        xinghui: { front: 10000, body: 20000, sunroof: 10000, full: 30000 }
      }
    },
    prices: {
      m3: { front: 11500, body: 25500, sunroof: 9500, full: 40000 },
      my: { front: 11500, body: 21500, sunroof: 13500, full: 38000 }
    }
  },
  {
    id: "fsk_f",
    brand: "FSK 冰鑽",
    series: "F 旗艦系列",
    name: "FSK 冰鑽F",
    features: "無毒環保高質感、無眩光夜間視線佳、長年熱銷經典",
    vendorCosts: {
      m3: {
        yingge: { front: 6000, body: 12000, sunroof: 6000, full: 23000 },
        laipei: { front: 9000, body: 16000, sunroof: 5000, full: 30000 },
        acme: {},
        xinghui: { front: 8000, body: 16000, sunroof: 6000, full: 24000 }
      },
      my: {
        yingge: { front: 6000, body: 12000, full: 15000 },
        laipei: { front: 9000, body: 11000 },
        acme: {},
        xinghui: { front: 8000, body: 16000, sunroof: 8000, full: 24000 }
      }
    },
    prices: {
      m3: { front: 10500, body: 17500, sunroof: 7500, full: 30000 },
      my: { front: 10500, body: 17500, sunroof: 9500, full: 24000 }
    }
  },
  {
    id: "xpel_x2plus",
    brand: "XPEL",
    series: "X2 Plus 奈米陶瓷",
    name: "Xpel X2 Plus",
    features: "美國頂級漆面保護膜品牌出品、高效阻隔 99% 紫外線、絕佳耐候",
    vendorCosts: {
      m3: {
        yingge: {},
        laipei: { front: 10000, body: 18000, sunroof: 6000, full: 34000 },
        acme: {},
        xinghui: {}
      },
      my: {
        yingge: {},
        laipei: { front: 10000, body: 14000, sunroof: 11000, full: 35000 },
        acme: {},
        xinghui: {}
      }
    },
    prices: {
      m3: { front: 11500, body: 19500, sunroof: 7500, full: 34000 },
      my: { front: 11500, body: 15500, sunroof: 12500, full: 35000 }
    }
  },
  {
    id: "ezsun_ev",
    brand: "Ezsun",
    series: "Ev 前擋專用系列",
    name: "Ezsun Ev",
    features: "前擋高清晰高隔熱性 CP 值首選、電子訊號無阻",
    vendorCosts: {
      m3: {
        yingge: {},
        laipei: {},
        acme: { front: 9000 },
        xinghui: {}
      },
      my: {
        yingge: {},
        laipei: {},
        acme: { front: 9000 },
        xinghui: {}
      }
    },
    prices: {
      m3: { front: 10500, body: null, sunroof: null, full: null },
      my: { front: 10500, body: null, sunroof: null, full: null }
    }
  },
  {
    id: "ezsun_es",
    brand: "Ezsun",
    series: "Es 車身/天窗專用系列",
    name: "Ezsun Es",
    features: "經濟實惠、防曬隔熱效果優良、親民高性價比",
    vendorCosts: {
      m3: {
        yingge: {},
        laipei: {},
        acme: { body: 10000, sunroof: 3000 },
        xinghui: {}
      },
      my: {
        yingge: {},
        laipei: {},
        acme: { body: 8000, sunroof: 6000 },
        xinghui: {}
      }
    },
    prices: {
      m3: { front: null, body: 11500, sunroof: 4500, full: null },
      my: { front: null, body: 9500, sunroof: 7500, full: null }
    }
  }
];

/**
 * 試算特定搭配組合時，各家廠商成本與找出「最便宜最划算」的施工廠商
 * 
 * @param {string} modelKey 'm3' 或 'my'
 * @param {Object} selection 搭配選擇
 *    - frontId: 前擋品牌ID (例如 '3m_ultra', 'none')
 *    - bodyId: 車身品牌ID (例如 '3m_black', 'none')
 *    - sunroofId: 天窗品牌ID (例如 '3m_ultra', 'none')
 *    - isPackage: 是否直接選用全車套裝 (boolean)
 *    - packageBrandId: 若選用全車套裝時的品牌ID
 *    - customerPrice: 系統對客人的報價金額 (NT$)
 * @returns {Object} 試算結果與最佳廠商推薦
 */
export function calculateBestVendor(modelKey, selection) {
  const { frontId = 'none', bodyId = 'none', sunroofId = 'none', isPackage = false, packageBrandId = null, customerPrice = 0 } = selection;

  const hasFront = isPackage || (frontId && frontId !== 'none');
  const hasBody = isPackage || (bodyId && bodyId !== 'none');
  const hasSunroof = sunroofId && sunroofId !== 'none';

  if (!hasFront && !hasBody && !hasSunroof) {
    return {
      isValid: false,
      message: '尚未選擇任何施工部位'
    };
  }

  // 取得選中的品牌物件
  const frontBrand = isPackage 
    ? TINTING_BRANDS.find(b => b.id === packageBrandId)
    : (hasFront ? TINTING_BRANDS.find(b => b.id === frontId) : null);

  const bodyBrand = isPackage 
    ? TINTING_BRANDS.find(b => b.id === packageBrandId)
    : (hasBody ? TINTING_BRANDS.find(b => b.id === bodyId) : null);

  const sunroofBrand = hasSunroof ? TINTING_BRANDS.find(b => b.id === sunroofId) : null;

  const vendorKeys = ['yingge', 'laipei', 'acme', 'xinghui'];
  const vendorResults = [];

  vendorKeys.forEach(vKey => {
    const vMeta = VENDOR_INFO[vKey];
    let canPerform = true;
    let missingParts = [];
    let breakdown = { front: null, body: null, sunroof: null, package: null };
    let totalCost = 0;

    if (isPackage) {
      // 全車套餐：檢查是否有套裝報價或前擋+車身分項
      const vCosts = frontBrand?.vendorCosts[modelKey]?.[vKey] || {};
      let pkgBaseCost = null;
      
      const itemizedFrontBody = (vCosts.front !== undefined && vCosts.body !== undefined)
        ? (vCosts.front + vCosts.body)
        : null;

      if (vCosts.full !== undefined && vCosts.full !== null) {
        // 取套裝或分項合計中較划算者
        pkgBaseCost = itemizedFrontBody !== null ? Math.min(vCosts.full, itemizedFrontBody) : vCosts.full;
      } else if (itemizedFrontBody !== null) {
        pkgBaseCost = itemizedFrontBody;
      }

      if (pkgBaseCost !== null) {
        breakdown.package = pkgBaseCost;
        totalCost += pkgBaseCost;
      } else {
        canPerform = false;
        missingParts.push('全車套裝');
      }

      // 天窗
      if (hasSunroof) {
        const srCosts = sunroofBrand?.vendorCosts[modelKey]?.[vKey] || {};
        if (srCosts.sunroof !== undefined && srCosts.sunroof !== null) {
          breakdown.sunroof = srCosts.sunroof;
          totalCost += srCosts.sunroof;
        } else {
          canPerform = false;
          missingParts.push('天窗');
        }
      }
    } else {
      // 混搭模式
      // 前擋
      if (hasFront) {
        const fCost = frontBrand?.vendorCosts[modelKey]?.[vKey]?.front;
        if (fCost !== undefined && fCost !== null) {
          breakdown.front = fCost;
        } else {
          canPerform = false;
          missingParts.push(`前擋 (${frontBrand.name})`);
        }
      }

      // 車身
      if (hasBody) {
        const bCost = bodyBrand?.vendorCosts[modelKey]?.[vKey]?.body;
        if (bCost !== undefined && bCost !== null) {
          breakdown.body = bCost;
        } else {
          canPerform = false;
          missingParts.push(`車身 (${bodyBrand.name})`);
        }
      }

      // 若前擋與車身為同品牌，且該廠商有更便宜的 full package 優惠價
      if (hasFront && hasBody && frontId === bodyId) {
        const pkgCost = frontBrand?.vendorCosts[modelKey]?.[vKey]?.full;
        const itemizedSum = (breakdown.front || 0) + (breakdown.body || 0);
        if (pkgCost !== undefined && pkgCost !== null && pkgCost < itemizedSum) {
          breakdown.package = pkgCost;
          totalCost += pkgCost;
        } else {
          totalCost += itemizedSum;
        }
      } else {
        totalCost += (breakdown.front || 0) + (breakdown.body || 0);
      }

      // 天窗
      if (hasSunroof) {
        const sCost = sunroofBrand?.vendorCosts[modelKey]?.[vKey]?.sunroof;
        if (sCost !== undefined && sCost !== null) {
          breakdown.sunroof = sCost;
          totalCost += sCost;
        } else {
          canPerform = false;
          missingParts.push(`天窗 (${sunroofBrand.name})`);
        }
      }
    }

    vendorResults.push({
      vendorKey: vKey,
      vendorName: vMeta.name,
      shortName: vMeta.shortName,
      canPerform,
      missingParts,
      breakdown,
      totalCost: canPerform ? totalCost : null
    });
  });

  // 篩選可施作廠商，依成本排序（最低成本者為第一名）
  const capableVendors = vendorResults.filter(v => v.canPerform).sort((a, b) => a.totalCost - b.totalCost);

  const bestVendor = capableVendors.length > 0 ? capableVendors[0] : null;
  const secondBest = capableVendors.length > 1 ? capableVendors[1] : null;
  const thirdBest = capableVendors.length > 2 ? capableVendors[2] : null;

  let profit = 0;
  let profitMargin = 0;
  let savings = 0;

  if (bestVendor && customerPrice > 0) {
    profit = customerPrice - bestVendor.totalCost;
    profitMargin = Math.round((profit / customerPrice) * 1000) / 10;
    if (secondBest) {
      savings = secondBest.totalCost - bestVendor.totalCost;
    }
  }

  return {
    isValid: true,
    hasCapableVendor: capableVendors.length > 0,
    bestVendor,
    secondBest,
    thirdBest,
    rank1: bestVendor,
    rank2: secondBest,
    rank3: thirdBest,
    allVendors: vendorResults,
    capableVendors,
    customerPrice,
    profit,
    profitMargin,
    savings
  };
}
