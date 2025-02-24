import { gulpTask } from '@vunk/shared/function'
import { series } from 'gulp'

export default series(
  gulpTask('custom task', async () => {

  }),
)
