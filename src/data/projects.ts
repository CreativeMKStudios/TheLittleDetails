export type Project = {
  title: string;
  when: string;
  summary: string;
  detail: string;
};

export const projects: Project[] = [
  {
    title: 'Ford Fiesta ST',
    when: 'July 2023',
    summary: 'Bought by Jack Thompson and driven home the same day.',
    detail:
      'Jack said the car was in great condition for its age, inside and out. He wrote that servicing and prep had been done thoroughly, and that he was shown the parts. He also said there was no car-salesman vibe.',
  },
  {
    title: 'Ford Focus ST estate',
    when: 'February 2023',
    summary: 'Sold to a buyer who travelled from Manchester.',
    detail:
      "The buyer could not test drive before the trip. After a phone and video call, he came by train. David picked him up from the station in the car. He wrote that it drove perfectly, was immaculately presented, and was freshly serviced and MOT'd.",
  },
  {
    title: 'Ford C-Max',
    when: 'March 2023',
    summary: 'A second C-Max, found after the first one was missed.',
    detail:
      'Peter Pullen missed a Ford C-Max that Little Details had for sale. David sourced another one. Peter said it was a better model, and that David and Jason checked in after the sale.',
  },
  {
    title: 'Renault Clio GT',
    when: 'October 2024',
    summary: 'Sold ready to drive, with care put into how it looked and ran.',
    detail:
      'The buyer wrote that the Clio GT was in impeccable condition, and that David took time to make the purchase comfortable. The review on the public listing did not include the buyer’s name.',
  },
  {
    title: 'First cars',
    when: '2023 to 2026',
    summary: 'Several families bought a first car, or a car after a break from driving.',
    detail:
      'Chris bought his son’s first car. Daniel Simkins bought his daughter’s first car and praised the deep clean. Lorraine Cronin bought a car for her son after a break from driving. An August 2025 review recommends David for a cheap first car for a young driver.',
  },
  {
    title: 'Gearbox prepared for export',
    when: 'June 2025',
    summary: 'A used gearbox steam cleaned so it could be shipped to South Africa.',
    detail:
      'Jackie Lister needed the part free of oil for shipping and customs. She wrote that David spent days on a very oily gearbox, then produced paperwork to show it had been steam cleaned and was safe to export.',
  },
];
