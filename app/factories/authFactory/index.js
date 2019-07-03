import auth from './auth';
import { firebaseAuthDriver } from './drivers';
export default auth(firebaseAuthDriver);