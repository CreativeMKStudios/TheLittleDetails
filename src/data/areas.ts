export type Area = {
  slug: string;
  name: string;
  county: string;
  distance: string;
  lede: string;
  description: string;
  paragraphs: string[];
};

export const areas: Area[] = [
  {
    slug: 'sandy',
    name: 'Sandy',
    county: 'Bedfordshire',
    distance: 'The workshop is in the town.',
    lede: 'The unit is at Stockton End in Sandy, SG19 1SB. This is the only address.',
    description:
      'The Little Details workshop is in Sandy, Bedfordshire. Used cars, preparation, and valeting at Unit 2a, Stockton End.',
    paragraphs: [
      'Sandy is the home of the workshop. The address is Unit 2a, 1 Stockton End, Sandy, SG19 1SB. The Google pin sits at that unit.',
      'Call before you come. The Google listing does not show opening hours, so the door may be shut if David is out in a car.',
      'Sandy is in Central Bedfordshire, close to the A1. You do not need an appointment system online. The phone number is 07968 593591.',
    ],
  },
  {
    slug: 'biggleswade',
    name: 'Biggleswade',
    county: 'Bedfordshire',
    distance: 'About 4 miles north of Sandy.',
    lede: 'Biggleswade is a short drive north. You still view the car at the Sandy unit.',
    description:
      'Used cars in Sandy for buyers coming from Biggleswade. The workshop is about 4 miles south, at Stockton End.',
    paragraphs: [
      'Biggleswade is the next town north of Sandy, about 4 miles away. The drive is a short one on local roads.',
      'There is no second branch in Biggleswade. Buyers come to Unit 2a, 1 Stockton End, Sandy.',
      'Call 07968 593591 before you leave, and ask which car is in. Stock is not listed online.',
    ],
  },
  {
    slug: 'potton',
    name: 'Potton',
    county: 'Bedfordshire',
    distance: 'About 4 miles east of Sandy.',
    lede: 'Potton is a short hop east. The cars are at the Sandy workshop, not in Potton.',
    description:
      'Visit The Little Details from Potton. The Sandy workshop is about 4 miles west, on Stockton End.',
    paragraphs: [
      'Potton sits a few miles east of Sandy. Most people drive across in well under 15 minutes.',
      'The workshop does not publish a mobile route around Potton. Valeting and car views happen at the unit.',
      'If you want a first car or a specific model, say so on the phone. David has found cars for buyers who did not start with one on the floor.',
    ],
  },
  {
    slug: 'gamlingay',
    name: 'Gamlingay',
    county: 'Cambridgeshire',
    distance: 'About 5 miles east of Sandy.',
    lede: 'Gamlingay is just over the county line. The workshop is still the Sandy unit.',
    description:
      'A Sandy used-car workshop for visitors from Gamlingay, about 5 miles west of the village.',
    paragraphs: [
      'Gamlingay is in Cambridgeshire, about 5 miles east of Sandy. You cross a short stretch of country road.',
      'The company is registered in Sandy, and the Google listing has one address. Do not look for a Gamlingay shop.',
      'The same phone number covers every town on this site: 07968 593591.',
    ],
  },
  {
    slug: 'st-neots',
    name: 'St Neots',
    county: 'Cambridgeshire',
    distance: 'About 8 miles east of Sandy.',
    lede: 'St Neots is a straightforward drive east. Plan to view the car in Sandy.',
    description:
      'From St Neots, The Little Details is about 8 miles west in Sandy. Call before you drive over.',
    paragraphs: [
      'St Neots is about 8 miles east of Sandy. Allow around 20 minutes, longer in traffic near the town centre.',
      'Buyers from further away have made the trip. One Focus ST buyer came down by train from Manchester, and David met him at the station in the car. That was arranged by phone. It is not a standing offer of collection.',
      'Ask for the address if you have not been to Stockton End before. It is an industrial unit, not a high-street showroom.',
    ],
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Bedfordshire',
    distance: 'About 9 miles west of Sandy.',
    lede: 'Bedford is the county town, about 9 miles west. The cars stay in Sandy until you come to see them.',
    description:
      'Bedford buyers can view used cars at The Little Details in Sandy, about 9 miles east.',
    paragraphs: [
      'Bedford is about 9 miles west of Sandy. The drive is usually around 20 minutes, depending on the A1 and town traffic.',
      'People compare the workshop with larger car supermarkets. Jack Thompson wrote that the visit felt relaxed, and that he bought the car the same day.',
      'Bring the questions you care about: service work, MOT, and what happens if something is not right after you leave. Get those answers before you buy.',
    ],
  },
];
