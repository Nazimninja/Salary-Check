# Salary Tools - Master Project Memory & Guidelines

> **Permanent Project Memory & Guidelines**  
> Consolidated from all previous engineering, tax calculation, SEO, pSEO, directory distribution, and growth chat sessions for Salary Tools.  
> Loaded automatically by Antigravity / Gemini for all future tasks in this workspace.

---

## 1. Project Overview & Architecture

- **Primary Product**: **Salary Tools** (`https://salary.socialninjas.in`) — Free, lightning-fast US salary, take-home pay, and hourly wage calculators for workers, contractors, and hiring managers.
- **Parent Brand / Agency**: **Social Ninja's** (`https://socialninjas.in`) — AI Agency, Automations, Growth Systems.
- **Ecosystem Role**: High-volume programmatic SEO (pSEO) and organic search acquisition satellite funnel designed to drive authoritative organic backlinks, brand visibility, and inbound leads to Social Ninja's agency services.
- **Authoritative Domain**: `https://salary.socialninjas.in` (Hosted on Cloudflare Pages / Static Edge).
- **Repository**: `https://github.com/Nazimninja/Salary-Check.git` (main branch).
- **Core Technology Stack**:
  - **Framework**: Astro v4 (`astro.config.mjs`) configured for static generation (`output: 'static'`, `compressHTML: true`).
  - **Styling**: Modern, responsive custom CSS (`src/styles/global.css`) using brand Ninja Blue (`#1F4B99`), Deep Blue (`#153880`), slate neutrals, glassmorphism cards, and sleek mobile navigation drawers.
  - **Sitemap & SEO Automation**: Prebuild script (`scripts/generate-sitemap.mjs`) generates `public/sitemap.xml` with **1,610+ valid static pages** before every build.
  - **Instant Search Submission**: IndexNow automated batch submission (`scripts/ping-indexnow.mjs`) for Bing, Yandex, Seznam, and Naver with key `8f7f1ad4b9714ebca808d4b3c95e1d90.txt`.
  - **LLM Manifests & GEO**: AI engine discovery via `public/llms.txt`, `public/llms-full.txt`, and permissive `public/robots.txt`.

---

## 2. Core Calculators & Feature Modules

### A. Hourly ↔ Salary Converter (`/`)
- **Instant Bi-directional Conversion**: Convert between Hourly, Annual, Monthly, Semi-Monthly (24 paychecks), Biweekly (26 paychecks), Weekly (52 paychecks), and Daily rates in real-time.
- **Customizable Variables**:
  - Standard full-time baseline: 40 hours/week, 52 weeks/year (2,080 working hours).
  - Dynamic adjustments for custom hours worked per week and weeks per year.
  - Paid Time Off (PTO) days deduction calculation.
  - Overtime hours with standard 1.5x time-and-a-half rate calculations.
- **Viral Sharing Feature**: 1-click "Copy Breakdown" button that formats and copies results directly to clipboard with a toast notification.
- **Structured Data**: `SoftwareApplication` and comprehensive `FAQPage` JSON-LD schemas.

### B. Take-Home Pay Calculator (`/salary-calculator`)
- **2025 IRS Federal Tax Tables**:
  - Federal progressive tax brackets (10%, 12%, 22%, 24%, 32%, 35%, 37%).
  - Standard deductions: Single ($15,750), Married Filing Jointly ($31,500), Head of Household ($23,625).
- **FICA Taxes**:
  - Social Security: 6.2% on taxable wages up to the IRS statutory wage cap ($176,100 for 2025).
  - Medicare: 1.45% on all earnings, plus 0.9% Additional Medicare Tax for wages above $200,000 (Single) or $250,000 (Married).
- **All 50 US States Tax Logic**:
  - Accurate bracket calculation across progressive income tax states (e.g., California, New York), flat tax states (e.g., Pennsylvania, Illinois, North Carolina), and the **9 Zero-Income-Tax States** (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming).
- **Pre-Tax Deductions**:
  - Traditional 401(k) / 403(b) contributions.
  - Pre-tax health insurance premiums.
  - Health Savings Account (HSA) contributions.
- **Pay Period Visualizations**: Paycheck distribution breakdowns across Weekly, Biweekly, Semi-Monthly, and Monthly schedules.

### C. Programmatic SEO Engine (pSEO) — 1,610+ Pages
1. **Hourly Wage Directory (`/hourly`) & 30 Slugs (`/hourly/[slug]`)**:
   - Targets high-intent searches from `$15/hour` to `$100/hour` (e.g., `20-an-hour-is-how-much-a-year`).
   - Detailed pay period charts, unadjusted vs adjusted annual income, sample monthly budgets (50/30/20 rule), and dedicated FAQ schema.
