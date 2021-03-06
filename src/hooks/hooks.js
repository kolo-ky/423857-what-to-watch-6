export const useApi = (apiFunc, params) => {
  return apiFunc(params).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
};
