const { constant } = require('../constant')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constant.VALADITION_ERROR:
            res.json({ title: 'Validation Failed', message: err.message, stackTrace: err.stack })
            break;
        case constant.NOT_FOUND:
            res.json({ title: 'Not Found', message: err.message, stackTrace: err.stack })
        case constant.UNAUTHORIZED:
            res.json({ title: 'Un Authorized', message: err.message, stackTrace: err.stack })
        case constant.FORBIDDON:
            res.json({ title: 'Forbiddon', message: err.message, stackTrace: err.stack })
            case constant.SERVER_ERROR:
                res.json({ title: 'Server Error', message: err.message, stackTrace: err.stack })
        default:
            console.log('No Error All good')
            break;
    }


}



module.exports = errorHandler;