* {
  box-sizing: border-box;
}

:root {
  --bg: #070d17;
  --bg-soft: #0d1522;
  --panel: rgba(16, 24, 36, 0.92);
  --panel-strong: rgba(12, 19, 29, 0.98);
  --line: rgba(148, 163, 184, 0.14);
  --text: #edf4ff;
  --muted: #99abc4;
  --primary: #8ec5ff;
  --secondary: #b195ff;
  --accent: #94f0d4;
  --shadow: 0 26px 60px rgba(0, 0, 0, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(177, 149, 255, 0.15), transparent 30%),
    radial-gradient(circle at bottom right, rgba(142, 197, 255, 0.14), transparent 28%),
    var(--bg);
  color: var(--text);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  margin: 0 0 1rem;
  color: var(--muted);
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 1rem;
  color: var(--text);
  line-height: 1.12;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(7, 13, 23, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar {
  min-height: 74px;
  padding: 0;
}

.brand {
  font-size: 1.2rem;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: var(--text);
}

.brand span {
  color: var(--primary);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.navbar-nav a {
  color: var(--muted);
  font-weight: 600;
  transition: color 0.2s ease;
}

.navbar-nav a:hover,
.navbar-nav a:focus {
  color: var(--text);
}

.navbar-toggler {
  width: 36px;
  height: 30px;
  background: transparent;
  border: 0;
  position: relative;
  padding: 0;
}

.navbar-toggler span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 999px;
  position: absolute;
  left: 0;
}

.navbar-toggler span:nth-child(1) { top: 5px; }
.navbar-toggler span:nth-child(2) { top: 14px; }
.navbar-toggler span:nth-child(3) { top: 23px; }

.hero {
  position: relative;
  overflow: hidden;
  padding-top: 120px;
}

.hero-noise {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(142, 197, 255, 0.06), rgba(177, 149, 255, 0.05)),
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.02),
      rgba(255,255,255,0.02) 1px,
      transparent 1px,
      transparent 6px
    );
}

.hero .container {
  position: relative;
  z-index: 1;
}

.eyebrow,
.section-kicker {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--primary);
  background: rgba(142, 197, 255, 0.08);
  border: 1px solid rgba(142, 197, 255, 0.15);
}

.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5.2rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin: 22px 0 18px;
  max-width: 760px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  font-size: 1.08rem;
  max-width: 660px;
  color: var(--muted);
  margin-bottom: 26px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 26px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #04111d;
  box-shadow: 0 20px 40px rgba(142, 197, 255, 0.18);
}

.btn-secondary {
  background: rgba(15, 24, 36, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.15);
  color: var(--text);
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-tags span {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(15, 24, 36, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.15);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
}

.profile-card {
  background: linear-gradient(180deg, rgba(16, 25, 38, 0.96), rgba(10, 18, 29, 0.96));
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.profile-image-wrap {
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  margin-bottom: 18px;
}

.profile-image-wrap img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.profile-meta {
  margin-bottom: 18px;
}

.meta-label {
  margin-bottom: 10px;
  color: var(--primary);
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.profile-meta h3 {
  font-size: 1.3rem;
  margin: 0;
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.metric-row div {
  padding: 16px 12px;
  border-radius: 16px;
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
  text-align: center;
}

.metric-row strong {
  display: block;
  font-size: 1.08rem;
  color: var(--text);
}

.metric-row span {
  font-size: 0.72rem;
  color: var(--muted);
}

.section-heading {
  margin-bottom: 42px;
}

.section-heading.centered {
  text-align: center;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
  max-width: 760px;
}

.about-grid,
.skills-grid,
.projects-grid,
.experience-grid,
.cert-grid {
  display: grid;
  gap: 22px;
}

.about-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.glass-card,
.skill-card,
.project-card,
.exp-card,
.cert-item {
  background: rgba(16, 24, 36, 0.9);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.glass-card {
  padding: 28px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  position: relative;
  padding-left: 26px;
  color: var(--muted);
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent);
  font-weight: 900;
}

.dark-panel {
  background: rgba(8, 13, 23, 0.92);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.skills-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.skill-card {
  padding: 28px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.skill-card:hover,
.project-card:hover,
.exp-card:hover,
.cert-item:hover {
  transform: translateY(-4px);
  border-color: rgba(142, 197, 255, 0.28);
}

.skill-card i {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(142, 197, 255, 0.16), rgba(177, 149, 255, 0.16));
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 18px;
}

.skill-card h3 {
  font-size: 1.18rem;
  margin-bottom: 10px;
}

.projects-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  padding: 24px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.project-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.project-type {
  color: var(--primary);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-weight: 700;
}

.project-topline a {
  color: var(--text);
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: 700;
}

.project-card h3 {
  font-size: 1.42rem;
  margin-bottom: 10px;
}

.project-card ul {
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
}

.project-card li + li {
  margin-top: 6px;
}

.experience-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.exp-card {
  padding: 26px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.exp-number {
  display: inline-flex;
  color: var(--primary);
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.exp-card h3 {
  font-size: 1.14rem;
  margin-bottom: 10px;
}

.cert-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 760px;
  margin: 0 auto;
}

.cert-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.cert-item img {
  max-width: 100%;
}

.site-footer {
  background: #070d17;
  border-top: 1px solid var(--line);
  padding: 52px 0 18px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.footer-inner h3 {
  max-width: 680px;
  font-size: clamp(1.5rem, 2vw, 2.4rem);
  letter-spacing: -0.05em;
  margin: 0;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(16, 24, 36, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
  color: var(--text);
  font-weight: 600;
}

.copyright {
  padding-top: 18px;
  border-top: 1px solid var(--line);
  text-align: center;
  color: var(--muted);
  font-size: 0.92rem;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 991px) {
  .skills-grid,
  .projects-grid,
  .experience-grid,
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .section {
    padding: 90px 0;
  }

  .skills-grid,
  .projects-grid,
  .experience-grid,
  .about-grid,
  .cert-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 90px;
  }

  .profile-image-wrap img {
    height: 280px;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0 10px;
  }
}
