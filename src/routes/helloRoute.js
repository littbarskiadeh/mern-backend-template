export const helloRoute = {
    method: 'get',
    path: "/hello",
    handler: (req, res) => {
        // const userInfo = req.body; bodyParser enables us to do this
        res.send('Hello!')
    },
}