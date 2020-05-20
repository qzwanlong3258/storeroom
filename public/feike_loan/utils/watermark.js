 //给图片加上位置水印
import { formatTime } from './util.js'
const watermarkPhone = ({ canvasId = '', src = '',str = '', successfn = ()=>{}} = {}) => {
   console.log(src,str,canvasId)
  wx.getImageInfo({
    src: src,
    success: (ress) => {

      let date = formatTime(new Date());

      let ctxx = wx.createCanvasContext(canvasId)

      //将图片src放到cancas内，宽高为图片大小
      ctxx.drawImage(src, 0, 0, 752, 808)
      //将声明的时间放入canvas
      ctxx.setFontSize(14) //注意：设置文字大小必须放在填充文字之前，否则不生效
      ctxx.setFillStyle('white')
      ctxx.setStrokeStyle('white')
      ctxx.fillText(date, 10, 18)
      ctxx.strokeText(date, 10, 18)
      //将监测的地址放入canvas
      ctxx.setFontSize(12) //注意：设置文字大小必须放在填充文字之前，否则不生效
      ctxx.setFillStyle('white')
      ctxx.setStrokeStyle('white')
      ctxx.fillText(str, 10, 36)
      ctxx.strokeText(str, 10, 36)
      ctxx.draw(false,  () => {
        wx.canvasToTempFilePath({
          canvasId: canvasId,
          success: (resu) => {
			  console.log(resu)
			  
            successfn(resu.tempFilePath)
          },
          fail: (e) => {
            console.log(e)
          }
        })
      })
    }
  })
 } 

module.exports = {
  watermarkPhone
}
