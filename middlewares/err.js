function customError(err, req, res, next) {
    switch (err.name) {
        case "SequelizeValidationError":
            res.status(400).json({
                code: "400",
                message: err.errors.map(error => error.message)
            })
            break;

        case "Bad Request":
            res.status(400).json({
                code: "400",
                message: "Wrong email/password!"
            })
            break;

        default:
            res.status(500).json({
                code: "500",
                message: "Internal Server Error"
            })
            break;
    }
}

module.exports = { customError }