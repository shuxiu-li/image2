(() => {
  'use strict';

  const PIC_BASE = 'https://picsum.photos/seed/';

  const CATEGORIES = ['全部', '油画', '水墨', '雕塑', '摄影', '数字艺术'];

  const ARTWORKS = [
    { id: 1,  title: '候风 · 第七日', artist: '沈屿',   year: 2025, medium: '布面油画',       category: '油画',     ratio: [3, 4], desc: '颜料干燥周期长达四个月，海风携带的盐分在表层析出白色结晶，画面在展期内仍会缓慢改变颜色。' },
    { id: 2,  title: '潮汐备忘',      artist: '沈屿',   year: 2024, medium: '木板丙烯',       category: '油画',     ratio: [1, 1], desc: '以十二次涨潮的时刻为刻度，在木板上反复涂刮，留下一层近乎透明的灰色沉积。' },
    { id: 3,  title: '长夏未尽',      artist: '陆知遥', year: 2023, medium: '布面油画',       category: '油画',     ratio: [4, 5], desc: '厚涂的赭石与未干的钛白相互渗透，边缘始终无法确定，像夏天迟迟不肯结束的午后。' },
    { id: 4,  title: '两次日落之间',  artist: '陆知遥', year: 2026, medium: '亚麻布 · 蜡',    category: '油画',     ratio: [4, 3], desc: '蜡在加热后渗入纤维，冷却时把光锁在织物内部，从不同角度会看到两种完全不同的橙。' },
    { id: 5,  title: '山骨',          artist: '祁允',   year: 2022, medium: '纸本水墨',       category: '水墨',     ratio: [3, 4], desc: '以枯笔反复皴擦同一处山脊，直到纸纤维起毛，墨色由内向外渗出，形成石头的肌理。' },
    { id: 6,  title: '空谷回响',      artist: '祁允',   year: 2024, medium: '绢本设色',       category: '水墨',     ratio: [4, 5], desc: '留白占据画面七成，声音被暗示在未被涂染的部分，观者的视线成为唯一的回声。' },
    { id: 7,  title: '雨前',          artist: '白露微', year: 2025, medium: '纸本水墨',       category: '水墨',     ratio: [1, 1], desc: '在纸面尚湿时落墨，让水痕自行决定云的形状，艺术家只负责选择停笔的时机。' },
    { id: 8,  title: '竹影三重',      artist: '白露微', year: 2023, medium: '水墨 · 拼贴',    category: '水墨',     ratio: [4, 3], desc: '三段不同年代的竹影拓片并置，中间的缝隙被刻意保留，提示时间本身的断层。' },
    { id: 9,  title: '静默的重量',    artist: '韩澈',   year: 2026, medium: '花岗岩 · 钢',    category: '雕塑',     ratio: [3, 4], desc: '一块未经打磨的花岗岩被三点式钢结构托起，看似随时会滑落，实际受力完全平衡。' },
    { id: 10, title: '折光体 No.4',   artist: '韩澈',   year: 2024, medium: '铸造玻璃',       category: '雕塑',     ratio: [1, 1], desc: '玻璃在冷却过程中被人为打断又重新熔合，内部的裂纹成为永久保存的闪电。' },
    { id: 11, title: '悬置的呼吸',    artist: '邹宁',   year: 2025, medium: '铜 · 麻绳',      category: '雕塑',     ratio: [4, 5], desc: '三十六枚铜片以麻绳串联，随展厅气流轻微摆动，每隔几分钟发出一声极轻的碰撞。' },
    { id: 12, title: '无人站台',      artist: '程亦',   year: 2023, medium: '艺术微喷',       category: '摄影',     ratio: [4, 3], desc: '凌晨四点拍摄于已停用的支线车站，长曝光让站牌上的字迹彻底糊成一团白。' },
    { id: 13, title: '窗格研究 Ⅻ',    artist: '程亦',   year: 2024, medium: '明胶银盐',       category: '摄影',     ratio: [3, 4], desc: '同一扇窗在一年中十二个正午的样子，光斑的移动路径构成一张看不见的时间表。' },
    { id: 14, title: '尘',            artist: '苏见月', year: 2025, medium: '数码输出',       category: '摄影',     ratio: [1, 1], desc: '以微距镜头拍摄阳光中悬浮的颗粒，放大后每一粒都拥有独立的轮廓与阴影。' },
    { id: 15, title: '潮间带',        artist: '苏见月', year: 2026, medium: '数码输出',       category: '摄影',     ratio: [4, 5], desc: '退潮后裸露的滩涂在十分钟里呈现出从镜面到龟裂的完整变化过程。' },
    { id: 16, title: '生长算法',      artist: '林溯',   year: 2026, medium: '实时生成影像',   category: '数字艺术', ratio: [4, 3], desc: '作品根据展厅内参观者的停留时长实时演算，人流越密集，屏幕上的枝干生长越快。' },
    { id: 17, title: '像素之外的海',  artist: '林溯',   year: 2025, medium: '交互装置',       category: '数字艺术', ratio: [3, 4], desc: '将一段海浪录像不断降采样至只剩十六种颜色，再交给观众用滑块尝试还原。' },
    { id: 18, title: '错误花园',      artist: '温以安', year: 2024, medium: '生成图像',       category: '数字艺术', ratio: [1, 1], desc: '由模型在训练失败阶段产出的图像整理而成，畸变的花瓣反而拥有真实植物没有的对称。' },
    { id: 19, title: '延迟显影',      artist: '温以安', year: 2026, medium: '投影 · 传感器',  category: '数字艺术', ratio: [4, 5], desc: '观众的影子被延迟七秒投射在墙上，人与自己的影像始终保持着无法弥合的距离。' },
    { id: 20, title: '候风 · 初雪',   artist: '沈屿',   year: 2026, medium: '布面油画',       category: '油画',     ratio: [3, 4], desc: '「候风」系列最新一件，创作期间遭遇了十年一遇的寒潮，颜料表面出现了细密的冰裂纹。' },
    { id: 21, title: '回声地形',      artist: '邹宁',   year: 2024, medium: '树脂 · 声学元件', category: '雕塑',   ratio: [4, 3], desc: '树脂内部封存有微型扬声器，走近时能听见被树脂固化前那一刻的环境声。' },
    { id: 22, title: '夜航',          artist: '程亦',   year: 2026, medium: '数码输出',       category: '摄影',     ratio: [3, 4], desc: '在渡轮甲板上以手持长曝光拍摄，整条航线被压缩成一条断续的光带。' },
    { id: 23, title: '层积',          artist: '祁允',   year: 2026, medium: '纸本水墨',       category: '水墨',     ratio: [4, 5], desc: '一百二十层淡墨依次叠加，每一层都必须完全干透，整件作品耗时十一个月。' },
    { id: 24, title: '未命名（蓝）',  artist: '陆知遥', year: 2022, medium: '布面油画',       category: '油画',     ratio: [1, 1], desc: '艺术家拒绝为这件作品命名，只允许用颜料的色号称呼它：群青 PB29。' }
  ];

  const MARQUEE_WORDS = [
    '光的十四种停顿', '墨的呼吸', '石与间隙', '像素之外',
    '常设展全年免费开放', '每周五夜间特展半价', '线上展厅 · 全日开放'
  ];

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const randomKey = () => Math.random().toString(36).slice(2, 9);

  function seedOf(item) {
    return item.seed || `qi-art-${String(item.id).padStart(3, '0')}`;
  }

  function artworkUrl(item, width) {
    const [rw, rh] = item.ratio;
    const height = Math.round((width * rh) / rw);
    return `${PIC_BASE}${encodeURIComponent(seedOf(item))}/${width}/${height}`;
  }

  /* ---------- marquee ---------- */

  function initMarquee() {
    const track = $('#marqueeTrack');
    if (!track) return;
    const html = MARQUEE_WORDS.map((w) => `<span>${w}</span>`).join('');
    track.innerHTML = html + html;
  }

  /* ---------- filters ---------- */

  let activeFilter = '全部';

  function initFilters() {
    const wrap = $('#filters');
    if (!wrap) return;

    wrap.innerHTML = CATEGORIES.map((cat) => {
      const count = cat === '全部' ? ARTWORKS.length : ARTWORKS.filter((a) => a.category === cat).length;
      return `<button class="filter-btn${cat === activeFilter ? ' is-active' : ''}" type="button" data-filter="${cat}" aria-pressed="${cat === activeFilter}">
                ${cat}<sup>${count}</sup>
              </button>`;
    }).join('');

    wrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      $$('.filter-btn', wrap).forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      renderGallery();
    });
  }

  /* ---------- gallery ---------- */

  function visibleArtworks() {
    return activeFilter === '全部'
      ? ARTWORKS
      : ARTWORKS.filter((a) => a.category === activeFilter);
  }

  function renderGallery() {
    const grid = $('#galleryGrid');
    const empty = $('#galleryEmpty');
    if (!grid) return;

    const list = visibleArtworks();
    grid.innerHTML = list.map((item, i) => {
      const [rw, rh] = item.ratio;
      return `<button class="art-card" type="button" data-id="${item.id}" style="animation-delay:${Math.min(i * 40, 400)}ms">
                <span class="art-frame" style="aspect-ratio:${rw} / ${rh}">
                  <img src="${artworkUrl(item, 640)}" alt="${item.title} · ${item.artist}" loading="lazy" decoding="async">
                  <span class="art-veil">查看大图 <span aria-hidden="true">→</span></span>
                </span>
                <span class="art-info">
                  <h3>${item.title}</h3>
                  <p>${item.artist} · ${item.year}</p>
                  <span class="art-kind">${item.category} / ${item.medium}</span>
                </span>
              </button>`;
    }).join('');

    if (empty) empty.hidden = list.length > 0;
  }

  /* ---------- lightbox ---------- */

  const lightbox = {
    el: null,
    list: [],
    index: 0,
    lastFocus: null,

    init() {
      this.el = $('#lightbox');
      if (!this.el) return;

      this.el.addEventListener('click', (e) => {
        if (e.target.closest('[data-close]')) this.close();
      });

      $('#lbPrev').addEventListener('click', () => this.step(-1));
      $('#lbNext').addEventListener('click', () => this.step(1));

      document.addEventListener('keydown', (e) => {
        if (this.el.hidden) return;
        if (e.key === 'Escape') this.close();
        if (e.key === 'ArrowLeft') this.step(-1);
        if (e.key === 'ArrowRight') this.step(1);
        if (e.key === 'Tab') this.trap(e);
      });

      $('#galleryGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.art-card');
        if (!card) return;
        this.open(Number(card.dataset.id));
      });
    },

    trap(e) {
      const focusables = $$('button, [href], img[tabindex]', this.el).filter(
        (n) => n.offsetParent !== null
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },

    open(id) {
      this.list = visibleArtworks();
      this.index = Math.max(0, this.list.findIndex((a) => a.id === id));
      this.lastFocus = document.activeElement;
      this.paint();
      this.el.hidden = false;
      document.body.style.overflow = 'hidden';
      $('#lbImage').focus?.();
      $('.lb-close', this.el).focus();
    },

    step(dir) {
      if (!this.list.length) return;
      this.index = (this.index + dir + this.list.length) % this.list.length;
      this.paint();
    },

    paint() {
      const item = this.list[this.index];
      if (!item) return;
      const img = $('#lbImage');
      img.src = artworkUrl(item, 1200);
      img.alt = `${item.title} · ${item.artist} · ${item.year}`;
      $('#lbTitle').textContent = item.title;
      $('#lbSub').textContent = `${item.artist} · ${item.year} · ${item.medium}`;
      $('#lbDesc').textContent = item.desc;
      $('#lbCounter').textContent = `${this.index + 1} / ${this.list.length}`;
    },

    close() {
      this.el.hidden = true;
      document.body.style.overflow = '';
      this.lastFocus?.focus?.();
    }
  };

  /* ---------- shuffle ---------- */

  function initShuffle() {
    const btn = $('#shuffleBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      ARTWORKS.forEach((item) => { item.seed = `qi-${item.id}-${randomKey()}`; });

      const hero = $('#heroImage');
      if (hero) hero.src = `${PIC_BASE}qi-hero-${randomKey()}/1800/1100`;

      renderGallery();
    });
  }

  /* ---------- header & nav ---------- */

  function initHeader() {
    const header = $('#siteHeader');
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const toggle = $('#navToggle');
    const nav = $('#siteNav');

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '收起导航菜单' : '展开导航菜单');
    });

    nav.addEventListener('click', (e) => {
      if (!e.target.closest('a')) return;
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* ---------- reveal ---------- */

  function initReveal() {
    const nodes = $$('.reveal');
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n, i) => {
      n.style.transitionDelay = `${(i % 4) * 90}ms`;
      io.observe(n);
    });
  }

  /* ---------- boot ---------- */

  document.addEventListener('DOMContentLoaded', () => {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();

    initMarquee();
    initFilters();
    renderGallery();
    lightbox.init();
    initShuffle();
    initHeader();
    initReveal();
  });
})();
