import {StringValue} from './StringValue';

class Category extends StringValue {

}

export class CommandCategories {
    public static COMPOSITIONS = new Category("compositions");
    public static SETTINGS = new Category("settings");
}