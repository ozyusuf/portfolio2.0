# PORTFOLIO SITE BLUEPRINT — Mahmut Yusuf Öz

> **Bu doküman bir AI coding agent'a verilmek üzere hazırlanmıştır.**
> Amacı: Tek seferde, eksiksiz, Awwwards-kalitesinde bir kişisel portfolio sitesi üretmek.
> Framework: Next.js 14 (App Router) + Tailwind CSS + Framer Motion + GSAP.
> Deploy: Vercel.

---

## 1. KONSEPT ÖZETİ

**Tek cümle:** A dark, premium portfolio built around the question "Who am I" — blending a refined systems aesthetic with subtle Matrix-inspired motion and a truthful AI-powered portfolio query interface.

**Bu site Matrix tribute değil.** Matrix'ten gelen DNA şu: sistem hissi, sinyal, kontrollü glitch, dijital aura. Ama üzerine oturan şey gerçek bir mühendis profili — ürün çıkaran, mobil/web geliştiren, AI tarafına yönelen biri.

**Sitenin iddiası:** "I don't just have projects. I build systems, ship products, and think clearly."

**Ziyaretçinin ilk 20 saniyede hissetmesi gereken:**
- Bu kişi teknik olarak güçlü
- Estetik karar alabiliyor
- Ürün hissi ile mühendislik hissini birleştirebiliyor
- Özgün bir dili var ama kontrol etmeyi de biliyor

---

## 2. GÖRSEL KİMLİK

### 2.1 Renk Sistemi

```
--bg-primary:       #0a0a0c       (near-black graphite, saf siyah DEĞİL)
--bg-elevated:      #111114       (kartlar, elevated surfaces)
--bg-card:          #16161a       (proje kartları, sidebar)
--bg-hover:         #1c1c22       (hover states)

--text-primary:     #e8e6e3       (kırık beyaz, çok sert kontrast değil)
--text-secondary:   #8a8a8e       (açıklama metinleri)
--text-dim:         #5a5a5e       (metadata, etiketler)

--accent:           #4ade80       (muted phosphor green — PARLAK NEON DEĞİL)
--accent-muted:     #22c55e       (hover/active states)
--accent-dim:       rgba(74, 222, 128, 0.08)  (background tint)
--accent-glow:      rgba(74, 222, 128, 0.12)  (subtle glow)

--cyan:             #67e8f9       (çok sınırlı ikincil ton, sadece küçük detaylarda)
--border:           rgba(255, 255, 255, 0.06)
--border-accent:    rgba(74, 222, 128, 0.15)
```

**Kurallar:**
- Accent yeşil asla neon parlaklığında olmayacak — rafine, kontrollü, muted.
- Cyan sadece çok küçük detaylarda (bir iki tag, bir metadata satırı) kullanılacak.
- Arka plan saf #000000 değil. Graphite tonunda olacak.
- Metin saf #ffffff değil. Kırık beyaz olacak.
- Glow efektleri çok hafif olacak — `box-shadow: 0 0 40px rgba(74,222,128,0.08)` seviyesinde.

### 2.2 Tipografi

```
Başlıklar (display):     "Instrument Sans" veya "Geist Sans" — modern, temiz, güçlü
                          font-weight: 600-700, letter-spacing: -0.02em to -0.03em

Gövde metin:              "Instrument Sans" veya "Geist Sans" — weight 400
                          font-size: 16px, line-height: 1.7

Monospace (teknik):       "IBM Plex Mono" veya "Geist Mono"
                          Etiketler, metadata, query interface, tech tags, section labels
                          font-size: 11-13px, letter-spacing: 0.05em, text-transform: uppercase (labels)
```

**Kurallar:**
- Inter, Roboto, Arial KULLANMA. Bunlar jenerik AI estetiği.
- Space Grotesk de kullanma — aşırı kullanıldı.
- Tipografi + boşluk + hiyerarşi premium hissin %70'ini oluşturur.
- Başlıklarda tight letter-spacing (-2px to -1px) kullan.
- Section label'lar her zaman monospace + uppercase + küçük font + accent rengi.

### 2.3 Spacing & Layout

- Max content width: 1200px, centered.
- Section padding: 120px dikey (desktop), 80px (mobile).
- Kartlar arası gap: 24px.
- Her section'da bol negatif alan bırak. Sıkışık görünmemeli.
- Grid background: ince çizgilerle (1px, çok düşük opacity ~0.04) 60x60px grid, radial mask ile ortadan kesilecek. Sadece hero section'da.

