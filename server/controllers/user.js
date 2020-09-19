import bcrypt from "bcrypt";
import model from "../models";

const { User } = model;

class Users {
    static async signUp(req, res) {

        try {
            const {
                name,
                username,
                email,
                password
            } = req.body;

            const saltRounds = 10;
            const encrtptedPassword = await bcrypt.hash(password, saltRounds);
    
            const userData = await User
            .create({
                name,
                username,
                email,
                password: encrtptedPassword
            });

            if (!userData) {
                throw new Error("Not able to add user");
            }
            delete userData.password;
            return res.status(200).json({
                success: true,
                message: "User successfully created",
                userData
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error
            })
        }
    }
}

export default Users;