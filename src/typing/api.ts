export interface ApiGamePlatform {
  id: number;
  slug: ApiGamePlatformIcon;
  name: string;
}

export interface ApiGame {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: [
    {
      metascore: number;
      url: string;
    }
  ];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string; //example.com,
  background_image_additional: string;
  website: string; //example.com,
  rating: number;
  rating_top: number;
  ratings: object;
  reactions: object;
  added: number;
  added_by_status: object;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string; //example.com,
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  parent_platforms: { platform: ApiGamePlatform }[];
  platforms: [
    {
      platform: ApiGamePlatform;
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
}

export enum ApiGamePlatformIcon {
  android = "android",
  ios = "ios",
  linux = "linux",
  mac = "mac",
  nintendo = "nintendo",
  playstation = "playstation",
  pc = "pc",
  web = "web",
  xbox = "xbox",
}

export interface ApiGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

// ###################################################

export interface ApiDefaultResponse<T extends ApiGame | ApiGenre> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
