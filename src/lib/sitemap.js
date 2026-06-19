import axios from "axios";
const currentDate =
    new Date().toISOString();

export async function generateSitemap() {
  const baseUrl = "https://www.commercialprojectsinfaridabad.com";
const apiDomain =
  "www.commercialprojectsinfaridabad.com";
  // 🔹 Static URLs
  const staticUrls = `
    <url><loc>${baseUrl}/</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/about</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/contact</loc>
      <lastmod>${currentDate}</lastmod></url>
    <url><loc>${baseUrl}/blog</loc>
      <lastmod>${currentDate}</lastmod></url>
  `;

  let blogUrls = [];

try {
  const res = await axios.get(
    `https://faridabad-backend.onrender.com/blogs/getSlugsByDomain/${apiDomain}`
  );

  // console.log("FULL RESPONSE:", res.data);

  // 🔥 RESPONSE HANDLE
  const slugs =
    res.data?.data ||
    res.data?.blogs ||
    res.data ||
    [];

  blogUrls = slugs.map((item) => {
    // Agar object hai
    const slug =
      typeof item === "string"
        ? item
        : item.slug;

    return `
      <url>
        <loc>${baseUrl}/blog/${slug}</loc>
      <lastmod>${currentDate}</lastmod>
      </url>
    `;
  });

} catch (err) {
  console.error(
    "Blog Sitemap Fetch Error:",
    err.message
  );
}
  

  // 🔹 Combine all
 const allUrls = [
  staticUrls,
 
  ...blogUrls,
].join("\n");

  // 🔹 XML Output
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;
}