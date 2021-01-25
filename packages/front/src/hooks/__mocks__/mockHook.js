const mockHook = () => {
  let __mockData = {}

  return {
    __esModule: true,
    __setMockData: data => __mockData = data,
    default: () => __mockData
  }
}

module.exports = mockHook
