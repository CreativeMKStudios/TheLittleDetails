export type Service = {
  slug: string;
  title: string;
  kicker: string;
  lede: string;
  description: string;
  paragraphs: string[];
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'used-cars',
    title: 'Used cars',
    kicker: 'For sale',
    lede: 'Prepared used cars from the Sandy workshop. You view them at the unit, not from a supermarket forecourt.',
    description:
      'Used cars for sale at The Little Details in Sandy. Call to ask what is in the workshop now.',
    paragraphs: [
      'Google lists The Little Details Vehicle Enhancements as a used car dealer. The company is also registered to sell used cars and light motor vehicles.',
      'The cars buyers talk about include a Ford Fiesta ST, a Ford Focus ST estate, a Ford C-Max, a Renault Clio GT, and first cars for sons and daughters. Stock changes. A photo on this site is not a promise that the same car is still for sale.',
      'Jack Thompson wrote that he saw the parts that had been serviced, then bought a Fiesta ST and drove it home the same day. That is the sort of visit to expect: a look around, a straight talk, and no pushy sales talk.',
    ],
    points: [
      'View the car at Unit 2a, Stockton End.',
      'Call first on 07968 593591.',
      'Ask what work was done before the handover.',
    ],
  },
  {
    slug: 'finding-a-car',
    title: 'Help finding a car',
    kicker: 'Sourcing',
    lede: 'If the right car is not in the unit, David has found cars for buyers who already know what they need.',
    description:
      'Help finding a used car around a budget, from the Sandy workshop. Call David and say what you need.',
    paragraphs: [
      'Molly Boudier wrote that David helped find a car in a short time and within budget. Chris bought his son’s first car through Dave after a few bad experiences elsewhere.',
      'Peter Pullen missed a Ford C-Max that was up for sale. David then sourced another C-Max, and Peter said it was a better model than the one he had missed.',
      'Google also groups two reviews under van sourcing. If you need a van, call and ask. This page does not promise a van is waiting.',
    ],
    points: [
      'Say the budget and the job the car has to do.',
      'First cars come up often in the reviews.',
      'You still come to Sandy to see the car.',
    ],
  },
  {
    slug: 'preparation',
    title: 'Preparation and service',
    kicker: 'Before handover',
    lede: 'The work buyers notice is the work done before the keys are handed over.',
    description:
      'Servicing, checks, and presentation before a car leaves the Sandy workshop.',
    paragraphs: [
      'The company is registered for maintenance and repair of motor vehicles, as well as used car sales. A Google highlight says a general service was carried out to a very high standard.',
      'Jack Thompson wrote that servicing and prep had been done thoroughly, and that he was shown the parts. A Focus ST estate buyer wrote that his car was immaculately presented, and freshly serviced and MOT’d. That review does not mean the unit is an MOT test station. It means that car was sold with a fresh MOT.',
      'Ask which jobs were done on the car you are looking at. Do not guess from a photo.',
    ],
    points: [
      'Ask to see what was replaced or cleaned.',
      'Ask about the MOT and service history.',
      'Get any warranty answer before you pay.',
    ],
  },
  {
    slug: 'valeting',
    title: 'Valeting and deep cleans',
    kicker: 'Presentation',
    lede: 'Cars leave clean. Some customers also come back for valeting on cars they already own.',
    description:
      'Deep cleans and valeting at the Sandy workshop. Call for what can be done on your car. No public price list.',
    paragraphs: [
      'Daniel Simkins wrote that the deep clean on his daughter’s first car made the difference. He said the car was in better shape than others the family had seen.',
      'Patrick Campbell wrote that the service was top class and that he would use the workshop for all his car valeting. Jackie Lister asked David to steam clean a very oily gearbox so it could be shipped to South Africa. David also produced paperwork for customs.',
      'There is no menu of coatings, and no prices on this site. Call 07968 593591 and describe the car and the job.',
    ],
    points: [
      'Deep cleans are mentioned by buyers.',
      'One customer plans to return for valeting.',
      'Steam cleaning was used on a gearbox for export.',
    ],
  },
];
