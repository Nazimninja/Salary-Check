// scripts/generate-sitemap.mjs
// Runs before `astro build` to generate a complete sitemap with all programmatic pages and hubs.

import { writeFileSync, readdirSync } from 'fs';

const BASE_URL = 'https://salary.socialninjas.in';
const TODAY = new Date().toISOString().split('T')[0];

const states = [
  'al','ak','az','ar','ca','co','ct','de','fl','ga',
  'hi','id','il','in','ia','ks','ky','la','me','md',
  'ma','mi','mn','ms','mo','mt','ne','nv','nh','nj',
  'nm','ny','nc','nd','oh','ok','or','pa','ri','sc',
  'sd','tn','tx','ut','vt','va','wa','wv','wi','wy',
];

const jobs = [
  'software-engineer','registered-nurse','project-manager','data-analyst',
  'accountant','marketing-manager','product-manager','graphic-designer',
  'ux-designer','devops-engineer','data-scientist','sales-manager',
  'hr-manager','financial-analyst','business-analyst','mechanical-engineer',
  'electrical-engineer','civil-engineer','physician-assistant','physical-therapist',
  'teacher','lawyer','pharmacist','social-worker','operations-manager',
  'supply-chain-manager','cybersecurity-analyst','cloud-architect',
  'dental-hygienist','real-estate-agent',
];

const hourlySlugs = [
  '15-an-hour-is-how-much-a-year',
  '16-an-hour-is-how-much-a-year',
  '17-an-hour-is-how-much-a-year',
  '18-an-hour-is-how-much-a-year',
  '19-an-hour-is-how-much-a-year',
  '20-an-hour-is-how-much-a-year',
  '21-an-hour-is-how-much-a-year',
  '22-an-hour-is-how-much-a-year',
  '23-an-hour-is-how-much-a-year',
  '24-an-hour-is-how-much-a-year',
  '25-an-hour-is-how-much-a-year',
  '26-an-hour-is-how-much-a-year',
  '27-an-hour-is-how-much-a-year',
  '28-an-hour-is-how-much-a-year',
  '29-an-hour-is-how-much-a-year',
  '30-an-hour-is-how-much-a-year',
  '32-an-hour-is-how-much-a-year',
  '35-an-hour-is-how-much-a-year',
  '38-an-hour-is-how-much-a-year',
  '40-an-hour-is-how-much-a-year',
  '45-an-hour-is-how-much-a-year',
  '50-an-hour-is-how-much-a-year',
  '55-an-hour-is-how-much-a-year',
  '60-an-hour-is-how-much-a-year',
  '65-an-hour-is-how-much-a-year',
  '70-an-hour-is-how-much-a-year',
  '75-an-hour-is-how-much-a-year',
  '80-an-hour-is-how-much-a-year',
  '90-an-hour-is-how-much-a-year',
  '100-an-hour-is-how-much-a-year',
];

// Blog pages
const blogDir = new URL('../src/pages/blog', import.meta.url);
const blogFiles = readdirSync(blogDir)
  .filter(f => f.endsWith('.astro') && f !== 'index.astro')
  .map(f => f.replace('.astro', ''));

const staticUrls = [
  { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'monthly' },
  { loc: `${BASE_URL}/salary-calculator/`, priority: '1.0', changefreq: 'monthly' },
  { loc: `${BASE_URL}/hourly/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE_URL}/salary/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE_URL}/blog/`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${BASE_URL}/about/`, priority: '0.5', changefreq: 'yearly' },
  { loc: `${BASE_URL}/privacy/`, priority: '0.4', changefreq: 'yearly' },
  ...blogFiles.map(slug => ({
    loc: `${BASE_URL}/blog/${slug}/`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

// Hourly conversion pages
const hourlyUrls = hourlySlugs.map(slug => ({
  loc: `${BASE_URL}/hourly/${slug}/`,
  priority: '0.8',
  changefreq: 'monthly',
}));

// State Hub pages (50 states)
const stateHubUrls = states.map(state => ({
  loc: `${BASE_URL}/salary/${state}/`,
  priority: '0.8',
  changefreq: 'monthly',
}));

// Programmatic salary pages — 50 states × 30 jobs = 1,500 pages
const programmaticUrls = [];
for (const state of states) {
  for (const job of jobs) {
    programmaticUrls.push({
      loc: `${BASE_URL}/salary/${state}/${job}/`,
      priority: '0.7',
      changefreq: 'monthly',
    });
  }
}

const allUrls = [...staticUrls, ...hourlyUrls, ...stateHubUrls, ...programmaticUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);

const total = allUrls.length;
console.log(`✅ Sitemap generated: ${total} URLs total (${staticUrls.length} static/blog, ${hourlyUrls.length} hourly, ${stateHubUrls.length} state hubs, ${programmaticUrls.length} job pages)`);
