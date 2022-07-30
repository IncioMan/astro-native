import { categories } from "../data/categories";
import { tokens } from "../data/tokens";

export class DataProvider {
    static getCategories() {
        return categories
    }

    static getTokens() {
        return tokens
    }

    static getTokensPurchase(tokenToPurchase) {
        return Object.fromEntries(Object.entries(tokens).filter(([name,token]) => name!==tokenToPurchase));
    }

    static getToken(name) {
        return tokens[name]
    }
}