2. **50 State Salary Directory (`/salary`) & State Hubs (`/salary/[state]/`)**:
   - Dedicated landing page for all 50 US states detailing state tax rates, average living wage, and state-specific salary overviews.
3. **State x Job Programmatic Pages (`/salary/[state]/[job]`)**:
   - **1,500 dynamic pages**: 50 States x 30 Top Occupations (Software Engineer, Registered Nurse, Project Manager, Accountant, Data Analyst, Electrician, etc.).
   - Includes state take-home pay, estimated hourly rate, federal/state tax breakdown, and internal breadcrumb linking.

### D. Educational Blog & Career Guides (`/blog`)
- 20+ deeply researched guides addressing high-volume salary and tax questions:
  - `1099-vs-w2-tax-take-home-pay-comparison` (15.3% SE tax, contractor markup rules, deduction strategies).
  - `pay-transparency-laws-by-state` (2026 mandates: CA SB 1162, NY, CO, WA, IL, MD, HI).
  - `biweekly-vs-semimonthly-paychecks` (26 vs 24 paychecks, three-paycheck budgeting secrets).
  - `living-wage-by-state-us` (MIT living wage data, regional cost-of-living index comparisons).
  - `how-to-adjust-w4-withholding` (Form W-4 Step 2 multiple jobs, Step 3 child credits, Step 4 extra withholding).
  - Plus guides on 401k vs Roth 401k, HSA vs FSA, overtime FLSA rules, pay stub line-item breakdowns, and salary negotiation.
- Dynamic RSS 2.0 Feed served at `/rss.xml`.

---

## 3. Directory Distribution & Live Badges

Salary Tools is officially published, indexed, and distributed across key software and startup platforms:

| Platform | URL / Identifier | Integration Status |
|---|---|---|
| **Product Hunt** | [producthunt.com/products/salary-tools](https://www.producthunt.com/products/salary-tools) (Post ID `1202125`, Maker `@nazim_pasha`) | Official badge rendered in **Hero** and **Footer** |
| **TinyShelf** | [tinyshelf.co/tools/salarytools](https://www.tinyshelf.co/tools/salarytools) | Official dofollow badge rendered in **Footer** |
| **Google Search Console** | Property `https://salary.socialninjas.in/` | **1,611 URLs submitted** via sitemap |
| **IndexNow** | Bing, Yandex, Seznam, Naver | Automated 200 OK ping script verified |

---

## 4. Brand, Agency Funnel & Business Rules

1. **Top Agency Announcement Bar**:
   - Persistent header bar: `"Brought to you by Social Ninja's AI Agency — Need help automating or scaling your business? Get Free Audit →"` linking directly to `https://socialninjas.in/contact`.
2. **Growth Audit Promotion Cards**:
   - Agency callout cards placed in the footer and mobile slide-out navigation drawer promoting custom chatbots, lead automation, and sales agents.
3. **Cross-Promotional Ninja Tools Network**:
   - Footer links cross-promoting sister utilities in the ecosystem:
     - **WhatsApp Link Generator**: `https://linkwa.in`
     - **US Salary Tax Calculator**: `https://salary.socialninjas.in`
     - **Mortgage Pay Calculator**: `https://mortgage.socialninjas.in`
     - **Fit Ninja Fitness Planner**: `https://fit.socialninjas.in`
4. **Company & Contact Information**:
   - Company: **Social Ninja's**
   - Agency Website: `https://socialninjas.in`
   - Business Email: `info@socialninjas.in`
   - Founder Email: `nazim.socialninja@gmail.com`
   - Phone: `+91 8147757479`
   - Founder / Maker: **Nazim Pasha**
5. **Disclaimer Policy**:
   - All calculator pages must maintain the informational disclaimer bar: `"Calculations are estimates for informational purposes only. Consult a qualified CPA or tax professional for advice specific to your situation."`

---

## 5. Engineering & Development Rules

- **Prebuild Hook**: Always ensure `npm run prebuild` (`node scripts/generate-sitemap.mjs`) executes before running `astro build` so new blog posts or routes are immediately added to `sitemap.xml`.
- **Build Verification**: Before committing or pushing, verify that `npm run build` compiles all 1,610+ pages cleanly with zero TypeScript or Astro rendering errors.
- **Git Remote & Branch**: Main branch is `main` pointing to `https://github.com/Nazimninja/Salary-Check.git`.
- **Color Consistency**:
  - Primary Brand Blue: `#1F4B99`
  - Deep Navy Blue: `#153880`
  - Accent / Link Light Blue: `#5B9DF5`
  - Background: Clean white/slate backgrounds with high contrast dark charcoal text (`var(--ink)`).
- **SEO & Canonical URLs**:
  - Always enforce canonical tags with trailing slashes matching Astro static routing (e.g., `https://salary.socialninjas.in/blog/<slug>/`).
