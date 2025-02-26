export const MockUtils = {
  buildResponse: (data: any): CommonResponseData<any> => {
    return {
      code: 0,
      data,
      msg: 'success'
    }
  }
}
