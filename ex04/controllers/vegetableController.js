exports.displayVegetableName = (req, res) => {
    res.send(req.params.vegetable);
};