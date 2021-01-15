// Import the js file to test
import { checkForUrl } from "../src/client/js/urlChecker"

describe("Testing the submit functionality", () => {
    test("Testing the checkForUrl() function", () => {
        const url = "https://www.udacity.com/";
        const response = checkForUrl(url);
        expect(response).toBe(true);
})});
