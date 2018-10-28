/**
 * Need this file to run tests
 * @see https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
 */

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
