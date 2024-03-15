const API_ENDPOINT =
  'https://41bc14e6-6403-4df7-81df-1cb7ef4693cc.mock.pstmn.io';

const getMyProfile = async () => {
  return await fetch(`${API_ENDPOINT}/market/profiles`)
    .then(response => response.json())
    .catch(console.error);
};

const getMyProducts = async () => {
  return await fetch(`${API_ENDPOINT}/market/profiles/detail`)
    .then(response => response.json())
    .catch(console.error);
};

export {getMyProfile, getMyProducts};
