export interface ApiResponse {
  data: {
    category: Content;
  };
}

export interface Content {
  id: number;
  name: string;
  domain: string;
  gemiusId: string;
  siteContent: string;
  frontPage: TimelineContent[];
  photos: {
    id: string;
    created: string;
    format: string;

    photoUrlOriginal: string;
    photoUrlBase: string;
  }[];
}

export interface TimelineContent {
  header: string;
  headerUrl: string;
  highTimeline: boolean;
  liveBlock: boolean;
  manual: {
    highTimeline: boolean;
    banner: boolean;
  };
  data: TimelineItem[];
}

export interface TimelineItem {
  id: string;
  heading: string;
  lead?: string;
  primaryCategoryId: number;
  type: string;
  canonicalUrl: string;
  fancyUrl: string;
  anotherDomainContent: boolean;
  photos?: PhotoItem[];
  verticalPhotos: PhotoItem[];
  squarePhotos: PhotoItem[];
}

export interface PhotoItem {
  id: string;
  created: string;
  captionEt: string;
  format: string;
  photoUrlOriginal: string;
  photoUrlBase: string;
}
