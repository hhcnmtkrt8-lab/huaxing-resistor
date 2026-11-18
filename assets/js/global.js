(function () {
  "use strict";

  const esCommon = {
    "utility.direct": "Fabricante directo · Shenzhen, China",
    "utility.cert": "ISO 9001 · UL · CQC · RoHS",
    "utility.since": "Desde 2006",
    "nav.products": "Productos",
    "nav.manufacturing": "Fabricación",
    "nav.quality": "Calidad",
    "nav.applications": "Aplicaciones",
    "nav.contact": "Contacto",
    "nav.quote": "Solicitar cotización",
    "hero.kicker": "20 años de ingeniería de resistencias",
    "hero.title1": "Precisión,",
    "hero.title2": "en cada ohmio.",
    "hero.lede": "Desde resistencias bobinadas no inductivas hasta resistencias de película de precisión, diseñamos componentes fiables para aplicaciones de potencia, industria, automoción y energía.",
    "hero.ctaPrimary": "Explorar productos",
    "hero.ctaSecondary": "Iniciar una consulta",
    "hero.metric1": "Líneas de producción automatizadas",
    "hero.metric2": "Familias base de resistencias",
    "hero.metric3": "Años de experiencia",
    "hero.callout1": "Estructura cerámica / película metálica",
    "hero.callout2": "Conformado de terminales a medida",
    "hero.visualTitle": "Diseñada para su circuito",
    "hero.visualText": "Rangos estándar y construcciones específicas por proyecto.",
    "hero.footer1": "BOBINADAS",
    "hero.footer2": "RESISTENCIAS DE PELÍCULA",
    "hero.footer3": "ENSAMBLAJE PERSONALIZADO",
    "hero.footer4": "SOPORTE OEM / ODM",
    "feature.1title": "Fabricante directo",
    "feature.1text": "Producción, ingeniería y calidad bajo un mismo techo.",
    "feature.2title": "Selección según aplicación",
    "feature.2text": "Confirmamos el circuito antes de confirmar el componente.",
    "feature.3title": "Documentación de calidad",
    "feature.3text": "Certificados y datos de materiales disponibles a solicitud.",
    "feature.4title": "Soporte para exportación",
    "feature.4text": "Comunicación clara desde la consulta hasta la entrega.",
    "products.eyebrow": "SISTEMAS DE PRODUCTO",
    "products.title1": "La resistencia correcta",
    "products.title2": "para el mundo real.",
    "products.lede": "Elija por construcción y aplicación. Nuestros ingenieros convierten resistencia, potencia, tolerancia, tamaño y embalaje en una especificación lista para producir.",
    "filters.all": "Todos los productos",
    "filters.wirewound": "Bobinadas",
    "filters.film": "Película",
    "filters.assembly": "Conformado y cinta",
    "filters.count": "series mostradas",
    "common.request": "Solicitar información →",
    "product.nonInductive.name": "Resistencia bobinada no inductiva",
    "product.nonInductive.text": "Estructura de baja inductancia para circuitos de alta frecuencia, pulsos y alta estabilidad.",
    "product.nonInductive.tag": "Alta potencia · Personalizable",
    "product.wirewound.name": "Resistencia bobinada",
    "product.wirewound.text": "Hilo de aleación sobre núcleo aislado para soportar potencia con un rendimiento eléctrico estable.",
    "product.wirewound.tag": "Resistente al calor · Industrial",
    "product.rxm.name": "Resistencia bobinada MELF RXM",
    "product.rxm.text": "Construcción cilíndrica de doble casquillo para cargadores, fuentes de alimentación e iluminación eficiente.",
    "product.rxm.tag": "1Ω—100Ω · UL1412",
    "product.carbon.name": "Resistencia de película de carbono",
    "product.carbon.text": "Una familia probada y rentable para circuitos electrónicos generales y producción en volumen.",
    "product.carbon.tag": "Rentable · Cinta y carrete",
    "product.metal.name": "Resistencia de película metálica",
    "product.metal.text": "Temperatura estable y bajo ruido para control de precisión, sensado y circuitos de señal.",
    "product.metal.tag": "Precisión · Estable",
    "product.oxide.name": "Resistencia de película de óxido metálico",
    "product.oxide.text": "Diseñada para temperaturas elevadas y cargas exigentes en potencia, electrodomésticos e industria.",
    "product.oxide.tag": "Resistente al calor · Pulsos",
    "product.forming.name": "Conformado y ensamblaje de terminales",
    "product.forming.text": "Doblado, conformado y encintado según proyecto para integrar el componente directamente en su línea.",
    "product.forming.tag": "Según plano · Listo para lote",
    "product.highPower.name": "Resistencia de alta potencia",
    "product.highPower.text": "Múltiples formatos para potencia, frenado y control industrial con cargas térmicas exigentes.",
    "product.highPower.tag": "Alta carga · Multi-formato",
    "manufacturing.eyebrow": "FABRICACIÓN",
    "manufacturing.title1": "La consistencia se diseña,",
    "manufacturing.title2": "no se promete.",
    "manufacturing.lede": "Ocho líneas automatizadas, procesos controlados y soporte técnico práctico hacen predecible la producción repetitiva.",
    "manufacturing.caption1": "BOBINADO AUTOMATIZADO",
    "manufacturing.caption2": "PLANTA DE PRODUCCIÓN",
    "manufacturing.caption3": "ENCINTADO Y EMBALAJE",
    "manufacturing.copy": "Veinte años de experiencia convertidos en un proceso en el que su proyecto puede confiar.",
    "manufacturing.step1title": "Definir la aplicación",
    "manufacturing.step1text": "Revisamos juntos resistencia, potencia, tolerancia, entorno y limitaciones de montaje.",
    "manufacturing.step2title": "Confirmar la construcción",
    "manufacturing.step2text": "Material, bobinado, recubrimiento, terminales y embalaje se ajustan al método de producción.",
    "manufacturing.step3title": "De la muestra al volumen",
    "manufacturing.step3text": "Muestras, documentación y lotes siguen una única especificación acordada.",
    "manufacturing.stat1": "Líneas automáticas",
    "manufacturing.stat2": "Años de experiencia",
    "manufacturing.stat3": "Soporte de proceso",
    "quality.eyebrow": "CALIDAD Y CUMPLIMIENTO",
    "quality.title1": "La calidad es un proceso,",
    "quality.title2": "no una inspección final.",
    "quality.lede": "Nuestro sistema cubre materiales entrantes, producción, inspección y registros de lote. La información de certificación está disponible para revisión.",
    "quality.iso": "Sistema de gestión de calidad",
    "quality.ul": "Certificación de seguridad para bobinadas",
    "quality.cqc": "Serie con certificación de producto",
    "quality.rohs": "Ensayos de cumplimiento ambiental",
    "quality.note": "El alcance y la vigencia de los certificados se confirman por producto y modelo antes de comprar.",
    "quality.imageLabel": "PROCESO / CONTROL / TRAZABILIDAD",
    "applications.eyebrow": "APLICACIONES",
    "applications.title1": "Fiabilidad donde",
    "applications.title2": "el circuito importa.",
    "applications.lede": "Desde electrónica compacta hasta sistemas de energía, la selección comienza con el entorno real de operación.",
    "application.electronics": "Electrónica de consumo",
    "application.electronicsText": "Adaptadores · electrodomésticos · dispositivos inteligentes",
    "application.industrial": "Control industrial",
    "application.industrialText": "Accionamientos · potencia · automatización",
    "application.automotive": "Electrónica automotriz",
    "application.automotiveText": "Iluminación · control · alimentación a bordo",
    "application.energy": "Energía renovable",
    "application.energyText": "Solar · almacenamiento · sistemas eólicos",
    "export.eyebrow": "TRABAJE CON NOSOTROS",
    "export.title1": "Una línea directa",
    "export.title2": "del requisito a la producción.",
    "export.lede": "Pensado para compradores internacionales que necesitan comunicación clara, respuestas técnicas útiles y seguimiento fiable.",
    "export.step1title": "Envíe su requisito",
    "export.step1text": "Comparta las condiciones del circuito, cantidad objetivo y cualquier plano o referencia.",
    "export.step2title": "Definimos la solución",
    "export.step2text": "Respondemos con una construcción adecuada, puntos técnicos y próximos pasos.",
    "export.step3title": "Confirme muestra y volumen",
    "export.step3text": "Desde la muestra aprobada y la especificación hasta la producción repetible.",
    "rfq.eyebrow": "SOLICITAR COTIZACIÓN",
    "rfq.title1": "Cuéntenos qué",
    "rfq.title2": "necesita el circuito.",
    "rfq.lede": "Envíe los datos esenciales y nuestro equipo le ayudará a confirmar la resistencia, el conformado y la ruta de suministro.",
    "rfq.phone": "Teléfono",
    "rfq.email": "Correo",
    "rfq.factory": "Dirección de producción",
    "rfq.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, China",
    "rfq.directLabel": "CONTACTO DIRECTO DE FÁBRICA",
    "rfq.directText": "El formulario prepara un correo directo. Envíelo desde su aplicación de correo o escríbanos directamente.",
    "form.name": "Nombre *",
    "form.company": "Empresa",
    "form.email": "Correo corporativo *",
    "form.country": "País / región",
    "form.product": "Producto de interés",
    "form.selectProduct": "Seleccione un producto",
    "form.quantity": "Cantidad estimada",
    "form.message": "Requisito *",
    "form.messagePlaceholder": "Resistencia, potencia, tolerancia, dimensiones, cantidad y fecha objetivo...",
    "form.submit": "Preparar correo de cotización",
    "form.copy": "Copiar consulta",
    "form.disclaimer": "Este sitio no almacena su información. Al enviar se abrirá su correo con la consulta dirigida a szxyhx@163.com.",
    "form.opening": "Abriendo su aplicación de correo. Si no se abre, escriba a szxyhx@163.com.",
    "form.copied": "Consulta copiada",
    "form.copyError": "No se pudo copiar. Envíe el correo directamente.",
    "form.mailSubject": "Consulta desde el sitio web",
    "footer.description": "Shenzhen Xianyang Huaxing Electromechanical Co., Ltd. fabrica componentes electrónicos desde 2006.",
    "footer.products": "Productos",
    "footer.wirewound": "Resistencias bobinadas",
    "footer.film": "Resistencias de película",
    "footer.custom": "Conformado personalizado",
    "footer.rfq": "Solicitar cotización",
    "footer.company": "Empresa",
    "footer.chinese": "Sitio en chino",
    "footer.contact": "Contacto",
    "footer.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, China",
    "footer.rights": "Todos los derechos reservados."
  };

  const translations = {
    en: {
      name: "English",
      code: "EN",
      lang: "en",
      messages: {
        "form.opening": "Opening your email app. If it does not open, email szxyhx@163.com.",
        "form.copied": "RFQ copied",
        "form.copyError": "Could not copy. Please send the email directly.",
        "form.mailSubject": "Website RFQ"
      }
    },
    "es-mx": {
      name: "Español (México)",
      code: "MX",
      lang: "es-MX",
      title: "Xianyang Huaxing | Fabricante de resistencias de precisión",
      description: "Fabricante de resistencias bobinadas y de película en Shenzhen, China. Soporte para compradores internacionales desde muestra hasta volumen.",
      messages: esCommon
    },
    "es-ar": {
      name: "Español (Argentina)",
      code: "AR",
      lang: "es-AR",
      title: "Xianyang Huaxing | Fabricante de resistencias de precisión",
      description: "Fabricante de resistencias bobinadas y de película en Shenzhen, China. Atención internacional desde muestra hasta producción en serie.",
      messages: {
        ...esCommon,
        "nav.quote": "Solicitar presupuesto",
        "hero.ctaSecondary": "Iniciar consulta",
        "rfq.eyebrow": "SOLICITAR PRESUPUESTO",
        "rfq.lede": "Envíe los datos esenciales y nuestro equipo le ayudará a definir la resistencia, el conformado y la forma de suministro.",
        "form.submit": "Preparar correo de presupuesto",
        "footer.rfq": "Solicitar presupuesto"
      }
    },
    vi: {
      name: "Tiếng Việt",
      code: "VN",
      lang: "vi",
      title: "Xianyang Huaxing | Nhà sản xuất điện trở chính xác",
      description: "Nhà sản xuất điện trở dây quấn và điện trở màng tại Thâm Quyến, Trung Quốc. Hỗ trợ khách hàng quốc tế từ mẫu thử đến sản xuất hàng loạt.",
      messages: {
        "utility.direct": "Nhà sản xuất trực tiếp · Thâm Quyến, Trung Quốc",
        "utility.cert": "ISO 9001 · UL · CQC · RoHS",
        "utility.since": "Từ năm 2006",
        "nav.products": "Sản phẩm",
        "nav.manufacturing": "Sản xuất",
        "nav.quality": "Chất lượng",
        "nav.applications": "Ứng dụng",
        "nav.contact": "Liên hệ",
        "nav.quote": "Yêu cầu báo giá",
        "hero.kicker": "20 năm kinh nghiệm kỹ thuật điện trở",
        "hero.title1": "Chính xác,",
        "hero.title2": "trong từng ohm.",
        "hero.lede": "Từ điện trở dây quấn không cảm ứng đến điện trở màng chính xác, chúng tôi thiết kế linh kiện ổn định cho điện nguồn, công nghiệp, ô tô và năng lượng.",
        "hero.ctaPrimary": "Khám phá sản phẩm",
        "hero.ctaSecondary": "Gửi yêu cầu",
        "hero.metric1": "Dây chuyền tự động",
        "hero.metric2": "Dòng điện trở chủ lực",
        "hero.metric3": "Năm kinh nghiệm",
        "hero.callout1": "Kết cấu gốm / màng kim loại",
        "hero.callout2": "Tạo hình chân theo yêu cầu",
        "hero.visualTitle": "Thiết kế cho mạch của bạn",
        "hero.visualText": "Dải tiêu chuẩn và kết cấu riêng cho từng dự án.",
        "hero.footer1": "DÂY QUẤN",
        "hero.footer2": "ĐIỆN TRỞ MÀNG",
        "hero.footer3": "GIA CÔNG TÙY CHỈNH",
        "hero.footer4": "HỖ TRỢ OEM / ODM",
        "feature.1title": "Nhà sản xuất trực tiếp",
        "feature.1text": "Sản xuất, kỹ thuật và chất lượng trong cùng một nhà máy.",
        "feature.2title": "Chọn theo ứng dụng",
        "feature.2text": "Xác nhận mạch điện trước khi chốt linh kiện.",
        "feature.3title": "Hồ sơ chất lượng",
        "feature.3text": "Có thể cung cấp chứng nhận và dữ liệu vật liệu theo yêu cầu.",
        "feature.4title": "Hỗ trợ xuất khẩu",
        "feature.4text": "Trao đổi rõ ràng từ báo giá đến giao hàng.",
        "products.eyebrow": "HỆ SẢN PHẨM",
        "products.title1": "Điện trở phù hợp",
        "products.title2": "cho ứng dụng thực tế.",
        "products.lede": "Chọn theo kết cấu và ứng dụng. Kỹ sư của chúng tôi xác nhận điện trở, công suất, sai số, kích thước và đóng gói thành một quy cách sẵn sàng sản xuất.",
        "filters.all": "Tất cả sản phẩm",
        "filters.wirewound": "Dây quấn",
        "filters.film": "Điện trở màng",
        "filters.assembly": "Tạo hình & đóng cuộn",
        "filters.count": "dòng sản phẩm",
        "common.request": "Yêu cầu thông tin →",
        "product.nonInductive.name": "Điện trở dây quấn không cảm ứng",
        "product.nonInductive.text": "Kết cấu dây quấn điện cảm thấp cho mạch tần số cao, xung và yêu cầu ổn định cao.",
        "product.nonInductive.tag": "Công suất cao · Tùy chỉnh",
        "product.wirewound.name": "Điện trở dây quấn",
        "product.wirewound.text": "Dây hợp kim trên lõi cách điện cho khả năng chịu công suất và hiệu suất điện ổn định.",
        "product.wirewound.tag": "Chịu nhiệt · Công nghiệp",
        "product.rxm.name": "Điện trở dây quấn MELF RXM",
        "product.rxm.text": "Kết cấu trụ hai đầu cho bộ sạc, nguồn điện và thiết bị chiếu sáng tiết kiệm năng lượng.",
        "product.rxm.tag": "1Ω—100Ω · UL1412",
        "product.carbon.name": "Điện trở màng carbon",
        "product.carbon.text": "Dòng điện trở phổ biến, tiết kiệm chi phí cho mạch điện tử thông dụng và sản xuất số lượng lớn.",
        "product.carbon.tag": "Tiết kiệm · Cuộn băng",
        "product.metal.name": "Điện trở màng kim loại",
        "product.metal.text": "Đặc tính nhiệt ổn định và độ ồn thấp cho điều khiển chính xác, cảm biến và mạch tín hiệu.",
        "product.metal.tag": "Chính xác · Ổn định",
        "product.oxide.name": "Điện trở màng oxit kim loại",
        "product.oxide.text": "Thiết kế cho nhiệt độ cao và tải nặng trong điện nguồn, thiết bị gia dụng và điện tử công nghiệp.",
        "product.oxide.tag": "Chịu nhiệt · Chịu xung",
        "product.forming.name": "Tạo hình & lắp ráp chân",
        "product.forming.text": "Uốn, tạo hình và đóng cuộn theo dự án để đưa linh kiện vào dây chuyền sản xuất của bạn.",
        "product.forming.tag": "Theo bản vẽ · Sẵn sàng sản xuất",
        "product.highPower.name": "Điện trở công suất cao",
        "product.highPower.text": "Nhiều kiểu thân cho điện nguồn, hãm và điều khiển công nghiệp với tải nhiệt cao.",
        "product.highPower.tag": "Tải cao · Nhiều kiểu dáng",
        "manufacturing.eyebrow": "SẢN XUẤT",
        "manufacturing.title1": "Độ ổn định được thiết kế,",
        "manufacturing.title2": "không chỉ bằng lời hứa.",
        "manufacturing.lede": "Tám dây chuyền tự động, quy trình được kiểm soát và hỗ trợ kỹ thuật thực tế giúp sản xuất lặp lại luôn ổn định.",
        "manufacturing.caption1": "DÂY QUẤN TỰ ĐỘNG",
        "manufacturing.caption2": "NHÀ XƯỞNG SẢN XUẤT",
        "manufacturing.caption3": "ĐÓNG CUỘN & ĐÓNG GÓI",
        "manufacturing.copy": "Hai mươi năm kinh nghiệm được chuyển thành quy trình mà dự án của bạn có thể tin cậy.",
        "manufacturing.step1title": "Xác định ứng dụng",
        "manufacturing.step1text": "Điện trở, công suất, sai số, môi trường và giới hạn lắp đặt được xem xét cùng nhau.",
        "manufacturing.step2title": "Xác nhận kết cấu",
        "manufacturing.step2text": "Vật liệu, dây quấn, lớp phủ, chân và đóng gói được chọn theo phương thức sản xuất.",
        "manufacturing.step3title": "Từ mẫu đến số lượng lớn",
        "manufacturing.step3text": "Mẫu, tài liệu và lô sản xuất cùng tuân theo một quy cách đã xác nhận.",
        "manufacturing.stat1": "Dây chuyền tự động",
        "manufacturing.stat2": "Năm kinh nghiệm",
        "manufacturing.stat3": "Hỗ trợ quy trình",
        "quality.eyebrow": "CHẤT LƯỢNG & TUÂN THỦ",
        "quality.title1": "Chất lượng là một quy trình,",
        "quality.title2": "không phải bước kiểm tra cuối.",
        "quality.lede": "Hệ thống chất lượng bao gồm vật tư đầu vào, sản xuất, kiểm tra và hồ sơ lô. Thông tin chứng nhận có thể cung cấp để xem xét.",
        "quality.iso": "Hệ thống quản lý chất lượng",
        "quality.ul": "Chứng nhận an toàn điện trở dây quấn",
        "quality.cqc": "Dòng sản phẩm được chứng nhận",
        "quality.rohs": "Kiểm nghiệm tuân thủ môi trường",
        "quality.note": "Phạm vi và hiệu lực chứng nhận được xác nhận theo từng sản phẩm và mã hàng trước khi đặt hàng.",
        "quality.imageLabel": "QUY TRÌNH / KIỂM SOÁT / TRUY XUẤT",
        "applications.eyebrow": "ỨNG DỤNG",
        "applications.title1": "Đáng tin cậy khi",
        "applications.title2": "mạch điện thực sự quan trọng.",
        "applications.lede": "Từ thiết bị điện tử nhỏ gọn đến hệ thống năng lượng, việc chọn linh kiện bắt đầu từ môi trường vận hành thực tế.",
        "application.electronics": "Điện tử tiêu dùng",
        "application.electronicsText": "Bộ sạc · gia dụng · thiết bị thông minh",
        "application.industrial": "Điều khiển công nghiệp",
        "application.industrialText": "Truyền động · điện nguồn · tự động hóa",
        "application.automotive": "Điện tử ô tô",
        "application.automotiveText": "Chiếu sáng · điều khiển · nguồn trên xe",
        "application.energy": "Năng lượng tái tạo",
        "application.energyText": "Mặt trời · lưu trữ · hệ thống điện gió",
        "export.eyebrow": "LÀM VIỆC VỚI CHÚNG TÔI",
        "export.title1": "Kết nối trực tiếp",
        "export.title2": "từ yêu cầu đến sản xuất.",
        "export.lede": "Dành cho khách hàng quốc tế cần trao đổi rõ ràng, câu trả lời kỹ thuật thực tế và theo dõi đáng tin cậy.",
        "export.step1title": "Gửi yêu cầu",
        "export.step1text": "Cung cấp điều kiện mạch, số lượng dự kiến và bản vẽ hoặc mã tham khảo nếu có.",
        "export.step2title": "Xác định giải pháp",
        "export.step2text": "Chúng tôi phản hồi với kết cấu phù hợp, các điểm kỹ thuật và bước tiếp theo.",
        "export.step3title": "Xác nhận mẫu & số lượng",
        "export.step3text": "Từ mẫu và quy cách được duyệt đến sản xuất hàng loạt ổn định.",
        "rfq.eyebrow": "YÊU CẦU BÁO GIÁ",
        "rfq.title1": "Cho chúng tôi biết",
        "rfq.title2": "mạch điện cần gì.",
        "rfq.lede": "Gửi các thông tin chính và đội ngũ của chúng tôi sẽ giúp xác nhận điện trở, phương án tạo hình và nguồn cung.",
        "rfq.phone": "Điện thoại",
        "rfq.email": "Email",
        "rfq.factory": "Địa chỉ sản xuất",
        "rfq.address": "168 Honghu Road, Yanluo, Bao'an, Thâm Quyến, Trung Quốc",
        "rfq.directLabel": "LIÊN HỆ TRỰC TIẾP NHÀ MÁY",
        "rfq.directText": "Biểu mẫu giúp soạn email trực tiếp. Gửi bằng ứng dụng email hoặc liên hệ với chúng tôi qua email.",
        "form.name": "Họ tên *",
        "form.company": "Công ty",
        "form.email": "Email công việc *",
        "form.country": "Quốc gia / khu vực",
        "form.product": "Sản phẩm quan tâm",
        "form.selectProduct": "Chọn sản phẩm",
        "form.quantity": "Số lượng dự kiến",
        "form.message": "Yêu cầu *",
        "form.messagePlaceholder": "Điện trở, công suất, sai số, kích thước, số lượng và thời gian mong muốn...",
        "form.submit": "Soạn email yêu cầu báo giá",
        "form.copy": "Sao chép yêu cầu",
        "form.disclaimer": "Trang web không lưu thông tin của bạn. Khi gửi, ứng dụng email sẽ mở với yêu cầu gửi đến szxyhx@163.com.",
        "form.opening": "Đang mở ứng dụng email. Nếu không mở, vui lòng gửi đến szxyhx@163.com.",
        "form.copied": "Đã sao chép yêu cầu",
        "form.copyError": "Không thể sao chép. Vui lòng gửi email trực tiếp.",
        "form.mailSubject": "Yêu cầu từ trang web",
        "footer.description": "Công ty TNHH Cơ điện Xianyang Huaxing Thâm Quyến sản xuất linh kiện điện tử từ năm 2006.",
        "footer.products": "Sản phẩm",
        "footer.wirewound": "Điện trở dây quấn",
        "footer.film": "Điện trở màng",
        "footer.custom": "Gia công tùy chỉnh",
        "footer.rfq": "Yêu cầu báo giá",
        "footer.company": "Công ty",
        "footer.chinese": "Trang tiếng Trung",
        "footer.contact": "Liên hệ",
        "footer.address": "168 Honghu Road, Yanluo, Bao'an, Thâm Quyến, Trung Quốc",
        "footer.rights": "Bảo lưu mọi quyền."
      }
    },
    "pt-br": {
      name: "Português (Brasil)",
      code: "BR",
      lang: "pt-BR",
      title: "Xianyang Huaxing | Fabricante de resistores de precisão",
      description: "Fabricante de resistores de fio e filme em Shenzhen, China. Suporte a compradores internacionais da amostra à produção em volume.",
      messages: {
        "utility.direct": "Fabricante direto · Shenzhen, China",
        "utility.cert": "ISO 9001 · UL · CQC · RoHS",
        "utility.since": "Desde 2006",
        "nav.products": "Produtos",
        "nav.manufacturing": "Produção",
        "nav.quality": "Qualidade",
        "nav.applications": "Aplicações",
        "nav.contact": "Contato",
        "nav.quote": "Solicitar cotação",
        "hero.kicker": "20 anos de engenharia de resistores",
        "hero.title1": "Precisão,",
        "hero.title2": "em cada ohm.",
        "hero.lede": "De resistores de fio não indutivos a resistores de filme de precisão, criamos componentes confiáveis para energia, indústria, automotivo e aplicações renováveis.",
        "hero.ctaPrimary": "Explorar produtos",
        "hero.ctaSecondary": "Iniciar cotação",
        "hero.metric1": "Linhas automatizadas",
        "hero.metric2": "Famílias principais",
        "hero.metric3": "Anos de experiência",
        "hero.callout1": "Estrutura cerâmica / filme metálico",
        "hero.callout2": "Terminais moldados sob medida",
        "hero.visualTitle": "Projetado para seu circuito",
        "hero.visualText": "Faixas padrão e construções específicas por projeto.",
        "hero.footer1": "FIO",
        "hero.footer2": "RESISTORES DE FILME",
        "hero.footer3": "MONTAGEM PERSONALIZADA",
        "hero.footer4": "SUPORTE OEM / ODM",
        "feature.1title": "Fabricante direto",
        "feature.1text": "Produção, engenharia e qualidade no mesmo site.",
        "feature.2title": "Seleção por aplicação",
        "feature.2text": "Confirmamos o circuito antes de confirmar o componente.",
        "feature.3title": "Documentação de qualidade",
        "feature.3text": "Certificados e dados de materiais disponíveis sob solicitação.",
        "feature.4title": "Suporte para exportação",
        "feature.4text": "Comunicação clara da cotação à entrega.",
        "products.eyebrow": "SISTEMAS DE PRODUTO",
        "products.title1": "O resistor certo",
        "products.title2": "para o mundo real.",
        "products.lede": "Escolha por construção e aplicação. Nossos engenheiros transformam resistência, potência, tolerância, dimensões e embalagem em uma especificação pronta para produção.",
        "filters.all": "Todos os produtos",
        "filters.wirewound": "Fio",
        "filters.film": "Filme",
        "filters.assembly": "Modelagem e fita",
        "filters.count": "séries exibidas",
        "common.request": "Solicitar informações →",
        "product.nonInductive.name": "Resistor de fio não indutivo",
        "product.nonInductive.text": "Estrutura de baixa indutância para circuitos de alta frequência, pulso e alta estabilidade.",
        "product.nonInductive.tag": "Alta potência · Personalizável",
        "product.wirewound.name": "Resistor de fio",
        "product.wirewound.text": "Fio de liga sobre núcleo isolado para suportar potência com desempenho elétrico estável.",
        "product.wirewound.tag": "Resistente ao calor · Industrial",
        "product.rxm.name": "Resistor de fio MELF RXM",
        "product.rxm.text": "Construção cilíndrica de dupla tampa para carregadores, fontes e iluminação de alta eficiência.",
        "product.rxm.tag": "1Ω—100Ω · UL1412",
        "product.carbon.name": "Resistor de filme de carbono",
        "product.carbon.text": "Família comprovada e econômica para circuitos eletrônicos gerais e produção em volume.",
        "product.carbon.tag": "Econômico · Fita e bobina",
        "product.metal.name": "Resistor de filme metálico",
        "product.metal.text": "Estabilidade térmica e baixo ruído para controle de precisão, sensores e circuitos de sinal.",
        "product.metal.tag": "Precisão · Estável",
        "product.oxide.name": "Resistor de filme de óxido metálico",
        "product.oxide.text": "Projetado para temperaturas mais altas e cargas exigentes em energia, eletrodomésticos e indústria.",
        "product.oxide.tag": "Resistente ao calor · Pulso",
        "product.forming.name": "Modelagem e montagem de terminais",
        "product.forming.text": "Dobras, modelagem e fita específicas do projeto para integrar o componente à sua linha.",
        "product.forming.tag": "Por desenho · Pronto para lote",
        "product.highPower.name": "Resistor de alta potência",
        "product.highPower.text": "Vários formatos para potência, frenagem e controle industrial com cargas térmicas exigentes.",
        "product.highPower.tag": "Alta carga · Vários formatos",
        "manufacturing.eyebrow": "PRODUÇÃO",
        "manufacturing.title1": "Consistência é projeto,",
        "manufacturing.title2": "não apenas promessa.",
        "manufacturing.lede": "Oito linhas automatizadas, processos controlados e suporte técnico prático tornam a produção repetitiva previsível.",
        "manufacturing.caption1": "BOBINAGEM AUTOMATIZADA",
        "manufacturing.caption2": "PISO DE PRODUÇÃO",
        "manufacturing.caption3": "FITA E EMBALAGEM",
        "manufacturing.copy": "Vinte anos de experiência convertidos em um processo confiável para o seu projeto.",
        "manufacturing.step1title": "Definir a aplicação",
        "manufacturing.step1text": "Resistência, potência, tolerância, ambiente e montagem são avaliados em conjunto.",
        "manufacturing.step2title": "Confirmar a construção",
        "manufacturing.step2text": "Material, bobina, revestimento, terminais e embalagem acompanham o método produtivo.",
        "manufacturing.step3title": "Da amostra ao volume",
        "manufacturing.step3text": "Amostras, documentos e lotes seguem uma única especificação aprovada.",
        "manufacturing.stat1": "Linhas automáticas",
        "manufacturing.stat2": "Anos de experiência",
        "manufacturing.stat3": "Suporte de processo",
        "quality.eyebrow": "QUALIDADE E CONFORMIDADE",
        "quality.title1": "Qualidade é processo,",
        "quality.title2": "não inspeção final.",
        "quality.lede": "Nosso sistema cobre materiais recebidos, produção, inspeção e registros de lote. Informações de certificação estão disponíveis para avaliação.",
        "quality.iso": "Sistema de gestão da qualidade",
        "quality.ul": "Certificação de segurança para resistores de fio",
        "quality.cqc": "Série com certificação de produto",
        "quality.rohs": "Ensaios de conformidade ambiental",
        "quality.note": "Escopo e validade dos certificados são confirmados por produto e modelo antes do pedido.",
        "quality.imageLabel": "PROCESSO / CONTROLE / RASTREABILIDADE",
        "applications.eyebrow": "APLICAÇÕES",
        "applications.title1": "Confiável onde",
        "applications.title2": "o circuito importa.",
        "applications.lede": "Da eletrônica compacta a sistemas de energia, a seleção começa pelo ambiente real de operação.",
        "application.electronics": "Eletrônica de consumo",
        "application.electronicsText": "Fontes · eletrodomésticos · dispositivos inteligentes",
        "application.industrial": "Controle industrial",
        "application.industrialText": "Acionamentos · energia · automação",
        "application.automotive": "Eletrônica automotiva",
        "application.automotiveText": "Iluminação · controle · energia de bordo",
        "application.energy": "Energia renovável",
        "application.energyText": "Solar · armazenamento · sistemas eólicos",
        "export.eyebrow": "TRABALHE CONOSCO",
        "export.title1": "Uma linha direta",
        "export.title2": "do requisito à produção.",
        "export.lede": "Criado para compradores internacionais que precisam de comunicação clara, respostas técnicas práticas e acompanhamento confiável.",
        "export.step1title": "Envie sua necessidade",
        "export.step1text": "Compartilhe as condições do circuito, quantidade e desenhos ou referências.",
        "export.step2title": "Definimos a solução",
        "export.step2text": "Respondemos com a construção adequada, pontos técnicos e próximos passos.",
        "export.step3title": "Confirme amostra e volume",
        "export.step3text": "Da amostra aprovada à produção em série repetível.",
        "rfq.eyebrow": "SOLICITAR COTAÇÃO",
        "rfq.title1": "Conte-nos o que",
        "rfq.title2": "o circuito precisa.",
        "rfq.lede": "Envie as informações essenciais e nossa equipe ajudará a confirmar o resistor, a modelagem e o fornecimento.",
        "rfq.phone": "Telefone",
        "rfq.email": "E-mail",
        "rfq.factory": "Endereço de produção",
        "rfq.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, China",
        "rfq.directLabel": "CONTATO DIRETO COM A FÁBRICA",
        "rfq.directText": "O formulário prepara um e-mail direto. Envie pelo aplicativo de e-mail ou escreva para nós.",
        "form.name": "Nome *",
        "form.company": "Empresa",
        "form.email": "E-mail comercial *",
        "form.country": "País / região",
        "form.product": "Produto de interesse",
        "form.selectProduct": "Selecione um produto",
        "form.quantity": "Quantidade estimada",
        "form.message": "Requisito *",
        "form.messagePlaceholder": "Resistência, potência, tolerância, dimensões, quantidade e prazo desejado...",
        "form.submit": "Preparar e-mail de cotação",
        "form.copy": "Copiar cotação",
        "form.disclaimer": "Este site não armazena suas informações. Ao enviar, seu aplicativo de e-mail abrirá a cotação para szxyhx@163.com.",
        "form.opening": "Abrindo seu aplicativo de e-mail. Se não abrir, escreva para szxyhx@163.com.",
        "form.copied": "Cotação copiada",
        "form.copyError": "Não foi possível copiar. Envie o e-mail diretamente.",
        "form.mailSubject": "Solicitação do site",
        "footer.description": "A Shenzhen Xianyang Huaxing Electromechanical Co., Ltd. fabrica componentes eletrônicos desde 2006.",
        "footer.products": "Produtos",
        "footer.wirewound": "Resistores de fio",
        "footer.film": "Resistores de filme",
        "footer.custom": "Modelagem personalizada",
        "footer.rfq": "Solicitar cotação",
        "footer.company": "Empresa",
        "footer.chinese": "Site em chinês",
        "footer.contact": "Contato",
        "footer.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, China",
        "footer.rights": "Todos os direitos reservados."
      }
    },
    fr: {
      name: "Français",
      code: "FR",
      lang: "fr",
      title: "Xianyang Huaxing | Fabricant de résistances de précision",
      description: "Fabricant de résistances bobinées et à couche à Shenzhen, Chine. Accompagnement des acheteurs internationaux de l'échantillon à la série.",
      messages: {
        "utility.direct": "Fabricant direct · Shenzhen, Chine",
        "utility.cert": "ISO 9001 · UL · CQC · RoHS",
        "utility.since": "Depuis 2006",
        "nav.products": "Produits",
        "nav.manufacturing": "Fabrication",
        "nav.quality": "Qualité",
        "nav.applications": "Applications",
        "nav.contact": "Contact",
        "nav.quote": "Demander un devis",
        "hero.kicker": "20 ans d'ingénierie de résistances",
        "hero.title1": "La précision,",
        "hero.title2": "à chaque ohm.",
        "hero.lede": "Des résistances bobinées non inductives aux résistances à couche de précision, nous concevons des composants fiables pour l'énergie, l'industrie, l'automobile et les applications renouvelables.",
        "hero.ctaPrimary": "Découvrir les produits",
        "hero.ctaSecondary": "Lancer une demande",
        "hero.metric1": "Lignes automatisées",
        "hero.metric2": "Familles principales",
        "hero.metric3": "Années d'expérience",
        "hero.callout1": "Structure céramique / couche métallique",
        "hero.callout2": "Mise en forme des pattes sur mesure",
        "hero.visualTitle": "Conçue pour votre circuit",
        "hero.visualText": "Gammes standard et constructions spécifiques au projet.",
        "hero.footer1": "BOBINÉES",
        "hero.footer2": "RÉSISTANCES À COUCHE",
        "hero.footer3": "ASSEMBLAGE SUR MESURE",
        "hero.footer4": "SUPPORT OEM / ODM",
        "feature.1title": "Fabricant direct",
        "feature.1text": "Production, ingénierie et qualité sur un même site.",
        "feature.2title": "Sélection par application",
        "feature.2text": "Nous validons le circuit avant de valider le composant.",
        "feature.3title": "Documentation qualité",
        "feature.3text": "Certificats et fiches matériaux disponibles sur demande.",
        "feature.4title": "Support export",
        "feature.4text": "Une communication claire du devis à la livraison.",
        "products.eyebrow": "SYSTÈMES PRODUITS",
        "products.title1": "La bonne résistance",
        "products.title2": "pour le monde réel.",
        "products.lede": "Choisissez selon la construction et l'application. Nos ingénieurs transforment résistance, puissance, tolérance, encombrement et conditionnement en une spécification prête à produire.",
        "filters.all": "Tous les produits",
        "filters.wirewound": "Bobinées",
        "filters.film": "Couche",
        "filters.assembly": "Formage et bande",
        "filters.count": "séries affichées",
        "common.request": "Demander les détails →",
        "product.nonInductive.name": "Résistance bobinée non inductive",
        "product.nonInductive.text": "Une structure à faible inductance pour les circuits haute fréquence, impulsionnels et à haute stabilité.",
        "product.nonInductive.tag": "Forte puissance · Sur mesure",
        "product.wirewound.name": "Résistance bobinée",
        "product.wirewound.text": "Fil d'alliage sur noyau isolé pour une tenue en puissance durable et des performances électriques stables.",
        "product.wirewound.tag": "Résistante à la chaleur · Industrielle",
        "product.rxm.name": "Résistance bobinée MELF RXM",
        "product.rxm.text": "Construction cylindrique à double embout pour chargeurs, alimentations et éclairage économe.",
        "product.rxm.tag": "1Ω—100Ω · UL1412",
        "product.carbon.name": "Résistance à couche de carbone",
        "product.carbon.text": "Une famille éprouvée et économique pour les circuits électroniques généraux et les volumes de production.",
        "product.carbon.tag": "Économique · Bande et bobine",
        "product.metal.name": "Résistance à couche métallique",
        "product.metal.text": "Une stabilité thermique et un faible bruit pour le contrôle de précision, la mesure et les circuits de signal.",
        "product.metal.tag": "Précision · Stable",
        "product.oxide.name": "Résistance à couche d'oxyde métallique",
        "product.oxide.text": "Conçue pour les températures élevées et les charges exigeantes en alimentation, électroménager et industrie.",
        "product.oxide.tag": "Résistante à la chaleur · Impulsions",
        "product.forming.name": "Formage et assemblage des pattes",
        "product.forming.text": "Cintrage, formage et bande adaptés au projet pour intégrer directement le composant à votre ligne.",
        "product.forming.tag": "Sur plan · Prêt pour la série",
        "product.highPower.name": "Résistance de forte puissance",
        "product.highPower.text": "Plusieurs formats pour l'alimentation, le freinage et le contrôle industriel sous fortes contraintes thermiques.",
        "product.highPower.tag": "Forte charge · Multi-format",
        "manufacturing.eyebrow": "FABRICATION",
        "manufacturing.title1": "La régularité se conçoit,",
        "manufacturing.title2": "elle ne se promet pas.",
        "manufacturing.lede": "Huit lignes automatisées, des procédés maîtrisés et un support technique concret rendent la production répétitive prévisible.",
        "manufacturing.caption1": "BOBINAGE AUTOMATISÉ",
        "manufacturing.caption2": "ATELIER DE PRODUCTION",
        "manufacturing.caption3": "ENROULEMENT ET EMBALLAGE",
        "manufacturing.copy": "Vingt ans de savoir-faire traduits en un procédé fiable pour votre projet.",
        "manufacturing.step1title": "Définir l'application",
        "manufacturing.step1text": "Résistance, puissance, tolérance, environnement et contraintes de montage sont étudiés ensemble.",
        "manufacturing.step2title": "Valider la construction",
        "manufacturing.step2text": "Matériau, bobinage, revêtement, pattes et emballage sont adaptés au mode de production.",
        "manufacturing.step3title": "De l'échantillon à la série",
        "manufacturing.step3text": "Échantillons, documents et lots suivent une spécification validée commune.",
        "manufacturing.stat1": "Lignes automatiques",
        "manufacturing.stat2": "Années d'expérience",
        "manufacturing.stat3": "Support procédé",
        "quality.eyebrow": "QUALITÉ ET CONFORMITÉ",
        "quality.title1": "La qualité est un procédé,",
        "quality.title2": "pas un contrôle final.",
        "quality.lede": "Notre système couvre les matières entrantes, la production, les contrôles et les dossiers de lot. Les informations de certification sont disponibles pour examen.",
        "quality.iso": "Système de management de la qualité",
        "quality.ul": "Certification de sécurité des bobinées",
        "quality.cqc": "Séries certifiées produit",
        "quality.rohs": "Essais de conformité environnementale",
        "quality.note": "Le périmètre et la validité des certificats sont confirmés par produit et référence avant commande.",
        "quality.imageLabel": "PROCÉDÉ / CONTRÔLE / TRAÇABILITÉ",
        "applications.eyebrow": "APPLICATIONS",
        "applications.title1": "Fiabilité là où",
        "applications.title2": "le circuit compte.",
        "applications.lede": "De l'électronique compacte aux systèmes d'énergie, le choix du composant commence par l'environnement réel d'utilisation.",
        "application.electronics": "Électronique grand public",
        "application.electronicsText": "Chargeurs · électroménager · objets connectés",
        "application.industrial": "Contrôle industriel",
        "application.industrialText": "Variateurs · alimentation · automatisation",
        "application.automotive": "Électronique automobile",
        "application.automotiveText": "Éclairage · contrôle · alimentation embarquée",
        "application.energy": "Énergie renouvelable",
        "application.energyText": "Solaire · stockage · systèmes éoliens",
        "export.eyebrow": "TRAVAILLER AVEC NOUS",
        "export.title1": "Une ligne directe",
        "export.title2": "du besoin à la production.",
        "export.lede": "Pensé pour les acheteurs internationaux qui recherchent une communication claire, des réponses techniques utiles et un suivi fiable.",
        "export.step1title": "Envoyez votre besoin",
        "export.step1text": "Partagez les conditions du circuit, la quantité cible et tout plan ou référence.",
        "export.step2title": "Nous définissons la solution",
        "export.step2text": "Nous répondons avec une construction adaptée, les points techniques et les prochaines étapes.",
        "export.step3title": "Validez l'échantillon et le volume",
        "export.step3text": "De l'échantillon approuvé à une production répétable en série.",
        "rfq.eyebrow": "DEMANDER UN DEVIS",
        "rfq.title1": "Dites-nous ce dont",
        "rfq.title2": "le circuit a besoin.",
        "rfq.lede": "Envoyez les informations essentielles et notre équipe vous aidera à valider la résistance, le formage et le circuit d'approvisionnement.",
        "rfq.phone": "Téléphone",
        "rfq.email": "E-mail",
        "rfq.factory": "Adresse de production",
        "rfq.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, Chine",
        "rfq.directLabel": "CONTACT DIRECT USINE",
        "rfq.directText": "Le formulaire prépare un e-mail direct. Envoyez-le depuis votre messagerie ou écrivez-nous directement.",
        "form.name": "Nom *",
        "form.company": "Société",
        "form.email": "E-mail professionnel *",
        "form.country": "Pays / région",
        "form.product": "Produit recherché",
        "form.selectProduct": "Sélectionnez un produit",
        "form.quantity": "Quantité estimée",
        "form.message": "Besoin *",
        "form.messagePlaceholder": "Résistance, puissance, tolérance, dimensions, quantité et échéance souhaitée...",
        "form.submit": "Préparer l'e-mail de devis",
        "form.copy": "Copier la demande",
        "form.disclaimer": "Ce site ne stocke pas vos informations. L'envoi ouvre votre messagerie avec la demande adressée à szxyhx@163.com.",
        "form.opening": "Ouverture de votre messagerie. Si elle ne s'ouvre pas, écrivez à szxyhx@163.com.",
        "form.copied": "Demande copiée",
        "form.copyError": "Copie impossible. Envoyez directement un e-mail.",
        "form.mailSubject": "Demande depuis le site",
        "footer.description": "Shenzhen Xianyang Huaxing Electromechanical Co., Ltd. fabrique des composants électroniques depuis 2006.",
        "footer.products": "Produits",
        "footer.wirewound": "Résistances bobinées",
        "footer.film": "Résistances à couche",
        "footer.custom": "Formage sur mesure",
        "footer.rfq": "Demander un devis",
        "footer.company": "Société",
        "footer.chinese": "Site en chinois",
        "footer.contact": "Contact",
        "footer.address": "168 Honghu Road, Yanluo, Bao'an, Shenzhen, Chine",
        "footer.rights": "Tous droits réservés."
      }
    }
  };

  const supportedLocales = ["en", "es-mx", "vi", "pt-br", "es-ar", "fr"];
  const query = new URLSearchParams(window.location.search);
  let activeLocale = supportedLocales.includes(query.get("lang")) ? query.get("lang") : "en";
  const defaultText = new Map();
  const defaultPlaceholder = new Map();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    defaultText.set(node, node.textContent);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    defaultPlaceholder.set(node, node.placeholder);
  });

  function message(key) {
    return translations[activeLocale]?.messages?.[key]
      || defaultText.get(document.querySelector(`[data-i18n="${key}"]`))
      || key;
  }

  function applyLocale(locale, updateUrl = true) {
    activeLocale = supportedLocales.includes(locale) ? locale : "en";
    const localeData = translations[activeLocale];

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = localeData?.messages?.[key] || defaultText.get(node) || node.textContent;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      node.placeholder = localeData?.messages?.[key] || defaultPlaceholder.get(node) || node.placeholder;
    });

    document.documentElement.lang = localeData?.lang || "en";
    document.title = localeData?.title || "Xianyang Huaxing | Precision Resistor Manufacturer";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = localeData?.description || "Xianyang Huaxing is a Shenzhen-based resistor manufacturer with 20 years of experience in wirewound, film, high-power and custom resistor solutions for global buyers.";
    }

    const languageName = document.querySelector("[data-language-name]");
    const languageCode = document.querySelector("[data-language-code]");
    if (languageName) languageName.textContent = localeData?.name || "English";
    if (languageCode) languageCode.textContent = localeData?.code || "EN";

    document.querySelectorAll("[data-locale]").forEach((button) => {
      button.classList.toggle("is-current", button.dataset.locale === activeLocale);
    });

    if (updateUrl) {
      const nextUrl = new URL(window.location.href);
      if (activeLocale === "en") nextUrl.searchParams.delete("lang");
      else nextUrl.searchParams.set("lang", activeLocale);
      window.history.replaceState(null, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
    }
    document.querySelectorAll("[data-localized-home]").forEach((link) => {
      link.href = activeLocale === "en" ? "index.html" : `index.html?lang=${activeLocale}`;
    });
    closeLanguageMenu();
  }

  function closeLanguageMenu() {
    const trigger = document.querySelector("[data-language-trigger]");
    const menu = document.querySelector("[data-language-menu]");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (menu) menu.hidden = true;
  }

  function initLanguagePicker() {
    const picker = document.querySelector("[data-language-picker]");
    const trigger = document.querySelector("[data-language-trigger]");
    const menu = document.querySelector("[data-language-menu]");
    if (!picker || !trigger || !menu) return;

    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      menu.hidden = open;
    });

    picker.querySelectorAll("[data-locale]").forEach((button) => {
      button.addEventListener("click", () => applyLocale(button.dataset.locale));
    });

    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) closeLanguageMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLanguageMenu();
    });
  }

  function initFilters() {
    const buttons = Array.from(document.querySelectorAll("[data-global-filter]"));
    const cards = Array.from(document.querySelectorAll(".global-product"));
    const count = document.querySelector("[data-product-count]");
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.globalFilter;
        let visible = 0;
        cards.forEach((card) => {
          const show = selected === "all" || card.dataset.group === selected;
          card.classList.toggle("is-filtered", !show);
          if (show) visible += 1;
        });
        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        if (count) count.textContent = String(visible);
      });
    });
  }

  function initProductRequests() {
    const select = document.querySelector("#global-product");
    document.querySelectorAll("[data-rfq-product]").forEach((button) => {
      button.addEventListener("click", () => {
        if (select) select.value = button.dataset.rfqProduct;
        document.querySelector("#rfq")?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => select?.focus({ preventScroll: true }), 500);
      });
    });
  }

  function createMailBody(data) {
    const selectedOption = document.querySelector("#global-product option:checked");
    return [
      message("form.mailSubject"),
      "",
      `${message("form.name").replace(" *", "")}: ${data.get("name") || "-"}`,
      `${message("form.company")}: ${data.get("company") || "-"}`,
      `${message("form.email").replace(" *", "")}: ${data.get("email") || "-"}`,
      `${message("form.country")}: ${data.get("country") || "-"}`,
      `${message("form.product")}: ${selectedOption?.textContent || "-"}`,
      `${message("form.quantity")}: ${data.get("quantity") || "-"}`,
      "",
      `${message("form.message").replace(" *", "")}:`,
      data.get("message") || ""
    ].join("\n");
  }

  function initGlobalForm() {
    const form = document.querySelector("#global-inquiry-form");
    if (!form) return;
    const status = form.querySelector("[data-global-form-status]");
    const copyButton = form.querySelector("[data-global-copy]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `${message("form.mailSubject")} — ${data.get("company") || data.get("name") || "RFQ"}`;
      const body = createMailBody(data);
      if (status) {
        status.textContent = message("form.opening");
        status.classList.add("is-visible");
      }
      window.location.href = `mailto:szxyhx@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    copyButton?.addEventListener("click", async () => {
      if (!form.reportValidity()) return;
      try {
        await navigator.clipboard.writeText(createMailBody(new FormData(form)));
        copyButton.textContent = message("form.copied");
      } catch {
        copyButton.textContent = message("form.copyError");
      }
      window.setTimeout(() => {
        copyButton.textContent = message("form.copy");
      }, 2400);
    });
  }

  function init() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
    initLanguagePicker();
    initFilters();
    initProductRequests();
    initGlobalForm();
    applyLocale(activeLocale, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
