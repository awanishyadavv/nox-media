// lib/schema.tsx
import React from 'react';

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOX Media',
    url: 'https://www.noxmedia.in',
    logo: 'https://www.noxmedia.in/logo.png', // Replace with actual logo URL
    sameAs: [
      'https://www.facebook.com/noxmedia', // Replace with actual social links
      'https://www.twitter.com/noxmedia',
      'https://www.linkedin.com/company/noxmedia',
      'https://www.instagram.com/noxmedia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210', // Replace with actual phone
      contactType: 'customer service',
      email: 'info@noxmedia.in', // Replace with actual email
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Park, Whitefield',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560066',
      addressCountry: 'IN',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NOX Media',
    url: 'https://www.noxmedia.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.noxmedia.in/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalMarketingAgency',
    name: 'NOX Media',
    image: 'https://www.noxmedia.in/nox-media-building.jpg', // Replace with actual image
    '@id': 'https://www.noxmedia.in',
    url: 'https://www.noxmedia.in',
    telephone: '+91-98765-43210', // Replace with actual phone
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Park, Whitefield',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560066',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716, // Replace with actual coordinates
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/noxmedia', // Replace with actual social links
      'https://www.twitter.com/noxmedia',
      'https://www.linkedin.com/company/noxmedia',
      'https://www.instagram.com/noxmedia',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema = ({ name, description, url }: { name: string; description: string; url: string }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'NOX Media',
      url: 'https://www.noxmedia.in',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BlogPostSchema = ({
  title,
  description,
  slug,
  date,
  image,
  authorName,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  authorName: string;
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NOX Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.noxmedia.in/logo.png', // Replace with actual logo URL
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.noxmedia.in/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = ({ questions }: { questions: Array<{ question: string; answer: string }> }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};