export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "123alu.com — Guide Spécialiste de la Menuiserie Aluminium, Baies & Pergolas",
  siteName: "123alu.com",
  domain: "123alu.com",
  url: "https://123alu.com",
  siteUrl: "https://123alu.com",
  description: "L'expertise indépendante des menuiseries en aluminium : baies coulissantes à rupture de pont thermique, pergolas bioclimatiques, vérandas et portails contemporains.",
  siteDescription: "L'expertise indépendante des menuiseries en aluminium : baies coulissantes à rupture de pont thermique, pergolas bioclimatiques, vérandas et portails contemporains.",
  defaultAuthor: "L'Atelier 123alu",
  repo: "jc842/123alu",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-bastion",
    fontFamily: "Space Grotesk, Plus Jakarta Sans, sans-serif",
    colorScheme: "charcoal",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "77",
    containerId: "2wODFgZY",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "123alu.com — Observatoire des Systèmes Aluminium & Architecture",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@123alu.com",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "baies-coulissantes", label: "Baies Coulissantes & Galandage" },
    { id: "pergolas-bioclimatiques", label: "Pergolas Bioclimatiques" },
    { id: "verandas-extensions", label: "Vérandas & Verrières" },
    { id: "portails-clotures", label: "Portails & Clôtures Alu" },
    { id: "innovation-rpt", label: "Rupture de Pont Thermique" },
  ],
};
