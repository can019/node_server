const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const secretyKey = require('../../configure/tokenfield').secretyKey; // 미리 설정한 secretkey ready.
const options = require('../../configure/tokenfield').option; // 알고리즘 option ex) hasing func...

const TOKEN_EXPIRE = -999;
const TOKEN_INVALID = -600;
const UNKNOW_PROBLEM = -400;

module.exports={
    sign: async (user) =>{
        const payload = {
            idx : user.userIdx,
            email : user.email,
        };
        const result = {
            token: jwt.sign(payload, secretyKey, options),
            refreshToken : randToken.uid(256)
        };
        return result;
    },
    verify: async(token) =>{
        let decoded;
        try{
            decoded = jwt.decode(token, secretyKey);
        } catch(err){
            switch(err.message){
                case 'jwt expired':
                    console.log('expired token');
                    return TOKEN_EXPIRE;
                case 'invalid token':
                    console.log('invalid token');
                    return TOKEN_INVALID;
                default:
                    console.log("Unknown prolbem");
                    console.log("logfile :: ");
                    // TODO :: logfile 작성.
                    return UNKNOW_PROBLEM;
            }
            
        }
        return decoded;
    }



}
