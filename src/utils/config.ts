// Template configuration constants (matching Nunjucks variables)
export const TEMPLATE_CONFIG = {
  creatorName: 'FlyonUI',
  creatorUrl: 'https://flyonui.com/',
  templateName: 'FlyonUI',
  templateSuffix: 'Powered by FlyonUI',
  templateKeyword:
    'FlyonUI dashboard, FlyonUI dashboard, flyonui, html dashboard, web dashboard, frontend dashboard, responsive FlyonUI theme',
  licenseUrl: 'https://flyonui.com/license/',
  productPage: 'https://flyonui.com/templates',
  productBuyNow: 'https://flyonui.com/pro#pricing',
  documentation: 'https://flyonui.com/docs/pro/templates/',
  ogTitle: 'Tailwind CSS Dashboard by FlyonUI',
  ogImage:
    'https://cdn.flyonui.com/fy-assets/landing-page/template-page/dashboard/dashboard-default-1.png',
  ogType: 'product',
  support: 'https://flyonui.com/support',
  moreTemplates: 'https://flyonui.com/templates',
  changelog: 'https://flyonui.com/docs/changelog-pro/',
  twitterUrl: 'https://x.com/flyonui',
  githubUrl: 'https://github.com/themeselection/flyonui',
  discordUrl: 'https://discord.com/invite/kBHkY7DekX'
} as const;

// Theme configuration matching the original structure
export const THEME_CONFIG = {
  'free-landing-page': {
    default: 'light',
    light: 'light',
    dark: 'dark',
    system: {
      light: 'light',
      dark: 'dark'
    }
  }
} as const;

// Container classes matching the original Nunjucks variables
export const CONTAINER_CLASSES = {
  container: 'max-w-[1280px]',
  containerNav: 'max-w-[1280px]'
} as const;

// Helper function to get template description
export function getTemplateDescription(
  templateName: string = TEMPLATE_CONFIG.templateName
): string {
  return `${templateName}Pro is the best FlyonUI dashboard for responsive web apps. Streamline your app development process with ease.`;
}
