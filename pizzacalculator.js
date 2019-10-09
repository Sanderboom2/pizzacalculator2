var s = prompt('Hoeveel small (20cm €3,50) pizzas wilt u')
var m = prompt('Hoeveel medium (25cm €8,50) pizzas wilt u')
var l = prompt('Hoeveel large (30cm €11,50) pizzas wilt u')


const sp =  3.50;
const mp = 6.50;
const lp = 9.50;


document.write('<div> Kassabon:</div><br>')
document.write('<div>' + s + 'x Small € ' + s * sp + '</div><br>')
document.write('<div>' + m + 'x Medium € ' + m * mp + '</div><br>')
document.write('<div>' + l + 'x Large € ' + l * lp + '</div><br>')

var tot= s*sp + m*mp + l*lp;

document.write('<div>Totaal bedrag: €'+ tot + '</div>')