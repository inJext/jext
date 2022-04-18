import * as fs from 'fs';

type _mode = 'default' | 'personal'

//add security for existing files;
export const fileGenerator = (src: string, dest: string, fname: string, ftype: string): string | undefined => {

    try {

        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

        const fdest = dest + `${fname as string}.${ftype as string}.tsx`

        fs.copyFileSync(src, fdest);

        return fdest;
    } catch (err) { throw err }

    return undefined;
}

export const fileEditor = (src: string, from: string, to: string): undefined => {

    from = from.charAt(0).toUpperCase() + from.slice(1);
    to = to.charAt(0).toUpperCase() + to.slice(1) + from;

    try {

        let reg = new RegExp('\\b(' + from + ')\\b', 'g');
        let data = fs.readFileSync(src, { encoding: 'utf-8' })
            .toString()
            .replace(reg, to);

        let buff = Buffer.from(data, 'utf-8');

        fs.writeFileSync(src, buff);
    } catch (err) { throw err }

    return undefined;
}

// need to find a way to set the path from the current dir
// need to check project arbore
export const generator = (type: string, name: string, dest?: string): undefined => {

    let mode: _mode = 'default';
    if (dest) mode = 'personal';

    if (mode === 'default') dest = `./${type}/`;

    let templatePath = templateSelector(type) + `simple.${type}.tsx`;
    let fpath = fileGenerator(templatePath, dest as string, name, type);

    if (fpath === undefined) return undefined;
    fileEditor(fpath as string, type, name);

    return undefined;
}

// return path to the needed template
const templateSelector = (type: string): string | undefined => {

    const componentList = ['page', 'component'];
    if ( componentList.includes(type)) {

        return `./template/${type}s/`;
    }

    return undefined;
}
