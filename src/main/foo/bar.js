// @flow
import Lib from "../../lib/Lib";

export default function bar() {
    const lib: Lib = new Lib();
    lib.log();
}

bar();