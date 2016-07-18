// the modifiers div is hidden by default; our big shiny button unhides it
function showMods(){
var el = document.getElementById("modifiers");
	el.style.display = "inline-block";
}
// we need to convert the bill amount -- input as a string rather than a number --  to a float
function convertToFloat(string) {
     for (var i=0, output='', valid="1234567890."; i<string.length; i++)
        if (valid.indexOf(string.charAt(i)) != -1)
           output += string.charAt(i)
     return output;
}
// our calculator -- gives the standard tip amount, as well as applies some modifications to give a more customized tip amount
function calcStandardTip() {
var bill = document.getElementById("bill_amt").value;
var bill = +bill;
var standardTip = bill * .2;
var totalBill = bill + standardTip;
var m_friendly = +document.getElementById("m_friendly").value;
var m_prompt = +document.getElementById("m_prompt").value;
var m_order = +document.getElementById("m_order").value;
var m_overall = +document.getElementById("m_overall").value;
var recoPercent = (m_friendly + m_prompt + m_order + m_overall)/10;
var recoTip = bill * (recoPercent/100);
var recoBill = bill + recoTip;
var impText0 = "Ooh, sorry you had such an unpleasant experience! Remember that it is not always your server's fault!";
var impText1 = "Sounds like your dining experience could have been a lot better. Better luck next time!";
var impText2 = "Looks like you had a pretty good time!";
var impText3 = "Reward your server for a great experience, and be sure to come back again!";

// here's where we'll write toe tip and bill amounts to the page
document.getElementById("standardTip").innerHTML = standardTip.toFixed(2);
document.getElementById("totalBill").innerHTML = totalBill.toFixed(2);
document.getElementById("standardTip2").innerHTML = standardTip.toFixed(2);
document.getElementById("totalBill2").innerHTML = totalBill.toFixed(2);
document.getElementById("recoTip").innerHTML = recoTip.toFixed(2);
document.getElementById("recoPercent").innerHTML = recoPercent;
document.getElementById("recoBill").innerHTML = recoBill.toFixed(2);

// let's give the folks a customized message regarding their experience
var r = recoPercent;
		if (r == 0) {
			document.getElementById("impression").innerHTML = impText0;
				} else if (r <= 10) {
						document.getElementById("impression").innerHTML = impText1;
						} else if (r < 20) {
							document.getElementById("impression").innerHTML = impText2;
							} else if (r >= 20) {
							document.getElementById("impression").innerHTML = impText3;
}
}