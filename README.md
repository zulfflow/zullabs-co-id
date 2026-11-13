# zullabs.co.id — situs resmi PT Zul Labs Teknologi

Situs statis tanpa build. Beranda (v2, 14 Nov 2026): gaya gelap sinematik, satu file `index.html` (CSS/JS inline, GSAP + Lenis dari CDN), aset di `media/`. Halaman legal & 404 masih memakai `assets/styles.css`.

- `index.html` — empat pintu (Studio, Dev, Tools, 3D), karya, ulasan klien, riwayat kerja, katalog cetak 3D, kontak
- `media/` — video & foto; foto katalog 3D = ilustrasi Wikimedia Commons (atribusi di halaman)
- `kebijakan-privasi.html`, `syarat-ketentuan.html` — halaman legal (UU PDP No. 27/2022)
- `CNAME` — domain kustom GitHub Pages (zullabs.co.id)

Pratinjau lokal: `npx serve .` lalu buka http://localhost:3000

## Setelah domain dibeli
1. Buat repo GitHub (akun zulfflow), push, aktifkan Pages dari branch `main` / root.
2. DNS di DomaiNesia: A record `@` → 185.199.108.153, .109.153, .110.153, .111.153; CNAME `www` → zulfflow.github.io
3. Centang "Enforce HTTPS" di pengaturan Pages.
4. Email kontak sudah diganti ke admin@zullabs.co.id (14 Nov 2026).
