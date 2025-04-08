import type { RestFetchRequestOptions } from '@vunk/shared/fetch'
import type { ElementPlusRestFetchContext } from '@vunk/shared/fetch/ElementPlusRestFetchPlugin'
import { RestFetch } from '@vunk/shared/fetch'

export const restFetch = new RestFetch({
  baseURL: '',
})

export interface R<T> {
  code: number
  datas: T
  msg: string
}

export type Request = <T>(
  options: RestFetchRequestOptions,
  state?: ElementPlusRestFetchContext,
  requestInit?: RequestInit,
) => Promise<R<T>>

export const request: Request = restFetch.request.bind(restFetch)
