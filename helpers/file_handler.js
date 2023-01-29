import fs from 'fs';

class FileHandler {
    static filePath = `${process.env.APPDATA}/.TCodeHelper`;
    static jsonFile = `${process.env.APPDATA}/.TCodeHelper/tcodes.json`;

    static createFile() {
        let input = JSON.stringify([]);

        if (!fs.existsSync(this.jsonFile)) {
            fs.mkdirSync(this.filePath, { recursive: true });
            fs.writeFile(this.jsonFile, input, (error) => {
                if (!error) {
                    console.log("JSON file has been created.");
                } else {
                    console.log(error);
                }
            });
        }
    }

    static readFile() {
        this.createFile();
        var fileString = fs.readFileSync(this.jsonFile).toString();
        return JSON.parse(fileString).sort((a, b) => {
            if (a.code.toLowerCase() < b.code.toLowerCase()) return -1;
            if (a.code.toLowerCase() > b.code.toLowerCase()) return 1;
            return 0;
        });
    }

    static addTcode(tCode) {
        console.log(tCode);
        var json = this.readFile();
        json.push(tCode);
        fs.writeFile(this.jsonFile, JSON.stringify(json, null, "\t"), (error) => {

        });
    }
}

export default FileHandler;