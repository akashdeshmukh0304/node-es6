import Users from "../controllers/user";
import Books from '../controllers/book'

export default app => {
    
    app.get("/api", (req, res) => {
        return res.status(200).send("Welcome to the bookstore API.")
    })

    /**
     * API for users to sign up
     */
    app.post("/api/users", Users.signUp);
    app.post("/api/users/:userId/book", Books.create);
    app.get("/api/users/:userId/book", Books.list);
}