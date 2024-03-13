import {create} from 'zustand';
import {MyProfileType, MyProductType} from '../type/profile';

interface ProfileState {
  profile: MyProfileType;
  products: MyProductType[];
  setProfile: (profile: MyProfileType) => void;
  setProducts: (products: MyProductType[]) => void;
}

const useProfileStore = create<ProfileState>()(set => ({
  profile: {} as MyProfileType,
  products: [] as MyProductType[],
  setProfile: profile => set(state => ({...state, profile})),
  setProducts: products => set(state => ({...state, products})),
}));

export {useProfileStore};
