const sum = (req, res) => {
    const { num1, num2 } = req.query;
    let result = num1 + num2;
    res.send(`${result}`);
}

const sub = (req, res) => {
    const { num1, num2 } = req.query;
    let result = num1 - num2;
    res.send(`${result}`);

};

const div = (req, res) => {
    const { num1, num2 } = req.query;
    let result = num1 / num2;
    res.send(`${result}`);
};

const mul = (req, res) => {
    const { num1, num2 } = req.query;
    let result = num1 * num2;
    res.send(`${result}`);

};

module.exports = { sum, sub, div, mul };