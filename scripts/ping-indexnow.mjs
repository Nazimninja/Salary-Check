// scripts/ping-indexnow.mjs
// Pings the IndexNow API (Bing, Yandex, Seznam, Naver) with all core URLs for instant search engine indexing.

const HOST = 'salary.socialninjas.in';
const KEY = '8f7f1ad4b9714ebca808d4b3c95e1d90';
const KEY_LOCATION = `https://${HOST}/8f7f1ad4b9714ebca808d4b3c95e1d90.txt`;

const blogs = [
  '1099-vs-w2-tax-take-home-pay-comparison',
  'pay-transparency-laws-by-state',
  'biweekly-vs-semimonthly-paychecks',
  'living-wage-by-state-us',
  'how-to-adjust-w4-withholding',
  'hourly-to-salary-guide',
  'us-take-home-pay-guide',
  'salary-negotiation-guide',
  '401k-guide-beginners',
  'how-progressive-tax-brackets-work',
  'fica-tax-explained-social-security-medicare',
  'w2-vs-w4-forms-what-is-the-difference',
  'hsa-vs-fsa-pretax-savings-comparison',
  'state-income-tax-comparison-high-vs-low',
  'what-is-dependent-care-fsa-savings',
  'traditional-vs-roth-401k-tax-implications',
  'how-to-calculate-overtime-pay-flsa',
  'understanding-standard-deduction-benefits',
  'how-to-negotiate-hourly-rate-tips',
  'what-is-gross-vs-net-pay-deductions'
];

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/salary-calculator/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/about/`,
  `https://${HOST}/privacy/`,
  ...blogs.map(b => `https://${HOST}/blog/${b}/`)
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
};

console.log(`Submitting ${urls.length} URLs to IndexNow API...`);

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  console.log(`IndexNow Response: ${res.status} ${res.statusText}`);
  if (res.status === 200 || res.status === 202) {
    console.log('✅ Successfully submitted all core URLs to IndexNow!');
  } else {
    const text = await res.text();
    console.log('Response body:', text);
  }
} catch (err) {
  console.error('Error submitting to IndexNow:', err);
}
