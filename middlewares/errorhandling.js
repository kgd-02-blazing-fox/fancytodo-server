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
                    res.status(400).json({"message":"Access denied"})
                    break;
                case "Unauthorized access":
                    res.status(400).json({"message":"Unauthorized access"})
                    break;
                default:
                    res.status(500).json(err)
                    break;
            }
        }

        //User errors start here
            // if (err.message === "Passlength") res.status(400).json({"err":"Password length has to be around 6 and 20"})
            // else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError")
            // res.status(400).json(err)
            // else res.status(500).json(err)

            // if(err.message === "Login not valid") res.status(400).json({"err":"Username/password didn't match"})
            // else if(err.message === "Login email/pass empty") res.status(400).json({"err":"Please fill in the required information"})
            // else res.status(500).json(err)

            // if (err.message === "Unauthorized access") res.status(400).json({"err":err.message})
            // else res.status(500).json(err)
            // if (err.message === "Invalid token") res.status(400).json({"err":err.message})
            // else res.status(500).json(err)

        //User errors end here
        //Todo errors start here
            // if (err.name === "SequelizeValidationError")
            // res.status(400).json(err)
            // else res.status(500).json(err)
            // if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            // else res.status(500).json(err)
            // if (err.name === "SequelizeValidationError")res.status(400).json(err)
            // else if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            // else res.status(500).json(err)
            // if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            // else res.status(500).json(err)
        //Todo errors end here
    }

}

module.exports = ErrorHandling