---

## 3. MOTION DİLİ

### 3.1 Temel Prensipler
- **Gösterişli değil, hassas.**
- **Yoğun değil, amaçlı.**
- Animasyon "bak ben animasyon yaptım" diye bağırmayacak — deneyimin doğal parçası gibi hissedecek.
- Sürekli rahatsız edici animasyon yok.

### 3.2 Giriş Sekansı (Boot Sequence)

Bu sitenin imzası. Kısa, tonu kuran bir açılış.

**Akış:**
1. Sayfa açılışında tam ekran dark overlay
2. Canvas üzerinde Matrix rain — çok düşük opacity (0.10-0.15), arka planda
3. Monospace font ile boot log satırları sırayla beliriyor (her satır ~250ms delay):
   ```
   > initializing system...
   > loading portfolio_data...
   > verifying credentials...
   > signal: strong
   > status: ready
   ```
4. Boot log bittikten sonra "M.Y. ÖZ" logosu fade in (500ms)
5. Kısa glitch/signal-break geçişi (scanline efekti, 300-400ms)
6. Boot screen fade out, ana içerik fade in

**TOPLAM SÜRE: 2.5-3 saniye MAX.** Bu bir preloader değil, bir imza. Kullanıcıyı bekletmemeli.

**Matrix Rain Detayları:**
- Karakterler: Katakana + rakamlar + hex harfler
- Font size: 14px monospace
- Opacity: her karakter random 0.1-0.4 arası
- Düşme hızı: orta, çok hızlı değil
- Boot sequence bittikten sonra matrix rain durur, canvas kaldırılır

### 3.3 Site İçi Motion

**Scroll Reveal:**
- Her section element'i viewport'a girince reveal: `opacity 0→1, translateY(30px→0), duration 0.7s, ease-out`
- Stagger: aynı section'daki kartlar 100ms delay ile sırayla
- IntersectionObserver kullan, threshold 0.1

**Hover Efektleri:**
- Proje kartları: `translateY(-4px)`, border-color accent'e geçiş, üstte ince accent gradient line belirmesi
- Linkler: renk geçişi 0.3s ease
- Butonlar: hafif glow artışı
- Query suggestion chip'leri: border + background renk geçişi

