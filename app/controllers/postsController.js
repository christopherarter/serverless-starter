export default {
    update: (req, res) => {
        return res.send('post updated')
    },
    store: (req, res) => {
        return res.send('post stored')
    },
    get: (req, res) => {
        return res.send('here is a post')
    },
    index: (req, res) => {
        return res.send('all dem posts')
    },
}