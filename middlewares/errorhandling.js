"use strict"

class ErrorHandling {
    static generalErrorHandler(err,req,res,next) {
        if (err.name !== "Error") {
            if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
                res.status(400).json({"message":err.errors[0].message})
            } else {
                res.status(500).json(err)
            }
        } else {
            switch (err.message) {
                case "Passlength":
                    res.status(400).json({"message":"Password length has to be around 6 and 20"})
                    break;
                case "Login email/pass empty":
                    res.status(400).json({"message":"Please fill in the required information"})
                    break;
                case "Login not valid":
                    res.status(400).json({"message":"Username/password didn't match"})
                    break;
                case "File not found":
                    res.status(404).json({"message":"File not found"})
                    break;
                case "Invalid token":
                    res.status(401).json({"message":"Access denied"})
                    break;
                case "Unauthorized access":
                    res.status(401).json({"message":"Unauthorized access"})
                    break;
                case "Invalid todo status":
                    res.status(400).json({"message":"Unticked todo cannot be deleted"})
                    break;
                default:
                    res.status(500).json(err)
                    break;
            }
        }
    }

}

module.exports = ErrorHandling