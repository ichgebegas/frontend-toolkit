import type { ReactNode } from "react";
import { ArrowDown, Gauge, Github, LayoutGrid } from "lucide-react";
import { OrbitingCircles } from "./OrbitingCircles";
import { appHref } from "../data/routes";

const githubUrl = "https://github.com/ichgebegas/frontend-toolkit";
const telegramUrl = "https://t.me/butterfly";
const profiUrl = "https://profi.ru/profile/KazakovAO18";
const logoRoot = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos";

const orbitLogos = [
  ["nextjs", "react", "vue", "vite", "spotify"],
  ["typescript", "tailwind", "astro", "vercel"],
  ["notion", "github", "figma", "slack", "laravel"],
  ["gatsby", "dropbox", "brave", "vscode", "sketch", "google"],
];

function OrbitLogo({ name }: { name: string }) {
  return <img alt="" src={`${logoRoot}/${name}-icon.svg`} />;
}

function Metric({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="home-metric">
      <span className="home-metric-icon">{icon}</span>
      <span>
        <strong>{title}</strong>
        <small>{children}</small>
      </span>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="site-container home-hero-layout">
        <div className="home-hero-copy">
          <h1 id="home-hero-title">Frontend Toolkit</h1>
          <p className="home-lead">
            Готовые UI-блоки и практические решения для коммерческих сайтов. Здесь я собираю
            проверенные компоненты, чтобы быстрее переносить удачные интерфейсы в новые проекты.
          </p>

          <div className="home-actions">
            <a className="home-primary-action" href="#categories">
              Смотреть категории
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="home-metrics">
            <Metric icon={<LayoutGrid aria-hidden="true" size={27} />} title="600+">
              Blocks
            </Metric>
            <Metric icon={<Gauge aria-hidden="true" size={29} />} title="97%-100%">
              Google Speed Avg
            </Metric>
          </div>

          <div className="home-contacts" aria-label="Контакты">
            <a href={telegramUrl} target="_blank" rel="noreferrer">
              <img
                className="telegram-icon"
                src={appHref("assets/telegram-svgrepo-com.svg")}
                alt=""
              />
              <span>Telegram</span>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={17} />
              <span>GitHub</span>
            </a>
            <a href={profiUrl} target="_blank" rel="noreferrer">
              <img alt="Profi.ru" src={appHref("assets/profiru-logo.jpg")} />
              <span>Profi.ru</span>
            </a>
          </div>
        </div>

        <div className="orbit-panel" aria-hidden="true">
          <div className="orbit-stage">
            <OrbitingCircles radius={310} speed={2}>
              {orbitLogos[0].map((name) => <OrbitLogo key={name} name={name} />)}
            </OrbitingCircles>
            <OrbitingCircles radius={390} reverse speed={2}>
              {orbitLogos[1].map((name) => <OrbitLogo key={name} name={name} />)}
            </OrbitingCircles>
            <OrbitingCircles radius={470} speed={2}>
              {orbitLogos[2].map((name) => <OrbitLogo key={name} name={name} />)}
            </OrbitingCircles>
            <OrbitingCircles radius={550} reverse>
              {orbitLogos[3].map((name) => <OrbitLogo key={name} name={name} />)}
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
}
