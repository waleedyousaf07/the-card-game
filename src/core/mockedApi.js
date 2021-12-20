const mockedApi = (data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 100);
});

export default mockedApi;
