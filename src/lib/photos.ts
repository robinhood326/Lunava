/**
 * Photography used across the site.
 *
 * All photos are from Unsplash and used under the Unsplash License (free for
 * commercial use, no attribution required — credited here as a courtesy).
 * They are served directly from the images.unsplash.com CDN; to self-host,
 * download them into /public/photos and change `src` to the local path.
 */

export interface Photo {
  src: string;
  alt: string;
  /** Unsplash photo id, kept for attribution and swapping. */
  id: string;
}

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

function photo(id: string, alt: string): Photo {
  return { id, src: unsplash(id), alt };
}

export const photos = {
  heroEngineer: photo("1580894908361-967195033215", "A software engineer writing code at a desk with two monitors"),
  headshotMan: photo("1758691737646-79dbce8e25fb", "A smiling engineer wearing glasses in an office"),
  remoteIncome: photo("1759435194622-22924891c367", "An engineer smiling while working on a laptop in a café"),
  workFromHome: photo("1612832164313-ac0d7e07b5ce", "An engineer working on a laptop from a sofa at home"),
  levelUp: photo("1766066014773-0074bf4911de", "A confident engineer holding a laptop in a modern office"),
  conversation: photo("1527689368864-3a821dbccc34", "Two women talking through ideas while looking at a laptop"),
  handshake: photo("1686771416282-3888ddaf249b", "Two people shaking hands across a desk with a laptop"),
  teamCollaborating: photo("1603201667230-bd139210db18", "Four people collaborating around a laptop in a modern office"),
  teamLaughing: photo("1522202176988-66273c2fd55f", "Three colleagues laughing together at a table with laptops"),
  firstRole: photo("1758873268783-967d13f0c163", "A woman celebrating with her arms raised at her desk"),
  higherIncome: photo("1758518731027-78a22c8852ec", "A man celebrating good news while looking at his laptop"),
  promotion: photo("1713946598491-4f85decbeaaf", "Two colleagues giving each other a high five at work"),
  greatTeam: photo("1576267423048-15c0040fec78", "A happy team gathered around a laptop celebrating together"),
  remoteWork: photo("1765648496278-e42497a5e40f", "A woman smiling while working on a laptop outdoors"),
  // Career progression (How It Works): from a first laptop at home to a thriving career.
  progressStart: photo("1635959952534-d99f969554a6", "A young engineer teaching himself to code on a laptop at a cluttered home desk"),
  progressFirstRole: photo("1549692520-acc6669e2f0c", "An engineer in a plaid shirt writing code at a desk in an office"),
  progressGrowing: photo("1732210038505-34a70d3b45a0", "Two engineers laughing together while working at a computer"),
  progressSenior: photo("1581091877018-dac6a371d50f", "Two colleagues discussing ideas at a whiteboard"),
  progressThriving: photo("1541535881962-3bb380b08458", "A successful engineer in a suit working on a laptop on a balcony overlooking city skyscrapers"),
} satisfies Record<string, Photo>;

export type PhotoName = keyof typeof photos;
