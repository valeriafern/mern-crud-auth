
export const validateSchema = (Schema) => (req, res, next) => {
    try {
        Schema.parse(req.body);
        next();
    } catch (error) {
        console.log(error.errors)
        return res.status(400).json({error: error.errors.map(error => error.message)});
    }
};