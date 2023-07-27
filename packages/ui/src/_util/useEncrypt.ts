import { splitByLength } from './index';
import { JSEncrypt } from 'jsencrypt';

const useEncrypt = () => {

  return {
    //publicKey  RSA 加密用的公钥
    encrypt: (input?: string, publicKey?: string) => {
      debugger
      // 1.前端只需要关注 publicKey 是否为空即可，不需要关注 publicKey 是否合法
      // 2.如果publicKey 为空，则不加密，直接返回原始值 
      if (!publicKey) {
        return input;
      } else {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        // 加密
        if (input && input.length > 120) {
          const inputs = splitByLength(input, 117) || [];
          let secretKey: string = '';
          inputs.map((item, index) => {
            const encryptStr =
              index === inputs.length - 1 ? encrypt.encrypt(item) : `${encrypt.encrypt(item)};`;
            secretKey = secretKey + encryptStr;
          });

          return secretKey;
        } else {
          return encrypt.encrypt(input);
        }
      }
    },
  };
};

export default useEncrypt;
