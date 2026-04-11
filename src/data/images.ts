import { blurDataURLs } from "./blur-data";

export interface ImageData {
  src: string;
  alt: string;
  blurDataURL?: string;
}

// Prepends basePath so images resolve correctly on GitHub Pages subpath deploys.
// When NEXT_PUBLIC_BASE_PATH is "" (custom domain), this is a no-op.
const base = "";
const img = (path: string) => `${base}${path}`;

// Caption texts from Facebook posts
const captions: Record<string, string> = {
  "9_2022_12_14__13_32_17.jpg":
    "AC-service for alle biltyper — hybrid, elbil og vanlige biler. Liten bil fra 999 kr + gass.",
  "4_2023_11_30__14_07_39.jpg":
    "Bilvask: utvendig liten bil fra 299 kr, stor bil fra 350 kr. Innvendig og utvendig fra 499 kr.",
  "13_2022_06_22__10_30_10.jpg":
    "Samarbeidspartner med BestDrive — dekkforhandler. Kontakt oss for gode tilbud på dekk.",
  "14_2022_06_20__11_11_00.jpg":
    "Bilvask i kaldt vær — bilen oppbevares i varm garasje hele natten og leveres helt tørr.",
};

// Hero candidates — newest, sharpest workshop shots
export const heroImages: ImageData[] = [
  {
    src: img("/images/3_2023_12_02__21_07_04.jpg"),
    alt: "Lillehammer Bilverksted — verkstedhall med løftebukker og verktøy",
    blurDataURL: blurDataURLs["3_2023_12_02__21_07_04.jpg"],
  },
  {
    src: img("/images/2_2024_03_05__10_58_21.jpg"),
    alt: "Lillehammer Bilverksted — arbeidsområde med biler inne til service",
    blurDataURL: blurDataURLs["2_2024_03_05__10_58_21.jpg"],
  },
];

// Owner photos
export const ownerImages = {
  nasih: {
    src: img("/images/nasih2.png"),
    alt: "Nasih Raof Ahmed — daglig leder, Lillehammer Bilverksted AS",
    blurDataURL: blurDataURLs["nasih2.png"],
  },
  nasihEier: {
    src: img("/images/nasih_eier.png"),
    alt: "Nasih Raof Ahmed — eier og styreleder, Lillehammer Bilverksted AS",
    blurDataURL: blurDataURLs["nasih_eier.png"],
  },
};

// All gallery images sorted newest-first (excluding hero + owner photos)
const galleryFileNames = [
  "3_2023_12_02__21_07_04.jpg",
  "4_2023_11_30__14_07_39.jpg",
  "5_2023_11_10__14_34_59.jpg",
  "6_2023_11_10__14_34_59.jpg",
  "7_2023_11_10__14_34_59.jpg",
  "8_2023_11_10__14_34_59.jpg",
  "9_2022_12_14__13_32_17.jpg",
  "10_2022_06_25__13_28_31.jpg",
  "11_2022_06_25__13_28_31.jpg",
  "12_2022_06_25__13_28_31.jpg",
  "13_2022_06_22__10_30_10.jpg",
  "14_2022_06_20__11_11_00.jpg",
  "15_2022_05_13__08_24_46.jpg",
  "16_2022_04_11__08_15_35.jpg",
  "17_2022_04_07__10_53_33.jpg",
  "18_2022_04_07__10_47_06.jpg",
  "19_2022_04_07__09_41_15.jpg",
  "20_2022_03_29__08_38_02.jpg",
  "21_2022_03_29__08_38_02.jpg",
  "22_2022_03_29__08_38_02.jpg",
  "23_2022_03_26__09_13_24.jpg",
  "24_2022_03_23__10_59_22.jpg",
  "25_2022_03_23__10_59_22.jpg",
  "26_2022_03_23__10_59_22.jpg",
  "27_2016_09_18__18_24_45.jpg",
  "28_2016_09_18__18_24_44.jpg",
  "29_2016_09_18__18_24_44.jpg",
  "30_2016_09_18__18_24_43.jpg",
  "31_2016_09_18__18_24_42.jpg",
  "32_2016_09_18__18_24_41.jpg",
  "33_2016_09_18__18_24_40.jpg",
  "34_2014_11_16__16_37_14.jpg",
  "35_2014_11_16__16_36_57.jpg",
  "36_2014_11_16__16_36_38.jpg",
  "37_2014_11_16__16_30_03.jpg",
];

export const galleryImages: ImageData[] = galleryFileNames.map((filename) => ({
  src: img(`/images/${filename}`),
  alt:
    captions[filename] ||
    `Lillehammer Bilverksted — bilde fra verkstedet`,
  blurDataURL: blurDataURLs[filename],
}));
