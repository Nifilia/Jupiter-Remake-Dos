export type ApiResponse = {
  data: {
    category: Content;
  };
};

export type Content = {
  id: number;
  name: string;
  domain: string;
  gemiusId: string;
  siteContent: string;
  frontPage: Array<TimelineContent>;
  photos: Array<{
    id: string;
    created: string;
    format: string;

    photoUrlOriginal: string;
    photoUrlBase: string;
  }>;
};

export type TimelineContent = {
  header: string;
  headerUrl: string;
  highTimeline: boolean;
  liveBlock: boolean;
  manual: {
    highTimeline: boolean;
    banner: boolean;
  };
  data: Array<TimelineItem>;
};

export type TimelineItem = {
  id: string;
  heading: string;
  primaryCategoryId: number;
  type: string;
  canonicalUrl: string;
  fancyUrl: string;
  anotherDomainContent: boolean;
  verticalPhoto: string;
};
