const mockedApi = (data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 1500);
});

export default mockedApi;
