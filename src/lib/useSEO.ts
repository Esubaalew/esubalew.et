import { useEffect } from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
};

const useSEO = ({
  title = 'Esubalew Chekol | Fullstack Developer',
  description = 'Portfolio of Esubalew Chekol, a Fullstack Developer specializing in Python, JavaScript, React, Django and Telegram bot development.',
  keywords = 'Esubalew Chekol, fullstack developer, web development, Python, JavaScript, React, Django, Telegram bots',
  ogImage = '/og-image.svg',
  ogUrl = 'https://esubalew.et',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Get existing meta tags or create new ones
    const metaTags: Record<string, HTMLMetaElement> = {
      description: getOrCreateMetaTag('description'),
      keywords: getOrCreateMetaTag('keywords'),
      author: getOrCreateMetaTag('author'),
      'og:title': getOrCreateMetaTag('property', 'og:title'),
      'og:description': getOrCreateMetaTag('property', 'og:description'),
      'og:image': getOrCreateMetaTag('property', 'og:image'),
      'og:url': getOrCreateMetaTag('property', 'og:url'),
      'og:type': getOrCreateMetaTag('property', 'og:type'),
      'og:site_name': getOrCreateMetaTag('property', 'og:site_name'),
      'twitter:card': getOrCreateMetaTag('name', 'twitter:card'),
      'twitter:title': getOrCreateMetaTag('name', 'twitter:title'),
      'twitter:description': getOrCreateMetaTag('name', 'twitter:description'),
      'twitter:image': getOrCreateMetaTag('name', 'twitter:image'),
      'twitter:creator': getOrCreateMetaTag('name', 'twitter:creator'),
    };

    // Update meta tag contents
    metaTags.description.content = description;
    metaTags.keywords.content = keywords;
    metaTags.author.content = 'Esubalew Chekol';
    metaTags['og:title'].content = title;
    metaTags['og:description'].content = description;
    metaTags['og:image'].content = ogImage;
    metaTags['og:url'].content = ogUrl;
    metaTags['og:type'].content = ogType;
    metaTags['og:site_name'].content = 'Esubalew Chekol';
    metaTags['twitter:card'].content = twitterCard;
    metaTags['twitter:title'].content = title;
    metaTags['twitter:description'].content = description;
    metaTags['twitter:image'].content = ogImage;
    metaTags['twitter:creator'].content = '@esubaalew';

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    (canonicalLink as HTMLLinkElement).href = ogUrl;
  }, [title, description, keywords, ogImage, ogUrl, ogType, twitterCard]);
};

// Helper function to get or create meta tags
const getOrCreateMetaTag = (attributeName: string, attributeValue?: string): HTMLMetaElement => {
  const selector = attributeValue
    ? `meta[${attributeName}="${attributeValue}"]`
    : `meta[name="${attributeName}"]`;
  
  let tag = document.querySelector(selector) as HTMLMetaElement;
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue || attributeName);
    document.head.appendChild(tag);
  }
  
  return tag;
};

export default useSEO;