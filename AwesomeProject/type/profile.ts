type MyProfileType = {
  nickname: string;
  point: number;
  registeredGoods: number;
  meetingNum: number;
  profileImg: string;
  registeredEmailStatus: boolean;
  tradeChatStatus: boolean;
  meetingChatStatus: boolean;
  noticeStatus: boolean;
};

type MyProfileStateType = {
  profile: MyProfileType;
  products: MyProductType[];
};

type MyProductType = {
  id: number;
  productName: string;
  tradingMethod: string;
  productCategory: string;
  productCondition: string;
  location: string;
  tradingStatus: string;
  completedTradingDate: string | null;
  tradingType: string;
  productImg: string;
};

type MyProfileResponseType = MyProfileType;

type MyProductsResponseType = {
  content: MyProductType[];
  count: number;
};

export type {
  MyProfileType,
  MyProfileResponseType,
  MyProfileStateType,
  MyProductType,
  MyProductsResponseType,
};
