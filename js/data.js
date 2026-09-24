/**
 * Tesla Accessories Database - QuackEV (呱樂電驢) & Jowua Full Official Catalog
 * 100% Complete Synchronized Database
 */

export const TESLA_MODELS = [
  { "id": "all", "name": "所有 Tesla 車型", "short": "全車型" },
  { "id": "m3_highland", "name": "Model 3 (2024+)", "short": "Model 3 (2024+)", "badge": "2024+" },
  { "id": "m3_2021_2023", "name": "Model 3 (2021-2023)", "short": "Model 3 (2021-2023)", "badge": "新中控" },
  { "id": "m3_2018_2023", "name": "Model 3 (2018-2023)", "short": "Model 3 (2018-2023)", "badge": "2018-2023" },
  { "id": "m3_2017_2020", "name": "Model 3 (2018-2020)", "short": "Model 3 (2018-2020)", "badge": "舊中控" },
  { "id": "my_classic", "name": "Model Y (2020-2024)", "short": "Model Y (2020-2024)" },
  { "id": "my_juniper", "name": "Model Y (2025+)", "short": "Model Y (2025+)", "badge": "煥新版 2025+" },
  { "id": "ms_refresh", "name": "Model S (2021+)", "short": "Model S" },
  { "id": "mx_refresh", "name": "Model X (2021+)", "short": "Model X" },
  { "id": "cybertruck", "name": "Cybertruck", "short": "Cybertruck", "badge": "Cybertruck" }
];

export const STORES = [
  { "id": "all", "name": "全店家總覽" },
  { "id": "quackev", "name": "QuackEV (呱樂電驢工坊)" },
  { "id": "jowua", "name": "Jowua Global" }
];

export const CATEGORIES = [
  { "id": "all", "name": "全部品項與組合", "icon": "fa-th-large" },
  { "id": "interior", "name": "內飾與防護", "icon": "fa-shield-alt" },
  { "id": "electronics", "name": "電子與車機週邊", "icon": "fa-bolt" },
  { "id": "exterior", "name": "外觀改裝與電吸門", "icon": "fa-car" },
  { "id": "camping", "name": "車宿與戶外露營", "icon": "fa-campground" },
  { "id": "charging", "name": "充電轉接與擴充", "icon": "fa-charging-station" },
  { "id": "storage", "name": "收納與車廂整理", "icon": "fa-boxes" }
];

export const LOCATIONS = [
  { "id": "front_trunk", "name": "前備箱" },
  { "id": "center_console", "name": "中控扶手區" },
  { "id": "screen", "name": "中控大螢幕" },
  { "id": "rear_seats", "name": "後座/冷氣出風口" },
  { "id": "rear_trunk", "name": "後備箱/下層收納" },
  { "id": "exterior", "name": "全車外觀/車輪" }
];

