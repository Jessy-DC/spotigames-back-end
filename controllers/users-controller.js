let DUMMY_USERS = [
    {
        id: 1,
        name: 'Jessy',
        games: {
            id: 1,
            title: 'Mass Effect'
        }
    },
    {
        id: 2,
        name: 'James',
        games: {
            id: 2,
            title: 'Mario'

        }
    }
]

const getUsers = async (req, res, next) => {
    res.json({users: DUMMY_USERS});
}

exports.getUsers = getUsers;