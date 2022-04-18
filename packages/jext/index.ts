import { generator } from './generator'

function jext(type: string, fName: string): void {

    generator(type, fName);
}

jext('component', 'button');