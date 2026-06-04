import { site } from "@/data/site";

export function GET() {
  const body = `# ${site.nameEn}

> Mainland China local investigation support for overseas Chinese and cross-border clients.

${site.companyEn} (${site.companyZh}) provides China-based investigation assistance, situation assessment, public information research, locating assistance, relationship investigation support, personal background assessment, debtor clue investigation, and private matter review.

## Core Service Areas

- Relationship investigation support in mainland China
- Personal background investigation assistance
- Locate someone in China
- Debtor location and clue investigation
- Private investigation support with compliance review

## Trust and Compliance

- 10+ years of industry experience
- Professional organization
- Integrity-first service
- Confidential case communication
- Assessment before case acceptance
- No hacking, phone tracking, bank records, hotel records, communication records, or unlawful personal data access

## Important URLs

- Homepage: ${site.url}/
- Services: ${site.url}/#services
- About: ${site.url}/about/
- Blog: ${site.url}/blog/
- Contact: ${site.url}/contact/
- Privacy Policy: ${site.url}/privacy-policy/
- Legal Disclaimer: ${site.url}/legal-disclaimer/
- Original official website: ${site.officialWebsite}

## Contact

Email: ${site.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
