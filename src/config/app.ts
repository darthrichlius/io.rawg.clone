interface Props {
  app_name: string;
  games?: {
    infiniteScroll: boolean;
  };
}

const AppConfig: Props = {
  app_name: "GameHub",
  games: {
    infiniteScroll: true,
  },
};

export default AppConfig;
