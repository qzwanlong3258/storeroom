
const { getStorage } = require('../utils/storage.js')
/**
 * 常用的变量(appId,appSecret,reg等)
 */

module.exports = {
  // APP_ID: 'wx7a78cb1fe088222c',
  // APP_SECRET: '28819d103b03e96501c04cf837d63777',
  APP_ID: 'wx1b24a4f9a91a7cb6',
  APP_SECRET: 'dae02fba51ef39f279d5cab8d0e07d10',
  
  //上传上传图片路径
  uploadImageUrl: `https://gxgbasic.gxggroup.cn:6303/ftp/upload?token=${getStorage('tempToken')}`,
  
  
}