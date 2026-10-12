import { areas } from '../data/areas';
import { business } from '../data/business';

export function absoluteUrl(site: URL | undefined, pathname: string) {
  const origin = site ?? new URL('https://creativemkstudios.github.io');
  return new URL(pathname, origin).href;
}

export function businessNode(siteUrl: string, imageUrl: string) {
  return {
    '@type': ['AutoDealer', 'AutoRepair'],
    '@id': `${siteUrl}#business`,
    name: business.name,
    legalName: business.legalName,
    description:
      'Used car dealer and vehicle workshop in Sandy, Bedfordshire. Director: David Richard Oram.',
    url: siteUrl,
    telephone: business.phoneTel,
    image: [imageUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.lat,
      longitude: business.lng,
    },
    hasMap: business.mapsUrl,
    areaServed: areas.map((area) => ({
      '@type': 'City',
      name: `${area.name}, ${area.county}`,
    })),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'UK Company Number',
      value: business.companyNumber,
    },
    employee: {
      '@type': 'Person',
      name: business.director,
      jobTitle: 'Director',
    },
    sameAs: [business.mapsUrl, business.companiesHouseUrl],
  };
}

export function crumbNode(
  crumbs: { name: string; href: string }[],
  origin: URL | undefined,
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(origin, crumb.href),
    })),
  };
}
