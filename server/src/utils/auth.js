import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'
export const registerUserService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(data.password, salt);
            const newUser = new UserModel({
                ...data,
                password: hashedPass
            });
            const { username } = data
            const oldUser = await UserModel.findOne({ username });

            if (oldUser)
                reject({
                    message: 'Username is already exist'
                })
            else {
                const user = await newUser.save();
                const token = jwt.sign(
                    { username: user.username, id: user._id },
                    process.env.JWTKEY,
                    { expiresIn: "1h" }
                );
                resolve({
                    user,
                    token
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
export const loginUserService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserModel.findOne({ username: data.username });
            console.log(user)
            if (user) {
                const validity = await bcrypt.compare(data.password, user.password);

                if (!validity) {
                    reject({
                        message: "Wrong password"
                    });
                } else {
                    const token = jwt.sign(
                        { username: user.username, id: user._id },
                        process.env.JWTKEY,
                        { expiresIn: "1h" }
                    );
                    resolve({ user, token });
                }
            } else {
                reject({
                    message: "User not found"
                });
            }

        } catch (e) {
            reject(e)
        }
    })
}
