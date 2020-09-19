import model from "../models";

const { Book } = model;

class Books {
    static async create(req, res) {
        try {
            const {
                title,
                author,
                description,
                quantity
            } = req.body;

            const { userId } = req.params;

            const book = await Book.create({
                title,
                author,
                description,
                quantity,
                userId
            });

            if (!book) {
                throw new Error("Error in adding books");
            }
            return res.status(200).json(book);

        } catch (error) {
            return res.status(400).json(book);
        }
    }

    static async list(req, res) {
        try {
            const { userId } = req.params;
            const booksList = await Book.findAll({
                where: {
                    userId
                }
            })
            return res.status(200).json(booksList);
        } catch (error) {
            console.log(error)
        }
    }
}

export default Books;