**Micro-interactions:**
- Section label'larda ince bir "scan" efekti düşünülebilir (opsiyonel)
- Proof strip sayılarında countUp animasyonu (sayı 0'dan hedef değere sayar, 1.5s duration)
- Cursor: varsayılan, custom cursor YAPMA

**Scanline:**
- Sayfanın üstünde sürekli yavaşça aşağı inen ince (2px) yeşil gradient çizgi
- Opacity çok düşük: 0.04-0.06
- Animation: top 0 → 100vh, 8s linear infinite
- Çok subtle, fark edilmeyecek kadar ama ortam oluşturacak kadar

### 3.4 YAPMA Listesi
- ❌ Uzun preloader (3 saniyeyi geçmesin)
- ❌ Tam ekran sürekli Matrix rain (sadece boot'ta, sonra kapanır)
- ❌ Fazla glow / neon efektler
- ❌ Her yerde terminal kutuları
- ❌ Aşırı glitch (sadece boot geçişinde bir kere)
- ❌ Anlamsız parallax / scroll show-off
- ❌ İçerikten daha baskın efektler
- ❌ Custom cursor
- ❌ Sayfa geçiş animasyonları (single page, smooth scroll yeterli)

---

## 4. SAYFA YAPISI (BİLGİ MİMARİSİ)

Site tek sayfa (SPA), smooth scroll ile section'lara navigasyon.

### 4.1 Navigation (Fixed Top)

```
[Logo: M.Y.ÖZ]                    [//Work  //Domains  //Query  //About  //Contact]
```

- Fixed, backdrop-blur(20px), arka plan rgba(10,10,12,0.85)
- Alt border: 1px solid rgba(255,255,255,0.06)
- Logo: font-display, weight 700, 18px. Nokta accent rengi.
- Nav linkleri: monospace, 12px, uppercase, letter-spacing 0.5px
- Her link önünde `//` prefix (dim renkte)
- Hover'da link + prefix accent rengine geçer
- Mobilde hamburger menü veya nav linkleri gizle

---

### 4.2 Hero Section

```
[Grid background — ince, düşük opacity, radial mask]

// WHO AM I                              ← monospace, 11px, accent, uppercase, letter-spacing 2px

Mahmut Yusuf                             ← display font, clamp(42px, 6vw, 72px), weight 700
Öz                                       ← accent rengi

Building mobile, web &                   ← clamp(20px, 2.5vw, 28px), text-secondary rengi
intelligent systems.

I ship real products to real users —      ← 16px, max-width 560px, text-secondary
Flutter apps on Google Play, a PWA       ← "real products", "6,600+", "autonomous driving" bold (text-primary)
serving 6,600+ monthly visitors, and
AI-integrated systems. Currently
exploring autonomous driving and
multi-agent reinforcement learning.

[GitHub]  [LinkedIn]  [Medium]  [Email]  ← monospace, 12px, border pill, hover → accent
```

**Animasyon:** Boot sequence bittikten sonra hero elementleri sırayla fade-in + slide-up. Sıra: label → h1 → subtitle → bio → meta links. Her biri 120ms delay.

---

### 4.3 Proof Strip

Hero'nun hemen altında. Farklı arka plan rengi (bg-elevated).
Üstte ve altta 1px border.

```
    6,630+              3                11.4K              +136%
  Monthly Users    Shipped Products   Page Views/Mo     Visitor Growth
```

- 4 sütun grid
- Sayılar: display font, 42px, weight 700, accent rengi, letter-spacing -2px
- Label: monospace, 11px, uppercase, text-dim rengi
- Sayılarda countUp animasyonu (viewport'a girince tetiklenir)

---

### 4.4 Selected Work (Projeler)

```
← Selected Work                          ← section label (monospace, accent, uppercase)
Systems I've Built                       ← section title (display, 48px)

┌─────────────────────────────────────────────────────────────┐
│ MenuKYK                                         → Live     │  ← FEATURED (full width)
│ 6,630+ users  ·  11.4K views  ·  +136% growth             │
│                                                             │
│ Serverless SaaS PWA automating dormitory menu              │
│ tracking for KYK dorms across Turkey. Integrated           │
│ Gemini AI for image processing...                          │
│                                                             │
│ [React] [Vite] [Supabase] [Tailwind] [PWA] [Gemini AI]    │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────┐  ┌──────────────────────────┐
│ Greenhouse Management    │  │ RL-Drive Multi-Agent     │
│                → Play Store│  │                 → GitHub │
│                          │  │                          │
│ Full-featured mobile app │  │ Multi-agent autonomous   │
│ digitizing greenhouse... │  │ driving simulation...    │
│                          │  │                          │
│ [Flutter] [Supabase]     │  │ [Python] [Q-Learning]    │
│ [BLOC] [Clean Arch]      │  │ [Multi-Agent] [RL]       │
└──────────────────────────┘  └──────────────────────────┘

┌──────────────────────────┐  ┌──────────────────────────┐
│ Caffeverse               │  │ Wine Quality Prediction  │
│                          │  │                  → Demo  │
│ Location-based mobile    │  │ ML model predicting wine │
│ app comparing coffee...  │  │ quality from physico...  │
│                          │  │                          │
│ [Flutter] [Firebase]     │  │ [Python] [Scikit-learn]  │
│ [Google Maps]            │  │ [ML]                     │
└──────────────────────────┘  └──────────────────────────┘
```

**Kart Yapısı:**
- Background: bg-card
- Border: 1px solid border rengi
- Border-radius: 12px
- Padding: 36px
- Hover: translateY(-4px), border → border-accent, box-shadow büyür, üstte 1px accent gradient line belir
- Featured kart: grid-column span 2, içinde 2 sütun (sol: içerik, sağ: placeholder/screenshot)

**Proje İsmi:** display font, 22px, weight 600
**Link:** monospace, 11px, accent rengi, pill border
**Açıklama:** 14px, text-secondary, line-height 1.7
**Tech tags:** monospace, 11px, text-dim, pill şeklinde, ince border, background rgba(255,255,255,0.03)
**Stats (sadece featured'da):** monospace, 12px, accent rengi, label kısmı text-dim

---

### 4.5 Capabilities / Domains

```
← Capabilities
Domains

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ > mobile         │  │ > web            │  │ > systems        │
│                  │  │                  │  │                  │
│ Mobile           │  │ Web              │  │ Intelligent      │
│ Development      │  │ Development      │  │ Systems          │
│                  │  │                  │  │                  │
│ Production       │  │ Serverless PWAs  │  │ AI/ML pipelines, │
│ Flutter apps...  │  │ and responsive...│  │ RL simulations...│
│                  │  │                  │  │                  │
│ Flutter · Dart   │  │ React · Vite     │  │ Python · Scikit  │
│ BLOC · Provider  │  │ Tailwind · ...   │  │ Q-Learning · ... │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

- 3 sütun grid
- Her kartın üstünde monospace icon label: `> mobile`, `> web`, `> systems` (accent rengi, `>` dim renkte)
- Başlık: display font, 20px, weight 600
- Açıklama: 14px, text-secondary
- Alt kısımda tool listesi: monospace, 11px, text-dim, `·` ile ayrılmış

---

### 4.6 Query My Work (Portfolio Assistant)

**Bu bölüm sitenin en differentiating kısmı.**

Chatbot widget değil, sayfanın içine yerleşmiş bir query terminal.

```
← Query My Work
Ask About My Portfolio

┌─ ● ● ●  portfolio_query — yusuf_oz ─────────────────────┐
│                                                           │
│  │ System initialized. I answer only from Yusuf's        │
│  │ portfolio data.                                        │
│                                                           │
│  > what apps has yusuf shipped?                          │
│                                                           │
│  │ Yusuf has shipped 3 products to real users:           │
│  │ 1. MenuKYK — a PWA serving 6,630+ monthly users...   │
│  │ 2. Greenhouse Management — published on Google Play   │
│  │ 3. CardApp — digital business card (internship)       │
│                                                           │
│  $ [type your question here...]                          │
│                                                           │
│  [real users?] [flutter apps?] [ai/ml work?]             │
│  [experience?] [tech stack?]                              │
└───────────────────────────────────────────────────────────┘
```

**Yapı:**
- max-width: 800px, centered
- Terminal penceresi: bg-primary, border, border-radius 12px
- Üstte terminal bar: 3 renkli dot (kırmızı, sarı, yeşil) + monospace başlık
- İçeride chat log alanı (scrollable, max-height 400px)
- Altta input: `$` prompt (accent) + monospace input field
- Input altında suggestion chip'leri: monospace, 11px, pill border, hover → accent

**Mesaj Tipleri:**
- System mesajı: monospace, 12px, text-dim, sol border 2px (border rengi)
- Kullanıcı mesajı: monospace, 13px, accent rengi, `> ` prefix
- Yanıt: 14px body font, text-secondary, sol border 2px (accent-dim)

**İmplementasyon Seçenekleri (birini seç):**

**Seçenek A — API ile (Önerilen):**
Anthropic API'yi çağır. System prompt'ta tüm portfolio verisini ver. Cevapları sadece bu veriden üretmesini söyle.

System prompt taslağı:
```
You are a portfolio query assistant for Mahmut Yusuf Öz.
You answer ONLY from the data provided below. Never invent, assume, or use external knowledge.
If you don't know, say "I don't have that information in the portfolio data."
Keep answers concise (2-4 sentences). Reference specific projects when possible.
Tone: professional, clear, helpful.

[PORTFOLIO DATA]
(aşağıdaki Section 7'deki tüm veri buraya yapıştırılacak)
[/PORTFOLIO DATA]
```

**Seçenek B — Local (API'siz):**
Keyword matching ile basit bir cevap sistemi kur. Önceden tanımlanmış soru-cevap çiftleri:

```javascript
const responses = {
  "shipped|published|real users|production": "Yusuf has shipped 3 products...",
  "flutter|mobile|dart": "Yusuf has built multiple Flutter apps...",
  "ai|ml|machine learning|reinforcement": "Yusuf's AI/ML work includes...",
  "experience|internship|work": "Yusuf has professional experience at...",
  "tech|stack|tools|languages": "Yusuf's tech stack includes...",
  "education|university|degree": "Yusuf is pursuing a B.Sc...",
  "autonomous|driving|self-driving": "Yusuf is currently specializing in...",
  "web|react|pwa|menukyk": "On the web side, Yusuf built MenuKYK...",
};
```

Seçenek B daha güvenli (halüsinasyon riski yok) ama daha az etkileyici.

---

### 4.7 About / Mindset

```
← About / Mindset
How I Think

[Sol: 2/3 genişlik]                    [Sağ: 1/3 genişlik]

I'm a Software Engineering student      ┌─────────────────┐
at Muğla Sıtkı Koçman University        │ ← Education     │
with a bias toward building and          │ — B.Sc. SE      │
shipping...                              │ — Muğla SKU     │
                                         │─────────────────│
I've published apps on Google Play,      │ ← Certifications│
built a PWA that serves thousands...     │ — Autonomous    │
                                         │   Driving Tech  │
Currently, I'm deepening my work in      │ — National Tech │
autonomous systems through Turkey's      │   Academy       │
National Technology Academy...           │─────────────────│
                                         │ ← Languages     │
                                         │ — Turkish       │
                                         │ — English       │
                                         └─────────────────┘
```

- 2 sütun grid: 2fr 1fr, gap 64px
- Sol: body text, 16px, line-height 1.8, text-secondary. Bold kelimeler text-primary.
- Sağ: sidebar kart (bg-card, border, 12px radius, 32px padding)
  - Bölüm başlıkları: monospace, 11px, accent, uppercase
  - Liste itemları: 14px, text-secondary, `— ` prefix (dim)
  - Bölümler arası 1px border ayırıcı

---

### 4.8 Current Direction

```
← Current Direction
Where I'm Heading

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Autonomous Systems & Intelligent Software                 │
│                                                             │
│  Building toward the intersection of embedded systems,      │
│  perception, and autonomous decision-making...              │
│                                                             │
│  [Autonomous Driving] [Reinforcement Learning]             │
│  [Multi-Agent Systems] [Perception] [Embedded Systems]     │
│                                                     ◉ glow │
└─────────────────────────────────────────────────────────────┘
```

- Tek büyük kart, bg-card, border, 48px padding
- Sağ üstte subtle radial gradient glow (accent-dim)
- Alt kısımda tag'ler: monospace, 11px, accent rengi, accent border, accent-dim background, pill
- Kart max-width olmasın, section width'e yayılsın

---

### 4.9 Contact

```
                          ← Contact
                    Let's Connect

      Open to internship opportunities, collaboration
      on intelligent systems, or just a good technical
      conversation.

      [ysfoz123@gmail.com]     [LinkedIn]  [GitHub]
       ↑ primary (filled)        ↑ secondary (outline)
```

- text-align center
- Primary buton: accent arka plan, siyah metin, monospace, 13px, hover'da glow
- Secondary butonlar: outline, text-secondary, hover → accent
- Butonlar arasında 16px gap

---

### 4.10 Footer

```
© 2026 Mahmut Yusuf Öz                system.status: operational
```

- Üstte 1px border
- Flex, space-between
- Monospace, 11px, text-dim
- "operational" kelimesi accent rengi

---

## 5. TEKNİK MİMARİ

### 5.1 Tech Stack

```
Framework:        Next.js 14+ (App Router)
Styling:          Tailwind CSS 3.4+
Animation:        Framer Motion (scroll reveals, page transitions)
                  GSAP (boot sequence, countUp, complex timeline)
Canvas:           Native Canvas API (Matrix rain)
Font loading:     next/font/google veya @fontsource
Deploy:           Vercel
Linting:          ESLint + Prettier
```

### 5.2 Dosya Yapısı

```
src/
├── app/
│   ├── layout.tsx          (root layout, font imports, metadata)
│   ├── page.tsx            (ana sayfa, tüm section'ları import eder)
│   └── globals.css         (Tailwind base + CSS variables + custom utilities)
├── components/
│   ├── BootSequence.tsx    (matrix rain canvas + boot log + glitch transition)
│   ├── Scanline.tsx        (sürekli scanline efekti)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProofStrip.tsx      (countUp animasyonlu metrikler)
│   ├── Projects.tsx        (proje kartları grid)
│   ├── ProjectCard.tsx
│   ├── Capabilities.tsx
│   ├── QueryInterface.tsx  (terminal style query system)
│   ├── About.tsx
│   ├── Direction.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── SectionLabel.tsx   (reusable "← Label" component)
│       ├── SectionTitle.tsx
│       ├── TechTag.tsx
│       └── RevealOnScroll.tsx (Framer Motion wrapper)
├── data/
│   └── portfolio.ts        (tüm CV verisi — structured JSON)
├── lib/
│   └── matrixRain.ts       (canvas animation logic)
└── hooks/
    └── useCountUp.ts       (sayı animasyonu hook)
```

### 5.3 Performans Hedefleri

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s (boot sequence hariç)
- Boot sequence toplam: max 3 saniye
- Tüm animasyonlar 60fps
- Toplam JS bundle: < 200KB gzipped
- Font loading: `display: swap` ile, FOUT tercih et
- Görseller: next/image ile optimize, lazy load
- Canvas: boot bittikten sonra durdur ve DOM'dan kaldır

### 5.4 Responsive Breakpoints

```
Desktop:     > 1024px   (full layout)
Tablet:      768-1024px (2 sütun → 1 sütun projeler, capabilities)
Mobile:      < 768px    (tek sütun, küçük font'lar, nav gizli)
```

Mobilde boot sequence daha kısa olabilir (2 saniye).
Mobilde proof strip 2x2 grid.
Mobilde about sidebar altına düşer.

---

## 6. İÇERİK TONU

### Kurallar:
- Sakin, net, güven veren, teknik, rafine
- Pazarlamacı değil
- Akademik değil
- "Visionary ninja engineer" tarzı havalı cümleler YOK
- Hacker cosplay YOK
- Dramatik manifesto dili YOK

### Örnek doğru ton:
> "I ship real products to real users."
> "I don't just prototype — I ship."
> "Building toward the intersection of embedded systems, perception, and autonomous decision-making."

### Örnek yanlış ton:
> ❌ "I'm a passionate developer crafting cutting-edge solutions..."
> ❌ "Welcome to my digital realm..."
> ❌ "Hacking the future, one commit at a time"

---

## 7. İÇERİK VERİSİ (portfolio.ts)

Aşağıdaki veriyi `src/data/portfolio.ts` dosyasına structured TypeScript olarak koy.

### 7.1 Kişisel Bilgiler

```typescript
export const personal = {
  name: "Mahmut Yusuf Öz",
  title: "Software Engineering Student | Mobile & Web Developer",
  location: "Mugla, Turkey",
  email: "ysfoz123@gmail.com",
  phone: "+90 541 793 6567",
  links: {
    github: "https://github.com/ozyusuf",
    linkedin: "https://linkedin.com/in/yusuf-öz-601025309",
    medium: "https://medium.com/@yusufoz",
    portfolio: "https://yusuf-oz.vercel.app",
  },
  heroTagline: "Building mobile, web & intelligent systems.",
  heroBio: "I ship real products to real users — Flutter apps on Google Play, a PWA serving 6,600+ monthly visitors, and AI-integrated systems. Currently exploring autonomous driving and multi-agent reinforcement learning.",
};
```

### 7.2 Proof Strip Metrikleri

```typescript
export const metrics = [
  { value: 6630, suffix: "+", label: "Monthly Users" },
  { value: 3, suffix: "", label: "Shipped Products" },
  { value: 11474, display: "11.4K", label: "Page Views / Month" },
  { value: 136, suffix: "%", prefix: "+", label: "Visitor Growth MoM" },
];
```

### 7.3 Projeler

```typescript
export const projects = [
  {
    name: "MenuKYK",
    featured: true,
    tech: ["React", "Vite", "Supabase", "Tailwind CSS", "PWA", "Gemini AI"],
    description: "Serverless SaaS PWA automating dormitory menu tracking for KYK dorms across Turkey. Integrated Gemini AI for image processing to verify and handle crowdsourced menu uploads at scale. Built responsive, cross-platform UI and admin verification system.",
    stats: [
      { value: "6,630+", label: "users" },
      { value: "11.4K", label: "views" },
      { value: "+136%", label: "growth" },
    ],
    link: { url: "https://www.menukyk.com.tr/", label: "Live" },
  },
  {
    name: "Greenhouse Management System",
    featured: false,
    tech: ["Flutter", "Supabase", "BLOC", "Clean Architecture"],
    description: "Full-featured mobile app to digitize manual greenhouse records. Published on Google Play Store with Supabase backend and Firebase Auth. Applied Clean Architecture principles for long-term maintainability.",
    link: { url: "https://play.google.com/store/apps/details?id=com.devyusufoz.serayonetimi", label: "Play Store" },
  },
  {
    name: "RL-Drive Multi-Agent",
    featured: false,
    tech: ["Python", "Q-Learning", "Multi-Agent", "Reinforcement Learning"],
    description: "Multi-agent autonomous driving simulation using Q-Learning for grid-based navigation. Implemented reward shaping and collision avoidance logic for concurrent agent training.",
    link: { url: "https://github.com/ozyusuf/RL-Drive-MultiAgent", label: "GitHub" },
  },
  {
    name: "Caffeverse",
    featured: false,
    tech: ["Flutter", "Firebase", "Google Maps API"],
    description: "Location-based mobile application to compare coffee prices from nearby cafes. Integrated Google Maps API to display cafe locations and calculate distances in real-time.",
    link: null,
  },
  {
    name: "Wine Quality Prediction",
    featured: false,
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    description: "ML model predicting wine quality from physicochemical properties using a Kaggle dataset. Developed a public-facing web interface to demonstrate model predictions in real time.",
    link: { url: "https://wine-quality-website.vercel.app/", label: "Demo" },
  },
];
```

### 7.4 Deneyim

```typescript
export const experience = [
  {
    role: "Mobile Developer Intern",
    company: "Virtus R&D (Virtus AR-GE)",
    period: "Jul 2025 – Aug 2025",
    details: [
      "Frontend development of CardApp, a digital business card solution using Flutter",
      "Implemented BLOC pattern for state management and scalable code structure",
      "Collaborated with backend team, utilized Docker for containerization",
      "Optimized UI components for better UX and performance",
    ],
  },
  {
    role: "Software Team Member",
    company: "MSKU – Digital Transformation Office",
    period: "Feb 2025 – Jun 2025",
    details: [
      "Maintained university-wide digital services",
      "Improved internal web interfaces using HTML, CSS, JavaScript",
      "Gained insight into large-scale software deployment and public sector digital strategies",
    ],
  },
  {
    role: "Board Member",
    company: "Data Science Community",
    period: "Oct 2025 – Present",
    details: [
      "Organizing events and coordinating research initiatives",
    ],
  },
];
```

### 7.5 Yetenekler

```typescript
export const skills = {
  languages: ["Dart", "Python", "Java", "C", "SQL", "JavaScript", "HTML", "CSS"],
  mobile: ["Flutter", "BLOC Pattern", "Provider", "Clean Architecture"],
  backend: ["Supabase", "Firebase (Auth, Firestore)", "Google Maps API", "REST APIs"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Claude Code", "Gemini", "Antigravity IDE"],
};
```

### 7.6 Eğitim & Sertifikalar

```typescript
export const education = {
  degree: "B.Sc. in Software Engineering",
  university: "Mugla Sitki Kocman University",
  period: "Sep 2022 – Present",
  coursework: [
    "Data Structures", "OOP", "Software Design Patterns", "Algorithms",
    "Intro to ML", "Intro to AI", "Software Project Management",
    "System and Network Programming", "Software Architectures",
  ],
};

export const certifications = [
  {
    name: "Autonomous Driving Technologies Specialization",
    issuer: "National Technology Academy",
    period: "Jan 2026 – Present",
    details: "Completed foundational training; currently undergoing advanced specialization supported by the Ministry of Industry and Technology.",
  },
];
```

### 7.7 Capabilities (Domains)

```typescript
export const capabilities = [
  {
    icon: "mobile",
    title: "Mobile Development",
    description: "Production Flutter apps with clean architecture, BLOC state management, and real Play Store releases.",
    tools: "Flutter · Dart · BLOC · Provider · Firebase · Supabase",
  },
  {
    icon: "web",
    title: "Web Development",
    description: "Serverless PWAs and responsive interfaces built with modern frameworks, serving thousands of active users.",
    tools: "React · Vite · Tailwind · Supabase · REST APIs · PWA",
  },
  {
    icon: "systems",
    title: "Intelligent Systems",
    description: "AI/ML pipelines, reinforcement learning simulations, and autonomous driving research through the National Technology Academy.",
    tools: "Python · Scikit-learn · Q-Learning · Multi-Agent RL · Gemini AI",
  },
];
```

---

## 8. QUERY INTERFACE — CEVAP VERİTABANI (Seçenek B için)

Eğer API kullanmayacaksan, bu keyword→response map'ini kullan:

```typescript
export const queryResponses: Record<string, string> = {
  "shipped|published|real users|production|product": 
    "Yusuf has shipped 3 products to real users: MenuKYK (a PWA with 6,630+ monthly users across Turkey), Greenhouse Management System (published on Google Play), and CardApp (built during his internship at Virtus R&D).",

  "flutter|mobile|dart|app": 
    "Yusuf has built multiple Flutter applications: Greenhouse Management System (published on Google Play with Clean Architecture and BLOC), Caffeverse (location-based coffee price comparison with Google Maps), and CardApp (digital business card, internship project). He uses BLOC pattern, Provider, and Clean Architecture principles.",

  "web|react|pwa|menukyk|website": 
    "Yusuf's main web project is MenuKYK — a serverless SaaS PWA built with React, Vite, Supabase, and Tailwind CSS. It automates dormitory menu tracking for KYK dorms across Turkey, serving 6,630+ unique visitors with 11,474 page views per month and +136% visitor growth. It integrates Gemini AI for image-based menu verification.",

  "ai|ml|machine learning|reinforcement|autonomous|driving": 
    "Yusuf's AI/ML work includes: RL-Drive Multi-Agent (a multi-agent autonomous driving simulation using Q-Learning), Wine Quality Prediction (an ML model with a live web demo), and Gemini AI integration in MenuKYK for image processing. He's currently specializing in Autonomous Driving Technologies through the National Technology Academy.",

  "experience|internship|work|job": 
    "Yusuf has professional experience as a Mobile Developer Intern at Virtus R&D (Jul-Aug 2025), where he worked on CardApp using Flutter and BLOC. He also served as a Software Team Member at MSKU's Digital Transformation Office (Feb-Jun 2025), and is currently a Board Member of the Data Science Community.",

  "tech|stack|tools|languages|skills": 
    "Yusuf's tech stack: Languages — Dart, Python, Java, C, SQL, JavaScript. Mobile — Flutter, BLOC, Provider, Clean Architecture. Backend — Supabase, Firebase, Google Maps API, REST APIs. Tools — Git, Docker, VS Code, Postman, Claude Code.",

  "education|university|degree|school": 
    "Yusuf is pursuing a B.Sc. in Software Engineering at Mugla Sitki Kocman University (Sep 2022 – Present). His coursework includes Data Structures, Algorithms, ML, AI, Software Architectures, and System Programming.",

  "certification|academy|autonomous driving": 
    "Yusuf holds an Autonomous Driving Technologies certification from the National Technology Academy (Jan 2026 – Present). He completed the foundational training and is currently in the advanced specialization program supported by Turkey's Ministry of Industry and Technology.",
};
```

Matching logic: kullanıcının input'unu lowercase yap, her key'deki keyword'leri regex olarak kontrol et, en çok match eden cevabı döndür. Hiçbiri match etmezse: "I don't have specific information about that in the portfolio data. Try asking about projects, skills, experience, or education."

---

## 9. SEO & METADATA

```typescript
export const metadata = {
  title: "Mahmut Yusuf Öz — Software Engineer",
  description: "Portfolio of Mahmut Yusuf Öz. Building mobile, web, and intelligent systems. Flutter developer, React, AI/ML, autonomous systems.",
  openGraph: {
    title: "Mahmut Yusuf Öz — Systems & Software",
    description: "I ship real products to real users. Mobile, web, and intelligent systems.",
    type: "website",
    locale: "en_US",
  },
};
```

---

## 10. SON KONTROL LİSTESİ

Agent'ın bitirme öncesi kontrol etmesi gerekenler:

- [ ] Boot sequence 3 saniyeyi geçmiyor
- [ ] Boot sonrası matrix rain durduruluyor (performans)
- [ ] Tüm section'lar scroll reveal ile animasyonlu
- [ ] Proof strip sayılarında countUp animasyonu çalışıyor
- [ ] Proje kartlarında hover efektleri çalışıyor
- [ ] Query interface'de en az suggestion chip'ler çalışıyor
- [ ] Nav linkleri smooth scroll ile doğru section'a gidiyor
- [ ] Mobilde layout kırılmıyor
- [ ] Renk sistemi tutarlı (accent asla neon değil)
- [ ] Monospace font'lar etiketlerde ve terminal'de doğru kullanılıyor
- [ ] Hiçbir yerde generic "AI aesthetic" yok (mor gradient, Inter font, vb.)
- [ ] Scanline efekti çok subtle ve rahatsız edici değil
- [ ] Tüm dış linkler target="_blank" ile açılıyor
- [ ] Lighthouse Performance 90+
- [ ] Toplam sayfa boyutu makul (< 500KB initial load)
