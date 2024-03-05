import {dummyProfile, dummyProducts} from '../dummy/profile';
import {
  MyProfileResponseType,
  MyProductType,
  MyProductsResponseType,
} from '../type/profile';

const getMyProfile = async () => {
  const dummyMyProfile: MyProfileResponseType = dummyProfile;

  const dummyResponse: Promise<any> = new Promise((resolve, _reject) => {
    console.log('getMyProfile', new Date());
    resolve(dummyMyProfile);
  })
    .catch((error: any) => {
      console.error(error);
      return error;
    })
    .finally(() => {});

  return await dummyResponse;
};

const getMyProducts = async () => {
  const {content}: {content: MyProductType[]} =
    dummyProducts as MyProductsResponseType;

  const dummyResponse = new Promise<MyProductType[]>((resolve, _reject) => {
    resolve(content);
  })
    .catch((error: any) => {
      console.error(error);
      return error;
    })
    .finally(() => {});

  return await dummyResponse;
};

export {getMyProfile, getMyProducts};
