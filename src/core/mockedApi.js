const mockedApi = (data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default mockedApi;
