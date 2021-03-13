const User = require('./../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signIn = async (request, response) => {
    const { email, password } = request.body

    if (!email || !password) {
        console.log('Email or password not given!')
        return response.json({ message: 'Email or password not given!' })
    }

    try {
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            console.log('User not found!')
            return response.json({ message: 'User not found!' })
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) return response.json({ message: `Auth failed => ${err}` })

            if (result) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
                    expiresIn: '1h',
                })

                return response.status(200).json({
                    success: true,
                    token,
                    user,
                })
            } else {
                console.log('Unknown error!')
                return response.json({ message: 'Unknown error!' })
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(400).json({ message: error.message })
    }
}