export const ACCESSORIES = [
  {
    "id": "jowua_all_weather_floor_liners_foxtron_cavira",
    "name": "Jowua - 立體防水腳踏墊 (Foxtron Cavira)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liners-foxtron-cavira.png?v=1789553757",
    "description": "產品規格 專為 Foxtron Cavira 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 完美搭配“ 椅下出風口保護網 ” 阻絕零錢、髒東西、小生物或其他物品掉進椅下出風口。 完美搭配 “ 兩用面紙收納盒 ” 安裝在後排，方便駕",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-foxtron-cavira",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50181048140024",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801600"
      }
    ]
  },
  {
    "id": "jowua_qi2_active_cooling_wireless_charging_car_mount_foxtron_cavira",
    "name": "Jowua - Qi2 製冷六維隱藏車架 (MagSafe款)｜Foxtron Cavira 專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2990,
    "originalPrice": 2990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-qi2-wireless-charging-car-mount-foxtron-cavira.png?v=1789381804",
    "description": "Qi2 製冷六維隱藏車架 製冷雙降溫系統 半導體製冷面板： 車架面板升級製冷技術，產生冰冷感。使手機降溫，保持最佳充電效能。 靜音循環風扇 ： 車架內建靜音循環扇，將充電熱能導出，使充電過程高效順暢。 Qi2 無線充電模組 最新的無線充電標準，更快的充電速度、更高的效率。可支援iPhone與Andr",
    "officialUrl": "https://global.jowua-life.com/products/qi2-active-cooling-wireless-charging-car-mount-foxtron-cavira",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50419175817464",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2990,
        "sku": "BFG26090301"
      }
    ]
  },
  {
    "id": "jowua_car_fragrance",
    "name": "Jowua - 通用型車用香氛",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-air-fragrance.png?v=1751631471",
    "description": "產品描述 適用 Tesla 全車系前排出風口與葉片式出風口車款設計 精準搭配不同車款，享受每一絲氣息。 全新升級｜矽膠固定底座 矽膠選材，加強行車穩固，葉片式出風口車款也能輕鬆固定。 優質材質，完美組合 精巧外觀與車內內飾完美融合，不突兀。 多款氣息，宛如身臨其境 林蔭微風 典雅漫舞 清新森香 再創",
    "officialUrl": "https://global.jowua-life.com/products/car-fragrance",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50541519339768",
        "title": "香氛典藏全輯",
        "name": "香氛典藏全輯",
        "price": 990,
        "sku": "FG002620700"
      },
      {
        "id": "46590595399928",
        "title": "林蔭微風",
        "name": "林蔭微風",
        "price": 890,
        "sku": "FG002620201"
      },
      {
        "id": "46590595432696",
        "title": "典雅漫舞",
        "name": "典雅漫舞",
        "price": 890,
        "sku": "FG002620301"
      },
      {
        "id": "46590595465464",
        "title": "清新森香",
        "name": "清新森香",
        "price": 890,
        "sku": "FG002620501"
      },
      {
        "id": "46590595498232",
        "title": "沉靜之境",
        "name": "沉靜之境",
        "price": 890,
        "sku": "FG002620601"
      },
      {
        "id": "46590595531000",
        "title": "再創經典",
        "name": "再創經典",
        "price": 890,
        "sku": "FG002620101"
      },
      {
        "id": "46590595563768",
        "title": "由您創造 (空白無味)",
        "name": "由您創造 (空白無味)",
        "price": 890,
        "sku": "FG002620001"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_set_toyota_bz4x",
    "name": "Jowua - 立體防水行李箱墊 (Toyota bZ4X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2390,
    "originalPrice": 2390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-trunk-liners-toyota-bz4x.png?v=1786615987",
    "description": "產品說明 專為 Toyota bZ4X 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 折線掀開與提把開口設計 後行李箱墊的折線與提把開口設計，輕鬆掀開使用行李廂內的下方儲物區。 加厚材質設計 2.8mm 的加厚材質，更加耐磨。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-set-toyota-bz4x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50152762802424",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2390,
        "sku": "FG002802500"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_toyota_bz4x",
    "name": "Jowua - 立體防水腳踏墊 (Toyota bZ4X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liners-toyota-bz4x.png?v=1786615248",
    "description": "產品規格 專為 Toyota bZ4X 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利止擋收納設計 方便主副駕與後排座椅可收納雨傘、拖鞋、車用吸塵器等物品。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心使用。 ⚠️安裝JOWUA腳踏墊前，請先移除原廠車內地墊。 品",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-toyota-bz4x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50152719155448",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801501"
      }
    ]
  },
  {
    "id": "jowua_j1772_ac_ev_adapter_extension_cable",
    "name": "Jowua - J1772 電動車充電延長線 (5公尺)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-j1772-ac-ev-adapter-extension-cable.png?v=1782714970",
    "description": "產品描述 延長設計，充電更便利 距離不再是問題！專為家中充電線長度不足的使用者設計，提供額外 5 公尺延長。搭配JOWUA雙用行動充電器，總長度可達 10 公尺！ 靈活應對各式情境 不論您的車款或充電埠位置，在家中車庫、透天厝停車或戶外停車格，都能輕鬆倒車入庫，不再因距離困擾。 安全防拔槍設計 搭配",
    "officialUrl": "https://global.jowua-life.com/products/j1772-ac-ev-adapter-extension-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "49142395142392",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG001201100"
      }
    ]
  },
  {
    "id": "jowua_1tb_ssd_for_steam_dashcam",
    "name": "Jowua - SSD for Tesla Steam & DashCam  高速儲存 1TB + 手套箱專用 4 Port HUB (Model 3 2018-2023/ Model Y 2018-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 5690,
    "originalPrice": 5690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-1tb-ssd-for-steam-dashcam_1.png?v=1782890401",
    "description": "SSD for Tesla Steam &amp; DashCam 高速儲存 1TB 10Gbps M.2 NVMe 驅動介面 支援USB3.2 Gen2，M.2 NVMe SSD，最高速度可達10Gbps。NVMe 驅動程式採用快閃技術的 SSD 設計，擁有比傳統SATA更快的性能。 SuperS",
    "officialUrl": "https://global.jowua-life.com/products/1tb-ssd-for-steam-dashcam",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "49738419667192",
        "title": "SSD+4 Port HUB",
        "name": "SSD+4 Port HUB",
        "price": 5990,
        "sku": "BFG26063001"
      },
      {
        "id": "50010049446136",
        "title": "SSD (不含HUB)",
        "name": "SSD (不含HUB)",
        "price": 5690,
        "sku": "FG000601600"
      }
    ]
  },
  {
    "id": "jowua_100w_gan_travel_adapter",
    "name": "Jowua - 100W 旅行萬國插頭氮化鎵充電器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1190,
    "originalPrice": 1190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-100w-gan-travel-adapter.png?v=1781167008",
    "description": "產品描述 出國充電必備，輕鬆環遊世界 採用 GaN 技術，並支援超過 200 個國家，一顆搞定。 100W 快速充電 相容 PD 和 QC。 配備多插孔，帶來無限可能 1個 AC 插座設備 + 4個 DC USB 設備（3 USB-C、USB-A）。 安全鎖設計 按壓安全鎖可自由選擇各式插頭，輕鬆切",
    "officialUrl": "https://global.jowua-life.com/products/100w-gan-travel-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48898897445112",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1190,
        "sku": "FG000400203"
      }
    ]
  },
  {
    "id": "jowua_electric_umbrella",
    "name": "Jowua - 一鍵開收電動傘",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1890,
    "originalPrice": 1890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/u-gif7_7a08e3e1-7f92-4ddf-b0c9-e11f599da23a.gif?v=1780396605",
    "description": "此產品沒有無線（WiFi、藍牙及定位）功能 產品描述 電動式全自動開收 一鍵式電動開收傘，單手輕鬆完成，擺脫狼狽窘境！ 輕鬆捲收，一秒歸位 傘骨、傘布特選設計，順手好捲收，收納快速俐落 反向式收傘，雨滴不外漏 雨滴集中在傘面外層，不怕弄濕車內，讓雨天也優雅從容 防潑水速乾，一甩即乾 特殊奈米塗層，雨",
    "officialUrl": "https://global.jowua-life.com/products/electric-umbrella",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48173689995512",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1890,
        "sku": "FG002000100"
      }
    ]
  },
  {
    "id": "jowua_starlink_cable_for_cybertruck_model_s_3_x_y",
    "name": "Jowua - Starlink USB-C to DC 充電線",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 690,
    "originalPrice": 690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-starlink-cable_2.png?v=1780470085",
    "description": "產品描述 USB-C to DC 充電線 超長2.5M 線長，搭配JOWUA 系列產品可於家中或是露營時，高效率且方便充電 適 用於JOWUA 折疊電動滑板車系列 (LR / Performance)、車用行動冰箱系列 產品規格 USB-C to DC (5.5*2.1 mm) 支援100W (20",
    "officialUrl": "https://global.jowua-life.com/products/starlink-cable-for-cybertruck-model-s-3-x-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48793042878712",
        "title": "標準規格",
        "name": "標準規格",
        "price": 690,
        "sku": "FG003520000"
      }
    ]
  },
  {
    "id": "jowua_active_cooling_magsafe_car_mount_for_air_vents_model_3_y_2018_2024",
    "name": "Jowua - Qi2 製冷出風口MagSafe車架 (Model 3/Y 2018-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 1090,
    "originalPrice": 1090,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-active-cooling-magsafe-car-mount-for-air-vents-model-3-y-2018-2024.png?v=1779679581",
    "description": "產品描述 完美結合 Model 3/Y (2018-2024) 前排冷氣出風口 適用於 Model 3/ Y (2018-2024) 前排冷氣出風口，整排全相容！安裝位置不設限，隨心定位 內建製冷雙降溫系統 半導體製冷面板： 車架面板升級製冷技術，產生冰冷感。使手機降溫，保持最佳充電效能。 靜音循環",
    "officialUrl": "https://global.jowua-life.com/products/active-cooling-magsafe-car-mount-for-air-vents-model-3-y-2018-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48571051966712",
        "title": "Qi2 製冷無線充電",
        "name": "Qi2 製冷無線充電",
        "price": 1690,
        "sku": "FG000220104"
      },
      {
        "id": "48571051999480",
        "title": "非充電 (無充電、製冷功能)",
        "name": "非充電 (無充電、製冷功能)",
        "price": 1090,
        "sku": "FG000220106"
      }
    ]
  },
  {
    "id": "jowua_power_align_station_combo",
    "name": "Jowua - 多功能無線充電底座＋智慧手錶無線充電器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-power-align-station-gen2-06.jpg?v=1789726938",
    "description": "多功能無線充電底座 專為特斯拉設計，AirPods專屬充電座 AirPods不再無處安放！底座完美擺放於特斯拉車內無線充電盤，並與精準對位線圈。同時滿足精巧收納與無線充電。 支援所有無線充電 AirPods AirPods充電免插線，一放即充，滿電隨時就緒！ *充電時請將AirPods保護殼取下，以",
    "officialUrl": "https://global.jowua-life.com/products/power-align-station-combo",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50540067487992",
        "title": "多功能無線充電底座",
        "name": "多功能無線充電底座",
        "price": 490,
        "sku": "FG003820001"
      },
      {
        "id": "48744870740216",
        "title": "智慧手錶無線充電器 + 60W磁吸線",
        "name": "智慧手錶無線充電器 + 60W磁吸線",
        "price": 690,
        "sku": "FGM25031701"
      },
      {
        "id": "48744870772984",
        "title": "多功能無線充電底座＋智慧手錶無線充電器 + 60W 磁吸線 組合",
        "name": "多功能無線充電底座＋智慧手錶無線充電器 + 60W 磁吸線 組合",
        "price": 990,
        "sku": "BFG25040701"
      }
    ]
  },
  {
    "id": "jowua_hook_system",
    "name": "Jowua - 掛鉤生態系 (Model S/X/3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 1890,
    "originalPrice": 1970,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-hook-system.png?v=1777017810",
    "description": "一組掛起車內掛鉤收納生態，適用於 Model S/X/3/Y 煥新版，Performance、Plaid 跑車座椅車型 車內萬用收納桶（兩入一組） 符合特斯拉各車型與其他車款 放置於門邊兩側空間，讓您收納濕雨傘、飲料，亦能充當垃圾桶，保持車廂內裝整潔。 搭配Jowua 手套箱掛鉤、前行李箱雞排掛鉤 ",
    "officialUrl": "https://global.jowua-life.com/products/hook-system",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48275393249528",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1890,
        "sku": "BFG26042001"
      }
    ]
  },
  {
    "id": "jowua_dual_charging_charger_electric_scooter",
    "name": "Jowua - 雙軌滑板車充電器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2390,
    "originalPrice": 2390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-dual-charging-charger-electric-scooter.png?v=1786434253",
    "description": "產品描述 獨家專利【雙軌供電設計】 支援「Type-C供電模試」與「點菸器供電模式」依照情境，輕鬆於家中或車內高效能充電 內附Starlink USB-C to DC 充電線 超長2.5M 線長，可於家中高效率且方便充電 適 用於JOWUA 折疊電動滑板車系列 (LR / Performance) ",
    "officialUrl": "https://global.jowua-life.com/products/dual-charging-charger-electric-scooter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50139181416696",
        "title": "雙軌滑板車充電器",
        "name": "雙軌滑板車充電器",
        "price": 2390,
        "sku": "FG002408805"
      }
    ]
  },
  {
    "id": "jowua_rear_cup_holder_foxtron_bria",
    "name": "Jowua - 後排杯墊 (Foxtron Bria）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 290,
    "originalPrice": 290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-foxtron-bria-rear-cup-holder.png?v=1773648130",
    "description": "產品規格 專為 Foxtron Bria 設計 適用於Bria後排杯架，適用各式飲料杯，輕鬆擺脫水痕。 嚴選矽膠材質 採用食品級矽膠， 耐高溫低溫(-40℃ to 220℃)，無毒且環保。 方便清洗 矽膠材質可水洗，讓您方便清洗。 下載APP｜門市專享好康 🎁 凡購買 Foxtron Bria 專",
    "officialUrl": "https://global.jowua-life.com/products/rear-cup-holder-foxtron-bria",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48107314544888",
        "title": "標準規格",
        "name": "標準規格",
        "price": 290,
        "sku": "FG003120302"
      }
    ]
  },
  {
    "id": "jowua_pillowcase",
    "name": "Jowua - 替換用枕套 - 車用頭枕專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 290,
    "originalPrice": 290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Mask_Group_10_0.png?v=1773643472",
    "description": "購買前請注意 本賣場為【替換用枕套】商品 不包含車用頭枕本體 ，下單前請確認符合您的需求 如欲購買【車用頭枕】 請參考 枕套屬於個人接觸性商品，為維護使用者衛生，本商品拆封後恕無法退貨 枕套屬於消耗性商品，不屬於保固範圍內 產品描述 兩款配色，任您選擇 完美呼應您的愛車內裝與座椅色系，提供【星霧灰】",
    "officialUrl": "https://global.jowua-life.com/products/pillowcase",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48106966384888",
        "title": "夏日涼感 / 星光白",
        "name": "夏日涼感 / 星光白",
        "price": 290,
        "sku": "FG003311200"
      },
      {
        "id": "48106966319352",
        "title": "夏日涼感 / 星霧灰",
        "name": "夏日涼感 / 星霧灰",
        "price": 290,
        "sku": "FG003321200"
      },
      {
        "id": "48106966417656",
        "title": "暖心絨毛 / 星光白",
        "name": "暖心絨毛 / 星光白",
        "price": 290,
        "sku": "FG003311201"
      },
      {
        "id": "48106966352120",
        "title": "暖心絨毛 / 星霧灰",
        "name": "暖心絨毛 / 星霧灰",
        "price": 290,
        "sku": "FG003321201"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_foxtron_bria",
    "name": "Jowua - 立體防水腳踏墊 (Foxtron Bria)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liners-foxtron-bria.png?v=1774939573",
    "description": "產品規格 專為Foxtron Bria 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 主駕駛座卡扣設計 相容原廠的主駕駛座設計，固定卡扣服貼安裝。 專利止擋收納設計 方便主副駕與後排座椅可收納雨傘、拖鞋、車用吸塵器等物品。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-foxtron-bria",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47978795696376",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801400"
      }
    ]
  },
  {
    "id": "jowua_glass_roof_sunshade_foxtron_bria",
    "name": "Jowua - 玻璃車頂遮陽簾 (Foxtron Bria）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-glass-roof-sunshade-foxtron-bria_979d6433-82fb-4a22-b7f7-5c580613d664.png?v=1774942813",
    "description": "產品描述 專為Foxtron Bria 開發設計 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 兩片式設計，車頂中央不塌陷 前後兩片獨立設計，中央位置不塌陷。 雙面高密度編織布料 耐熱、降低熱傳導、無異味，特殊抗光銀塗層，能有效屏蔽紫外線和陽光直射。 Jowua 黑武士：採用黑色複合銀布材",
    "officialUrl": "https://global.jowua-life.com/products/glass-roof-sunshade-foxtron-bria",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47978775216376",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2590,
        "sku": "FG002205000"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_padlock",
    "name": "Jowua - 充電樁防盜鎖",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ev-mobile-connector-padlock.png?v=1770812037",
    "description": "產品描述 充電樁防盜設計 搭配JOWUA 雙用行動充電系列 ，能確保安裝在地下室、戶外的充電樁不被盜取。也不怕線纜因過度拉扯而中斷通電 密碼鎖耐用堅固 特規4.75mm 高強度鋼梁與鋅合金外殼 高安全性 多達10,000種密碼排列組合 輕鬆設定 大字體滾輪轉動，方便使用與設定",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-padlock",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47955787776248",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "FG002769906"
      }
    ]
  },
  {
    "id": "jowua_type_c_trunk_lighting_3_in_1_car_charger_model_x",
    "name": "Jowua - 後車廂氣氛燈｜真言套索 (Model X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/type-c-trunk-lighting-3-in-1-car-charger-model-x-13.png?v=1770800955",
    "description": "後車廂氣氛燈 適用 特斯拉 Model X 全車系 適用於 Tesla Model X 全系列車款，智能磁感應自動開關，愜意享受最有氣氛的露營夜晚 獨家設計 Type-C 供電 採用Type-C介面，搭配內附的「三合一 Type-C 擴充點菸器車充」不佔用原車點煙孔，電源使用更彈性靈活 智能磁感應自",
    "officialUrl": "https://global.jowua-life.com/products/type-c-trunk-lighting-3-in-1-car-charger-model-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47967857180920",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1990,
        "sku": "BFG2026020601"
      }
    ]
  },
  {
    "id": "jowua_130w_led_hub_for_rear_cabin_vents",
    "name": "Jowua - 130W LED 後排專用 HUB (Model 3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-130W-LED-rear-vent-hub_97d939b9-0b76-432e-9e8f-d03339554653.png?v=1770813694",
    "description": "產品描述 明亮燈光＆原車專屬訂製 專為Model 3/Y (煥新版) 後排螢幕下方設計。搭配 LED 照明設計，4000K 自然光調，在黑暗裝點亮後排腳踏區域 支援最高130W快充 匯聚原車後排的雙Type-C功率，高效併流釋放130W效能輸出 宛如原車內裝，無損升級 質感設計與後排內飾精準匹配，不",
    "officialUrl": "https://global.jowua-life.com/products/130w-led-hub-for-rear-cabin-vents",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47960710676728",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1690,
        "sku": "FG000320116"
      }
    ]
  },
  {
    "id": "jowua_power_box",
    "name": "Jowua - 配電箱 - 304020 型",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2500,
    "originalPrice": 2500,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-power-box.png?v=1769420060",
    "description": "產品描述 尺寸精準設計，可完整容納插頭與插座 電箱內部空間充足，能將 NEMA 14-50 插頭、其他插座 等設備完整收納，不需外露線材，使用更安全、美觀。 電箱尺寸：寬300mm x 高400mm x 深200mm 鋅合金密碼鎖 採用堅固鋅合金材質，支援密碼與鑰匙雙重開啟方式，兼具安全性與使用彈性",
    "officialUrl": "https://global.jowua-life.com/products/power-box",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47846929957112",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2500,
        "sku": "FG002708800"
      }
    ]
  },
  {
    "id": "jowua_type_c_trunk_lighting_3_in_1_car_charger_model_y",
    "name": "Jowua - 後車廂氣氛燈｜真言套索 (Model Y)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-trunk-light-02.jpg?v=1769582506",
    "description": "後車廂氣氛燈 適用 特斯拉 Model Y 全車系 適用於 Tesla Model Y 全系列車款，智能磁感應自動開關，愜意享受最有氣氛的露營夜晚 獨家設計 Type-C 供電 採用Type-C介面，搭配內附的「三合一 Type-C 擴充點菸器車充」不佔用原車點煙孔，電源使用更彈性靈活 智能磁感應自",
    "officialUrl": "https://global.jowua-life.com/products/type-c-trunk-lighting-3-in-1-car-charger-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47924656505080",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1990,
        "sku": "FGM26010201"
      }
    ]
  },
  {
    "id": "jowua_ccs1_to_nacs_dc_ac_charging_adapter",
    "name": "Jowua - CCS1 to NACS (TPC) DC & AC 快慢充轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 6990,
    "originalPrice": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs1-to-nacs-dc-ac-adapter.png?v=1769413317",
    "description": "❗️ 購買前須知｜您的愛車有CCS通訊協定嗎？ 特斯拉(NACS)車主要在設有CCS充電站充電，您除了需使用轉接頭外，車輛硬體亦需支援《 CCS通訊協定》。 如何查詢車輛是否支援？ 於觸控螢幕介面上前往 控制&gt;軟體&gt;其他車輛資訊&gt;CCS和第三方NACS直流快速充電支援為 【已啟用】",
    "officialUrl": "https://global.jowua-life.com/products/ccs1-to-nacs-dc-ac-charging-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47652677026040",
        "title": "標準規格",
        "name": "標準規格",
        "price": 6990,
        "sku": "FG001204300"
      }
    ]
  },
  {
    "id": "jowua_65w_gan_charger_with_retractable_cable",
    "name": "Jowua - 65W GaN 伸縮線充電器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-65W-charger-retractable-cable4.png?v=1767774902",
    "description": "產品描述 65W 快速充電 相容 PD 和 QC協議。內建GaN 氮化鎵晶片，輸出更穩定強勁。 同時為3台裝置高校充電 1個伸縮式Type-C 充電線 + 2個 DC USB 設備（USB-C、USB-A）。 自帶伸縮式 Type-C 充電線 60公分的伸縮式 Type-C 充電線提供65W充電效能",
    "officialUrl": "https://global.jowua-life.com/products/65w-gan-charger-with-retractable-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47510888710392",
        "title": "標準規格",
        "name": "標準規格",
        "price": 890,
        "sku": "FG000400202"
      }
    ]
  },
  {
    "id": "jowua_storage_bag",
    "name": "Jowua - 前車廂 & 滑板車專用收納袋",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-storage-bag.png?v=1765967144",
    "description": "產品描述 特斯拉前車廂完美適配 完美適配前車廂空間，完美收納JOWUA折疊電動滑板車系列，安心防刮傷 大容量方便攜帶 33L大空間，輕鬆收納各式生活配件，賣場採購與雜物收納都便利 細節巧思設計 雙拉鍊設計，方便開關收納袋。前口袋設計，小物分層收納 尺寸：680＊330＊150 mm",
    "officialUrl": "https://global.jowua-life.com/products/storage-bag",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47663156396280",
        "title": "標準規格",
        "name": "標準規格",
        "price": 990,
        "sku": "FG002401200"
      }
    ]
  },
  {
    "id": "jowua_glass_roof_sunshade_volvo_ex30",
    "name": "Jowua - 玻璃車頂遮陽簾 (Volvo EX30)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-volvo-ex30-glass-roof-sunshade_1.png?v=1764818103",
    "description": "產品描述 專為Volvo EX30 開發設計 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 兩片式設計，車頂中央不塌陷 前後兩片獨立設計，中央位置不塌陷。 雙面高密度編織布料 耐熱、降低熱傳導、無異味，特殊抗光銀塗層，能有效屏蔽紫外線和陽光直射。 Jowua 黑武士：採用黑色複合銀布材質，",
    "officialUrl": "https://global.jowua-life.com/products/glass-roof-sunshade-volvo-ex30",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47508272414968",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2590,
        "sku": "FG002204000"
      }
    ]
  },
  {
    "id": "jowua_magsafe_air_vent_car_mount_with_active_cooling",
    "name": "Jowua - Qi2 製冷出風口MagSafe車架 (Model 3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1090,
    "originalPrice": 1090,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-magsafe-air-vent-car-mount-with-active-cooling.png?v=1765265663",
    "description": "產品描述 完美結合 Model 3/Y 煥新版 冷氣出風口 適用於 Model 3/ Y 煥新版前排冷氣出風口，整排全相容！安裝位置不設限，隨心定位 包裝內附矽膠底座，依安裝位置搭配使用 靠近車門兩側： 無需搭配矽膠底座 中央、非側邊位置： 搭配矽膠底座，增強穩定性 內建製冷雙降溫系統 半導體製冷面",
    "officialUrl": "https://global.jowua-life.com/products/magsafe-air-vent-car-mount-with-active-cooling",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48121161908472",
        "title": "Qi2 製冷無線充電",
        "name": "Qi2 製冷無線充電",
        "price": 1690,
        "sku": "FG000220102"
      },
      {
        "id": "48121161941240",
        "title": "非充電 (無充電、製冷功能)",
        "name": "非充電 (無充電、製冷功能)",
        "price": 1090,
        "sku": "FG000220103"
      }
    ]
  },
  {
    "id": "jowua_3_in_1_car_charger",
    "name": "Jowua - 三合一 Type-C 擴充點菸器車充",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "m3_2017_2020"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-3-in-1-car-charger.png?v=1765426844",
    "description": "產品描述 佔一還三！電力擴充升級 使用後不佔用中控內或後車廂的點菸孔。不只為您保留點菸孔，再提供 2 個Type-C接口，設備依舊滿電運作 搭配 USB-C 點菸器轉接頭，再擴充至3個點菸孔 解決點菸孔不足問題，可輕鬆替裝置供電。如：車用吸塵器、車內空氣清淨器、行車記錄器等設備 後車廂電力系統大升級",
    "officialUrl": "https://global.jowua-life.com/products/3-in-1-car-charger",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47622663667960",
        "title": "三合一 Type-C 擴充點菸器車充",
        "name": "三合一 Type-C 擴充點菸器車充",
        "price": 790,
        "sku": "FG000400104"
      },
      {
        "id": "47622663700728",
        "title": "三合一 Type-C 擴充點菸器車充 + USB-C 轉點菸器轉接頭",
        "name": "三合一 Type-C 擴充點菸器車充 + USB-C 轉點菸器轉接頭",
        "price": 990,
        "sku": "BFG25120501"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_volvo_ex30",
    "name": "Jowua - 立體防水腳踏墊 (Volvo EX30)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-volvo-ex30-floor-liner.png?v=1764756418",
    "description": "產品規格 專為Volvo EX30 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 主駕駛座卡扣設計 相容原廠的主駕駛座設計，固定卡扣服貼安裝。 專利止擋收納設計 方便主副駕與後排座椅可收納雨傘、拖鞋、車用吸塵器等物品。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心使用",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-volvo-ex30",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47508264550648",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801300"
      }
    ]
  },
  {
    "id": "jowua_folding_electric_scooter_cable",
    "name": "Jowua - 折疊電動滑板車專用 - 充電器轉接線",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-folding-electric-scooter-cable-dc-to-dc.png?v=1763347860",
    "description": "產品描述 適用於JOWUA 折疊電動滑板車系列商品 DC 3.5 X 1.35 mm to DC 8.0 X 1.6 mm 產品相關問題，請洽官方Line客服 我們將儘速為您回覆！",
    "officialUrl": "https://global.jowua-life.com/products/folding-electric-scooter-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47447802315000",
        "title": "標準規格",
        "name": "標準規格",
        "price": 390,
        "sku": "FG002408802"
      }
    ]
  },
  {
    "id": "jowua_powerwall_display",
    "name": "Jowua - Powerwall 現場展示",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3000,
    "originalPrice": 3000,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-powerwall.jpg?v=1762141578",
    "description": "產品描述 颱風停電依然從容 專屬的 24/7電力備援系統，不再依賴公共電網與限制 未來每度電僅需 1.99元* 充分運用時間電價，控制高昂電費，節約省荷包 * 依照使用度數與台電時間電價計算 智慧能源，一手掌握 搭配Tesla APP 全天候監控能源狀態 認證安裝廠商 由緯士登科技，進行全台專業服務",
    "officialUrl": "https://global.jowua-life.com/products/powerwall-display",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47324743893240",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3000,
        "sku": "JSR00200100"
      }
    ]
  },
  {
    "id": "jowua_car_refrigerator_tesla_model_y",
    "name": "Jowua - Type-C ＆ 點菸器 雙軌車用行動冰箱 (Model Y全車系)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 9990,
    "originalPrice": 9990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-car-refrigerator-model-y_2_0e05a628-2012-4c5a-afc0-58b00619b0c5.png?v=1761732792",
    "description": "產品描述 獨家專利【雙軌供電系統】 支援「Type-C 供電模式」與「配件電力」雙模式，依照情境自由選擇；即使特斯拉原廠調整點菸器供電政策，亦可透過Type-C穩定供電，離車後依然可靠運作 便捷雙情境切換 車用隨行｜搭配後車廂點菸器或後排65W USB-C 端口或 165W 車充 家用露營｜搭配 1",
    "officialUrl": "https://global.jowua-life.com/products/car-refrigerator-tesla-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46820998021368",
        "title": "標準規格",
        "name": "標準規格",
        "price": 9990,
        "sku": "FG004000000"
      }
    ]
  },
  {
    "id": "jowua_shopping_bag",
    "name": "Jowua - 35L 環保購物袋",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 99,
    "originalPrice": 99,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-shopping-bag_2.png?v=1761904501",
    "description": "產品描述 防水材質，抗污好清理 飲料、油漬防水不怕滲透，清水清潔保持乾淨 35L 大容量空間 生鮮食材採購、日常生活用品攜帶，都能輕鬆滿足需求 可折疊設計，變身手掌大小 快速折疊至手掌大小，輕巧放入外出包或車內儲物空間 長短雙帶設計 便利的雙帶設計，短提袋快速手提、長背帶輕鬆肩背 搭配JOWUA T",
    "officialUrl": "https://global.jowua-life.com/products/shopping-bag",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47315697565944",
        "title": "標準規格",
        "name": "標準規格",
        "price": 99,
        "sku": "FG001027900"
      }
    ]
  },
  {
    "id": "jowua_car_refrigerator_tesla_model_3",
    "name": "Jowua - Type-C 車用行動冰箱 (Model 3全車系)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 9990,
    "originalPrice": 9990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-car-refrigerator-model-3_2_e83de2b8-e38c-452f-8652-623a0d0ac462.png?v=1761735800",
    "description": "產品描述 獨家專利【 Type-C 供電系統】 支援「Type-C 供電模式」輕鬆透過Type-C端口，即可穩定供電 便捷雙情境切換 車用隨行｜搭配後排65W USB-C 端口 或 165W車充 * 家用露營｜搭配 100W 萬國插座充電器 或 25,000 mAh之行動電源使用 *註 由於Mode",
    "officialUrl": "https://global.jowua-life.com/products/car-refrigerator-tesla-model-3",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47306693738744",
        "title": "Model 3 煥新版 (2024+)",
        "name": "Model 3 煥新版 (2024+)",
        "price": 9990,
        "sku": "FG004001000"
      },
      {
        "id": "47306693771512",
        "title": "Model 3 (2024 以前) + 165W 車充",
        "name": "Model 3 (2024 以前) + 165W 車充",
        "price": 10990,
        "sku": "BFG25102701"
      }
    ]
  },
  {
    "id": "jowua_magsafe_case_iphone_17_18",
    "name": "Jowua - MagSafe 保護殼 (iPhone 18/17 系列)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "m3_2017_2020"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-magsafe-stand-case-iphone18-pro-max.png?v=1789398212",
    "description": "MagSafe 晶透保護殼 支援 MagSafe 磁吸配件 相容於 iPhone MagSafe 無線充電 還原輕盈裸機感 輕薄貼合手感，享受貼近iPhone的裸機之美 耐黃變、晶透絕不發黃選材 抗UV防護，不發黃的持久透明力！永久使用也能保持透亮本色 4年內泛黃，免費換新 真的變黃不要慌！經 產品",
    "officialUrl": "https://global.jowua-life.com/products/magsafe-case-iphone-17-18",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46828446286072",
        "title": "iPhone 18 Pro Max / 17 Pro Max / 磨砂支架保護殼＋掛繩夾片組",
        "name": "iPhone 18 Pro Max / 17 Pro Max / 磨砂支架保護殼＋掛繩夾片組",
        "price": 790,
        "sku": "FG000807400"
      },
      {
        "id": "46828446318840",
        "title": "iPhone 18 Pro Max / 17 Pro Max / 晶透保護殼",
        "name": "iPhone 18 Pro Max / 17 Pro Max / 晶透保護殼",
        "price": 590,
        "sku": "FG000847400"
      },
      {
        "id": "46828446417144",
        "title": "iPhone 18 Pro / 17 Pro / 磨砂支架保護殼＋掛繩夾片組",
        "name": "iPhone 18 Pro / 17 Pro / 磨砂支架保護殼＋掛繩夾片組",
        "price": 790,
        "sku": "FG000807300"
      },
      {
        "id": "46828446449912",
        "title": "iPhone 18 Pro / 17 Pro / 晶透保護殼",
        "name": "iPhone 18 Pro / 17 Pro / 晶透保護殼",
        "price": 590,
        "sku": "FG000847300"
      },
      {
        "id": "46828446384376",
        "title": "iPhone Air / 晶透保護殼",
        "name": "iPhone Air / 晶透保護殼",
        "price": 590,
        "sku": "FG000847700"
      },
      {
        "id": "46828446482680",
        "title": "iPhone 17 / 磨砂支架保護殼＋掛繩夾片組",
        "name": "iPhone 17 / 磨砂支架保護殼＋掛繩夾片組",
        "price": 790,
        "sku": "FG000807200"
      },
      {
        "id": "46828446515448",
        "title": "iPhone 17 / 晶透保護殼",
        "name": "iPhone 17 / 晶透保護殼",
        "price": 590,
        "sku": "FG000847200"
      }
    ]
  },
  {
    "id": "jowua_linker_of_ccs2_to_cscs1_ev_adapter",
    "name": "Jowua - CCS2 to CCS1 充電防拔鎖扣",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-linker-of-ccs2-to-cscs1-ev-adapter.png?v=1757302729",
    "description": "產品描述 符合國際IEC規範，相容CCS2之充電槍規格 使用防拔鎖扣與隨附的特製電池蓋，能確保CCS2充電槍端充電時更牢穩固定。杜絕插槍不完全或充電槍過重，造成過電不穩定。 適配JOWUA充電轉接頭系列 CCS2 to CCS1 DC &amp; AC 快慢充轉接頭 、 CCS2 to NACS (",
    "officialUrl": "https://global.jowua-life.com/products/linker-of-ccs2-to-cscs1-ev-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46819998466296",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG001259903"
      }
    ]
  },
  {
    "id": "jowua_gps",
    "name": "Jowua - GPS護盾",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-power-align-station-gen2-with-gps_a4b85c28-17f8-478c-985d-58ef1848fd45.png?v=1789727061",
    "description": "GPS護盾 雙使用模式，支援有線供電及無線供電 採用即插即用設計，無需繁瑣安裝設定，啟動車輛即安心出發！ ▌有線供電模式 搭配JOWUA 隱藏式螢幕收納基座 &amp; Power HUB ，實現最佳供電與使用體驗 ⚠️使用時，請務必搭配內附的充電線轉接器，使用他牌之USB-A傳輸線或轉接頭，將會造",
    "officialUrl": "https://global.jowua-life.com/products/gps",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46579103432952",
        "title": "GPS護盾＋無線充電底座",
        "name": "GPS護盾＋無線充電底座",
        "price": 1990,
        "sku": "BFG25062701"
      },
      {
        "id": "50175509004536",
        "title": "GPS護盾＋無線充電底座＋智慧手錶無線充電器＋60W磁吸線",
        "name": "GPS護盾＋無線充電底座＋智慧手錶無線充電器＋60W磁吸線",
        "price": 2680,
        "sku": "BFG26081401"
      },
      {
        "id": "46579103465720",
        "title": "GPS護盾",
        "name": "GPS護盾",
        "price": 1690,
        "sku": "FG004100000"
      }
    ]
  },
  {
    "id": "jowua_reflective_rear_door_emergency_release_strap",
    "name": "Jowua - 反光式後門緊急拉繩 (Model 3 2024+/Model Y)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "my_juniper"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-reflective-rear-door-emergency-release-strap_748decd4-56b6-4875-b171-b70dcf6b4ab3.png?v=1749456556",
    "description": "產品描述 適用於Model 3 (2024+) 以及所有 Model Y 與 Tesla 後座車門內的設計完美融合，無損安裝，更保留簡約內裝風格。 純機械操作，提供最穩定安心的釋放機制 即使電力失效，仍可手動開啟後車門，緊急狀況也能確保安全，從容解鎖。 反光式拉繩設計 拉繩採用特製反光材質，即使在光",
    "officialUrl": "https://global.jowua-life.com/products/reflective-rear-door-emergency-release-strap",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46519891951864",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG001027801"
      }
    ]
  },
  {
    "id": "jowua_ccs2_ac_ev_adapter_extension_cable",
    "name": "Jowua - CCS2-AC (Type-2) 電動車充電延長線 (5公尺)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-ac-ev-adapter-extension-cable_1.png?v=1749184854",
    "description": "產品描述 延長設計，充電更便利 距離不再是問題！專為家中充電線長度不足的使用者設計，提供額外 5 公尺延長。搭配JOWUA雙用行動充電器，總長度可達 10 公尺！ 靈活應對各式情境 不論您的車款或充電埠位置，在家中車庫、透天厝停車或戶外停車格，都能輕鬆倒車入庫，不再因距離困擾。 相容特斯拉原廠充電座",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-ac-ev-adapter-extension-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46470474891512",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG001202200"
      }
    ]
  },
  {
    "id": "jowua_ev_charger_socket_installation_survey",
    "name": "Jowua - 電動車充電插座認證標準安裝｜場勘費用 (限JOWUA設備專用)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2000,
    "originalPrice": 2000,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/2_0.jpg?v=1750039789",
    "description": "方案資訊與場勘費用說明 【方案資訊】 單相電力環境 14-50配線 - 5m 方案 最高40A 5m以內基本插座安裝 NT$12,000 (含稅) 單相電力環境 14-50配線 - 10m 方案 最高40A 10m以內基本插座安裝 NT$13,500 (含稅) ✧ 再送！專用配電箱 (304020型",
    "officialUrl": "https://global.jowua-life.com/products/ev-charger-socket-installation-survey",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46478448230648",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2000,
        "sku": "JSR00100100"
      }
    ]
  },
  {
    "id": "jowua_165w_car_charger",
    "name": "Jowua - 165W PD3.1 高效能車充",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-165w-car-charger.png?v=1746431332",
    "description": "產品描述 PD3.1 高功率快充 支援最新PD3.1快充協議，單口支援高達140W，可在車內替裝置快速充電。 三端口輸出，165W 高效能供電 支援 PD3.1 + PD3.0 + QC3.0 快充，最高支援165W快充！提供筆電、平板、手機 等裝置快速充電。 專為特斯拉的15.5V電壓系統 完美適",
    "officialUrl": "https://global.jowua-life.com/products/165w-car-charger",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46416173400312",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG000400103"
      }
    ]
  },
  {
    "id": "jowua_nema_6_20_adapter",
    "name": "Jowua - NEMA 6-20 轉接器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1350,
    "originalPrice": 1350,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/NEMA6-20.png?v=1745898992",
    "description": "產品描述 兼容特斯拉原廠２代旅充 符合特斯拉原廠規範。將此轉接頭連接至旅行用充電座（旅充），插上電源插座即可開始充電。 只需冷氣插座，家中升級充電站 僅需使用 6-20 T型冷氣插座，便可在家中享受220V / 20A / 4.4kW 效能充電。 內建溫控晶片 獨家設計溫度監測晶片，隨時監控轉接器溫",
    "officialUrl": "https://global.jowua-life.com/products/nema-6-20-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46398064099576",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1350,
        "sku": "FG002709906"
      }
    ]
  },
  {
    "id": "jowua_demo_測試_勿下單",
    "name": "Jowua - UpPromote測試（勿下單）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.quackev.com/ogImg.webp",
    "description": "測試（勿下單）",
    "officialUrl": "https://global.jowua-life.com/products/demo-測試-勿下單",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44940815204600",
        "title": "標準規格",
        "name": "標準規格",
        "price": 500,
        "sku": "test12345"
      }
    ]
  },
  {
    "id": "jowua_6d_invisible_foldaway_car_mount_universal",
    "name": "Jowua - 六維隱藏車架  (滾輪款）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "m3_2017_2020"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-6d-invisible-foldaway-car-mount-universal.png?v=1743590052",
    "description": "產品描述 六維設計 球頭與支臂皆可調節角度，可自由調整觀看角度。 隱藏式設計 伸縮設計可隱藏車架，保留 Tesla 簡約內裝。 可伸縮式金屬支臂 輕鬆拉或推，可快速自由延伸調整長度。金屬材質更耐用，且完美符合螢幕後方金屬烤漆。 創新矽膠滾輪夾臂 單手操作輕鬆取放，矽膠滾輪牢固夾緊手機。 自由調整夾臂",
    "officialUrl": "https://global.jowua-life.com/products/6d-invisible-foldaway-car-mount-universal",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46322854134008",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG000230111"
      }
    ]
  },
  {
    "id": "jowua_emergency_release_extension_cord_luxgen_n7",
    "name": "Jowua - 充電槍緊急釋放延長拉繩 (LUXGEN n⁷)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-emergency-release-extension-cord-luxgen-n7.png?v=1744164988",
    "description": "產品描述 專為納智捷LUXGEN n⁷ 設計 針對n⁷全系列車型設計，提供快速簡單的充電槍鎖扣解鎖機制。 簡單操作，緊急狀況也能優雅解鎖 延長原車的釋放繩長度，讓您在緊急情況下輕鬆解鎖n⁷的充電槍。 完美融入前車廂空間 精心設計拉繩長度與存放方式，完美融入前車廂內、保持極簡，且不影響車內功能。 耐用",
    "officialUrl": "https://global.jowua-life.com/products/emergency-release-extension-cord-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46341486805240",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG001027800"
      }
    ]
  },
  {
    "id": "jowua_portable_air_compressor",
    "name": "Jowua - 100W 雙快充打氣機",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA_Portable_Air_Compressor_front.png?v=1741839893",
    "description": "快速充電：100W 極速蓄能 支援快充30分鐘滿電，省去６倍等待時間。 快速打氣：超大馬力 高效補壓 充氣效能提升高達 50%，補壓時間減半。 大口徑合金壓鑄缸體 無懼壓力負載 ，專為電動車高胎壓需求設計。 大螢幕清晰顯示 功能切換一目瞭然，最簡潔直覺的操作使用。 隨附多款轉接頭與配件，面面俱到一應",
    "officialUrl": "https://global.jowua-life.com/products/portable-air-compressor",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46266423705848",
        "title": "100W雙快充打氣機",
        "name": "100W雙快充打氣機",
        "price": 1990,
        "sku": "FG002300002"
      }
    ]
  },
  {
    "id": "jowua_tempered_glass_screen_protector_luxgen_n7",
    "name": "Jowua - 玻璃螢幕保護貼 (LUXGEN n⁷)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-tempered-glass-screen-protector-luxgen-n7.png?v=1739873460",
    "description": "產品描述 適用所有LUXGEN n⁷、 n⁷ LR 螢幕 兩種表面材質可選，完美貼合，滿版全覆蓋。 磨砂霧面：零霧感保護貼，抗指紋、防眩光。 高透亮面：清晰透徹，完美呈現螢幕原色。 安裝超簡單 內附貼膜神器，一蓋即貼，零失誤。 9H 硬度鋼化玻璃 有效阻擋被尖銳物體刮傷，防止刮痕且耐磨損。 疏水、疏",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46193923129592",
        "title": "磨砂霧面",
        "name": "磨砂霧面",
        "price": 890,
        "sku": "FG001640202"
      },
      {
        "id": "46193923162360",
        "title": "高透亮面",
        "name": "高透亮面",
        "price": 890,
        "sku": "FG001640102"
      }
    ]
  },
  {
    "id": "jowua_glass_roof_sunshade_mesh_model_x",
    "name": "Jowua - 分離式遮陽簾 (Model X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-glass-roof-sunshade-mesh-model-x.png?v=1739375054",
    "description": "產品描述 專為全車系Model X 開發設計 原車開模，完美貼合前天窗與左右鷹翼門，隔熱效果更升級。 前天窗兩片式設計 分體兩片式設計，不易塌陷。完美銜接不留縫隙，大面積覆蓋車頂。 駕駛、副駕駛不打架 前天窗採兩片式設計，駕駛與副駕駛可自由選擇是否安裝遮陽簾。無論是享受陽光、遼闊視野；或想阻絕熱能屏",
    "officialUrl": "https://global.jowua-life.com/products/glass-roof-sunshade-mesh-model-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46701807173880",
        "title": "高透光｜編織布料",
        "name": "高透光｜編織布料",
        "price": 2590,
        "sku": "FG002202302"
      },
      {
        "id": "46701807206648",
        "title": "全遮光｜黑武士布料",
        "name": "全遮光｜黑武士布料",
        "price": 2590,
        "sku": "FG002202303"
      }
    ]
  },
  {
    "id": "jowua_usb_c_l_shape_cable",
    "name": "Jowua - USB-C L型 車用充電線/延長線",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-usb-c-to-usb-c-l-shape-cable_1.png?v=1738896570",
    "description": "USB-C L 型 車用充電線 專為特斯拉中控設計 1.75M：方便 Model 3/Y (2018-2024)連接後排出風口 USB 端口至前方螢幕區域，可將線完美隱藏在中控 側邊飾板縫隙。 3M：方便 Model 3/Y 煥新版 連接後排出風口 USB 端口至前方螢幕區域，可將線完美隱藏在腳踏墊",
    "officialUrl": "https://global.jowua-life.com/products/usb-c-l-shape-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46163486572792",
        "title": "車用充電線 - 1.75M",
        "name": "車用充電線 - 1.75M",
        "price": 390,
        "sku": "FG000500103"
      },
      {
        "id": "46163486605560",
        "title": "車用充電線 - 3M",
        "name": "車用充電線 - 3M",
        "price": 490,
        "sku": "FG000500104"
      },
      {
        "id": "50135750541560",
        "title": "延長線 - 1.25M",
        "name": "延長線 - 1.25M",
        "price": 390,
        "sku": "FG000500600"
      }
    ]
  },
  {
    "id": "jowua_360_multi_function_mount",
    "name": "Jowua - 360 ° 多功能雲台",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-360-multi-function-mount_9be0812f-b4a3-48b5-b620-a4df3baf00a8.png?v=1737022668",
    "description": "產品描述 不挑設備，兼容各式攝影工具 兼容各式攝影器材與行車記錄器，需 搭配1/4\" (6.35mm) 螺絲孔規格 360° 球頭萬向調節 萬向球頭設計，可自由調整拍攝角度與位置，實現車內車外雙影像紀錄 車內紀錄：職業駕駛紀錄、YouTuber Vlog拍攝必備 車外錄影：FSD行車駕駛紀錄、全方位",
    "officialUrl": "https://global.jowua-life.com/products/360-multi-function-mount",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46100950122744",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG003408802"
      }
    ]
  },
  {
    "id": "jowua_power_hub",
    "name": "Jowua - Power HUB",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "my_juniper"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-power-hub.png?v=1735542085",
    "description": "此配件不支援數據傳輸，僅支援電源轉換。 產品描述 一孔擴三孔，高效轉換 輕鬆將單一USB-C轉換為多個電源輸出，同時為三個設備高速充電。 ＊Model 3/Y (2018-2024) 後排出風口下方共2個USB-C埠，單個埠最大輸出功率可達27W。為達到最高充電效能，可於中控車充插座搭配 165W高",
    "officialUrl": "https://global.jowua-life.com/products/power-hub",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46054677348600",
        "title": "標準規格",
        "name": "標準規格",
        "price": 890,
        "sku": "FG000320114"
      }
    ]
  },
  {
    "id": "jowua_v2l_adapter_with_cord_reels_ccs2_ac_type_2",
    "name": "Jowua - 可伸縮式V2L放電插座 CCS2-AC (Type 2)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2990,
    "originalPrice": 2990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/CCS2-AC.png?v=1740556489",
    "description": "產品描述 便捷的V2L能源轉換 在露營和旅行中，將電動車的能量轉換為多種設備供電，增強移動功能。 堅固耐用 通過插拔測試&gt;10,000次，插拔力F＜80N。 內建4個接地插座 提供最高13A輸出，能處理最高1625W的功率，為您的設備、家電及其他需要AC交流電的物品供電。 輕鬆捲繞，方便使用 ",
    "officialUrl": "https://global.jowua-life.com/products/v2l-adapter-with-cord-reels-ccs2-ac-type-2",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46048841367800",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2990,
        "sku": "FG002902100"
      }
    ]
  },
  {
    "id": "jowua_universal_air_vent_car_mount_with_qi2_wireless_charging",
    "name": "Jowua - 出風口車架Qi2  (滾輪款）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1590,
    "originalPrice": 1590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-universal-air-vent-car-mount-with-qi2-wireless-charging_1.png?v=1735182315",
    "description": "產品描述 包裝內附兩種出風口底座，依車款自由更換 圓形出風口夾：適合內徑60～70mm的圓形出風口 葉片出風口勾：金屬雙勾設計，適合多數葉片出風口 多節點調節，百變角度調整 【旋轉球頭】 360°自由調整觀看角度 【彎曲支臂】 270°、180° 雙調節，角度不受限 【萬象底座】 360°萬象角度隨",
    "officialUrl": "https://global.jowua-life.com/products/universal-air-vent-car-mount-with-qi2-wireless-charging",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46043479703800",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1590,
        "sku": "FG000230110"
      }
    ]
  },
  {
    "id": "jowua_cr2450_battery",
    "name": "Jowua - CR2450 一次性鈕扣電池（四入）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 199,
    "originalPrice": 199,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-cr2450-battery_1.png?v=1733371415",
    "description": "鈕扣電池為消耗性產品，不屬於保固範圍內。 此產品為一次性電池，不可進行充電！ 如欲購買可充電之電池，請參考 『LIR2450H 可充電鈕扣電池組』 產品描述 強勁耐久性 一組四入， 電池容量為600mAh±5，電力持久安心使用。 多元應用，生活更便利 適用於Jowua CCS1 to CCS2直流轉",
    "officialUrl": "https://global.jowua-life.com/products/cr2450-battery",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45988369137912",
        "title": "標準規格",
        "name": "標準規格",
        "price": 199,
        "sku": "FG003660000"
      }
    ]
  },
  {
    "id": "jowua_car_neck_pillow",
    "name": "Jowua - 車用頭枕（兩入/一入）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 1390,
    "originalPrice": 2780,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-car-neck-pillow-lunar-white02_45a08ebd-2bbb-4a5c-8311-94b4392c731b.png?v=1753947924",
    "description": "頭枕屬個人接觸性商品，為維護使用者衛生與商品完整性，本商品拆封後恕無法退貨。請於拆封前確認您的需求。 產品規格 兩款配色，任您選擇 完美呼應您的愛車內裝與座椅色系，提供【星霧灰】與【星光白】雙色選擇。 ＊白色座椅若先以清潔劑或有機溶劑擦拭後再使用頭枕，可能導致移色風險。請勿在使用清潔劑或有機溶劑後放",
    "officialUrl": "https://global.jowua-life.com/products/car-neck-pillow",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46666934878456",
        "title": "星光白 / 2入",
        "name": "星光白 / 2入",
        "price": 2590,
        "sku": "BFG25071501"
      },
      {
        "id": "46666934911224",
        "title": "星光白 / 1入",
        "name": "星光白 / 1入",
        "price": 1390,
        "sku": "FG003310000"
      },
      {
        "id": "46153409265912",
        "title": "星霧灰 / 2入",
        "name": "星霧灰 / 2入",
        "price": 2590,
        "sku": "BFG25020301"
      },
      {
        "id": "46153409298680",
        "title": "星霧灰 / 1入",
        "name": "星霧灰 / 1入",
        "price": 1390,
        "sku": "FG003320000"
      }
    ]
  },
  {
    "id": "jowua_3_port_usb_dashcam_hub_1tb_nvme_ssd",
    "name": "Jowua - Tesla專用1TB SSD+3 Port HUB (Model S/X/Model 3/Y煥新版/Cybertruck)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 5990,
    "originalPrice": 5990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-3-Port-usb-dash-cam-hub-with-1tb-ssd-v2.png?v=1731577692",
    "description": "產品描述 專為 Tesla Model S/X/ Model 3 煥新版2024+/Model Y 煥新版 2025+/ Cybertruck手套箱設計 小巧且精心孔位設計，不佔手套箱空間。 解決 Tesla 車主數據傳輸孔缺少的煩惱 一孔擴充三孔，支援其他USB設備裝置同時連接。 升級原廠USB端",
    "officialUrl": "https://global.jowua-life.com/products/3-port-usb-dashcam-hub-1tb-nvme-ssd",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45904944529656",
        "title": "標準規格",
        "name": "標準規格",
        "price": 5990,
        "sku": "FG000320113"
      }
    ]
  },
  {
    "id": "jowua_3_port_usb_dashcam_hub_microsd_reader",
    "name": "Jowua - Tesla雙用儲存HUB (讀卡器 & 原廠 USB) (Model S/X/Model 3/Y煥新版/Cybertruck)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/3jowua-3-Port-usb-dash-cam-hub-with-microSD-readers.png?v=1731577513",
    "description": "產品描述 專為Tesla Model S/X/ Model 3 煥新版2024+/Model Y 煥新版 2025+/ Cybertruck手套箱設計 小巧且精心孔位設計，不佔手套箱空間。 解決 Tesla 車主數據傳輸孔缺少的煩惱 一孔擴充三孔與讀卡器，支援記憶卡和其他USB設備裝置同時連接。升級",
    "officialUrl": "https://global.jowua-life.com/products/3-port-usb-dashcam-hub-microsd-reader",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45918989418744",
        "title": "搭配 256G 記憶卡",
        "name": "搭配 256G 記憶卡",
        "price": 2590,
        "sku": "BFG24110601"
      },
      {
        "id": "45918989451512",
        "title": "單買 (不搭配記憶卡)",
        "name": "單買 (不搭配記憶卡)",
        "price": 990,
        "sku": "FG000320112"
      }
    ]
  },
  {
    "id": "jowua_ccs2_to_nacs_dc_charging_adapter",
    "name": "Jowua - CCS2 to NACS (TPC) 直流轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 6990,
    "originalPrice": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-to-nacs-dc-charging-adapter.png?v=1730709899",
    "description": "僅限用於DC超級充電站，不適用於AC慢充充電樁 ❗️ 購買前須知｜您的愛車有CCS通訊協定嗎？ 特斯拉(NACS)車主要在設有CCS充電站充電，您除了需使用轉接頭外，車輛硬體亦需支援《 CCS通訊協定》。 如何查詢車輛是否支援？ 於觸控螢幕介面上前往 控制&gt;軟體&gt;其他車輛資訊&gt;CC",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-to-nacs-dc-charging-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45890959048952",
        "title": "標準規格",
        "name": "標準規格",
        "price": 6990,
        "sku": "FG001205300"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liner_mg_mg4",
    "name": "Jowua - 立體防水腳踏墊 (MG MG4)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liner-mg-mg4.png?v=1729584272",
    "description": "產品規格 專為MG MG4 車款訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 包裝內容 主駕駛座 腳踏墊 x1 副駕駛座 腳踏墊 x1 後排乘客 腳踏墊x1 品牌獨家專利 專利編號 ： I802132",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liner-mg-mg4",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45854759551224",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801200"
      }
    ]
  },
  {
    "id": "jowua_rear_seats_back_cover_luxgen_n7_7_seaters",
    "name": "Jowua - 防水第二排椅背墊 (LUXGEN n⁷ 7人座)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-rear-seats-back-cover-luxgen-n7-7-seaters_6771a8b3-a7fe-4976-956b-53633703d23b.png?v=1729658353",
    "description": "產品規格 專為納智捷LUXGEN n⁷ 7人座 第二排座椅訂製 精準開模，預留孔位，不影響座椅功能使用，邊角完美貼合原車弧度。 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透。 獨立分體式結構 兩件組設計，不影響各別座椅放開合。 固定不位移 背面採用專利射出勾設計，開合椅背時",
    "officialUrl": "https://global.jowua-life.com/products/rear-seats-back-cover-luxgen-n7-7-seaters",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45850979696888",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1490,
        "sku": "FG002803170"
      }
    ]
  },
  {
    "id": "jowua_foldable_storage_box",
    "name": "Jowua - 30L堆疊收納箱",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-foldable-storage-box.png?v=1727253380",
    "description": "產品描述 進化您的車室空間 完美融入Model X 後排座椅區域，創造全新扶手空間，搭配JOWUA 車用折疊桌板 ，升級後排使用體驗！ 車內空間的最佳利器 30公升大容量精心設計，完美適配各類車型，巧妙收納個人物品 耐重可堆疊，魔術大空間 可將多個收納箱堆疊使用，最大承重至90公斤 三向便利開蓋設計",
    "officialUrl": "https://global.jowua-life.com/products/foldable-storage-box",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45762647261432",
        "title": "兩入",
        "name": "兩入",
        "price": 1690,
        "sku": "BFG24092201"
      },
      {
        "id": "45762647294200",
        "title": "一入",
        "name": "一入",
        "price": 890,
        "sku": "FG000929500"
      }
    ]
  },
  {
    "id": "jowua_rear_seats_back_cover_model_3_2024_highland",
    "name": "Jowua - 防水後排椅背墊 (Model 3, 2024+ 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-rear-seats-back-cover-model-3-2024-highland.png?v=1726198593",
    "description": "本產品僅適用於Model 3, 2024+ 煥新版，不適用於舊款Model 3。 產品描述 專為特斯拉 Model 3, 2024+ 煥新版 後排座椅訂製 精準開模，預留孔位，不影響座椅功能使用，邊角完美貼合原車弧度 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透 獨立分體式",
    "officialUrl": "https://global.jowua-life.com/products/rear-seats-back-cover-model-3-2024-highland",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45721981944056",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1490,
        "sku": "FG001403500"
      }
    ]
  },
  {
    "id": "jowua_ccs2_to_ccs1_dc_ac_adapter",
    "name": "Jowua - CCS2 to CCS1 DC & AC 快慢充轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 6990,
    "originalPrice": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-to-ccs1-dc-ac-adapter.png?v=1765507520",
    "description": "❗此商品不包含密碼鎖， 請按此加購 產品描述 CCS1 車主必備 相容第三方的CCS2 (DC &amp; AC) 快慢充電網絡使用，CCS1 車主接上此轉接頭就能使用CCS2 (DC &amp; AC) 快慢充充電樁，增加330座以上的充電選擇。 內建溝通晶片 獨家研發溝通晶片，能與不同充電樁訊號",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-to-ccs1-dc-ac-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47717836685560",
        "title": "CCS2 to CCS1 DC & AC 快慢充轉接頭",
        "name": "CCS2 to CCS1 DC & AC 快慢充轉接頭",
        "price": 6990,
        "sku": "FGM25080501"
      }
    ]
  },
  {
    "id": "jowua_glass_roof_sunshade_luxgen_n7",
    "name": "Jowua - 玻璃車頂遮陽簾 (LUXGEN n⁷ / Foxtron Cavira)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-glass-roof-sunshade-luxgen-n7.png?v=1725266271",
    "description": "產品描述 專為 LUXGEN n⁷ 5/7 人座、Foxtron Cavira 開發設計 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 兩片式設計，車頂中央不塌陷 前後兩片獨立設計，中央位置不塌陷。 雙面高密度編織布料 透光不影響天窗視野，耐熱、降低熱傳導、無異味，特殊抗光銀塗層，能有效屏",
    "officialUrl": "https://global.jowua-life.com/products/glass-roof-sunshade-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45626165756152",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2590,
        "sku": "FG002203000"
      }
    ]
  },
  {
    "id": "jowua_rear_seats_back_cover_luxgen_n7",
    "name": "Jowua - 防水後排椅背墊 (LUXGEN n⁷ 5人座)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-rear-seat-back-cover-luxgen-n7-5seaters.png?v=1724401090",
    "description": "產品規格 專為納智捷LUXGEN n⁷ 5人座 後排座椅訂製 精準開模，預留孔位，不影響座椅功能使用，邊角完美貼合原車弧度。 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透。 獨立分體式結構 兩件組設計，不影響各別座椅放開合。 固定不位移 背面採用專利射出勾設計，開合椅背時，",
    "officialUrl": "https://global.jowua-life.com/products/rear-seats-back-cover-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45636393959672",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1490,
        "sku": "FG002803150"
      }
    ]
  },
  {
    "id": "jowua_trunk_storage_bins_for_tesla_reengineered_model_3_highland_2024",
    "name": "Jowua - 後行李廂收納桶 (Model 3, 2024＋煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1590,
    "originalPrice": 1590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-3-2024-trunk-storage-bins.png?v=1723618035",
    "description": "產品描述 專為 Model 3, 2024+煥新版 後行李箱設計 放置於後行李廂的兩側空間，讓您收納濕雨傘、鞋子、工具與零件，仍能保持後行李廂內裝整潔。 擴充收納空間 隨附2個絨毛儲物盒上蓋，可完美貼合後行李廂表面，提供更多儲物空間。 嚴選矽膠材質 採用食品級矽膠，耐高溫低溫(-40℃ to 220",
    "officialUrl": "https://global.jowua-life.com/products/trunk-storage-bins-for-tesla-reengineered-model-3-highland-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45600245481720",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1590,
        "sku": "FG000925500"
      }
    ]
  },
  {
    "id": "jowua_multi_device_wireless_controller",
    "name": "Jowua - 多連結無線搖桿 (無線充電版本)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-wireless-charging-wireless-controllers-white.png?v=1723431886",
    "description": "產品描述 升級無線充電功能件 可完美放置於車內無線充電版上。時刻滿電，隨時備戰開打！ 三款顏色選擇 可搭配您的愛車內飾與個人喜好做選擇。 支援藍牙連接 Model S/3/X/Y請切換至“S”，使用Switch模式連接，但特斯拉同時支援最多2個藍牙裝置(例 如：2個搖桿，或是1支手機＆1個搖桿)。若",
    "officialUrl": "https://global.jowua-life.com/products/multi-device-wireless-controller",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45583767240952",
        "title": "織布白",
        "name": "織布白",
        "price": 1490,
        "sku": "FG001311000"
      },
      {
        "id": "45583767273720",
        "title": "碳纖黑",
        "name": "碳纖黑",
        "price": 1490,
        "sku": "FG001301000"
      },
      {
        "id": "45583767306488",
        "title": "木紋棕",
        "name": "木紋棕",
        "price": 1490,
        "sku": "FG001331000"
      }
    ]
  },
  {
    "id": "jowua_charging_cable_holder",
    "name": "Jowua - 槍線固定整理器 (CCS2 / CCS1 / NACS)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-charging-cable-holder.png?v=1772619973",
    "description": "產品描述 電車車主槍線必備 提供CCS2、CCS1、NACS 全台各式充電規格，整齊收納與固定您的 電動車用行動充電器 ，電車生活有序更升級！ 功能雙結合 充電槍頭可輕鬆收納於固定座，降低磨損。電纜可整齊纏繞於支架，不再凌亂與打結。",
    "officialUrl": "https://global.jowua-life.com/products/charging-cable-holder",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45501829906680",
        "title": "CCS2-AC Type-2",
        "name": "CCS2-AC Type-2",
        "price": 790,
        "sku": "FG002769904"
      },
      {
        "id": "48044201967864",
        "title": "CCS1 (J1772)",
        "name": "CCS1 (J1772)",
        "price": 790,
        "sku": "FG002769903"
      },
      {
        "id": "48044202000632",
        "title": "NACS (TPC)",
        "name": "NACS (TPC)",
        "price": 790,
        "sku": "FG002769905"
      }
    ]
  },
  {
    "id": "jowua_armrest_organizer_luxgen_n7",
    "name": "Jowua - 扶手箱收納盒（LUXGEN n⁷）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_Centerconsoletrayorganizer_3compartments_translucent_grey.png?v=1678281119",
    "description": "產品描述 專為 LUXGEN n⁷ 扶手箱空間設計 讓扶手箱區域更整齊，增加儲物空間，可收納太陽眼鏡、車鑰匙、充電轉接頭、悠遊卡、零錢等隨身小物。 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高低溫，防止物品滑動與碰撞聲響。底層為硬殼材質，提升耐用性。",
    "officialUrl": "https://global.jowua-life.com/products/armrest-organizer-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45454032797944",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "FG003140100"
      }
    ]
  },
  {
    "id": "jowua_6d_tesla_compatible_invisible_foldaway_car_mount_qi2_wireless_charger_for_tesla_reengineered_model_3_highland_2024_cybertruck_univeral",
    "name": "Jowua - 六維隱藏車架Qi2＿滾輪款 (Model 3/Y 煥新版、Cybertruck專用)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 2190,
    "originalPrice": 2190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-6d-tesla-compatible-invisible-foldaway-car-mount-qi2-wireless-charger-for-tesla-reengineered-model-3-highland-2024-cybertruck-univeral_2.png?v=1751448149",
    "description": "產品描述 全新升級Qi2 最新的無線充電標準，更快的充電速度、更高的效率。支援 iPhone 與 Android 設備高達 15W 無線充電！ 獨家腳踏墊隱藏設計 專為 Model 3/Y 煥新版與 Cybertruck 設計，輕鬆延長充電線。可將充電線由後排 USB-C 延申至前方螢幕手機車架，並",
    "officialUrl": "https://global.jowua-life.com/products/6d-tesla-compatible-invisible-foldaway-car-mount-qi2-wireless-charger-for-tesla-reengineered-model-3-highland-2024-cybertruck-univeral",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45380358996216",
        "title": "Qi2 無線充電",
        "name": "Qi2 無線充電",
        "price": 2190,
        "sku": "BFG24061902"
      }
    ]
  },
  {
    "id": "jowua_luxgen_n7_glovebox_hook",
    "name": "Jowua - LUXGEN n⁷ 手套箱掛鉤",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-luxgen-n7-glovebox-hook.png?v=1717728495",
    "description": "產品描述 置物新選擇 不佔座椅與腳踏空間，讓車內更井然有序 。 優質材料的完美組合 主體由 304不銹鋼製成，耐高溫且堅固耐用。 內部包覆矽膠層，可防止滑動，同時不會刮傷您的手套箱。 獨家設計 超薄與特定外型設計， 完美匹配 手套箱。 輕鬆安裝 一秒安裝，不用工具不破保固。 一組２入 可隨意調整，靈",
    "officialUrl": "https://global.jowua-life.com/products/luxgen-n7-glovebox-hook",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45295772139768",
        "title": "標準規格",
        "name": "標準規格",
        "price": 590,
        "sku": "FG001961103"
      }
    ]
  },
  {
    "id": "jowua_portable_led_light_compatible_with_magsafe_wireless_charging",
    "name": "Jowua - 萬用 MagSafe 磁吸燈",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 299,
    "originalPrice": 299,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/11.gif?v=1788505038",
    "description": "MagSafe 磁吸燈 溫馨提醒：初次使用請使用無線充電盤為本產品充電並藉由充電將電池喚醒。 隨拿即亮設計 電容式觸控開關，隨手直覺拿，燈光一秒亮起，一瞬點亮您的旅程。 多段式照明調節 3段燈光調整，根據您的使用情境、環境氛圍自由切換選擇。 兼容 MagSafe 無線充電＆特斯拉車內無線充電盤 支援",
    "officialUrl": "https://global.jowua-life.com/products/portable-led-light-compatible-with-magsafe-wireless-charging",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50434373255416",
        "title": "萬用 MagSafe 磁吸燈組合 (含燈牌配件組)",
        "name": "萬用 MagSafe 磁吸燈組合 (含燈牌配件組)",
        "price": 990,
        "sku": "BFG26082401"
      },
      {
        "id": "50434373222648",
        "title": "MagSafe 磁吸燈 (不含燈牌配件組)",
        "name": "MagSafe 磁吸燈 (不含燈牌配件組)",
        "price": 890,
        "sku": "FG001021001"
      },
      {
        "id": "50434373288184",
        "title": "燈牌配件包 (不含磁吸燈)",
        "name": "燈牌配件包 (不含磁吸燈)",
        "price": 299,
        "sku": "FG005021000"
      }
    ]
  },
  {
    "id": "jowua_130w_led_hub_reengineered_model_3_highland",
    "name": "Jowua - 130W LED Hub (Model 3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-130w-led-hub-reengineered-model-3-highland.png?v=1716450819",
    "description": "僅適用 Model Y (煥新版 2025+)、Model 3 (煥新版 2024+) 中控點菸器連接埠不具備資料傳輸，僅支持充電功能 產品描述 明亮燈光＆專屬訂製 專為 Model Y (煥新版 2025+)、Model 3 (煥新版 2024+) 中控台設計。質感霧面灰色設計與原廠內飾完美匹配，",
    "officialUrl": "https://global.jowua-life.com/products/130w-led-hub-reengineered-model-3-highland",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45169907695864",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1990,
        "sku": "FG000320111"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_luxgen_n7",
    "name": "Jowua - 立體防水腳踏墊 (LUXGEN n⁷ 5人座)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liners-luxgen-n7.png?v=1715943026",
    "description": "產品規格 專為納智捷LUXGEN n⁷ 5人座訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 完美搭配“ 椅下出風口保護網 ” 阻絕零錢、髒東西、小生物或其他物品掉進椅下出風口。 完美搭配 “ 兩用面紙收納盒 ” 安裝在後排，方便駕",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45126645350648",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG002801150"
      }
    ]
  },
  {
    "id": "jowua_windshield_sunshade_for_model_3_2024",
    "name": "Jowua - 前擋玻璃遮陽簾(Model 3) 2024煥新版適用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model3-2024-windhsield-sunshade_1.png?v=1714387083",
    "description": "產品描述 專為所有Model 3 開發設計 原車開模，完美貼合前擋玻璃，隔熱效果更升級。 獨家後視鏡拉鍊設計 輕鬆安裝，並適配各式後視鏡尺寸。 雙面高密度編織布料 耐熱、降低熱傳導、無異味，特殊抗光銀塗層，有效屏蔽紫外線與陽光直射。 SGS國際實驗室認證 抗熱性測試：有效降溫14.6度 紡織安全測試",
    "officialUrl": "https://global.jowua-life.com/products/windshield-sunshade-for-model-3-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44985277415672",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1690,
        "sku": "FG002202501"
      }
    ]
  },
  {
    "id": "jowua_nema_14_50_weatherproof_power_outlet_box",
    "name": "Jowua - NEMA 14-50 防水電源插座盒",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1190,
    "originalPrice": 1190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-nema-14-50-weatherproof-power-outlet-box.png?v=1713946886",
    "description": "產品描述 NEMA 14-50 依據NEMA（美國國家電氣製造商協會）標準設計製造，此插座盒專為安裝NEMA 14-50R插座而配置。 12000W Max. 大功率輸出 支援240V / 50A的高功率連接，非常適合為電動車、房車以及其他重型設備提供電源。 IP66 防水防塵 採用防水材料設計製造",
    "officialUrl": "https://global.jowua-life.com/products/nema-14-50-weatherproof-power-outlet-box",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44978901156088",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1190,
        "sku": "FG002729902"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_ford_mustang_mach_e",
    "name": "Jowua - 立體防水腳踏墊 (Ford Mustang Mach-E)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-Ford-Mustang-Mach-E-Floor-Liner.png?v=1709626013",
    "description": "產品規格 專為福特 Ford Mustang Mach-E 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 包裝內容 主駕駛座 腳踏墊 x1 副駕駛座 腳踏墊 x1 後排乘客 腳踏墊x1 品牌獨家專利 專利編號 ： I802132",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-ford-mustang-mach-e",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44483883204856",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3990,
        "sku": "FG001401000"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_ford_mustang_mach_e",
    "name": "Jowua - 立體防水行李箱墊 (Ford Mustang Mach-E)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 2690,
    "originalPrice": 2690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-Ford-Mustang-Mach-E-Trunk-Liner.png?v=1709626033",
    "description": "產品描述 專為福特Ford Mustang Mach-E 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透 。 折線掀開與提把開口設計 後行李箱墊的折線與提把開口設計，輕鬆掀開使用行李廂內的下方 儲物 區。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。 包裝內容 前行李廂墊 x 1 後",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-ford-mustang-mach-e",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44483789259000",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2690,
        "sku": "FG001402000"
      }
    ]
  },
  {
    "id": "jowua_63w_charger_for_folding_electric_scooter",
    "name": "Jowua - 63W家用充電器＿折疊電動滑板車LR專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/3_5fabe671-94e7-4f1b-8763-1cfac2d80910.png?v=1708397661",
    "description": "使用手冊 點擊FAQ看詳情",
    "officialUrl": "https://global.jowua-life.com/products/63w-charger-for-folding-electric-scooter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44458056351992",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "FG002408800"
      }
    ]
  },
  {
    "id": "jowua_42v_car_charger_for_folding_electric_scooter",
    "name": "Jowua - 42V車用充電器＿折疊電動滑板車LR專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/4_32de0bad-3180-4bca-961c-63248dce332a.png?v=1708397668",
    "description": "產品描述 JOWUA開發電動車專用的車用充電器，讓滑板車時刻滿電！ ( BSMI認證： R3E109) Model S使用：中控車充電源插座 Model 3使用：中控車充電源插座 Model X使用：中控、後行李廂車充電源插座 Model Y使用：中控、後行李廂車充電源插座 使用手冊 點擊FAQ看詳",
    "officialUrl": "https://global.jowua-life.com/products/42v-car-charger-for-folding-electric-scooter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44458050322680",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1990,
        "sku": "FG000400101"
      }
    ]
  },
  {
    "id": "jowua_84w_charger_for_folding_electric_scooter",
    "name": "Jowua - 84W家用充電器＿折疊電動滑板車LR專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/3_1ca74b77-ca9f-40ce-beb7-f0af742775c2.png?v=1708397650",
    "description": "使用手冊 點擊FAQ看詳情",
    "officialUrl": "https://global.jowua-life.com/products/84w-charger-for-folding-electric-scooter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44458059759864",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG002408801"
      }
    ]
  },
  {
    "id": "jowua_nema_14_50_adapter",
    "name": "Jowua - NEMA 14-50 轉接器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh",
      "mx_refresh",
      "m3_highland"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/NEMA14-50.png?v=1745898712",
    "description": "產品描述 兼容特斯拉原廠２代旅充 符合特斯拉原廠規範。將此轉接頭連接至旅行用充電座（旅充），插上電源插座即可開始充電。 內建溫控晶片 獨家設計溫度監測晶片，隨時監控轉接器溫度變化。若溫度過高將自動啟動斷電保護機制停止充電，提供最安全的防護機制。 17mm / 40A高規電纜 採用線徑 17mm 高規",
    "officialUrl": "https://global.jowua-life.com/products/nema-14-50-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44404665942264",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1490,
        "sku": "FG002709901"
      }
    ]
  },
  {
    "id": "jowua_ccs1_to_ccs2_dc_ac_combined_ev_charging_adapter",
    "name": "Jowua - CCS1 to CCS2 DC & AC 快慢充轉接頭（通用版）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_highland"
    ],
    "price": 6990,
    "originalPrice": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs1-to-ccs2-dc-ac-combined-ev-charging-adapter-v2.png?v=1782989551",
    "description": "❗此商品不包含密碼鎖， 請按此加購 產品描述 CCS2 車主必備 相容第三方CCS2 (DC &amp; AC) 快慢充電網絡使用。CCS2 車主接上此轉接頭就能使用 CCS1 (DC &amp; AC) 快慢充電樁，增加您的充電選擇 ＊相容於特斯拉、Foxtron Bria、Luxgen n⁷ L",
    "officialUrl": "https://global.jowua-life.com/products/ccs1-to-ccs2-dc-ac-combined-ev-charging-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "49777492001016",
        "title": "CCS1 to CCS2 DC & AC 快慢充轉接頭",
        "name": "CCS1 to CCS2 DC & AC 快慢充轉接頭",
        "price": 6990,
        "sku": "FG001204505"
      }
    ]
  },
  {
    "id": "jowua_side_rear_lift_gate_window_sunshade_for_model_y",
    "name": "Jowua - 側窗＋尾門遮陽簾 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-Side-Rear-Lift-Gate-Window-Sunshade-for-ModelY.png?v=1706866260",
    "description": "產品描述 專為 Model Y 開發設計 原車開模，完美貼合車窗及尾門玻璃，隔熱效果更升級。 完全隱私，全面防護 享受車內完整隱私安全、車宿也安心，防止他人窺探內部。 雙面高密度編織布料 耐熱、降低熱傳導、無異味，有效屏蔽紫外線與陽光直射。 可折疊收納 採用記憶金屬外框，可瞬間折疊，附專用收納袋，可",
    "officialUrl": "https://global.jowua-life.com/products/side-rear-lift-gate-window-sunshade-for-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46640752328952",
        "title": "Model Y 煥新版 (2025+)",
        "name": "Model Y 煥新版 (2025+)",
        "price": 2590,
        "sku": "FG002204702"
      },
      {
        "id": "46640752296184",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 2590,
        "sku": "FG002201202"
      }
    ]
  },
  {
    "id": "jowua_rechargeable_battery",
    "name": "Jowua - 折疊電動滑板車｜LR 專用電池",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_11.png?v=1688056913",
    "description": "＊請注意：目前因為各國海關對電池容量限制的關係，所以滑板車電池並不能託運或是手提帶上飛機，還請消費者注意。 產品描述 230Ｗh 高效電池， 快拆式電池 電池180Wh升級至230Wh ，增加25％續航，最高可達 25 公里。 拆卸簡單直覺。 (行駛里程取決於駕駛重量、車速與路況等外在因素。) 搭配",
    "officialUrl": "https://global.jowua-life.com/products/rechargeable-battery",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44323929850104",
        "title": "230Wh",
        "name": "230Wh",
        "price": 3990,
        "sku": "FG002409901"
      }
    ]
  },
  {
    "id": "jowua_tempered_glass_screen_protector_for_tesla_model3_2024",
    "name": "Jowua - 防眩抗指紋保護貼 (Model 3/Y 煥新版 2024-2026)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/TemperedGlassScreenProtector_ForModel32023_1_8c1571a3-3de8-43d3-8cf3-433d9bd61ad3.png?v=1748330767",
    "description": "⚠️ 購買前請注意 ⚠️ 2026年 三月交車 Model Y (煥新版) 車款為 16\" 前座螢幕；Model Y (煥新版 2025)、Model 3 (煥新版 2024-2026) 則為 15\" 前座螢幕 產品描述 提供不同年份之車款螢幕 Model Y (煥新版 2026)：16\" 前座螢幕",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-for-tesla-model3-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48020954251512",
        "title": "【16\"螢幕】Model Y 煥新版 (2026+) / 磨砂霧面",
        "name": "【16\"螢幕】Model Y 煥新版 (2026+) / 磨砂霧面",
        "price": 1290,
        "sku": "FG001645200"
      },
      {
        "id": "48020954284280",
        "title": "【16\"螢幕】Model Y 煥新版 (2026+) / 高透亮面",
        "name": "【16\"螢幕】Model Y 煥新版 (2026+) / 高透亮面",
        "price": 1290,
        "sku": "FG001645100"
      },
      {
        "id": "44320939180280",
        "title": "【15\"螢幕】Model 3 煥新版 (2024-2026 ) / Model Y 煥新版 (2025) / 磨砂霧面",
        "name": "【15\"螢幕】Model 3 煥新版 (2024-2026 ) / Model Y 煥新版 (2025) / 磨砂霧面",
        "price": 1290,
        "sku": "FG001640201"
      }
    ]
  },
  {
    "id": "jowua_folding_electric_scooter",
    "name": "Jowua - 折疊電動滑板車｜LR",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 12990,
    "originalPrice": 12990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/FoldingElectricScooterLR_204c4953-aa47-4e5e-8f3e-826bff1a7ba6.png?v=1704522570",
    "description": "＊請注意：目前因為各國海關對電池容量限制的關係，所以滑板車電池並不能託運或是手提帶上飛機，還請消費者注意。 產品描述 輕鬆折疊，恣意暢行 四段式折疊收納，完美創造輕盈小體積，便利攜帶自在出行。 獨家防盜手把設計 可加購 Jowua密碼鎖 ，上鎖防護，保護愛車不易遭有心人竊盜。 人體工學手把 支撐手腕",
    "officialUrl": "https://global.jowua-life.com/products/folding-electric-scooter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44311716266232",
        "title": "折疊電動滑板車 LR (單電池)",
        "name": "折疊電動滑板車 LR (單電池)",
        "price": 12990,
        "sku": "FG002400003"
      }
    ]
  },
  {
    "id": "jowua_foldable_car_tray",
    "name": "Jowua - 車用折疊桌板",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-foldable-car-tray-gray.png?v=1727367481",
    "description": "產品描述 專為Tesla全車系設計 輕鬆營造舒適的行動辦公室與餐桌空間。 兩色選擇任您挑選 經典木紋與率性布紋灰，雙款式質感面面俱到。 同時使用不限制 特殊尺寸，讓駕駛與副駕可同時使用桌板，不打架。 後排乘客也能用 可加購專屬配件包，讓 Model S/3/X/Y 後排乘客也能使用桌板。👉 請看詳",
    "officialUrl": "https://global.jowua-life.com/products/foldable-car-tray",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45770866295032",
        "title": "桌板｜布紋灰 (不含配件包)",
        "name": "桌板｜布紋灰 (不含配件包)",
        "price": 2190,
        "sku": "FG001521102"
      },
      {
        "id": "44293907087608",
        "title": "桌板｜木紋（不含配件包）",
        "name": "桌板｜木紋（不含配件包）",
        "price": 2190,
        "sku": "FG001531102"
      },
      {
        "id": "46491163656440",
        "title": "加購：後排專用配件包 (Model Y 2025+ 煥新版專用)",
        "name": "加購：後排專用配件包 (Model Y 2025+ 煥新版專用)",
        "price": 590,
        "sku": "FG001512500"
      },
      {
        "id": "44293907120376",
        "title": "加購：後排專用配件包 (Model 3 2018-2023 & Model Y 2021-2024)",
        "name": "加購：後排專用配件包 (Model 3 2018-2023 & Model Y 2021-2024)",
        "price": 590,
        "sku": "FG001512200"
      },
      {
        "id": "44844597772536",
        "title": "加購：後排專用配件包 (Model 3 2024+ 煥新版專用)",
        "name": "加購：後排專用配件包 (Model 3 2024+ 煥新版專用)",
        "price": 390,
        "sku": "FG001512300"
      },
      {
        "id": "45770866327800",
        "title": "加購：後排專用配件包 (Model S & Model X 5/7人座 & Volvo EX30專用)",
        "name": "加購：後排專用配件包 (Model S & Model X 5/7人座 & Volvo EX30專用)",
        "price": 390,
        "sku": "FG001512400"
      }
    ]
  },
  {
    "id": "jowua_2021_led_hub",
    "name": "Jowua - 45W HUB集線器 (雙 USB-C 版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023"
    ],
    "price": 1590,
    "originalPrice": 1590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_USBHubwithLEDlight_C_C_front.png?v=1632456360",
    "description": "❗僅適用 Model Y &amp; Model 3 ( 2021+) 新版中控。 Model Y &amp; Model 3 (2022+) 中控置物台 USB 連接埠，不具備資料傳輸，仍支持充電功能。 產品描述 明亮燈光＆專屬訂製 專為 Tesla Model 3/Y 中控雙 USB-C 端口設",
    "officialUrl": "https://global.jowua-life.com/products/2021-led-hub",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44239977119992",
        "title": "45W",
        "name": "45W",
        "price": 1590,
        "sku": "FG000300110"
      }
    ]
  },
  {
    "id": "jowua_100w_usb_c_to_magnetic_dc_charging_cable",
    "name": "Jowua - 通用筆電車用磁吸充電線（為非 USB-C 筆電腦而設計）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 690,
    "originalPrice": 690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA-100WUSB-C-to-Magnetic-DC-Charging-Cable.png?v=1701588217",
    "description": "產品描述 提供非 USB-C 筆電的快速充電方案 適用於各品牌和型號的非 USB-C 充電筆記型電腦，並支援 USB-C PD 100W 快充 磁性連結，方便操作 磁吸接頭有效防斷，拉扯時會一瞬分離，確保筆電穩固安全。 優質耐磨材質 1.8公尺尼龍編織線與金屬外殼， 更耐用堅固。 LED 指示燈設計",
    "officialUrl": "https://global.jowua-life.com/products/100w-usb-c-to-magnetic-dc-charging-cable",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44228374167800",
        "title": "100W USB-C to Magnetic DC Cable -  7.4*5.0*0.6 Square tip for Lenovo",
        "name": "100W USB-C to Magnetic DC Cable -  7.4*5.0*0.6 Square tip for Lenovo",
        "price": 690,
        "sku": "BFG23112901"
      },
      {
        "id": "44228374200568",
        "title": "100W USB-C to Magnetic DC Cable -  7.4*5.0*0.6mm for HP",
        "name": "100W USB-C to Magnetic DC Cable -  7.4*5.0*0.6mm for HP",
        "price": 690,
        "sku": "BFG23112902"
      },
      {
        "id": "44228374233336",
        "title": "100W USB-C to Magnetic DC Cable -  7.9*5.6 *0.9mm for Lenovo",
        "name": "100W USB-C to Magnetic DC Cable -  7.9*5.6 *0.9mm for Lenovo",
        "price": 690,
        "sku": "BFG23112903"
      },
      {
        "id": "44228374266104",
        "title": "100W USB-C to Magnetic DC Cable -  5.5*2.1mm",
        "name": "100W USB-C to Magnetic DC Cable -  5.5*2.1mm",
        "price": 690,
        "sku": "BFG23112904"
      },
      {
        "id": "44228374298872",
        "title": "100W USB-C to Magnetic DC Cable - 5.5*2.5mm",
        "name": "100W USB-C to Magnetic DC Cable - 5.5*2.5mm",
        "price": 690,
        "sku": "BFG23112905"
      },
      {
        "id": "44228374331640",
        "title": "100W USB-C to Magnetic DC Cable - 5.5*1.7mm for Acer",
        "name": "100W USB-C to Magnetic DC Cable - 5.5*1.7mm for Acer",
        "price": 690,
        "sku": "BFG23112906"
      },
      {
        "id": "44228374364408",
        "title": "100W USB-C to Magnetic DC Cable - 4.0*1.7mm for Lenovo",
        "name": "100W USB-C to Magnetic DC Cable - 4.0*1.7mm for Lenovo",
        "price": 690,
        "sku": "BFG23112907"
      },
      {
        "id": "44228374397176",
        "title": "100W USB-C to Magnetic DC Cable - 4.0*1.7mm",
        "name": "100W USB-C to Magnetic DC Cable - 4.0*1.7mm",
        "price": 690,
        "sku": "BFG23112908"
      },
      {
        "id": "44228374429944",
        "title": "100W USB-C to Magnetic DC Cable -  3.5*1.5mm for DELL",
        "name": "100W USB-C to Magnetic DC Cable -  3.5*1.5mm for DELL",
        "price": 690,
        "sku": "BFG23112909"
      },
      {
        "id": "44228374462712",
        "title": "100W USB-C to Magnetic DC Cable - 4.0*1.35mm for ASUS",
        "name": "100W USB-C to Magnetic DC Cable - 4.0*1.35mm for ASUS",
        "price": 690,
        "sku": "BFG23112910"
      },
      {
        "id": "44228374495480",
        "title": "100W USB-C to Magnetic DC Cable - 2.5*0.7mm for ASUS",
        "name": "100W USB-C to Magnetic DC Cable - 2.5*0.7mm for ASUS",
        "price": 690,
        "sku": "BFG23112911"
      },
      {
        "id": "44228374528248",
        "title": "100W USB-C to Magnetic DC Cable - 4.5*3.0*0.6mm for HP/ ASUS",
        "name": "100W USB-C to Magnetic DC Cable - 4.5*3.0*0.6mm for HP/ ASUS",
        "price": 690,
        "sku": "BFG23112912"
      },
      {
        "id": "44228374561016",
        "title": "100W USB-C to Magnetic DC Cable - 4.5*3.0*0.6mm for DELL",
        "name": "100W USB-C to Magnetic DC Cable - 4.5*3.0*0.6mm for DELL",
        "price": 690,
        "sku": "BFG23112913"
      },
      {
        "id": "44653818904824",
        "title": "100W USB-C to Magnetic DC Cable - 7.4*5.0*0.6mm for DELL",
        "name": "100W USB-C to Magnetic DC Cable - 7.4*5.0*0.6mm for DELL",
        "price": 690,
        "sku": "BFG23112914"
      },
      {
        "id": "44653839712504",
        "title": "100W USB-C to Magnetic DC Cable - 3.0*1.0 mm for Acer",
        "name": "100W USB-C to Magnetic DC Cable - 3.0*1.0 mm for Acer",
        "price": 690,
        "sku": "BFG24022601"
      }
    ]
  },
  {
    "id": "jowua_rear_liftgate_triangular_window_sunshade_for_model_x",
    "name": "Jowua - 尾門＋三角窗遮陽簾(Model X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 1590,
    "originalPrice": 1590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA-rear-liftgate-triangular-sunshade-modelx.png?v=1701253118",
    "description": "產品描述 專為Model X 2021+ 開發設計 原車開模，完美貼合尾門與三角窗，隔熱效果更升級。 高密度透光編織布料 透光不影響行車視野，耐熱、降低熱傳導、無異味，能有效屏蔽紫外線和陽光直射。 可折疊收納 採用記憶金屬外框，可瞬間折疊成“橢圓”形狀，附專用收納袋，可收納在後行李廂下層。 安裝說明",
    "officialUrl": "https://global.jowua-life.com/products/rear-liftgate-triangular-window-sunshade-for-model-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44219388166392",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1590,
        "sku": "FG002202301"
      }
    ]
  },
  {
    "id": "jowua_led_light_bar_holder",
    "name": "Jowua - LED 感應燈座",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_highland"
    ],
    "price": 390,
    "originalPrice": 1180,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_LEDLight_Holder.png?v=1701160491",
    "description": "燈棒底座 搭配 Jowua LED 智能感應燈 可自由黏貼在後行李廂任一處，打開後行李廂就自動亮燈，方便在黑暗中尋找物品。 底座採用專利射出勾技術 簡單安裝，勾型細緻不傷行李廂內裝絨毛，黏貼穩固不掉落。 LED 感應燈 智能感應模式 內建紅外線與光感雙重感應模式。 循環充電 內建 500mAh 鋰電",
    "officialUrl": "https://global.jowua-life.com/products/led-light-bar-holder",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44213148090616",
        "title": "LED感應燈+燈棒底座",
        "name": "LED感應燈+燈棒底座",
        "price": 990,
        "sku": "BFG23102701"
      },
      {
        "id": "44213148123384",
        "title": "燈棒底座 (無附LED感應燈)",
        "name": "燈棒底座 (無附LED感應燈)",
        "price": 390,
        "sku": "FG001021000"
      },
      {
        "id": "44253234299128",
        "title": "LED燈棒 (無附底座)",
        "name": "LED燈棒 (無附底座)",
        "price": 890,
        "sku": "FG001034000"
      }
    ]
  },
  {
    "id": "jowua_usb_c_to_car_cigarette_lighter_adapter",
    "name": "Jowua - USB-C 轉點菸器轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh",
      "mx_refresh",
      "m3_highland"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_USB-CtoCarCigaretteLighterAdapter_2.png?v=1700640578",
    "description": "產品描述 45W 充電 透過此轉接頭，可將車內 USB-C 端口電力轉換為點煙器使用。 提供額外電力 解決點煙器不夠使用，可輕鬆替其他裝置供電。 Ex: 車用吸塵器、車用空氣清淨器、行車記錄器、區間測速器。 產品規格 輸入: 9V / 12V / 15V 輸出: 9V / 12V / 15V 輸出電",
    "officialUrl": "https://global.jowua-life.com/products/usb-c-to-car-cigarette-lighter-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44194188165368",
        "title": "標準規格",
        "name": "標準規格",
        "price": 390,
        "sku": "FG000400102"
      }
    ]
  },
  {
    "id": "jowua_windshield_sunshade_for_model_y",
    "name": "Jowua - 前擋玻璃遮陽簾 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model3-2024-windhsield-sunshade_1.png?v=1714387083",
    "description": "產品描述 專為Model Y 開發設計 原車開模，完美貼合前擋玻璃，隔熱效果更升級。 獨家後視鏡拉鍊設計 不遮擋車內前鏡頭、輕鬆安裝，並適配各式後視鏡尺寸。 雙面高密度編織布料 耐熱、降低熱傳導、無異味，特殊抗光銀塗層，有效屏蔽紫外線與陽光直射。 SGS國際實驗室認證 抗熱性測試：有效降溫14.6度",
    "officialUrl": "https://global.jowua-life.com/products/windshield-sunshade-for-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46640751804664",
        "title": "Model Y 煥新版 (2025+)",
        "name": "Model Y 煥新版 (2025+)",
        "price": 1690,
        "sku": "FG002204701"
      },
      {
        "id": "46640751771896",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 1690,
        "sku": "FG002201201"
      }
    ]
  },
  {
    "id": "jowua_cup_coaster_modelx",
    "name": "Jowua - 杯墊 ( Model X )",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_ThirdRowCupCoaster_X..png?v=1700117551",
    "description": "產品描述 專為 Model X (2023+) 設計 第 3 排座椅杯墊：專為 Model X (2023+) 第三排座椅置杯架設計 (6/7 人座適用)。 嚴選矽膠材質 採用食品級矽膠，耐高溫低溫(-40℃ to 220℃)，無毒且環保。 方便清洗 矽膠材質可水洗，讓您方便清洗。 防提起結構 透過",
    "officialUrl": "https://global.jowua-life.com/products/cup-coaster-modelx",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44128864272632",
        "title": "Model X（第 3 排座椅杯墊）",
        "name": "Model X（第 3 排座椅杯墊）",
        "price": 490,
        "sku": "FG000923301"
      }
    ]
  },
  {
    "id": "jowua_magsafe_tissue_box_cover",
    "name": "Jowua - MagSafe 皮革面紙盒",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-magsafe-tissue-box-cover-gray.png?v=1734592740",
    "description": "產品描述 搭配 Jowua Model 3 腳踏墊 專屬區域放置面紙收納盒，駕駛與乘客都可輕鬆拿取。 相容 MagSafe 完美搭配 Jowua 磁吸掛鉤，方便後排乘客或是安全座椅上的孩童抽取面紙。 MagSafe 磁吸掛鉤 for Model 3/Y，點擊 &gt;&gt; 查看更多 MagSaf",
    "officialUrl": "https://global.jowua-life.com/products/magsafe-tissue-box-cover",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46027565859064",
        "title": "布紋灰",
        "name": "布紋灰",
        "price": 790,
        "sku": "FG001006401"
      }
    ]
  },
  {
    "id": "jowua_model_s_glass_roof_sunshade",
    "name": "Jowua - 玻璃車頂遮陽簾(Model S)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA_Model_S_Glass_Roof_Sunshade.png?v=1693811027",
    "description": "產品描述 專為2023+ Model S 設計，不適用於舊款Model S。 特斯拉消暑法寶 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 兩片式設計，車頂中央不塌陷 前後兩片獨立設計，中央位置不塌陷。 雙面高密度編織布料 透光不影響天窗視野，耐熱、降低熱傳導、無異味，特殊抗光銀塗層，能有",
    "officialUrl": "https://global.jowua-life.com/products/model-s-glass-roof-sunshade",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43991021027576",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2590,
        "sku": "FG002202400"
      }
    ]
  },
  {
    "id": "jowua_universal_magnetic_ring",
    "name": "Jowua - MagSafe引磁環（兩入）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 290,
    "originalPrice": 290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/2_04c1f33a-8763-43c0-b59a-741e91c05ac0.png?v=1690432990",
    "description": "產品描述 輕鬆升級 MagSafe 磁吸 貼在裝置/保護殼外(接收端)，可搭配 MagSafe 車架/充電器使用。 小巧輕薄 嚴選3M 膠，強力且無痕，穩固黏貼。 ⚠️ 此產品屬於一次性使用，無法重複黏貼，請在黏貼前先確認好位置，再撕下貼紙，錯誤的黏貼位置會影響裝置無線充電充能。",
    "officialUrl": "https://global.jowua-life.com/products/universal-magnetic-ring",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43938079998200",
        "title": "標準規格",
        "name": "標準規格",
        "price": 290,
        "sku": "FG001063600"
      }
    ]
  },
  {
    "id": "jowua_dashboard_base_for_6d_invisible_foldaway_car_mount",
    "name": "Jowua - 儀表板底座（六維隱藏車架專用）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 199,
    "originalPrice": 199,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/1_2f058cbc-31ed-4735-802b-f4ad82bf6b96.png?v=1690340706",
    "description": "產品描述 完美搭配 適用 JOWUA 六維隱藏車架（ 滾輪款 、 MagSafe 款 ）。 3M 黏貼背膠 嚴選 3M VHB 背膠，黏貼穩固，不留殘膠。 儀表板無痕安裝 適用於多種儀表板表面。 ＊不適合安裝於弧度過大或凹凸面過大的儀表板。 拆卸取手設計 便利的拆卸取手，輕鬆去除且不留殘膠。 規格尺",
    "officialUrl": "https://global.jowua-life.com/products/dashboard-base-for-6d-invisible-foldaway-car-mount",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43926030418168",
        "title": "標準規格",
        "name": "標準規格",
        "price": 199,
        "sku": "FG000209903"
      }
    ]
  },
  {
    "id": "jowua_hub_bar_mini_for_tesla_model_s_x",
    "name": "Jowua - LED HUB for Tesla Model S / X",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_HubBarMiniforTeslaMoselS_X_1.png?v=1687243387",
    "description": "產品描述 明亮燈光＆專屬訂製 專為 Tesla Model S/X (2023+) 中控雙 USB-C 端口設計，方便你在黑暗中尋找物品。 高效能集線器 USB-C 端口支援至 27W PD 快充與資料傳輸，其他 USB 端口可支援音樂、Boombox 、搖桿與其他USB裝置充電。 100% 全防水",
    "officialUrl": "https://global.jowua-life.com/products/hub-bar-mini-for-tesla-model-s-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43895302258936",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1690,
        "sku": "FG000360109"
      }
    ]
  },
  {
    "id": "jowua_model_x_all_weather_trunk_liners",
    "name": "Jowua - 立體防水行李廂墊 (Model X 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-x-all-weather-trunk-liners-6-7-seaters.png?v=1758880381",
    "description": "行李廂墊 專為特斯拉 Model X 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 前箱立體優化設計 可完美收納兼容兩組 Jowua 折疊桌板 。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。 防水椅背墊( 6/7人座) 專為特斯拉 Model X 6/7人座後排座椅訂製 精準開",
    "officialUrl": "https://global.jowua-life.com/products/model-x-all-weather-trunk-liners",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47721169125624",
        "title": "5 人座 / 2025+",
        "name": "5 人座 / 2025+",
        "price": 3990,
        "sku": "FG004400300"
      },
      {
        "id": "43860693680376",
        "title": "5 人座 / 2021-2024",
        "name": "5 人座 / 2021-2024",
        "price": 3990,
        "sku": "FG001402450"
      },
      {
        "id": "47721169158392",
        "title": "6/7 人座 / 2025+",
        "name": "6/7 人座 / 2025+",
        "price": 3990,
        "sku": "BFG25123001"
      },
      {
        "id": "44904831549688",
        "title": "6/7 人座 / 2021-2024",
        "name": "6/7 人座 / 2021-2024",
        "price": 3990,
        "sku": "BFG23090701"
      }
    ]
  },
  {
    "id": "jowua_model_x_all_weather_floor_liners",
    "name": "Jowua - 立體防水腳踏墊 (Model X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 4990,
    "originalPrice": 5780,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/X6.png?v=1690964889",
    "description": "產品描述 專為特斯拉 Model X (2023-2025) 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品 。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心",
    "officialUrl": "https://global.jowua-life.com/products/model-x-all-weather-floor-liners",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46473649291512",
        "title": "6 人座",
        "name": "6 人座",
        "price": 5990,
        "sku": "FGM25051601"
      },
      {
        "id": "43854513602808",
        "title": "7 人座",
        "name": "7 人座",
        "price": 5990,
        "sku": "FGM23070503"
      },
      {
        "id": "43854513668344",
        "title": "5 人座",
        "name": "5 人座",
        "price": 4990,
        "sku": "FGM23070501"
      }
    ]
  },
  {
    "id": "jowua_model_s_all_weather_trunk_liners",
    "name": "Jowua - 立體防水行李廂墊(Model S)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 3390,
    "originalPrice": 3390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-ModelS2021_AllWeatherTrunkLiners-top1_png.png?v=1685005933",
    "description": "產品描述 專為特斯拉 2023+ Model S 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透 。 貼心開口和掀開設計 不檔後行李 廂的扣帶，折線設計方便掀開使用行李廂內的下方 儲物 區。 加厚材質設計 2.8mm 的加厚材質，更加耐磨 。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清",
    "officialUrl": "https://global.jowua-life.com/products/model-s-all-weather-trunk-liners",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43837003006200",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3390,
        "sku": "FG001402300"
      }
    ]
  },
  {
    "id": "jowua_glovebox_hook_tesla_model_s_x",
    "name": "Jowua - 手套箱掛鉤 (Model S/X、Model 3/Y 煥新版、Volvo EX30、Foxtron Bria)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/37a557fbca7ec16fd2732bd71bc9acfa_54dbc63a-91ba-4254-8e90-31937864b5d9.png?v=1684391000",
    "description": "產品描述 適用車款 專為Model S/X (2023+) 、 Model Y 煥新版（2025+)、Model 3 煥新版 (2024+) 、Volvo EX30 、Foxtron Bria 量身打造。 置物新選擇 不佔座椅與腳踏空間，讓車內更井然有序 。 優質材料的完美組合 主體由 304不銹鋼",
    "officialUrl": "https://global.jowua-life.com/products/glovebox-hook-tesla-model-s-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43828443087096",
        "title": "標準規格",
        "name": "標準規格",
        "price": 590,
        "sku": "FG001961102"
      }
    ]
  },
  {
    "id": "jowua_front_trunk_hook",
    "name": "Jowua - 前行李廂雞排掛鉤",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_FrontTrunkHook.png?v=1683711091",
    "description": "產品描述 適用車款 專為 Model S/X (2023+)、Model Y (2021–2025+)、Model 3 煥新版 (2024+) 量身打造。 前廂置物的絕佳夥伴 包袋雜物、雞排與臭豆腐的一席之地。 特選材質，只提供最好 掛鉤主體由不銹鋼製成，輕薄、耐高溫且堅固耐重。 品牌獨家設計 一體",
    "officialUrl": "https://global.jowua-life.com/products/front-trunk-hook",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43815531741432",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG001964100"
      }
    ]
  },
  {
    "id": "jowua_model_y_rear_seats_back_cover",
    "name": "Jowua - 防水後排椅背墊 (Model Y 2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper",
      "my_classic"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-y-rear-seats-back-cover-juniper.png?v=1755165110",
    "description": "產品描述 專為特斯拉 Model Y (2021-2024) 後排座椅訂製 精準開模，預留孔位，不影響座椅功能使用，邊角完美貼合原車弧度。 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透。 獨立分體式結構 三件組設計，不影響各別座椅放開合。 固定不位移 背面採用專利射出勾設計",
    "officialUrl": "https://global.jowua-life.com/products/model-y-rear-seats-back-cover",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46403390898424",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 1490,
        "sku": "FG001403200"
      }
    ]
  },
  {
    "id": "jowua_apple_watch_charging_kit",
    "name": "Jowua - Apple Watch Charging Kit",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 299,
    "originalPrice": 299,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua-AppleWatchChargingKit.png?v=1679557290",
    "description": "What's included: • USB-C to USB-A 轉接頭(Power Only) x 1 • USB-C( 母) to USB ( 公 ) 轉接頭 x 1 產品描述 支援 Apple Watch 充電 內建充電辨識晶片，支援 Apple Ｗatch 和其他 Apple 裝置在特斯拉",
    "officialUrl": "https://global.jowua-life.com/products/apple-watch-charging-kit",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43743366480120",
        "title": "標準規格",
        "name": "標準規格",
        "price": 299,
        "sku": "BFG23031701"
      }
    ]
  },
  {
    "id": "jowua_tempered_glass_screen_protector_modelsx",
    "name": "Jowua - 防眩抗指紋保護貼 (Model S/X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 1490,
    "originalPrice": 1490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/TemperedGlassScreenProtector_ForModelS_X2021__new.png?v=1701679936",
    "description": "產品描述 適用所有 Model S/X (2023+) 螢幕 磨砂霧面材質，零霧感、抗指紋防眩光，完美貼合，滿版全覆蓋。 安裝超簡單 內附貼膜神器，一蓋即貼，零失誤。 9H 硬度鋼化玻璃 有效阻擋被尖銳物體刮傷，防止刮痕且耐磨損。 防眩、抗指紋， 高透光還原色彩 疏油塗層防止指紋和 油污沾附 ，超滑",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-modelsx",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43770249380088",
        "title": "磨砂霧面",
        "name": "磨砂霧面",
        "price": 1490,
        "sku": "FG001641200"
      }
    ]
  },
  {
    "id": "jowua_model_s_all_weather_floor_liners",
    "name": "Jowua - 立體防水腳踏墊(Model S)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "ms_refresh"
    ],
    "price": 4590,
    "originalPrice": 4590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_All-ModelSWeatherFloorLiners_Front.png?v=1681094791",
    "description": "產品描述 專為所有特斯拉 Model S (2023+) 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品 。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心使用。 ⚠️ 安裝Jowua腳踏墊前，請先移除特斯拉原廠車內",
    "officialUrl": "https://global.jowua-life.com/products/model-s-all-weather-floor-liners",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43770250723576",
        "title": "標準規格",
        "name": "標準規格",
        "price": 4590,
        "sku": "FG001401300"
      }
    ]
  },
  {
    "id": "jowua_under_seat_collapsible_organizer",
    "name": "Jowua - 摺疊收納盒",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "mx_refresh"
    ],
    "price": 890,
    "originalPrice": 1780,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_Under-seatCollapsibleOrganizer_01.png?v=1755226283",
    "description": "產品描述 專為所有特斯拉 Model X/Y 訂製 原車開模，無損安裝，增加座椅下儲物空間，同時不影響座椅調整。 Model X &amp; Model Y (2021-2024) 座椅下前、後通用，皆可放置 Model Y 煥新版 (2025+) 可放於座椅下後方（*請注意：由於座椅前方空間較小，",
    "officialUrl": "https://global.jowua-life.com/products/under-seat-collapsible-organizer",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43729499652344",
        "title": "兩入",
        "name": "兩入",
        "price": 1590,
        "sku": "BFG23031601"
      },
      {
        "id": "43729499619576",
        "title": "一入",
        "name": "一入",
        "price": 890,
        "sku": "FG000920400"
      }
    ]
  },
  {
    "id": "jowua_36w_hub_bar_mini",
    "name": "Jowua - 36W Hub Bar Mini",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/MiniLEDHubBar_top_88cde086-de35-478b-bd6f-81fda6bf5d90.png?v=1675758042",
    "description": "僅適用 Model Y &amp; Model 3 新版中控 (2021+ ) ，USB 連接埠不具備資料傳輸，僅支持充電功能。 產品描述 明亮燈光＆專屬訂製 專為 Tesla Model 3/Y 中控雙 USB-C 端口設計（新版中控），方便你在黑暗中尋找物品。 ⚠️ 不適用於 Model 3 (",
    "officialUrl": "https://global.jowua-life.com/products/36w-hub-bar-mini",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43656359739640",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG000320107"
      }
    ]
  },
  {
    "id": "jowua_480_invisible_foldaway_car_mount_universal",
    "name": "Jowua - 六維隱藏車架Qi2 (滾輪款)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1990,
    "originalPrice": 1990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-480-invisible-foldaway-car-mount-universal_8e3ef623-dd33-4873-bd6c-9095592e0cf9.png?v=1740542032",
    "description": "產品描述 全新升級Qi2 最新的無線充電標準，更快的充電速度、更高的效率。可支援iPhone與Android設備高達15W無線充電！ （Model 3, 2024 煥新版，請參考 此款 ） 六維設計 球頭與支臂皆可調節角度，可自由調整觀看角度。 支援無線充電 輸出功率最高可達15W，支援 Apple",
    "officialUrl": "https://global.jowua-life.com/products/480-invisible-foldaway-car-mount-universal",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45380271112440",
        "title": "Qi2 無線充電",
        "name": "Qi2 無線充電",
        "price": 1990,
        "sku": "FG000230109"
      }
    ]
  },
  {
    "id": "jowua_qi2_wireless_charging_tesla_car_mount_jowua_6d_invisible_foldaway_car_mount_magsafe",
    "name": "Jowua - Qi2 製冷六維隱藏車架 (MagSafe款)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Group_448.png?v=1759312644",
    "description": "產品描述 製冷雙降溫系統 半導體製冷面板： 車架面板升級製冷技術，產生冰冷感。使手機降溫，保持最佳充電效能。 靜音循環風扇 ： 車架內建靜音循環扇，將充電熱能導出，使充電過程高效順暢。 Qi2 無線充電模組 最新的無線充電標準，更快的充電速度、更高的效率。可支援iPhone與Android設備高達1",
    "officialUrl": "https://global.jowua-life.com/products/qi2-wireless-charging-tesla-car-mount-jowua-6d-invisible-foldaway-car-mount-magsafe",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46934312222968",
        "title": "Qi2 製冷無線充電",
        "name": "Qi2 製冷無線充電",
        "price": 2290,
        "sku": "FG000200113"
      },
      {
        "id": "43543011262712",
        "title": "非充電 (無充電、製冷功能)",
        "name": "非充電 (無充電、製冷功能)",
        "price": 1290,
        "sku": "FG000200106"
      }
    ]
  },
  {
    "id": "jowua_j1772_to_ccs2_ac_adapter_pro",
    "name": "Jowua - J1772 to CCS2-AC (TYPE2) 轉接頭（V3.5 全相容CCS2溫控防拔款）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "mx_refresh"
    ],
    "price": 2890,
    "originalPrice": 3290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_J1772toCCS2-ACadapterV3_bundle.png?v=1677118905",
    "description": "❗僅限於AC慢充，無法支援DC超級充電站。 產品描述 CCS2車主必備 相容所有公共停車場Type 1 (J1772)充電器、保時捷、Noodoe及Tesla J1772充電樁，讓CCS2車主能使用。 內建全相容CCS2溝通晶片 獨家研發溝通晶片，能與不同充電樁各大廠牌車種訊號傳遞溝通，進行有效充電",
    "officialUrl": "https://global.jowua-life.com/products/j1772-to-ccs2-ac-adapter-pro",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45215257526520",
        "title": "轉接頭＋密碼鎖",
        "name": "轉接頭＋密碼鎖",
        "price": 2990,
        "sku": "BFG24052701"
      },
      {
        "id": "45215257559288",
        "title": "轉接頭",
        "name": "轉接頭",
        "price": 2890,
        "sku": "FG001201203"
      }
    ]
  },
  {
    "id": "jowua_tpc_to_j1772_adapter",
    "name": "Jowua - TPC(NACS) to J1772 轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 4380,
    "originalPrice": 4380,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_TPCtoJ1772-adapter_bundle.png?v=1765507520",
    "description": "❗僅限用於AC慢充，不適用DC超級充電站。 僅與 Jowua密碼鎖 搭配銷售。 產品描述 J1772 車主必備 在賣場、百貨公司、飯店的特斯拉 (TPC) 目的地充電樁，接上此轉接頭才能充電。 堅固耐用 通過插拔測試超過 10,000 次，插拔力小於 80N。 安全防盜設計 槍端鎖：防止被拔取充電槍",
    "officialUrl": "https://global.jowua-life.com/products/tpc-to-j1772-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43452495593720",
        "title": "標準規格",
        "name": "標準規格",
        "price": 4380,
        "sku": "BFG22110402"
      }
    ]
  },
  {
    "id": "jowua_model_y_glass_roof_sunshade",
    "name": "Jowua - 玻璃車頂遮陽簾 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-glass-roof-sunshade-model-y-2025-juniper.png?v=1756886309",
    "description": "產品描述 特斯拉 Model Y 消暑法寶 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 雙面高密度編織布料 透光不影響天窗視野，耐熱、降低熱傳導、無異味。特殊抗光銀塗層能有效屏蔽紫外線和陽光直射。 Jowua 原車灰：銀光塗層灰階布料，高密度編織面料與原車內飾顏色一致。 Jowua 黑武",
    "officialUrl": "https://global.jowua-life.com/products/model-y-glass-roof-sunshade",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46403179086072",
        "title": "煥新版 (2025+) / 黑武士",
        "name": "煥新版 (2025+) / 黑武士",
        "price": 2590,
        "sku": "FG002204700"
      },
      {
        "id": "48364728779000",
        "title": "煥新版 (2025+) / 原車灰",
        "name": "煥新版 (2025+) / 原車灰",
        "price": 2590,
        "sku": "FG002224700"
      },
      {
        "id": "43828522057976",
        "title": "舊車款 (2021-2024) / 黑武士",
        "name": "舊車款 (2021-2024) / 黑武士",
        "price": 2590,
        "sku": "FG002201200"
      }
    ]
  },
  {
    "id": "jowua_ccs2_ac_to_j1772_adapter",
    "name": "Jowua - CCS2-AC (TYPE2) to J1772 轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 4380,
    "originalPrice": 4380,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_CCS2-ACtoJ1772adapter_bundle.png?v=1668066581",
    "description": "❗僅限用於AC慢充，不適用DC超級充電站。 僅與 Jowua密碼鎖 搭配銷售。 產品描述 J1772 車主必備 到賣場、百貨公司、飯店的 CCS2-AC(type 2) 目的地充電樁，接上此轉接頭才能充電。 專利晶片設計 內建 Jowua 獨家設計溝通晶片。 安全防盜設計 車端鎖: 防止轉接頭被拔離",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-ac-to-j1772-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43316887519480",
        "title": "標準規格",
        "name": "標準規格",
        "price": 4380,
        "sku": "BFG22110401"
      }
    ]
  },
  {
    "id": "jowua_anti_rebound_inverted_umbrella",
    "name": "Jowua - 多段式反向傘",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_Anti-reboundInvertedUmbrella_All_224fe26b-ec15-4b70-b695-1d5fce5dfc18.png?v=1787883171",
    "description": "產品描述 多段式收納 省力又安全，不怕傘回彈誤傷自己。 反向式收傘 雨滴集中在傘內，不怕弄濕車內，讓雨天也方便優雅。 防潑水速乾布料 特殊奈米塗層，雨滴不沾傘面，一甩即乾。(適用超潑水款式) 防曬塗層 黑膠塗層，降溫抗UV，有效阻隔紫外線。(適用兩用傘款式) 多色可選 可依照愛車顏色做搭配。 車納收",
    "officialUrl": "https://global.jowua-life.com/products/anti-rebound-inverted-umbrella",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43285530935544",
        "title": "紅(超潑水)",
        "name": "紅(超潑水)",
        "price": 790,
        "sku": "FG002070000"
      },
      {
        "id": "43285530968312",
        "title": "藍(超潑水)",
        "name": "藍(超潑水)",
        "price": 790,
        "sku": "FG002080000"
      },
      {
        "id": "43285531001080",
        "title": "灰(兩用傘)",
        "name": "灰(兩用傘)",
        "price": 790,
        "sku": "FG002020000"
      },
      {
        "id": "43285530902776",
        "title": "白(兩用傘)",
        "name": "白(兩用傘)",
        "price": 790,
        "sku": "FG002010000"
      }
    ]
  },
  {
    "id": "jowua_glovebox_hook",
    "name": "Jowua - 手套箱掛鉤 (Model Y  2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "my_juniper",
      "my_classic"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_GloveboxHook_2pcs_V2.png?v=1673576337",
    "description": "產品描述 置物新選擇 專為Model Y (2021-2024) 設計。不佔座椅與腳踏空間，讓車內更井然有序 。 優質材料的完美組合 主體由 304不銹鋼製成，耐高溫且堅固耐用。 內部包覆矽膠層，可防止滑動，同時不會刮傷您的手套箱。 獨家設計 超薄與特定外型設計， 完美匹配 手套箱。 輕鬆安裝 一秒",
    "officialUrl": "https://global.jowua-life.com/products/glovebox-hook",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43457383366904",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 590,
        "sku": "FG001961101"
      }
    ]
  },
  {
    "id": "jowua_3_port_usb_hub_with_dashcam_reader",
    "name": "Jowua - 手套箱專用 3 Port 集線器 + 讀卡器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_3PortUSBHubwithDashCamReader_Side.png?v=1662969067",
    "description": "產品描述 Tesla 全車系手套箱專用 小巧且精心孔位設計，不佔手套箱空間。512G容量僅支援2021年後的TESLA 解決 Tesla 新車主的數據傳輸孔缺少的煩惱 一孔擴充三孔與讀卡器，支援記憶卡和其他USB設備裝置同時連接。 抗干擾 USB 3 port HiSpeed USB 抗干擾 USB",
    "officialUrl": "https://global.jowua-life.com/products/3-port-usb-hub-with-dashcam-reader",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43251453395192",
        "title": "搭配 256G 記憶卡",
        "name": "搭配 256G 記憶卡",
        "price": 2590,
        "sku": "BFG22091302"
      },
      {
        "id": "43251453362424",
        "title": "單買(不搭配記憶卡)",
        "name": "單買(不搭配記憶卡)",
        "price": 990,
        "sku": "FG000360106"
      }
    ]
  },
  {
    "id": "jowua_model_3_glass_roof_sunshade",
    "name": "Jowua - 玻璃車頂遮陽簾(Model 3)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 2590,
    "originalPrice": 2590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_Model3_GlassRoofSunshade.png?v=1718271110",
    "description": "產品描述 特斯拉消暑法寶 炎炎夏日，拒絕高溫， 安裝車頂遮陽簾能有效降低車內溫度 。 雙面高密度編織布料 透光不影響天窗視野， 耐熱 、降低熱傳導、無異味， 特殊抗光銀塗層， 能有效屏蔽紫外線和陽光直射 。 Jowua 原車灰：銀光塗層灰階布料，高密度編織面料與原車內飾顏色一致。 Jowua 黑武士",
    "officialUrl": "https://global.jowua-life.com/products/model-3-glass-roof-sunshade",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44321029751032",
        "title": "煥新版 (2024+) / 黑武士",
        "name": "煥新版 (2024+) / 黑武士",
        "price": 2590,
        "sku": "FG002202500"
      },
      {
        "id": "44321029718264",
        "title": "煥新版 (2024+) / 原車灰",
        "name": "煥新版 (2024+) / 原車灰",
        "price": 2590,
        "sku": "FG002222500"
      },
      {
        "id": "43828524613880",
        "title": "2021-2023 / 黑武士",
        "name": "2021-2023 / 黑武士",
        "price": 2590,
        "sku": "FG002201100"
      },
      {
        "id": "43828524646648",
        "title": "2018-2020 / 黑武士",
        "name": "2018-2020 / 黑武士",
        "price": 2590,
        "sku": "FG002200100"
      }
    ]
  },
  {
    "id": "jowua_touch_up_paint",
    "name": "Jowua - 補漆筆",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_touch-up-paint_all_2023.png?v=1672129855",
    "description": "產品描述 還原特斯拉愛車顏色 ▎車身顏色 珍珠白、純黑、夜銀、閃電銀 、低調夜幕灰、 深藍、 亮紅、烈焰紅、午夜櫻桃紅、星月銀、冰河藍、曜石黑、海軍藍 *曜石黑為兩入組，使用時請先塗上黑色漆油，待其完全乾燥後，再塗上金油漆 ▎輪匡顏色 鋁圈啞黑、鋁圈星光銀、鋁圈槍灰 、鋁圈深槍灰 、 鋁圈光子輪、隱",
    "officialUrl": "https://global.jowua-life.com/products/touch-up-paint",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43206393004280",
        "title": "車身｜珍珠白",
        "name": "車身｜珍珠白",
        "price": 390,
        "sku": "FG002110000"
      },
      {
        "id": "43206393069816",
        "title": "車身｜純黑",
        "name": "車身｜純黑",
        "price": 390,
        "sku": "FG002100000"
      },
      {
        "id": "43206393037048",
        "title": "車身｜夜銀",
        "name": "車身｜夜銀",
        "price": 390,
        "sku": "FG002120000"
      },
      {
        "id": "43846342148344",
        "title": "車身｜閃電銀",
        "name": "車身｜閃電銀",
        "price": 390,
        "sku": "FG002160001"
      },
      {
        "id": "44255740002552",
        "title": "車身｜低調夜幕灰",
        "name": "車身｜低調夜幕灰",
        "price": 390,
        "sku": "FG002120004"
      },
      {
        "id": "43206393102584",
        "title": "車身｜深藍",
        "name": "車身｜深藍",
        "price": 390,
        "sku": "FG002180000"
      },
      {
        "id": "43206393135352",
        "title": "車身｜亮紅",
        "name": "車身｜亮紅",
        "price": 390,
        "sku": "FG002170000"
      },
      {
        "id": "43956767850744",
        "title": "車身｜烈焰紅",
        "name": "車身｜烈焰紅",
        "price": 390,
        "sku": "FG002170001"
      },
      {
        "id": "44255740035320",
        "title": "車身｜午夜櫻桃紅",
        "name": "車身｜午夜櫻桃紅",
        "price": 390,
        "sku": "FG002170002"
      },
      {
        "id": "46084383015160",
        "title": "車身｜星月銀",
        "name": "車身｜星月銀",
        "price": 390,
        "sku": "FG002160003"
      },
      {
        "id": "46420465287416",
        "title": "車身｜冰河藍",
        "name": "車身｜冰河藍",
        "price": 390,
        "sku": "FG002180001"
      },
      {
        "id": "47631669395704",
        "title": "車身｜曜石黑",
        "name": "車身｜曜石黑",
        "price": 690,
        "sku": "FGM25120201"
      },
      {
        "id": "47976476016888",
        "title": "車身｜海軍藍",
        "name": "車身｜海軍藍",
        "price": 390,
        "sku": "FG002180002"
      },
      {
        "id": "43206393168120",
        "title": "鋁圈｜啞黑",
        "name": "鋁圈｜啞黑",
        "price": 390,
        "sku": "FG002100001"
      },
      {
        "id": "43206393200888",
        "title": "鋁圈｜ 星光銀",
        "name": "鋁圈｜ 星光銀",
        "price": 390,
        "sku": "FG002160000"
      },
      {
        "id": "44255744655608",
        "title": "鋁圈｜槍灰",
        "name": "鋁圈｜槍灰",
        "price": 390,
        "sku": "FG002120001"
      },
      {
        "id": "45031249871096",
        "title": "鋁圈｜深槍灰",
        "name": "鋁圈｜深槍灰",
        "price": 390,
        "sku": "FG002120005"
      },
      {
        "id": "44255744688376",
        "title": "鋁圈｜光子輪",
        "name": "鋁圈｜光子輪",
        "price": 390,
        "sku": "FG002120003"
      },
      {
        "id": "45870597832952",
        "title": "鋁圈｜隱秘灰",
        "name": "鋁圈｜隱秘灰",
        "price": 390,
        "sku": "FG002120006"
      },
      {
        "id": "46181784387832",
        "title": "鋁圈｜新星金屬銀",
        "name": "鋁圈｜新星金屬銀",
        "price": 390,
        "sku": "FG002160002"
      },
      {
        "id": "48153319047416",
        "title": "鋁圈｜隱秘灰 2.0",
        "name": "鋁圈｜隱秘灰 2.0",
        "price": 390,
        "sku": "FG002120008"
      }
    ]
  },
  {
    "id": "jowua_magnetic_charging_cable_usb_c_to_usb_c",
    "name": "Jowua - USB-C 車用磁吸線 (0.4M/1M/1.8M）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 199,
    "originalPrice": 199,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-magnetic-charging-cable-usb-c-to-usb-c-0.4m.png?v=1730271045",
    "description": "USB-C 車用磁吸線 專為 Model 3/Y 煥新版中控設計 (1.8M磁吸線限定) 內附兩個專用魔鬼氈，可將線材穩固地貼於中控側壁，完美固定且輕鬆隱藏不打結。 專為2021-2024 Model 3/Y 中控設計 最長達180cm，方便連接後排出風口USB端口至前方螢幕區域。 線徑3.2mm極",
    "officialUrl": "https://global.jowua-life.com/products/magnetic-charging-cable-usb-c-to-usb-c",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45878190670072",
        "title": "USB-C 車用磁吸線 0.4M＋轉接頭 (最高支援60W)",
        "name": "USB-C 車用磁吸線 0.4M＋轉接頭 (最高支援60W)",
        "price": 550,
        "sku": "FGM24102201"
      },
      {
        "id": "44909366509816",
        "title": "USB-C 車用磁吸線 1M＋轉接頭 (最高支援60W)",
        "name": "USB-C 車用磁吸線 1M＋轉接頭 (最高支援60W)",
        "price": 590,
        "sku": "FGM24041501"
      },
      {
        "id": "45327128789240",
        "title": "USB-C 車用磁吸線 1.8M＋轉接頭 (最高支援100W)",
        "name": "USB-C 車用磁吸線 1.8M＋轉接頭 (最高支援100W)",
        "price": 690,
        "sku": "FGM24061201"
      },
      {
        "id": "50139100643576",
        "title": "USB-C 車用磁吸線 1.8M＋1.2M延長線＋轉接頭 (最高支援60W)",
        "name": "USB-C 車用磁吸線 1.8M＋1.2M延長線＋轉接頭 (最高支援60W)",
        "price": 790,
        "sku": "BFG26062401"
      },
      {
        "id": "48903722336504",
        "title": "USB-C 車用磁吸線 - 專用磁吸頭 (3入/不含充電線)",
        "name": "USB-C 車用磁吸線 - 專用磁吸頭 (3入/不含充電線)",
        "price": 199,
        "sku": "FG000504199"
      }
    ]
  },
  {
    "id": "jowua_universal_air_vent_car_mount",
    "name": "Jowua - 出風口車架",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_universalairventcarmount_clip.png?v=1655110679",
    "description": "產品描述 包裝內附兩種出風口支架，自由更換 圓形出風口夾：適合內徑60~70mm的圓形出風口 葉片出風口勾：金屬勾設計，適合多數葉片出風口 360° 立體旋轉 360° 球頭設計，自由調整觀看角度 創新彈性滑輪夾臂設計 單手操作輕鬆取放，矽膠滑輪牢固夾緊手機且不傷手機 自由調整夾臂 按壓夾臂後方調整",
    "officialUrl": "https://global.jowua-life.com/products/universal-air-vent-car-mount",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42932338229496",
        "title": "標準規格",
        "name": "標準規格",
        "price": 990,
        "sku": "FG000230106"
      }
    ]
  },
  {
    "id": "jowua_universal_air_vent_car_mount_with_magsafe",
    "name": "Jowua - Qi2 製冷出風口車架 (MagSafe款)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-active-cooling-universal-air-vent-car-mount-with-magsafe.png?v=1761124682",
    "description": "產品描述 製冷雙降溫系統 半導體製冷面板 ：車架面板升級製冷技術，產生冰冷感。使手機降溫，保持最佳充電效能。 靜音循環風扇 ： 車架內建靜音循環扇，將充電熱能導出，使充電過程高效順暢。 Qi2 無線充電模組 最新的無線充電標準，更快的充電速度、更高的效率。可支援iPhone與Android設備高達1",
    "officialUrl": "https://global.jowua-life.com/products/universal-air-vent-car-mount-with-magsafe",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47221246427384",
        "title": "Qi2 製冷無線充電",
        "name": "Qi2 製冷無線充電",
        "price": 1690,
        "sku": "FG000220101"
      },
      {
        "id": "45626799194360",
        "title": "非充電（無充電、製冷功能）",
        "name": "非充電（無充電、製冷功能）",
        "price": 990,
        "sku": "FG000220105"
      }
    ]
  },
  {
    "id": "jowua_snap_hook",
    "name": "Jowua - 易拉扣",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh"
    ],
    "price": 199,
    "originalPrice": 199,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua-snaphook-front.png?v=1653377842",
    "description": "產品描述 專為特斯拉 Model 3/S(2023+) 行李箱的扣帶訂製 勾在後行李 廂上的扣帶，方便掀開使用行李廂內的下方 儲物 區。",
    "officialUrl": "https://global.jowua-life.com/products/snap-hook",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42872791007480",
        "title": "標準規格",
        "name": "標準規格",
        "price": 199,
        "sku": "FG001923300"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_model3",
    "name": "Jowua - 立體防水行李廂墊 (Model 3, 2018-2023)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 2990,
    "originalPrice": 2990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua-Model3AllWeatherTrunkLiners-front.png?v=1723457616",
    "description": "本產品僅適用於 Model 3, 2018-2023， 查看 Model 3, 2024+ 煥新版 專用版本。 產品描述 專為特斯拉 Model 3, 2018-2023 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 ＊包裝內附前行李廂墊x2 (Model 3 2018-2020與Mode",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-model3",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46423986372856",
        "title": "Model 3 (2018-2023)",
        "name": "Model 3 (2018-2023)",
        "price": 2990,
        "sku": "FG001402100"
      }
    ]
  },
  {
    "id": "jowua_tempered_glass_screen_protector_model3y",
    "name": "Jowua - 防眩抗指紋保護貼 Model 3 (2018-2023) / Model Y (2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/TemperedGlassScreenProtector_ForModel3_Y__side_b.png?v=1705460032",
    "description": "產品描述 適用 Model 3 (2018-2023) / Model Y (2021-2024) 螢幕 高透亮面｜清晰透徹，完美呈現螢幕原色。 安裝超簡單 內附貼膜神器，一蓋即貼，零失誤。 9H 硬度鋼化玻璃 有效阻擋被尖銳物體刮傷，防止刮痕且耐磨損。 疏水、疏油、抗指紋，高透光還原色彩 疏油塗層",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-model3y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42792861270264",
        "title": "高透亮面",
        "name": "高透亮面",
        "price": 890,
        "sku": "FG001640100"
      }
    ]
  },
  {
    "id": "jowua_rear_under_seat_air_vent_cover",
    "name": "Jowua - 椅下出風口保護網",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 450,
    "originalPrice": 450,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Rearunderseatairventcover_2pics.png?v=1651032042",
    "description": "產品描述 適用於所有 Model 3/Y &amp; LUXGEN n⁷ 一包兩入，安裝在前排座位下出風口。 黑科技防潑水透氣網 特殊奈米塗層，防止靜態水滴進入，同時不影響出風。 專利射出勾技術 勾型細緻，簡單安裝，黏貼穩固不掉落。 小強剋星，保持車內乾淨 阻絕零錢、髒東西、小生物或其他物品進入。",
    "officialUrl": "https://global.jowua-life.com/products/rear-under-seat-air-vent-cover",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42778828931320",
        "title": "標準規格",
        "name": "標準規格",
        "price": 450,
        "sku": "FG001801100"
      }
    ]
  },
  {
    "id": "jowua_ccs2_ac_to_tpc_adapter",
    "name": "Jowua - CCS2-AC (TYPE 2) to TPC(NACS) 轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 4380,
    "originalPrice": 4380,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_CCS2-ACtoTPCadapter_02new.png?v=1702021413",
    "description": "❗ 僅限用於 AC 慢充，不適用 DC 超級充電站。 產品描述 TPC 老車主必備 相容所有 TPC Model S/X/3/Y 相容機種 適用於符合 IEC62196-2 和 Tesla 全系列 Type 2 目的地充電樁和旅充(交流充電），全系列 TPC 車主，不相容於 Tesla 超充。 專利",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-ac-to-tpc-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42730407559416",
        "title": "轉接頭 + 密碼鎖",
        "name": "轉接頭 + 密碼鎖",
        "price": 4380,
        "sku": "BFG22041301"
      }
    ]
  },
  {
    "id": "jowua_usb_dongle_for_jowua_gamepad",
    "name": "Jowua - Jowua 搖桿專用 USB 接收器",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "all"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_WirelessUSBDongleforJowuaGamepad_new.png?v=1656900708",
    "description": "產品描述 搭配 Jowua 搖桿 支援雙搖桿對戰，手套箱內雙無線接收器同時連接時，訊號不干擾、不卡頓。",
    "officialUrl": "https://global.jowua-life.com/products/usb-dongle-for-jowua-gamepad",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42693905383672",
        "title": "標準規格",
        "name": "標準規格",
        "price": 390,
        "sku": "FG001309901"
      }
    ]
  },
  {
    "id": "jowua_usb_c_to_usb_a_adapter_power_only",
    "name": "Jowua - USB-C to USB-A 轉接頭(Power Only)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 199,
    "originalPrice": 199,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_MiniUSB-CtoUSB-AadapterPowerOnly_side1.png?v=1647829587",
    "description": "產品描述 特斯拉車主必備 適用2022之後新款 Model 3/Y 『前後排』 USB-C 端口，透過轉接頭可以鬆替您的裝置充電。 充電功能 內建充電辨識晶片，可穩地快速替裝置充電，最高可達 15W充電功率 。 *此轉接頭 支援 Apple 裝置充電。 優選材質 採用耐用的高及金屬材質，延長產品使用",
    "officialUrl": "https://global.jowua-life.com/products/usb-c-to-usb-a-adapter-power-only",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42598296060152",
        "title": "標準規格",
        "name": "標準規格",
        "price": 199,
        "sku": "FG000300201"
      }
    ]
  },
  {
    "id": "jowua_j1772_to_tpc_adapter",
    "name": "Jowua - J1772 to TPC(NACS) 轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 2390,
    "originalPrice": 2390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_J1772toTPCadapter_1.png?v=1646624771",
    "description": "❗ 僅限用於 AC 慢充，不適用 DC 超級充電站 產品描述 TPC 老車主必備 到公有停車場 Type 1 (J1772) 充電器， 接上此轉接頭才能充電 。 堅固耐用 通過插拔測試&gt;10,000次，插拔SAE J1772＜80N; TPC ＜100N 。 電器性能 工作電流自動調節: 60",
    "officialUrl": "https://global.jowua-life.com/products/j1772-to-tpc-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42532335354104",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2390,
        "sku": "FG001201300"
      }
    ]
  },
  {
    "id": "jowua_tpc_to_ccs2_ac_adapter",
    "name": "Jowua - TPC(NACS) to CCS2-AC (TYPE2) 轉接頭",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "mx_refresh"
    ],
    "price": 4390,
    "originalPrice": 4390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_TPCtoCCS2-ACadapter_Side_01.png?v=1642993881",
    "description": "❗ 僅限用於 AC 慢充，不適用 DC 超級充電站 產品描述 CCS2 新車主必備 到賣場、百貨公司、飯店的特斯拉 TPC 目的地充電樁， 接上此轉接頭才能充電 。 相容機種 適用於 Tesla 全系列目的地充電樁和旅充 ，不相容於 Tesla 超充 。 安全防盜設計 搭配 Jowua密碼鎖 ，在外",
    "officialUrl": "https://global.jowua-life.com/products/tpc-to-ccs2-ac-adapter",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42346169303288",
        "title": "轉接頭 + 密碼鎖",
        "name": "轉接頭 + 密碼鎖",
        "price": 4390,
        "sku": "BFG22012001"
      }
    ]
  },
  {
    "id": "jowua_4digit_padlock",
    "name": "Jowua - 充電轉接頭密碼鎖",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "mx_refresh"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_4-DigitPadlock_Front.png?v=1642483444",
    "description": "產品描述 安全防盜設計 搭配 JOWUA 系列轉接頭 ，在外充電，不怕被拔槍。 搭配 JOWUA 滑板車， 保護愛車不易遭有心人竊盜。 耐用堅固 特規 4.75mm 高強度鋼樑與鋅合金外殼 。 高安全性 多達 10,000 密碼排列組合 。 輕鬆設定 大字體滾輪轉動，方便使用與設定 。",
    "officialUrl": "https://global.jowua-life.com/products/4digit-padlock",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42318821949688",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG001003100"
      }
    ]
  },
  {
    "id": "jowua_tissue_storage_box",
    "name": "Jowua - 兩用面紙收納盒",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "mx_refresh"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_tissuestoragebox_darkgrey.png?v=1705379817",
    "description": "產品描述 一盒兩用 附贈隔板，可翻面當收納盒使用，擴充收納空間 。 搭配 Jowua Model X/Y 腳踏墊 專屬區域放置面紙收納盒，駕駛與乘客都可輕鬆拿取 。 Model X 可直接放置在止檔處。 Model Y 需搭配獨家精心設計 底板 ，創造一個平台空間可放置衛生紙。 特製尺寸 符合所有歐",
    "officialUrl": "https://global.jowua-life.com/products/tissue-storage-box",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44302211285240",
        "title": "黑色/暗灰",
        "name": "黑色/暗灰",
        "price": 790,
        "sku": "FG001025402"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners",
    "name": "Jowua - 立體防水腳踏墊(Model 3) 2024+煥新版適用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 4800,
    "originalPrice": 5280,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liners-model-3-2018-2023-gray.png?v=1733903625",
    "description": "產品描述 專為所有特斯拉 Model 3 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利止檔收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心使用。 空間魔術師 🎁 買就送 MagSafe 皮革面紙盒 ，放置後排",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45250282684664",
        "title": "煥新版 (2024+)",
        "name": "煥新版 (2024+)",
        "price": 4800,
        "sku": "FGM24052201"
      },
      {
        "id": "44080377790712",
        "title": "新/舊版中控 (2018-2023)",
        "name": "新/舊版中控 (2018-2023)",
        "price": 4800,
        "sku": "FGM23101701"
      }
    ]
  },
  {
    "id": "jowua_center_console_tray_organizer_prerefreshed",
    "name": "Jowua - 中控收納盒 (舊版中控2017-2020)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/CenterConsoleTrayOrganizer_Pre-refreshed__side.png?v=1638865378",
    "description": "僅適用 Model 3 車型 ( 2017 - 2020 十一月) 產品描述 專為舊版中控台設計 讓車內中控區域更整齊，增加儲物空間以收納太陽眼鏡、特斯拉鑰匙、充電轉接頭、悠遊卡、零錢等隨身小物品 。 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高溫低溫、防止物品滑動和碰撞聲，底層採用硬殼材",
    "officialUrl": "https://global.jowua-life.com/products/center-console-tray-organizer-prerefreshed",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42154737598712",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "FG000921100"
      }
    ]
  },
  {
    "id": "jowua_led_light_bar",
    "name": "Jowua - LED 智能感應燈",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/JowuaLEDLightBar-Front.png?v=1635746265",
    "description": "產品描述 智能感應模式 內建紅外線與光感技術，雙模式感應機制。 循環充電 內建 500mAh 鋰電池，充飽電可長亮約 8 小時，或感應模式使用約 3–5 個月。 輔助特斯拉車內空間照明 適用於手套箱、扶手箱、後車廂，方便黑暗中尋找物品。 90° 彎頭設計 L 型合金轉接頭，減少線材壓力，延長壽命。 ",
    "officialUrl": "https://global.jowua-life.com/products/led-light-bar",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "41963705237752",
        "title": "標準規格",
        "name": "標準規格",
        "price": 890,
        "sku": "FG001034000"
      }
    ]
  },
  {
    "id": "jowua_armrest_organizer",
    "name": "Jowua - 扶手箱收納盒 (Model 3/Y)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 790,
    "originalPrice": 1680,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/JowuaRearCompartmentOrganizer_Side_9c780b90-8ec7-439c-9fd3-2e5c778cb61e.png?v=1641888932",
    "description": "產品描述 為所有 Model 3/ Y 後中控台設計 讓車內後中控區域更整齊，增加儲物空間以收納太陽眼鏡、充電轉接頭、LED感應燈、衛生紙等隨身小物品。 ⚠️ 不適用於 Model 3 (2024+ 煥新版)，如需 Model 3 煥新版本 👉 請點此查看 。 雙層設計・嚴選材質 採用食品級矽膠，",
    "officialUrl": "https://global.jowua-life.com/products/armrest-organizer",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "42291637879032",
        "title": "(優惠組)收納盒+LED感應燈",
        "name": "(優惠組)收納盒+LED感應燈",
        "price": 1600,
        "sku": "BFG22011101"
      },
      {
        "id": "42291637846264",
        "title": "收納盒",
        "name": "收納盒",
        "price": 790,
        "sku": "FG000920200"
      }
    ]
  },
  {
    "id": "jowua_magsafe_stand_case_iphone_15_14_13_series",
    "name": "Jowua - MagSafe 透明支架保護殼 (iPhone 15/14/13 系列)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 690,
    "originalPrice": 690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-magsafe-case-iphone-13-15.png?v=1763088214",
    "description": "產品規格 支援 MagSafe 磁吸配件 相容於 iPhone MagSafe 無線充電 無段式雙向鋅合金支架 可呈現 4 種不同觀看角度，還可當指環扣使用。 金屬轉軸設計 耐用穩固更升級，無段式角度調節。 全方位360 °保護 精準貼合原機、鏡頭框加高設計，有效保護手機防止刮傷 高效充電，全球暢行",
    "officialUrl": "https://global.jowua-life.com/products/magsafe-stand-case-iphone-15-14-13-series",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44164650270968",
        "title": "iPhone 15 Pro Max",
        "name": "iPhone 15 Pro Max",
        "price": 690,
        "sku": "FG000805401"
      },
      {
        "id": "47423979651320",
        "title": "iPhone 15 Plus",
        "name": "iPhone 15 Plus",
        "price": 690,
        "sku": "FG000805501"
      },
      {
        "id": "47423979684088",
        "title": "iPhone 15 Pro",
        "name": "iPhone 15 Pro",
        "price": 690,
        "sku": "FG000805301"
      },
      {
        "id": "47423979716856",
        "title": "iPhone 15",
        "name": "iPhone 15",
        "price": 690,
        "sku": "FG000805201"
      },
      {
        "id": "47423979749624",
        "title": "iPhone 14 Pro Max",
        "name": "iPhone 14 Pro Max",
        "price": 690,
        "sku": "FG000804401"
      },
      {
        "id": "47423979782392",
        "title": "iPhone 14 Plus",
        "name": "iPhone 14 Plus",
        "price": 690,
        "sku": "FG000804501"
      },
      {
        "id": "47423979815160",
        "title": "iPhone 14 Pro",
        "name": "iPhone 14 Pro",
        "price": 690,
        "sku": "FG000804301"
      },
      {
        "id": "47423979847928",
        "title": "iPhone 14",
        "name": "iPhone 14",
        "price": 690,
        "sku": "FG000804201"
      },
      {
        "id": "47423979880696",
        "title": "iPhone 13 Pro Max",
        "name": "iPhone 13 Pro Max",
        "price": 690,
        "sku": "FG000803401"
      },
      {
        "id": "47423979913464",
        "title": "iPhone 13 Pro",
        "name": "iPhone 13 Pro",
        "price": 690,
        "sku": "FG000803301"
      },
      {
        "id": "47423979946232",
        "title": "iPhone 13",
        "name": "iPhone 13",
        "price": 690,
        "sku": "FG000804201"
      }
    ]
  },
  {
    "id": "jowua_iphone_clear_case_with_magsafe",
    "name": "Jowua - MagSafe 透明保護殼 (iPhone 12系列)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/846233035002ee60db1c3b953fa47aac.png?v=1624434049",
    "description": "產品規格 相容於 iPhone Magsafe 無線充電與 Jowua MagSafe 磁吸配件 。 採用特殊防刮材質， 透亮清晰呈現原機之美 。 全方位 360 度軍規防摔等級保護 。 吊飾孔設計，可搭配吊繩攜帶更方便 。",
    "officialUrl": "https://global.jowua-life.com/products/iphone-clear-case-with-magsafe",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "39995527758003",
        "title": "iPhone 12 Pro Max",
        "name": "iPhone 12 Pro Max",
        "price": 590,
        "sku": "FG000842401"
      },
      {
        "id": "39995527659699",
        "title": "iPhone 12 mini",
        "name": "iPhone 12 mini",
        "price": 590,
        "sku": "FG000842101"
      }
    ]
  },
  {
    "id": "jowua_center_console_tray_organizer",
    "name": "Jowua - 中控收納盒 ( Model 3/Y 2021-2023)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-center-console-tray-organizer-model-3y-2021_1.png?v=1763536714",
    "description": "產品描述 專為新版中控台設計，僅適用 Model 3/Y車型 (2021+) 讓車內中控區域更整齊，增加儲物空間以收納太陽眼鏡、特斯拉鑰匙、充電轉接頭、悠遊卡、零錢等隨身小物品。 ⚠️ 不適用於 Model 3 (2024+ 煥新版)，如需 Model 3 煥新版中控 👉 請點此查看 。 雙層設計",
    "officialUrl": "https://global.jowua-life.com/products/center-console-tray-organizer",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43714978283768",
        "title": "3格 / 透明白",
        "name": "3格 / 透明白",
        "price": 790,
        "sku": "FG000940102"
      },
      {
        "id": "43714978349304",
        "title": "3格 / 灰",
        "name": "3格 / 灰",
        "price": 790,
        "sku": "FG000920100"
      },
      {
        "id": "43714978414840",
        "title": "2格 / 灰",
        "name": "2格 / 灰",
        "price": 790,
        "sku": "FG000920101"
      }
    ]
  },
  {
    "id": "jowua_microsd_memory_card_64g_128g_for_tesla",
    "name": "Jowua - MicroSD 記憶卡 特斯拉專用",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "interior",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "mx_refresh"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Web_MicroSD_256GB.png?v=1683964499",
    "description": "產品描述 支援 Tesla 行車記錄 &amp; 哨兵行車模式儲存 256G： 可支援高達 1500 次哨兵模式事件儲存 低電壓設計 支援全區/靜態平均抹除演算法 支援錯誤檢查糾正(ECC)，可自動修正 1K bytes 中 7x-bits 資料錯誤 規格 尺寸： 1.1 x 1.5 x 0.1 (",
    "officialUrl": "https://global.jowua-life.com/products/microsd-memory-card-64g-128g-for-tesla",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "39949553434803",
        "title": "256G",
        "name": "256G",
        "price": 1690,
        "sku": "FG000600400"
      }
    ]
  },
  {
    "id": "quack_149469",
    "name": "呱樂電驢 - 呱樂電驢配件 #149469",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.quackev.com/ogImg.webp",
    "description": "呱樂電驢 - 呱樂電驢配件 #149469",
    "officialUrl": "https://www.quackev.com/products/info.php?id=149469",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-149469",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-149469"
      }
    ]
  },
  {
    "id": "quack_146083",
    "name": "呱樂電驢 - 呱樂電驢配件 #146083",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.quackev.com/ogImg.webp",
    "description": "呱樂電驢 - 呱樂電驢配件 #146083",
    "officialUrl": "https://www.quackev.com/products/info.php?id=146083",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-146083",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-146083"
      }
    ]
  },
  {
    "id": "quack_133586",
    "name": "呱樂電驢 - 呱樂電驢配件 #133586",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.quackev.com/ogImg.webp",
    "description": "呱樂電驢 - 呱樂電驢配件 #133586",
    "officialUrl": "https://www.quackev.com/products/info.php?id=133586",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-133586",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-133586"
      }
    ]
  },
  {
    "id": "quack_133590",
    "name": "呱樂電驢 - 呱樂電驢配件 #133590",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.quackev.com/ogImg.webp",
    "description": "呱樂電驢 - 呱樂電驢配件 #133590",
    "officialUrl": "https://www.quackev.com/products/info.php?id=133590",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-133590",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-133590"
      }
    ]
  },
  {
    "id": "quack_94851",
    "name": "呱樂電驢 - HALOBLK 黑洛 中控收納盒",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 600,
    "originalPrice": 600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177477860763.webp",
    "description": "HALOBLK 黑洛 中控收納盒-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=94851",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-94851",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 600,
        "sku": "QK-94851"
      }
    ]
  },
  {
    "id": "quack_94850",
    "name": "呱樂電驢 - HALOBLK 黑洛 天窗遮陽簾",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1800,
    "originalPrice": 1800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260526140613_5782.webp",
    "description": "HALOBLK 黑洛 天窗遮陽簾-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=94850",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-94850",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1800,
        "sku": "QK-94850"
      }
    ]
  },
  {
    "id": "quack_94845",
    "name": "呱樂電驢 - HALOBLK 黑洛 中控水杯套",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 600,
    "originalPrice": 600,
    "image": "https://www.workband.com.tw/store_image/quackev/P5177475279682.webp",
    "description": "HALOBLK 黑洛 中控水杯套-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=94845",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-94845",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 600,
        "sku": "QK-94845"
      }
    ]
  },
  {
    "id": "quack_52489",
    "name": "呱樂電驢 - HALOBLK 黑洛 鋁合金踏板（全車系）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1450,
    "originalPrice": 1450,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177398177715.webp",
    "description": "HALOBLK 黑洛 鋁合金踏板（全車系）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=52489",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-52489",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1450,
        "sku": "QK-52489"
      }
    ]
  },
  {
    "id": "quack_20647",
    "name": "呱樂電驢 - HALOBLK 黑洛 雙層腳踏墊",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 5500,
    "originalPrice": 5500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260807154020_1737.webp",
    "description": "HALOBLK 黑洛 雙層腳踏墊-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=20647",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-20647",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 5500,
        "sku": "QK-20647"
      }
    ]
  },
  {
    "id": "quack_18845",
    "name": "呱樂電驢 - HALOBLK 黑洛 動力盤 ( 一套4個)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 6400,
    "originalPrice": 6400,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177477581059.webp",
    "description": "HALOBLK 黑洛 動力盤 ( 一套4個)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18845",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18845",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 6400,
        "sku": "QK-18845"
      }
    ]
  },
  {
    "id": "quack_7590",
    "name": "呱樂電驢 - HALOBLK 黑洛 前擋遮陽傘",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177477351898.webp",
    "description": "HALOBLK 黑洛 前擋遮陽傘-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7590",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7590",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-7590"
      }
    ]
  },
  {
    "id": "quack_7576",
    "name": "呱樂電驢 - HALOBLK 黑洛 前排椅背保護墊",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1200,
    "originalPrice": 1200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177424271021.webp",
    "description": "HALOBLK 黑洛 前排椅背保護墊-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7576",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7576",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1200,
        "sku": "QK-7576"
      }
    ]
  },
  {
    "id": "quack_7529",
    "name": "呱樂電驢 - HALOBLK 黑洛 車用香薰盒",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1200,
    "originalPrice": 1200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177469519311.webp",
    "description": "HALOBLK 黑洛 車用香薰盒-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7529",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7529",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1200,
        "sku": "QK-7529"
      }
    ]
  },
  {
    "id": "quack_7527",
    "name": "呱樂電驢 - HALOBLK 黑洛 香薰石膏-2入",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 700,
    "originalPrice": 700,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177469554740.webp",
    "description": "HALOBLK 黑洛 香薰石膏-2入-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7527",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7527",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 700,
        "sku": "QK-7527"
      }
    ]
  },
  {
    "id": "quack_45838",
    "name": "呱樂電驢 - HALOBLK 黑洛 真碳纖維尾翼（煥新Y 2025+）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 8800,
    "originalPrice": 8800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177398527180.webp",
    "description": "HALOBLK 黑洛 真碳纖維尾翼（煥新Y 2025+）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=45838",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-45838",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 8800,
        "sku": "QK-45838"
      }
    ]
  },
  {
    "id": "quack_127954",
    "name": "呱樂電驢 - 空力套件-YOFER ( 舊Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_classic"
    ],
    "price": 26000,
    "originalPrice": 26000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260831114103_6067.webp",
    "description": "空力套件-YOFER ( 舊Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=127954",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-127954",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 26000,
        "sku": "QK-127954"
      }
    ]
  },
  {
    "id": "quack_124571",
    "name": "呱樂電驢 - 空力套件- AKASAKA系列_亮黑色 ( 煥新3 2024+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland"
    ],
    "price": 28000,
    "originalPrice": 28000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260814152823_1173.webp",
    "description": "空力套件- AKASAKA系列_亮黑色 ( 煥新3 2024+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=124571",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-124571",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 28000,
        "sku": "QK-124571"
      }
    ]
  },
  {
    "id": "quack_97760",
    "name": "呱樂電驢 - 空力套件- DC系列 ( 煥新Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 20000,
    "originalPrice": 20000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260729113451_5280.webp",
    "description": "空力套件- DC系列 ( 煥新Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=97760",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-97760",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 20000,
        "sku": "QK-97760"
      }
    ]
  },
  {
    "id": "quack_96391",
    "name": "呱樂電驢 - 空力套件- Xtan系列 ( 煥新Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 26000,
    "originalPrice": 26000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260814151222_9298.webp",
    "description": "空力套件- Xtan系列 ( 煥新Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=96391",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-96391",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 26000,
        "sku": "QK-96391"
      }
    ]
  },
  {
    "id": "quack_96111",
    "name": "呱樂電驢 - 空力套件- CMST系列 ( 煥新Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 28000,
    "originalPrice": 28000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260729114621_4854.webp",
    "description": "空力套件- CMST系列 ( 煥新Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=96111",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-96111",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 28000,
        "sku": "QK-96111"
      }
    ]
  },
  {
    "id": "quack_55607",
    "name": "呱樂電驢 - 空力套件-YOFER ( 煥新Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 26000,
    "originalPrice": 26000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177562963617.webp",
    "description": "空力套件-YOFER ( 煥新Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=55607",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-55607",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 26000,
        "sku": "QK-55607"
      }
    ]
  },
  {
    "id": "quack_62723",
    "name": "呱樂電驢 - 車內鏡頭蓋 (特斯拉任何車型皆適用)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 50,
    "originalPrice": 50,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835485122.webp",
    "description": "車內鏡頭蓋 (特斯拉任何車型皆適用)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=62723",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-62723",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 50,
        "sku": "QK-62723"
      }
    ]
  },
  {
    "id": "quack_62721",
    "name": "呱樂電驢 - 後螢幕風口護網( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 100,
    "originalPrice": 100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835576650.webp",
    "description": "後螢幕風口護網( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=62721",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-62721",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 100,
        "sku": "QK-62721"
      }
    ]
  },
  {
    "id": "quack_31761",
    "name": "呱樂電驢 - 擋泥板( 煥新版 Model 3/Y、舊Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_classic"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835623242.webp",
    "description": "擋泥板( 煥新版 Model 3/Y、舊Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=31761",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-31761",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-31761"
      }
    ]
  },
  {
    "id": "quack_7538",
    "name": "呱樂電驢 - 前廂扣勾墊片( 適用各版本 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 350,
    "originalPrice": 350,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835656063.webp",
    "description": "前廂扣勾墊片( 適用各版本 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7538",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7538",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 350,
        "sku": "QK-7538"
      }
    ]
  },
  {
    "id": "quack_7514",
    "name": "呱樂電驢 - 保桿防蟲網(Medel 3 /Medel Y版本皆有)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1100,
    "originalPrice": 1100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835779913.webp",
    "description": "保桿防蟲網(Medel 3 /Medel Y版本皆有)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 D",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7514",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7514",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1100,
        "sku": "QK-7514"
      }
    ]
  },
  {
    "id": "quack_7512",
    "name": "呱樂電驢 - 前廂擋水條-一體式 (Model Y ~2024)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P2176835711039.webp",
    "description": "前廂擋水條-一體式 (Model Y ~2024)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7512",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7512",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-7512"
      }
    ]
  },
  {
    "id": "quack_7509",
    "name": "呱樂電驢 - 前廂進氣防蟲網 (Medel 3 /Medel Y版本皆有)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 400,
    "originalPrice": 400,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176913564558.webp",
    "description": "前廂進氣防蟲網 (Medel 3 /Medel Y版本皆有)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7509",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7509",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 400,
        "sku": "QK-7509"
      }
    ]
  },
  {
    "id": "quack_7508",
    "name": "呱樂電驢 - 座椅下出風口護網-2入( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 100,
    "originalPrice": 100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176913627188.webp",
    "description": "座椅下出風口護網-2入( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7508",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7508",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 100,
        "sku": "QK-7508"
      }
    ]
  },
  {
    "id": "quack_7510",
    "name": "呱樂電驢 - 車牌架-鐵公公 (Medel 3 /Medel Y版本皆有)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1300,
    "originalPrice": 1300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176835534522.webp",
    "description": "車牌架-鐵公公 (Medel 3 /Medel Y版本皆有)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7510",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7510",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1300,
        "sku": "QK-7510"
      }
    ]
  },
  {
    "id": "quack_7568",
    "name": "呱樂電驢 - 中控收納盒( 煥新 Model 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 450,
    "originalPrice": 450,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177650066620.webp",
    "description": "中控收納盒( 煥新 Model 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7568",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7568",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 450,
        "sku": "QK-7568"
      }
    ]
  },
  {
    "id": "quack_7577",
    "name": "呱樂電驢 - 中控收納盒 ( 舊 Model 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177650043339.webp",
    "description": "中控收納盒 ( 舊 Model 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7577",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7577",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7577"
      }
    ]
  },
  {
    "id": "quack_114539",
    "name": "呱樂電驢 - 前排椅背掛勾( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 400,
    "originalPrice": 400,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260701131919_4108.webp",
    "description": "前排椅背掛勾( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=114539",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-114539",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 400,
        "sku": "QK-114539"
      }
    ]
  },
  {
    "id": "quack_109921",
    "name": "呱樂電驢 - 中控/扶手下底墊-前後一套( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260615133439_2962.webp",
    "description": "中控/扶手下底墊-前後一套( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠",
    "officialUrl": "https://www.quackev.com/products/info.php?id=109921",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-109921",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-109921"
      }
    ]
  },
  {
    "id": "quack_101751",
    "name": "呱樂電驢 - 全車遮陽簾( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177804060860.webp",
    "description": "全車遮陽簾( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=101751",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-101751",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-101751"
      }
    ]
  },
  {
    "id": "quack_7567",
    "name": "呱樂電驢 - 前車廂掛鉤-2入( 新/舊 Model Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 100,
    "originalPrice": 100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177709259156.webp",
    "description": "前車廂掛鉤-2入( 新/舊 Model Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7567",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7567",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 100,
        "sku": "QK-7567"
      }
    ]
  },
  {
    "id": "quack_7550",
    "name": "呱樂電驢 - 螢幕保護貼 ( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260531111024_1283.webp",
    "description": "螢幕保護貼 ( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7550",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7550",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-7550"
      }
    ]
  },
  {
    "id": "quack_19134",
    "name": "呱樂電驢 - 前後門檻四件套( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2000,
    "originalPrice": 2000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177356149413.webp",
    "description": "前後門檻四件套( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=19134",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-19134",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2000,
        "sku": "QK-19134"
      }
    ]
  },
  {
    "id": "quack_7536",
    "name": "呱樂電驢 - 座椅下方防踢板( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 600,
    "originalPrice": 600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177389696263.webp",
    "description": "座椅下方防踢板( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7536",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7536",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 600,
        "sku": "QK-7536"
      }
    ]
  },
  {
    "id": "quack_62967",
    "name": "呱樂電驢 - 中控兩側護板( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176879207776.webp",
    "description": "中控兩側護板( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=62967",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-62967",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-62967"
      }
    ]
  },
  {
    "id": "quack_62991",
    "name": "呱樂電驢 - 前座滑軌護角( 煥新版 Model Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 1800,
    "originalPrice": 1800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1176878591545.webp",
    "description": "前座滑軌護角( 煥新版 Model Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 D",
    "officialUrl": "https://www.quackev.com/products/info.php?id=62991",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-62991",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1800,
        "sku": "QK-62991"
      }
    ]
  },
  {
    "id": "quack_31762",
    "name": "呱樂電驢 - 中控水杯套 ( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177354701055.webp",
    "description": "中控水杯套 ( Model 3/Y各型號 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=31762",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-31762",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-31762"
      }
    ]
  },
  {
    "id": "quack_7580",
    "name": "呱樂電驢 - 中扶手隱私盒( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177356291245.webp",
    "description": "中扶手隱私盒( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7580",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7580",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7580"
      }
    ]
  },
  {
    "id": "quack_7530",
    "name": "呱樂電驢 - 天窗遮陽簾-銀塗層( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1200,
    "originalPrice": 1200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260716140548_9338.webp",
    "description": "天窗遮陽簾-銀塗層( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7530",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7530",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1200,
        "sku": "QK-7530"
      }
    ]
  },
  {
    "id": "quack_7557",
    "name": "呱樂電驢 - 螢幕上下置物-磁吸款( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1200,
    "originalPrice": 1200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177354518126.webp",
    "description": "螢幕上下置物-磁吸款( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7557",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7557",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1200,
        "sku": "QK-7557"
      }
    ]
  },
  {
    "id": "quack_7558",
    "name": "呱樂電驢 - 車門收納防水墊( 煥新版 Model 3/Y、舊Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_classic"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177398036367.webp",
    "description": "車門收納防水墊( 煥新版 Model 3/Y、舊Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7558",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7558",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-7558"
      }
    ]
  },
  {
    "id": "quack_7569",
    "name": "呱樂電驢 - 後排出風口下護板( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177391342265.webp",
    "description": "後排出風口下護板( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7569",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7569",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-7569"
      }
    ]
  },
  {
    "id": "quack_7541",
    "name": "呱樂電驢 - 座椅下置物盒",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177407580781.webp",
    "description": "座椅下置物盒-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 知識分",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7541",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7541",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-7541"
      }
    ]
  },
  {
    "id": "quack_7547",
    "name": "呱樂電驢 - 頭枕-舒適麂皮絨(黑色/米色可選擇)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P2177079946504.webp",
    "description": "頭枕-舒適麂皮絨(黑色/米色可選擇)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7547",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7547",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7547"
      }
    ]
  },
  {
    "id": "quack_7579",
    "name": "呱樂電驢 - 門檻護條-MODEL Y（～24）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 450,
    "originalPrice": 450,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177355203586.webp",
    "description": "門檻護條-MODEL Y（～24）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7579",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7579",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 450,
        "sku": "QK-7579"
      }
    ]
  },
  {
    "id": "quack_62912",
    "name": "呱樂電驢 - 後廂置物盒+蓋子( 煥新版 Model 3/Y、舊Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_classic"
    ],
    "price": 1200,
    "originalPrice": 1200,
    "image": "https://www.workband.com.tw/store_image/quackev/P3176913461654.webp",
    "description": "後廂置物盒+蓋子( 煥新版 Model 3/Y、舊Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 D",
    "officialUrl": "https://www.quackev.com/products/info.php?id=62912",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-62912",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1200,
        "sku": "QK-62912"
      }
    ]
  },
  {
    "id": "quack_31760",
    "name": "呱樂電驢 - 後廂開口防刮底座( 煥新Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260608154231_2120.webp",
    "description": "後廂開口防刮底座( 煥新Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=31760",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-31760",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-31760"
      }
    ]
  },
  {
    "id": "quack_31759",
    "name": "呱樂電驢 - 後廂兩側輪拱防刮（煥新Y 2025+ ）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177390408890.webp",
    "description": "後廂兩側輪拱防刮（煥新Y 2025+ ）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=31759",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-31759",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-31759"
      }
    ]
  },
  {
    "id": "quack_7572",
    "name": "呱樂電驢 - 後廂開口防刮底座( 煥新版 Model 3 2024+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260610124710_6431.webp",
    "description": "後廂開口防刮底座( 煥新版 Model 3 2024+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7572",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7572",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-7572"
      }
    ]
  },
  {
    "id": "quack_7507",
    "name": "呱樂電驢 - 後廂兩側輪拱防刮（Model Y ~2024）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260608160207_2715.webp",
    "description": "後廂兩側輪拱防刮（Model Y ~2024）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7507",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7507",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-7507"
      }
    ]
  },
  {
    "id": "quack_7506",
    "name": "呱樂電驢 - 後排椅背保護墊（煥新3/Y、舊Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177390617255.webp",
    "description": "後排椅背保護墊（煥新3/Y、舊Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7506",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7506",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-7506"
      }
    ]
  },
  {
    "id": "quack_7505",
    "name": "呱樂電驢 - 後廂尾門防刮護板（煥新3/Y ）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177407262499.webp",
    "description": "後廂尾門防刮護板（煥新3/Y ）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7505",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7505",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-7505"
      }
    ]
  },
  {
    "id": "quack_7504",
    "name": "呱樂電驢 - 後廂門檻護板四件（煥新3）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1800,
    "originalPrice": 1800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177391084097.webp",
    "description": "後廂門檻護板四件（煥新3）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7504",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7504",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1800,
        "sku": "QK-7504"
      }
    ]
  },
  {
    "id": "quack_111152",
    "name": "呱樂電驢 - 前保桿小風刃-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2800,
    "originalPrice": 2800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260701152102_3326.webp",
    "description": "前保桿小風刃-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=111152",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-111152",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2800,
        "sku": "QK-111152"
      }
    ]
  },
  {
    "id": "quack_111151",
    "name": "呱樂電驢 - 閱讀燈飾板-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260621123402_6890.webp",
    "description": "閱讀燈飾板-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=111151",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-111151",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-111151"
      }
    ]
  },
  {
    "id": "quack_111150",
    "name": "呱樂電驢 - 方向盤管套-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3800,
    "originalPrice": 3800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260621123027_7476.webp",
    "description": "方向盤管套-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=111150",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-111150",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3800,
        "sku": "QK-111150"
      }
    ]
  },
  {
    "id": "quack_111121",
    "name": "呱樂電驢 - 車門內裝飾條-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 4800,
    "originalPrice": 4800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260619153524_8748.webp",
    "description": "車門內裝飾條-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=111121",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-111121",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4800,
        "sku": "QK-111121"
      }
    ]
  },
  {
    "id": "quack_111117",
    "name": "呱樂電驢 - 儀表板氣氛燈飾板-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3500,
    "originalPrice": 3500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260619125233_5423.webp",
    "description": "儀表板氣氛燈飾板-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=111117",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-111117",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3500,
        "sku": "QK-111117"
      }
    ]
  },
  {
    "id": "quack_110840",
    "name": "呱樂電驢 - 儀表板飾板-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 4700,
    "originalPrice": 4700,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618140648_2974.webp",
    "description": "儀表板飾板-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110840",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110840",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4700,
        "sku": "QK-110840"
      }
    ]
  },
  {
    "id": "quack_110838",
    "name": "呱樂電驢 - 出風口飾板-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3300,
    "originalPrice": 3300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618124924_8439.webp",
    "description": "出風口飾板-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110838",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110838",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3300,
        "sku": "QK-110838"
      }
    ]
  },
  {
    "id": "quack_110837",
    "name": "呱樂電驢 - 車內門板開關-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3500,
    "originalPrice": 3500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618123505_5060.webp",
    "description": "車內門板開關-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110837",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110837",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3500,
        "sku": "QK-110837"
      }
    ]
  },
  {
    "id": "quack_110836",
    "name": "呱樂電驢 - 中控兩側護蓋-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 5200,
    "originalPrice": 5200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618122532_3150.webp",
    "description": "中控兩側護蓋-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110836",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110836",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 5200,
        "sku": "QK-110836"
      }
    ]
  },
  {
    "id": "quack_110835",
    "name": "呱樂電驢 - 後螢幕護蓋-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2800,
    "originalPrice": 2800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618121730_3067.webp",
    "description": "後螢幕護蓋-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110835",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110835",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2800,
        "sku": "QK-110835"
      }
    ]
  },
  {
    "id": "quack_110832",
    "name": "呱樂電驢 - 充電蓋護蓋-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2800,
    "originalPrice": 2800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618120319_4909.webp",
    "description": "充電蓋護蓋-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110832",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110832",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2800,
        "sku": "QK-110832"
      }
    ]
  },
  {
    "id": "quack_110830",
    "name": "呱樂電驢 - 無線充電外框-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3200,
    "originalPrice": 3200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260618115602_1568.webp",
    "description": "無線充電外框-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=110830",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-110830",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3200,
        "sku": "QK-110830"
      }
    ]
  },
  {
    "id": "quack_109853",
    "name": "呱樂電驢 - 扶手箱蓋-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3300,
    "originalPrice": 3300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260614143735_5993.webp",
    "description": "扶手箱蓋-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=109853",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-109853",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3300,
        "sku": "QK-109853"
      }
    ]
  },
  {
    "id": "quack_109710",
    "name": "呱樂電驢 - 照後鏡護蓋-真碳纖( 煥新版 Model Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3500,
    "originalPrice": 3500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612113812_8181.webp",
    "description": "照後鏡護蓋-真碳纖( 煥新版 Model Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=109710",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-109710",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3500,
        "sku": "QK-109710"
      }
    ]
  },
  {
    "id": "quack_7574",
    "name": "呱樂電驢 - 雷霆款車側鏡頭飾板-ABS( 新舊 Model 3/Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 600,
    "originalPrice": 600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612152436_4724.webp",
    "description": "雷霆款車側鏡頭飾板-ABS( 新舊 Model 3/Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7574",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7574",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 600,
        "sku": "QK-7574"
      }
    ]
  },
  {
    "id": "quack_7561",
    "name": "呱樂電驢 - 方向盤飾板-真碳纖飾( 舊款Model 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612144046_9683.webp",
    "description": "方向盤飾板-真碳纖飾( 舊款Model 3/Y ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7561",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7561",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-7561"
      }
    ]
  },
  {
    "id": "quack_7554",
    "name": "呱樂電驢 - 車尾標-TESLA字樣",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260815163555_6987.webp",
    "description": "車尾標-TESLA字樣-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7554",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7554",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-7554"
      }
    ]
  },
  {
    "id": "quack_7549",
    "name": "呱樂電驢 - 方向盤飾板-真碳纖飾( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 900,
    "originalPrice": 900,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612144647_6682.webp",
    "description": "方向盤飾板-真碳纖飾( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7549",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7549",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 900,
        "sku": "QK-7549"
      }
    ]
  },
  {
    "id": "quack_7535",
    "name": "呱樂電驢 - 真碳纖維-車門把手貼-4入( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612111150_9398.webp",
    "description": "真碳纖維-車門把手貼-4入( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7535",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7535",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-7535"
      }
    ]
  },
  {
    "id": "quack_7534",
    "name": "呱樂電驢 - 排檔桿飾板-真碳纖( 舊款Model 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1300,
    "originalPrice": 1300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612150419_3639.webp",
    "description": "排檔桿飾板-真碳纖( 舊款Model 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7534",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7534",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1300,
        "sku": "QK-7534"
      }
    ]
  },
  {
    "id": "quack_7532",
    "name": "呱樂電驢 - 中控面板貼-真碳纖( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2500,
    "originalPrice": 2500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612111920_1146.webp",
    "description": "中控面板貼-真碳纖( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DIS",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7532",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7532",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2500,
        "sku": "QK-7532"
      }
    ]
  },
  {
    "id": "quack_96896",
    "name": "呱樂電驢 - 尾翼-ABS（煥新Y 2025+）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177572475855.webp",
    "description": "尾翼-ABS（煥新Y 2025+）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=96896",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-96896",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-96896"
      }
    ]
  },
  {
    "id": "quack_45837",
    "name": "呱樂電驢 - 尾翼-真碳纖（煥新Y 2025+）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "my_juniper"
    ],
    "price": 4500,
    "originalPrice": 4500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177587917283.webp",
    "description": "尾翼-真碳纖（煥新Y 2025+）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=45837",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-45837",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4500,
        "sku": "QK-45837"
      }
    ]
  },
  {
    "id": "quack_96898",
    "name": "呱樂電驢 - 尾翼-ABS（煥新3 2023+）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177572491356.webp",
    "description": "尾翼-ABS（煥新3 2023+）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=96898",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-96898",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-96898"
      }
    ]
  },
  {
    "id": "quack_7499",
    "name": "呱樂電驢 - 尾翼-真碳纖（煥新3 2023+）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland"
    ],
    "price": 4500,
    "originalPrice": 4500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177572405602.webp",
    "description": "尾翼-真碳纖（煥新3 2023+）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7499",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7499",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4500,
        "sku": "QK-7499"
      }
    ]
  },
  {
    "id": "quack_7500",
    "name": "呱樂電驢 - 尾翼-ABS（Model Y~2024）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177588255862.webp",
    "description": "尾翼-ABS（Model Y~2024）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7500",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7500",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-7500"
      }
    ]
  },
  {
    "id": "quack_7494",
    "name": "呱樂電驢 - 尾翼-真碳纖維（Model Y~2024）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 4500,
    "originalPrice": 4500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177588260903.webp",
    "description": "尾翼-真碳纖維（Model Y~2024）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7494",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7494",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4500,
        "sku": "QK-7494"
      }
    ]
  },
  {
    "id": "quack_7552",
    "name": "呱樂電驢 - 照後鏡護蓋-真碳纖( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3000,
    "originalPrice": 3000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177406936745.webp",
    "description": "照後鏡護蓋-真碳纖( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7552",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7552",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3000,
        "sku": "QK-7552"
      }
    ]
  },
  {
    "id": "quack_7503",
    "name": "呱樂電驢 - 前下巴/前鏟（Model Y~2024）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "exterior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2800,
    "originalPrice": 2800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177398751349.webp",
    "description": "前下巴/前鏟（Model Y~2024）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7503",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7503",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2800,
        "sku": "QK-7503"
      }
    ]
  },
  {
    "id": "quack_7497",
    "name": "呱樂電驢 - 合金氣嘴蓋-4入組",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 100,
    "originalPrice": 100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106037543.webp",
    "description": "合金氣嘴蓋-4入組-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7497",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7497",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 100,
        "sku": "QK-7497"
      }
    ]
  },
  {
    "id": "quack_7544",
    "name": "呱樂電驢 - 車側鏡頭飾板-真碳纖（Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1500,
    "originalPrice": 1500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177391267606.webp",
    "description": "車側鏡頭飾板-真碳纖（Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7544",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7544",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1500,
        "sku": "QK-7544"
      }
    ]
  },
  {
    "id": "quack_130374",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【P2款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260909142955_4470.webp",
    "description": "19吋輪框節能蓋-【P2款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=130374",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-130374",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-130374"
      }
    ]
  },
  {
    "id": "quack_130372",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【P1款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260909142934_8771.webp",
    "description": "19吋輪框節能蓋-【P1款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=130372",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-130372",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-130372"
      }
    ]
  },
  {
    "id": "quack_126485",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【Z2款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260823122450_3502.webp",
    "description": "19吋輪框節能蓋-【Z2款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=126485",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-126485",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-126485"
      }
    ]
  },
  {
    "id": "quack_95734",
    "name": "呱樂電驢 - 18吋輪框節能蓋-【L2款】( Model 3 2023+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177518791359.webp",
    "description": "18吋輪框節能蓋-【L2款】( Model 3 2023+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95734",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95734",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95734"
      }
    ]
  },
  {
    "id": "quack_118778",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【R1款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260717110723_9878.webp",
    "description": "19吋輪框節能蓋-【R1款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=118778",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-118778",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-118778"
      }
    ]
  },
  {
    "id": "quack_95713",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【R2款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177832128230.webp",
    "description": "19吋輪框節能蓋-【R2款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95713",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95713",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95713"
      }
    ]
  },
  {
    "id": "quack_18840",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【Y1款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177512202437.webp",
    "description": "19吋輪框節能蓋-【Y1款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18840",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18840",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-18840"
      }
    ]
  },
  {
    "id": "quack_95728",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【Y2款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177518553632.webp",
    "description": "19吋輪框節能蓋-【Y2款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95728",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95728",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95728"
      }
    ]
  },
  {
    "id": "quack_95712",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【Y3款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177512211187.webp",
    "description": "19吋輪框節能蓋-【Y3款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95712",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95712",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95712"
      }
    ]
  },
  {
    "id": "quack_39912",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【X1款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177512189261.webp",
    "description": "19吋輪框節能蓋-【X1款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=39912",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-39912",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-39912"
      }
    ]
  },
  {
    "id": "quack_95716",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【X2款】( Model Y 2025+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177512226120.webp",
    "description": "19吋輪框節能蓋-【X2款】( Model Y 2025+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95716",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95716",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95716"
      }
    ]
  },
  {
    "id": "quack_103698",
    "name": "呱樂電驢 - 18吋輪框節能蓋-【N1款】( Model 3 2023+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177883157305.webp",
    "description": "18吋輪框節能蓋-【N1款】( Model 3 2023+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=103698",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-103698",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-103698"
      }
    ]
  },
  {
    "id": "quack_103699",
    "name": "呱樂電驢 - 18吋輪框節能蓋-【N2款】( Model 3 2023+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177883160217.webp",
    "description": "18吋輪框節能蓋-【N2款】( Model 3 2023+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=103699",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-103699",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-103699"
      }
    ]
  },
  {
    "id": "quack_95732",
    "name": "呱樂電驢 - 18吋輪框節能蓋-【K2款】( Model 3 2023+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177518723732.webp",
    "description": "18吋輪框節能蓋-【K2款】( Model 3 2023+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95732",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95732",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95732"
      }
    ]
  },
  {
    "id": "quack_18843",
    "name": "呱樂電驢 - 18吋輪框節能蓋-【M2款】( Model 3 2023+)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177518781394.webp",
    "description": "18吋輪框節能蓋-【M2款】( Model 3 2023+)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18843",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18843",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-18843"
      }
    ]
  },
  {
    "id": "quack_95680",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【D1款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511909368.webp",
    "description": "19吋輪框節能蓋-【D1款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95680",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95680",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95680"
      }
    ]
  },
  {
    "id": "quack_95681",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【D2款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511911980.webp",
    "description": "19吋輪框節能蓋-【D2款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95681",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95681",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95681"
      }
    ]
  },
  {
    "id": "quack_95679",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【T2款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511896624.webp",
    "description": "19吋輪框節能蓋-【T2款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95679",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95679",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95679"
      }
    ]
  },
  {
    "id": "quack_7517",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【S款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511658030.webp",
    "description": "19吋輪框節能蓋-【S款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7517",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7517",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-7517"
      }
    ]
  },
  {
    "id": "quack_95682",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【Z1款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511916040.webp",
    "description": "19吋輪框節能蓋-【Z1款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95682",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95682",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95682"
      }
    ]
  },
  {
    "id": "quack_95678",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【W2款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511882367.webp",
    "description": "19吋輪框節能蓋-【W2款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=95678",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-95678",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-95678"
      }
    ]
  },
  {
    "id": "quack_18842",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【W1款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177511785536.webp",
    "description": "19吋輪框節能蓋-【W1款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18842",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18842",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-18842"
      }
    ]
  },
  {
    "id": "quack_18841",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【U款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174683696061.webp",
    "description": "19吋輪框節能蓋-【U款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18841",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18841",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-18841"
      }
    ]
  },
  {
    "id": "quack_7523",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【C款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177510446724.webp",
    "description": "19吋輪框節能蓋-【C款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7523",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7523",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-7523"
      }
    ]
  },
  {
    "id": "quack_7519",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【B款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177510443988.webp",
    "description": "19吋輪框節能蓋-【B款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7519",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7519",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-7519"
      }
    ]
  },
  {
    "id": "quack_18838",
    "name": "呱樂電驢 - 19吋輪框節能蓋-【A款】( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3600,
    "originalPrice": 3600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177510332875.webp",
    "description": "19吋輪框節能蓋-【A款】( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18838",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18838",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3600,
        "sku": "QK-18838"
      }
    ]
  },
  {
    "id": "quack_18839",
    "name": "呱樂電驢 - 節能蓋MY-20吋（E款）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 3000,
    "originalPrice": 3000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260823122450_3502.webp",
    "description": "節能蓋MY-20吋（E款）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=18839",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-18839",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 3000,
        "sku": "QK-18839"
      }
    ]
  },
  {
    "id": "quack_7564",
    "name": "呱樂電驢 - 節能蓋MY-21吋（F款）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2000,
    "originalPrice": 2000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106770708.webp",
    "description": "節能蓋MY-21吋（F款）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7564",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7564",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2000,
        "sku": "QK-7564"
      }
    ]
  },
  {
    "id": "quack_36269",
    "name": "呱樂電驢 - 行李箱墊三件套-基本款( 煥新版 Model 3/Y、舊Y）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_classic"
    ],
    "price": 2500,
    "originalPrice": 2500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177795326165.webp",
    "description": "行李箱墊三件套-基本款( 煥新版 Model 3/Y、舊Y）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36269",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36269",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2500,
        "sku": "QK-36269"
      }
    ]
  },
  {
    "id": "quack_7587",
    "name": "呱樂電驢 - 腳踏墊-3D卡固-菁智款",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 6500,
    "originalPrice": 6500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106841337.webp",
    "description": "腳踏墊-3D卡固-菁智款-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7587",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7587",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 6500,
        "sku": "QK-7587"
      }
    ]
  },
  {
    "id": "quack_7540",
    "name": "呱樂電驢 - 腳踏墊-基本防水款",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2500,
    "originalPrice": 2500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1175414510195.webp",
    "description": "腳踏墊-基本防水款-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7540",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7540",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2500,
        "sku": "QK-7540"
      }
    ]
  },
  {
    "id": "quack_7526",
    "name": "呱樂電驢 - 腳踏墊-3D卡固 極致紋理款",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 5200,
    "originalPrice": 5200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177389573554.webp",
    "description": "腳踏墊-3D卡固 極致紋理款-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7526",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7526",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 5200,
        "sku": "QK-7526"
      }
    ]
  },
  {
    "id": "quack_119999",
    "name": "呱樂電驢 - AP 自駕輔助神器( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 990,
    "originalPrice": 990,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260724135633_8404.webp",
    "description": "AP 自駕輔助神器( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=119999",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-119999",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 990,
        "sku": "QK-119999"
      }
    ]
  },
  {
    "id": "quack_119313",
    "name": "呱樂電驢 - 無線充電護墊( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260721112946_1345.webp",
    "description": "無線充電護墊( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=119313",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-119313",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-119313"
      }
    ]
  },
  {
    "id": "quack_118777",
    "name": "呱樂電驢 - 點煙器一轉三分接器",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 800,
    "originalPrice": 800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260717104637_6176.webp",
    "description": "點煙器一轉三分接器-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=118777",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-118777",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 800,
        "sku": "QK-118777"
      }
    ]
  },
  {
    "id": "quack_115154",
    "name": "呱樂電驢 - 中性內裝清潔劑",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 250,
    "originalPrice": 250,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260703175039_3265.webp",
    "description": "中性內裝清潔劑-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 知識",
    "officialUrl": "https://www.quackev.com/products/info.php?id=115154",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-115154",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 250,
        "sku": "QK-115154"
      }
    ]
  },
  {
    "id": "quack_108953",
    "name": "呱樂電驢 - Inhouse 香氛儀套組 (行動無水香氛儀+複方精油)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2550,
    "originalPrice": 2550,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260609164134_2895.webp",
    "description": "Inhouse 香氛儀套組 (行動無水香氛儀+複方精油)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=108953",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-108953",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2550,
        "sku": "QK-108953"
      }
    ]
  },
  {
    "id": "quack_101393",
    "name": "呱樂電驢 - 避光墊( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177795561039.webp",
    "description": "避光墊( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=101393",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-101393",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-101393"
      }
    ]
  },
  {
    "id": "quack_7589",
    "name": "呱樂電驢 - 矽膠雨刷-PIAA(全車系適用)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2100,
    "originalPrice": 2100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106848919.webp",
    "description": "矽膠雨刷-PIAA(全車系適用)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7589",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7589",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2100,
        "sku": "QK-7589"
      }
    ]
  },
  {
    "id": "quack_7585",
    "name": "呱樂電驢 - TITA-險-二合一破窗器",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P2174106836229.webp",
    "description": "TITA-險-二合一破窗器-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7585",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7585",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-7585"
      }
    ]
  },
  {
    "id": "quack_7583",
    "name": "呱樂電驢 - 安全帶卡扣 (全車系通用)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 50,
    "originalPrice": 50,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177338073268.webp",
    "description": "安全帶卡扣 (全車系通用)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7583",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7583",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 50,
        "sku": "QK-7583"
      }
    ]
  },
  {
    "id": "quack_7581",
    "name": "呱樂電驢 - 門把置杯架*2 (舊 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177709018709.webp",
    "description": "門把置杯架*2 (舊 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7581",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7581",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7581"
      }
    ]
  },
  {
    "id": "quack_7575",
    "name": "呱樂電驢 - 3/Y儀表置杯架",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106801211.webp",
    "description": "3/Y儀表置杯架-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消息 知",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7575",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7575",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7575"
      }
    ]
  },
  {
    "id": "quack_7571",
    "name": "呱樂電驢 - MY後廂開口護條-兩側",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1174106788828.webp",
    "description": "MY後廂開口護條-兩側-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7571",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7571",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7571"
      }
    ]
  },
  {
    "id": "quack_7560",
    "name": "呱樂電驢 - 手套箱掛勾( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 100,
    "originalPrice": 100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177399498726.webp",
    "description": "手套箱掛勾( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUN",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7560",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7560",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 100,
        "sku": "QK-7560"
      }
    ]
  },
  {
    "id": "quack_7559",
    "name": "呱樂電驢 - 手機支架系列( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 800,
    "originalPrice": 800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260612173444_5129.webp",
    "description": "手機支架系列( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7559",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7559",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 800,
        "sku": "QK-7559"
      }
    ]
  },
  {
    "id": "quack_7556",
    "name": "呱樂電驢 - 車門迎賓燈-雙燈漸變款",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1175617531156.webp",
    "description": "車門迎賓燈-雙燈漸變款-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7556",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7556",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-7556"
      }
    ]
  },
  {
    "id": "quack_7553",
    "name": "呱樂電驢 - 後門安全拉環 2入( Model Y ~2024 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 300,
    "originalPrice": 300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260808131702_8289.webp",
    "description": "後門安全拉環 2入( Model Y ~2024 )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DI",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7553",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7553",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 300,
        "sku": "QK-7553"
      }
    ]
  },
  {
    "id": "quack_125548",
    "name": "呱樂電驢 - 換檔撥桿( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 10000,
    "originalPrice": 10000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260818150029_7414.webp",
    "description": "換檔撥桿( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=125548",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-125548",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 10000,
        "sku": "QK-125548"
      }
    ]
  },
  {
    "id": "quack_108799",
    "name": "呱樂電驢 - PAPAGO X898 行車記錄器 / 電子後視鏡 ( 煥新版 Model Y 2025+ )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "my_juniper"
    ],
    "price": 20800,
    "originalPrice": 20800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260609120256_5735.webp",
    "description": "PAPAGO X898 行車記錄器 / 電子後視鏡 ( 煥新版 Model Y 2025+ )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款",
    "officialUrl": "https://www.quackev.com/products/info.php?id=108799",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-108799",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 20800,
        "sku": "QK-108799"
      }
    ]
  },
  {
    "id": "quack_54927",
    "name": "呱樂電驢 - 快譯通電子後照鏡S95B（行車記錄器/測速提醒/前後鏡頭）",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 16000,
    "originalPrice": 16000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260524163017_9130.webp",
    "description": "快譯通電子後照鏡S95B（行車記錄器/測速提醒/前後鏡頭）-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠",
    "officialUrl": "https://www.quackev.com/products/info.php?id=54927",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-54927",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 16000,
        "sku": "QK-54927"
      }
    ]
  },
  {
    "id": "quack_36268",
    "name": "呱樂電驢 - 電動自吸車門( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 13000,
    "originalPrice": 13000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177399327477.webp",
    "description": "電動自吸車門( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36268",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36268",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 13000,
        "sku": "QK-36268"
      }
    ]
  },
  {
    "id": "quack_36267",
    "name": "呱樂電驢 - 電動車門把手( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 13000,
    "originalPrice": 13000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260524161917_6185.webp",
    "description": "電動車門把手( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36267",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36267",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 13000,
        "sku": "QK-36267"
      }
    ]
  },
  {
    "id": "quack_36204",
    "name": "呱樂電驢 - 電動遮陽簾( 新/舊 Model Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 13000,
    "originalPrice": 13000,
    "image": "https://www.workband.com.tw/store_image/quackev/P2_20260524153733_9494.webp",
    "description": "電動遮陽簾( 新/舊 Model Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36204",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36204",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 13000,
        "sku": "QK-36204"
      }
    ]
  },
  {
    "id": "quack_36203",
    "name": "呱樂電驢 - YOKE方向盤( 舊版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 7500,
    "originalPrice": 7500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260524160702_3207.webp",
    "description": "YOKE方向盤( 舊版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36203",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36203",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 7500,
        "sku": "QK-36203"
      }
    ]
  },
  {
    "id": "quack_36202",
    "name": "呱樂電驢 - YOKE方向盤( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 9500,
    "originalPrice": 9500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1_20260524161559_9063.webp",
    "description": "YOKE方向盤( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCO",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36202",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36202",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 9500,
        "sku": "QK-36202"
      }
    ]
  },
  {
    "id": "quack_36201",
    "name": "呱樂電驢 - 電吸前車廂( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 5000,
    "originalPrice": 5000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1175409975655.webp",
    "description": "電吸前車廂( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36201",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36201",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 5000,
        "sku": "QK-36201"
      }
    ]
  },
  {
    "id": "quack_36200",
    "name": "呱樂電驢 - 電動前車廂( Model 3/Y各型號 )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 12000,
    "originalPrice": 12000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1175409850779.webp",
    "description": "電動前車廂( Model 3/Y各型號 ) -呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOU",
    "officialUrl": "https://www.quackev.com/products/info.php?id=36200",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-36200",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 12000,
        "sku": "QK-36200"
      }
    ]
  },
  {
    "id": "quack_7573",
    "name": "呱樂電驢 - TITA - 餅Ultra-質感儀表套組",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "electronics",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 7000,
    "originalPrice": 7000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1175688853985.webp",
    "description": "TITA - 餅Ultra-質感儀表套組-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT",
    "officialUrl": "https://www.quackev.com/products/info.php?id=7573",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-7573",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 7000,
        "sku": "QK-7573"
      }
    ]
  },
  {
    "id": "quack_76510",
    "name": "呱樂電驢 - 活性碳濾網 (全車系)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 500,
    "originalPrice": 500,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177389225991.webp",
    "description": "活性碳濾網 (全車系)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最新消",
    "officialUrl": "https://www.quackev.com/products/info.php?id=76510",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-76510",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 500,
        "sku": "QK-76510"
      }
    ]
  },
  {
    "id": "quack_37227",
    "name": "呱樂電驢 - Purafil 專利濾網 (全車系)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1600,
    "originalPrice": 1600,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177389335826.webp",
    "description": "Purafil 專利濾網 (全車系)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=37227",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-37227",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1600,
        "sku": "QK-37227"
      }
    ]
  },
  {
    "id": "quack_103760",
    "name": "呱樂電驢 - TEMAI 出風口無線充手機支架( 煥新版 Model 3/Y)",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1300,
    "originalPrice": 1300,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177883520189.webp",
    "description": "TEMAI 出風口無線充手機支架( 煥新版 Model 3/Y)-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限",
    "officialUrl": "https://www.quackev.com/products/info.php?id=103760",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-103760",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1300,
        "sku": "QK-103760"
      }
    ]
  },
  {
    "id": "quack_100613",
    "name": "呱樂電驢 - TEMAI 多功能車用桌板",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1400,
    "originalPrice": 1400,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177736405457.webp",
    "description": "TEMAI 多功能車用桌板-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=100613",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-100613",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1400,
        "sku": "QK-100613"
      }
    ]
  },
  {
    "id": "quack_100558",
    "name": "呱樂電驢 - TEMAI 磁吸眼鏡收納盒 ( 煥新 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 800,
    "originalPrice": 800,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177735179617.webp",
    "description": "TEMAI 磁吸眼鏡收納盒 ( 煥新 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=100558",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-100558",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 800,
        "sku": "QK-100558"
      }
    ]
  },
  {
    "id": "quack_100323",
    "name": "呱樂電驢 - TEMAI 車用記憶棉床墊 / 頭枕 ( 煥新 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1100,
    "originalPrice": 1100,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177708734397.webp",
    "description": "TEMAI 車用記憶棉床墊 / 頭枕 ( 煥新 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠",
    "officialUrl": "https://www.quackev.com/products/info.php?id=100323",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-100323",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1100,
        "sku": "QK-100323"
      }
    ]
  },
  {
    "id": "quack_99892",
    "name": "呱樂電驢 - TEMAI 雙線中控HUB ( 煥新 3/Y )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 2400,
    "originalPrice": 2400,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177691238873.webp",
    "description": "TEMAI 雙線中控HUB ( 煥新 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISC",
    "officialUrl": "https://www.quackev.com/products/info.php?id=99892",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-99892",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 2400,
        "sku": "QK-99892"
      }
    ]
  },
  {
    "id": "quack_94815",
    "name": "呱樂電驢 - JOWUA 全系列商品代理",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "interior",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177466621357.webp",
    "description": "JOWUA 全系列商品代理-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 DISCOUNT 限時優惠 最",
    "officialUrl": "https://www.quackev.com/products/info.php?id=94815",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-94815",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 1000,
        "sku": "QK-94815"
      }
    ]
  }
];

