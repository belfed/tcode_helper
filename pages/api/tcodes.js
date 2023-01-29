import FileHandler from "@/helpers/file_handler"

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            const data = FileHandler.readFile();
            res.status(200).json(data);
            break;
        case 'POST':
            FileHandler.addTcode(req.body);
            res.status(200).json("Success!");
        default:
            break;
    }
}