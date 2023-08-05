//1.

 function displayTriArea (base, height) {
 base = parseInt(prompt('Enter base'))
 height = parseInt(prompt('Enter height'))
 let area = 0.5 * base * height
     
 console.log(area)
 }
 displayTriArea()
 
 //2. concatenation for some reason
  function displayTriPeri (base, height, slope) {
 base = parseInt(prompt('Enter base'))
 height = parseInt(prompt('Enter height'))
 slope = parseInt(prompt('Enter slope'))
 let sum1 = base + height + slope
 
     
 console.log(sum1)
 }
 displayTriPeri()
 
 
 //3.
 function rectArea (length, width) {
     length = parseInt(prompt('Enter length of rectangle'))
     width = parseInt(prompt('Enter the width of the rectangle'))
     let area = length * width
     console.log(area)
 }
 
 rectArea()
 
 function rectPerimeter(length, width) {
     length = parseInt(prompt('Enter length'))
     width = parseInt(prompt('Enter width'))
     let perimeter = 2 * (length + width)
     console.log(perimeter)
 }
 
 rectPerimeter()
 
 
 
 
 
 
//4
 //5 y = mx + b, y = 2x - 2
 
 function calcStuff (slope, yIntercept, xx, xyep) {
     let y = 0
     if (y == 0) {
         let mm = 2
         xyep = mm / 2
         slope = mm / 1
         yIntercept = mm * -1
         console.log(`x intercept is ${xyep}, slope is ${slope}, y intercept is ${yIntercept}` )
     }
 }
 calcStuff()


//6
 function slopeFinder(x1, x2, y1, y2, slope) {
     x1 = 2
     x2 = 6
     y1 = 2
     y2 = 10
      slope = ((y2 - y1) / (x2 - x1))
     console.log(`The slope is ${slope}`)
 }
 slopeFinder()


//7
 
 const slopeFind = slopeFinder.toString()
 const calcing = calcStuff.toString()
 alert(calcing > slopeFind)
 
 
 //8    x = (-b + - sqrt(b^2 - 4ac) / 2a), quad is ax^2 + bX + c = 0
 //y = x^2 + 6x + 9
 
 
 
 function quadsEqn (b, a, c) {
     a = 1
     b = 6
     c = 9
     let fourr = 4
     let sqrStuff = parseInt(b * b - fourr * a * c)
     let squaring = Math.sqrt(sqrStuff)
     //console.log(squaring)
     let rooting1 = (- b + squaring) / (2 * a)
     let rooting2 = (- b - squaring) / (2 * a)
     console.log(`possible x values are ${rooting1} and ${rooting2}`)
 }
 
quadsEqn()


function qquadsEqn() {
     //a = 1
    // b = 6
    // c = 9
     //let fourr = 4
    a = parseInt(prompt('Enter value for a'))
    b = parseInt(prompt('Enter value for b'))
    c = parseInt(prompt('Enter value for c'))
    let fourr = 4
   let sqrStuff = parseInt(b * b - fourr * a * c)
     let squaring = Math.sqrt(sqrStuff)
     //console.log(squaring)
     
     let rooting1 = (- b + squaring) / (2 * a)
     let rooting2 = (- b - squaring) / (2 * a)
     
     
     console.log(`possible x values are ${rooting1} and ${rooting2}`)
 
 
}
qquadsEqn()



