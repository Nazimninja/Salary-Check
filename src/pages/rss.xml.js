export async function GET() {
  const siteUrl = 'https://salary.socialninjas.in';

  const posts = [
    { slug: 'why-is-my-paycheck-so-low-tax-deductions', title: 'Why Is My Paycheck So Low? Why Gross vs. Net Pay Has Such a Big Gap', excerpt: 'Wondering why your paycheck is hundreds of dollars lower than expected? Understand federal withholding, FICA, state taxes, and pre-tax deductions.', tag: 'Troubleshooting', date: 'Sep 24, 2026' },
    { slug: 'how-to-read-a-pay-stub-guide', title: 'How to Read a Pay Stub: Every Line Item and Tax Code Explained', excerpt: 'Learn how to read your pay stub like a pro. Decode abbreviations like OASDI, FED MED, YTD, Pre-Tax, and Gross vs Net earnings step-by-step.', tag: 'Paystub Guide', date: 'Sep 24, 2026' },
    { slug: 'how-to-adjust-w4-to-increase-take-home-pay', title: 'How to Adjust Your W-4 to Get More Money in Every Paycheck', excerpt: 'Stop giving the IRS an interest-free loan. Learn how to legally adjust your Form W-4 to increase your take-home pay immediately.', tag: 'Tax Strategy', date: 'Sep 24, 2026' },
    { slug: '1099-vs-w2-tax-take-home-pay-comparison', title: '1099 vs. W-2 Tax & Pay: How Much More Should a Contractor Make?', excerpt: 'Comparing 1099 contractor vs W-2 employee take-home pay. Learn why you need 25-40% higher compensation as a contractor to break even.', tag: 'Tax', date: 'Sep 14, 2026' },
    { slug: 'pay-transparency-laws-by-state', title: 'US Pay Transparency Laws by State (2026): Salary Range Rights', excerpt: 'State-by-state guide to US pay transparency laws. Learn which states require employers to post salary ranges and how to negotiate the top of the band.', tag: 'Guide', date: 'Sep 10, 2026' },
    { slug: 'biweekly-vs-semimonthly-paychecks', title: 'Biweekly vs. Semi-Monthly Pay: The 26 vs. 24 Paycheck Breakdown', excerpt: 'Understand the difference between biweekly (26 paychecks) and semi-monthly (24 paychecks) pay schedules, 3-paycheck months, and how to budget.', tag: 'Guide', date: 'Sep 05, 2026' },
    { slug: 'living-wage-by-state-us', title: 'What is a Living Wage in 2026? State-by-State Salary Analysis', excerpt: 'Discover what a true living wage is across US states in 2026. Compare minimum wage, median income, and the salary needed to live comfortably.', tag: 'Savings', date: 'Aug 28, 2026' },
    { slug: 'how-to-adjust-w4-withholding', title: 'How to Fill Out Form W-4 to Stop Owing Taxes', excerpt: 'Step-by-step guide to filling out IRS Form W-4. Avoid surprise tax bills in April or increase your monthly take-home paycheck without penalties.', tag: 'Tax', date: 'Aug 20, 2026' },
    { slug: 'hourly-to-salary-guide', title: 'Hourly to Salary: The Complete US Guide (2025)', excerpt: 'Everything you need to know about converting hourly wages to annual salary — formulas, overtime, PTO, and real examples for every pay bracket.', tag: 'Guide', date: 'Jun 18, 2025' },
    { slug: 'us-take-home-pay-guide', title: 'US Take-Home Pay: What Comes Out of Your Paycheck and Why', excerpt: 'Federal tax, Social Security, Medicare, state tax, 401k — a clear breakdown of every deduction on your US paycheck and how to keep more of your money.', tag: 'Tax', date: 'Jun 16, 2025' },
    { slug: 'salary-negotiation-guide', title: 'How to Negotiate Salary in the US: Scripts, Timing and Tactics', excerpt: 'The average American leaves $5,000–$10,000 on the table by not negotiating. Here is exactly how to ask for more — and what to say when they push back.', tag: 'Negotiation', date: 'Jun 14, 2025' },
    { slug: '401k-guide-beginners', title: '401k Explained: How Much Should You Contribute in 2025?', excerpt: 'A plain-English guide to 401k plans — contribution limits, employer match, traditional vs Roth, and how much to save at every income level.', tag: 'Retirement', date: 'Jun 12, 2025' },
    { slug: 'how-progressive-tax-brackets-work', title: 'How Progressive Tax Brackets Work in the US', excerpt: 'A common tax myth is that moving into a higher tax bracket reduces your take-home pay. Learn how progressive tax brackets actually work.', tag: 'Tax', date: 'Jun 25, 2026' },
    { slug: 'fica-tax-explained-social-security-medicare', title: 'FICA Tax Explained: Social Security and Medicare', excerpt: 'When you look at your US paycheck, FICA is one of the largest deductions. Here is what FICA tax pays for and how the caps work.', tag: 'Tax', date: 'Jun 24, 2026' },
    { slug: 'w2-vs-w4-forms-what-is-the-difference', title: 'W-2 vs. W-4 Tax Forms: What is the Difference?', excerpt: 'You fill out a W-4 form when you start a job. Your employer sends you a W-2 form in January. Learn the key differences.', tag: 'Tax', date: 'Jun 23, 2026' },
    { slug: 'hsa-vs-fsa-pretax-savings-comparison', title: 'HSA vs. FSA: Pre-Tax Healthcare Savings Compared', excerpt: 'HSAs and FSAs are excellent tools for reducing your taxable income while saving for medical expenses. Compare their key differences.', tag: 'Savings', date: 'Jun 22, 2026' },
    { slug: 'state-income-tax-comparison-high-vs-low', title: 'US State Income Taxes Compared: High vs. No Tax States', excerpt: 'Where you live in the US has a massive impact on your take-home pay. Compare flat tax, progressive tax, and tax-free states.', tag: 'Tax', date: 'Jun 21, 2026' },
    { slug: 'what-is-dependent-care-fsa-savings', title: 'What is a Dependent Care FSA? Pre-Tax Childcare Savings', excerpt: 'Childcare is one of the largest expenses for working parents. A Dependent Care FSA allows you to pay for care with pre-tax dollars.', tag: 'Savings', date: 'Jun 20, 2026' },
    { slug: 'traditional-vs-roth-401k-tax-implications', title: 'Traditional vs. Roth 401(k): Tax Differences', excerpt: 'Deciding between a Traditional and a Roth 401(k) is one of the most important decisions you will make for retirement. Learn the rules.', tag: 'Retirement', date: 'Jun 19, 2026' },
    { slug: 'how-to-calculate-overtime-pay-flsa', title: 'How to Calculate Overtime Pay Under FLSA Rules', excerpt: 'Non-exempt employees must receive overtime pay for hours worked over 40 in a workweek at a rate not less than 1.5 times their regular rate.', tag: 'Guide', date: 'Jun 18, 2026' },
    { slug: 'understanding-standard-deduction-benefits', title: 'Understanding the Standard Deduction: How It Lowers Your Tax', excerpt: 'The standard deduction is a fixed dollar amount that the IRS allows you to subtract from your income to determine taxable income.', tag: 'Tax', date: 'Jun 17, 2026' },
    { slug: 'how-to-negotiate-hourly-rate-tips', title: 'How to Negotiate Your Hourly Rate: Tips, Scripts, and Tactics', excerpt: 'Negotiating an hourly wage requires a different approach than negotiating a yearly salary. Research market rates and use scripts.', tag: 'Negotiation', date: 'Jun 16, 2026' },
    { slug: 'what-is-gross-vs-net-pay-deductions', title: 'Gross Pay vs. Net Pay: Understanding Paycheck Deductions', excerpt: 'Gross pay is the total amount you earn before any deductions. Net pay is the money that actually hits your bank account.', tag: 'Guide', date: 'Jun 15, 2026' },
  ];

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}/`;
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>info@socialninjas.in (Social Ninja's)</author>
      <category><![CDATA[${post.tag}]]></category>
    </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SalaryTools Blog – US Paycheck, Tax, &amp; Salary Guides</title>
    <link>${siteUrl}/blog</link>
    <description>Guides, tax formulas, and tutorials for US salaries, payroll deductions, hourly rates, and take-home pay by Social Ninja's.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>info@socialninjas.in (Social Ninja's)</managingEditor>
    <webMaster>info@socialninjas.in (Social Ninja's)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Social Ninja's. All rights reserved.</copyright>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
