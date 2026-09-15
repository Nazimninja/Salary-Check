// scripts/generate-sitemap.mjs
// Runs before `astro build` to generate a complete sitemap with all 1,500 programmatic salary pages.

import { writeFileSync } from 'fs';

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

// Static & Blog pages
import { readdirSync } from 'fs';
const blogDir = new URL('../src/pages/blog', import.meta.url);
const blogFiles = readdirSync(blogDir)
  .filter(f => f.endsWith('.astro') && f !== 'index.astro')
  .map(f => f.replace('.astro', ''));

const staticUrls = [
  { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'monthly' },
  { loc: `${BASE_URL}/salary-calculator/`, priority: '1.0', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${BASE_URL}/about/`, priority: '0.5', changefreq: 'yearly' },
  { loc: `${BASE_URL}/privacy/`, priority: '0.4', changefreq: 'yearly' },
  ...blogFiles.map(slug => ({
    loc: `${BASE_URL}/blog/${slug}/`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

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

const allUrls = [...staticUrls, ...programmaticUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);

const total = allUrls.length;
const programmatic = programmaticUrls.length;
console.log(`✅ Sitemap generated: ${total} URLs total (${programmatic} programmatic salary pages)`);
