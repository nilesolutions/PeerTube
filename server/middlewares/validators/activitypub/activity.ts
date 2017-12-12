import * as express from 'express'
import { body } from 'express-validator/check'
import { logger } from '../../../helpers'
import { isRootActivityValid } from '../../../helpers/custom-validators/activitypub'
import { areValidationErrors } from '../utils'

const activityPubValidator = [
  body('').custom((value, { req }) => isRootActivityValid(req.body)),

  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.debug('Checking activity pub parameters')

    if (areValidationErrors(req, res)) return

    return next()
  }
]

// ---------------------------------------------------------------------------

export {
  activityPubValidator
}
