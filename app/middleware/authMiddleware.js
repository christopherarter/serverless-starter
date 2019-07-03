import authFactory from '../factories/authFactory/index';

export default (req, res, next) => {
    if(authFactory.getCurrentUser){
        next()
    } else {
        res.sendStatus(403) 
    }
}