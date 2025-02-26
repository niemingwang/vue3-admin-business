// 通用接口响应格式
interface CommonResponseData<T> {
  code: number
  data: T
  msg: string
}
