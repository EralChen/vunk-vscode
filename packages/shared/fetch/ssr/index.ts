import type { R, RestFetchRequest } from '@vunk/skzz/shared'
import { RestFetch } from '@vunk/shared/fetch'

export const restFetch = new RestFetch({
  baseURL: '',
})

export const request = restFetch.request.bind(restFetch) as
  <T = any>(...args: Parameters<RestFetchRequest>) => Promise<R<T>>
