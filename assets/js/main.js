(function () {
  "use strict";

  const products = window.HX_PRODUCTS || [];
  const productById = new Map(products.map((product) => [product.id, product]));
  const arrowIcon = `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  function safeText(value) {
    const node = document.createElement("span");
    node.textContent = value == null ? "" : String(value);
    return node.innerHTML;
  }

  function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("#primary-nav");

    const updateHeader = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (!toggle || !nav) return;

    const closeNav = () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "打开导航菜单");
    };

    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeNav();
    });
  }

  function initReveal() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element) => element.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" }
    );

    elements.forEach((element) => observer.observe(element));
    // Keep content available even if a fast programmatic scroll or browser quirk skips an observer callback.
    window.setTimeout(() => {
      elements.forEach((element) => {
        element.classList.remove("reveal-pending");
        element.classList.add("is-visible");
      });
    }, 1400);
  }

  function createProductCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";
    article.dataset.productId = product.id;
    article.innerHTML = `
      <button class="product-card-link" type="button" aria-label="查看${safeText(product.name)}详情">
        <span class="product-media">
          <span class="product-badge">${safeText(product.badge)}</span>
          <img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy" width="1200" height="947">
        </span>
        <span class="product-copy">
          <span class="product-family">${safeText(product.en)}</span>
          <strong>${safeText(product.name)}</strong>
          <span class="product-summary">${safeText(product.summary)}</span>
          <span class="product-tags">${product.tags
            .slice(0, 3)
            .map((tag) => `<span>${safeText(tag)}</span>`)
            .join("")}</span>
          <span class="product-card-footer">
            <span>查看参数与应用</span>
            ${arrowIcon}
          </span>
        </span>
      </button>`;
    return article;
  }

  function initProductGrid() {
    const grid = document.querySelector("#product-grid");
    if (!grid) return;

    const searchInput = document.querySelector("#product-search");
    const filterButtons = Array.from(document.querySelectorAll("[data-product-filter]"));
    const resultCount = document.querySelector("#product-result-count");
    const emptyState = document.querySelector("#product-empty");
    const clearButton = document.querySelector("#clear-product-filters");
    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get("category") || "all";
    let query = params.get("q") || "";

    if (searchInput && query) searchInput.value = query;
    if (!filterButtons.some((button) => button.dataset.productFilter === activeCategory)) {
      activeCategory = "all";
    }

    function render() {
      const normalized = query.trim().toLowerCase();
      const filtered = products.filter((product) => {
        const matchesCategory = activeCategory === "all" || product.categoryKey === activeCategory;
        const haystack = [product.name, product.en, product.category, product.summary, ...product.tags].join(" ").toLowerCase();
        return matchesCategory && (!normalized || haystack.includes(normalized));
      });

      grid.replaceChildren(...filtered.map(createProductCard));
      filterButtons.forEach((button) => {
        const selected = button.dataset.productFilter === activeCategory;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });

      if (resultCount) resultCount.textContent = String(filtered.length);
      if (emptyState) emptyState.hidden = filtered.length > 0;

      const nextParams = new URLSearchParams();
      if (activeCategory !== "all") nextParams.set("category", activeCategory);
      if (query.trim()) nextParams.set("q", query.trim());
      const nextUrl = `${window.location.pathname}${nextParams.toString() ? `?${nextParams}` : ""}`;
      window.history.replaceState(null, "", nextUrl);
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.productFilter;
        render();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        query = searchInput.value;
        render();
      });
    }

    if (clearButton) {
      clearButton.addEventListener("click", () => {
        activeCategory = "all";
        query = "";
        if (searchInput) searchInput.value = "";
        render();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && searchInput && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
        event.preventDefault();
        searchInput.focus();
      }
    });

    render();

    const productId = params.get("product");
    if (productId && productById.has(productId)) {
      window.setTimeout(() => openProductDialog(productById.get(productId)), 80);
    }
  }

  function initProductDialogs() {
    const dialog = document.createElement("dialog");
    dialog.className = "product-dialog";
    dialog.id = "product-detail-dialog";
    dialog.setAttribute("aria-labelledby", "product-dialog-title");
    document.body.append(dialog);
    let lastTrigger = null;

    function closeDialog() {
      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
      document.body.classList.remove("dialog-open");
      if (lastTrigger) lastTrigger.focus();
    }

    window.openProductDialog = function (product) {
      lastTrigger = document.activeElement;
      const modalImageAlt = `${product.name}产品图`;
      dialog.innerHTML = `
        <button class="dialog-close" type="button" data-dialog-close aria-label="关闭产品详情">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
        <div class="dialog-grid">
          <div class="dialog-media">
            <span class="product-badge">${safeText(product.badge)}</span>
            <img src="${safeText(product.image)}" alt="${safeText(modalImageAlt)}">
            <p>产品示意图，具体外观、尺寸与包装以确认样品及规格书为准。</p>
          </div>
          <div class="dialog-content">
            <span class="eyebrow">${safeText(product.category)} · ${safeText(product.en)}</span>
            <h2 id="product-dialog-title">${safeText(product.name)}</h2>
            <p class="dialog-summary">${safeText(product.summary)}</p>
            <ul class="feature-list">
              ${product.features.map((feature) => `<li>${safeText(feature)}</li>`).join("")}
            </ul>
            <dl class="spec-list">
              ${product.specs.map(([term, detail]) => `<div><dt>${safeText(term)}</dt><dd>${safeText(detail)}</dd></div>`).join("")}
            </dl>
            <div class="dialog-actions">
              <a class="button button-primary" href="contact.html?product=${encodeURIComponent(product.id)}#inquiry">获取样品与报价${arrowIcon}</a>
              <a class="button button-quiet" href="mailto:szxyhx@163.com?subject=${encodeURIComponent(`产品咨询：${product.name}`)}">咨询工程师</a>
            </div>
            <p class="fine-print">页面参数为常用信息示例；量产规格、认证范围及交付条件请以双方确认文件为准。</p>
          </div>
        </div>`;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      document.body.classList.add("dialog-open");
      dialog.querySelector("[data-dialog-close]").focus();
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-product-id]");
      if (trigger) {
        const product = productById.get(trigger.dataset.productId);
        if (product) {
          event.preventDefault();
          window.openProductDialog(product);
        }
        return;
      }

      if (event.target.closest("[data-dialog-close]")) {
        closeDialog();
      }
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog();
    });

    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog();
    });
  }

  function initInquiryForm() {
    const form = document.querySelector("#inquiry-form");
    if (!form) return;

    const productSelect = form.querySelector("#inquiry-product");
    if (productSelect) {
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "请选择产品或服务";
      productSelect.append(placeholder);
      products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.append(option);
      });
    }

    const selectedId = new URLSearchParams(window.location.search).get("product");
    if (selectedId && productById.has(selectedId) && productSelect) {
      productSelect.value = selectedId;
    }

    function createMailBody(data) {
      const selectedProduct = productById.get(data.get("product"));
      return [
        "您好，我希望咨询以下产品/服务：",
        "",
        `联系人：${data.get("name") || "未填写"}`,
        `公司：${data.get("company") || "未填写"}`,
        `电话/微信：${data.get("contact") || "未填写"}`,
        `产品：${selectedProduct ? selectedProduct.name : "未选择"}`,
        `预计数量：${data.get("quantity") || "待确认"}`,
        "",
        "需求说明：",
        data.get("message") || "请与我联系，进一步确认规格与方案。",
        "",
        "（此邮件由咸阳华星官网询价表单生成）"
      ].join("\n");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `华星机电询价｜${data.get("company") || data.get("name") || "新客户"}`;
      const body = createMailBody(data);
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "正在打开邮件客户端，如未自动打开，请直接发送至 szxyhx@163.com。";
        status.classList.add("is-visible");
      }
      window.location.href = `mailto:szxyhx@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    const copyButton = form.querySelector("[data-copy-inquiry]");
    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        if (!form.reportValidity()) return;
        const body = createMailBody(new FormData(form));
        try {
          await navigator.clipboard.writeText(body);
          copyButton.textContent = "询价内容已复制";
          window.setTimeout(() => {
            copyButton.textContent = "复制询价内容";
          }, 2200);
        } catch {
          copyButton.textContent = "复制失败，请手动填写邮件";
        }
      });
    }
  }

  function initCopyButtons() {
    document.querySelectorAll("[data-copy-text]").forEach((button) => {
      button.addEventListener("click", async () => {
        const value = button.dataset.copyText;
        if (!value) return;
        const original = button.getAttribute("aria-label") || button.textContent;
        try {
          await navigator.clipboard.writeText(value);
          button.setAttribute("aria-label", "已复制");
          button.classList.add("is-copied");
          window.setTimeout(() => {
            button.setAttribute("aria-label", original);
            button.classList.remove("is-copied");
          }, 1800);
        } catch {
          // The phone number remains visible and clickable if clipboard access is unavailable.
        }
      });
    });
  }

  function initTimeline() {
    document.querySelectorAll("[data-timeline]").forEach((timeline) => {
      const items = Array.from(timeline.querySelectorAll(".timeline-item"));
      if (!items.length) return;
      const update = () => {
        const center = window.innerHeight * 0.62;
        let closest = items[0];
        let distance = Infinity;
        items.forEach((item) => {
          const nextDistance = Math.abs(item.getBoundingClientRect().top - center);
          if (nextDistance < distance) {
            closest = item;
            distance = nextDistance;
          }
        });
        items.forEach((item) => item.classList.toggle("is-current", item === closest));
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
    });
  }

  function init() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
    initHeader();
    initReveal();
    initProductDialogs();
    initProductGrid();
    initInquiryForm();
    initCopyButtons();
    initTimeline();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
