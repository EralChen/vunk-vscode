import type { RestFetchRequest } from '@vunk/skzz/shared'
import { RestFetch } from '@vunk/shared/fetch'

export const restFetch = new RestFetch({
  baseURL: '',
})

export const request: RestFetchRequest = restFetch.request.bind(restFetch)
