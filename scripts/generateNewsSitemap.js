// scripts/generateNewsSitemap.js
import fs from "fs";
import path from "path";
import admin from "firebase-admin";

const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || "./serviceAccountKey.json";
if (!fs.existsSync(serviceAccountPath)) {
  console.error("Service account key not found at:", serviceAccountPath);
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"))),
});

const db = admin.firestore();

// sesuaikan nama koleksi
const COLLECTION_NAME = "articles"; 

async function generate() {
  const snapshot = await db.collection(COLLECTION_NAME).orderBy("date", "desc").get();
  const urls = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    // pastikan punya date / slug / id
    const id = doc.id;
    const slug = data.slug || id; // jika pakai slug, gunakan; else pakai id
    const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString();
    const loc = `https://gcnischool.or.id/artikel/${slug}`;

    urls.push({ loc, lastmod: date });
  });

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const xmlFooter = `</urlset>\n`;

  const urlEntries = urls.map(u => {
    return `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>\n`;
  }).join("");

  const xml = xmlHeader + urlEntries + xmlFooter;

  const outPath = path.join(process.cwd(), "public", "sitemap-news.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log("✔ sitemap-news.xml generated:", outPath);
}

generate().catch(err => {
  console.error("Error generating sitemap:", err);
  process.exit(1);
});
