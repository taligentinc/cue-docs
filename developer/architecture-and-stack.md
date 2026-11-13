# Architecture & Technology Stack

Cue Central is engineered with an emphasis on lightning-fast response times, operational reliability, and minimal server footprint. It combines modern edge reverse-proxying with lightweight, robust backend services.

---

## 🏛️ System Architecture

```mermaid
flowchart TB
    subgraph ClientLayer [Client & Device Layer]
        iOS[iOS / iPadOS PWA]
        Android[Android Chrome PWA]
        Desktop[macOS & Windows Browsers]
        StageDisplays[Stage Confidence Monitors]
    end

    subgraph EdgeLayer [Reverse Proxy & Security Boundary]
        Traefik[Traefik Edge Proxy]
        Authentik[Authentik SSO & Identity Outpost]
    end

    subgraph ApplicationLayer [Application Runtime]
        PHP[PHP 8.2+ FPM Runtime]
        StaticService[Static Asset Engine & Service Worker sw.js]
    end

    subgraph DataLayer [Storage & Persistence]
        SQLite[(Production SQLite Database cue.sqlite)]
        S3[(AWS S3 / Cloudflare R2 Sheet Music & Audio)]
    end

    subgraph DocsEngine [Documentation Service]
        GHPages[GitHub Pages SPA: dspillmangj.github.io/cuecentral-docs]
    end

    iOS --> Traefik
    Android --> Traefik
    Desktop --> Traefik
    StageDisplays --> Traefik

    Traefik <--> Authentik
    Traefik --> PHP
    Traefik --> StaticService

    PHP --> SQLite
    PHP --> S3
```

---

## 💻 Technology Stack Breakdown

| Tier | Technology | Purpose |
| :--- | :--- | :--- |
| **Edge Routing & SSL** | Traefik v3 | TLS termination, Let's Encrypt certificates, forward-auth headers. |
| **Authentication & IAM** | Authentik | Single Sign-On, MFA, forward authentication outpost, user groups. |
| **Application Runtime** | PHP 8.2+ | Server-side execution, template rendering, and database queries. |
| **Database** | SQLite 3 | Embedded, zero-configuration relational database with WAL mode. |
| **Object Storage** | AWS S3 / Cloudflare R2 | Large digital sheet music PDFs, audio demonstration MP3s. |
| **Frontend Styling** | Tailwind CSS + Custom CSS | Glassmorphism UI, responsive layouts, dark & light themes. |
| **Client PWA** | Service Worker (`sw.js`) | Asset caching, manifest generation, offline stage resilience. |
| **Documentation Hub** | SPA Engine + Marked.js + Prism | Instant Markdown docs rendering, client search, hosted on GitHub Pages. |

---

## ⚡ Performance Optimizations

1. **SQLite WAL Mode**:
   SQLite is operated in **Write-Ahead Logging (WAL)** mode (`PRAGMA journal_mode=WAL;`), enabling concurrent readers without blocking write transactions.
2. **Zero-Build Documentation**:
   The documentation engine requires zero compilation steps during content updates. Markdown files are ingested live via client-side fetch and rendered in milliseconds.
3. **Optimized Service Worker**:
   Core UI icons, typography, and layout files are cached on initial launch, reducing subsequent page load latency to near zero.
