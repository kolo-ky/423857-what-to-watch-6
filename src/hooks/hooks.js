export const useApi = (apiFunc, params) => {
  return apiFunc(params).then(() => {
    return Promise.resolve();
  }).catch((error) => {
    return Promise.reject(error);
  });
};
