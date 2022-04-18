import * as fs from "fs"


export const getfolderListFrom = (dir: string): string[] => {

    let res: string[] = [];

    try {

        fs.readdirSync(dir).forEach((file) => {

            file = dir + '/' + file;
            var stat = fs.statSync(file);

            if (stat && stat.isDirectory())
                res = res.concat(getfolderListFrom(file))
            else res.push(file)
        })
    } catch(err) { throw err; }

    return res;
}