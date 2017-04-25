import bar from "./bar";
import Lib from "../../lib/Lib";
jest.mock('../../lib/Lib');

test('jest', () => {
    bar();
    expect(Lib.prototype.log).toBeCalled();
});