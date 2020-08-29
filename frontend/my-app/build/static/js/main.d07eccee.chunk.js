(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(86),a(65)),s=a(66),i=a(73),m=a(72),u=function(e){return fetch("".concat("http://ec2-34-208-252-225.us-west-2.compute.amazonaws.com","/analysis?address=").concat(e)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}))},p=(a(87),a(6)),d=a(13),f=a(146),g=a(145),h=a(151),y=a(144),E=a(68),b=a.n(E),v=function(e){var t,a=Object(n.useState)(""),c=Object(d.a)(a,2),l=c[0],o=c[1],s=Object(n.useRef)(null),i=function(e){e(t.getPlace().formatted_address)};return Object(n.useEffect)((function(){e.updateAddress(l)}),[l]),Object(n.useEffect)((function(){!function(e,t){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){return t()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyCuKTXrmZFwNhgQtln2xZdtmRfR_c218Bk&libraries=places",(function(){return function(e,a){(t=new window.google.maps.places.Autocomplete(a.current,{types:["address"],componentRestrictions:{country:"us"}})).setFields(["address_components","formatted_address"]),t.addListener("place_changed",(function(){return i(e)}))}(o,s)}))}),[]),r.a.createElement("div",{className:"search-div"},r.a.createElement(h.a,{className:"search-location-input",inputRef:s,error:e.badAddress,helperText:e.badAddress?"Incorrect Address":"",onChange:function(e){return o(e.target.value)},placeholder:"Address...",value:l,InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",{className:"clear-icon",onClick:function(){e.disabled||(o(""),e.updateError(),e.disableButton())}},l&&r.a.createElement(b.a,{className:"delete-icon",color:"primary"})))}}))},P=a(49),A=a.n(P),O=function(e){var t=Object(n.useState)({disabled:!1}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nothing";l("search"===e?function(e){return Object(p.a)({},e,{disabled:!0})}:function(e){return Object(p.a)({},e,{disabled:!1})})};return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search-section"},r.a.createElement("img",{src:A.a,alt:"logo",className:"logo"}),r.a.createElement("p",{className:"app-description"},"Analyze investment properties"),r.a.createElement(v,{updateAddress:e.updateAddress,badAddress:e.badAddress,updateError:e.updateError,disableButton:o,disabled:c.disabled}),c.disabled&&!e.badAddress&&r.a.createElement(g.a,{style:{width:"80%"}})),r.a.createElement("div",{className:"search-button"},r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){o("search"),e.search(e.inputAddress)},disabled:c.disabled&&!e.badAddress},"Search")))},j=a(12),I=a(14),S=a.n(I),w=a(153),C=a(147),x=a(109),N=a(148),R=a(155),$=function(e){var t=Object(n.useState)({zestimate:e.values.zestimates.zestimate.toLocaleString("en-US"),downPayment:e.values.monthly_mortgage.down_payment.toLocaleString("en-US"),downPaymentPerc:100*e.values.monthly_mortgage.down_payment_perc,loanType:"30-year",rate:(100*e.values.mortgage_rate.rate).toString().slice(0,5),monthlyPayment:"",percActive:!1,closingCosts:e.values.closing_costs.closing_costs.toLocaleString("en-US")}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e,t,a,n){var r=e.toString().replace(/,/g,"")-t.toString().replace(/,/g,""),o=12*parseInt(a.substring(0,2)),s=parseFloat(n/100/12),i=Math.round(r*(s*Math.pow(1+s,o))/(Math.pow(1+s,o)-1))||0;l(Object(p.a)({},c,{monthlyPayment:m.format(i)}))},s=function(e,t,a){l("percent"===e?function(e){return Object(p.a)({},e,{downPayment:m.format(Math.round(t/100*a.replace(/,/g,""))).replace("$","")})}:function(e){return Object(p.a)({},e,{downPaymentPerc:(t.replace(/,/g,"")/a.replace(/,/g,"")*100).toFixed(1)})})},i=function(e){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&("zestimate"===e.target.name||"downPayment"===e.target.name||"closingCosts"===e.target.name?l(Object(p.a)({},c,Object(j.a)({},e.target.name,m.format(e.target.value.toString().replace(/,/g,"")).replace("$","")))):e.target.value.match(/^\d*(\.\d*)?$/g)&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,""===e.target.value?0:e.target.value.replace(/(^0)(\d)/g,"$2")))))};Object(n.useEffect)((function(){e.changeValue(parseInt(c.zestimate.replace(",","")),"housePrice"),o(c.zestimate,c.downPayment,c.loanType,c.rate)}),[c.zestimate,c.downPayment,c.downPaymentPerc,c.loanType,c.rate]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.downPayment.toString().replace(/[$,]/g,"")),"downPayment"),c.percActive||s("amount",c.downPayment,c.zestimate)}),[c.downPayment]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.replace(/[$,]/g,"")),"principalAndInterest")}),[c.monthlyPayment]),Object(n.useEffect)((function(){e.downPaymentPercChange(c.downPaymentPerc),c.percActive&&s("percent",c.downPaymentPerc,c.zestimate)}),[c.downPaymentPerc]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.closingCosts.toString().replace(/[$,]/g,"")),"loanCosts")}),[c.closingCosts]),Object(n.useEffect)((function(){o(c.zestimate,c.downPayment,c.loanType,c.rate)}),[]);var m=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Principal & Interest"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement(h.a,{label:"Home Price",variant:"filled",name:"zestimate",value:c.zestimate,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return i(e)}}),r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Down Payment",variant:"filled",name:"downPayment",value:c.downPayment,fullWidth:!0,onFocus:function(){return l(Object(p.a)({},c,{percActive:!1}))},InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return i(e)}}),r.a.createElement(h.a,{label:" ",variant:"filled",name:"downPaymentPerc",value:c.downPaymentPerc,fullWidth:!0,onFocus:function(){return l(Object(p.a)({},c,{percActive:!0}))},InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e){return i(e)}})),r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Loan Program",variant:"filled",name:"loanType",value:c.loanType,fullWidth:!0,onChange:function(e){return i(e)}}),r.a.createElement(h.a,{label:"Interest Rate",variant:"filled",name:"rate",value:c.rate,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e){return i(e)}})),r.a.createElement(h.a,{label:"Est. Loan Costs",variant:"filled",name:"closingCosts",fullWidth:!0,value:c.closingCosts,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return i(e)}}))))},F=a(52),M=a.n(F),U=a(154),W=function(e){var t=Object(n.useState)({pmiChecked:!1,pmi:e.values.pmi.yearly.toLocaleString("en-US"),fiChecked:!1,fi:e.values.fi.yearly.toLocaleString("en-US"),pi:e.values.pi.yearly.toLocaleString("en-US"),monthlyPayment:0}),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){l(Object(p.a)({},c,{pmiChecked:parseInt(e.downPaymentPerc)<20}))}),[e]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.toString().replace("$","")),"insurance")}),[c.monthlyPayment]),Object(n.useEffect)((function(){var e=c.pmiChecked?parseInt(c.pmi.replace(/,/g,"")):0,t=parseInt(c.pi.replace(/,/g,""));l(Object(p.a)({},c,{monthlyPayment:s.format(((e+t)/12).toFixed(0))}))}),[c.pmi,c.pmiChecked,c.pi]);var o=function(e,t){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,s.format(e.target.value.toString().replace(/,/g,"")).replace("$",""))))},s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Insurance"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement(h.a,{label:"Property Insurance",name:"pi",variant:"filled",value:c.pi,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$")),endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",{style:{marginBottom:"0px",marginRight:"15px"}},"/Year"))},onChange:function(e,t){return o(e)}}),r.a.createElement(h.a,{label:"Mortgage Insurance",name:"pmi",variant:"filled",disabled:!c.pmiChecked,value:c.pmiChecked?c.pmi:0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$")),endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",{style:{marginBottom:"0px",marginRight:"15px"}},"/Year"),r.a.createElement(U.a,{title:"Mortgage insurance is usually required under 20% down payment",enterTouchDelay:100},r.a.createElement(M.a,{className:"info-icon"})))},onChange:function(e,t){return o(e)}}))))},k=a(152),z=function(e){var t=Object(n.useState)({fiChecked:!1,fi:e.values.fi.yearly.toLocaleString("en-US"),monthlyPayment:0}),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.toString().replace("$","")),"floodInsurance")}),[c.monthlyPayment]),Object(n.useEffect)((function(){var e=c.fiChecked?parseInt(c.fi.replace(/,/g,"")):0;l(Object(p.a)({},c,{monthlyPayment:o.format((e/12).toFixed(0))}))}),[c.fi,c.fiChecked]);var o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Flood Insurance"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement("div",{className:"two-column"},r.a.createElement(k.a,{color:"primary",onChange:function(e){l(Object(p.a)({},c,{fiChecked:!c.fiChecked}))}}),r.a.createElement(h.a,{label:"Flood Insurance",name:"fi",variant:"filled",disabled:!c.fiChecked,value:c.fiChecked?c.fi:0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$")),endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",{style:{marginBottom:"0px",marginRight:"15px"}},"/Year"),r.a.createElement(U.a,{title:"Flood insurance is required if the house is located in a frequent flood plain",enterTouchDelay:0},r.a.createElement(M.a,null)))},onChange:function(e,t){return function(e,t){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,o.format(e.target.value.toString().replace(/,/g,"")).replace("$",""))))}(e)}})))))},T=function(e){var t=Object(n.useState)({taxAmount:e.values.taxes.tax_amt_yr.toLocaleString("en-US"),taxRate:(100*e.values.taxes.tax_rate).toString().slice(0,4),monthlyPayment:"",percActive:!1}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e,t,a){l("percent"===e?Object(p.a)({},c,{taxAmount:i.format(Math.round(t/100*parseInt(a.toString().replace(/,/g,"")))).replace("$","")}):Object(p.a)({},c,{taxRate:(parseInt(t.toString().replace(/,/g,""))/parseInt(a.toString().replace(/,/g,""))*100).toFixed(2)}))},s=function(e){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&("taxAmount"===e.target.name?l(Object(p.a)({},c,Object(j.a)({},e.target.name,i.format(e.target.value.toString().replace(/,/g,"")).replace("$","")))):e.target.value.match(/^\d*(\.\d*)?$/g)&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,""===e.target.value?0:e.target.value.replace(/(^0)(\d)/g,"$2")))))};Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.replace("$","")),"propertyTaxes")}),[c.monthlyPayment]),Object(n.useEffect)((function(){l(Object(p.a)({},c,{monthlyPayment:i.format(Math.round(c.taxAmount.replace(/,/g,"")/12))}))}),[c.taxAmount,c.taxRate]),Object(n.useEffect)((function(){c.percActive||o("amount",c.taxAmount,e.housePrice)}),[c.taxAmount]),Object(n.useEffect)((function(){c.percActive&&o("percent",c.taxRate,e.housePrice)}),[c.taxRate]),Object(n.useEffect)((function(){l(Object(p.a)({},c,{monthlyPayment:i.format(Math.round(c.taxAmount.replace(/,/g,"")/12))}))}),[]);var i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Property Taxes"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Tax Amount",variant:"filled",name:"taxAmount",value:c.taxAmount,fullWidth:!0,onFocus:function(){return l(Object(p.a)({},c,{percActive:!1}))},InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e,t){return s(e)}}),r.a.createElement(h.a,{label:"Tax Rate",variant:"filled",name:"taxRate",value:c.taxRate,fullWidth:!0,onFocus:function(){return l(Object(p.a)({},c,{percActive:!0}))},InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e,t){return s(e)}})))))},_=function(e){var t=Object(n.useState)({rentAmount:e.values.zestimates.rent_zestimate.toLocaleString("en-US"),monthlyPayment:e.values.zestimates.rent_zestimate.toLocaleString("en-US"),vacancyAmount:(.1*e.values.zestimates.rent_zestimate).toLocaleString("en-US"),vacancyRate:10,repairsAmount:(.1*e.values.zestimates.rent_zestimate).toLocaleString("en-US"),repairsRate:10,propertyManagementAmount:(.1*e.values.zestimates.rent_zestimate).toLocaleString("en-US"),propertyManagementRate:10}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&(e.target.name.includes("Amount")?l(Object(p.a)({},c,Object(j.a)({},e.target.name,i.format(e.target.value.toString().replace(/,/g,"")).replace("$","")))):e.target.value.match(/^\d*(\.\d*)?$/g)&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,""===e.target.value?0:e.target.value.replace(/(^0)(\d)/g,"$2")))))},s=function(){var t=parseInt(c.rentAmount.toString().replace(/,/g,"")),a=t-(parseInt(c.vacancyAmount.toString().replace(/,/g,""))+parseInt(c.repairsAmount.toString().replace(/,/g,""))+parseInt(c.propertyManagementAmount.toString().replace(/,/g,"")));l(Object(p.a)({},c,{monthlyPayment:i.format(a)})),e.changeValue(a,"netRentalIncome"),e.changeValue(t,"grossRentalIncome")};Object(n.useEffect)((function(){s()}),[c.vacancyAmount,c.rentAmount,c.repairsAmount,c.propertyManagementAmount]),Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{vacancyAmount:i.format(e.rentAmount.toString().replace(/,/g,"")*e.vacancyRate/100).replace("$","")})}))}),[c.vacancyRate,c.rentAmount]),Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{repairsAmount:i.format(e.rentAmount.toString().replace(/,/g,"")*e.repairsRate/100).replace("$","")})}))}),[c.repairsRate,c.rentAmount]),Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{propertyManagementAmount:i.format(e.rentAmount.toString().replace(/,/g,"")*e.propertyManagementRate/100).replace("$","")})}))}),[c.propertyManagementRate,c.rentAmount]),Object(n.useEffect)((function(){s()}),[]);var i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Rental Income"),r.a.createElement(x.a,{className:"accordion-total income"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement(h.a,{label:"Rental Income",variant:"filled",name:"rentAmount",value:c.rentAmount,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Vacancy",className:"amount-column",variant:"filled",disabled:!0,name:"vacancyAmount",value:c.vacancyAmount,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement(h.a,{label:" ",variant:"filled",name:"vacancyRate",value:c.vacancyRate,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e){return o(e)}})),r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Repairs",className:"amount-column",variant:"filled",disabled:!0,name:"repairsAmount",value:c.repairsAmount,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement(h.a,{label:" ",variant:"filled",name:"repairsRate",value:c.repairsRate,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e){return o(e)}})),r.a.createElement("div",{className:"two-column"},r.a.createElement(h.a,{label:"Property Management",className:"amount-column",variant:"filled",disabled:!0,name:"propertyManagementAmount",value:c.propertyManagementAmount,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement(h.a,{label:" ",variant:"filled",name:"propertyManagementRate",value:c.propertyManagementRate,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"%"))},onChange:function(e){return o(e)}})))))},V=function(e){return r.a.createElement("div",{className:"metrics"},r.a.createElement("div",{className:"net-income"},r.a.createElement("p",{className:"metric-label"},"Net Income"),r.a.createElement("p",{className:"metric-value"},-1===Math.sign(e.values.netIncome)?"-$".concat(Math.abs(e.values.netIncome)):"$".concat(e.values.netIncome))),r.a.createElement("div",{className:"coc-return"},r.a.createElement("p",{className:"metric-label"},"CoC Return"),r.a.createElement("p",{className:"metric-value"},isFinite(e.values.cashOnCashReturn)?e.values.cashOnCashReturn:0,"%")),r.a.createElement("div",{className:"rent-ratio"},r.a.createElement("p",{className:"metric-label"},"Cap Rate"),r.a.createElement("p",{className:"metric-value"},isFinite(e.values.capRate)?e.values.capRate:0,"%")))},D=function(e){var t=Object(n.useState)({rehabCosts:0,monthlyPayment:0}),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{monthlyPayment:o.format(e.rehabCosts.toString().replace(/,/g,""))})}))}),[c.rehabCosts]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.toString().replace(/[$,]/g,"")),"rehabCosts")}),[c.monthlyPayment]);var o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Estimated Rehab Costs"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment)),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement(h.a,{label:"Estimated Rehab Costs",variant:"filled",name:"rehabCosts",value:c.rehabCosts,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return function(e){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,o.format(e.target.value.toString().replace(/,/g,"")).replace("$",""))))}(e)}}))))},L=function(e){var t=Object(n.useState)({waterCost:0,energyCost:0,hoaCost:0,monthlyPayment:0}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e){(""===e.target.value||/^[.,0-9\b]+$/.test(e.target.value))&&l(Object(p.a)({},c,Object(j.a)({},e.target.name,s.format(e.target.value.toString().replace(/,/g,"")).replace("$",""))))};Object(n.useEffect)((function(){var e=parseInt(c.waterCost.toString().replace(",","")),t=parseInt(c.energyCost.toString().replace(",","")),a=parseInt(c.hoaCost.toString().replace(",",""));l((function(n){return Object(p.a)({},n,{monthlyPayment:s.format(e+t+a)})}))}),[c.waterCost,c.energyCost,c.hoaCost]),Object(n.useEffect)((function(){e.changeValue(parseInt(c.monthlyPayment.toString().replace(/[$,]/g,"")),"utilities")}),[c.monthlyPayment]);var s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return r.a.createElement(w.a,null,r.a.createElement(C.a,{expandIcon:r.a.createElement(S.a,{className:"expand-icon"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"accordion-summary"},r.a.createElement(x.a,null,"Utilities"),r.a.createElement(x.a,{className:"accordion-total expenses"},c.monthlyPayment,"/Mo")),r.a.createElement(N.a,null,r.a.createElement(R.a,{fullWidth:!0},r.a.createElement(h.a,{label:"Water\\Sewer",variant:"filled",name:"waterCost",value:c.waterCost,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement(h.a,{label:"Gas\\Electric",variant:"filled",name:"energyCost",value:c.energyCost,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}),r.a.createElement(h.a,{label:"Homeowner's Assocation",variant:"filled",name:"hoaCost",value:c.hoaCost,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(y.a,{position:"start"},r.a.createElement("p",null,"$"))},onChange:function(e){return o(e)}}))))},B=function(e){var t=Object(n.useState)({downPaymentPerc:0,downPayment:0,housePrice:0,netRentalIncome:0,grossRentalIncome:0,principalAndInterest:0,insurance:0,floodInsurance:0,propertyTaxes:0,capRate:0,loanCosts:0,rehabCosts:0,cashOnCashReturn:0,netIncome:0,utilities:0}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(e,t){console.log(e+t),l((function(a){return Object(p.a)({},a,Object(j.a)({},t,e))}))};return Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{cashOnCashReturn:(12*e.netIncome/(e.downPayment+e.loanCosts+e.rehabCosts)*100).toFixed(2)})}))}),[c.netRentalIncome,c.principalAndInterest,c.downPayment,c.loanCosts,c.rehabCosts,c.utilities,c.floodInsurance,c.insurance,c.propertyTaxes]),Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{capRate:(100*(12*e.netRentalIncome-e.insurance-e.floodInsurance-e.propertyTaxes-e.utilities)/e.housePrice).toFixed(2)})}))}),[c.netRentalIncome,c.housePrice,c.insurance,c.floodInsurance,c.propertyTaxes,c.utilities]),Object(n.useEffect)((function(){l((function(e){return Object(p.a)({},e,{netIncome:e.netRentalIncome-e.principalAndInterest-e.insurance-e.floodInsurance-e.propertyTaxes-e.utilities})}))}),[c.netRentalIncome,c.principalAndInterest,c.insurance,c.floodInsurance,c.propertyTaxes,c.utilities]),r.a.createElement("div",{className:"results"},r.a.createElement("img",{src:A.a,alt:"logo",className:"logo"}),r.a.createElement("p",{className:"app-description"},e.inputAddress),r.a.createElement(V,{values:c}),r.a.createElement("div",{className:"accordion-area"},r.a.createElement(_,{values:e.results,changeValue:o}),r.a.createElement($,{values:e.results,downPaymentPerc:c.downPaymentPerc,downPaymentPercChange:function(e){l((function(t){return Object(p.a)({},t,{downPaymentPerc:e})}))},housePrice:c.housePrice,changeValue:o}),r.a.createElement(W,{values:e.results,downPaymentPerc:c.downPaymentPerc,changeValue:o}),r.a.createElement(z,{values:e.results,downPaymentPerc:c.downPaymentPerc,changeValue:o}),r.a.createElement(T,{values:e.results,housePrice:c.housePrice,changeValue:o}),r.a.createElement(L,{changeValue:o}),r.a.createElement(D,{changeValue:o})),r.a.createElement("div",{className:"button-box"},r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){return e.switch()}},"Back")))},q=a(70),Y=a(71),H=a(150),J=a(149),Z=Object(Y.a)({palette:{primary:J.a},overrides:{MuiInputLabel:{root:{"font-weight":"bold"}}}}),G=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputAddress:"",results:{},showResults:!0,badAddress:!1},e.switchScreens=function(){e.setState({showResults:!e.state.showResults})},e.updateAddress=function(t){e.setState({inputAddress:t})},e.updateError=function(){e.setState({badAddress:!1})},e.search=function(){""!==e.state.inputAddress&&u(e.state.inputAddress).then((function(t){500!==t?(e.setState({results:t}),e.switchScreens()):e.setState({badAddress:!e.state.badAddress})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.showResults?"translate3d(-100%,0,0)":"translate3d(100%,0,0)",a=this.state.showResults?"translate3d(100%,0,0)":"translate3d(-100%,0,0)";return r.a.createElement("div",{className:"App-main"},r.a.createElement(H.a,{theme:Z},r.a.createElement(q.Transition,{items:this.state.showResults,initial:!1,from:{position:"absolute",opacity:0,transform:t,width:"80%"},enter:{opacity:1,transform:"translate3d(0%,0,0)",width:"80%"},leave:{opacity:0,transform:a,width:"80%"}},(function(t){return t?function(t){return r.a.createElement("div",{style:t,className:"search-page"},r.a.createElement(O,{updateAddress:e.updateAddress,search:e.search,badAddress:e.state.badAddress,updateError:e.updateError}))}:function(t){return r.a.createElement("div",{style:t,className:"results-page"},r.a.createElement(B,{results:e.state.results,switch:e.switchScreens,inputAddress:e.state.inputAddress}))}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports=a.p+"static/media/RoofCalc.e55aa73d.png"},81:function(e,t,a){e.exports=a(108)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.d07eccee.chunk.js.map