export const BUNDLES = [
  {
    "id": "jowua_tempered_glass_screen_protector_foxtron_cavira",
    "name": "Jowua - 中控螢幕＋儀表螢幕保護貼組合 (Foxtron Cavira)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-screen-protector-foxtron-cavira.png?v=1789803142",
    "description": "產品描述 適用Foxtron Cavira 雙螢幕 適用車內數位儀表板、中控大螢幕。霧面磨砂材質，零霧感、抗指紋、防眩光；完美貼合，滿版全覆蓋。 安裝超簡單 內附貼膜神器，一蓋即貼，零失誤。 9H 硬度鋼化玻璃 有效阻擋被尖銳物體刮傷，防止刮痕且耐磨損。 疏水、疏油、抗指紋，高透光還原色彩 疏油塗層",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-foxtron-cavira",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50553221873912",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG001640205"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_set_foxtron_cavira",
    "name": "Jowua - 立體防水行李廂墊＋椅背墊組合 (Foxtron Cavira)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-trunk-liners-set-foxtron-cavira_5af6e1a9-3feb-4245-854a-0c19dc8649a6.png?v=1789118040",
    "description": "防水行李廂墊 專為 Foxtron Cavira 訂製 立體加高全面防護後行李廂，有效阻擋泥沙、灰塵、液體滲透 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。 防水後排椅背墊 專為 Foxtron Cavira 後排座",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-set-foxtron-cavira",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50181066588408",
        "title": "立體防水行李廂墊＋椅背墊組合",
        "name": "立體防水行李廂墊＋椅背墊組合",
        "price": 3990,
        "sku": "FGM26082601"
      }
    ]
  },
  {
    "id": "jowua_car_fragrance_refill_pack",
    "name": "Jowua - 車用香氛補充包",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_12.png?v=1688090623",
    "description": "產品描述 多款氣息，宛如身臨其境 林蔭微風 典雅漫舞 晨曦春露 清新森香 再創經典 沉靜之境 由您創造（空白無味） 內容物說明 香氛補充包 香氛棒x 4 *由您創造（空白無味）補充包為香氛棒x 8",
    "officialUrl": "https://global.jowua-life.com/products/car-fragrance-refill-pack",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43890828607736",
        "title": "林蔭微風",
        "name": "林蔭微風",
        "price": 490,
        "sku": "FG002621200"
      },
      {
        "id": "43890828640504",
        "title": "典雅漫舞",
        "name": "典雅漫舞",
        "price": 490,
        "sku": "FG002621300"
      },
      {
        "id": "43890828673272",
        "title": "晨曦春露",
        "name": "晨曦春露",
        "price": 490,
        "sku": "FG002621400"
      },
      {
        "id": "43890828706040",
        "title": "清新森香",
        "name": "清新森香",
        "price": 490,
        "sku": "FG002621500"
      },
      {
        "id": "43890828738808",
        "title": "再創經典",
        "name": "再創經典",
        "price": 490,
        "sku": "FG002621100"
      },
      {
        "id": "46420475609336",
        "title": "沉靜之境",
        "name": "沉靜之境",
        "price": 490,
        "sku": "FG002621600"
      },
      {
        "id": "43890828771576",
        "title": "由您創造（空白無味）",
        "name": "由您創造（空白無味）",
        "price": 490,
        "sku": "FG002621000"
      }
    ]
  },
  {
    "id": "jowua_model_3_highland_floor_trunk_liner_bundle",
    "name": "Jowua - 電墊專案【Model 3 煥新版｜第三彈交車禮包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 15990,
    "originalPrice": 17650,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_1920_Model_3_1_a694f3fe-6acb-4bab-a856-b25fe3fbdf48.jpg?v=1785317347",
    "description": "✨ 限時優惠 15,990元 (原價: 17,650元) 新車落地【電墊專案】替車內的關鍵區域全面進化！ 車室全包覆防水抗污、後車廂儲物系統、99% 抗UV 車頂遮陽簾、中控區域的收納與多設備充電。 \\ 直營門市 📍同步熱賣中，優惠下殺9% / 內容物說明 ▌ 立體防水腳踏墊＋面紙盒組 專為特斯拉",
    "officialUrl": "https://global.jowua-life.com/products/model-3-highland-floor-trunk-liner-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50067863535864",
        "title": "電墊專案",
        "name": "電墊專案",
        "price": 15990,
        "sku": "BFG26072402"
      }
    ]
  },
  {
    "id": "jowua_model_y_juniper_2025_floor_trunk_liner_bundle",
    "name": "Jowua - 滿墊專案【Model Y 煥新版｜第三彈交車禮包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 15990,
    "originalPrice": 17630,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_1920_Model_Y_1_ba097d95-a656-469a-a092-7d93ecc8b934.jpg?v=1785318287",
    "description": "❯❯ 限時優惠 15,990元 (原價: 17,630元) ❯❯ Performance 車款全面相容 新車落地【滿墊專案】替車內的關鍵區域全面進化！ 車室全包覆防水抗污、後車廂儲物系統、中控區域的收納與多設備充電，再搭配全方位掛鉤生態系，完美行車體驗。 \\ 直營門市 📍同步熱賣中，下殺優惠9% ",
    "officialUrl": "https://global.jowua-life.com/products/model-y-juniper-2025-floor-trunk-liner-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "50067881165048",
        "title": "滿墊專案",
        "name": "滿墊專案",
        "price": 15990,
        "sku": "BFG26072401"
      }
    ]
  },
  {
    "id": "jowua_model_y_juniper_2026_screen_bundle",
    "name": "Jowua - 一幕瞭然【Model Y 煥新版｜第三彈交車禮包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 8990,
    "originalPrice": 9840,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_1920_Model_Y_2_7b332bf2-03fa-4062-8dfc-a0630a6430b4.jpg?v=1785319052",
    "description": "❯❯ 限時優惠 8,990元 (原價: 9,840元) ❯❯ Performance 車款全面相容 【一幕瞭然】螢幕收納用電、防刮保護、後車廂自動氣氛燈，緊急胎壓救援，體驗愛車新生活！ 獨家熱賣的螢幕下基座，不只收納還能供電。後排專用HUB，體驗創新用電邏輯。搭配前後雙螢幕保護貼，安心防刮。熱賣新品",
    "officialUrl": "https://global.jowua-life.com/products/model-y-juniper-2026-screen-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48299736793336",
        "title": "一幕瞭然",
        "name": "一幕瞭然",
        "price": 8990,
        "sku": "BFG26042101"
      }
    ]
  },
  {
    "id": "jowua_model_3_highland_2025_screen_bundle",
    "name": "Jowua - 一幕瞭然【Model 3 煥新版｜第三彈交車禮包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 6990,
    "originalPrice": 8320,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/model3.jpg?v=1785382857",
    "description": "✨ 限時優惠 6,990元 (原價: 8,320元) 【一幕瞭然】螢幕收納用電、防刮保護，萬用掛勾隨手掛，便利新體驗！ 獨家熱賣的螢幕下基座，不只收納還能供電、萬用掛鉤組，萬物隨您掛。後排專用HUB，體驗創新用電邏輯。搭配前後雙螢幕保護貼，安心防刮。 \\ 直營門市 📍同步熱賣中，優惠下殺16% /",
    "officialUrl": "https://global.jowua-life.com/products/model-3-highland-2025-screen-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48020313800952",
        "title": "一幕瞭然",
        "name": "一幕瞭然",
        "price": 6990,
        "sku": "BFG2026021004"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_j1772_10m",
    "name": "Jowua - 雙用行動充電器9.6kW (J1772/PHEV) NEMA 14-50/6-20轉接器＋電動車充電延長線【10公尺組合包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 12990,
    "originalPrice": 12990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ev-mobile-connector-j1772-ac-10m.png?v=1782724335",
    "description": "雙用行動充電器 ｜搭配NEMA 14-50轉接器 J1772 (PHEV) 車主必備 旅行用充電座可透過不同插座形式為您的愛車進行中速或慢速充電。便攜性讓您隨時隨地進行充電，無須依賴固定的充電設施。可於您家中使用，或在車內準備一組旅充，於長途行駛時備用，滿電無憂！ 雙用設計，雙重便捷 日常家用：搭配",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-j1772-10m",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "49688301535480",
        "title": "9.6 kW (J1772) NEMA 14-50轉接器＋電動車充電延長線【10公尺組合包】",
        "name": "9.6 kW (J1772) NEMA 14-50轉接器＋電動車充電延長線【10公尺組合包】",
        "price": 12990,
        "sku": "BFG26061701"
      },
      {
        "id": "49688301568248",
        "title": "4.4 kW (J1772) NEMA 6-20轉接器＋電動車充電延長線【10公尺組合包】",
        "name": "4.4 kW (J1772) NEMA 6-20轉接器＋電動車充電延長線【10公尺組合包】",
        "price": 12990,
        "sku": "BFG26061702"
      }
    ]
  },
  {
    "id": "jowua_ccs2_to_nacs_dc_ac_set",
    "name": "Jowua - CCS2 & Type-2 to TPC (NACS) 快慢充組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 9990,
    "originalPrice": 11860,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-to-nacs-dc-ac-set_1.png?v=1777004796",
    "description": "❗️ 購買前須知｜您的愛車有CCS通訊協定嗎？ 特斯拉(NACS)車主要在設有CCS充電站充電，您除了需使用轉接頭外，車輛硬體亦需支援《 CCS通訊協定》。 如何查詢車輛是否支援？ 於觸控螢幕介面上前往 控制&gt;軟體&gt;其他車輛資訊&gt;CCS和第三方NACS直流快速充電支援為 【已啟用】",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-to-nacs-dc-ac-set",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48274343428344",
        "title": "標準規格",
        "name": "標準規格",
        "price": 9990,
        "sku": "BFG26042401"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_set_foxtron_bria",
    "name": "Jowua - 立體防水行李廂墊＋椅背墊組合 (Foxtron Bria)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 3990,
    "originalPrice": 3990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-trunk-liners-set-foxtron-bria_1.png?v=1774947229",
    "description": "防水行李廂墊 專為 Foxtron Bria 訂製 立體加高全面防護前、後行李廂，有效阻擋泥沙、灰塵、液體滲透 高韌性、無毒環保 TPE 材質 防塵防水，有效阻擋泥沙、灰塵、液體滲透。 方便清潔 可水洗，建議使用溫和的清潔劑和清水定期清洗。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-set-foxtron-bria",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47986822021368",
        "title": "立體防水行李廂墊＋椅背墊組合",
        "name": "立體防水行李廂墊＋椅背墊組合",
        "price": 3990,
        "sku": "FGM26021301"
      }
    ]
  },
  {
    "id": "jowua_tempered_glass_screen_protector_foxtron_bria",
    "name": "Jowua - 中控螢幕＋儀表螢幕保護貼組合 (Foxtron Bria)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 1290,
    "originalPrice": 1290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-tempered-glass-screen-protector-for-foxtron-bria_3b9f3e98-8dc2-478f-ae5a-19d4623ef4c1.png?v=1778754512",
    "description": "產品描述 適用Foxtron Bria 雙螢幕 適用車內數位儀表板、中控大螢幕。霧面磨砂材質，零霧感、抗指紋、防眩光；完美貼合，滿版全覆蓋。 安裝超簡單 內附貼膜神器，一蓋即貼，零失誤。 9H 硬度鋼化玻璃 有效阻擋被尖銳物體刮傷，防止刮痕且耐磨損。 疏水、疏油、抗指紋，高透光還原色彩 疏油塗層，有",
    "officialUrl": "https://global.jowua-life.com/products/tempered-glass-screen-protector-foxtron-bria",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47986142249208",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1290,
        "sku": "FG001640203"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_volvo_ex30",
    "name": "Jowua - 立體防水行李箱墊＋椅背墊組合 (Volvo EX30)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 3290,
    "originalPrice": 3290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-volvo-ex30-trunk-liner_3.png?v=1765356044",
    "description": "防水行李廂墊 專為Volvo EX30 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 獨創後車廂上下層兼容設計 無論將原車後車廂隔板放置上層或下層，都能完美適配使用。 精準預留原廠孔位 完美預留孔位，使用更便捷。 折線掀開與提把開口設計 後行李箱墊的折線與提把開口設計，輕鬆掀開使用行李廂內",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-volvo-ex30",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "47508268155128",
        "title": "標準規格",
        "name": "標準規格",
        "price": 3290,
        "sku": "FG002804300"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_ccs2_ac_10m",
    "name": "Jowua - 雙用行動充電器7kW (CCS2-AC Type-2) NEMA 14-50/6-20轉接器＋電動車充電延長線【10公尺組合包】",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 12990,
    "originalPrice": 12990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-ac-ev-adapter-extension-cable_3.png?v=1750415249",
    "description": "獨家首創！ 雙用行動充電器10公尺充電完美延長，距離與充電位置不再是問題，滿足所有充電與停車情境。 雙用行動充電器｜NEMA 14-50 轉接器 CCS2-AC (Type-2) 車主必備 旅行用充電座可透過不同插座形式為您的愛車進行中速或慢速充電。便攜性讓您隨時隨地進行充電，無須依賴固定的充電設施",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-ccs2-ac-10m",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46549780627704",
        "title": "7kW (CCS2-AC Type-2) NEMA 14-50轉接器＋電動車充電延長線【10公尺組合包】",
        "name": "7kW (CCS2-AC Type-2) NEMA 14-50轉接器＋電動車充電延長線【10公尺組合包】",
        "price": 12990,
        "sku": "BFG25052901"
      },
      {
        "id": "46608172122360",
        "title": "4.4kW (CCS2-AC Type-2) NEMA 6-20轉接器＋電動車充電延長線【10公尺組合包】",
        "name": "4.4kW (CCS2-AC Type-2) NEMA 6-20轉接器＋電動車充電延長線【10公尺組合包】",
        "price": 12990,
        "sku": "BFG25070901"
      }
    ]
  },
  {
    "id": "jowua_center_console_set_tesla_model_y_juniper_2025",
    "name": "Jowua - 中控收納組合  (Model Y 煥新版 2025+)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 1190,
    "originalPrice": 1190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-y-juniper-2025-center-console-bundle_c7182780-ae29-4d61-9e1c-77c05577dd7d.png?v=1750761918",
    "description": "中控收納組（收納盒、杯墊組、矽膠底墊） ▎ 收納盒 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高溫低溫、防止物品滑動和碰撞聲，底層採用硬殼材質以提升耐用性。 可透光・方便黑暗中找物品 矽膠與硬殼選用透光材質，導入原中控車廂內照明燈，讓照亮範圍更大，黑暗中取物更方便。 獨特抽屜式設計 貼心開",
    "officialUrl": "https://global.jowua-life.com/products/center-console-set-tesla-model-y-juniper-2025",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46541632307448",
        "title": "中控收納組合",
        "name": "中控收納組合",
        "price": 1190,
        "sku": "FGM25060101"
      }
    ]
  },
  {
    "id": "jowua_led_center_console_combo_tesla_model_y_juniper_2025",
    "name": "Jowua - LED中控組合（Model Y, 2025+ 煥新版）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 2690,
    "originalPrice": 2880,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-y-juniper-2025-LED-center-console-bundle_d0e9ed63-dddd-41cc-a6af-2a7ff831908a.png?v=1750761944",
    "description": "全方位整合Model Y, 2025+煥新版的中控系統， 收納、置物、照明，一步到位！ 中控收納組（收納盒、杯墊組、矽膠底墊） ▎ 收納盒 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高溫低溫、防止物品滑動和碰撞聲，底層採用硬殼材質以提升耐用性。 可透光・方便黑暗中找物品 矽膠與硬殼選用透光",
    "officialUrl": "https://global.jowua-life.com/products/led-center-console-combo-tesla-model-y-juniper-2025",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46401320583416",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2690,
        "sku": "BFG25040101"
      }
    ]
  },
  {
    "id": "jowua_4_port_usb_dashcam_hub_model_3_y",
    "name": "Jowua - 手套箱專用 4 Port 集線器組 (Model 3/Y)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_4-PortUSBDashCamHub_ModelS_X2021_bundle.png?v=1685950716",
    "description": "產品描述 Model 3/Y 全車系手套箱專用 4 Port 集線器搭配特別的 L 型轉向轉接頭，可同時使用原廠 USB 隨身碟，小巧且精心孔位設計，不佔手套箱空間。 *不相容於Model S/X ( 請參考 ) 解決 Tesla 新車主的數據傳輸孔缺少的煩惱 一孔擴充四孔，支援原廠 USB 隨身碟",
    "officialUrl": "https://global.jowua-life.com/products/4-port-usb-dashcam-hub-model-3-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43852184977656",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "BFG23060501"
      }
    ]
  },
  {
    "id": "jowua_air_compressor_charging_kit",
    "name": "Jowua - 打氣機充電組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 2990,
    "originalPrice": 3760,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-air-compressor-charging-kit_1.png?v=1747034190",
    "description": "打氣機的必備充電組合，無論在車內或家中都能高效能充電，滿電蓄能！ 雙快充打氣機 快速充電：100W 極速蓄能 支援快充30分鐘滿電，省去６倍等待時間。 快速打氣：超大馬力 高效補壓 充氣效能提升高達 50%，補壓時間減半。 大口徑合金壓鑄缸體 無懼壓力負載 ，專為電動車高胎壓需求設計。 大螢幕清晰顯",
    "officialUrl": "https://global.jowua-life.com/products/air-compressor-charging-kit",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46445865697528",
        "title": "165W 打氣機充電組合",
        "name": "165W 打氣機充電組合",
        "price": 2990,
        "sku": "BFG25050501"
      }
    ]
  },
  {
    "id": "jowua_model_x_mesh_sunshade_bundle",
    "name": "Jowua - 分離式遮陽簾組合 (Model X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "mx_refresh"
    ],
    "price": 3990,
    "originalPrice": 4180,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-x-mesh-sunshade-bundle.png?v=1739950144",
    "description": "分離式遮陽簾（高透光、全遮光布料選擇） 專為全車系Model X 開發設計 原車開模，完美貼合前天窗與左右鷹翼門，隔熱效果更升級。 前天窗兩片式設計 分體兩片式設計，不易塌陷。完美銜接不留縫隙，大面積覆蓋車頂。 駕駛、副駕駛不打架 前天窗採兩片式設計，駕駛與副駕駛可自由選擇是否安裝遮陽簾。無論是享受",
    "officialUrl": "https://global.jowua-life.com/products/model-x-mesh-sunshade-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46701811728632",
        "title": "高透光｜編織布料",
        "name": "高透光｜編織布料",
        "price": 3990,
        "sku": "BFG25021901"
      },
      {
        "id": "46701811761400",
        "title": "全遮光｜黑武士布料",
        "name": "全遮光｜黑武士布料",
        "price": 3990,
        "sku": "BFG25080101"
      }
    ]
  },
  {
    "id": "jowua_under_screen_invisible_station",
    "name": "Jowua - 隱藏式螢幕收納基座組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 1990,
    "originalPrice": 2880,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-under-screan-invisible-magsafe-station_png.png?v=1788505596",
    "description": "⚠️購買前請留意 ⚠️ 此商品不包含示意圖中： 獨家GPS護盾 、 360°多功能雲台 （請加購選配） 此商品不適用於已改裝旋轉螢幕或旋轉螢幕支架的車輛 隱藏式螢幕收納基座 專為特斯拉打造的全方位基地 實現螢幕隱藏式收納、照明系統、設備充電、行車錄像與獨家GPS測速器！適用於Model Y (煥新版",
    "officialUrl": "https://global.jowua-life.com/products/under-screen-invisible-station",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46049220264184",
        "title": "Model 3/Y (煥新版) / 隱藏式螢幕收納基座＋Power HUB＋萬用 MagSafe 磁吸燈 組合",
        "name": "Model 3/Y (煥新版) / 隱藏式螢幕收納基座＋Power HUB＋萬用 MagSafe 磁吸燈 組合",
        "price": 2790,
        "sku": "BFG24122402"
      },
      {
        "id": "46049220296952",
        "title": "Model 3/Y (煥新版) / 隱藏式螢幕收納基座＋Power HUB",
        "name": "Model 3/Y (煥新版) / 隱藏式螢幕收納基座＋Power HUB",
        "price": 1990,
        "sku": "FGM24122302"
      },
      {
        "id": "46049220329720",
        "title": "Model 3/Y (2018-2024) / 隱藏式螢幕收納基座＋Power HUB＋萬用 MagSafe 磁吸燈 組合",
        "name": "Model 3/Y (2018-2024) / 隱藏式螢幕收納基座＋Power HUB＋萬用 MagSafe 磁吸燈 組合",
        "price": 2790,
        "sku": "BFG24122401"
      },
      {
        "id": "46049220362488",
        "title": "Model 3/Y (2018-2024) / 隱藏式螢幕收納基座＋Power HUB",
        "name": "Model 3/Y (2018-2024) / 隱藏式螢幕收納基座＋Power HUB",
        "price": 1990,
        "sku": "FGM24122301"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_nacs",
    "name": "Jowua - 雙用行動充電器 (TPC/NACS) 9.6kW｜NEMA 14-50轉接器組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2017_2020"
    ],
    "price": 9990,
    "originalPrice": 9990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/40A-9.6kW_TPC-NACS_NEMA14-50.png?v=1745898862",
    "description": "產品描述 資深特斯拉TPC (NACS)車主必備 旅行用充電座可透過不同插座形式為您的愛車進行中速或慢速充電。便攜性讓您隨時隨地進行充電，無須依賴固定的充電設施。可於您家中使用，或在車內準備一組旅充，於長途行駛時備用，滿電無憂！ 雙用設計，雙重便捷 日常家用：搭配內附的NEMA 14-50轉接器使用",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-nacs",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46192108962040",
        "title": "40A/9.6kW (TPC/NACS)＋NEMA 14-50轉接器",
        "name": "40A/9.6kW (TPC/NACS)＋NEMA 14-50轉接器",
        "price": 9990,
        "sku": "FGM25021401"
      }
    ]
  },
  {
    "id": "jowua_ccs1_to_ccs2_dc_ac_combined_ev_charging_adapter_pro",
    "name": "Jowua - CCS2 DC & AC快慢充萬用組（通用版）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 9990,
    "originalPrice": 11190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-ccs2-ac-dc-combined-adapter-set-V2.png?v=1782989578",
    "description": "CCS1 to CCS2 DC &amp; AC 快慢充轉接頭 CCS2 車主必備 相容第三方CCS2 (DC &amp; AC) 快慢充電網絡使用。CCS2 車主接上此轉接頭就能使用 CCS1 (DC &amp; AC) 快慢充電樁，增加您的充電選擇 ＊相容於特斯拉、Foxtron Bria、Lu",
    "officialUrl": "https://global.jowua-life.com/products/ccs1-to-ccs2-dc-ac-combined-ev-charging-adapter-pro",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "49777568809208",
        "title": "CCS2 DC & AC 快慢充萬用組合",
        "name": "CCS2 DC & AC 快慢充萬用組合",
        "price": 9990,
        "sku": "BFG26070101"
      }
    ]
  },
  {
    "id": "jowua_ev_charging_adapter_set_for_ccs1_ac_dc",
    "name": "Jowua - CCS1 快慢充萬用組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 9990,
    "originalPrice": 11860,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/ev-charging-adapter-set-for-ccs1-ac-dc_2.png?v=1757905853",
    "description": "CCS2 to CCS1 DC &amp; AC 快慢充轉接頭 CCS1 車主必備 相容第三方的CCS2 (DC &amp; AC) 快慢充電網絡使用，CCS1 車主接上此轉接頭就能使用CCS2 (DC &amp; AC) 快慢充充電樁，增加330座以上的充電選擇。 內建溝通晶片 獨家研發溝通晶片，",
    "officialUrl": "https://global.jowua-life.com/products/ev-charging-adapter-set-for-ccs1-ac-dc",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46852868309240",
        "title": "CCS1 快慢充萬用組",
        "name": "CCS1 快慢充萬用組",
        "price": 9990,
        "sku": "BFG25081301"
      }
    ]
  },
  {
    "id": "jowua_wireless_charging_wireless_controllers_combo_v2",
    "name": "Jowua - 無線充電雙搖桿組合 (Model S/X/Model 3/Y煥新版/Cybertruck)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 3590,
    "originalPrice": 3590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-3-Port-usb-dash-cam-hub-with-1tb-ssd-v2-controller-combo-2.png?v=1753430564",
    "description": "多連結無線搖桿（無線充電版） 升級無線充電功能 可完美放置於車內無線充電版上。時刻滿電，隨時備戰開打！ 三款顏色選擇 可搭配您的愛車內飾與個人喜好做選擇。 建議搭配 Jowua 手套箱 HUB 雙搖桿模式下， 建議使用搖桿接收器，將接收器 插在HUB第一與第三個端口。 支援 Nintendo Swi",
    "officialUrl": "https://global.jowua-life.com/products/wireless-charging-wireless-controllers-combo-v2",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45919218008312",
        "title": "織布白 x2 / 3 Port HUB + 1TB SSD",
        "name": "織布白 x2 / 3 Port HUB + 1TB SSD",
        "price": 7990,
        "sku": "BFG24110708"
      },
      {
        "id": "45919218073848",
        "title": "織布白 x2 / 3 Port Hub + 256G記憶卡",
        "name": "織布白 x2 / 3 Port Hub + 256G記憶卡",
        "price": 5490,
        "sku": "BFG24110704"
      },
      {
        "id": "45919278104824",
        "title": "織布白 x2 / 3 Port Hub (不搭配記憶卡)",
        "name": "織布白 x2 / 3 Port Hub (不搭配記憶卡)",
        "price": 3590,
        "sku": "BFG24110702"
      },
      {
        "id": "45919217910008",
        "title": "碳纖黑＋木紋棕 / 3 Port HUB + 1TB SSD",
        "name": "碳纖黑＋木紋棕 / 3 Port HUB + 1TB SSD",
        "price": 7990,
        "sku": "BFG24110707"
      },
      {
        "id": "45919217975544",
        "title": "碳纖黑＋木紋棕 / 3 Port Hub + 256G記憶卡",
        "name": "碳纖黑＋木紋棕 / 3 Port Hub + 256G記憶卡",
        "price": 5490,
        "sku": "BFG24110703"
      },
      {
        "id": "45919278072056",
        "title": "碳纖黑＋木紋棕 / 3 Port Hub (不搭配記憶卡)",
        "name": "碳纖黑＋木紋棕 / 3 Port Hub (不搭配記憶卡)",
        "price": 3590,
        "sku": "BFG24110701"
      }
    ]
  },
  {
    "id": "jowua_cup_coaster_set_luxgen_n7",
    "name": "Jowua - 杯架組（LUXGEN n⁷、n⁷ LR）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-cup-coaster-set-luxgen-n7.png?v=1737517612",
    "description": "產品規格 專為Luxgen n⁷、 n⁷ LR 設計 適用於n⁷、 n⁷ LR 前排與後排杯架，請依照您的車款搭配使用對應的杯架。 嚴選矽膠材質 採用食品級矽膠， 耐高溫低溫(-40℃ to 220℃)，無毒且環保。 方便清洗 矽膠材質可水洗，讓您方便清洗。 內容物說明 前排杯墊 x2 LR 5人座",
    "officialUrl": "https://global.jowua-life.com/products/cup-coaster-set-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45790615765240",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FG003120300"
      }
    ]
  },
  {
    "id": "jowua_foldable_car_tray_bundle_luxgen_n7",
    "name": "Jowua - 車用折疊桌板 兩入組 (LUXGEN n⁷)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 4690,
    "originalPrice": 5170,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-foldable-car-tray-bundle-gray-luxgen-n7.png?v=1727341751",
    "description": "產品描述 專為Luxgen n⁷設計 輕鬆營造舒適的行動辦公室與餐桌空間。 同時使用不限制 特殊尺寸，搭配面紙盒，讓駕駛與副駕可同時使用桌板。 方便使用與收納 折疊式設計，方便開闔使用，收納不佔空間。 止滑耐用 嚴選堅固耐用的金屬軸承，底座防滑，用心在每個細節。 質感設計 灰色布紋拼接設計，特殊質感",
    "officialUrl": "https://global.jowua-life.com/products/foldable-car-tray-bundle-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45767170064632",
        "title": "標準規格",
        "name": "標準規格",
        "price": 4690,
        "sku": "BFG24092501"
      }
    ]
  },
  {
    "id": "jowua_sentry_dashcam_adapter_set",
    "name": "Jowua - 哨兵讀取組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-sentry-dashcam-adapter-set-usb-a-to-type-c-lightning_1.png?v=1726111785",
    "description": "產品描述 支援 OTG 功能 可以隨時連接 iPhone / iPad / 筆電，查看行車記錄檔案。 * 請注意：此配件搭配連接SSD時，僅支援Type-C規格之iPhone型號 優選材質 採用耐用的高級金屬材質，延長產品使用年限。 小巧簡約 輕巧便攜，方便帶著走，不佔空間。",
    "officialUrl": "https://global.jowua-life.com/products/sentry-dashcam-adapter-set",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45705887842552",
        "title": "標準規格",
        "name": "標準規格",
        "price": 390,
        "sku": "FGM24090401"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_model3_2024_highland",
    "name": "Jowua - 立體防水行李廂墊｜可加選『椅背墊組合』 (Model 3, 2024+ 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 2990,
    "originalPrice": 2990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-trunk-liner-rear-cover-model-3-2024-highland.png?v=1726209721",
    "description": "本產品僅適用於 Model 3, 2024+ 煥新版，不適用於舊款 Model 3。 立體防水行李箱墊 專為特斯拉 Model 3, 2024+ 煥新版訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 貼心開口和掀開設計 不擋後行李廂的扣帶，折線設計方便掀開使用行李廂內的下方儲物區。 前箱立體",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-model3-2024-highland",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45721926959352",
        "title": "防水行李廂墊＋椅背墊",
        "name": "防水行李廂墊＋椅背墊",
        "price": 3990,
        "sku": "BFG24081901"
      },
      {
        "id": "45721923879160",
        "title": "防水行李廂墊",
        "name": "防水行李廂墊",
        "price": 2990,
        "sku": "FG001402500"
      }
    ]
  },
  {
    "id": "jowua_trunk_combo_model_3_2024_highland",
    "name": "Jowua - 行李廂全套組合 (Model 3, 2024+ 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 5390,
    "originalPrice": 5580,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-trunk-combo-model-3-2024-highland.png?v=1726199787",
    "description": "行李廂的全面防護與空間利用收納術，一組即就位！ 立體防水行李箱墊 專為特斯拉 Model 3 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透 。 貼心開口和掀開設計 不擋後行李 廂的扣帶，折線設計方便掀開使用行李廂內的下方 儲物 區。 前箱立體優化設計 可完美收納兼容兩組 Jowua 折疊桌板",
    "officialUrl": "https://global.jowua-life.com/products/trunk-combo-model-3-2024-highland",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45721798181112",
        "title": "標準規格",
        "name": "標準規格",
        "price": 5390,
        "sku": "BFG24082001"
      }
    ]
  },
  {
    "id": "jowua_magsafe_stand_case_iphone_16",
    "name": "Jowua - MagSafe 透明支架保護殼＋掛繩夾片組 (iPhone 16 系列)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-iphone-16-pro-white_f856bdb7-f11a-46d9-9b9a-686e39433c25.png?v=1725804079",
    "description": "產品規格 支援 MagSafe 磁吸配件 相容於 iPhone MagSafe 無線充電。 無段式雙向鋅合金支架 可呈現 4 種不同觀看角度，還可當指環扣使用。 全方面強韌防摔 全包邊防撞堅韌選材，強韌防摔無破綻。 金屬轉軸設計 耐用穩固更升級，無段式角度調節。 附贈掛繩夾片 輕薄耐用，不影響充電孔",
    "officialUrl": "https://global.jowua-life.com/products/magsafe-stand-case-iphone-16",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45691954135288",
        "title": "iPhone 16 Pro Max / 透亮白",
        "name": "iPhone 16 Pro Max / 透亮白",
        "price": 790,
        "sku": "FG000846400"
      },
      {
        "id": "45691954102520",
        "title": "iPhone 16 Pro Max / 磨砂黑",
        "name": "iPhone 16 Pro Max / 磨砂黑",
        "price": 790,
        "sku": "FG000806400"
      },
      {
        "id": "45691954200824",
        "title": "iPhone 16 Pro / 透亮白",
        "name": "iPhone 16 Pro / 透亮白",
        "price": 790,
        "sku": "FG000846300"
      },
      {
        "id": "45691954168056",
        "title": "iPhone 16 Pro / 磨砂黑",
        "name": "iPhone 16 Pro / 磨砂黑",
        "price": 790,
        "sku": "FG000806300"
      },
      {
        "id": "45691954266360",
        "title": "iPhone 16 Plus / 透亮白",
        "name": "iPhone 16 Plus / 透亮白",
        "price": 790,
        "sku": "FG000846500"
      },
      {
        "id": "45691954233592",
        "title": "iPhone 16 Plus / 磨砂黑",
        "name": "iPhone 16 Plus / 磨砂黑",
        "price": 790,
        "sku": "FG000806500"
      },
      {
        "id": "45691954331896",
        "title": "iPhone 16 / 透亮白",
        "name": "iPhone 16 / 透亮白",
        "price": 790,
        "sku": "FG000846200"
      },
      {
        "id": "45691954299128",
        "title": "iPhone 16 / 磨砂黑",
        "name": "iPhone 16 / 磨砂黑",
        "price": 790,
        "sku": "FG000806200"
      },
      {
        "id": "46347732910328",
        "title": "iPhone 16e / 透亮白",
        "name": "iPhone 16e / 透亮白",
        "price": 790,
        "sku": "FG000846600"
      }
    ]
  },
  {
    "id": "jowua_phone_tether_tab",
    "name": "Jowua - 手機掛繩夾片（兩入一組）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 150,
    "originalPrice": 150,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-phone-tether-tab_1.png?v=1725618533",
    "description": "產品描述 輕薄耐用 兩入一組，選用特殊材質，輕薄設計且耐用。 不影響充電孔使用 安裝夾片不影響日常使用與充電孔功能。 多元萬用，解放雙手 自由搭配手機掛繩、掛鑰匙或掛識別證，萬物隨掛。 完美搭配 適配JOWUA MagSafe透明支架系列保護殼（ iPhone 16 , iPhone 15-13 ,",
    "officialUrl": "https://global.jowua-life.com/products/phone-tether-tab",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45699267821816",
        "title": "標準規格",
        "name": "標準規格",
        "price": 150,
        "sku": "FG003220000"
      }
    ]
  },
  {
    "id": "jowua_magnetic_car_seat_holder_for_model_s_x",
    "name": "Jowua - MagSafe 磁吸掛鉤組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "ms_refresh"
    ],
    "price": 690,
    "originalPrice": 690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA_magnetic-car-seat-holder-for-model-s-x.webp?v=1691130997",
    "description": "⚠️ 此組合不適用於 Performance車款的賽車座椅椅背。建議可使用於原車遮陽板，作為磁吸擴充功能 產品描述 專為 特斯拉全車系 椅背設計 輕鬆安裝於後椅背硬殼飾板，不破壞內裝。 安撫小孩神器 後排變行動電影院，讓旅途不再無聊。 支援 iPhone MagSafe 磁吸 適用於 MagSafe",
    "officialUrl": "https://global.jowua-life.com/products/magnetic-car-seat-holder-for-model-s-x",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43938078523640",
        "title": "標準規格",
        "name": "標準規格",
        "price": 690,
        "sku": "FGM23061901"
      }
    ]
  },
  {
    "id": "jowua_door_side_storage_box",
    "name": "Jowua - 車內萬用收納桶（兩入一組）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper",
      "m3_2017_2020"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-door-side-storage-box.png?v=1720771264",
    "description": "產品描述 符合特斯拉各車型與其他車款 放置於門邊兩側空間，讓您收納濕雨傘、飲料，亦能充當垃圾桶，保持車廂內裝整潔。 搭配Jowua 手套箱掛鉤 開孔設計可搭配Jowua手套箱鉤置於副駕前，可收納眼鏡盒、消毒噴霧罐等日常用品，擴充額外收納空間又方便拿取！ 魔鬼氈設計 隨附魔鬼氈可將收納桶黏於各種絨布表",
    "officialUrl": "https://global.jowua-life.com/products/door-side-storage-box",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45456620945656",
        "title": "標準規格",
        "name": "標準規格",
        "price": 890,
        "sku": "FG000929600"
      }
    ]
  },
  {
    "id": "jowua_led_center_console_combo_model_3_2024",
    "name": "Jowua - LED中控組合(Model 3, 2024+ 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 2690,
    "originalPrice": 2880,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-3-highland-2024-LED-center-console-bundle.png?v=1745487186",
    "description": "全方位整合Model 3, 2024+煥新版的中控系統， 收納、置物、照明，一步到位！ 中控收納組（收納盒、杯墊組、矽膠底墊） ▎ 收納盒 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高溫低溫、防止物品滑動和碰撞聲，底層採用硬殼材質以提升耐用性。 可透光・方便黑暗中找物品 矽膠與硬殼選用透光",
    "officialUrl": "https://global.jowua-life.com/products/led-center-console-combo-model-3-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46387654721784",
        "title": "LED中控組合",
        "name": "LED中控組合",
        "price": 2690,
        "sku": "BFG25032802"
      }
    ]
  },
  {
    "id": "jowua_lir2450h_li_ion_battery_charger_set",
    "name": "Jowua - LIR2450H 可充電鈕扣電池組（兩入）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-lir2450h-li-ion-battery-charger-set_2_b1db2b3c-052e-4d86-8ead-bcbf6f1e4ecd.png?v=1747124946",
    "description": "鈕扣電池與可充電鈕扣電池，為消耗性產品，不屬於保固範圍內。 產品描述 高效率充電性能 市售通用款僅支援小電流8mA充電速度，Jowua特製款將電池電流提升10倍以上至95mA！ LIR2450專用充電器 專為LIR2450/LIR2450H使用，請勿使用其他型號鈕扣電池。 智能高規技術，便捷又安心 ",
    "officialUrl": "https://global.jowua-life.com/products/lir2450h-li-ion-battery-charger-set",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45270540452088",
        "title": "標準規格",
        "name": "標準規格",
        "price": 490,
        "sku": "FGM24051301"
      }
    ]
  },
  {
    "id": "jowua_charging_cable_holder_nema_14_50_bundle",
    "name": "Jowua - 防盜槍線固定整理器＋NEMA 14-50防水插座組合 (CCS2 / CCS1 / NACS)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper"
    ],
    "price": 2190,
    "originalPrice": 2770,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-charging-cable-holder-nema-14-50-bundle.png?v=1772619841",
    "description": "槍線固定整理器 電車車主槍線必備 提供CCS2、CCS1、NACS 全台各式充電規格，整齊收納與固定您的 電動車用行動充電器 ，電車生活有序更升級！ 功能雙結合 充電槍頭可輕鬆收納於固定座，降低磨損。電纜可整齊纏繞於支架，不再凌亂與打結。 充電樁防盜鎖 充電樁防盜設計 搭配JOWUA 雙用行動充電系",
    "officialUrl": "https://global.jowua-life.com/products/charging-cable-holder-nema-14-50-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "48044211273976",
        "title": "CCS2-AC Type-2",
        "name": "CCS2-AC Type-2",
        "price": 2190,
        "sku": "BFG26030202"
      },
      {
        "id": "48044211208440",
        "title": "CCS1 (J1772)",
        "name": "CCS1 (J1772)",
        "price": 2190,
        "sku": "BFG26030201"
      },
      {
        "id": "48044211241208",
        "title": "NACS (TPC)",
        "name": "NACS (TPC)",
        "price": 2190,
        "sku": "BFG26030203"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_ccs2_ac",
    "name": "Jowua - 雙用行動充電器 (CCS2-AC Type-2) 7kW｜NEMA 14-50/6-20轉接器組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "ms_refresh",
      "mx_refresh",
      "my_juniper"
    ],
    "price": 9990,
    "originalPrice": 9990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/32A-7kW_CCS2-ACType-2_NEMA14-50.png?v=1750415249",
    "description": "雙用行動充電器｜搭配NEMA 14-50 轉接器 CCS2-AC (Type-2) 車主必備 旅行用充電座可透過不同插座形式為您的愛車進行中速或慢速充電。便攜性讓您隨時隨地進行充電，無須依賴固定的充電設施。可於您家中使用，或在車內準備一組旅充，於長途行駛時備用，滿電無憂！ 雙用設計，雙重便捷 日常家",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-ccs2-ac",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46514501976312",
        "title": "32A/7kW (CCS2-AC Type-2)＋NEMA 14-50轉接器組合",
        "name": "32A/7kW (CCS2-AC Type-2)＋NEMA 14-50轉接器組合",
        "price": 9990,
        "sku": "BFG24060302"
      },
      {
        "id": "46549787279608",
        "title": "20A/4.4kW (CCS2-AC Type-2)＋NEMA 6-20轉接器組合",
        "name": "20A/4.4kW (CCS2-AC Type-2)＋NEMA 6-20轉接器組合",
        "price": 9990,
        "sku": "BFG25042502"
      }
    ]
  },
  {
    "id": "jowua_ev_mobile_connector_j1772",
    "name": "Jowua - 雙用行動充電器 (J1772/PHEV) 9.6kW｜NEMA 14-50/6-20轉接器組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 9990,
    "originalPrice": 9990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/40A-9.6kW_J1772-PHEV_NEMA14-50.png?v=1745898902",
    "description": "雙用行動充電器 ｜搭配NEMA 14-50轉接器 J1772 (PHEV) 車主必備 旅行用充電座可透過不同插座形式為您的愛車進行中速或慢速充電。便攜性讓您隨時隨地進行充電，無須依賴固定的充電設施。可於您家中使用，或在車內準備一組旅充，於長途行駛時備用，滿電無憂！ 雙用設計，雙重便捷 日常家用：搭配",
    "officialUrl": "https://global.jowua-life.com/products/ev-mobile-connector-j1772",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46549798584568",
        "title": "9.6kW (J1772/PHEV)＋NEMA 14-50轉接器組合",
        "name": "9.6kW (J1772/PHEV)＋NEMA 14-50轉接器組合",
        "price": 9990,
        "sku": "BFG24060301"
      },
      {
        "id": "46549798617336",
        "title": "4.4kW (J1772/PHEV)＋NEMA 6-20轉接器組合",
        "name": "4.4kW (J1772/PHEV)＋NEMA 6-20轉接器組合",
        "price": 9990,
        "sku": "BFG25042501"
      }
    ]
  },
  {
    "id": "jowua_all_weather_trunk_liners_luxgen_n7",
    "name": "Jowua - 立體防水行李廂墊＋椅背墊組合 (LUXGEN n⁷ 5人座)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 3290,
    "originalPrice": 3290,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-trunk-liners-luxgen-n7-5seaters-bundle.png?v=1724410348",
    "description": "此產品需搭配 LUXGEN原廠「平整化套件」 後才可使用。 防水行李廂墊 專為納智捷 LUXGEN n⁷ 5人座 訂製 立體加高全面防護後行李廂，有效阻擋泥沙、灰塵、液體滲透 後廂完美搭配 \"LED感應燈座\" 自由黏貼於後椅背任一處，打開後車廂就自動亮燈，方便在黑暗中尋找物品。 方便清潔 可水洗，建",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-trunk-liners-luxgen-n7",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "45695103140088",
        "title": "行李廂墊＋椅背墊組合",
        "name": "行李廂墊＋椅背墊組合",
        "price": 3290,
        "sku": "BFG24081302"
      }
    ]
  },
  {
    "id": "jowua_easyshield_waterproof_trunk_liner_model_y",
    "name": "Jowua - 易開式防水行李廂墊｜可加選『椅背墊組合』(Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 3590,
    "originalPrice": 3590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-easyshield-waterproof-trunk-liner-model-y-juniper.png?v=1746008568",
    "description": "易開式防水行李廂墊 專為特斯拉 Model Y 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 全球首創！釋放後行李廂的夾層空間 完美運用後行李廂夾層空間，提升 37 公升收納空間。 貼心織帶提把設計 輕鬆一指拉，將夾層空間用得淋漓盡致。隨手收納個人物品，完美放置 Jowua 旅充 、 折疊",
    "officialUrl": "https://global.jowua-life.com/products/easyshield-waterproof-trunk-liner-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46476428935416",
        "title": "Model Y 煥新版 (2025+) / 易開式防水行李廂墊 + 防水椅背墊組合",
        "name": "Model Y 煥新版 (2025+) / 易開式防水行李廂墊 + 防水椅背墊組合",
        "price": 4590,
        "sku": "FGM25042501"
      },
      {
        "id": "46476428968184",
        "title": "Model Y (2021-2024) / 易開式防水行李廂墊 + 防水椅背墊組合",
        "name": "Model Y (2021-2024) / 易開式防水行李廂墊 + 防水椅背墊組合",
        "price": 4590,
        "sku": "BFG24050601"
      },
      {
        "id": "45052953460984",
        "title": "Model Y (2021-2024) / 易開式防水行李廂墊",
        "name": "Model Y (2021-2024) / 易開式防水行李廂墊",
        "price": 3590,
        "sku": "FG001402201"
      }
    ]
  },
  {
    "id": "jowua_model_y_trunk_combo",
    "name": "Jowua - 行李廂全套組合 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 5990,
    "originalPrice": 6870,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-in-one-trunck-combo-model-y-juniper.png?v=1758785699",
    "description": "行李廂的全面防護與空間利用收納術，一組即就位！ 易開式防水行李廂墊 (三件組) 專為特斯拉 Model Y 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 全球首創！釋放後行李廂的夾層空間 完美運用後行李廂夾層空間，提升37公升收納空間。 貼心織帶提把設計 輕鬆一指拉，將夾層空間用得淋漓盡致",
    "officialUrl": "https://global.jowua-life.com/products/model-y-trunk-combo",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46894101463288",
        "title": "Model Y 煥新版 (2025+)",
        "name": "Model Y 煥新版 (2025+)",
        "price": 5990,
        "sku": "BFG25091801"
      },
      {
        "id": "46894101496056",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 5990,
        "sku": "BFG24042501"
      }
    ]
  },
  {
    "id": "jowua_universal_magsafe_car_seat_holder",
    "name": "Jowua - 通用型MagSafe磁吸掛鉤組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 790,
    "originalPrice": 790,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-universal-magsafe-car-seat-holder_4b3f355e-d8c4-4c21-8e42-e42997c1099c.png?v=1712649079",
    "description": "產品描述 此產品適用於座椅含有頭枕桿之車款 安撫小孩神器 讓後排秒變行動電影院，旅途不再無聊。 伸縮固定設計 不拆頭枕輕鬆安裝，高彈力伸縮設計，固定於各式汽車頭枕桿。 增穩防滑設計 防滑矽膠表面，呵護裝置不刮傷，同時止滑 固定矽膠凹槽，不傷頭枕桿，更穩固不怕掉 支援 iPhone MagSafe 磁",
    "officialUrl": "https://global.jowua-life.com/products/universal-magsafe-car-seat-holder",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44707287695608",
        "title": "標準規格",
        "name": "標準規格",
        "price": 790,
        "sku": "FG001922202"
      }
    ]
  },
  {
    "id": "jowua_model_y_ultimate_sunshade_bundle",
    "name": "Jowua - 全車終極遮陽組合 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 6390,
    "originalPrice": 6870,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua-Model-y-Complete-Sunshade-Bundle_61d5803f-5557-4dc1-aa9f-4645d9e2a652.png?v=1721966998",
    "description": "Model Y 專用的全車終極防曬組合，打造全車99%抗UV防曬與隱私防護。 玻璃車頂遮陽簾（黑武士） 特斯拉 Model Y 消暑法寶 炎炎夏日，拒絕高溫，安裝車頂遮陽簾能有效降低車內溫度。 雙面高密度編織布料 透光不影響天窗視野，耐熱、降低熱傳導、無異味，特殊抗光銀塗層，能有效屏蔽紫外線和陽光直",
    "officialUrl": "https://global.jowua-life.com/products/model-y-ultimate-sunshade-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46640752591096",
        "title": "Model Y 煥新版 (2025+)",
        "name": "Model Y 煥新版 (2025+)",
        "price": 6390,
        "sku": "BFG25071001"
      },
      {
        "id": "46640752623864",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 6390,
        "sku": "BFG24031301"
      }
    ]
  },
  {
    "id": "jowua_armrest_organizer_tesla_model_3_highland_3_2024",
    "name": "Jowua - 扶手箱收納盒組合 (Model 3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 890,
    "originalPrice": 1180,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-model-3y-2025-armrest-bundle.png?v=1745486962",
    "description": "扶手箱收納盒 專為 Model Y (2025+ 煥新版) 、Model 3 (2024+ 煥新版) 後中控台設計 讓後座扶手箱區域更整齊，增加儲物空間，可收納太陽眼鏡、充電轉接頭、 多連線無線搖桿 等隨身小物。 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高低溫，防止物品滑動與碰撞聲響。底",
    "officialUrl": "https://global.jowua-life.com/products/armrest-organizer-tesla-model-3-highland-3-2024",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46806841458936",
        "title": "扶手箱收納盒＋矽膠底墊",
        "name": "扶手箱收納盒＋矽膠底墊",
        "price": 890,
        "sku": "FGM25033101"
      }
    ]
  },
  {
    "id": "jowua_center_console_tray_organizer_new",
    "name": "Jowua - 中控收納組 (Model 3, 2024+ 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland"
    ],
    "price": 1190,
    "originalPrice": 1190,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JowuaModel3HighlandCenterConsoleSet.png?v=1706597533",
    "description": "專為 Model 3 (2024+ 煥新版) 中控台設計 收納盒：讓中控區域更整齊，增加儲物空間，可收納悠遊卡、零錢、隨身小物。 矽膠杯墊（兩入）：適用於前排與後排中控杯架。 矽膠底墊：方便固定中控內線材，保持整潔，線材不打結。 收納盒 雙層設計・嚴選材質 採用食品級矽膠，可水洗、防塵、耐高低溫、防",
    "officialUrl": "https://global.jowua-life.com/products/center-console-tray-organizer-new",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44397080609016",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1190,
        "sku": "FGM24011501"
      }
    ]
  },
  {
    "id": "jowua_foldable_car_tray_bundle",
    "name": "Jowua - 車用折疊桌板 兩入組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 4500,
    "originalPrice": 4970,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-foldable-car-tray-bundle-model-y-juniper_89c0218e-be1a-47e5-9ef4-125713811524.png?v=1749811731",
    "description": "產品描述 專為Tesla全車系設計 輕鬆營造舒適的行動辦公室與餐桌空間。 兩色選擇任您挑選 經典木紋與率性布紋灰，雙款式質感面面俱到。 同時使用不限制 特殊尺寸，讓駕駛與副駕可同時使用桌板，不打架。 後排乘客也能用 可加購專屬配件包，讓 Model S/3/X/Y 後排乘客也能使用桌板。👉 請看詳",
    "officialUrl": "https://global.jowua-life.com/products/foldable-car-tray-bundle",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46534438584568",
        "title": "布紋灰 / Model Y 煥新版 (2025+)",
        "name": "布紋灰 / Model Y 煥新版 (2025+)",
        "price": 4500,
        "sku": "BFG25061201"
      },
      {
        "id": "46534531842296",
        "title": "布紋灰 / Model 3 煥新版 (2024+)",
        "name": "布紋灰 / Model 3 煥新版 (2024+)",
        "price": 4500,
        "sku": "BFG24092402"
      },
      {
        "id": "45770839949560",
        "title": "布紋灰 / Model 3 (2018-2023) & Model Y (2021-2024)",
        "name": "布紋灰 / Model 3 (2018-2023) & Model Y (2021-2024)",
        "price": 4500,
        "sku": "BFG24092401"
      },
      {
        "id": "46534438617336",
        "title": "木紋 / Model Y 煥新版 (2025+)",
        "name": "木紋 / Model Y 煥新版 (2025+)",
        "price": 4500,
        "sku": "BFG25061202"
      },
      {
        "id": "46534531875064",
        "title": "木紋 / Model 3 煥新版 (2024+)",
        "name": "木紋 / Model 3 煥新版 (2024+)",
        "price": 4500,
        "sku": "BFG24041201"
      },
      {
        "id": "45770839916792",
        "title": "木紋 / Model 3 (2018-2023) & Model Y (2021-2024)",
        "name": "木紋 / Model 3 (2018-2023) & Model Y (2021-2024)",
        "price": 4500,
        "sku": "BFG24012301"
      }
    ]
  },
  {
    "id": "jowua_scooter_grips_padlock",
    "name": "Jowua - 滑板車防盜手把 + 密碼鎖組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 890,
    "originalPrice": 890,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/scooter-grips-padlock.png?v=1704422583",
    "description": "產品描述 獨家防盜手把設計 搭配 Jowua密碼鎖 ，上鎖防護，保護愛車不易遭有心人竊盜。 人體工學手把 支撐手腕，提升 操控舒適性。 ＊此產品僅適用於 Jowua 折疊電動滑板車LR 。",
    "officialUrl": "https://global.jowua-life.com/products/scooter-grips-padlock",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44301833961720",
        "title": "標準規格",
        "name": "標準規格",
        "price": 890,
        "sku": "FGM24010301"
      }
    ]
  },
  {
    "id": "jowua_hook_bundle_modelsx_juniper_y",
    "name": "Jowua - 掛鉤組 (Model S/X/3/Y 煥新版)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "ms_refresh"
    ],
    "price": 1990,
    "originalPrice": 2460,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/hook-s_x.png?v=1703491619",
    "description": "⚠️ 此組合不適用於 Performance 車款的賽車座椅椅背。建議可使用於原車遮陽板，作為磁吸擴充功能 前行李廂雞排掛鉤 前廂置物的絕佳夥伴 包袋雜物、雞排與臭豆腐的一席之地。 特選材質，只提供最好 掛鉤主體由不銹鋼製成，輕薄、耐高溫且堅固耐重。 品牌獨家設計 一體式流暢設計，完美搭配前行李廂，",
    "officialUrl": "https://global.jowua-life.com/products/hook-bundle-modelsx-juniper-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44286832836856",
        "title": "標準規格",
        "name": "標準規格",
        "price": 1990,
        "sku": "BFG23122502"
      }
    ]
  },
  {
    "id": "jowua_trunk_storage_bins_model_y",
    "name": "Jowua - LED 後行李廂收納組 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 1990,
    "originalPrice": 3980,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-trunk-storage-bins-model-y-led.png?v=1787125831",
    "description": "Model Y 後行李廂儲物盒 專為 Model Y 後行李箱設計 放置於後行李廂的兩側空間，讓您收納濕雨傘、鞋子、工具與零件，仍能保持後行李廂內裝整潔。 針對 Model Y 煥新版 2025+ 全新設計 完美貼合，不影響原廠置物隔板收納與擺放。貼心設計，最大化利用後廂兩側的儲物空間。 擴充收納空",
    "officialUrl": "https://global.jowua-life.com/products/trunk-storage-bins-model-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46894030848248",
        "title": "Model Y 煥新版 (2025+) / 儲物盒＋LED感應燈座 x2",
        "name": "Model Y 煥新版 (2025+) / 儲物盒＋LED感應燈座 x2",
        "price": 3390,
        "sku": "BFG25091601"
      },
      {
        "id": "50184147828984",
        "title": "Model Y 煥新版 (2025+) / 儲物盒＋後車廂氣氛燈",
        "name": "Model Y 煥新版 (2025+) / 儲物盒＋後車廂氣氛燈",
        "price": 3690,
        "sku": "BFG26081202"
      },
      {
        "id": "46894030881016",
        "title": "Model Y 煥新版 (2025+) / 儲物盒",
        "name": "Model Y 煥新版 (2025+) / 儲物盒",
        "price": 1990,
        "sku": "FG000926500"
      },
      {
        "id": "44213147009272",
        "title": "Model Y (2021-2024) / 儲物盒＋LED感應燈座 x2",
        "name": "Model Y (2021-2024) / 儲物盒＋LED感應燈座 x2",
        "price": 3390,
        "sku": "BFG23102702"
      },
      {
        "id": "44213147042040",
        "title": "Model Y (2021-2024) / 儲物盒",
        "name": "Model Y (2021-2024) / 儲物盒",
        "price": 1990,
        "sku": "FG000924500"
      }
    ]
  },
  {
    "id": "jowua_tire_valve_caps",
    "name": "Jowua - 輪胎氣嘴蓋（四件組）",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "ms_refresh",
      "mx_refresh",
      "m3_highland",
      "m3_2017_2020"
    ],
    "price": 390,
    "originalPrice": 390,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA_Tire_Valve_Caps_ce5f0f7b-cabc-4a51-b61b-de6f8875b404.png?v=1696327108",
    "description": "產品描述 不影響原廠節能蓋安裝 內置墊圈，氣密防漏 內置墊圈設計，可防止氣門嘴漏氣，防塵效果再升級。 複合材料，絕緣保護 內置絕緣材料可保護您的閥門免受污垢、腐蝕和惡劣天氣條件影響。 高質感材質，堅固耐腐蝕 由鋅合金製成，具有卓越的強度與耐用性。 內斂率性造型，易安裝與拆卸 JOWUA設計六邊形率性",
    "officialUrl": "https://global.jowua-life.com/products/tire-valve-caps",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44031266816248",
        "title": "標準規格",
        "name": "標準規格",
        "price": 390,
        "sku": "FG001023700"
      }
    ]
  },
  {
    "id": "jowua_led_center_console_combo_model_3_y",
    "name": "Jowua - LED中控組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023"
    ],
    "price": 2690,
    "originalPrice": 2960,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_8.png?v=1690776975",
    "description": "全方位整合您的中控系統，收納、置物、照明，一步到位！ ⚠️ 不適用於 Model 3 (2024+ 煥新版) 中控收納盒（選擇款式：3格/灰、2格/灰、3格/奶油、3格/透明白） 專為新版中控台設計 僅適用於 Model 3/Y 車型 (2021+) 讓車內中控區域更整齊，增加儲物空間，可收納太陽眼",
    "officialUrl": "https://global.jowua-life.com/products/led-center-console-combo-model-3-y",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44105074606328",
        "title": "3格/灰",
        "name": "3格/灰",
        "price": 2690,
        "sku": "BFG23072701"
      },
      {
        "id": "44105074639096",
        "title": "2格/灰",
        "name": "2格/灰",
        "price": 2690,
        "sku": "BFG23072703"
      },
      {
        "id": "44233928638712",
        "title": "3格/奶油",
        "name": "3格/奶油",
        "price": 2690,
        "sku": "BFG23120401"
      },
      {
        "id": "44233928671480",
        "title": "3格/透明白",
        "name": "3格/透明白",
        "price": 2690,
        "sku": "BFG23120402"
      }
    ]
  },
  {
    "id": "jowua_microfiber_cleaning_cloth_under_seat_collapsible_organizer_combo",
    "name": "Jowua - 座椅下摺疊收納盒＋超細纖維擦車布組合",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "mx_refresh"
    ],
    "price": 2190,
    "originalPrice": 2280,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web_3_1f88362a-0fdc-47f7-a28c-ad60d8725dba.png?v=1688546273",
    "description": "清潔愛車的必備組合，從清洗到擦拭一步到位！ 座椅下摺疊收納籃（兩入組） 折疊＆伸縮設計 柔韌材質，可折疊，防漏設計。 便攜提把 可當野餐籃、洗車桶、購物籃等用途。 超細纖維擦車布（三件組） 三種尺寸，適用多場景 大型：150 x 53 cm 中型：32 x 26 cm 手套型：16 x 26 cm ",
    "officialUrl": "https://global.jowua-life.com/products/microfiber-cleaning-cloth-under-seat-collapsible-organizer-combo",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43903905628408",
        "title": "標準規格",
        "name": "標準規格",
        "price": 2190,
        "sku": "FGM23062701"
      }
    ]
  },
  {
    "id": "jowua_microfiber_cleaning_cloth_3_pack",
    "name": "Jowua - 超細纖維擦車布 (三件組)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland",
      "m3_2017_2020",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 690,
    "originalPrice": 690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Web.png?v=1688545298",
    "description": "產品描述 三種尺寸，各式情境隨心使用 大型：150 x 53 cm 中型：32 x 26 cm 手套型：16 x 26 cm 柔軟厚實，極強吸水 高密度編織工藝，不留水痕，吸水力更勝他牌3倍！ 圓角細膩收邊，經久耐用 一氣呵成的單點收邊，不易脫線、不傷車漆。 黏絮滾筒測試，擦拭不留毛絮。 他不只是擦",
    "officialUrl": "https://global.jowua-life.com/products/microfiber-cleaning-cloth-3-pack",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43896632312056",
        "title": "標準規格",
        "name": "標準規格",
        "price": 690,
        "sku": "FG002520000"
      }
    ]
  },
  {
    "id": "jowua_sunshade_clips",
    "name": "Jowua - 遮陽簾卡扣組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 1000,
    "originalPrice": 1000,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_Model3_GlassRoofSunshade_Tool1.png?v=1686796575",
    "description": "產品描述 玻璃車頂遮陽簾專用卡扣 小巧美觀、簡單安裝固定，與原車內裝融為一體。搭配遮陽簾快拆快裝設計，無需拆下卡扣。 包裝內容物 遮陽簾卡扣x 12 撬棒x 1 安裝說明 使用內附撬棒在內飾板和玻璃車窗之間打開一個小間隙，並安裝卡扣。 將所有卡扣安裝至建議位置。 請確認標籤位於遮陽簾的左上角，“SI",
    "officialUrl": "https://global.jowua-life.com/products/sunshade-clips",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46117445796088",
        "title": "原車灰",
        "name": "原車灰",
        "price": 1000,
        "sku": "FG002259900"
      },
      {
        "id": "46117445828856",
        "title": "黑武士",
        "name": "黑武士",
        "price": 1000,
        "sku": "FG002209900"
      }
    ]
  },
  {
    "id": "jowua_j1772_ac_adapter_kit",
    "name": "Jowua - J1772 (CCS1) / PHEV 慢充必備組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 6990,
    "originalPrice": 9350,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_J1772adapterorganizerkit_03.png?v=1712132033",
    "description": "❗ 僅限用於 AC 慢充，不適用 DC 超級充電站 組合包：充電轉接頭x2+ 鎖x2+ 收納包 CCS2-AC(TYPE2) to J1772 轉接頭 ：到賣場、百貨公司、飯店的 CCS2-AC(type 2) 目的地充電樁， 接上此轉接頭才能充電。 TPC to J1772 轉接頭 ：適用於賣場、",
    "officialUrl": "https://global.jowua-life.com/products/j1772-ac-adapter-kit",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43782725468408",
        "title": "標準規格",
        "name": "標準規格",
        "price": 6990,
        "sku": "BFG23033001"
      }
    ]
  },
  {
    "id": "jowua_j1772_adapter_case",
    "name": "Jowua - 充電轉接頭收納包 - J1772/CCS1車主",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "all"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_J1772adapterorganizerkit_01.png?v=1681975527",
    "description": "產品描述 ▐ J1772 (CCS1)慢充必備組專用，可收納 CCS2-AC (Type-2) to J1772 轉接頭 TPC (NACS) to J1772 AC 轉接頭 充電密碼鎖 x 2 此商品為收納包， 不包含 充電轉接頭與密碼鎖 ▐ CCS1 快慢充萬用組專用，可收納 CCS2 to C",
    "officialUrl": "https://global.jowua-life.com/products/j1772-adapter-case",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46338482471160",
        "title": "J1772 (CCS1) 慢充必備組 專用",
        "name": "J1772 (CCS1) 慢充必備組 專用",
        "price": 590,
        "sku": "FG001229901"
      },
      {
        "id": "46338482503928",
        "title": "CCS1 快慢充萬用組 專用",
        "name": "CCS1 快慢充萬用組 專用",
        "price": 590,
        "sku": "FG001229902"
      },
      {
        "id": "46827913183480",
        "title": "CCS1 快慢充萬用組 專用 + 密碼鎖",
        "name": "CCS1 快慢充萬用組 專用 + 密碼鎖",
        "price": 690,
        "sku": "FGM25081301"
      }
    ]
  },
  {
    "id": "jowua_center_console_organizer_coasters_set_modelsx",
    "name": "Jowua - 中控收納組 (Model S/X)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "ms_refresh"
    ],
    "price": 1690,
    "originalPrice": 1690,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/Jowua_SXcenterconsoleset_2.png?v=1700557187",
    "description": "產品描述 專為 Model S/X 中控設計 ( 2023+ ) 收納盒：讓車內中控區域更整齊，增加儲物空間以收納悠遊卡、零錢、隨身小物品。 矽膠杯墊：適用於前中控杯架 扶手箱收納盒：讓車內扶手箱區域更整齊，增加儲物空間以收納太陽眼鏡、充電轉接頭、 多連線無線搖桿 等物品 。 嚴選矽膠材質 採用食品",
    "officialUrl": "https://global.jowua-life.com/products/center-console-organizer-coasters-set-modelsx",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44190601707768",
        "title": "中控收納盒＋杯墊＋扶手箱收納盒",
        "name": "中控收納盒＋杯墊＋扶手箱收納盒",
        "price": 1690,
        "sku": "FGM23090501"
      }
    ]
  },
  {
    "id": "jowua_all_weather_floor_liners_essentials_modely",
    "name": "Jowua - 立體防水腳踏墊+面紙盒組合 (Model Y 煥新版 2025+/2021-2024)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper"
    ],
    "price": 4990,
    "originalPrice": 5470,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/jowua-all-weather-floor-liner-model-y-2025-juniper_ceee1bcb-ca4c-43f6-93ed-710c44381ab7.png?v=1746005789",
    "description": "Model Y 腳踏墊 專為特斯拉 Model Y 訂製 立體加高全面防護，有效阻擋泥沙、灰塵、液體滲透。 專利收納設計 方便主副駕收納雨傘、拖鞋、車用吸塵器等物品。 經 SGS 認證，安全無毒 經檢測實驗證實，不含人體有害物質，安心使用。 🎁 附贈 椅下出風口保護網 阻絕零錢、髒東西、小生物或其",
    "officialUrl": "https://global.jowua-life.com/products/all-weather-floor-liners-essentials-modely",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "46403269722360",
        "title": "Model Y 煥新版 (2025+)",
        "name": "Model Y 煥新版 (2025+)",
        "price": 4990,
        "sku": "FGM25041801"
      },
      {
        "id": "46403269689592",
        "title": "Model Y (2021-2024)",
        "name": "Model Y (2021-2024)",
        "price": 4990,
        "sku": "BFG23032701"
      }
    ]
  },
  {
    "id": "jowua_cup_holder_set",
    "name": "Jowua - 杯架組（Model 3/Y 2018-2023)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 490,
    "originalPrice": 490,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/CupHolder_RearSeatCoaster_Grey_3f7bf0ea-1302-4db9-9580-a522095e1cc4.png?v=1675670249",
    "description": "產品描述 獨家設計 前杯架適用於 Model 3 &amp; Y 中控杯架。 後杯墊 適用於所有 Model 3 &amp; Y 後座杯架。 ⚠️ 不適用於 Model 3 (2024+ 煥新版)與Model Y (2025+ 煥新版) 嚴選矽膠材質 採用食品級矽膠，耐高溫低溫(-40℃ to 22",
    "officialUrl": "https://global.jowua-life.com/products/cup-holder-set",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43654298403064",
        "title": "灰",
        "name": "灰",
        "price": 490,
        "sku": "BFG22103101"
      },
      {
        "id": "46607971942648",
        "title": "黑＋灰",
        "name": "黑＋灰",
        "price": 490,
        "sku": "FGM24111901"
      }
    ]
  },
  {
    "id": "jowua_ccs2_ac_adapter_case",
    "name": "Jowua - 充電轉接頭收納包 - CCS2-AC (TYPE2)",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_highland"
    ],
    "price": 590,
    "originalPrice": 590,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/files/JOWUA_J1772_CCS2_Pouch.png?v=1691741963",
    "description": "產品描述 同時收納2款轉接頭與密碼鎖 Jowua J1772 to CCS2-AC (TYPE2) 轉接頭 (Tesla防拔款) TPC to CCS2-AC (TYPE2) 轉接頭 充電密碼鎖",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-ac-adapter-case",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43557963727096",
        "title": "標準規格",
        "name": "標準規格",
        "price": 590,
        "sku": "FG001209900"
      }
    ]
  },
  {
    "id": "jowua_tissue_box_holder_modely",
    "name": "Jowua - Model Y 面紙盒組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "my_juniper",
      "my_classic"
    ],
    "price": 590,
    "originalPrice": 1380,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_ModelYTissueBoxHolder_Front.png?v=1670832740",
    "description": "產品描述 專為 Model Y 設計 獨家精心設計底板，創造一個平台空間可放置衛生紙。 搭配 Jowua 兩用收納盒 安裝在後排，方便駕駛與其他乘客隨時拿取衛生紙。 射出勾魔鬼氈設計 簡單安裝，黏貼穩固不掉落，不用擔心傷到內裝。 完美搭配 Jowua 腳踏墊 建議搭配 Jowua Model Y 腳",
    "officialUrl": "https://global.jowua-life.com/products/tissue-box-holder-modely",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "44353172766968",
        "title": "底板＋面紙盒",
        "name": "底板＋面紙盒",
        "price": 1290,
        "sku": "BFG24011601"
      },
      {
        "id": "43513272369400",
        "title": "底板",
        "name": "底板",
        "price": 590,
        "sku": "FG001005501"
      }
    ]
  },
  {
    "id": "jowua_ccs2_ac_adapter_kit",
    "name": "Jowua - CCS2-AC (TYPE 2) 慢充必備組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_highland",
      "ms_refresh",
      "mx_refresh"
    ],
    "price": 6990,
    "originalPrice": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/Jowua_CCS2-ACadapterorganizerkit_03.png?v=1686562798",
    "description": "❗ 僅限用於 AC 慢充，不適用 DC 超級充電站 J1772 to CCS2-AC (TYPE2) 轉接頭（V3.5 全相容CCS2溫控防拔款） CCS2車主必備 相容所有公共停車場Type 1 (J1772)充電器、保時捷、Noodoe及Tesla J1772充電樁，讓CCS2車主能使用。 內建",
    "officialUrl": "https://global.jowua-life.com/products/ccs2-ac-adapter-kit",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "43455249252600",
        "title": "充電轉接頭x2 + 鎖 + 收納包",
        "name": "充電轉接頭x2 + 鎖 + 收納包",
        "price": 6990,
        "sku": "BFG23022102"
      }
    ]
  },
  {
    "id": "jowua_3m_adhesive_sticker_replacement",
    "name": "Jowua - 3M 背膠替換清潔組",
    "brand": "Jowua",
    "storeId": "jowua",
    "category": "bundle",
    "fitment": [
      "m3_2021_2023",
      "m3_2017_2020"
    ],
    "price": 188,
    "originalPrice": 188,
    "image": "https://cdn.shopify.com/s/files/1/0549/8991/4291/products/3Mstickerforinvisiblefoldawaycarmount_kits.png?v=1660102119",
    "description": "產品描述 超強力 原廠 3M VHB 背膠， 適用 Jowua 隱藏折疊車架。 耐用 耐高溫與低溫、防水、風吹、 去除時不留殘膠。 包裝內容物 • 3M VHB 背膠 x 2 • 隱藏車架安裝定位框 x 1 • 除膠濕紙巾 x 10 規格 尺寸： 5.4 x 5.4 x 0.01 cm",
    "officialUrl": "https://global.jowua-life.com/products/3m-adhesive-sticker-replacement",
    "badge": "Jowua 原廠正品",
    "variants": [
      {
        "id": "39737190875315",
        "title": "標準規格",
        "name": "標準規格",
        "price": 188,
        "sku": "FG000209902"
      }
    ]
  },
  {
    "id": "quack_43297",
    "name": "呱樂電驢 - ZAKA全包式通風座椅套( 舊版 Model 3/Y  )",
    "brand": "QuackEV",
    "storeId": "quackev",
    "category": "bundle",
    "fitment": [
      "m3_highland",
      "m3_2021_2023",
      "my_classic",
      "my_juniper"
    ],
    "price": 4200,
    "originalPrice": 4200,
    "image": "https://www.workband.com.tw/store_image/quackev/P1177398103687.webp",
    "description": "ZAKA全包式通風座椅套( 舊版 Model 3/Y )-呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 呱樂電驢工坊-特斯拉改裝,特斯拉周邊配件,特斯拉一站式改裝,台南特斯拉改裝,仁德區特斯拉改裝 購物車 0 匯款通知 呱樂起源 ABOUT 限時優惠 ",
    "officialUrl": "https://www.quackev.com/products/info.php?id=43297",
    "badge": "呱樂門市完工",
    "variants": [
      {
        "id": "QK-43297",
        "title": "標準完工版",
        "name": "標準完工版",
        "price": 4200,
        "sku": "QK-43297"
      }
    ]
  }
];

export const INITIAL_CHECKLIST = [
  { "id": "jowua-001", "required": true, "note": "腳踏墊是車內防護第一要務，提車當天直接鋪上！" },
  { "id": "jowua-004", "required": true, "note": "特斯拉中控太深太空，極度需要分層收納。" },
  { "id": "jowua-009", "required": true, "note": "台灣夏天天窗極燙，強烈建議交車前備好遮陽簾。" },
  { "id": "jowua-013", "required": true, "note": "原廠USB隨身碟高溫易損壞，建議更換為車規級 SSD。" },
  { "id": "quack-001", "required": false, "note": "若介意螢幕看導航反光，可考慮預約呱樂安裝旋轉支架。" },
  { "id": "jowua-020", "required": false, "note": "若經常使用公有停車場慢充，建議備妥 Type 2 轉接頭。" }
];
