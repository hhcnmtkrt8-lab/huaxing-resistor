const HX_PRODUCTS = [
  {
    id: "non-inductive-wirewound",
    name: "无感绕线电阻器",
    en: "NON-INDUCTIVE WIREWOUND",
    category: "绕线电阻器",
    categoryKey: "wirewound",
    image: "assets/images/non-inductive-wound.webp",
    badge: "优势品类",
    summary: "采用特殊绕制结构降低电感影响，适合高频、脉冲及对稳定性要求较高的电路。",
    tags: ["低电感", "高功率", "可定制"],
    specs: [
      ["产品结构", "陶瓷芯体 + 精密绕线"],
      ["阻值范围", "按应用需求定制"],
      ["额定功率", "按封装与散热条件确认"],
      ["表面涂装", "阻燃绝缘涂层"]
    ],
    features: ["多年无感绕线电阻器研发与制造经验", "适配电源、工业控制等复杂负载环境", "支持阻值、功率、精度及引脚形式定制"]
  },
  {
    id: "wirewound",
    name: "绕线电阻器",
    en: "WIREWOUND RESISTOR",
    category: "绕线电阻器",
    categoryKey: "wirewound",
    image: "assets/images/wound-resistor-alt.webp",
    badge: "经典系列",
    summary: "以合金线绕制于绝缘芯体，兼顾较高功率承载能力与稳定的电气性能。",
    tags: ["高功率", "耐热", "工业级"],
    specs: [
      ["核心材料", "金属合金电阻线"],
      ["绝缘结构", "陶瓷芯体 + 阻燃涂装"],
      ["公差", "可按应用需求确认"],
      ["包装", "编带 / 散装可选"]
    ],
    features: ["适合较高功率和高电流场景", "可配合成型、编带等二次加工", "支持批量供货与长期配套"]
  },
  {
    id: "leadless-wirewound",
    name: "无引线绕线电阻器",
    en: "LEADLESS WIREWOUND",
    category: "绕线电阻器",
    categoryKey: "wirewound",
    image: "assets/images/leadless-wound.webp",
    badge: "紧凑结构",
    summary: "面向紧凑安装与自动化贴装需求，提供编带包装和灵活的端部结构选择。",
    tags: ["无引线", "编带", "省空间"],
    specs: [
      ["结构形式", "无引线本体"],
      ["适配工艺", "自动化装配 / 编带"],
      ["阻值/功率", "按项目需求定制"],
      ["交付形式", "卷盘编带"]
    ],
    features: ["减小安装占位，便于自动化生产", "可根据 PCB 布局调整端部尺寸", "适合需要稳定批产的一致化需求"]
  },
  {
    id: "rxm-wirewound",
    name: "线绕型晶圆电阻器",
    en: "RXM / RFM SERIES",
    category: "绕线电阻器",
    categoryKey: "wirewound",
    image: "assets/images/rxm-illustration.svg",
    badge: "RXM 系列",
    summary: "双帽圆柱结构，覆盖 0207、0309、0410、0411 等常见尺寸，适合充电器、电源与节能照明等应用。",
    tags: ["0207–0411", "1Ω–100Ω", "UL1412"],
    specs: [
      ["产品系列", "RXM / RFM"],
      ["常见尺寸", "0207 / 0309 / 0410 / 0411"],
      ["阻值范围", "1Ω–100Ω（RXM）"],
      ["工作温度", "-55℃–275℃"],
      ["精度", "F ±1% / G ±2% / J ±5%"],
      ["包装", "7 英寸 / 13 英寸卷盘"]
    ],
    features: ["双帽结构，支持自动化编带包装", "阻燃涂装，符合 UL1412 不燃性测试要求", "尺寸与额定功率覆盖多种小型电源设计"]
  },
  {
    id: "carbon-film",
    name: "碳膜电阻器",
    en: "CARBON FILM RESISTOR",
    category: "碳膜电阻器",
    categoryKey: "carbon",
    image: "assets/images/carbon-film.webp",
    badge: "通用基础",
    summary: "应用成熟的通用型膜式电阻器，兼顾成本、稳定性和广泛的电路适配能力。",
    tags: ["通用型", "成本友好", "批量供货"],
    specs: [
      ["膜层材料", "碳膜"],
      ["典型应用", "通用电子电路"],
      ["阻值/精度", "按项目需求确认"],
      ["包装", "编带 / 散装可选"]
    ],
    features: ["适合大批量、通用型电子设计", "供货形式与包装可按产线要求配合", "可与其他系列组合询价与配套"]
  },
  {
    id: "metal-film",
    name: "金属膜电阻器",
    en: "METAL FILM RESISTOR",
    category: "金属膜电阻器",
    categoryKey: "metal",
    image: "assets/images/metal-film-main.webp",
    badge: "精密稳定",
    summary: "金属膜层带来更稳定的温度特性和较低噪声，适用于精密分压、信号与控制电路。",
    tags: ["低噪声", "稳定性好", "多精度"],
    specs: [
      ["膜层材料", "真空金属膜"],
      ["典型应用", "精密控制 / 信号电路"],
      ["公差", "按项目需求确认"],
      ["包装", "编带 / 散装可选"]
    ],
    features: ["温度稳定性与噪声表现均衡", "支持多种阻值、公差与封装方案", "适合仪表、电源和控制类应用"]
  },
  {
    id: "metal-oxide",
    name: "金属氧化膜电阻器",
    en: "METAL OXIDE FILM RESISTOR",
    category: "金属氧化膜电阻器",
    categoryKey: "oxide",
    image: "assets/images/metal-oxide-main.webp",
    badge: "耐热耐脉冲",
    summary: "氧化膜结构具备较好的耐热与耐负载能力，适合电源、家电及工业电子等场景。",
    tags: ["耐高温", "耐脉冲", "可靠性"],
    specs: [
      ["膜层材料", "金属氧化膜"],
      ["典型应用", "电源 / 家电 / 工控"],
      ["阻值/功率", "按应用需求定制"],
      ["包装", "编带 / 散装可选"]
    ],
    features: ["面向较高温度和负载工况设计", "适合空间受限的轴向安装结构", "可与金属膜、绕线系列组合选型"]
  },
  {
    id: "forming",
    name: "电阻成型加工",
    en: "LEAD FORMING",
    category: "电阻器二次加工",
    categoryKey: "processing",
    image: "assets/images/formed.webp",
    badge: "量产配套",
    summary: "按 PCB 孔位、装配空间和自动化工艺提供引脚折弯与成型服务，让器件更快进入产线。",
    tags: ["折弯成型", "尺寸定制", "批量加工"],
    specs: [
      ["加工类型", "引脚折弯 / 成型"],
      ["尺寸依据", "客户图纸或样品"],
      ["适配产品", "膜式 / 绕线电阻器"],
      ["服务方式", "来料或成品配套"]
    ],
    features: ["减少客户二次加工环节", "尺寸与方向可按图纸确认", "适合标准化批量生产"]
  },
  {
    id: "taping",
    name: "立式编带加工",
    en: "RADIAL TAPING",
    category: "电阻器二次加工",
    categoryKey: "processing",
    image: "assets/images/factory-taping.webp",
    badge: "自动装配",
    summary: "提供立式编带和卷盘包装，便于自动插件设备连续作业，并改善批次管理效率。",
    tags: ["立式编带", "卷盘", "自动化"],
    specs: [
      ["加工类型", "立式编带"],
      ["包装", "卷盘 / 定制"],
      ["适配产品", "轴向电阻器"],
      ["量产方式", "连续自动编带"]
    ],
    features: ["适配自动插件与连续生产", "节距和方向按设备要求确认", "支持与其他成型工艺组合"]
  },
  {
    id: "high-power",
    name: "大功率电阻器",
    en: "HIGH POWER RESISTOR",
    category: "其他产品",
    categoryKey: "other",
    image: "assets/images/high-power.webp",
    badge: "高负载",
    summary: "覆盖多种外形与结构的功率型产品，可依据散热、安装和负载条件进行方案确认。",
    tags: ["高负载", "多结构", "定制"],
    specs: [
      ["结构", "管式 / 片式等多种形式"],
      ["应用", "电源 / 制动 / 工业控制"],
      ["功率", "依据散热条件确认"],
      ["安装", "支持定制连接方式"]
    ],
    features: ["适合高功率或脉冲负载场景", "可根据安装空间选择结构", "建议结合散热与环境温度选型"]
  },
  {
    id: "sleeve",
    name: "套管电阻器",
    en: "SLEEVED RESISTOR",
    category: "其他产品",
    categoryKey: "other",
    image: "assets/images/sleeve.webp",
    badge: "绝缘强化",
    summary: "通过套管结构增强绝缘与机械保护，适配对布线安全性和装配可靠性有要求的应用。",
    tags: ["绝缘保护", "多引脚", "定制"],
    specs: [
      ["结构", "电阻本体 + 绝缘套管"],
      ["引脚", "按装配方式定制"],
      ["适配场景", "绝缘 / 防护要求较高"],
      ["阻值/功率", "按项目确认"]
    ],
    features: ["增强外部绝缘与机械防护", "可配合不同安装方向成型", "适合电源及相关工业电子配套"]
  },
  {
    id: "non-inductive-cement",
    name: "无感水泥电阻器",
    en: "NON-INDUCTIVE CEMENT",
    category: "其他产品",
    categoryKey: "other",
    image: "assets/images/cement.webp",
    badge: "大功率无感",
    summary: "水泥封装结合无感绕制结构，适合需要较高功率承载并关注寄生电感的应用。",
    tags: ["无感", "大功率", "耐负载"],
    specs: [
      ["封装", "水泥型矩形封装"],
      ["绕制", "无感结构"],
      ["典型应用", "电源 / 脉冲 / 保护电路"],
      ["功率/阻值", "按需求定制"]
    ],
    features: ["兼顾功率承载与低电感需求", "结构坚固，适合工业类应用", "可根据安装方式选择引脚形式"]
  }
];

window.HX_PRODUCTS = HX_PRODUCTS;
