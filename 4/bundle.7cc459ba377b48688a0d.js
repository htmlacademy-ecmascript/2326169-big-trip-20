(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",u="quarter",d="year",c="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,o),r=n-s<0,a=e.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:l,d:a,D:c,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=v;var b=function(t){return t instanceof w},g=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var l=e.name;$[l]=e,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},D=_;D.l=g,D.i=b,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=g(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,u=!!D.u(e)||e,h=D.p(t),p=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},f=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return u?p(1,0):p(31,11);case o:return u?p(1,m):p(0,m+1);case l:var $=this.$locale().weekStart||0,b=(v<$?v+7:v)-$;return p(u?_-b:_+(6-b),m);case a:case c:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var l,u=D.p(t),h="set"+(this.$u?"UTC":""),p=(l={},l[a]=h+"Date",l[c]=h+"Date",l[o]=h+"Month",l[d]=h+"FullYear",l[r]=h+"Hours",l[s]=h+"Minutes",l[i]=h+"Seconds",l[n]=h+"Milliseconds",l)[u],f=u===a?this.$D+(e-this.$W):e;if(u===o||u===d){var v=this.clone().set(c,1);v.$d[p](f),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(n,u){var c,h=this;n=Number(n);var p=D.p(u),f=function(t){var e=M(h);return D.w(e.date(e.date()+Math.round(t*n)),h)};if(p===o)return this.set(o,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===a)return f(1);if(p===l)return f(7);var v=(c={},c[s]=t,c[r]=e,c[i]=1e3,c)[p]||1,m=this.$d.getTime()+n*v;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,u=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},c=function(t){return D.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:D.s(l+1,2,"0"),MMM:d(n.monthsShort,l,u,3),MMMM:d(u,l),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:D.s(r,2,"0"),h:c(1),hh:c(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,c,h){var p,f=D.p(c),v=M(n),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,y=D.m(this,v);return y=(p={},p[d]=y/12,p[o]=y,p[u]=y/3,p[l]=(_-m)/6048e5,p[a]=(_-m)/864e5,p[r]=_/e,p[s]=_/t,p[i]=_/1e3,p)[f]||_,h?y:D.a(y)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",d],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=g,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,o=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:l,months:o,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof y},h=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},v=function(t){return f(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?f(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*d[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/l),t%=l,this.$d.months=v(t/o),t%=o,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/s),t%=s,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var l=_(a,"S"),o=t.negative||e.negative||i.negative||s.negative||r.negative||l.negative,u=s.format||r.format||l.format?"T":"",d=(o?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+l.format;return"P"===d||"-P"===d?"P0D":d},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(i[t])}))},m.as=function(t){return this.$ms/d[p(t)]},m.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/d[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var i;return i=e?t*d[p(e)]:c(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return h(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=c;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(t,e){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return c(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(t,e,n,s){return i.fromToBase(t,e,n,s)}n.en.relativeTime=s,i.fromToBase=function(e,i,r,a,l){for(var o,u,d,c=r.$locale().relativeTime||s,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var v=h[f];v.d&&(o=a?n(e).diff(r,v.d,!0):r.diff(e,v.d,!0));var m=(t.rounding||Math.round)(Math.abs(o));if(d=o>0,m<=v.r||!v.r){m<=1&&f>0&&(v=h[f-1]);var _=c[v.l];l&&(m=l(""+m)),u="string"==typeof _?_.replace("%d",m):_(m,i,v.l,d);break}}if(i)return u;var y=d?c.future:c.past;return"function"==typeof y?y(u):y.replace("%s",u)},i.to=function(t,e){return r(t,e,this,!0)},i.from=function(t,e){return r(t,e,this)};var a=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;n.insertAdjacentElement(i,e.getElement())}class s{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const l=["Amsterdam","Tokyo","Geneva","Moscow","Saint-Petersburg"],o=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Oh la la","Best of the Best","Eze lemon squzy","Peace"],u=["Upgrade to a business class","Choose the radio station","Choose temperature","Drive slowly"],d=["taxi","train","flight","drive","bus"],c=[!0,!1],h="HH:mm",p="DD/MM/YY HH:mm";class f{constructor(t){let{point:e,offer:n,destination:i}=t;this.point=e,this.offer=n,this.destination=i}getTemplate(){return function(t,e,n){const{basePrice:i,type:s,dateFrom:r,dateTo:a}=t,{title:l,price:o}=e,{descriptions:u,name:d,picture:c}=n,h=r.format(p),f=a.format(p),v=`<div class="event__offer-selector">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n  <label class="event__offer-label" for="event-offer-luggage-1">\n    <span class="event__offer-title">${l}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${o}</span>\n  </label>\n</div>`,m=`<img class="event__photo" src="${c[0].url}" alt="Event photo"></img>`;let _="",y="";return(()=>{for(let t=0;t<5;t++)_+=v})(),(()=>{for(let t=0;t<3;t++)y+=m})(),`<form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n\n          <div class="event__type-item">\n            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        ${s}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${d}" list="destination-list-1">\n      <datalist id="destination-list-1">\n        <option value="Amsterdam"></option>\n        <option value="Geneva"></option>\n        <option value="Chamonix"></option>\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${h}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${f}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Cancel</button>\n  </header>\n  <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n        ${_}\n      </div>\n    </section>\n\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${u}.</p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n        ${y}\n        </div>\n      </div>\n    </section>\n  </section>\n</form>`}(this.point,this.offer,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var v=n(484),m=n.n(v),_=n(646),y=n.n(_),$=n(110),b=n.n($);const g=t=>t[Math.floor(Math.random()*t.length)],M=(t,e)=>{const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},D=36e5;let w=m()().subtract(M(0,5),"day").toDate();const S=t=>{let{next:e}=t;const n=M(0,59),i=M(1,5),s=M(0,5);return e&&(w=m()(w).add(n,"minute").add(i,"hour").add(s,"day").toDate()),w};m().extend(y()),m().extend(b());const T=t=>t?m()(t):"";class k{constructor(t){let{point:e,offer:n}=t;this.point=e,this.offer=n}getTemplate(){return function(t,e){const{basePrice:n,type:i,destination:s,dateFrom:r,dateTo:a}=t,{title:l,price:o}=e,u=((t,e)=>{const n=m()(e).diff(m()(t));let i=0;switch(!0){case n>=864e5:i=m().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=D:i=m().duration(n).format("HH[H] mm[M]");break;case n<D:i=m().duration(n).format("mm[M]")}return i})(r,a);return`<ul class="trip-events__list">\n  <li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${r.format("MMM D")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${i} ${s}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${r.format(h)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${a.format(h)}</time>\n      </p>\n      <p class="event__duration">${u}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${n+o}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      <li class="event__offer">\n        <span class="event__offer-title">${l}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${o}</span>\n      </li>\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>\n</ul>`}(this.point,this.offer)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const E=()=>{const t=g(l);return{id:crypto.randomUUID(),descriptions:g(o),name:t,picture:[{url:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${t} description`}]}},O=()=>({id:crypto.randomUUID(),title:`${g(u)}`,price:M(1,100)});class x{constructor(){this.destination=E(),this.offer=O(),this.point={id:crypto.randomUUID(),basePrice:M(1,100),dateFrom:T(S({next:!1})),dateTo:T(S({next:!0})),destination:E().name,isFavorite:g(c),offers:O().price,type:g(d)}}}const H=()=>new x,Y=document.querySelector(".page-body"),C=Y.querySelector(".trip-main"),F=Y.querySelector(".trip-events"),A=new class{tasks=Array.from({length:5},H);getTasks(){return this.tasks}},N=new class{constructor(t){let{headContainer:e}=t;this.headContainer=e}init(){i(new s,this.headContainer,t.AFTERBEGIN),i(new r,this.headContainer)}}({headContainer:C}),P=new class{constructor(t){let{boardContainer:e,tasksModel:n}=t;this.boardContainer=e,this.tasksModel=n}init(){this.boardTasks=[...this.tasksModel.getTasks()],i(new a,this.boardContainer,t.AFTERBEGIN),i(new f(this.boardTasks[0]),this.boardContainer,t.BEFOREEND);for(let e=0;e<this.boardTasks.length;e++)i(new k(this.boardTasks[e]),this.boardContainer,t.BEFOREEND)}}({boardContainer:F,tasksModel:A});N.init(),P.init()})()})();
//# sourceMappingURL=bundle.7cc459ba377b48688a0d.js.map