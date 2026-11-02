* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-soft: #0f1c2d;
  --panel: rgba(15, 28, 45, 0.9);
  --panel-strong: #111b2b;
  --card: #0d1727;
  --card-soft: #101d30;
  --card-border: rgba(148, 163, 184, 0.15);
  --primary: #66d9ef;
  --primary-2: #7c3aed;
  --accent: #7ee7c9;
  --text: #ecf3ff;
  --muted: #9bb0ca;
  --shadow: 0 30px 60px rgba(5, 11, 20, 0.55);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.25), transparent 30%),
    radial-gradient(circle at bottom right, rgba(102, 217, 239, 0.12), transparent 35%),
    var(--bg);
  color: var(--text);
  line-height: 1.7;
}

img {
  max-width: 100%;
  display: block;
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
  line-height: 1.2;
}

.container {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.section-heading {
  margin-bottom: 48px;
}

.section-heading.centered {
  text-align: center;
}

.section-kicker {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(102, 217, 239, 0.1);
  border: 1px solid rgba(102, 217, 239, 0.2);
  color: var(--primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
  max-width: 720px;
  letter-spacing: -0.04em;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(7, 17, 31, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.navbar {
  min-height: 78px;
  padding: 0;
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--text);
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
  background: transparent;
  border: 0;
  padding: 0;
  width: 36px;
  height: 30px;
  position: relative;
}

.navbar-toggler span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 4px;
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

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(124, 58, 237, 0.28), transparent 25%),
              radial-gradient(circle at 80% 30%, rgba(102, 217, 239, 0.16), transparent 30%);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  background: rgba(102, 217, 239, 0.08);
  border: 1px solid rgba(102, 217, 239, 0.18);
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(3rem, 6vw, 5.2rem);
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.95;
  margin-bottom: 22px;
  max-width: 800px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary), #7ee7c9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.typed-text {
  display: inline-block;
  min-height: 1.2em;
  color: var(--primary);
}

.lead {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 660px;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #081320;
  box-shadow: 0 18px 34px rgba(102, 217, 239, 0.28);
}

.btn-secondary {
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(15, 28, 45, 0.9);
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
  color: var(--text);
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 28, 45, 0.8);
  font-size: 0.82rem;
  font-weight: 600;
}

.profile-card {
  background: linear-gradient(180deg, rgba(12, 21, 34, 0.95), rgba(10, 18, 30, 0.95));
  border: 1px solid var(--card-border);
  border-radius: 28px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.profile-image-wrap {
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.18);
  margin-bottom: 18px;
}

.profile-image-wrap img {
  width: 100%;
  height: 430px;
  object-fit: cover;
}

.profile-card-content h3 {
  font-size: 1.7rem;
  margin-bottom: 8px;
}

.profile-card-content p {
  font-size: 0.96rem;
  margin-bottom: 20px;
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.mini-metrics div {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 16px;
  padding: 16px 10px;
  text-align: center;
}

.mini-metrics strong {
  display: block;
  color: var(--text);
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.mini-metrics span {
  color: var(--muted);
  font-size: 0.72rem;
}

.about-grid,
.experience-grid,
.skills-grid,
.projects-grid,
.cert-grid {
  display: grid;
  gap: 24px;
}

.about-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.about-card {
  background: rgba(15, 28, 45, 0.9);
  border: 1px solid var(--card-border);
  border-radius: 22px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--muted);
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent);
  font-weight: 800;
}

.dark-panel {
  background: rgba(11, 17, 31, 0.9);
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.skills-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.skill-card {
  background: rgba(15, 28, 45, 0.88);
  border: 1px solid var(--card-border);
  border-radius: 22px;
  padding: 28px 22px;
  box-shadow: var(--shadow);
}

.skill-card i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(102, 217, 239, 0.18), rgba(124, 58, 237, 0.18));
  color: var(--primary);
  font-size: 1.35rem;
  margin-bottom: 18px;
}

.skill-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.projects-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  background: linear-gradient(180deg, rgba(15, 28, 45, 0.96), rgba(10, 18, 30, 0.96));
  border: 1px solid var(--card-border);
  border-radius: 22px;
  padding: 24px 22px;
  box-shadow: var(--shadow);
}

.project-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.project-type {
  color: var(--primary);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.project-topline a {
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.82;
}

.project-card h3 {
  font-size: 1.4rem;
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
  background: rgba(15, 28, 45, 0.88);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 26px 22px;
  box-shadow: var(--shadow);
}

.exp-number {
  display: inline-flex;
  margin-bottom: 18px;
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.exp-card h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.cert-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 760px;
  margin: 0 auto;
}

.cert-item {
  background: rgba(15, 28, 45, 0.9);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
}

.cert-item img {
  width: 100%;
  max-width: 380px;
  height: auto;
}

.site-footer {
  background: #050d18;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  padding: 48px 0 18px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}

.footer-inner h3 {
  font-size: clamp(1.5rem, 2vw, 2.3rem);
  margin: 0;
  max-width: 680px;
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
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 28, 45, 0.85);
  font-weight: 600;
  color: var(--text);
}

.copyright {
  text-align: center;
  padding-top: 18px;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 991px) {
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0 8px;
  }

  .about-grid,
  .skills-grid,
  .projects-grid,
  .experience-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .hero {
    padding-top: 90px;
  }

  .about-grid,
  .skills-grid,
  .projects-grid,
  .experience-grid,
  .cert-grid {
    grid-template-columns: 1fr;
  }

  .profile-image-wrap img {
    height: 320px;
  }

  .section {
    padding: 90px 0;
  }
}
