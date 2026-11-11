(()=>{var vc=0,Va=1,Mc=2;var Ds=1,Sc=2,Wn=3,Zi=0,ke=1,ge=2,bi=0,Xn=1,ka=2,Ga=3,Wa=4,bc=5;var fn=100,Ec=101,wc=102,Tc=103,Ac=104,Rc=200,Cc=201,Ic=202,Pc=203,Xa=204,qa=205,Lc=206,Dc=207,Nc=208,Uc=209,Fc=210,Bc=211,Oc=212,Hc=213,zc=214,vr=0,Mr=1,Sr=2,Un=3,br=4,Er=5,wr=6,Tr=7,Qr=0,Vc=1,kc=2,hi=0,Ya=1,Za=2,Ja=3,Ns=4,$a=5,Ka=6,ja=7;var Qa=300,Ji=301,pn=302,to=303,eo=304,Us=306,Ar=1e3,gi=1001,Rr=1002,Ce=1003,Gc=1004;var Fs=1005;var Ie=1006,io=1007;var $i=1008;var qe=1009,tl=1010,el=1011,qn=1012,no=1013,ui=1014,ii=1015,di=1016,so=1017,ro=1018,Yn=1020,il=35902,nl=35899,sl=1021,rl=1022,ni=1023,_i=1026,Ki=1027,oo=1028,ao=1029,ji=1030,lo=1031;var co=1033,Bs=33776,Os=33777,Hs=33778,zs=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,xo=37488,yo=37489,Vs=37490,vo=37491,Mo=37808,So=37809,bo=37810,Eo=37811,wo=37812,To=37813,Ao=37814,Ro=37815,Co=37816,Io=37817,Po=37818,Lo=37819,Do=37820,No=37821,Uo=36492,Fo=36494,Bo=36495,Oo=36283,Ho=36284,ks=36285,zo=36286;var ls=2300,Cr=2301,xr=2302,La=2303,Da=2400,Na=2401,Ua=2402;var Wc=3200;var Gs=0,Xc=1,Ni="",Je="srgb",cs="srgb-linear",hs="linear",ee="srgb";var yr=7680;var qc=519,Yc=512,Zc=513,Jc=514,Vo=515,$c=516,Kc=517,ko=518,jc=519,Qc=35044;var ol="300 es",ci=2e3,Fn=2001;function Zh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function th(){let n=us("canvas");return n.style.display="block",n}var ql={},Bn=null;function al(...n){let t="THREE."+n.shift();Bn?Bn("log",t,...n):console.log(t,...n)}function eh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=eh(n);let t="THREE."+n.shift();if(Bn)Bn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Pt(...n){n=eh(n);let t="THREE."+n.shift();if(Bn)Bn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function an(...n){let t=n.join(" ");t in ql||(ql[t]=!0,Rt(...n))}function ih(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var nh={[vr]:Mr,[Sr]:wr,[br]:Tr,[Un]:Er,[Mr]:vr,[wr]:Sr,[Tr]:br,[Er]:Un},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,os=Math.PI/180,ln=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function ll(n,t){return(n%t+t)%t}function $h(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Kh(n,t,e){return n!==t?(e-n)/(t-n):0}function as(n,t,e){return(1-e)*n+e*t}function jh(n,t,e,i){return as(n,t,1-Math.exp(-e*i))}function Qh(n,t=1){return t-Math.abs(ll(n,t*2)-t)}function tu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function eu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function iu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function nu(n,t){return n+Math.random()*(t-n)}function su(n){return n*(.5-Math.random())}function ru(n){n!==void 0&&(Yl=n);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(n){return n*os}function au(n){return n*ln}function lu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function cu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uu(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*p,a*u,a*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ne={DEG2RAD:os,RAD2DEG:ln,generateUUID:Zn,clamp:Wt,euclideanModulo:ll,mapLinear:$h,inverseLerp:Kh,lerp:as,damp:jh,pingpong:Qh,smoothstep:tu,smootherstep:eu,randInt:iu,randFloat:nu,randFloatSpread:su,seededRandom:ru,degToRad:ou,radToDeg:au,isPowerOfTwo:lu,ceilPowerOfTwo:cu,floorPowerOfTwo:hu,setQuaternionFromProperEuler:uu,normalize:ze,denormalize:Dn},Ut=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||c!==h||l!==p||u!==_){let m=c*h+l*p+u*_+d*M;m<0&&(h=-h,p=-p,_=-_,M=-M,m=-m);let f=1-a;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);f=Math.sin(f*S)/R,a=Math.sin(a*S)/R,c=c*f+h*a,l=l*f+p*a,u=u*f+_*a,d=d*f+M*a}else{c=c*f+h*a,l=l*f+p*a,u=u*f+_*a,d=d*f+M*a;let S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*d+c*p-l*h,t[e+1]=c*_+u*h+l*d-a*p,t[e+2]=l*_+u*p+a*h-c*d,t[e+3]=u*_-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"YZX":this._x=h*u*d+l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d-h*p*_;break;case"XZY":this._x=h*u*d-l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d+h*p*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ha=new A,Zl=new yi,Lt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],S=s[1],R=s[4],v=s[7],E=s[2],b=s[5],C=s[8];return r[0]=o*M+a*S+c*E,r[3]=o*m+a*R+c*b,r[6]=o*f+a*v+c*C,r[1]=l*M+u*S+d*E,r[4]=l*m+u*R+d*b,r[7]=l*f+u*v+d*C,r[2]=h*M+p*S+_*E,r[5]=h*m+p*R+_*b,r[8]=h*f+p*v+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,_=e*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*l-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=p*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return an("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(t,e)),this}rotate(t){return an("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return an("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new Lt,Jl=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){let n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return an("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return an("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:t,whitePoint:i,transfer:hs,toXYZ:Jl,fromXYZ:$l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:Jl,fromXYZ:$l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}var Gt=du();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yn,Ir=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yn===void 0&&(yn=us("canvas")),yn.width=t.width,yn.height=t.height;let s=yn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=yn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=us("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fu=0,On=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ir.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var pu=0,fa=new A,Ve=class n extends xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,r=Ie,o=$i,a=ni,c=qe,l=n.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Zn(),this.name="",this.source=new On(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ar:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ar:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Qa;Ve.DEFAULT_ANISOTROPY=1;var pe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],_=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,v=(p+1)/2,E=(f+1)/2,b=(u+h)/4,C=(d+M)/4,x=(_+m)/4;return R>v&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=b/i,r=C/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-M)/S,this.z=(h-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ve(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new On(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends Pr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ds=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,d,h,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,h,p,_,M,m)}set(t,e,i,s,r,o,a,c,l,u,d,h,p,_,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vn.setFromMatrixColumn(t,0).length(),r=1/vn.setFromMatrixColumn(t,1).length(),o=1/vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,_=a*u,M=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+_*l,e[5]=h-M*l,e[9]=-a*c,e[2]=M-h*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,p=c*d,_=l*u,M=l*d;e[0]=h+M*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=M+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,p=c*d,_=l*u,M=l*d;e[0]=h-M*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,p=o*d,_=a*u,M=a*d;e[0]=c*u,e[4]=_*l-p,e[8]=h*l+M,e[1]=c*d,e[5]=M*l+h,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,p=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=M-h*d,e[8]=_*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+_,e[10]=h-M*d}else if(t.order==="XZY"){let h=o*c,p=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+M,e[5]=o*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,i){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Oi.crossVectors(i,Ye),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Oi.crossVectors(i,Ye)),Oi.normalize(),$s.crossVectors(Ye,Oi),s[0]=Oi.x,s[4]=$s.x,s[8]=Ye.x,s[1]=Oi.y,s[5]=$s.y,s[9]=Ye.y,s[2]=Oi.z,s[6]=$s.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],S=i[3],R=i[7],v=i[11],E=i[15],b=s[0],C=s[4],x=s[8],w=s[12],I=s[1],U=s[5],F=s[9],z=s[13],L=s[2],V=s[6],q=s[10],Y=s[14],it=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=o*b+a*I+c*L+l*it,r[4]=o*C+a*U+c*V+l*W,r[8]=o*x+a*F+c*q+l*j,r[12]=o*w+a*z+c*Y+l*tt,r[1]=u*b+d*I+h*L+p*it,r[5]=u*C+d*U+h*V+p*W,r[9]=u*x+d*F+h*q+p*j,r[13]=u*w+d*z+h*Y+p*tt,r[2]=_*b+M*I+m*L+f*it,r[6]=_*C+M*U+m*V+f*W,r[10]=_*x+M*F+m*q+f*j,r[14]=_*w+M*z+m*Y+f*tt,r[3]=S*b+R*I+v*L+E*it,r[7]=S*C+R*U+v*V+E*W,r[11]=S*x+R*F+v*q+E*j,r[15]=S*w+R*z+v*Y+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],M=t[7],m=t[11],f=t[15],S=c*p-l*h,R=a*p-l*d,v=a*h-c*d,E=o*p-l*u,b=o*h-c*u,C=o*d-a*u;return e*(M*S-m*R+f*v)-i*(_*S-m*E+f*b)+s*(_*R-M*E+f*C)-r*(_*v-M*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],M=t[13],m=t[14],f=t[15],S=e*a-i*o,R=e*c-s*o,v=e*l-r*o,E=i*c-s*a,b=i*l-r*a,C=s*l-r*c,x=u*M-d*_,w=u*m-h*_,I=u*f-p*_,U=d*m-h*M,F=d*f-p*M,z=h*f-p*m,L=S*z-R*F+v*U+E*I-b*w+C*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(a*z-c*F+l*U)*V,t[1]=(s*F-i*z-r*U)*V,t[2]=(M*C-m*b+f*E)*V,t[3]=(h*b-d*C-p*E)*V,t[4]=(c*I-o*z-l*w)*V,t[5]=(e*z-s*I+r*w)*V,t[6]=(m*v-_*C-f*R)*V,t[7]=(u*C-h*v+p*R)*V,t[8]=(o*F-a*I+l*x)*V,t[9]=(i*I-e*F-r*x)*V,t[10]=(_*b-M*v+f*S)*V,t[11]=(d*v-u*b-p*S)*V,t[12]=(a*w-o*U-c*x)*V,t[13]=(e*U-i*w+s*x)*V,t[14]=(M*R-_*E-m*S)*V,t[15]=(u*E-d*R+h*S)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,_=r*d,M=o*u,m=o*d,f=a*d,S=c*l,R=c*u,v=c*d,E=i.x,b=i.y,C=i.z;return s[0]=(1-(M+f))*E,s[1]=(p+v)*E,s[2]=(_-R)*E,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(h+f))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(_+R)*C,s[9]=(m-S)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=vn.set(s[0],s[1],s[2]).length(),a=vn.set(s[4],s[5],s[6]).length(),c=vn.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ri.copy(this);let l=1/o,u=1/a,d=1/c;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,e.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=ci,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),_,M;if(c)_=r/(o-r),M=o*r/(o-r);else if(a===ci)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Fn)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci,c=!1){let l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),_,M;if(c)_=1/(o-r),M=o/(o-r);else if(a===ci)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Fn)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},vn=new A,ri=new ae,mu=new A(0,0,0),gu=new A(1,1,1),Oi=new A,$s=new A,Ye=new A,Kl=new ae,jl=new yi,ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_u=0,Ql=new A,Mn=new yi,Ai=new ae,Ks=new A,Qn=new A,xu=new A,yu=new yi,tc=new A(1,0,0),ec=new A(0,1,0),ic=new A(0,0,1),nc={type:"added"},vu={type:"removed"},Sn={type:"childadded",child:null},pa={type:"childremoved",child:null},Me=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new ei,i=new yi,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.premultiply(Mn),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ks.copy(t):Ks.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Qn,Ks,this.up):Ai.lookAt(Ks,Qn,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Mn.setFromRotationMatrix(Ai),this.quaternion.premultiply(Mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vu),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Me.DEFAULT_UP=new A(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mu={type:"move"},Hn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},js={h:0,s:0,l:0};function ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var It=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Gt.workingColorSpace){if(t=ll(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=sh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Gt.workingToColorSpace(Ue.copy(this),t),Math.round(Wt(Ue.r*255,0,255))*65536+Math.round(Wt(Ue.g*255,0,255))*256+Math.round(Wt(Ue.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Ue.copy(this),e);let i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Je){Gt.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,i=Ue.g,s=Ue.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(js);let i=as(Hi.h,js.h,e),s=as(Hi.s,js.s,e),r=as(Hi.l,js.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new It;It.NAMES=sh;var ps=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ms=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},oi=new A,Ri=new A,ga=new A,Ci=new A,bn=new A,En=new A,sc=new A,_a=new A,xa=new A,ya=new A,va=new pe,Ma=new pe,Sa=new pe,Gi=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),oi.subVectors(t,e),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){oi.subVectors(s,e),Ri.subVectors(i,e),ga.subVectors(t,e);let o=oi.dot(oi),a=oi.dot(Ri),c=oi.dot(ga),l=Ri.dot(Ri),u=Ri.dot(ga),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return va.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,i),Sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(t,e,i,s){return oi.subVectors(i,e),Ri.subVectors(t,e),oi.cross(Ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),oi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;bn.subVectors(s,i),En.subVectors(r,i),_a.subVectors(t,i);let c=bn.dot(_a),l=En.dot(_a);if(c<=0&&l<=0)return e.copy(i);xa.subVectors(t,s);let u=bn.dot(xa),d=En.dot(xa);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(bn,o);ya.subVectors(t,r);let p=bn.dot(ya),_=En.dot(ya);if(_>=0&&p<=_)return e.copy(r);let M=p*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(En,a);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return sc.subVectors(r,s),a=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(sc,a);let f=1/(m+M+h);return o=M*f,a=h*f,e.copy(i).addScaledVector(bn,o).addScaledVector(En,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),tr.subVectors(this.max,ts),wn.subVectors(t.a,ts),Tn.subVectors(t.b,ts),An.subVectors(t.c,ts),zi.subVectors(Tn,wn),Vi.subVectors(An,Tn),nn.subVectors(wn,An);let e=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-nn.z,nn.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,nn.z,0,-nn.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-nn.y,nn.x,0];return!ba(e,wn,Tn,An,tr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,wn,Tn,An,tr))?!1:(er.crossVectors(zi,Vi),e=[er.x,er.y,er.z],ba(e,wn,Tn,An,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new A,new A,new A,new A,new A,new A,new A,new A],ai=new A,Qs=new vi,wn=new A,Tn=new A,An=new A,zi=new A,Vi=new A,nn=new A,ts=new A,tr=new A,er=new A,sn=new A;function ba(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){sn.fromArray(n,r);let a=s.x*Math.abs(sn.x)+s.y*Math.abs(sn.y)+s.z*Math.abs(sn.z),c=t.dot(sn),l=e.dot(sn),u=i.dot(sn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ve=new A,ir=new Ut,Su=0,Fe=class extends xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Su++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var gs=class extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var _s=class extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Kt=class extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},bu=new vi,es=new A,Ea=new A,Di=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):bu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(es,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Ea)),this.expandByPoint(es.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Eu=0,ti=new ae,wa=new Me,Rn=new A,Ze=new vi,is=new vi,Ae=new A,be=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zh(t)?_s:gs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Lt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ze.min,is.min),Ze.expandByPoint(Ae),Ae.addVectors(Ze.max,is.max),Ze.expandByPoint(Ae)):(Ze.expandByPoint(is.min),Ze.expandByPoint(is.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ae.fromBufferAttribute(a,l),c&&(Rn.fromBufferAttribute(t,l),Ae.add(Rn)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new A,c[x]=new A;let l=new A,u=new A,d=new A,h=new Ut,p=new Ut,_=new Ut,M=new A,m=new A;function f(x,w,I){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,I),u.sub(l),d.sub(l),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),a[x].add(M),a[w].add(M),a[I].add(M),c[x].add(m),c[w].add(m),c[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,w=S.length;x<w;++x){let I=S[x],U=I.start,F=I.count;for(let z=U,L=U+F;z<L;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let R=new A,v=new A,E=new A,b=new A;function C(x){E.fromBufferAttribute(s,x),b.copy(E);let w=a[x];R.copy(w),R.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(b,w);let U=v.dot(c[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,U)}for(let x=0,w=S.length;x<w;++x){let I=S[x],U=I.start,F=I.count;for(let z=U,L=U+F;z<L;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),p=0,_=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?p=c[M]*a.data.stride+a.offset:p=c[M]*u;for(let f=0;f<u;f++)h[_++]=l[p++]}return new Fe(h,u,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ta=new A,wu=new A,Tu=new Lt,li=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ta.subVectors(i,e).cross(wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ta),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Tu.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Au=0,Mi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Xn,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Un,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ut().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Pi=new A,Aa=new A,nr=new A,sr=new A,xs=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Aa.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=sr.dot(this.direction),c=-sr.dot(nr),l=sr.lengthSq(),u=Math.abs(1-o*o),d,h,p,_;if(u>0)if(d=o*c-a,h=o*a-c,_=r*u,d>=0)if(h>=-_)if(h<=_){let M=1/u;d*=M,h*=M,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(nr,h),p}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,p=t.z-o.z,_=e.x-o.x,M=e.y-o.y,m=e.z-o.z,f=i.x-o.x,S=i.y-o.y,R=i.z-o.z,v=Math.abs(c),E=Math.abs(l),b=Math.abs(u),C,x,w,I,U,F,z,L,V,q,Y,it;if(v>=E&&v>=b?(w=c,F=d,V=_,it=f,c>=0?(C=l,x=u,I=h,U=p,z=M,L=m,q=S,Y=R):(C=u,x=l,I=p,U=h,z=m,L=M,q=R,Y=S)):E>=b?(w=l,F=h,V=M,it=S,l>=0?(C=u,x=c,I=p,U=d,z=m,L=_,q=R,Y=f):(C=c,x=u,I=d,U=p,z=_,L=m,q=f,Y=R)):(w=u,F=p,V=m,it=R,u>=0?(C=c,x=l,I=d,U=h,z=_,L=M,q=f,Y=S):(C=l,x=c,I=h,U=d,z=M,L=_,q=S,Y=f)),w===0)return null;let W=C/w,j=x/w,tt=1/w,Tt=I-W*F,bt=U-j*F,se=z-W*V,Vt=L-j*V,qt=q-W*it,Z=Y-j*it,Q=qt*Vt-Z*se,xt=Tt*Z-bt*qt,Dt=se*bt-Vt*Tt;if(s){if(Q<0||xt<0||Dt<0)return null}else if((Q<0||xt<0||Dt<0)&&(Q>0||xt>0||Dt>0))return null;let gt=Q+xt+Dt;if(gt===0)return null;let Ot=tt*(Q*F+xt*V+Dt*it);return(gt>0?Ot<0:Ot>0)?null:this.at(Ot/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rc=new ae,rn=new xs,rr=new Di,oc=new A,or=new A,ar=new A,lr=new A,Ra=new A,cr=new A,ac=new A,hr=new A,st=class extends Me{constructor(t=new be,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(Ra.fromBufferAttribute(d,t),o?cr.addScaledVector(Ra,u):cr.addScaledVector(Ra.sub(e),u))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),rn.copy(t.ray).recast(t.near),!(rr.containsPoint(rn.origin)===!1&&(rn.intersectSphere(rr,oc)===null||rn.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),rn.copy(t.ray).applyMatrix4(rc),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,E=R;v<E;v+=3){let b=a.getX(v),C=a.getX(v+1),x=a.getX(v+2);s=ur(this,f,t,i,l,u,d,b,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let S=a.getX(m),R=a.getX(m+1),v=a.getX(m+2);s=ur(this,o,t,i,l,u,d,S,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,E=R;v<E;v+=3){let b=v,C=v+1,x=v+2;s=ur(this,f,t,i,l,u,d,b,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let S=m,R=m+1,v=m+2;s=ur(this,o,t,i,l,u,d,S,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ru(n,t,e,i,s,r,o,a){let c;if(t.side===ke?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Zi,a),c===null)return null;hr.copy(a),hr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(hr);return l<e.near||l>e.far?null:{distance:l,point:hr.clone(),object:n}}function ur(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,or),n.getVertexPosition(c,ar),n.getVertexPosition(l,lr);let u=Ru(n,t,e,i,or,ar,lr,ac);if(u){let d=new A;Gi.getBarycoord(ac,or,ar,lr,d),s&&(u.uv=Gi.getInterpolatedAttribute(s,a,c,l,d,new Ut)),r&&(u.uv1=Gi.getInterpolatedAttribute(r,a,c,l,d,new Ut)),o&&(u.normal=Gi.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new A,materialIndex:0};Gi.getNormal(or,ar,lr,h.normal),u.face=h,u.barycoord=d}return u}var ys=class extends Ve{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ce,u=Ce,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Fe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cn=new ae,lc=new ae,dr=[],cc=new vi,Cu=new ae,ns=new st,ss=new Di,Ms=class extends st{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),cc.copy(t.boundingBox).applyMatrix4(Cn),this.boundingBox.union(cc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),ss.copy(t.boundingSphere).applyMatrix4(Cn),this.boundingSphere.union(ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(i),t.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cn),lc.multiplyMatrices(i,Cn),ns.matrixWorld=lc,ns.raycast(t,dr);for(let o=0,a=dr.length;o<a;o++){let c=dr[o];c.instanceId=r,c.object=this,e.push(c)}dr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,oo,ii));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},on=new Di,Iu=new Ut(.5,.5),fr=new A,zn=class{constructor(t=new li,e=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],S=r[12],R=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,p-u,f-_,E-S).normalize(),s[1].setComponents(l+o,p+u,f+_,E+S).normalize(),s[2].setComponents(l+a,p+d,f+M,E+R).normalize(),s[3].setComponents(l-a,p-d,f-M,E-R).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,p-h,f-m,E-v).normalize();else if(s[4].setComponents(l-c,p-h,f-m,E-v).normalize(),e===ci)s[5].setComponents(l+c,p+h,f+m,E+v).normalize();else if(e===Fn)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(t){on.center.set(0,0,0);let e=Iu.distanceTo(t.center);return on.radius=.7071067811865476+e,on.applyMatrix4(t.matrixWorld),this.intersectsSphere(on)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cn=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new A,Nr=new A,hc=new ae,rs=new xs,pr=new Di,Ca=new A,uc=new A,Vn=class extends Me{constructor(t=new be,e=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Dr.distanceTo(Nr);t.setAttribute("lineDistance",new Kt(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;hc.copy(s).invert(),rs.copy(t.ray).applyMatrix4(hc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=l){let f=u.getX(M),S=u.getX(M+1),R=mr(this,t,rs,c,f,S,M);R&&e.push(R)}if(this.isLineLoop){let M=u.getX(_-1),m=u.getX(p),f=mr(this,t,rs,c,M,m,_-1);f&&e.push(f)}}else{let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=l){let f=mr(this,t,rs,c,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){let M=mr(this,t,rs,c,_-1,p,_-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mr(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Dr.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),e.distanceSqToSegment(Dr,Nr,Ca,uc)>i)return;Ca.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ca);if(!(l<t.near||l>t.far))return{distance:l,point:uc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var dc=new A,fc=new A,Ur=class extends Vn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)dc.fromBufferAttribute(e,s),fc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dc.distanceTo(fc);t.setAttribute("lineDistance",new Kt(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ss=class extends Ve{constructor(t=[],e=Ji,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bs=class extends Ve{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends Ve{constructor(t,e,i=ui,s,r,o,a=Ce,c=Ce,l,u=_i,d=1){if(u!==_i&&u!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new On(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fr=class extends Wi{constructor(t,e=ui,i=Ji,s,r,o=Ce,a=Ce,c,l=_i){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Es=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},jt=class n extends be{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function _(M,m,f,S,R,v,E,b,C,x,w){let I=v/C,U=E/x,F=v/2,z=E/2,L=b/2,V=C+1,q=x+1,Y=0,it=0,W=new A;for(let j=0;j<q;j++){let tt=j*U-z;for(let Tt=0;Tt<V;Tt++){let bt=Tt*I-F;W[M]=bt*S,W[m]=tt*R,W[f]=L,l.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[f]=b>0?1:-1,u.push(W.x,W.y,W.z),d.push(Tt/C),d.push(1-j/x),Y+=1}}for(let j=0;j<x;j++)for(let tt=0;tt<C;tt++){let Tt=h+tt+V*j,bt=h+tt+V*(j+1),se=h+(tt+1)+V*(j+1),Vt=h+(tt+1)+V*j;c.push(Tt,bt,Vt),c.push(bt,se,Vt),it+=6}a.addGroup(p,it,w),p+=it,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hn=class n extends be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new A,u=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let p=i+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class n extends be{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],_=0,M=[],m=i/2,f=0;S(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(p,2));function S(){let v=new A,E=new A,b=0,C=(e-t)/i;for(let x=0;x<=r;x++){let w=[],I=x/r,U=I*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,L=z*c+a,V=Math.sin(L),q=Math.cos(L);E.x=U*V,E.y=-I*i+m,E.z=U*q,d.push(E.x,E.y,E.z),v.set(V,C,q).normalize(),h.push(v.x,v.y,v.z),p.push(z,1-I),w.push(_++)}M.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let I=M[w][x],U=M[w+1][x],F=M[w+1][x+1],z=M[w][x+1];(t>0||w!==0)&&(u.push(I,U,z),b+=3),(e>0||w!==r-1)&&(u.push(U,F,z),b+=3)}l.addGroup(f,b,0),f+=b}function R(v){let E=_,b=new Ut,C=new A,x=0,w=v===!0?t:e,I=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),_++;let U=_;for(let F=0;F<=s;F++){let L=F/s*c+a,V=Math.cos(L),q=Math.sin(L);C.x=w*q,C.y=m*I,C.z=w*V,d.push(C.x,C.y,C.z),h.push(0,I,0),b.x=V*.5+.5,b.y=q*.5*I+.5,p.push(b.x,b.y),_++}for(let F=0;F<s;F++){let z=E+F,L=U+F;v===!0?u.push(L,L+1,z):u.push(L+1,L,z),x+=3}l.addGroup(f,x,v===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Br=class n extends be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let R=new A,v=new A,E=new A;for(let b=0;b<e.length;b+=3)p(e[b+0],R),p(e[b+1],v),p(e[b+2],E),c(R,v,E,S)}function c(S,R,v,E){let b=E+1,C=[];for(let x=0;x<=b;x++){C[x]=[];let w=S.clone().lerp(v,x/b),I=R.clone().lerp(v,x/b),U=b-x;for(let F=0;F<=U;F++)F===0&&x===b?C[x][F]=w:C[x][F]=w.clone().lerp(I,F/U)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){let I=Math.floor(w/2);w%2===0?(h(C[x][I+1]),h(C[x+1][I]),h(C[x][I])):(h(C[x][I+1]),h(C[x+1][I+1]),h(C[x+1][I]))}}function l(S){let R=new A;for(let v=0;v<r.length;v+=3)R.x=r[v+0],R.y=r[v+1],R.z=r[v+2],R.normalize().multiplyScalar(S),r[v+0]=R.x,r[v+1]=R.y,r[v+2]=R.z}function u(){let S=new A;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let v=m(S)/2/Math.PI+.5,E=f(S)/Math.PI+.5;o.push(v,1-E)}_(),d()}function d(){for(let S=0;S<o.length;S+=6){let R=o[S+0],v=o[S+2],E=o[S+4],b=Math.max(R,v,E),C=Math.min(R,v,E);b>.9&&C<.1&&(R<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,R){let v=S*3;R.x=t[v+0],R.y=t[v+1],R.z=t[v+2]}function _(){let S=new A,R=new A,v=new A,E=new A,b=new Ut,C=new Ut,x=new Ut;for(let w=0,I=0;w<r.length;w+=9,I+=6){S.set(r[w+0],r[w+1],r[w+2]),R.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),E.copy(S).add(R).add(v).divideScalar(3);let U=m(E);M(b,I+0,S,U),M(C,I+2,R,U),M(x,I+4,v,U)}}function M(S,R,v,E){E<0&&S.x===1&&(o[R]=S.x-1),v.x===0&&v.z===0&&(o[R]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ws=class n extends Br{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Si=class n extends be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,p=[],_=[],M=[],m=[];for(let f=0;f<u;f++){let S=f*h-o;for(let R=0;R<l;R++){let v=R*d-r;_.push(v,-S,0),M.push(0,0,1),m.push(R/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let R=S+l*f,v=S+l*(f+1),E=S+1+l*(f+1),b=S+1+l*f;p.push(R,v,b),p.push(v,E,b)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(M,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},$e=class n extends be{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,h=(e-t)/s,p=new A,_=new Ut;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}d+=h}for(let M=0;M<s;M++){let m=M*(i+1);for(let f=0;f<i;f++){let S=f+m,R=S,v=S+i+1,E=S+i+2,b=S+1;a.push(R,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Be=class n extends be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new A,p=new A,_=new A;for(let M=0;M<=i;M++){let m=o+M/i*a;for(let f=0;f<=s;f++){let S=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(S),p.y=(t+e*Math.cos(m))*Math.sin(S),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),d.push(f/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,R=(s+1)*(M-1)+m,v=(s+1)*M+m;c.push(f,S,v),c.push(S,R,v)}this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function mn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(pc(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(pc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Oe(n){let t={};for(let e=0;e<n.length;e++){let i=mn(n[e]);for(let s in i)t[s]=i[s]}return t}function pc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var rh={clone:mn,merge:Oe},Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mn(t.uniforms),this.uniformsGroups=Pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new It().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Or=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ts=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xe=class extends Mi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Qr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Hr=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zr=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function In(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ia(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vr=class extends Xi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Da,endingEnd:Da}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Na:r=t,a=2*e-i;break;case Ua:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Na:o=t,c=2*i-e;break;case Ua:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-e)/(s-e),M=_*_,m=M*_,f=-h*m+2*h*M-h*_,S=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*_+1,R=(-1-p)*m+(1.5+p)*M+.5*_,v=p*m-p*M;for(let E=0;E!==a;++E)r[E]=f*o[u+E]+S*o[l+E]+R*o[c+E]+v*o[d+E];return r}},kr=class extends Xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},Gr=class extends Xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wr=class extends Xi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-e)/(s-e),M=1-_;for(let m=0;m!==a;++m)r[m]=o[l+m]*M+o[c+m]*_;return r}let h=a*2,p=t-1;for(let _=0;_!==a;++_){let M=o[l+_],m=o[c+_],f=p*h+_*2,S=d[f],R=d[f+1],v=t*h+_*2,E=u[v],b=u[v+1],C=Uu(i,e,S,E,s);r[_]=oh(C,M,R,b,m)}return r}};function oh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Nu(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Uu(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=oh(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Nu(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var je=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=In(e,this.TimeBufferType),this.values=In(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:In(t.times,Array),values:In(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ia(t.settings)&&(i.settings={inTangents:In(t.settings.inTangents,Array),outTangents:In(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ls:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case xr:e=this.InterpolantFactoryMethodSmooth;break;case La:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return xr;case this.InterpolantFactoryMethodBezier:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ia(this.settings)&&(mc(this.settings.inTangents,t),mc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Pt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jh(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let M=e[d+_];if(M!==e[h+_]||M!==e[p+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)e[h+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ia(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=Cr;var qi=class extends je{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ls;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends je{constructor(t,e,i,s){super(t,e,i,s)}};Xr.prototype.ValueTypeName="color";var qr=class extends je{constructor(t,e,i,s){super(t,e,i,s)}};qr.prototype.ValueTypeName="number";var Yr=class extends Xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)yi.slerpFlat(r,0,o,l-a,o,l,c);return r}},As=class extends je{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends je{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ls;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends je{constructor(t,e,i,s){super(t,e,i,s)}};Zr.prototype.ValueTypeName="vector";var Jr=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let p=l[d],_=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ah=new Jr,$r=class{constructor(t){this.manager=t!==void 0?t:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var un=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Pa=new ae,gc=new A,_c=new A,kn=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Pa,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Fn||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gr=new A,_r=new yi,mi=new A,Rs=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gr,_r,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,_r,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(gr,_r,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,_r,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new A,xc=new Ut,yc=new Ut,Re=class extends Rs{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ln*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ln*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,xc,yc),e.subVectors(yc,xc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(os*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fa=class extends kn{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=ln*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Cs=class extends un{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fa}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Ba=class extends kn{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0}},dn=class extends un{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ba}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gn=class extends Rs{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oa=class extends kn{constructor(){super(new Gn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends un{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Oa}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ps=class extends un{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pn=-90,Ln=1,Kr=class extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(Pn,Ln,t,e);s.layers=this.layers,this.add(s);let r=new Re(Pn,Ln,t,e);r.layers=this.layers,this.add(r);let o=new Re(Pn,Ln,t,e);o.layers=this.layers,this.add(o);let a=new Re(Pn,Ln,t,e);a.layers=this.layers,this.add(a);let c=new Re(Pn,Ln,t,e);c.layers=this.layers,this.add(c);let l=new Re(Pn,Ln,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},jr=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hl="\\[\\]\\.:\\/",Fu=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",Bu="[^"+hl.replace("\\.","")+"]",Ou=/((?:WC+[\/:])*)/.source.replace("WC",ul),Hu=/(WCOD+)?/.source.replace("WCOD",Bu),zu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Vu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),ku=new RegExp("^"+Ou+Hu+zu+Vu+"$"),Gu=["material","materials","bones","map"],Ha=class{constructor(t,e,i){let s=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fu,"")}static parseTrackName(t){let e=ku.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Gu.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Ha;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var za=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Ls=class extends Ur{constructor(t=10,e=10,i=4473924,s=8947848){i=new It(i),s=new It(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,p=0,_=-a;h<=e;h++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let M=h===r?i:s;M.toArray(l,p),p+=3,M.toArray(l,p),p+=3,M.toArray(l,p),p+=3,M.toArray(l,p),p+=3}let u=new be;u.setAttribute("position",new Kt(c,3)),u.setAttribute("color",new Kt(l,3));let d=new cn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function dl(n,t,e,i){let s=Wu(i);switch(e){case sl:return n*t;case oo:return n*t/s.components*s.byteLength;case ao:return n*t/s.components*s.byteLength;case ji:return n*t*2/s.components*s.byteLength;case lo:return n*t*2/s.components*s.byteLength;case rl:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case co:return n*t*4/s.components*s.byteLength;case Bs:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hs:case zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(n,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(n,8)*Math.max(t,8)/2;case mo:case go:case xo:case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _o:case Vs:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Fo:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Oo:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ks:case zo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wu(n){switch(n){case qe:case tl:return{byteLength:1,components:1};case qn:case el:case di:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case ui:case no:case ii:return{byteLength:4,components:1};case il:case nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ch(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qu(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let M=d[p];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Yu,alphahash_pars_fragment:Zu,alphamap_fragment:Ju,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:ju,aomap_fragment:Qu,aomap_pars_fragment:td,batching_pars_vertex:ed,batching_vertex:id,begin_vertex:nd,beginnormal_vertex:sd,bsdfs:rd,iridescence_fragment:od,bumpmap_pars_fragment:ad,clipping_planes_fragment:ld,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ud,color_fragment:dd,color_pars_fragment:fd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:xd,displacementmap_pars_vertex:yd,displacementmap_vertex:vd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:bd,colorspace_pars_fragment:Ed,envmap_fragment:wd,envmap_common_pars_fragment:Td,envmap_pars_fragment:Ad,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Hd,envmap_vertex:Cd,fog_vertex:Id,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Bd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Vd,lights_phong_fragment:kd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Yd,lights_fragment_end:Zd,lightprobes_pars_fragment:Jd,logdepthbuf_fragment:$d,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Qd,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:of,morphinstance_vertex:af,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:bf,premultiplied_alpha_fragment:Ef,project_vertex:wf,dithering_fragment:Tf,dithering_pars_fragment:Af,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Pf,shadowmap_vertex:Lf,shadowmask_pars_fragment:Df,skinbase_vertex:Nf,skinning_pars_vertex:Uf,skinning_vertex:Ff,skinnormal_vertex:Bf,specularmap_fragment:Of,specularmap_pars_fragment:Hf,tonemapping_fragment:zf,tonemapping_pars_fragment:Vf,transmission_fragment:kf,transmission_pars_fragment:Gf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:Zf,background_frag:Jf,backgroundCube_vert:$f,backgroundCube_frag:Kf,cube_vert:jf,cube_frag:Qf,depth_vert:tp,depth_frag:ep,distance_vert:ip,distance_frag:np,equirect_vert:sp,equirect_frag:rp,linedashed_vert:op,linedashed_frag:ap,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:_p,meshphysical_vert:xp,meshphysical_frag:yp,meshtoon_vert:vp,meshtoon_frag:Mp,points_vert:Sp,points_frag:bp,shadow_vert:Ep,shadow_frag:wp,sprite_vert:Tp,sprite_frag:Ap},ut={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},wi={basic:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Oe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Oe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new It(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Oe([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Oe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Oe([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Oe([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Oe([ut.common,ut.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Oe([ut.lights,ut.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};wi.physical={uniforms:Oe([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Go={r:0,b:0,g:0},Rp=new ae,Ih=new Lt;Ih.set(-1,0,0,0,1,0,0,0,1);function Cp(n,t,e,i,s,r){let o=new It(0),a=s===!0?0:1,c,l,u=null,d=0,h=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let v=S.backgroundBlurriness>0;R=t.get(R,v)}return R}function _(S){let R=!1,v=p(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,R){let v=p(R);v&&(v.isCubeTexture||v.mapping===Us)?(l===void 0&&(l=new st(new jt(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:mn(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ih),l.material.toneMapped=Gt.getTransfer(v.colorSpace)!==ee,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new st(new Si(2,2),new Ke({name:"BackgroundMaterial",uniforms:mn(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,R){S.getRGB(Go,cl(n)),e.buffers.color.setClear(Go.r,Go.g,Go.b,R,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:_,addToRenderList:M,dispose:f}}function Ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,F,z,L,V){let q=!1,Y=d(U,L,z,F);r!==Y&&(r=Y,l(r.object)),q=p(U,L,z,V),q&&_(U,L,z,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(U,F,z,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,F,z,L){let V=L.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let Y=U.isInstancedMesh===!0?U.id:0,it=q[Y];it===void 0&&(it={},q[Y]=it);let W=it[z.id];W===void 0&&(W={},it[z.id]=W);let j=W[V];return j===void 0&&(j=h(c()),W[V]=j),j}function h(U){let F=[],z=[],L=[];for(let V=0;V<e;V++)F[V]=0,z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,F,z,L){let V=r.attributes,q=F.attributes,Y=0,it=z.getAttributes();for(let W in it)if(it[W].location>=0){let tt=V[W],Tt=q[W];if(Tt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function _(U,F,z,L){let V={},q=F.attributes,Y=0,it=z.getAttributes();for(let W in it)if(it[W].location>=0){let tt=q[W];tt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),V[W]=Tt,Y++}r.attributes=V,r.attributesNum=Y,r.index=L}function M(){let U=r.newAttributes;for(let F=0,z=U.length;F<z;F++)U[F]=0}function m(U){f(U,0)}function f(U,F){let z=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;z[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),V[U]!==F&&(n.vertexAttribDivisor(U,F),V[U]=F)}function S(){let U=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==U[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function R(U,F,z,L,V,q,Y){Y===!0?n.vertexAttribIPointer(U,F,z,V,q):n.vertexAttribPointer(U,F,z,L,V,q)}function v(U,F,z,L){M();let V=L.attributes,q=z.getAttributes(),Y=F.defaultAttributeValues;for(let it in q){let W=q[it];if(W.location>=0){let j=V[it];if(j===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let tt=j.normalized,Tt=j.itemSize,bt=t.get(j);if(bt===void 0)continue;let se=bt.buffer,Vt=bt.type,qt=bt.bytesPerElement,Z=Vt===n.INT||Vt===n.UNSIGNED_INT||j.gpuType===no;if(j.isInterleavedBufferAttribute){let Q=j.data,xt=Q.stride,Dt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let gt=0;gt<W.locationSize;gt++)f(W.location+gt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let gt=0;gt<W.locationSize;gt++)R(W.location+gt,Tt/W.locationSize,Vt,tt,xt*qt,(Dt+Tt/W.locationSize*gt)*qt,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)f(W.location+Q,j.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Q=0;Q<W.locationSize;Q++)R(W.location+Q,Tt/W.locationSize,Vt,tt,Tt*qt,Tt/W.locationSize*Q*qt,Z)}}else if(Y!==void 0){let tt=Y[it];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(W.location,tt);break;case 3:n.vertexAttrib3fv(W.location,tt);break;case 4:n.vertexAttrib4fv(W.location,tt);break;default:n.vertexAttrib1fv(W.location,tt)}}}}S()}function E(){w();for(let U in i){let F=i[U];for(let z in F){let L=F[z];for(let V in L){let q=L[V];for(let Y in q)u(q[Y].object),delete q[Y];delete L[V]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let z in F){let L=F[z];for(let V in L){let q=L[V];for(let Y in q)u(q[Y].object),delete q[Y];delete L[V]}}delete i[U.id]}function C(U){for(let F in i){let z=i[F];for(let L in z){let V=z[L];if(V[U.id]===void 0)continue;let q=V[U.id];for(let Y in q)u(q[Y].object),delete q[Y];delete V[U.id]}}}function x(U){for(let F in i){let z=i[F],L=U.isInstancedMesh===!0?U.id:0,V=z[L];if(V!==void 0){for(let q in V){let Y=V[q];for(let it in Y)u(Y[it].object),delete Y[it];delete V[q]}delete z[L],Object.keys(z).length===0&&delete i[F]}}}function w(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Pp(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Lp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ni&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==qe&&C!==ii&&!x&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Rt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:v,maxSamples:E,samples:b}}function Dp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new li,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{let S=r?0:i,R=S*4,v=f.clippingState||null;c.value=v,v=u(_,h,R,p);for(let E=0;E!==R;++E)v[E]=e[E];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=c.value,_!==!0||m===null){let f=p+M*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,v=p;R!==M;++R,v+=4)o.copy(d[R]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var $n=4,Np=6,Up=20,Fp=256,Ws=new Gn,lh=new It,fl=null,pl=0,ml=0,gl=!1,Bp=new A,gn=new A,Xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Bp}=r;fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,t.scissorTest=!1,Jn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===pn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:di,format:ni,colorSpace:cs,depthBuffer:!1},s=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Op(r)),this._blurMaterial=zp(r,t,e),this._ggxMaterial=Hp(r,t,e)}return s}_compileMaterial(t){let e=new st(new be,t);this._renderer.compile(e,Ws)}_sceneToCubeUV(t,e,i,s,r){let c=new Re(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(lh),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new jt,new Zt({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(lh),f=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):v===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));let E=this._cubeSize;Jn(s,v*E,R>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(M,c),d.render(t,c)}d.toneMapping=p,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ji||t.mapping===pn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Jn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ws)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-$n?i-_+$n:0),f=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=_-e,Jn(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(a,Ws),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,Jn(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(a,Ws)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-$n?s-this._lodMax+$n:0),h=4*(this._cubeSize-u);Jn(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Ws)}};function Op(n){let t=[],e=[],i=n,s=n-$n+1+Np;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,_=new Float32Array(p*h*d),M=new Float32Array(p*h*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,R=f>2?0:-1,v=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];_.set(v,p*h*f);for(let E=0;E<h;E++){let b=u[E*2]*2-1,C=u[E*2+1]*2-1;f===0?gn.set(1,C,b):f===1?gn.set(-b,1,-C):f===2?gn.set(-b,C,1):f===3?gn.set(-1,C,-b):f===4?gn.set(-b,-1,C):gn.set(b,C,-1),gn.toArray(M,(f*h+E)*p)}}let m=new be;m.setAttribute("position",new Fe(_,p)),m.setAttribute("outputDirection",new Fe(M,p)),e.push(new st(m,null)),i>$n&&i--}return{lodMeshes:e,sizeLods:t}}function ch(n,t,e){let i=new We(n,t,e);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jn(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hp(n,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zp(n,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Up,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hh(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function uh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qo=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ss(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jt(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:mn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:bi});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Ie),new Kr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Vp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===to||p===eo)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new qo(_.height);return M.fromEquirectangularTexture(n,h),t.set(h,M),h.addEventListener("dispose",l),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,_=p===to||p===eo,M=p===Ji||p===pn;if(_||M){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Xo(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return _&&S&&S.height>0||M&&S&&c(S)?(i===null&&(i=new Xo(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===to?h.mapping=Ji:p===eo&&(h.mapping=pn),h}function c(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function l(h){let p=h.target;p.removeEventListener("dispose",l);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function kp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&an("WebGLRenderer: "+i+" extension not supported."),s}}}function Gp(n,t,e,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(d){let h=[],p=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(p!==null){let S=p.array;M=p.version;for(let R=0,v=S.length;R<v;R+=3){let E=S[R+0],b=S[R+1],C=S[R+2];h.push(E,b,b,C,C,E)}}else{let S=_.array;M=_.version;for(let R=0,v=S.length/3-1;R<v;R+=3){let E=R+0,b=R+1,C=R+2;h.push(E,b,b,C,C,E)}}let m=new(_.count>=65535?_s:gs)(h,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Wp(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function l(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qp(n,t,e){let i=new WeakMap,s=new pe;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],R=0;p===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let v=a.attributes.position.count*R,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*d),C=new ds(b,v,E,d);C.type=ii,C.needsUpdate=!0;let x=R*4;for(let I=0;I<d;I++){let U=m[I],F=f[I],z=S[I],L=v*E*4*I;for(let V=0;V<U.count;V++){let q=V*x;p===!0&&(s.fromBufferAttribute(U,V),b[L+q+0]=s.x,b[L+q+1]=s.y,b[L+q+2]=s.z,b[L+q+3]=0),_===!0&&(s.fromBufferAttribute(F,V),b[L+q+4]=s.x,b[L+q+5]=s.y,b[L+q+6]=s.z,b[L+q+7]=0),M===!0&&(s.fromBufferAttribute(z,V),b[L+q+8]=s.x,b[L+q+9]=s.y,b[L+q+10]=s.z,b[L+q+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Ut(v,E)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Yp(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Zp={[Ya]:"LINEAR_TONE_MAPPING",[Za]:"REINHARD_TONE_MAPPING",[Ja]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[Ka]:"AGX_TONE_MAPPING",[ja]:"NEUTRAL_TONE_MAPPING",[$a]:"CUSTOM_TONE_MAPPING"};function Jp(n,t,e,i,s,r){let o=new We(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new be;l.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let u=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new st(l,u),h=new Gn(-1,1,1,-1,0,1),p=null,_=null,M=!1,m,f=null,S=[],R=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),c!==null&&c.setSize(v,E);for(let b=0;b<S.length;b++){let C=S[b];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){S=v,R=S.length>0&&S[0].isRenderPass===!0;let E=o.width,b=o.height;S.length>0&&a===null&&(a=new We(E,b,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new We(E,b,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(E,b)}},this.begin=function(v,E){if(M||v.toneMapping===hi&&S.length===0)return!1;if(f=E,E!==null){let b=E.width,C=E.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return R===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=hi,!0},this.hasRenderPass=function(){return R},this.end=function(v,E){v.toneMapping=m,M=!0;let b=o,C=a;for(let x=0;x<S.length;x++){let w=S[x];w.enabled!==!1&&(w.render(v,C,b,E),w.needsSwap!==!1&&(b=C,C=C===a?c:a))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,u.defines={},Gt.getTransfer(p)===ee&&(u.defines.SRGB_TRANSFER="");let x=Zp[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(f),v.render(d,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ph=new Ve,yl=new Wi(1,1),Lh=new ds,Dh=new Lr,Nh=new Ss,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function jn(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jo(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function jp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function Qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function tm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),we(e,i)}}function em(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),we(e,i)}}function im(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),we(e,i)}}function nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function am(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yl.compareFunction=e.isReversedDepthBuffer()?ko:Vo,r=yl):r=Ph,e.setTexture2D(t||r,s)}function dm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dh,s)}function fm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nh,s)}function pm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Lh,s)}function mm(n){switch(n){case 5126:return $p;case 35664:return Kp;case 35665:return jp;case 35666:return Qp;case 35674:return tm;case 35675:return em;case 35676:return im;case 5124:case 35670:return nm;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(n,t){n.uniform1fv(this.addr,t)}function _m(n,t){let e=jn(t,this.size,2);n.uniform2fv(this.addr,e)}function xm(n,t){let e=jn(t,this.size,3);n.uniform3fv(this.addr,e)}function ym(n,t){let e=jn(t,this.size,4);n.uniform4fv(this.addr,e)}function vm(n,t){let e=jn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Mm(n,t){let e=jn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sm(n,t){let e=jn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bm(n,t){n.uniform1iv(this.addr,t)}function Em(n,t){n.uniform2iv(this.addr,t)}function wm(n,t){n.uniform3iv(this.addr,t)}function Tm(n,t){n.uniform4iv(this.addr,t)}function Am(n,t){n.uniform1uiv(this.addr,t)}function Rm(n,t){n.uniform2uiv(this.addr,t)}function Cm(n,t){n.uniform3uiv(this.addr,t)}function Im(n,t){n.uniform4uiv(this.addr,t)}function Pm(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=yl:o=Ph;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Lm(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Dh,r[o])}function Dm(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nh,r[o])}function Nm(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lh,r[o])}function Um(n){switch(n){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return ym;case 35674:return vm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return bm;case 35667:case 35671:return Em;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}var vl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mm(e.type)}},Ml=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_l=/(\w+)(\])?(\[|\.)?/g;function _h(n,t){n.seq.push(t),n.map[t.id]=t}function Fm(n,t,e){let i=n.name,s=i.length;for(_l.lastIndex=0;;){let r=_l.exec(i),o=_l.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_h(e,l===void 0?new vl(a,n,t):new Ml(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Sl(a),_h(e,d)),e=d}}}var Kn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Fm(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function xh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Bm=37297,Om=0;function Hm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var yh=new Lt;function zm(n){Gt._getMatrix(yh,Gt.workingColorSpace,n);let t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(n)){case hs:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hm(n.getShaderSource(t),a)}else return r}function Vm(n,t){let e=zm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var km={[Ya]:"Linear",[Za]:"Reinhard",[Ja]:"Cineon",[Ns]:"ACESFilmic",[Ka]:"AgX",[ja]:"Neutral",[$a]:"Custom"};function Gm(n,t){let e=km[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new A;function Wm(){Gt.getLuminanceCoefficients(Wo);let n=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function qm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ym(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qs(n){return n!==""}function Mh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(Zm,$m)}var Jm=new Map;function $m(n,t){let e=Bt[t];if(e===void 0){let i=Jm.get(t);if(i!==void 0)e=Bt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bl(e)}var Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(n){return n.replace(Km,jm)}function jm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qm={[Ds]:"SHADOWMAP_TYPE_PCF",[Wn]:"SHADOWMAP_TYPE_VSM"};function tg(n){return Qm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eg={[Ji]:"ENVMAP_TYPE_CUBE",[pn]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function ig(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ng={[pn]:"ENVMAP_MODE_REFRACTION"};function sg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rg={[Qr]:"ENVMAP_BLENDING_MULTIPLY",[Vc]:"ENVMAP_BLENDING_MIX",[kc]:"ENVMAP_BLENDING_ADD"};function og(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rg[n.combine]||"ENVMAP_BLENDING_NONE"}function ag(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function lg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=tg(e),l=ig(e),u=sg(e),d=og(e),h=ag(e),p=Xm(e),_=qm(r),M=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==hi?Gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Vm("linearToOutputTexel",e.outputColorSpace),Wm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=bl(o),o=Mh(o,e),o=Sh(o,e),a=bl(a),a=Mh(a,e),a=Sh(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=S+m+o,v=S+f+a,E=xh(s,s.VERTEX_SHADER,R),b=xh(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(U){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(b)||"",V=F.trim(),q=z.trim(),Y=L.trim(),it=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,E,b);else{let j=vh(s,E,"vertex"),tt=vh(s,b,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+j+`
`+tt)}else V!==""?Rt("WebGLProgram: Program Info Log:",V):(q===""||Y==="")&&(W=!1);W&&(U.diagnostics={runnable:it,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(E),s.deleteShader(b),x=new Kn(s,M),w=Ym(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,Bm)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Om++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}var cg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wl(t),e.set(t,i)),i}},wl=class{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}};function hg(n){return n===ji||n===Vs||n===ks}function ug(n,t,e,i,s,r){let o=new fs,a=new El,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,w,I,U,F,z){let L=U.fog,V=F.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||q,Y),W=it&&it.mapping===Us?it.image.height:null,j=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Rt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=tt!==void 0?tt.length:0,bt=0;V.morphAttributes.position!==void 0&&(bt=1),V.morphAttributes.normal!==void 0&&(bt=2),V.morphAttributes.color!==void 0&&(bt=3);let se,Vt,qt,Z;if(j){let ce=wi[j];se=ce.vertexShader,Vt=ce.fragmentShader}else{se=x.vertexShader,Vt=x.fragmentShader;let ce=a.getVertexShaderStage(x),Qt=a.getFragmentShaderStage(x);a.update(x,ce,Qt),qt=ce.id,Z=Qt.id}let Q=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Ot=!!x.map,Se=!!x.matcap,Ht=!!it,$t=!!x.aoMap,le=!!x.lightMap,kt=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,Te=!!x.displacementMap,Ge=!!x.emissiveMap,me=!!x.metalnessMap,xe=!!x.roughnessMap,N=x.anisotropy>0,Le=x.clearcoat>0,ie=x.dispersion>0,T=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,k=x.transmission>0,X=N&&!!x.anisotropyMap,nt=Le&&!!x.clearcoatMap,rt=Le&&!!x.clearcoatNormalMap,J=Le&&!!x.clearcoatRoughnessMap,K=g&&!!x.iridescenceMap,ot=g&&!!x.iridescenceThicknessMap,Et=B&&!!x.sheenColorMap,ht=B&&!!x.sheenRoughnessMap,at=!!x.specularMap,wt=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Nt=k&&!!x.transmissionMap,D=k&&!!x.thicknessMap,lt=!!x.gradientMap,$=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,et=!!x.extensions,At=hi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(At=n.toneMapping);let Mt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Vt,defines:x.defines,customVertexShaderID:qt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Se,envMap:Ht,envMapMode:Ht&&it.mapping,envMapCubeUVHeight:W,aoMap:$t,lightMap:le,bumpMap:kt,normalMap:fe,displacementMap:Te,emissiveMap:Ge,normalMapObjectSpace:fe&&x.normalMapType===Xc,normalMapTangentSpace:fe&&x.normalMapType===Gs,packedNormalMap:fe&&x.normalMapType===Gs&&hg(x.normalMap.format),metalnessMap:me,roughnessMap:xe,anisotropy:N,anisotropyMap:X,clearcoat:Le,clearcoatMap:nt,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:ie,retroreflection:T,iridescence:g,iridescenceMap:K,iridescenceThicknessMap:ot,sheen:B,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:at,specularColorMap:wt,specularIntensityMap:Ct,transmission:k,transmissionMap:Nt,thicknessMap:D,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Xn&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Ot&&_(x.map.channel),aoMapUv:$t&&_(x.aoMap.channel),lightMapUv:le&&_(x.lightMap.channel),bumpMapUv:kt&&_(x.bumpMap.channel),normalMapUv:fe&&_(x.normalMap.channel),displacementMapUv:Te&&_(x.displacementMap.channel),emissiveMapUv:Ge&&_(x.emissiveMap.channel),metalnessMapUv:me&&_(x.metalnessMap.channel),roughnessMapUv:xe&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:nt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(x.sheenRoughnessMap.channel),specularMapUv:at&&_(x.specularMap.channel),specularColorMapUv:wt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ct&&_(x.specularIntensityMap.channel),transmissionMapUv:Nt&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:$&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(fe||N),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Ot||$),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&Gt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ge,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let w=p[x.type],I;if(w){let U=wi[w];I=rh.clone(U.uniforms)}else I=x.uniforms;return I}function v(x,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new lg(n,w,x,s),l.push(I),u.set(w,I)),I}function E(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:C}}function dg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function wh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Th(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,M,m,f){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},n[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=_,S.materialVariant=o(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=f),t++,S}function c(h,p,_,M,m,f,S){S.reversedDepth===!0&&(m=-m);let R=a(h,p,_,M,m,f);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):e.push(R)}function l(h,p,_,M,m,f){let S=a(h,p,_,M,m,f);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,p){e.length>1&&e.sort(h||fg),i.length>1&&i.sort(p||wh),s.length>1&&s.sort(p||wh)}function d(){for(let h=t,p=n.length;h<p;h++){let _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function pg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Th,n.set(i,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new It};break;case"SpotLight":e={position:new A,direction:new A,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function gg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var _g=0;function xg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function yg(n){let t=new mg,e=gg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);let s=new A,r=new ae,o=new ae;function a(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,S=0,R=0,v=0,E=0,b=0,C=0,x=0,w=0,I=0;l.sort(xg);for(let F=0,z=l.length;F<z;F++){let L=l[F],V=L.color,q=L.intensity,Y=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ji?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*q,d+=V.g*q,h+=V.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],q);I++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=tt,i.sunShadowMap[_]=it;let Tt=j.getViewportCount();for(let bt=0;bt<Tt;bt++)i.sunShadowMatrix[M+bt]=j.getMatrix(bt),i.sunShadowCascade[M+bt]=j._cascadeData[bt];M+=Tt,_++}i.sun[p]=W,p++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=W,m++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[S]=W;let j=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,j.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[S]=j.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=it,C++}S++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[R]=W,R++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=L.shadow.matrix,b++}i.point[f]=W,f++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[v]=W,v++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==S||U.rectAreaLength!==R||U.hemiLength!==v||U.numSunShadows!==_||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=R,i.point.length=f,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=S,U.rectAreaLength=R,U.hemiLength=v,U.numSunShadows=_,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=I,i.version=_g++)}function c(l,u){let d=0,h=0,p=0,_=0,M=0,m=0,f=u.matrixWorldInverse;for(let S=0,R=l.length;S<R;S++){let v=l[S];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(v.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:c,state:i}}function Ah(n){let t=new yg(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function vg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ah(n),t.set(s,[a])):r>=o.length?(a=new Ah(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bg=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Eg=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Rh=new ae,Xs=new A,xl=new A;function wg(n,t,e){let i=new zn,s=new Ut,r=new Ut,o=new pe,a=new Hr,c=new zr,l={},u=e.maxTextureSize,d={[Zi]:ke,[ke]:Zi,[ge]:ge},h=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new be;_.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new st(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let f=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Sc&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let w=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=f!==this.type;z&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=b.length;L<V;L++){let q=b[L],Y=q.shadow;if(Y===void 0){Rt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Wn){if(q.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new We(s.x,s.y,{format:ji,type:di,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Wi(s.x,s.y,ii),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=_i,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ce,Y.map.depthTexture.magFilter=Ce}else q.isPointLight?(Y.map=new qo(s.x),Y.map.depthTexture=new Fr(s.x,ui)):(Y.map=new We(s.x,s.y),Y.map.depthTexture=new Wi(s.x,s.y,ui)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=_i,this.type===Ds?(Y.map.depthTexture.compareFunction=W?ko:Vo,Y.map.depthTexture.minFilter=Ie,Y.map.depthTexture.magFilter=Ie):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ce,Y.map.depthTexture.magFilter=Ce);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,x);for(let tt=0;tt<j;tt++){let Tt=Y.getCamera(tt);if(q.isPointLight){let bt=Y.camera,se=Y.matrix,Vt=q.distance||bt.far;Vt!==bt.far&&(bt.far=Vt,bt.updateProjectionMatrix()),Xs.setFromMatrixPosition(q.matrixWorld),bt.position.copy(Xs),xl.copy(bt.position),xl.add(bg[tt]),bt.up.copy(Eg[tt]),bt.lookAt(xl),bt.updateMatrixWorld(),se.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Rh.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Rh,bt.coordinateSystem,bt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(Y.map),n.clear());let bt=Y.getViewport(tt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),F.viewport(o)}i=Y.getFrustum(tt),v(C,x,Tt,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Wn&&S(Y,x),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,I,U)};function S(b,C){let x=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new We(s.x,s.y,{format:ji,type:di}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,x,h,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,x,p,M,null)}function R(b,C,x,w){let I=null,U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)I=U;else if(I=x.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,z=C.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let V=L[z];V===void 0&&(V=I.clone(),L[z]=V,C.addEventListener("dispose",E)),I=V}if(I.visible=C.visible,I.wireframe=C.wireframe,w===Wn?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=x}return I}function v(b,C,x,w,I){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Wn)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let z=t.update(b),L=b.material;if(Array.isArray(L)){let V=z.groups;for(let q=0,Y=V.length;q<Y;q++){let it=V[q],W=L[it.materialIndex];if(W&&W.visible){let j=R(b,W,w,I);b.onBeforeShadow(n,b,C,x,z,j,it),n.renderBufferDirect(x,null,z,j,b,it),b.onAfterShadow(n,b,C,x,z,j,it)}}}else if(L.visible){let V=R(b,L,w,I);b.onBeforeShadow(n,b,C,x,z,V,null),n.renderBufferDirect(x,null,z,V,b,null),b.onAfterShadow(n,b,C,x,z,V,null)}}let F=b.children;for(let z=0,L=F.length;z<L;z++)v(F[z],C,x,w,I)}function E(b){b.target.removeEventListener("dispose",E);for(let x in l){let w=l[x],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function Tg(n,t){function e(){let D=!1,lt=new pe,$=null,ct=new pe(0,0,0,0);return{setMask:function(pt){$!==pt&&!D&&(n.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){D=pt},setClear:function(pt,et,At,Mt,ce){ce===!0&&(pt*=Mt,et*=Mt,At*=Mt),lt.set(pt,et,At,Mt),ct.equals(lt)===!1&&(n.clearColor(pt,et,At,Mt),ct.copy(lt))},reset:function(){D=!1,$=null,ct.set(-1,0,0,0)}}}function i(){let D=!1,lt=!1,$=null,ct=null,pt=null;return{setReversed:function(et){if(lt!==et){let At=t.get("EXT_clip_control");et?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=et;let Mt=pt;pt=null,this.setClear(Mt)}},getReversed:function(){return lt},setTest:function(et){et?Q(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(et){$!==et&&!D&&(n.depthMask(et),$=et)},setFunc:function(et){if(lt&&(et=nh[et]),ct!==et){switch(et){case vr:n.depthFunc(n.NEVER);break;case Mr:n.depthFunc(n.ALWAYS);break;case Sr:n.depthFunc(n.LESS);break;case Un:n.depthFunc(n.LEQUAL);break;case br:n.depthFunc(n.EQUAL);break;case Er:n.depthFunc(n.GEQUAL);break;case wr:n.depthFunc(n.GREATER);break;case Tr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=et}},setLocked:function(et){D=et},setClear:function(et){pt!==et&&(pt=et,lt&&(et=1-et),n.clearDepth(et))},reset:function(){D=!1,$=null,ct=null,pt=null,lt=!1}}}function s(){let D=!1,lt=null,$=null,ct=null,pt=null,et=null,At=null,Mt=null,ce=null;return{setTest:function(Qt){D||(Qt?Q(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!D&&(n.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,si,fi){($!==Qt||ct!==si||pt!==fi)&&(n.stencilFunc(Qt,si,fi),$=Qt,ct=si,pt=fi)},setOp:function(Qt,si,fi){(et!==Qt||At!==si||Mt!==fi)&&(n.stencilOp(Qt,si,fi),et=Qt,At=si,Mt=fi)},setLocked:function(Qt){D=Qt},setClear:function(Qt){ce!==Qt&&(n.clearStencil(Qt),ce=Qt)},reset:function(){D=!1,lt=null,$=null,ct=null,pt=null,et=null,At=null,Mt=null,ce=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,R=null,v=null,E=null,b=null,C=null,x=new It(0,0,0),w=0,I=!1,U=null,F=null,z=null,L=null,V=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=it>=2);let j=null,tt={},Tt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),se=new pe().fromArray(Tt),Vt=new pe().fromArray(bt);function qt(D,lt,$,ct){let pt=new Uint8Array(4),et=n.createTexture();n.bindTexture(D,et),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<$;At++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return et}let Z={};Z[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Un),kt(!1),fe(Va),Q(n.CULL_FACE),$t(bi);function Q(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function xt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Dt(D,lt){return h[D]!==lt?(n.bindFramebuffer(D,lt),h[D]=lt,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(D,lt){let $=_,ct=!1;if(D){$=p.get(lt),$===void 0&&($=[],p.set(lt,$));let pt=D.textures;if($.length!==pt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let et=0,At=pt.length;et<At;et++)$[et]=n.COLOR_ATTACHMENT0+et;$.length=pt.length,ct=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ct=!0);ct&&n.drawBuffers($)}function Ot(D){return M!==D?(n.useProgram(D),M=D,!0):!1}let Se={[fn]:n.FUNC_ADD,[Ec]:n.FUNC_SUBTRACT,[wc]:n.FUNC_REVERSE_SUBTRACT};Se[Tc]=n.MIN,Se[Ac]=n.MAX;let Ht={[Rc]:n.ZERO,[Cc]:n.ONE,[Ic]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Fc]:n.SRC_ALPHA_SATURATE,[Nc]:n.DST_COLOR,[Lc]:n.DST_ALPHA,[Pc]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[Uc]:n.ONE_MINUS_DST_COLOR,[Dc]:n.ONE_MINUS_DST_ALPHA,[Bc]:n.CONSTANT_COLOR,[Oc]:n.ONE_MINUS_CONSTANT_COLOR,[Hc]:n.CONSTANT_ALPHA,[zc]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(D,lt,$,ct,pt,et,At,Mt,ce,Qt){if(D===bi){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),D!==bc){if(D!==f||Qt!==I){if((S!==fn||E!==fn)&&(n.blendEquation(n.FUNC_ADD),S=fn,E=fn),Qt)switch(D){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",D);break}else switch(D){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ga:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wa:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",D);break}R=null,v=null,b=null,C=null,x.set(0,0,0),w=0,f=D,I=Qt}return}pt=pt||lt,et=et||$,At=At||ct,(lt!==S||pt!==E)&&(n.blendEquationSeparate(Se[lt],Se[pt]),S=lt,E=pt),($!==R||ct!==v||et!==b||At!==C)&&(n.blendFuncSeparate(Ht[$],Ht[ct],Ht[et],Ht[At]),R=$,v=ct,b=et,C=At),(Mt.equals(x)===!1||ce!==w)&&(n.blendColor(Mt.r,Mt.g,Mt.b,ce),x.copy(Mt),w=ce),f=D,I=!1}function le(D,lt){D.side===ge?xt(n.CULL_FACE):Q(n.CULL_FACE);let $=D.side===ke;lt&&($=!$),kt($),D.blending===Xn&&D.transparent===!1?$t(bi):$t(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ct=D.stencilWrite;a.setTest(ct),ct&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function fe(D){D!==vc?(Q(n.CULL_FACE),D!==F&&(D===Va?n.cullFace(n.BACK):D===Mc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),F=D}function Te(D){D!==z&&(Y&&n.lineWidth(D),z=D)}function Ge(D,lt,$){D?(Q(n.POLYGON_OFFSET_FILL),(L!==lt||V!==$)&&(L=lt,V=$,o.getReversed()&&(lt=-lt),n.polygonOffset(lt,$))):xt(n.POLYGON_OFFSET_FILL)}function me(D){D?Q(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function xe(D){D===void 0&&(D=n.TEXTURE0+q-1),j!==D&&(n.activeTexture(D),j=D)}function N(D,lt,$){$===void 0&&(j===null?$=n.TEXTURE0+q-1:$=j);let ct=tt[$];ct===void 0&&(ct={type:void 0,texture:void 0},tt[$]=ct),(ct.type!==D||ct.texture!==lt)&&(j!==$&&(n.activeTexture($),j=$),n.bindTexture(D,lt||Z[D]),ct.type=D,ct.texture=lt)}function Le(){let D=tt[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{n.compressedTexImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function g(){try{n.texSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function B(){try{n.texSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function nt(){try{n.texStorage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function rt(){try{n.texStorage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function J(){try{n.texImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function K(){try{n.texImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Et(D,lt){d[D]!==lt&&(n.pixelStorei(D,lt),d[D]=lt)}function ht(D){se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function at(D){Vt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Vt.copy(D))}function wt(D,lt){let $=l.get(lt);$===void 0&&($=new WeakMap,l.set(lt,$));let ct=$.get(D);ct===void 0&&(ct=n.getUniformBlockIndex(lt,D.name),$.set(D,ct))}function Ct(D,lt){let ct=l.get(lt).get(D);c.get(lt)!==ct&&(n.uniformBlockBinding(lt,ct,D.__bindingPointIndex),c.set(lt,ct))}function Nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,tt={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,R=null,v=null,E=null,b=null,C=null,x=new It(0,0,0),w=0,I=!1,U=null,F=null,z=null,L=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),Vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:xt,bindFramebuffer:Dt,drawBuffers:gt,useProgram:Ot,setBlending:$t,setMaterial:le,setFlipSided:kt,setCullFace:fe,setLineWidth:Te,setPolygonOffset:Ge,setScissorTest:me,activeTexture:xe,bindTexture:N,unbindTexture:Le,compressedTexImage2D:ie,compressedTexImage3D:T,texImage2D:J,texImage3D:K,pixelStorei:Et,getParameter:ot,updateUBOMapping:wt,uniformBlockBinding:Ct,texStorage2D:nt,texStorage3D:rt,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:X,scissor:ht,viewport:at,reset:Nt}}function Ag(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap,d=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):us("canvas")}function m(T,g,B){let k=1,X=ie(T);if((X.width>B||X.height>B)&&(k=B/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let nt=Math.floor(k*X.width),rt=Math.floor(k*X.height);h===void 0&&(h=M(nt,rt));let J=g?M(nt,rt):h;return J.width=nt,J.height=rt,J.getContext("2d").drawImage(T,0,0,nt,rt),Rt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+nt+"x"+rt+")."),J}else return"data"in T&&Rt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function f(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,g,B,k,X,nt=!1){if(T!==null){if(n[T]!==void 0)return n[T];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),B===n.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),g===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),B===n.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),B===n.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),g===n.RGBA){let K=nt?hs:Gt.getTransfer(X);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=K===ee?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),B===n.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(T,g){let B;return T?g===null||g===ui||g===Yn?B=n.DEPTH24_STENCIL8:g===ii?B=n.DEPTH32F_STENCIL8:g===qn&&(B=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ui||g===Yn?B=n.DEPTH_COMPONENT24:g===ii?B=n.DEPTH_COMPONENT32F:g===qn&&(B=n.DEPTH_COMPONENT16),B}function b(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==Ie?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){let g=T.target;g.removeEventListener("dispose",C),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),U(g)}function w(T){let g=i.get(T);if(g.__webglInit===void 0)return;let B=T.source,k=p.get(B);if(k){let X=k[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(T),Object.keys(k).length===0&&p.delete(B)}i.remove(T)}function I(T){let g=i.get(T);n.deleteTexture(g.__webglTexture);let B=T.source,k=p.get(B);delete k[g.__cacheKey],o.memory.textures--}function U(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let X=0;X<g.__webglFramebuffer[k].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[k][X]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=T.textures;for(let k=0,X=B.length;k<X;k++){let nt=i.get(B[k]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(B[k])}i.remove(T)}let F=0;function z(){F=0}function L(){return F}function V(T){F=T}function q(){let T=F;return T>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function Y(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function it(T,g){let B=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let k=T.image;if(k===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function W(T,g){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){xt(B,T,g);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function j(T,g){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){xt(B,T,g);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function tt(T,g){let B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Dt(B,T,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}let Tt={[Ar]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Rr]:n.MIRRORED_REPEAT},bt={[Ce]:n.NEAREST,[Gc]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Ie]:n.LINEAR,[io]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},se={[Yc]:n.NEVER,[jc]:n.ALWAYS,[Zc]:n.LESS,[Vo]:n.LEQUAL,[Jc]:n.EQUAL,[ko]:n.GEQUAL,[$c]:n.GREATER,[Kc]:n.NOTEQUAL};function Vt(T,g){if(g.type===ii&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ie||g.magFilter===io||g.magFilter===Fs||g.magFilter===$i||g.minFilter===Ie||g.minFilter===io||g.minFilter===Fs||g.minFilter===$i)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Tt[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Tt[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Tt[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,bt[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,bt[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,se[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ce||g.minFilter!==Fs&&g.minFilter!==$i||g.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qt(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));let k=g.source,X=p.get(k);X===void 0&&(X={},p.set(k,X));let nt=Y(g);if(nt!==T.__cacheKey){X[nt]===void 0&&(X[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),X[nt].usedTimes++;let rt=X[T.__cacheKey];rt!==void 0&&(X[T.__cacheKey].usedTimes--,rt.usedTimes===0&&I(g)),T.__cacheKey=nt,T.__webglTexture=X[nt].texture}return B}function Z(T,g,B){return Math.floor(Math.floor(T/B)/g)}function Q(T,g,B,k){let nt=T.updateRanges;if(nt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,k,g.data);else{nt.sort((Et,ht)=>Et.start-ht.start);let rt=0;for(let Et=1;Et<nt.length;Et++){let ht=nt[rt],at=nt[Et],wt=ht.start+ht.count,Ct=Z(at.start,g.width,4),Nt=Z(ht.start,g.width,4);at.start<=wt+1&&Ct===Nt&&Z(at.start+at.count-1,g.width,4)===Ct?ht.count=Math.max(ht.count,at.start+at.count-ht.start):(++rt,nt[rt]=at)}nt.length=rt+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Et=0,ht=nt.length;Et<ht;Et++){let at=nt[Et],wt=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Nt=wt%g.width,D=Math.floor(wt/g.width),lt=Ct,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Nt,D,lt,$,B,k,g.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function xt(T,g,B){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);let X=qt(T,g),nt=g.source;e.bindTexture(k,T.__webglTexture,n.TEXTURE0+B);let rt=i.get(nt);if(nt.version!==rt.__version||X===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let $=Gt.getPrimaries(Gt.workingColorSpace),ct=g.colorSpace===Ni?null:Gt.getPrimaries(g.colorSpace),pt=g.colorSpace===Ni||$===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=Le(g,K);let ot=r.convert(g.format,g.colorSpace),Et=r.convert(g.type),ht=v(g.internalFormat,ot,Et,g.normalized,g.colorSpace,g.isVideoTexture);Vt(k,g);let at,wt=g.mipmaps,Ct=g.isVideoTexture!==!0,Nt=rt.__version===void 0||X===!0,D=nt.dataReady,lt=b(g,K);if(g.isDepthTexture)ht=E(g.format===Ki,g.type),Nt&&(Ct?e.texStorage2D(n.TEXTURE_2D,1,ht,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,ht,K.width,K.height,0,ot,Et,null));else if(g.isDataTexture)if(wt.length>0){Ct&&Nt&&e.texStorage2D(n.TEXTURE_2D,lt,ht,wt[0].width,wt[0].height);for(let $=0,ct=wt.length;$<ct;$++)at=wt[$],Ct?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,ot,Et,at.data):e.texImage2D(n.TEXTURE_2D,$,ht,at.width,at.height,0,ot,Et,at.data);g.generateMipmaps=!1}else Ct?(Nt&&e.texStorage2D(n.TEXTURE_2D,lt,ht,K.width,K.height),D&&Q(g,K,ot,Et)):e.texImage2D(n.TEXTURE_2D,0,ht,K.width,K.height,0,ot,Et,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ct&&Nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ht,wt[0].width,wt[0].height,K.depth);for(let $=0,ct=wt.length;$<ct;$++)if(at=wt[$],g.format!==ni)if(ot!==null)if(Ct){if(D)if(g.layerUpdates.size>0){let pt=dl(at.width,at.height,g.format,g.type);for(let et of g.layerUpdates){let At=at.data.subarray(et*pt/at.data.BYTES_PER_ELEMENT,(et+1)*pt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,et,at.width,at.height,1,ot,At)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,ot,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ht,at.width,at.height,K.depth,0,at.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,ot,Et,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,ht,at.width,at.height,K.depth,0,ot,Et,at.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ct&&Nt&&e.texStorage2D(n.TEXTURE_2D,lt,ht,wt[0].width,wt[0].height);for(let $=0,ct=wt.length;$<ct;$++)at=wt[$],g.format!==ni?ot!==null?Ct?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,ot,at.data):e.compressedTexImage2D(n.TEXTURE_2D,$,ht,at.width,at.height,0,at.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,ot,Et,at.data):e.texImage2D(n.TEXTURE_2D,$,ht,at.width,at.height,0,ot,Et,at.data)}else if(g.isDataArrayTexture)if(Ct){if(Nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ht,K.width,K.height,K.depth),D)if(g.layerUpdates.size>0){let $=dl(K.width,K.height,g.format,g.type);for(let ct of g.layerUpdates){let pt=K.data.subarray(ct*$/K.data.BYTES_PER_ELEMENT,(ct+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,K.width,K.height,1,ot,Et,pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,Et,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ht,K.width,K.height,K.depth,0,ot,Et,K.data);else if(g.isData3DTexture)Ct?(Nt&&e.texStorage3D(n.TEXTURE_3D,lt,ht,K.width,K.height,K.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,Et,K.data)):e.texImage3D(n.TEXTURE_3D,0,ht,K.width,K.height,K.depth,0,ot,Et,K.data);else if(g.isFramebufferTexture){if(Nt)if(Ct)e.texStorage2D(n.TEXTURE_2D,lt,ht,K.width,K.height);else{let $=K.width,ct=K.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,ht,$,ct,0,ot,Et,null),$>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(g),$.onpaint=ct=>{let pt=ct.changedElements;for(let et of d)pt.includes(et.image)&&(et.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let pt=n.RGBA,et=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pt,et,At,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Ct&&Nt){let $=ie(wt[0]);e.texStorage2D(n.TEXTURE_2D,lt,ht,$.width,$.height)}for(let $=0,ct=wt.length;$<ct;$++)at=wt[$],Ct?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,ot,Et,at):e.texImage2D(n.TEXTURE_2D,$,ht,ot,Et,at);g.generateMipmaps=!1}else if(Ct){if(Nt){let $=ie(K);e.texStorage2D(n.TEXTURE_2D,lt,ht,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Et,K)}else e.texImage2D(n.TEXTURE_2D,0,ht,ot,Et,K);f(g)&&S(k),rt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Dt(T,g,B){if(g.image.length!==6)return;let k=qt(T,g),X=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let nt=i.get(X);if(X.version!==nt.__version||k===!0){e.activeTexture(n.TEXTURE0+B);let rt=Gt.getPrimaries(Gt.workingColorSpace),J=g.colorSpace===Ni?null:Gt.getPrimaries(g.colorSpace),K=g.colorSpace===Ni||rt===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ot=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let et=0;et<6;et++)!ot&&!Et?ht[et]=m(g.image[et],!0,s.maxCubemapSize):ht[et]=Et?g.image[et].image:g.image[et],ht[et]=Le(g,ht[et]);let at=ht[0],wt=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),Nt=v(g.internalFormat,wt,Ct,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,lt=nt.__version===void 0||k===!0,$=X.dataReady,ct=b(g,at);Vt(n.TEXTURE_CUBE_MAP,g);let pt;if(ot){D&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Nt,at.width,at.height);for(let et=0;et<6;et++){pt=ht[et].mipmaps;for(let At=0;At<pt.length;At++){let Mt=pt[At];g.format!==ni?wt!==null?D?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Mt.width,Mt.height,wt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Nt,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Mt.width,Mt.height,wt,Ct,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Nt,Mt.width,Mt.height,0,wt,Ct,Mt.data)}}}else{if(pt=g.mipmaps,D&&lt){pt.length>0&&ct++;let et=ie(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Nt,et.width,et.height)}for(let et=0;et<6;et++)if(Et){D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ht[et].width,ht[et].height,wt,Ct,ht[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,ht[et].width,ht[et].height,0,wt,Ct,ht[et].data);for(let At=0;At<pt.length;At++){let ce=pt[At].image[et].image;D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,ce.width,ce.height,wt,Ct,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Nt,ce.width,ce.height,0,wt,Ct,ce.data)}}else{D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt,Ct,ht[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,wt,Ct,ht[et]);for(let At=0;At<pt.length;At++){let Mt=pt[At];D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,wt,Ct,Mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Nt,wt,Ct,Mt.image[et])}}}f(g)&&S(n.TEXTURE_CUBE_MAP),nt.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function gt(T,g,B,k,X,nt){let rt=r.convert(B.format,B.colorSpace),J=r.convert(B.type),K=v(B.internalFormat,rt,J,B.normalized,B.colorSpace),ot=i.get(g),Et=i.get(B);if(Et.__renderTarget=g,!ot.__hasExternalTextures){let ht=Math.max(1,g.width>>nt),at=Math.max(1,g.height>>nt);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,nt,K,ht,at,g.depth,0,rt,J,null):e.texImage2D(X,nt,K,ht,at,0,rt,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),xe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,X,Et.__webglTexture,0,me(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,X,Et.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(T,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){let k=g.depthTexture,X=k&&k.isDepthTexture?k.type:null,nt=E(g.stencilBuffer,X),rt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(g),nt,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(g),nt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,nt,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,T)}else{let k=g.textures;for(let X=0;X<k.length;X++){let nt=k[X],rt=r.convert(nt.format,nt.colorSpace),J=r.convert(nt.type),K=v(nt.internalFormat,rt,J,nt.normalized,nt.colorSpace);xe(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(g),K,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(T,g,B){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,g.depthTexture);let ot=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type),ht;g.depthTexture.format===_i?ht=n.DEPTH_COMPONENT24:g.depthTexture.format===Ki&&(ht=n.DEPTH24_STENCIL8);for(let at=0;at<6;at++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ht,g.width,g.height,0,ot,Et,null)}}else it(g.depthTexture,0);let nt=X.__webglTexture,rt=me(g),J=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,K=g.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===_i)xe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,nt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,K,J,nt,0);else if(g.depthTexture.format===Ki)xe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,nt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,K,J,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(T){let g=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Se(g.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?Se(g.__webglFramebuffer[0],T,0):Se(g.__webglFramebuffer,T,0)}else if(B){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),Ot(g.__webglDepthbuffer[k],T,!1);else{let X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,nt)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ot(g.__webglDepthbuffer,T,!1);else{let X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,nt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(T,g,B){let k=i.get(T);g!==void 0&&gt(k.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ht(T)}function le(T){let g=T.texture,B=i.get(T),k=i.get(g);T.addEventListener("dispose",x);let X=T.textures,nt=T.isWebGLCubeRenderTarget===!0,rt=X.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),nt){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let K=0;K<g.mipmaps.length;K++)B.__webglFramebuffer[J][K]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(rt)for(let J=0,K=X.length;J<K;J++){let ot=i.get(X[J]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&xe(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<X.length;J++){let K=X[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let ot=r.convert(K.format,K.colorSpace),Et=r.convert(K.type),ht=v(K.internalFormat,ot,Et,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),at=me(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ht,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)gt(B.__webglFramebuffer[J][K],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else gt(B.__webglFramebuffer[J],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(g)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let J=0,K=X.length;J<K;J++){let ot=X[J],Et=i.get(ot),ht=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Et.__webglTexture),Vt(ht,ot),gt(B.__webglFramebuffer,T,ot,n.COLOR_ATTACHMENT0+J,ht,0),f(ot)&&S(ht)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),Vt(J,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)gt(B.__webglFramebuffer[K],T,g,n.COLOR_ATTACHMENT0,J,K);else gt(B.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,J,0);f(g)&&S(J),e.unbindTexture()}T.depthBuffer&&Ht(T)}function kt(T){let g=T.textures;for(let B=0,k=g.length;B<k;B++){let X=g[B];if(f(X)){let nt=R(T),rt=i.get(X).__webglTexture;e.bindTexture(nt,rt),S(nt),e.unbindTexture()}}}let fe=[],Te=[];function Ge(T){if(T.samples>0){if(xe(T)===!1){let g=T.textures,B=T.width,k=T.height,X=n.COLOR_BUFFER_BIT,nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(T),J=g.length>1;if(J)for(let ot=0;ot<g.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=T.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(g[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Et,0)}n.blitFramebuffer(0,0,B,k,0,0,B,k,X,n.NEAREST),c===!0&&(fe.length=0,Te.length=0,fe.push(n.COLOR_ATTACHMENT0+ot),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(fe.push(nt),Te.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ot=0;ot<g.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(g[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function xe(T){let g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(T){let g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Le(T,g){let B=T.colorSpace,k=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==cs&&B!==Ni&&(Gt.getTransfer(B)===ee?(k!==ni||X!==qe)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",B)),g}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=it,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=$t,this.setupRenderTarget=le,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rg(n,t){function e(i,s=Ni){let r,o=Gt.getTransfer(s);if(i===qe)return n.UNSIGNED_BYTE;if(i===so)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===il)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tl)return n.BYTE;if(i===el)return n.SHORT;if(i===qn)return n.UNSIGNED_SHORT;if(i===no)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===sl)return n.ALPHA;if(i===rl)return n.RGB;if(i===ni)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===oo)return n.RED;if(i===ao)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===lo)return n.RG_INTEGER;if(i===co)return n.RGBA_INTEGER;if(i===Bs||i===Os||i===Hs||i===zs)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ho||i===uo||i===fo||i===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mo||i===go||i===_o||i===xo||i===yo||i===Vs||i===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mo||i===go)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xo)return r.COMPRESSED_R11_EAC;if(i===yo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vs)return r.COMPRESSED_RG11_EAC;if(i===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mo||i===So||i===bo||i===Eo||i===wo||i===To||i===Ao||i===Ro||i===Co||i===Io||i===Po||i===Lo||i===Do||i===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ao)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ro)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Co)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Io)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Fo||i===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Uo)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oo||i===Ho||i===ks||i===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ke({vertexShader:Cg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends xi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new Tl,f={},S=e.getContextAttributes(),R=null,v=null,E=[],b=[],C=new Ut,x=null,w=null,I=new Re;I.viewport=new pe;let U=new Re;U.viewport=new pe;let F=[I,U],z=new jr,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Hn,E[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Hn,E[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Hn,E[Z]=Q),Q.getHandSpace()};function q(Z){let Q=b.indexOf(Z.inputSource);if(Q===-1)return;let xt=E[Q];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,l||o),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<E.length;Z++){let Q=b[Z];Q!==null&&(b[Z]=null,E[Z].disconnect(Q))}L=null,V=null,m.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(R),p=null,h=null,d=null,s=null,v=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?Ki:_i,Dt=S.stencil?Yn:ui);let Ot={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new We(h.textureWidth,h.textureHeight,{format:ni,type:qe,depthTexture:new Wi(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new We(p.framebufferWidth,p.framebufferHeight,{format:ni,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let Q=0;Q<Z.removed.length;Q++){let xt=Z.removed[Q],Dt=b.indexOf(xt);Dt>=0&&(b[Dt]=null,E[Dt].disconnect(xt))}for(let Q=0;Q<Z.added.length;Q++){let xt=Z.added[Q],Dt=b.indexOf(xt);if(Dt===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=b.length){b.push(xt),Dt=Ot;break}else if(b[Ot]===null){b[Ot]=xt,Dt=Ot;break}if(Dt===-1)break}let gt=E[Dt];gt&&gt.connect(xt)}}let W=new A,j=new A;function tt(Z,Q,xt){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);let Dt=W.distanceTo(j),gt=Q.projectionMatrix.elements,Ot=xt.projectionMatrix.elements,Se=gt[14]/(gt[10]-1),Ht=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],le=(gt[9]-1)/gt[5],kt=(gt[8]-1)/gt[0],fe=(Ot[8]+1)/Ot[0],Te=Se*kt,Ge=Se*fe,me=Dt/(-kt+fe),xe=me*-kt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xe),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let N=Se+me,Le=Ht+me,ie=Te-xe,T=Ge+(Dt-xe),g=$t*Ht/Le*N,B=le*Ht/Le*N;Z.projectionMatrix.makePerspective(ie,T,g,B,N,Le),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Tt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,xt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),z.near=U.near=I.near=Q,z.far=U.far=I.far=xt,(L!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,V=z.far),z.layers.mask=Z.layers.mask|6,I.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;let Dt=Z.parent,gt=z.cameras;Tt(z,Dt);for(let Ot=0;Ot<gt.length;Ot++)Tt(gt[Ot],Dt);gt.length===2?tt(z,I,U):z.projectionMatrix.copy(I.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),bt(Z,z,Dt)};function bt(Z,Q,xt){xt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ln*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return f[Z]};let se=null;function Vt(Z,Q){if(u=Q.getViewerPose(l||o),_=Q,u!==null){let xt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Dt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,Dt=!0);for(let Ht=0;Ht<xt.length;Ht++){let $t=xt[Ht],le=null;if(p!==null)le=p.getViewport($t);else{let fe=d.getViewSubImage(h,$t);le=fe.viewport,Ht===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let kt=F[Ht];kt===void 0&&(kt=new Re,kt.layers.enable(Ht),kt.viewport=new pe,F[Ht]=kt),kt.matrix.fromArray($t.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray($t.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(le.x,le.y,le.width,le.height),Ht===0&&(z.matrix.copy(kt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Dt===!0&&z.cameras.push(kt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Ht=d.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(gt&&gt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Ht=0;Ht<xt.length;Ht++){let $t=xt[Ht].camera;if($t){let le=f[$t];le||(le=new Es,f[$t]=le);let kt=d.getCameraImage($t);le.sourceTexture=kt}}}}for(let xt=0;xt<E.length;xt++){let Dt=b[xt],gt=E[xt];Dt!==null&&gt!==void 0&&gt.update(Dt,Q,l||o)}se&&se(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let qt=new Ch;qt.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}},Pg=new ae,Uh=new Lt;Uh.set(-1,0,0,0,1,0,0,0,1);function Lg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,R,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,R):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),R=S.envMap,v=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let b=E.program;i.uniformBlockBinding(v,b)}function l(v,E){let b=s[v.id];b===void 0&&(m(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",S));let C=E.program;i.updateUBOMapping(v,C);let x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let E=d();v.__bindingPointIndex=E;let b=n.createBuffer(),C=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let E=s[v.id],b=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,w=b.length;x<w;x++){let I=b[x];if(Array.isArray(I))for(let U=0,F=I.length;U<F;U++)p(I[U],x,U,C);else p(I,x,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,E,b,C){if(M(v,E,b,C)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let I=0;for(let U=0;U<w.length;U++){let F=w[U],z=f(F);_(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function _(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function M(v,E,b,C){let x=v.value,w=E+"_"+b;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let I=C[w];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(v){let E=v.uniforms,b=0,C=16;for(let w=0,I=E.length;w<I;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let F=0,z=U.length;F<z;F++){let L=U[F],V=Array.isArray(L.value)?L.value:[L.value];for(let q=0,Y=V.length;q<Y;q++){let it=V[q],W=f(it),j=b%C,tt=j%W.boundary,Tt=j+tt;b+=tt,Tt!==0&&C-Tt<W.storage&&(b+=C-Tt),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=W.storage}}}let x=b%C;return x>0&&(b+=C-x),v.__size=b,v.__cache={},this}function f(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){let E=v.target;E.removeEventListener("dispose",S);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:R}}var Ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Ug(){return Ei===null&&(Ei=new ys(Ng,16,16,ji,di),Ei.name="DFG_LUT",Ei.minFilter=Ie,Ei.magFilter=Ie,Ei.wrapS=gi,Ei.wrapT=gi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Yo=class{constructor(t={}){let{canvas:e=th(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=qe}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=p,m=new Set([co,lo,ao]),f=new Set([qe,ui,qn,Yn,so,ro]),S=new Uint32Array(4),R=new Int32Array(4),v=new A,E=null,b=null,C=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,z=null,L=null,V=null;this._outputColorSpace=Je;let q=0,Y=0,it=null,W=-1,j=null,tt=new pe,Tt=new pe,bt=null,se=new It(0),Vt=0,qt=e.width,Z=e.height,Q=1,xt=null,Dt=null,gt=new pe(0,0,qt,Z),Ot=new pe(0,0,qt,Z),Se=!1,Ht=new zn,$t=!1,le=!1,kt=new ae,fe=new A,Te=new pe,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function xe(){return it===null?Q:1}let N=i;function Le(y,P){return e.getContext(y,P)}let ie,T,g,B,k,X,nt,rt,J,K,ot,Et,ht,at,wt,Ct,Nt,D,lt,$,ct,pt,et;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",si,!1),N===null){let P="webgl2";if(N=Le(P,y),N===null)throw Le(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(y){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",si,!1),Pt("WebGLRenderer: "+y.message),y}function At(){ie=new kp(N),ie.init(),ct=new Rg(N,ie),T=new Lp(N,ie,t,ct),g=new Tg(N,ie),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),z=N.createFramebuffer(),L=N.createFramebuffer(),V=N.createFramebuffer(),B=new Xp(N),k=new dg,X=new Ag(N,ie,g,k,T,ct,B),nt=new Vp(I),rt=new qu(N),pt=new Ip(N,rt),J=new Gp(N,rt,B,pt),K=new Yp(N,J,rt,pt,B),D=new qp(N,T,X),wt=new Dp(k),ot=new ug(I,nt,ie,T,pt,wt),Et=new Lg(I,k),ht=new pg,at=new vg(ie),Nt=new Cp(I,nt,g,K,_,c),Ct=new wg(I,K,T),et=new Dg(N,B,T,g),lt=new Pp(N,ie,B),$=new Wp(N,ie,B),B.programs=ot.programs,I.capabilities=T,I.extensions=ie,I.properties=k,I.renderLists=ht,I.shadowMap=Ct,I.state=g,I.info=B}M!==qe&&(w=new Jp(M,e.width,e.height,a,s,r));let Mt=new Al(I,N);this.xr=Mt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(qt,Z,!1))},this.getSize=function(y){return y.set(qt,Z)},this.setSize=function(y,P,G=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=y,Z=P,e.width=Math.floor(y*Q),e.height=Math.floor(P*Q),G===!0&&(e.style.width=y+"px",e.style.height=P+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(qt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(y,P,G){qt=y,Z=P,Q=G,e.width=Math.floor(y*G),e.height=Math.floor(P*G),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(M===qe){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,P,G,O){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,P,G,O),g.viewport(tt.copy(gt).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(Ot)},this.setScissor=function(y,P,G,O){y.isVector4?Ot.set(y.x,y.y,y.z,y.w):Ot.set(y,P,G,O),g.scissor(Tt.copy(Ot).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(y){g.setScissorTest(Se=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){Dt=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,G=!0){let O=0;if(y){let H=!1;if(it!==null){let ft=it.texture.format;H=m.has(ft)}if(H){let ft=it.texture.type,_t=f.has(ft),dt=Nt.getClearColor(),yt=Nt.getClearAlpha(),St=dt.r,Ft=dt.g,zt=dt.b;_t?(S[0]=St,S[1]=Ft,S[2]=zt,S[3]=yt,N.clearBufferuiv(N.COLOR,0,S)):(R[0]=St,R[1]=Ft,R[2]=zt,R[3]=yt,N.clearBufferiv(N.COLOR,0,R))}else O|=N.COLOR_BUFFER_BIT}P&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",si,!1),Nt.dispose(),ht.dispose(),at.dispose(),k.dispose(),nt.dispose(),K.dispose(),pt.dispose(),et.dispose(),ot.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Bl),Mt.removeEventListener("sessionend",Ol),en.stop()};function ce(y){y.preventDefault(),al("WebGLRenderer: Context Lost."),U=!0}function Qt(){al("WebGLRenderer: Context Restored."),U=!1;let y=B.autoReset,P=Ct.enabled,G=Ct.autoUpdate,O=Ct.needsUpdate,H=Ct.type;At(),B.autoReset=y,Ct.enabled=P,Ct.autoUpdate=G,Ct.needsUpdate=O,Ct.type=H}function si(y){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function fi(y){let P=y.target;P.removeEventListener("dispose",fi),Vh(P)}function Vh(y){kh(y),k.remove(y)}function kh(y){let P=k.get(y).programs;P!==void 0&&(P.forEach(function(G){ot.releaseProgram(G)}),y.isShaderMaterial&&ot.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,G,O,H,ft){P===null&&(P=Ge);let _t=H.isMesh&&H.matrixWorld.determinantAffine()<0,dt=Xh(y,P,G,O,H);g.setMaterial(O,_t);let yt=G.index,St=1;if(O.wireframe===!0){if(yt=J.getWireframeAttribute(G),yt===void 0)return;St=2}let Ft=G.drawRange,zt=G.attributes.position,vt=Ft.start*St,te=(Ft.start+Ft.count)*St;ft!==null&&(vt=Math.max(vt,ft.start*St),te=Math.min(te,(ft.start+ft.count)*St)),yt!==null?(vt=Math.max(vt,0),te=Math.min(te,yt.count)):zt!=null&&(vt=Math.max(vt,0),te=Math.min(te,zt.count));let ye=te-vt;if(ye<0||ye===1/0)return;pt.setup(H,O,dt,G,yt);let ue,oe=lt;if(yt!==null&&(ue=rt.get(yt),oe=$,oe.setIndex(ue)),H.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*xe()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(H.isLine){let De=O.linewidth;De===void 0&&(De=1),g.setLineWidth(De*xe()),H.isLineSegments?oe.setMode(N.LINES):H.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else H.isPoints?oe.setMode(N.POINTS):H.isSprite&&oe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let De=H._multiDrawStarts,mt=H._multiDrawCounts,He=H._multiDrawCount,Yt=yt?rt.get(yt).bytesPerElement:1,Qe=k.get(O).currentProgram.getUniforms();for(let pi=0;pi<He;pi++)Qe.setValue(N,"_gl_DrawID",pi),oe.render(De[pi]/Yt,mt[pi])}else if(H.isInstancedMesh)oe.renderInstances(vt,ye,H.count);else if(G.isInstancedBufferGeometry){let De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,mt=Math.min(G.instanceCount,De);oe.renderInstances(vt,ye,mt)}else oe.render(vt,ye)};function Fl(y,P,G,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),$t===!0&&wt.setState(y,G,!1),y.transparent===!0&&y.side===ge&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,Js(y,P,O),y.side=Zi,y.needsUpdate=!0,Js(y,P,O),y.side=ge):Js(y,P,O)}this.compile=function(y,P,G=null){G===null&&(G=y),F!==null&&F.renderStart(y,P,G),b=at.get(G),b.init(P),x.push(b),G.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),y!==G&&y.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),le=this.localClippingEnabled,$t=wt.init(this.clippingPlanes,le),$t===!0&&wt.setGlobalState(this.clippingPlanes,P),F!==null&&Ct.render(b.state.shadowsArray,G,P);let O=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ft=H.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){let dt=ft[_t];Fl(dt,G,P,H),O.add(dt)}else Fl(ft,G,P,H),O.add(ft)}),b=x.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,P,G=null){let O=this.compile(y,P,G);return new Promise(H=>{function ft(){if(O.forEach(function(_t){let yt=k.get(_t).currentProgram;(yt===void 0||yt.isReady())&&O.delete(_t)}),O.size===0){H(y);return}setTimeout(ft,10)}ie.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let la=null;function Gh(y){la&&la(y)}function Bl(){en.stop()}function Ol(){en.start()}let en=new Ch;en.setAnimationLoop(Gh),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(y){la=y,Mt.setAnimationLoop(y),y===null?en.stop():en.start()},Mt.addEventListener("sessionstart",Bl),Mt.addEventListener("sessionend",Ol),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(y,P);let G=Mt.enabled===!0&&Mt.isPresenting===!0,O=w!==null&&(it===null||G)&&w.begin(I,it);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(P),P=Mt.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,P,it),b=at.get(y,x.length),b.init(P),b.state.textureUnits=X.getTextureUnits(),x.push(b),kt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ht.setFromProjectionMatrix(kt,ci,P.reversedDepth),le=this.localClippingEnabled,$t=wt.init(this.clippingPlanes,le),E=ht.get(y,C.length),E.init(),C.push(E),Mt.enabled===!0&&Mt.isPresenting===!0){let _t=I.xr.getDepthSensingMesh();_t!==null&&ca(_t,P,-1/0,I.sortObjects)}ca(y,P,0,I.sortObjects),E.finish(),F!==null&&F.updateLights(b.state.lightsArray),I.sortObjects===!0&&E.sort(xt,Dt),me=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,me&&Nt.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&wt.beginShadows();let H=b.state.shadowsArray;if(Ct.render(H,y,P),$t===!0&&wt.endShadows(),(O&&w.hasRenderPass())===!1){let _t=E.opaque,dt=E.transmissive;if(b.setupLights(),P.isArrayCamera){let yt=P.cameras;if(dt.length>0)for(let St=0,Ft=yt.length;St<Ft;St++){let zt=yt[St];zl(_t,dt,y,zt)}me&&Nt.render(y);for(let St=0,Ft=yt.length;St<Ft;St++){let zt=yt[St];Hl(E,y,zt,zt.viewport)}}else dt.length>0&&zl(_t,dt,y,P),me&&Nt.render(y),Hl(E,y,P)}it!==null&&Y===0&&(X.updateMultisampleRenderTarget(it),X.updateRenderTargetMipmap(it)),O&&w.end(I),y.isScene===!0&&y.onAfterRender(I,y,P),pt.resetDefaultState(),W=-1,j=null,x.pop(),x.length>0?(b=x[x.length-1],X.setTextureUnits(b.state.textureUnits),$t===!0&&wt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function ca(y,P,G,O){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ht)){O&&Te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(kt);let _t=K.update(y),dt=y.material;dt.visible&&E.push(y,_t,dt,G,Te.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ht))){let _t=K.update(y),dt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Te.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Te.copy(_t.boundingSphere.center)),Te.applyMatrix4(y.matrixWorld).applyMatrix4(kt)),Array.isArray(dt)){let yt=_t.groups;for(let St=0,Ft=yt.length;St<Ft;St++){let zt=yt[St],vt=dt[zt.materialIndex];vt&&vt.visible&&E.push(y,_t,vt,G,Te.z,zt,P)}}else dt.visible&&E.push(y,_t,dt,G,Te.z,null,P)}}let ft=y.children;for(let _t=0,dt=ft.length;_t<dt;_t++)ca(ft[_t],P,G,O)}function Hl(y,P,G,O){let{opaque:H,transmissive:ft,transparent:_t}=y;b.setupLightsView(G),$t===!0&&wt.setGlobalState(I.clippingPlanes,G),O&&g.viewport(tt.copy(O)),H.length>0&&Zs(H,P,G),ft.length>0&&Zs(ft,P,G),_t.length>0&&Zs(_t,P,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function zl(y,P,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){let vt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new We(1,1,{generateMipmaps:!0,type:vt?di:qe,minFilter:$i,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let ft=b.state.transmissionRenderTarget[O.id],_t=O.viewport||tt;ft.setSize(_t.z*I.transmissionResolutionScale,_t.w*I.transmissionResolutionScale);let dt=I.getRenderTarget(),yt=I.getActiveCubeFace(),St=I.getActiveMipmapLevel();I.setRenderTarget(ft),I.getClearColor(se),Vt=I.getClearAlpha(),Vt<1&&I.setClearColor(16777215,.5),I.clear(),me&&Nt.render(G);let Ft=I.toneMapping;I.toneMapping=hi;let zt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),$t===!0&&wt.setGlobalState(I.clippingPlanes,O),Zs(y,G,O),X.updateMultisampleRenderTarget(ft),X.updateRenderTargetMipmap(ft),ie.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let te=0,ye=P.length;te<ye;te++){let ue=P[te],{object:oe,geometry:De,material:mt,group:He}=ue;if(mt.side===ge&&oe.layers.test(O.layers)){let Yt=mt.side;mt.side=ke,mt.needsUpdate=!0,Vl(oe,G,O,De,mt,He),mt.side=Yt,mt.needsUpdate=!0,vt=!0}}vt===!0&&(X.updateMultisampleRenderTarget(ft),X.updateRenderTargetMipmap(ft))}I.setRenderTarget(dt,yt,St),I.setClearColor(se,Vt),zt!==void 0&&(O.viewport=zt),I.toneMapping=Ft}function Zs(y,P,G){let O=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ft=y.length;H<ft;H++){let _t=y[H],{object:dt,geometry:yt,group:St}=_t,Ft=_t.material;Ft.allowOverride===!0&&O!==null&&(Ft=O),dt.layers.test(G.layers)&&Vl(dt,P,G,yt,Ft,St)}}function Vl(y,P,G,O,H,ft){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(I,P,G,O,H,ft),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(I,P,G,O,y,ft),H.transparent===!0&&H.side===ge&&H.forceSinglePass===!1?(H.side=ke,H.needsUpdate=!0,I.renderBufferDirect(G,P,O,H,y,ft),H.side=Zi,H.needsUpdate=!0,I.renderBufferDirect(G,P,O,H,y,ft),H.side=ge):I.renderBufferDirect(G,P,O,H,y,ft),y.onAfterRender(I,P,G,O,H,ft)}function Js(y,P,G){P.isScene!==!0&&(P=Ge);let O=k.get(y),H=b.state.lights,ft=b.state.shadowsArray,_t=H.state.version,dt=ot.getParameters(y,H.state,ft,P,G,b.state.lightProbeGridArray),yt=ot.getProgramCacheKey(dt),St=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=nt.get(y.envMap||O.environment,Ft),O.envMapRotation=O.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,St===void 0&&(y.addEventListener("dispose",fi),St=new Map,O.programs=St);let zt=St.get(yt);if(zt!==void 0){if(O.currentProgram===zt&&O.lightsStateVersion===_t)return Gl(y,dt),zt}else dt.uniforms=ot.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,G,dt),y.onBeforeCompile(dt,I),zt=ot.acquireProgram(dt,yt),St.set(yt,zt),O.uniforms=dt.uniforms;let vt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(vt.clippingPlanes=wt.uniform),Gl(y,dt),O.needsLights=Yh(y),O.lightsStateVersion=_t,O.needsLights&&(vt.ambientLightColor.value=H.state.ambient,vt.lightProbe.value=H.state.probe,vt.sunLights.value=H.state.sun,vt.sunLightShadows.value=H.state.sunShadow,vt.directionalLights.value=H.state.directional,vt.directionalLightShadows.value=H.state.directionalShadow,vt.spotLights.value=H.state.spot,vt.spotLightShadows.value=H.state.spotShadow,vt.rectAreaLights.value=H.state.rectArea,vt.ltc_1.value=H.state.rectAreaLTC1,vt.ltc_2.value=H.state.rectAreaLTC2,vt.pointLights.value=H.state.point,vt.pointLightShadows.value=H.state.pointShadow,vt.hemisphereLights.value=H.state.hemi,vt.sunShadowMatrix.value=H.state.sunShadowMatrix,vt.sunShadowCascade.value=H.state.sunShadowCascade,vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,vt.spotLightMatrix.value=H.state.spotLightMatrix,vt.spotLightMap.value=H.state.spotLightMap,vt.pointShadowMatrix.value=H.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=zt,O.uniformsList=null,zt}function kl(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Kn.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Gl(y,P){let G=k.get(y);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Wh(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(P.matrixWorld);for(let G=0,O=y.length;G<O;G++){let H=y[G];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Xh(y,P,G,O,H){P.isScene!==!0&&(P=Ge),X.resetTextureUnits();let ft=P.fog,_t=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,dt=it===null?I.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Gt.workingColorSpace,yt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,St=nt.get(O.envMap||_t,yt),Ft=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,ue=hi;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=I.toneMapping);let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,De=oe!==void 0?oe.length:0,mt=k.get(O),He=b.state.lights;if($t===!0&&(le===!0||y!==j)){let he=y===j&&O.id===W;wt.setState(O,y,he)}let Yt=!1;O.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==He.state.version||mt.outputColorSpace!==dt||H.isBatchedMesh&&mt.batching===!1||!H.isBatchedMesh&&mt.batching===!0||H.isBatchedMesh&&mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&mt.instancing===!1||!H.isInstancedMesh&&mt.instancing===!0||H.isSkinnedMesh&&mt.skinning===!1||!H.isSkinnedMesh&&mt.skinning===!0||H.isInstancedMesh&&mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&mt.instancingMorph===!1&&H.morphTexture!==null||mt.envMap!==St||O.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==wt.numPlanes||mt.numIntersection!==wt.numIntersection)||mt.vertexAlphas!==Ft||mt.vertexTangents!==zt||mt.morphTargets!==vt||mt.morphNormals!==te||mt.morphColors!==ye||mt.toneMapping!==ue||mt.morphTargetsCount!==De||!!mt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,mt.__version=O.version);let Qe=mt.currentProgram;Yt===!0&&(Qe=Js(O,P,H),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Qe,mt));let pi=!1,Ui=!1,_n=!1,re=Qe.getUniforms(),_e=mt.uniforms;if(g.useProgram(Qe.program)&&(pi=!0,Ui=!0,_n=!0),O.id!==W&&(W=O.id,Ui=!0),mt.needsLights){let he=Wh(b.state.lightProbeGridArray,H);mt.lightProbeGrid!==he&&(mt.lightProbeGrid=he,Ui=!0)}if(pi||j!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",y.projectionMatrix),re.setValue(N,"viewMatrix",y.matrixWorldInverse);let Bi=re.map.cameraPosition;Bi!==void 0&&Bi.setValue(N,fe.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&re.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Ui=!0,_n=!0)}if(mt.needsLights&&(He.state.sunShadowMap.length>0&&re.setValue(N,"sunShadowMap",He.state.sunShadowMap,X),He.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",He.state.directionalShadowMap,X),He.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",He.state.spotShadowMap,X),He.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",He.state.pointShadowMap,X)),H.isSkinnedMesh){re.setOptional(N,H,"bindMatrix"),re.setOptional(N,H,"bindMatrixInverse");let he=H.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),re.setValue(N,"boneTexture",he.boneTexture,X))}H.isBatchedMesh&&(re.setOptional(N,H,"batchingTexture"),re.setValue(N,"batchingTexture",H._matricesTexture,X),re.setOptional(N,H,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",H._indirectTexture,X),re.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",H._colorsTexture,X));let Fi=G.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&D.update(H,G,Qe),(Ui||mt.receiveShadow!==H.receiveShadow)&&(mt.receiveShadow=H.receiveShadow,re.setValue(N,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(_e.envMapIntensity.value=P.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Ug()),Ui){if(re.setValue(N,"toneMappingExposure",I.toneMappingExposure),mt.needsLights&&qh(_e,_n),ft&&O.fog===!0&&Et.refreshFogUniforms(_e,ft),Et.refreshMaterialUniforms(_e,O,Q,Z,b.state.transmissionRenderTarget[y.id]),mt.needsLights&&mt.lightProbeGrid){let he=mt.lightProbeGrid;_e.probesSH.value=he.texture,_e.probesMin.value.copy(he.boundingBox.min),_e.probesMax.value.copy(he.boundingBox.max),_e.probesResolution.value.copy(he.resolution)}Kn.upload(N,kl(mt),_e,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Kn.upload(N,kl(mt),_e,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&re.setValue(N,"center",H.center),re.setValue(N,"modelViewMatrix",H.modelViewMatrix),re.setValue(N,"normalMatrix",H.normalMatrix),re.setValue(N,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){let he=O.uniformsGroups;for(let Bi=0,xn=he.length;Bi<xn;Bi++){let Xl=he[Bi];et.update(Xl,Qe),et.bind(Xl,Qe)}}return Qe}function qh(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(y,P,G){let O=k.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=P,k.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let G=k.get(y);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,G=0){it=y,q=P,Y=G;let O=null,H=!1,ft=!1;if(y){let dt=k.get(y);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),tt.copy(y.viewport),Tt.copy(y.scissor),bt=y.scissorTest,g.viewport(tt),g.scissor(Tt),g.setScissorTest(bt),W=-1;return}else if(dt.__webglFramebuffer===void 0)X.setupRenderTarget(y);else if(dt.__hasExternalTextures)X.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ft=y.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&k.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(y)}}let yt=y.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ft=!0);let St=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(St[P])?O=St[P][G]:O=St[P],H=!0):y.samples>0&&X.useMultisampledRTT(y)===!1?O=k.get(y).__webglMultisampledFramebuffer:Array.isArray(St)?O=St[G]:O=St,tt.copy(y.viewport),Tt.copy(y.scissor),bt=y.scissorTest}else tt.copy(gt).multiplyScalar(Q).floor(),Tt.copy(Ot).multiplyScalar(Q).floor(),bt=Se;if(G!==0&&(O=z),g.bindFramebuffer(N.FRAMEBUFFER,O)&&g.drawBuffers(y,O),g.viewport(tt),g.scissor(Tt),g.setScissorTest(bt),H){let dt=k.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,dt.__webglTexture,G)}else if(ft){let dt=P;for(let yt=0;yt<y.textures.length;yt++){let St=k.get(y.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,St.__webglTexture,G,dt)}}else if(y!==null&&G!==0){let dt=k.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,G)}W=-1};function Wl(y){let P=k.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=T.textureFormatReadable(y.format),P.__typeReadable=T.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,G,O,H,ft,_t,dt=0){if(!(y&&y.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){g.bindFramebuffer(N.FRAMEBUFFER,yt);try{let St=y.textures[dt],Ft=St.format,zt=St.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let vt=Wl(St);if(vt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-O&&G>=0&&G<=y.height-H&&N.readPixels(P,G,O,H,ct.convert(Ft),ct.convert(zt),ft)}finally{let St=it!==null?k.get(it).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,P,G,O,H,ft,_t,dt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(P>=0&&P<=y.width-O&&G>=0&&G<=y.height-H){g.bindFramebuffer(N.FRAMEBUFFER,yt);let St=y.textures[dt],Ft=St.format,zt=St.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let vt=Wl(St);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(P,G,O,H,ct.convert(Ft),ct.convert(zt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ye=it!==null?k.get(it).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,ye);let ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ih(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(te),N.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,G=0){let O=Math.pow(2,-G),H=Math.floor(y.image.width*O),ft=Math.floor(y.image.height*O),_t=P!==null?P.x:0,dt=P!==null?P.y:0;X.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,_t,dt,H,ft),g.unbindTexture()},this.copyTextureToTexture=function(y,P,G=null,O=null,H=0,ft=0){let _t,dt,yt,St,Ft,zt,vt,te,ye,ue=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(G!==null)_t=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,St=G.min.x,Ft=G.min.y,zt=G.isBox3?G.min.z:0;else{let _e=Math.pow(2,-H);_t=Math.floor(ue.width*_e),dt=Math.floor(ue.height*_e),y.isDataArrayTexture?yt=ue.depth:y.isData3DTexture?yt=Math.floor(ue.depth*_e):yt=1,St=0,Ft=0,zt=0}O!==null?(vt=O.x,te=O.y,ye=O.z):(vt=0,te=0,ye=0);let oe=ct.convert(P.format),De=ct.convert(P.type),mt;P.isData3DTexture?(X.setTexture3D(P,0),mt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(X.setTexture2DArray(P,0),mt=N.TEXTURE_2D_ARRAY):(X.setTexture2D(P,0),mt=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let He=g.getParameter(N.UNPACK_ROW_LENGTH),Yt=g.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=g.getParameter(N.UNPACK_SKIP_PIXELS),pi=g.getParameter(N.UNPACK_SKIP_ROWS),Ui=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,St),g.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);let _n=y.isDataArrayTexture||y.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let _e=k.get(y),Fi=k.get(P),he=k.get(_e.__renderTarget),Bi=k.get(Fi.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,he.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let xn=0;xn<yt;xn++)_n&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(y).__webglTexture,H,zt+xn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(P).__webglTexture,ft,ye+xn)),N.blitFramebuffer(St,Ft,_t,dt,vt,te,_t,dt,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||k.has(y)){let _e=k.get(y),Fi=k.get(P);g.bindFramebuffer(N.READ_FRAMEBUFFER,L),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let he=0;he<yt;he++)_n?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.__webglTexture,H,zt+he):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,H),re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fi.__webglTexture,ft,ye+he):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fi.__webglTexture,ft),H!==0?N.blitFramebuffer(St,Ft,_t,dt,vt,te,_t,dt,N.COLOR_BUFFER_BIT,N.NEAREST):re?N.copyTexSubImage3D(mt,ft,vt,te,ye+he,St,Ft,_t,dt):N.copyTexSubImage2D(mt,ft,vt,te,St,Ft,_t,dt);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(mt,ft,vt,te,ye,_t,dt,yt,oe,De,ue.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(mt,ft,vt,te,ye,_t,dt,yt,oe,ue.data):N.texSubImage3D(mt,ft,vt,te,ye,_t,dt,yt,oe,De,ue):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ft,vt,te,_t,dt,oe,De,ue.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ft,vt,te,ue.width,ue.height,oe,ue.data):N.texSubImage2D(N.TEXTURE_2D,ft,vt,te,_t,dt,oe,De,ue);g.pixelStorei(N.UNPACK_ROW_LENGTH,He),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),g.pixelStorei(N.UNPACK_SKIP_ROWS,pi),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Ui),ft===0&&P.generateMipmaps&&N.generateMipmap(mt),g.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&X.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?X.setTextureCube(y,0):y.isData3DTexture?X.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?X.setTexture2DArray(y,0):X.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){q=0,Y=0,it=null,g.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var Rl=class{constructor(){this.ctx=null,this.isMuted=!1,this.masterVolume=.8,this.sfxVolume=.9,this.musicVolume=.55,this.musicPlaying=!1,this.step=0,this.bpm=126,this.timer=null,this.bassFreqs=[73.42,87.31,98,110,130.81,146.83],this.snareBuffer=null,this.hiHatBuffer=null}init(){if(!this.ctx)try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"}),this.masterNode=this.ctx.createGain(),this.masterNode.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),this.masterNode.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.musicVolume,this.ctx.currentTime),this.filterNode=this.ctx.createBiquadFilter(),this.filterNode.type="lowpass",this.filterNode.frequency.setValueAtTime(2200,this.ctx.currentTime),this.filterNode.Q.setValueAtTime(2.5,this.ctx.currentTime),this.musicGain.connect(this.filterNode),this.filterNode.connect(this.masterNode),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterNode);let e=this.ctx.sampleRate,i=Math.floor(e*.12);this.snareBuffer=this.ctx.createBuffer(1,i,e);let s=this.snareBuffer.getChannelData(0);for(let a=0;a<i;a++)s[a]=(Math.random()*2-1)*Math.exp(-a/(e*.03));let r=Math.floor(e*.035);this.hiHatBuffer=this.ctx.createBuffer(1,r,e);let o=this.hiHatBuffer.getChannelData(0);for(let a=0;a<r;a++)o[a]=(Math.random()*2-1)*.25}catch(t){console.warn("Audio init error",t)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startMusic(){if(this.musicPlaying)return;this.init(),this.resume(),this.musicPlaying=!0,this.step=0;let t=60/this.bpm/4,e=()=>{if(!this.musicPlaying)return;let i=this.ctx.currentTime+.04;this.playMusicStep(this.step,i),this.step=(this.step+1)%32,this.timer=setTimeout(e,t*1e3)};e()}stopMusic(){this.musicPlaying=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)}playMusicStep(t,e){if(this.isMuted||!this.ctx||this.ctx.state!=="running")return;if(t%4===0){let c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(130,e),c.frequency.exponentialRampToValueAtTime(36,e+.1),l.gain.setValueAtTime(.65,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),c.connect(l),l.connect(this.musicGain),c.start(e),c.stop(e+.2)}if(t%8===4&&this.snareBuffer){let c=this.ctx.createBufferSource();c.buffer=this.snareBuffer;let l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1600,e),l.Q.setValueAtTime(1.5,e);let u=this.ctx.createGain();u.gain.setValueAtTime(.35,e),u.gain.exponentialRampToValueAtTime(.001,e+.12),c.connect(l),l.connect(u),u.connect(this.musicGain),c.start(e),c.stop(e+.14)}if(t%2===0&&this.hiHatBuffer){let c=this.ctx.createBufferSource();c.buffer=this.hiHatBuffer;let l=this.ctx.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(7500,e);let u=this.ctx.createGain(),d=t%4===2?.18:.08;u.gain.setValueAtTime(d,e),u.gain.exponentialRampToValueAtTime(.001,e+.035),c.connect(l),l.connect(u),u.connect(this.musicGain),c.start(e),c.stop(e+.04)}let i=[0,0,1,0,2,0,1,3,0,0,1,0,2,0,4,3],s=i[t%i.length],r=this.bassFreqs[s%this.bassFreqs.length],o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(r,e),a.gain.setValueAtTime(.28,e),a.gain.exponentialRampToValueAtTime(.01,e+.1),o.connect(a),a.connect(this.musicGain),o.start(e),o.stop(e+.11)}playDiscThrow(t=!0){if(this.isMuted)return;this.init(),this.resume();let e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t?920:640,e),i.frequency.exponentialRampToValueAtTime(180,e+.18),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+.2),i.connect(s),s.connect(this.sfxGain),i.start(e),i.stop(e+.22)}playWallBounce(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1600,t),e.frequency.exponentialRampToValueAtTime(320,t+.18),i.gain.setValueAtTime(.45,t),i.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.22)}playDeflect(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(1880,t+.16),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.24)}playRecall(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(1200,t+.2),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.24)}playCatch(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(580,t),e.frequency.exponentialRampToValueAtTime(150,t+.1),i.gain.setValueAtTime(.45,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.13)}playHit(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(35,t+.18),i.gain.setValueAtTime(.65,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.24)}playDerez(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(1800,t),e.frequency.exponentialRampToValueAtTime(30,t+.65),i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(.001,t+.7),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.72)}playUiClick(){if(this.isMuted)return;this.init(),this.resume();let t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(900,t),e.frequency.exponentialRampToValueAtTime(1600,t+.04),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.06)}announce(t){if("speechSynthesis"in window)try{window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.pitch=.65,e.rate=1,e.volume=this.masterVolume*.85,window.speechSynthesis.speak(e)}catch{}}},Jt=new Rl;var $o={sam:{id:"sam",name:"Sam Flynn",armorColor:1119773,glowColor:61695,glowHex:"#00f0ff",visorColor:65535,dualDisc:!1,desc:"Hero of the Grid. Agile single-disc precision combatant."},rinzler:{id:"rinzler",name:"Rinzler",armorColor:657932,glowColor:16726016,glowHex:"#ff3800",visorColor:16729344,dualDisc:!0,desc:"Lethal dual-disc enforcer. Relentless strikes & ricochets."},quorra:{id:"quorra",name:"Quorra",armorColor:1712425,glowColor:14221311,glowHex:"#d8ffff",visorColor:16777215,dualDisc:!1,desc:"Miracle ISO fighter. High agility and rapid disc recall."},clu:{id:"clu",name:"CLU 2.0",armorColor:1315342,glowColor:16757504,glowHex:"#ffb300",visorColor:16763904,dualDisc:!1,desc:"Master of the Grid. High-damage kinetic power throws."},anon:{id:"anon",name:"Anon (Infiltrator)",armorColor:857618,glowColor:65399,glowHex:"#00ff77",visorColor:3407769,dualDisc:!1,desc:"System Security program. Rapid bank-shot calculations."}},Ko=class{constructor(t,e="sam",i=!1){this.scene=t,this.isAI=i,this.skinKey=e,this.skin=$o[e]||$o.sam,this.position=new A,this.velocity=new A,this.rotationY=0,this.targetRotationY=0,this.maxHealth=100,this.health=100,this.shieldEnergy=100,this.maxShieldEnergy=100,this.isShielding=!1,this.shieldActiveTime=0,this.isAlive=!0,this.hasDisc=!0,this.discsInFlight=0,this.state="idle",this.animTimer=0,this.throwPhase=0,this.dodgeTimer=0,this.dodgeDir=new A,this.hitTimer=0,this.derezTimer=0,this.derezCubes=[],this.buildMesh()}buildMesh(){this.group=new Xt;let t=new Xe({color:this.skin.armorColor,specular:3359829,shininess:40}),e=new Zt({color:this.skin.glowColor}),i=new Zt({color:this.skin.visorColor});this.hips=new Xt,this.group.add(this.hips);let s=new jt(.5,.35,.3),r=new st(s,t);r.position.y=1.05,this.hips.add(r);let o=new jt(.52,.05,.32),a=new st(o,e);a.position.y=1.05,this.hips.add(a),this.spine=new Xt,this.spine.position.y=1.2,this.hips.add(this.spine);let c=new jt(.65,.6,.38),l=new st(c,t);l.position.y=.3,this.spine.add(l);let u=new jt(.12,.45,.4),d=new st(u,e);d.position.set(0,.3,0),this.spine.add(d);let h=new jt(.5,.04,.4),p=new st(h,e);p.position.set(0,.4,0),this.spine.add(p);let _=new st(h,e);_.position.set(0,.2,0),this.spine.add(_);let M=new Be(.24,.025,12,24);this.discDock=new st(M,e),this.discDock.position.set(0,.35,-.21),this.spine.add(this.discDock),this.head=new Xt,this.head.position.y=.7,this.spine.add(this.head);let m=new jt(.36,.4,.38),f=new st(m,t);f.position.y=.15,this.head.add(f);let S=new jt(.32,.07,.06),R=new st(S,i);R.position.set(0,.16,.18),this.head.add(R),this.leftShoulder=new Xt,this.leftShoulder.position.set(.42,.5,0),this.spine.add(this.leftShoulder);let v=new Pe(.08,.07,.35,8),E=new st(v,t);E.position.y=-.18,this.leftShoulder.add(E),this.leftElbow=new Xt,this.leftElbow.position.y=-.35,this.leftShoulder.add(this.leftElbow);let b=new Pe(.07,.065,.35,8),C=new st(b,t);C.position.y=-.18,this.leftElbow.add(C);let x=new st(new Pe(.075,.075,.06,8),e);x.position.y=-.28,this.leftElbow.add(x),this.leftHand=new Xt,this.leftHand.position.y=-.36,this.leftElbow.add(this.leftHand),this.rightShoulder=new Xt,this.rightShoulder.position.set(-.42,.5,0),this.spine.add(this.rightShoulder);let w=new st(v,t);w.position.y=-.18,this.rightShoulder.add(w),this.rightElbow=new Xt,this.rightElbow.position.y=-.35,this.rightShoulder.add(this.rightElbow);let I=new st(b,t);I.position.y=-.18,this.rightElbow.add(I);let U=new st(new Pe(.075,.075,.06,8),e);U.position.y=-.28,this.rightElbow.add(U),this.rightHand=new Xt,this.rightHand.position.y=-.36,this.rightElbow.add(this.rightHand);let F=new Be(.24,.035,12,24);this.handDisc=new st(F,e),this.handDisc.rotation.x=Math.PI/2,this.rightHand.add(this.handDisc),this.leftHip=new Xt,this.leftHip.position.set(.18,.95,0),this.hips.add(this.leftHip);let z=new Pe(.11,.09,.45,8),L=new st(z,t);L.position.y=-.22,this.leftHip.add(L),this.leftKnee=new Xt,this.leftKnee.position.y=-.45,this.leftHip.add(this.leftKnee);let V=new Pe(.09,.08,.45,8),q=new st(V,t);q.position.y=-.22,this.leftKnee.add(q);let Y=new st(new jt(.16,.12,.28),t);Y.position.set(0,-.46,.05),this.leftKnee.add(Y);let it=new st(new jt(.17,.03,.29),e);it.position.set(0,-.52,.05),this.leftKnee.add(it),this.rightHip=new Xt,this.rightHip.position.set(-.18,.95,0),this.hips.add(this.rightHip);let W=new st(z,t);W.position.y=-.22,this.rightHip.add(W),this.rightKnee=new Xt,this.rightKnee.position.y=-.45,this.rightHip.add(this.rightKnee);let j=new st(V,t);j.position.y=-.22,this.rightKnee.add(j);let tt=new st(new jt(.16,.12,.28),t);tt.position.set(0,-.46,.05),this.rightKnee.add(tt);let Tt=new st(new jt(.17,.03,.29),e);Tt.position.set(0,-.52,.05),this.rightKnee.add(Tt);let bt=new hn(1.3,6),se=new Zt({color:this.skin.glowColor,transparent:!0,opacity:0,side:ge,wireframe:!1});this.shieldMesh=new st(bt,se),this.shieldMesh.position.set(0,1.3,.85);let Vt=new $e(1.22,1.32,6),qt=new Zt({color:16777215,transparent:!0,opacity:0,side:ge});this.shieldWire=new st(Vt,qt),this.shieldWire.position.set(0,1.3,.86),this.group.add(this.shieldMesh),this.group.add(this.shieldWire),this.scene.add(this.group)}setSkin(t){this.skinKey=t,this.skin=$o[t]||$o.sam,this.group&&this.scene.remove(this.group),this.buildMesh()}triggerThrow(){return!this.hasDisc||this.state==="throw"||this.state==="dodge"||!this.isAlive?!1:(this.state="throw",this.animTimer=0,this.throwPhase=0,!0)}triggerDodge(t){return this.state==="dodge"||!this.isAlive?!1:(this.state="dodge",this.animTimer=0,this.dodgeTimer=0,this.dodgeDir.copy(t).normalize(),this.dodgeDir.lengthSq()<.1&&this.dodgeDir.set(0,0,1).applyAxisAngle(new A(0,1,0),this.rotationY),!0)}takeDamage(t){this.isAlive&&(this.health=Math.max(0,this.health-t),this.state="hit",this.hitTimer=.35,this.health<=0&&this.derez())}derez(){this.isAlive=!1,this.state="derez",this.derezTimer=2,this.hips.visible=!1,this.shieldMesh&&(this.shieldMesh.visible=!1),this.shieldWire&&(this.shieldWire.visible=!1);let t=140,e=new jt(.12,.12,.12),i=new Zt({color:this.skin.glowColor,transparent:!0,opacity:1});for(let s=0;s<t;s++){let r=new st(e,i.clone());r.position.copy(this.position),r.position.y+=.3+Math.random()*1.5,r.position.x+=(Math.random()-.5)*.7,r.position.z+=(Math.random()-.5)*.7;let o=new A((Math.random()-.5)*8,Math.random()*6+2,(Math.random()-.5)*8),a=new A((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12);this.scene.add(r),this.derezCubes.push({mesh:r,vel:o,rotSpeed:a})}}reset(t,e,i){this.position.set(t,0,e),this.group.position.copy(this.position),this.rotationY=i,this.targetRotationY=i,this.group.rotation.y=i,this.health=this.maxHealth,this.shieldEnergy=this.maxShieldEnergy,this.isAlive=!0,this.hasDisc=!0,this.isShielding=!1,this.state="idle",this.animTimer=0,this.hips.visible=!0;for(let s of this.derezCubes)this.scene.remove(s.mesh);this.derezCubes=[]}update(t,e,i){if(!this.group)return;if(!this.isAlive&&this.state==="derez"){for(let a of this.derezCubes)a.vel.y-=18*t,a.mesh.position.addScaledVector(a.vel,t),a.mesh.rotation.x+=a.rotSpeed.x*t,a.mesh.rotation.y+=a.rotSpeed.y*t,a.mesh.position.y<.06&&(a.mesh.position.y=.06,a.vel.y*=-.45,a.vel.x*=.85,a.vel.z*=.85),a.mesh.material.opacity=Math.max(0,a.mesh.material.opacity-t*.55);return}this.animTimer+=t,this.isShielding&&this.hasDisc?(this.shieldEnergy=Math.max(0,this.shieldEnergy-t*25),this.shieldEnergy<=0&&(this.isShielding=!1)):this.shieldEnergy=Math.min(this.maxShieldEnergy,this.shieldEnergy+t*18);let s=this.isShielding?.45+Math.sin(this.animTimer*14)*.1:0;if(this.shieldMesh.material.opacity=ne.lerp(this.shieldMesh.material.opacity,s,t*15),this.shieldWire.material.opacity=ne.lerp(this.shieldWire.material.opacity,this.isShielding?.9:0,t*15),this.handDisc.visible=this.hasDisc&&this.state!=="derez",this.discDock.visible=!this.hasDisc&&this.state!=="derez",this.state==="hit"){this.hitTimer-=t,this.spine.rotation.x=-.45,this.head.rotation.x=-.3,this.hitTimer<=0&&(this.state="idle"),this.group.position.copy(this.position);return}if(this.state==="dodge"){this.dodgeTimer+=t;let a=16*(1-this.dodgeTimer/.45);this.position.addScaledVector(this.dodgeDir,a*t),this.hips.position.y=.35+Math.sin(this.dodgeTimer/.45*Math.PI)*.4,this.spine.rotation.x=this.dodgeTimer/.45*Math.PI*2,this.dodgeTimer>=.45&&(this.state="idle",this.hips.position.y=0,this.spine.rotation.x=0),this.group.position.copy(this.position);return}if(i){let a=i.x-this.position.x,c=i.z-this.position.z;this.targetRotationY=Math.atan2(a,c)}else e&&(e.x!==0||e.z!==0)&&(this.targetRotationY=Math.atan2(e.x,e.z));let r=this.targetRotationY-this.rotationY;for(;r<-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;this.rotationY+=r*Math.min(1,t*14),this.group.rotation.y=this.rotationY;let o=e&&(Math.abs(e.x)>.05||Math.abs(e.z)>.05);if(this.state!=="throw"&&this.state!=="victory"&&(this.isShielding?this.state="deflect":o?this.state="run":this.state="idle"),this.state==="run"){this.position.x+=e.x*7.5*t,this.position.z+=e.z*7.5*t;let c=11,l=Math.sin(this.animTimer*c)*.7;this.leftHip.rotation.x=l,this.rightHip.rotation.x=-l,this.leftKnee.rotation.x=Math.max(0,-l*.9),this.rightKnee.rotation.x=Math.max(0,l*.9),!this.isShielding&&this.state!=="throw"&&(this.leftShoulder.rotation.x=-l*.65,this.rightShoulder.rotation.x=l*.65),this.hips.position.y=Math.abs(Math.sin(this.animTimer*c))*.08,this.spine.rotation.x=.15}else if(this.state==="idle"){let a=Math.sin(this.animTimer*2.5)*.03;this.hips.position.y=a,this.spine.rotation.x=a*.5,this.leftHip.rotation.x=ne.lerp(this.leftHip.rotation.x,.1,t*10),this.rightHip.rotation.x=ne.lerp(this.rightHip.rotation.x,-.1,t*10),this.leftKnee.rotation.x=ne.lerp(this.leftKnee.rotation.x,.15,t*10),this.rightKnee.rotation.x=ne.lerp(this.rightKnee.rotation.x,.15,t*10),this.isShielding||(this.leftShoulder.rotation.x=ne.lerp(this.leftShoulder.rotation.x,.35,t*10),this.leftElbow.rotation.x=ne.lerp(this.leftElbow.rotation.x,-.85,t*10),this.rightShoulder.rotation.x=ne.lerp(this.rightShoulder.rotation.x,-.2,t*10),this.rightElbow.rotation.x=ne.lerp(this.rightElbow.rotation.x,-.6,t*10))}if(this.state==="deflect"&&(this.rightShoulder.rotation.x=ne.lerp(this.rightShoulder.rotation.x,1.4,t*20),this.rightShoulder.rotation.z=ne.lerp(this.rightShoulder.rotation.z,-.4,t*20),this.rightElbow.rotation.x=ne.lerp(this.rightElbow.rotation.x,-1.2,t*20),this.leftShoulder.rotation.x=ne.lerp(this.leftShoulder.rotation.x,1.4,t*20),this.leftShoulder.rotation.z=ne.lerp(this.leftShoulder.rotation.z,.4,t*20),this.leftElbow.rotation.x=ne.lerp(this.leftElbow.rotation.x,-1.2,t*20)),this.state==="throw"){let c=this.animTimer/.32;c<.4?(this.rightShoulder.rotation.x=ne.lerp(this.rightShoulder.rotation.x,-1.6,t*30),this.rightShoulder.rotation.y=ne.lerp(this.rightShoulder.rotation.y,.9,t*30),this.spine.rotation.y=ne.lerp(this.spine.rotation.y,.6,t*25)):c<.8?(this.rightShoulder.rotation.x=ne.lerp(this.rightShoulder.rotation.x,1.5,t*40),this.rightShoulder.rotation.y=ne.lerp(this.rightShoulder.rotation.y,-.4,t*40),this.rightElbow.rotation.x=ne.lerp(this.rightElbow.rotation.x,.1,t*40),this.spine.rotation.y=ne.lerp(this.spine.rotation.y,-.5,t*35)):c>=1&&(this.state="idle",this.spine.rotation.y=0)}this.state==="victory"&&(this.rightShoulder.rotation.x=ne.lerp(this.rightShoulder.rotation.x,Math.PI,t*10),this.rightElbow.rotation.x=0,this.head.rotation.x=-.3),this.group.position.copy(this.position)}};var Cl=new A,jo=new A,Il=new A,Pl=new A,Fh=new A,Ll=new A,Fg=new A(0,1,0),Dl=new A,Ys=class{constructor(t,e,i=61695,s=!1){this.scene=t,this.owner=e,this.colorHex=i,this.isSecondary=s,this.position=new A,this.velocity=new A,this.spinRate=45,this.isActive=!1,this.isRecalling=!1,this.bounces=0,this.maxBounces=4,this.curveFactor=0,this.baseSpeed=26,this.currentSpeed=26,this.damage=25,this.radius=.38,this.maxTrailPoints=20,this.trailPoints=[];for(let r=0;r<this.maxTrailPoints;r++)this.trailPoints.push(new A);this.trailCount=0,this.flightTimer=0,this.recallTimer=0,this.buildMesh(),this.buildTrail()}buildMesh(){this.group=new Xt;let t=new Be(.38,.038,12,24),e=new Zt({color:this.colorHex});this.rimMesh=new st(t,e),this.rimMesh.rotation.x=Math.PI/2,this.group.add(this.rimMesh);let i=new Be(.26,.045,8,20),s=new Xe({color:658448,specular:2241348,shininess:30}),r=new st(i,s);r.rotation.x=Math.PI/2,this.group.add(r);let o=new $e(.12,.22,20),a=new Zt({color:16777215,side:ge,transparent:!0,opacity:.85}),c=new st(o,a);c.rotation.x=Math.PI/2,this.group.add(c),this.light=new dn(this.colorHex,1.2,5),this.group.add(this.light),this.group.visible=!1,this.scene.add(this.group)}buildTrail(){let e=new be,i=new Float32Array(60),s=new Float32Array(60),r=new It(this.colorHex);for(let a=0;a<20;a++){i[a*3]=0,i[a*3+1]=0,i[a*3+2]=0;let c=1-a/20;s[a*3]=r.r*c,s[a*3+1]=r.g*c,s[a*3+2]=r.b*c}e.setAttribute("position",new Fe(i,3)),e.setAttribute("color",new Fe(s,3));let o=new cn({vertexColors:!0,linewidth:3,transparent:!0,opacity:.9});this.trailLine=new Vn(e,o),this.trailLine.frustumCulled=!1,this.trailLine.visible=!1,this.scene.add(this.trailLine)}launch(t,e,i=0,s=1){this.position.copy(t),this.position.y=1.25,this.currentSpeed=this.baseSpeed*s,this.velocity.copy(e).normalize().multiplyScalar(this.currentSpeed),this.curveFactor=i,this.bounces=0,this.flightTimer=0,this.recallTimer=0,this.isActive=!0,this.isRecalling=!1,this.owner.hasDisc=!1,this.owner.discsInFlight=1,this.group.visible=!0,this.trailLine.visible=!0;for(let r=0;r<this.maxTrailPoints;r++)this.trailPoints[r].copy(this.position);this.trailCount=1,Jt.playDiscThrow(this.owner.isAI===!1),!this.owner.isAI&&window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(35)}recall(){!this.isActive||this.isRecalling||(this.isRecalling=!0,this.recallTimer=0,Jt.playRecall())}catchByOwner(){this.isActive=!1,this.isRecalling=!1,this.flightTimer=0,this.recallTimer=0,this.group.visible=!1,this.trailLine.visible=!1,this.trailCount=0,this.owner.hasDisc=!0,this.owner.discsInFlight=0,Jt.playCatch(),!this.owner.isAI&&window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(25)}update(t,e,i,s){if(!this.isActive)return;if(this.flightTimer+=t,!this.isRecalling&&this.flightTimer>4.5&&this.recall(),this.rimMesh.rotation.z+=this.spinRate*t,!this.isRecalling&&Math.abs(this.curveFactor)>.05&&(Cl.set(-this.velocity.z,0,this.velocity.x).normalize(),this.velocity.addScaledVector(Cl,this.curveFactor*22*t),this.velocity.normalize().multiplyScalar(this.currentSpeed)),this.isRecalling){if(this.recallTimer+=t,Il.copy(this.owner.position),Il.y=1.3,jo.subVectors(Il,this.position),jo.length()<1.9||this.recallTimer>1.6){this.catchByOwner();return}jo.normalize();let a=Math.max(this.currentSpeed*1.6,36);this.velocity.copy(jo).multiplyScalar(a)}this.position.addScaledVector(this.velocity,t),this.group.position.copy(this.position);for(let o=Math.min(this.trailCount,this.maxTrailPoints-1);o>0;o--)this.trailPoints[o].copy(this.trailPoints[o-1]);this.trailPoints[0].copy(this.position),this.trailCount<this.maxTrailPoints&&this.trailCount++;let r=this.trailLine.geometry.attributes.position;for(let o=0;o<this.trailCount;o++){let a=this.trailPoints[o];r.setXYZ(o,a.x,a.y,a.z)}if(r.needsUpdate=!0,!this.isRecalling&&e&&this.checkArenaCollisions(e),!this.isRecalling&&i)for(let o of i)this.checkObstacleCollision(o);s&&s.isAlive&&this.checkCombatantCollision(s),this.bounces>=this.maxBounces&&!this.isRecalling&&this.recall()}checkArenaCollisions(t){let e=t.shape||"circle",i=t.radius||18;if(e==="circle"){if(Math.sqrt(this.position.x*this.position.x+this.position.z*this.position.z)+this.radius>=i){let r=new A(-this.position.x,0,-this.position.z).normalize();this.bounce(r);let o=r.clone().multiplyScalar(-i+this.radius+.05);this.position.x=o.x,this.position.z=o.z}}else if(e==="hexagon"||e==="octagon"||e==="square"){let s=t.perimeterSegments||[];for(let r of s){let o=this.distToSegment(this.position,r.p1,r.p2);if(o<=this.radius){this.bounce(r.normal),this.position.addScaledVector(r.normal,this.radius-o+.05);break}}}}checkObstacleCollision(t){if(!t.active)return;let e=this.position.x-t.position.x,i=this.position.z-t.position.z,s=Math.sqrt(e*e+i*i),r=t.radius+this.radius;if(s<=r){let o=new A(e,0,i).normalize();this.bounce(o),this.position.x=t.position.x+o.x*(r+.05),this.position.z=t.position.z+o.z*(r+.05),t.onHit&&t.onHit()}}bounce(t){let e=this.velocity.dot(t);e<0&&(this.velocity.addScaledVector(t,-2*e),this.bounces++,Jt.playWallBounce(1),!this.owner.isAI&&window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(20))}checkCombatantCollision(t){if(!t||this.owner===t)return;if(Pl.copy(t.position),Pl.y=1.2,this.position.distanceTo(Pl)<1.1){Fh.subVectors(this.position,t.position).normalize(),Ll.set(0,0,1).applyAxisAngle(Fg,t.rotationY||0);let i=Ll.dot(Fh);if(t.isShielding&&i>.3){Jt.playDeflect(),window.AndroidBridge&&window.AndroidBridge.vibrateClash&&window.AndroidBridge.vibrateClash(),this.currentSpeed*=1.35,Dl.copy(Ll).addScaledVector(Cl.set((Math.random()-.5)*.3,0,0),1).normalize(),this.velocity.copy(Dl).multiplyScalar(this.currentSpeed),this.bounces=0,this.position.addScaledVector(Dl,.5);let s=this.owner;this.owner=t,t.discsInFlight++,s.discsInFlight=Math.max(0,s.discsInFlight-1)}else if(t.state!=="dodge"){Jt.playHit();let s=this.owner&&this.owner.name?this.owner.name:"Grid Disc";t.takeDamage(this.damage,s),window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(80),this.recall()}}}distToSegment(t,e,i){let s=new A().subVectors(t,e),r=new A().subVectors(i,e);s.y=0,r.y=0;let o=Math.max(0,Math.min(1,s.dot(r)/r.lengthSq()));return s.addScaledVector(r,-o).length()}};var Qo={coliseum:{id:"coliseum",name:"Disc Coliseum",shape:"circle",radius:17,themeColor:61695,themeHex:"#00f0ff",pylons:[{x:-5,z:0,radius:.9},{x:5,z:0,radius:.9}],description:"The iconic gaming grid arena from Tron: Legacy with dual rebound pylons."},hexagon:{id:"hexagon",name:"Hexagonal Core",shape:"hexagon",radius:18,themeColor:16726784,themeHex:"#ff3b00",pylons:[{x:0,z:-4,radius:1.1},{x:0,z:4,radius:1.1}],description:"High-voltage perimeter with sharp bank shot angles."},gauntlet:{id:"gauntlet",name:"Rinzler's Gauntlet",shape:"octagon",radius:19,themeColor:16755200,themeHex:"#ffaa00",pylons:[{x:-6,z:-3,radius:.8},{x:6,z:-3,radius:.8},{x:-6,z:3,radius:.8},{x:6,z:3,radius:.8}],description:"Multi-bumper arena designed for extreme ricochets."},outskirts:{id:"outskirts",name:"The Portal Spire",shape:"circle",radius:15,themeColor:65416,themeHex:"#00ff88",pylons:[],description:"Compact high-speed duel arena with pure boundary ricochets."}},ta=class{constructor(t,e="coliseum"){this.scene=t,this.group=new Xt,this.scene.add(this.group),this.presetKey=e,this.preset=Qo[e]||Qo.coliseum,this.shape=this.preset.shape,this.radius=this.preset.radius,this.themeColor=this.preset.themeColor,this.obstacles=[],this.perimeterSegments=[],this.buildArena()}loadPreset(t,e=null){for(;this.group.children.length>0;){let i=this.group.children[0];this.group.remove(i)}this.obstacles=[],this.perimeterSegments=[],e?this.preset=e:this.preset=Qo[t]||Qo.coliseum,this.shape=this.preset.shape||"circle",this.radius=this.preset.radius||17,this.themeColor=this.preset.themeColor||61695,this.buildArena()}buildArena(){let t=new Zt({color:this.themeColor}),e=new Si(80,80),i=new Xe({color:329482,specular:1122867,shininess:40}),s=new st(e,i);s.rotation.x=-Math.PI/2,this.group.add(s);let r=new Ls(60,60,this.themeColor,1121321);if(r.position.y=.015,this.group.add(r),this.shape==="circle"?this.buildCircularPerimeter(t):this.shape==="hexagon"?this.buildPolygonPerimeter(6,t):this.shape==="octagon"?this.buildPolygonPerimeter(8,t):this.buildPolygonPerimeter(4,t),this.buildElevatedCombatPlatforms(t),this.preset.pylons)for(let o of this.preset.pylons)this.addPylon(o.x,o.z,o.radius);this.buildSpectatorColiseum(),this.buildSkyMonoliths()}buildCircularPerimeter(t){let e=new $e(this.radius-.2,this.radius+.2,64),i=new st(e,t);i.rotation.x=-Math.PI/2,i.position.y=.03,this.group.add(i);let s=new Pe(this.radius,this.radius,4,64,1,!0),r=new Zt({color:this.themeColor,transparent:!0,opacity:.22,side:ge}),o=new st(s,r);o.position.y=2,this.group.add(o);let a=new Be(this.radius,.12,12,64),c=new st(a,t);c.rotation.x=Math.PI/2,c.position.y=4,this.group.add(c);let l=16,u=new Pe(.18,.18,4.2,8),d=new Xe({color:658448,specular:2241348,shininess:20}),h=new jt(.06,4.2,.22);for(let p=0;p<l;p++){let _=p/l*Math.PI*2,M=Math.cos(_)*this.radius,m=Math.sin(_)*this.radius,f=new st(u,d);f.position.set(M,2.1,m),this.group.add(f);let S=new st(h,t);S.position.set(M,2.1,m),S.rotation.y=-_,this.group.add(S)}}buildPolygonPerimeter(t,e){this.perimeterSegments=[];let i=[];for(let s=0;s<t;s++){let r=s/t*Math.PI*2;i.push(new A(Math.cos(r)*this.radius,0,Math.sin(r)*this.radius))}for(let s=0;s<t;s++){let r=i[s],o=i[(s+1)%t],a=new A().subVectors(o,r),c=a.length(),l=new A().addVectors(r,o).multiplyScalar(.5),u=Math.atan2(a.x,a.z),d=new A(-a.z,0,a.x).normalize();this.perimeterSegments.push({p1:r,p2:o,normal:d});let h=new Si(c,4),p=new Zt({color:this.themeColor,transparent:!0,opacity:.22,side:ge}),_=new st(h,p);_.position.set(l.x,2,l.z),_.rotation.y=u+Math.PI/2,this.group.add(_);let M=new jt(c,.12,.2),m=new st(M,e);m.position.set(l.x,.06,l.z),m.rotation.y=u+Math.PI/2,this.group.add(m);let f=new st(M,e);f.position.set(l.x,4,l.z),f.rotation.y=u+Math.PI/2,this.group.add(f);let S=new st(new Pe(.24,.24,4.2,8),new Ts({color:592654,metalness:.9}));S.position.set(r.x,2.1,r.z),this.group.add(S)}}buildElevatedCombatPlatforms(t){let e=new $e(3.5,3.8,48),i=new st(e,t);i.rotation.x=-Math.PI/2,i.position.set(0,.04,-8),this.group.add(i);let s=new st(e,t);s.rotation.x=-Math.PI/2,s.position.set(0,.04,8),this.group.add(s);let r=new jt(this.radius*1.8,.02,.15),o=new st(r,t);o.position.set(0,.03,0),this.group.add(o)}addPylon(t,e,i=.9){let s=new Xt;s.position.set(t,0,e);let r=new Pe(i,i*1.15,3.8,14),o=new Xe({color:658706,specular:3359829,shininess:35}),a=new st(r,o);a.position.y=1.9,s.add(a);let c=new Be(i+.03,.05,6,18),l=new Zt({color:this.themeColor}),u=new st(c,l);u.rotation.x=Math.PI/2,u.position.y=1,s.add(u);let d=new st(c,l);d.rotation.x=Math.PI/2,d.position.y=2.8,s.add(d),this.group.add(s),this.obstacles.push({position:new A(t,0,e),radius:i,active:!0,mesh:s,onHit:()=>{l.color.setHex(16777215),setTimeout(()=>l.color.setHex(this.themeColor),100)}})}buildSpectatorColiseum(){let t=new Xt,e=248,i=new jt(.2,.45,.2),s=new Zt({color:16777215}),r=new Ms(i,s,e),o=new Me,a=new It(this.themeColor),c=new It(16777215),l=0;for(let u=0;u<4;u++){let d=this.radius+6+u*5.5,h=d+4.5,p=2.5+u*3.5,_=new $e(d,h,32),M=new Zt({color:395534,side:ge}),m=new st(_,M);m.rotation.x=-Math.PI/2,m.position.y=p,t.add(m);let f=new Be(d,.08,6,32),S=new st(f,new Zt({color:this.themeColor}));S.rotation.x=Math.PI/2,S.position.y=p+.02,t.add(S);let R=35+u*18;for(let v=0;v<R;v++){let E=v/R*Math.PI*2+Math.sin(v*2.3)*.04,b=d+1.2+v*43%100/100*2.5,C=Math.cos(E)*b,x=Math.sin(E)*b;o.position.set(C,p+.25,x),o.updateMatrix(),r.setMatrixAt(l,o.matrix);let w=v%3!==0;r.setColorAt(l,w?a:c),l++}}r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),t.add(r),this.group.add(t)}buildSkyMonoliths(){let i=new jt(9,80,9),s=new Xe({color:197638,specular:1122867,shininess:15}),r=new jt(.4,80,9.1),o=new Zt({color:this.themeColor});for(let u=0;u<8;u++){let d=u/8*Math.PI*2,h=Math.cos(d)*65,p=Math.sin(d)*65,_=new st(i,s);_.position.set(h,40,p),this.group.add(_);let M=new st(r,o);M.position.set(h,40,p),this.group.add(M)}let a=new Be(this.radius*1.3,.35,8,36),c=new Zt({color:this.themeColor}),l=new st(a,c);l.rotation.x=Math.PI/2,l.position.y=16,this.group.add(l)}};var Bh={easy:{id:"easy",name:"Initiate",reactionTime:.55,throwCooldown:2.6,aimAccuracy:.78,deflectChance:.35,dodgeChance:.4,allowBankShots:!1,allowCurve:!1,desc:"Slower reflex sentinels. Ideal for basic grid training."},medium:{id:"medium",name:"Program",reactionTime:.35,throwCooldown:1.9,aimAccuracy:.9,deflectChance:.65,dodgeChance:.65,allowBankShots:!0,allowCurve:!1,desc:"Disciplined combat programs with predictive aiming and wall rebounds."},hard:{id:"hard",name:"ISO Combatant",reactionTime:.2,throwCooldown:1.35,aimAccuracy:.96,deflectChance:.82,dodgeChance:.85,allowBankShots:!0,allowCurve:!0,desc:"Advanced grid warriors using multi-bounce bank shots and rapid recalls."},master:{id:"master",name:"Rinzler (Master)",reactionTime:.08,throwCooldown:.95,aimAccuracy:.99,deflectChance:.95,dodgeChance:.92,allowBankShots:!0,allowCurve:!0,desc:"Relentless champion. Frame-perfect deflections and dual-disc onslaught."}},ea=class{constructor(t,e,i,s,r,o="medium",a=[]){this.ai=t,this.player=e,this.disc=i,this.secondaryDisc=s,this.arena=r,this.hostileDiscs=a,this.setDifficulty(o),this.throwTimer=1,this.moveTimer=0,this.currentMoveDir=new A,this.strafeDir=1}setDifficulty(t){this.diffKey=t,this.diff=Bh[t]||Bh.medium}update(t){if(!this.ai.isAlive||!this.player.isAlive){this.ai.update(t,{x:0,z:0},this.player.position);return}this.throwTimer-=t,this.moveTimer-=t;let e=null,i=999,s=[];Array.isArray(this.hostileDiscs)&&s.push(...this.hostileDiscs),this.player&&this.player.disc&&!s.includes(this.player.disc)&&s.push(this.player.disc),this.disc&&this.disc.isActive&&this.disc.owner!==this.ai&&!s.includes(this.disc)&&s.push(this.disc);for(let h of s)if(h&&h.isActive&&h.owner!==this.ai){let p=new A().subVectors(this.ai.position,h.position),_=p.length();_>.05&&h.velocity.clone().normalize().dot(p.clone().normalize())>.45&&_<16&&_<i&&(e=h,i=_)}if(e&&i<10){if(i/e.currentSpeed<=this.diff.reactionTime+.25){if(Math.random()<this.diff.deflectChance&&this.ai.hasDisc&&this.ai.shieldEnergy>20)this.ai.isShielding=!0;else if(Math.random()<this.diff.dodgeChance&&this.ai.state!=="dodge"){let M=new A(-e.velocity.z,0,e.velocity.x).normalize().multiplyScalar(this.strafeDir);this.ai.triggerDodge(M)}}}else this.ai.isShielding&&i>12&&(this.ai.isShielding=!1);this.moveTimer<=0&&(this.moveTimer=.8+Math.random()*.8,Math.random()<.3&&(this.strafeDir*=-1));let r=new A().subVectors(this.player.position,this.ai.position),o=r.length(),a=new A;o>15?a.addScaledVector(r.clone().normalize(),.7):o<9&&a.addScaledVector(r.clone().normalize(),-.8);let c=new A(-r.z,0,r.x).normalize().multiplyScalar(this.strafeDir*.75);a.add(c);let l=(this.arena.radius||17)-2.5;if(Math.sqrt(this.ai.position.x*this.ai.position.x+this.ai.position.z*this.ai.position.z)>l){let h=new A(-this.ai.position.x,0,-this.ai.position.z).normalize().multiplyScalar(1.2);a.add(h)}if(a.normalize(),this.throwTimer<=0&&this.ai.hasDisc&&this.ai.state!=="dodge"&&!this.ai.isShielding&&this.executeThrow(),this.disc.isActive&&this.disc.owner===this.ai&&!this.disc.isRecalling){let h=new A().subVectors(this.player.position,this.disc.position),p=this.disc.velocity.dot(h)<0;(this.disc.bounces>=2||p&&this.disc.bounces>=1)&&this.disc.recall()}let d=this.calculateAimTarget();this.ai.update(t,a,d)}calculateAimTarget(){let t=this.player.position.clone();if(this.diff.aimAccuracy>.8){let r=this.ai.position.distanceTo(t)/26;t.addScaledVector(this.player.velocity,r*this.diff.aimAccuracy)}let e=(1-this.diff.aimAccuracy)*4;return t.x+=(Math.random()-.5)*e,t.z+=(Math.random()-.5)*e,t}executeThrow(){let t=this.calculateAimTarget(),e=new A().subVectors(t,this.ai.position);e.y=0,e.normalize();let i=0;if(this.diff.allowCurve&&Math.random()<.45&&(i=(Math.random()>.5?1:-1)*.7),this.diff.allowBankShots&&Math.random()<.4){let s=(Math.random()>.5?1:-1)*.85;e.applyAxisAngle(new A(0,1,0),s)}this.ai.triggerThrow()&&(setTimeout(()=>{this.ai.isAlive&&(this.disc.launch(this.ai.position,e,i,1),this.onThrow&&this.onThrow(this.ai.position,e,i,1))},120),this.throwTimer=this.diff.throwCooldown+Math.random()*.4)}};var ia=class{constructor(t,e){this.camera=t,this.domElement=e,this.yaw=0,this.pitch=0,this.minPitch=-Math.PI/2.6,this.maxPitch=Math.PI/2.6,this.moveInput=new A,this.worldMoveVec=new A,this.isMoving=!1,this.isShielding=!1,this.isDashing=!1,this.curveMode=0,this.joystickTouchId=null,this.lookTouchId=null,this.isPointerJoyActive=!1,this.isPointerLookActive=!1,this.joyBase={x:0,y:0},this.joyRadius=55,this.lastLookX=0,this.lastLookY=0,this.lookSensitivity=.0038,this.keys={},this.onThrow=null,this.onRecall=null,this.onDash=null,this.initDOM(),this.bindEvents()}initDOM(){this.touchLayer=document.getElementById("fpv-touch-layer"),this.joyZone=document.getElementById("fpv-joystick-zone"),this.joyBaseEl=document.getElementById("fpv-joystick-base"),this.joyThumbEl=document.getElementById("fpv-joystick-thumb"),this.lookZone=document.getElementById("fpv-look-zone"),this.btnThrow=document.getElementById("btn-fpv-throw"),this.btnShield=document.getElementById("btn-fpv-shield"),this.btnRecall=document.getElementById("btn-fpv-recall"),this.btnDash=document.getElementById("btn-fpv-dash"),this.btnCurve=document.getElementById("btn-fpv-curve")}bindEvents(){if(this.joyZone){this.joyZone.addEventListener("touchstart",s=>{if(this.joystickTouchId!==null)return;let r=s.changedTouches[0];if(!r)return;s.preventDefault(),s.stopPropagation(),this.joystickTouchId=r.identifier,this.joyZoneRect=this.joyZone.getBoundingClientRect();let o=r.clientX-this.joyZoneRect.left,a=r.clientY-this.joyZoneRect.top;this.joyBase={x:o,y:a},this.joyBaseEl&&this.joyThumbEl&&(this.joyBaseEl.style.display="block",this.joyBaseEl.style.left=`${o}px`,this.joyBaseEl.style.top=`${a}px`,this.joyThumbEl.style.transform="translate(-50%, -50%)")},{passive:!1}),window.addEventListener("touchmove",s=>{if(this.joystickTouchId===null)return;let r=null;for(let f=0;f<s.touches.length;f++)if(s.touches[f].identifier===this.joystickTouchId){r=s.touches[f];break}if(!r)return;s.preventDefault(),this.joyZoneRect||(this.joyZoneRect=this.joyZone.getBoundingClientRect());let o=r.clientX-this.joyZoneRect.left,a=r.clientY-this.joyZoneRect.top,c=o-this.joyBase.x,l=a-this.joyBase.y,u=Math.hypot(c,l),d=Math.atan2(l,c),h=Math.min(this.joyRadius,u),p=Math.cos(d)*h,_=Math.sin(d)*h;this.joyThumbEl&&(this.joyThumbEl.style.transform=`translate(calc(-50% + ${p}px), calc(-50% + ${_}px))`);let M=p/this.joyRadius,m=_/this.joyRadius;this.moveInput.set(M,0,-m),this.isMoving=this.moveInput.lengthSq()>.02},{passive:!1});let e=s=>{if(this.joystickTouchId!==null){for(let r=0;r<s.changedTouches.length;r++)if(s.changedTouches[r].identifier===this.joystickTouchId){this.joystickTouchId=null,this.moveInput.set(0,0,0),this.isMoving=!1,this.joyBaseEl&&(this.joyBaseEl.style.display="none");break}}};window.addEventListener("touchend",e,{passive:!1}),window.addEventListener("touchcancel",e,{passive:!1}),this.joyZone.addEventListener("pointerdown",s=>{if(s.pointerType==="touch")return;this.isPointerJoyActive=!0,this.joyZoneRect=this.joyZone.getBoundingClientRect();let r=s.clientX-this.joyZoneRect.left,o=s.clientY-this.joyZoneRect.top;this.joyBase={x:r,y:o},this.joyBaseEl&&this.joyThumbEl&&(this.joyBaseEl.style.display="block",this.joyBaseEl.style.left=`${r}px`,this.joyBaseEl.style.top=`${o}px`,this.joyThumbEl.style.transform="translate(-50%, -50%)")}),window.addEventListener("pointermove",s=>{if(!this.isPointerJoyActive||s.pointerType==="touch")return;this.joyZoneRect||(this.joyZoneRect=this.joyZone.getBoundingClientRect());let r=s.clientX-this.joyZoneRect.left,o=s.clientY-this.joyZoneRect.top,a=r-this.joyBase.x,c=o-this.joyBase.y,l=Math.hypot(a,c),u=Math.atan2(c,a),d=Math.min(this.joyRadius,l),h=Math.cos(u)*d,p=Math.sin(u)*d;this.joyThumbEl&&(this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${p}px))`);let _=h/this.joyRadius,M=p/this.joyRadius;this.moveInput.set(_,0,-M),this.isMoving=this.moveInput.lengthSq()>.02});let i=s=>{!this.isPointerJoyActive||s.pointerType==="touch"||(this.isPointerJoyActive=!1,this.moveInput.set(0,0,0),this.isMoving=!1,this.joyBaseEl&&(this.joyBaseEl.style.display="none"))};window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}if(this.lookZone){this.lookZone.addEventListener("touchstart",s=>{if(s.target.closest(".fpv-action-btn")||s.target.closest(".fpv-action-pad")||this.lookTouchId!==null)return;let r=s.changedTouches[0];r&&(s.preventDefault(),s.stopPropagation(),this.lookTouchId=r.identifier,this.lastLookX=r.clientX,this.lastLookY=r.clientY)},{passive:!1}),window.addEventListener("touchmove",s=>{if(this.lookTouchId===null)return;let r=null;for(let c=0;c<s.touches.length;c++)if(s.touches[c].identifier===this.lookTouchId){r=s.touches[c];break}if(!r)return;s.preventDefault();let o=r.clientX-this.lastLookX,a=r.clientY-this.lastLookY;this.lastLookX=r.clientX,this.lastLookY=r.clientY,this.yaw-=o*this.lookSensitivity,this.pitch-=a*this.lookSensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch)),this.updateCameraRotation()},{passive:!1});let e=s=>{if(this.lookTouchId!==null){for(let r=0;r<s.changedTouches.length;r++)if(s.changedTouches[r].identifier===this.lookTouchId){this.lookTouchId=null;break}}};window.addEventListener("touchend",e,{passive:!1}),window.addEventListener("touchcancel",e,{passive:!1}),this.lookZone.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.target.closest(".fpv-action-btn")||s.target.closest(".fpv-action-pad")||(this.isPointerLookActive=!0,this.lastLookX=s.clientX,this.lastLookY=s.clientY))}),window.addEventListener("pointermove",s=>{if(!this.isPointerLookActive||s.pointerType==="touch")return;let r=s.clientX-this.lastLookX,o=s.clientY-this.lastLookY;this.lastLookX=s.clientX,this.lastLookY=s.clientY,this.yaw-=r*this.lookSensitivity,this.pitch-=o*this.lookSensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch)),this.updateCameraRotation()});let i=s=>{!this.isPointerLookActive||s.pointerType==="touch"||(this.isPointerLookActive=!1)};window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}let t=(e,i,s=null)=>{if(!e)return;let r=a=>{a.preventDefault(),a.stopPropagation(),window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(25),i&&i()},o=a=>{a.preventDefault(),a.stopPropagation(),s&&s()};e.addEventListener("touchstart",r,{passive:!1}),s&&(e.addEventListener("touchend",o,{passive:!1}),e.addEventListener("touchcancel",o,{passive:!1})),e.addEventListener("pointerdown",a=>{a.pointerType!=="touch"&&r(a)}),s&&(e.addEventListener("pointerup",a=>{a.pointerType!=="touch"&&o(a)}),e.addEventListener("pointercancel",a=>{a.pointerType!=="touch"&&o(a)}))};t(this.btnThrow,()=>{this.onThrow&&this.onThrow(this.curveMode)}),t(this.btnShield,()=>{this.isShielding=!0,this.btnShield&&this.btnShield.classList.add("active")},()=>{this.isShielding=!1,this.btnShield&&this.btnShield.classList.remove("active")}),t(this.btnRecall,()=>{this.onRecall&&this.onRecall()}),t(this.btnDash,()=>{this.isDashing=!0,this.onDash&&this.onDash(),setTimeout(()=>{this.isDashing=!1},250)}),t(this.btnCurve,()=>{this.curveMode===0?(this.curveMode=1,this.btnCurve.innerText="CURVE \u2938"):this.curveMode===1?(this.curveMode=-1,this.btnCurve.innerText="CURVE \u2939"):(this.curveMode=0,this.btnCurve.innerText="STRAIGHT")}),window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyR"&&this.onRecall&&this.onRecall(),e.code==="Space"&&this.onDash&&(this.isDashing=!0,this.onDash(),setTimeout(()=>{this.isDashing=!1},250)),(e.code==="ShiftLeft"||e.code==="KeyF")&&(this.isShielding=!0),e.code==="KeyQ"&&(this.curveMode=-1),e.code==="KeyE"&&(this.curveMode=1)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1,(e.code==="ShiftLeft"||e.code==="KeyF")&&(this.isShielding=!1)}),window.addEventListener("mousedown",e=>{e.target.closest("button")||e.target.closest(".modal-content")||(e.button===0&&this.onThrow?this.onThrow(this.curveMode):e.button===2&&(this.isShielding=!0))}),window.addEventListener("mouseup",e=>{e.button===2&&(this.isShielding=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault())}updateCameraRotation(){let t=new ei(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(t)}getForwardVector(){return new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightVector(){return new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize()}getLookDirection(){let t=new A(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}update(t){let e=0,i=0;(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),(this.keys.KeyW||this.keys.ArrowUp)&&(i+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(i-=1),this.joystickTouchId===null&&!this.isPointerJoyActive&&(e!==0||i!==0?(this.moveInput.set(e,0,i).normalize(),this.isMoving=!0):(this.moveInput.set(0,0,0),this.isMoving=!1));let s=this.getForwardVector(),r=this.getRightVector();this.worldMoveVec.set(0,0,0).addScaledVector(s,this.moveInput.z).addScaledVector(r,this.moveInput.x)}};var na=class{constructor(t,e=61695){this.camera=t,this.skinColorHex=e,this.group=new Xt,this.camera.add(this.group),this.animTimer=0,this.state="idle",this.throwTimer=0,this.catchTimer=0,this.hasDisc=!0,this.buildMesh()}buildMesh(){let t=new Xe({color:790552,specular:3359829,shininess:40}),e=new Zt({color:this.skinColorHex});this.rightArm=new Xt,this.rightArm.position.set(.38,-.32,-.65),this.group.add(this.rightArm);let i=new Pe(.065,.055,.42,8),s=new st(i,t);s.rotation.x=Math.PI/2.3,s.position.set(0,0,.12),this.rightArm.add(s);let r=new jt(.02,.02,.38),o=new st(r,e);o.rotation.x=Math.PI/2.3,o.position.set(0,.05,.12),this.rightArm.add(o);let a=new jt(.09,.06,.12),c=new st(a,t);c.position.set(0,.02,.32),this.rightArm.add(c);let l=new Be(.18,.022,12,24);this.discMesh=new st(l,e),this.discMesh.rotation.x=Math.PI/2,this.discMesh.position.set(0,.04,.38),this.rightArm.add(this.discMesh),this.leftArm=new Xt,this.leftArm.position.set(-.38,-.34,-.65),this.group.add(this.leftArm);let u=new st(i,t);u.rotation.x=Math.PI/2.3,u.position.set(0,0,.12),this.leftArm.add(u);let d=new st(r,e);d.rotation.x=Math.PI/2.3,d.position.set(0,.05,.12),this.leftArm.add(d);let h=new st(a,t);h.position.set(0,.02,.32),this.leftArm.add(h);let p=new hn(.85,6);this.shieldMat=new Zt({color:this.skinColorHex,transparent:!0,opacity:0,side:ge}),this.shieldMesh=new st(p,this.shieldMat),this.shieldMesh.position.set(0,0,-.9);let _=new $e(.82,.86,6);this.shieldRimMat=new Zt({color:16777215,transparent:!0,opacity:0,side:ge}),this.shieldRim=new st(_,this.shieldRimMat),this.shieldRim.position.set(0,0,-.89),this.group.add(this.shieldMesh),this.group.add(this.shieldRim)}setGlowColor(t){this.skinColorHex=t,this.discMesh.material.color.setHex(t),this.shieldMat.color.setHex(t)}triggerThrow(){return!this.hasDisc||this.state==="throw"?!1:(this.state="throw",this.throwTimer=0,!0)}triggerRecall(){this.state="catch",this.catchTimer=0}catchDisc(){this.hasDisc=!0,this.state="idle",this.discMesh.visible=!0}update(t,e,i){this.animTimer+=t,this.discMesh.visible=this.hasDisc&&this.state!=="throw";let s=i?.55+Math.sin(this.animTimer*16)*.1:0;this.shieldMat.opacity=ne.lerp(this.shieldMat.opacity,s,t*18),this.shieldRimMat.opacity=ne.lerp(this.shieldRimMat.opacity,i?.95:0,t*18);let r=0,o=0;if(e?(r=Math.sin(this.animTimer*8.5)*.025,o=Math.abs(Math.cos(this.animTimer*8.5))*.035):o=Math.sin(this.animTimer*2.2)*.008,this.state==="throw"){this.throwTimer+=t;let c=this.throwTimer/.28;c<.35?(this.rightArm.position.set(.48,-.22,-.45),this.rightArm.rotation.set(-.4,.3,.2)):c<.8?(this.rightArm.position.set(.18,-.28,-.85),this.rightArm.rotation.set(.5,-.4,-.3),this.discMesh.visible=!1):c>=1&&(this.state="idle",this.hasDisc=!1);return}if(this.state==="catch"){this.catchTimer+=t,this.leftArm.position.set(-.25,-.18,-.8),this.leftArm.rotation.set(.3,.2,.1),this.catchTimer>=.4&&(this.state="idle");return}if(i){this.leftArm.position.set(-.22,-.15+o,-.68),this.leftArm.rotation.set(.5,.4,.2),this.rightArm.position.set(.22,-.18+o,-.68),this.rightArm.rotation.set(.5,-.4,-.2);return}this.rightArm.position.set(.38+r,-.32+o,-.65),this.rightArm.rotation.set(o*2,-r*2,0),this.leftArm.position.set(-.38-r,-.34+o,-.65),this.leftArm.rotation.set(o*2,r*2,0)}};var Ti=[{hex:"#00f0ff",num:61695,name:"Cyan"},{hex:"#ff3800",num:16726016,name:"Orange"},{hex:"#cc44ff",num:13387007,name:"Violet"},{hex:"#00ff66",num:65382,name:"Emerald"}],ra=class{constructor(t){this.onNetMessage=t,this.isHost=!1,this.isSolo=!1,this.isConnected=!1,this.socket=null,this.localPlayerId=null,this.localSlot=0,this.localUsername=localStorage.getItem("tron_username")||"Program_"+Math.floor(Math.random()*899+100),this.players=new Map,this.discoveredServers=[],this.syncInterval=null,window.onLanServerFound=e=>{this.handleDiscoveredBeacon(e)}}setUsername(t){this.localUsername=t.trim()||"User",localStorage.setItem("tron_username",this.localUsername)}startHosting(t,e=4,i="coliseum",s=!0){this.isHost=!0,this.isSolo=!1,this.fillWithBots=s,this.arena=i,this.maxPlayers=e,this.players.clear(),this.localPlayerId="host_"+Math.random().toString(36).substring(2,7),this.localSlot=0,this.players.set(this.localPlayerId,{id:this.localPlayerId,slot:0,name:this.localUsername,color:Ti[0],isBot:!1,score:0,hp:100}),window.AndroidBridge&&window.AndroidBridge.startHosting&&window.AndroidBridge.startHosting(t,e,i),setTimeout(()=>{this.connectToServer("127.0.0.1",8888,()=>{this.send({type:"register",id:this.localPlayerId,name:this.localUsername,isHost:!0,arena:this.arena})})},150)}connectToHost(t,e=8888){this.isHost=!1,this.isSolo=!1,this.players.clear();let i=(t||"").trim(),s=e;if(i.includes(":")){let r=i.split(":");i=r[0].trim(),s=parseInt(r[1],10)||e}this.connectToServer(i,s,()=>{this.localPlayerId="client_"+Math.random().toString(36).substring(2,7),this.send({type:"register",id:this.localPlayerId,name:this.localUsername,isHost:!1})})}fillRosterWithBots(){if(!this.isHost)return;let t=["Rinzler","CLU","Anon"],e=new Set(Array.from(this.players.values()).map(r=>r.slot)),i=0;for(let r=1;r<this.maxPlayers&&r<4;r++)if(!e.has(r)){let o="lan_bot_"+r;this.players.set(o,{id:o,slot:r,name:t[i%t.length],color:Ti[r],isBot:!0,score:0,hp:100}),i++}let s=Array.from(this.players.values());this.send({type:"roster_sync",players:s,arena:this.arena})}startSolo(t=1,e="coliseum"){this.isHost=!1,this.isSolo=!0,this.localPlayerId="solo_player",this.localSlot=0,this.arena=e,this.players.clear(),this.players.set(this.localPlayerId,{id:this.localPlayerId,slot:0,name:this.localUsername,color:Ti[0],isBot:!1,score:0,hp:100});let i=["Rinzler","CLU","Anon"];for(let s=0;s<t;s++){let r="bot_"+(s+1),o=s+1;this.players.set(r,{id:r,slot:o,name:i[s%i.length],color:Ti[o%4],isBot:!0,score:0,hp:100})}}connectToServer(t,e,i){if(this.socket)try{this.socket.close()}catch{}let s=`ws://${t}:${e}`;this.socket=new WebSocket(s),this.socket.onopen=()=>{this.isConnected=!0,i&&i(),this.startHeartbeat()},this.socket.onmessage=r=>{try{let o=JSON.parse(r.data);this.handleIncomingMessage(o)}catch(o){console.error("Failed to parse net packet",o)}},this.socket.onclose=()=>{let r=this.isConnected;this.isConnected=!1,this.stopHeartbeat(),r&&!this.isHost&&this.onNetMessage&&this.onNetMessage({type:"server_closed"})},this.socket.onerror=r=>{console.warn("LAN socket error:",r)}}send(t){this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}startHeartbeat(){this.syncInterval&&clearInterval(this.syncInterval),this.syncInterval=setInterval(()=>{this.isConnected&&this.send({type:"ping",t:Date.now()})},2e3)}stopHeartbeat(){this.syncInterval&&(clearInterval(this.syncInterval),this.syncInterval=null)}handleIncomingMessage(t){if(t.type!=="ping"){if(t.type==="register"){if(!this.players.has(t.id)){let e=new Set(Array.from(this.players.values()).map(s=>s.slot)),i=1;for(;e.has(i)&&i<4;)i++;if(i>=4&&(i=this.players.size%4),this.players.set(t.id,{id:t.id,slot:i,name:t.name,color:Ti[i%4],isBot:!1,score:0,hp:100}),this.isHost){let s=Array.from(this.players.values());this.send({type:"roster_sync",players:s,arena:this.arena})}}}else if(t.type==="roster_sync"){this.players.clear();for(let e of t.players)this.players.set(e.id,e),e.id===this.localPlayerId&&(this.localSlot=e.slot);t.arena&&(this.arena=t.arena)}else if((t.type==="player_left"||t.type==="leave")&&this.players.has(t.id)&&(this.players.delete(t.id),this.isHost)){let e=Array.from(this.players.values());this.send({type:"roster_sync",players:e,arena:this.arena})}this.onNetMessage&&this.onNetMessage(t)}}handleDiscoveredBeacon(t){let e=t.split("|");if(e.length<7)return;let i={name:e[1],ip:e[2],port:parseInt(e[3],10),currentPlayers:parseInt(e[4],10),maxPlayers:parseInt(e[5],10),arena:e[6],timestamp:Date.now()},s=this.discoveredServers.findIndex(r=>r.ip===i.ip);s>=0?this.discoveredServers[s]=i:this.discoveredServers.push(i),window.onLanServersListUpdated&&window.onLanServersListUpdated(this.discoveredServers)}startDiscovery(){this.discoveredServers=[],window.AndroidBridge&&window.AndroidBridge.startDiscovery&&window.AndroidBridge.startDiscovery()}stopDiscovery(){window.AndroidBridge&&window.AndroidBridge.stopDiscovery&&window.AndroidBridge.stopDiscovery()}disconnect(){if(this.isConnected&&this.socket&&this.localPlayerId&&this.send({type:"leave",id:this.localPlayerId}),this.isHost&&window.AndroidBridge&&window.AndroidBridge.stopHosting&&window.AndroidBridge.stopHosting(),this.stopDiscovery(),this.stopHeartbeat(),this.socket){try{this.socket.close()}catch{}this.socket=null}this.isConnected=!1,this.players.clear()}},sa="https://sspgvgpfhnucciizwtzj.supabase.co",tn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcGd2Z3BmaG51Y2NpaXp3dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMTg4NDksImV4cCI6MjEwNzc5NDg0OX0.OV_nPbu3q2J_hbHD_bUTETnj5jJ92joLnPLDYofOCG8",Oh=["rinzler","clu","anon","tron","quorra","flynn","sark","bit","bot 1","bot 2","bot 3"];async function Hh(n=10){try{let t=await fetch(`${sa}/rest/v1/leaderboard?select=*&order=win_score.desc&limit=30`,{headers:{apikey:tn,Authorization:`Bearer ${tn}`}});return t.ok?(await t.json()).filter(s=>{let r=(s.player_name||"").toLowerCase().trim();return r&&!Oh.includes(r)&&!r.startsWith("bot")}).slice(0,n):(console.warn("Leaderboard fetch status:",t.status),[])}catch(t){return console.warn("Offline or error fetching leaderboard:",t),[]}}async function zh(n,t,e=0,i="coliseum"){let s=(n||"").trim();if(!s||Oh.includes(s.toLowerCase())||s.toLowerCase().startsWith("bot"))return null;try{let r=await fetch(`${sa}/rest/v1/leaderboard?player_name=eq.${encodeURIComponent(s)}&select=*`,{headers:{apikey:tn,Authorization:`Bearer ${tn}`}});if(r.ok){let c=await r.json();if(c&&c.length>0){let l=c[0];if(t>l.win_score||t===l.win_score&&e>l.kills){let u=await fetch(`${sa}/rest/v1/leaderboard?id=eq.${l.id}`,{method:"PATCH",headers:{"Content-Type":"application/json",apikey:tn,Authorization:`Bearer ${tn}`,Prefer:"return=representation"},body:JSON.stringify({win_score:Math.max(t,l.win_score),kills:Math.max(e,l.kills),arena:i||l.arena})});return u.ok?await u.json():null}else return l}}let o=await fetch(`${sa}/rest/v1/leaderboard`,{method:"POST",headers:{"Content-Type":"application/json",apikey:tn,Authorization:`Bearer ${tn}`,Prefer:"return=representation"},body:JSON.stringify({player_name:s,win_score:Math.max(0,t),kills:Math.max(0,e),arena:i||"coliseum"})});if(!o.ok)return console.warn("Leaderboard post status:",o.status),null;let a=await o.json();return Array.isArray(a)?a[0]:a}catch(r){return console.warn("Offline or error submitting score:",r),null}}var Nl={speed:{id:"speed",name:"THRUSTER SURGE",color:65484,duration:7,desc:"+60% Movement speed with light cycle trail"},overcharge:{id:"overcharge",name:"HYPER-DISC",color:16711765,duration:10,desc:"1.5x Disc speed & +15 damage on next 2 throws"},shield:{id:"shield",name:"MATRIX OVERSHIELD",color:16755200,duration:8,desc:"+50 Shield energy and auto-deflect boost"},recall:{id:"recall",name:"INSTANT RECALL",color:11141375,duration:12,desc:"Discs teleport immediately back to your hand"}},oa=class{constructor(t){this.scene=t,this.powerups=[],this.spawnTimer=4,this.spawnPositions=[new A(0,1.2,0),new A(-8,1.2,-5),new A(8,1.2,-5),new A(-8,1.2,5),new A(8,1.2,5)]}spawn(t,e){let i=Nl[t]||Nl.speed,s=new Xt;s.position.copy(e);let r=new ws(.38,0),o=new Zt({color:i.color,wireframe:!1}),a=new st(r,o);s.add(a);let c=new jt(.7,.7,.7),l=new Zt({color:16777215,wireframe:!0,transparent:!0,opacity:.8}),u=new st(c,l);s.add(u);let d=new dn(i.color,1.5,5);s.add(d),this.scene.add(s);let h={typeKey:t,type:i,group:s,core:a,box:u,light:d,position:e.clone(),active:!0};return this.powerups.push(h),h}update(t,e,i){if(this.spawnTimer-=t,this.spawnTimer<=0&&this.powerups.length<3){this.spawnTimer=10+Math.random()*6;let s=Object.keys(Nl),r=s[Math.floor(Math.random()*s.length)],o=this.spawnPositions.filter(a=>!this.powerups.some(c=>c.position.distanceTo(a)<2));if(o.length>0){let a=o[Math.floor(Math.random()*o.length)];this.spawn(r,a)}}for(let s=this.powerups.length-1;s>=0;s--){let r=this.powerups[s];if(r.active){r.group.rotation.y+=2*t,r.box.rotation.x+=1.5*t,r.group.position.y=1.2+Math.sin(performance.now()*.003+s)*.2;for(let o of e){if(!o.isAlive)continue;if(o.position.distanceTo(r.group.position)<1.4){r.active=!1,this.scene.remove(r.group),this.powerups.splice(s,1),i&&i(o,r.type);break}}}}}clear(){for(let t of this.powerups)this.scene.remove(t.group);this.powerups=[]}};var aa=class{constructor(t){this.onPlayCustomLevel=t,this.customLevel={id:"custom_1",name:"User Grid Alpha",shape:"octagon",radius:18,themeColor:61695,themeHex:"#00f0ff",opponentSkin:"rinzler",difficulty:"hard",roundsToWin:3,pylons:[{x:-5,z:0,radius:1},{x:5,z:0,radius:1}]},this.loadSavedLevels(),this.initUI()}loadSavedLevels(){try{let t=localStorage.getItem("tron_custom_arena");t&&(this.customLevel=JSON.parse(t))}catch(t){console.warn("Could not read localStorage",t)}}saveCurrentLevel(){try{localStorage.setItem("tron_custom_arena",JSON.stringify(this.customLevel))}catch(t){console.warn("Could not write localStorage",t)}}initUI(){this.modal=document.getElementById("modal-editor"),this.inputName=document.getElementById("editor-arena-name"),this.selectShape=document.getElementById("editor-shape"),this.sliderRadius=document.getElementById("editor-radius"),this.radiusVal=document.getElementById("editor-radius-val"),this.selectColor=document.getElementById("editor-color"),this.selectOpponent=document.getElementById("editor-opponent"),this.selectDifficulty=document.getElementById("editor-difficulty"),this.pylonListEl=document.getElementById("editor-pylons-list"),this.btnAddPylon=document.getElementById("btn-add-pylon"),this.btnSave=document.getElementById("btn-editor-save"),this.btnPlay=document.getElementById("btn-editor-play"),this.btnClose=document.getElementById("btn-editor-close"),this.sliderRadius&&this.radiusVal&&this.sliderRadius.addEventListener("input",()=>{this.customLevel.radius=parseInt(this.sliderRadius.value,10),this.radiusVal.innerText=`${this.customLevel.radius}m`}),this.selectShape&&this.selectShape.addEventListener("change",()=>{this.customLevel.shape=this.selectShape.value}),this.selectColor&&this.selectColor.addEventListener("change",()=>{let t=this.selectColor.value;this.customLevel.themeHex=t,this.customLevel.themeColor=parseInt(t.replace("#","0x"),16)}),this.selectOpponent&&this.selectOpponent.addEventListener("change",()=>{this.customLevel.opponentSkin=this.selectOpponent.value}),this.selectDifficulty&&this.selectDifficulty.addEventListener("change",()=>{this.customLevel.difficulty=this.selectDifficulty.value}),this.btnAddPylon&&this.btnAddPylon.addEventListener("click",()=>{if(this.customLevel.pylons.length>=6)return;let t=.9,e=Math.round((Math.random()-.5)*(this.customLevel.radius-6)),i=Math.round((Math.random()-.5)*(this.customLevel.radius-6));this.customLevel.pylons.push({x:e,z:i,radius:t}),this.renderPylonList()}),this.btnSave&&this.btnSave.addEventListener("click",()=>{this.inputName&&(this.customLevel.name=this.inputName.value||"Custom Grid"),this.saveCurrentLevel();let t=this.btnSave.innerText;this.btnSave.innerText="SAVED \u2713",setTimeout(()=>{this.btnSave&&(this.btnSave.innerText=t)},1500)}),this.btnPlay&&this.btnPlay.addEventListener("click",()=>{this.inputName&&(this.customLevel.name=this.inputName.value||"Custom Grid"),this.saveCurrentLevel(),this.hide(),this.onPlayCustomLevel&&this.onPlayCustomLevel(this.customLevel)}),this.btnClose&&this.btnClose.addEventListener("click",()=>this.hide())}renderPylonList(){if(!this.pylonListEl)return;this.pylonListEl.innerHTML="",this.customLevel.pylons.forEach((e,i)=>{let s=document.createElement("div");s.className="pylon-item",s.innerHTML=`
                <span>Pylon #${i+1} (X: ${e.x}, Z: ${e.z})</span>
                <button class="btn-tron-small btn-del-pylon" data-idx="${i}">\u2715</button>
            `,this.pylonListEl.appendChild(s)}),this.pylonListEl.querySelectorAll(".btn-del-pylon").forEach(e=>{e.addEventListener("click",()=>{let i=parseInt(e.dataset.idx,10);isNaN(i)||(this.customLevel.pylons.splice(i,1),this.renderPylonList())})})}show(){this.modal&&(this.inputName&&(this.inputName.value=this.customLevel.name),this.selectShape&&(this.selectShape.value=this.customLevel.shape),this.sliderRadius&&(this.sliderRadius.value=this.customLevel.radius),this.radiusVal&&(this.radiusVal.innerText=`${this.customLevel.radius}m`),this.selectColor&&(this.selectColor.value=this.customLevel.themeHex),this.selectOpponent&&(this.selectOpponent.value=this.customLevel.opponentSkin),this.selectDifficulty&&(this.selectDifficulty.value=this.customLevel.difficulty),this.renderPylonList(),this.modal.style.display="flex")}hide(){this.modal&&(this.modal.style.display="none")}};var Ul=class{constructor(){this.canvas=document.getElementById("game-canvas"),this.gameState="menu",this.arenaPresetKey="coliseum",this.username=localStorage.getItem("tron_username")||"Program_"+Math.floor(Math.random()*899+100),this.playerPos=new A(0,0,-8),this.playerVel=new A,this.playerHp=100,this.playerMaxHp=100,this.shieldEnergy=100,this.maxShieldEnergy=100,this.isAlive=!0,this.moveSpeed=7.8,this.activePowerup=null,this.powerupTimer=0,this.localKills=0,this.localScore=0,this.killsToWin=3,this.lastNetSyncTime=0,this.discs=[],this.remoteCombatants=new Map,this.lastTime=performance.now(),this.screenShake=0,this.initThree(),this.initLAN(),this.initEntities(),this.initUI(),this.initLevelEditor(),requestAnimationFrame(t=>this.loop(t))}initThree(){this.renderer=new Yo({canvas:this.canvas,antialias:window.devicePixelRatio<2,powerPreference:"high-performance",precision:"mediump"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.toneMapping=Ns,this.renderer.toneMappingExposure=1.35,this.scene=new ms,this.scene.background=new It(131846),this.scene.fog=new ps(131846,.015),this.camera=new Re(72,window.innerWidth/window.innerHeight,.05,300),this.camera.position.set(0,1.72,-8),this.scene.add(this.camera),this.ambientLight=new Ps(1055272,1.1),this.scene.add(this.ambientLight),this.dirLight=new Is(14544639,1.2),this.dirLight.position.set(10,25,-15),this.scene.add(this.dirLight),this.spotLight=new Cs(61695,2.5,45,Math.PI/3,.4,1.2),this.spotLight.position.set(0,24,0),this.scene.add(this.spotLight),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initLAN(){this.lan=new ra(t=>this.handleNetMessage(t))}initEntities(){this.arena=new ta(this.scene,this.arenaPresetKey),this.powerupManager=new oa(this.scene),this.fpvArms=new na(this.camera,61695),this.controls=new ia(this.camera,this.canvas),this.controls.onThrow=e=>{this.gameState!=="playing"||!this.isAlive||this.localDisc&&this.localDisc.isActive||this.throwLocalDisc(e)},this.controls.onRecall=()=>{this.localDisc&&this.localDisc.isActive&&(this.localDisc.recall(),this.fpvArms.triggerRecall(),this.lan.isConnected&&this.lan.send({type:"recall",id:this.lan.localPlayerId}))},this.controls.onDash=()=>{this.gameState!=="playing"||!this.isAlive||this.triggerDash()};let t=this;this.localPlayer={position:this.playerPos,get velocity(){return t.playerVel},isAI:!1,get isAlive(){return t.isAlive},get isShielding(){return t.controls?t.controls.isShielding:!1},get rotationY(){if(!t.controls)return 0;let e=t.controls.getForwardVector();return Math.atan2(e.x,e.z)},get state(){return t.controls&&t.controls.isDashing?"dodge":"idle"},get hasDisc(){return t.fpvArms?t.fpvArms.hasDisc:!0},set hasDisc(e){t.fpvArms&&(t.fpvArms.hasDisc=e)},discsInFlight:0,takeDamage:(e,i="Opponent")=>{t.takeDamage(e,i)}},this.localPlayerDummy=this.localPlayer,this.localDisc=new Ys(this.scene,this.localPlayer,61695,!1),this.localPlayer.disc=this.localDisc}initLevelEditor(){this.levelEditor=new aa(t=>{this.arenaPresetKey="custom",this.arena.loadPreset("custom",t),this.startSoloMatch(2)})}initUI(){this.viewMenu=document.getElementById("view-menu"),this.viewHUD=document.getElementById("view-hud"),this.viewLobby=document.getElementById("view-lobby"),this.viewGameOver=document.getElementById("view-gameover"),this.inputUsername=document.getElementById("menu-username-input"),this.inputUsername&&(this.inputUsername.value=this.username,this.inputUsername.addEventListener("change",()=>{this.username=this.inputUsername.value.trim()||"Program",this.lan.setUsername(this.username)})),document.getElementById("btn-play-solo").addEventListener("click",()=>{Jt.playUiClick(),this.startSoloMatch(3)}),document.getElementById("btn-host-lan").addEventListener("click",()=>{Jt.playUiClick(),this.openHostLobby()}),document.getElementById("btn-join-lan").addEventListener("click",()=>{Jt.playUiClick(),this.openJoinLobby()}),document.getElementById("btn-open-editor").addEventListener("click",()=>{Jt.playUiClick(),this.levelEditor.show()});let t=document.getElementById("btn-open-leaderboard");t&&t.addEventListener("click",()=>{Jt.playUiClick(),document.getElementById("modal-leaderboard").style.display="flex",this.refreshLeaderboardTable("modal-leaderboard-body")});let e=document.getElementById("btn-leaderboard-close");if(e&&e.addEventListener("click",()=>{Jt.playUiClick(),document.getElementById("modal-leaderboard").style.display="none"}),document.getElementById("btn-lobby-start").addEventListener("click",()=>{Jt.playUiClick(),this.lan.isHost&&(this.lan.fillWithBots&&this.lan.players.size<4&&this.lan.fillRosterWithBots(),this.lan.send({type:"start_match",arena:this.arenaPresetKey}),this.startGridMatch())}),document.getElementById("btn-lobby-back").addEventListener("click",()=>{Jt.playUiClick(),this.lan.disconnect(),this.returnToMenu()}),document.getElementById("btn-direct-connect").addEventListener("click",()=>{Jt.playUiClick();let i=document.getElementById("input-direct-ip").value.trim();i&&(this.lan.connectToHost(i),this.showLobbyScreen())}),document.getElementById("btn-rematch").addEventListener("click",()=>{Jt.playUiClick(),this.lan.isSolo?this.startSoloMatch(3):this.lan.isHost&&(this.lan.fillWithBots&&this.lan.players.size<4&&this.lan.fillRosterWithBots(),this.lan.send({type:"start_match",arena:this.arenaPresetKey}),this.startGridMatch())}),document.getElementById("btn-menu").addEventListener("click",()=>{Jt.playUiClick(),this.lan.disconnect(),this.returnToMenu()}),this.hudHpFill=document.getElementById("player-hp-fill"),this.hudHpText=document.getElementById("player-hp-num"),this.hudShieldFill=document.getElementById("shield-fill"),this.hudScoreEl=document.getElementById("hud-score"),this.hudKillsEl=document.getElementById("hud-kills"),this.bannerEl=document.getElementById("round-status-banner"),this.radarEl=document.getElementById("compass-radar-strip"),this.scoreboardEl=document.getElementById("fpv-scoreboard-list"),this.crosshairLock=document.getElementById("crosshair-lock"),this.crosshairDistEl=document.getElementById("crosshair-dist"),this.btnThrow=document.getElementById("btn-fpv-throw"),this.btnRecall=document.getElementById("btn-fpv-recall"),this.radarPips=[],this.radarEl){this.radarEl.innerHTML="";for(let i=0;i<4;i++){let s=document.createElement("div");s.className="radar-pip",s.style.display="none",this.radarEl.appendChild(s),this.radarPips.push(s)}}window.onLanServersListUpdated=i=>{let s=document.getElementById("discovered-servers-list");if(s){if(s.innerHTML="",i.length===0){s.innerHTML='<div style="color: #667788; padding: 10px;">Searching local network for hosts...</div>';return}for(let r of i){let o=document.createElement("div");o.className="server-item",o.innerHTML=`
                    <div>
                        <div style="font-weight: 700; color: #00f0ff;">${r.name}'s Grid Arena</div>
                        <div style="font-size: 11px; color: #8899aa;">IP: ${r.ip}:${r.port} \u2022 Players: ${r.currentPlayers}/${r.maxPlayers}</div>
                    </div>
                    <button class="btn-tron-small btn-tron" data-ip="${r.ip}">JOIN</button>
                `,o.querySelector("button").addEventListener("click",()=>{this.lan.connectToHost(r.ip,r.port),this.showLobbyScreen()}),s.appendChild(o)}}}}openHostLobby(){let t=window.AndroidBridge&&window.AndroidBridge.getLocalIp?window.AndroidBridge.getLocalIp():"127.0.0.1";this.lan.startHosting(this.username,4,this.arenaPresetKey,!0),document.getElementById("lobby-title").innerText=`HOSTING LAN SERVER (${t}:8888)`,document.getElementById("btn-lobby-start").style.display="inline-block",this.showLobbyScreen()}openJoinLobby(){this.lan.startDiscovery(),document.getElementById("modal-join-lan").style.display="flex",document.getElementById("btn-join-close").onclick=()=>{document.getElementById("modal-join-lan").style.display="none",this.lan.stopDiscovery()}}showLobbyScreen(){document.getElementById("modal-join-lan").style.display="none",this.viewMenu.style.display="none",this.viewGameOver.style.display="none",this.viewHUD.style.display="none",this.viewLobby.style.display="flex",this.gameState="lobby";let t=document.getElementById("btn-lobby-start");t&&(t.style.display=this.lan.isHost?"inline-block":"none"),this.updateLobbyPlayerList()}updateLobbyPlayerList(){let t=document.getElementById("lobby-players-list");if(!t)return;t.innerHTML="";let e=Array.from(this.lan.players.values());for(let i=0;i<4;i++){let s=e[i],r=document.createElement("div");r.className="lobby-player-card";let o=Ti[i];s?r.innerHTML=`
                    <div class="slot-badge" style="background: ${o.hex}; box-shadow: 0 0 10px ${o.hex};"></div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700; color: #fff;">${s.name} ${s.id===this.lan.localPlayerId?"(YOU)":""}</div>
                        <div style="font-size: 11px; color: ${o.hex};">SLOT ${i+1} // READY</div>
                    </div>
                `:r.innerHTML=`
                    <div class="slot-badge" style="background: #334455;"></div>
                    <div style="flex: 1; color: #667788;">SLOT ${i+1} // WAITING FOR PLAYER...</div>
                `,t.appendChild(r)}}startSoloMatch(t=3){this.lan.startSolo(t,this.arenaPresetKey),this.startGridMatch()}startGridMatch(){this.gameState="playing",this.viewMenu.style.display="none",this.viewLobby.style.display="none",this.viewGameOver.style.display="none",this.viewHUD.style.display="block",this.localKills=0,this.localScore=0,this.updateScoreHUD();let t=this.lan.localSlot||0,e=Ti[t%4];this.fpvArms.setGlowColor(e.num),this.localDisc.rimMesh.material.color.setHex(e.num),this.localDisc.light.color.setHex(e.num);let i=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)];this.playerPos.copy(i[t%4]),this.playerHp=100,this.shieldEnergy=100,this.isAlive=!0,this.fpvArms.catchDisc(),this.localDisc.catchByOwner();let s=new A().subVectors(new A(0,0,0),this.playerPos).normalize();this.controls.yaw=Math.atan2(-s.x,-s.z),this.controls.pitch=0,this.controls.updateCameraRotation(),this.setupRemoteCombatants(),this.powerupManager.clear(),Jt.startMusic(),Jt.announce("Grid Battle Initiated"),this.showBanner("FIRST-PERSON GRID BATTLE",2200),this.updateHUD()}updateScoreHUD(){this.hudScoreEl&&(this.hudScoreEl.innerText=this.localScore),this.hudKillsEl&&(this.hudKillsEl.innerText=`${this.localKills}/${this.killsToWin}`)}setupRemoteCombatants(){for(let[e,i]of this.remoteCombatants)this.scene.remove(i.character.group),this.scene.remove(i.nameLabel),i.disc.catchByOwner();this.remoteCombatants.clear();let t=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)];for(let[e,i]of this.lan.players){if(e===this.lan.localPlayerId)continue;let s=i.slot%4,r=Ti[s],o=s===1?"rinzler":s===2?"quorra":"anon",a=new Ko(this.scene,o,i.isBot);a.setSkin(o),a.group.position.copy(t[s]),a.position.copy(t[s]);let c=new Ys(this.scene,a,r.num,!1),l=document.createElement("canvas");l.width=256,l.height=64;let u=l.getContext("2d");u.fillStyle="rgba(0,0,0,0.6)",u.fillRect(0,0,256,64),u.strokeStyle=r.hex,u.lineWidth=3,u.strokeRect(2,2,252,60),u.font="bold 26px Rajdhani, sans-serif",u.fillStyle="#ffffff",u.textAlign="center",u.fillText(i.name,128,42);let d=new bs(l),h=new Si(1.6,.4),p=new Zt({map:d,transparent:!0}),_=new st(h,p);_.position.set(0,2.2,0),a.group.add(_);let M=null;i.isBot&&(this.lan.isHost||this.lan.isSolo)&&(M=new ea(a,this.localPlayer,c,null,this.arena,"hard",[this.localDisc]),this.lan.isHost&&this.lan.isConnected&&(M.onThrow=(m,f,S,R)=>{this.lan.send({type:"throw",id:e,origin:{x:Math.round(m.x*100)/100,y:Math.round(m.y*100)/100,z:Math.round(m.z*100)/100},dir:{x:Math.round(f.x*100)/100,y:Math.round(f.y*100)/100,z:Math.round(f.z*100)/100},curve:S,speedMult:R})})),this.remoteCombatants.set(e,{id:e,slot:s,name:i.name,color:r,character:a,disc:c,nameLabel:_,ai:M,targetPos:t[s].clone(),targetYaw:0,hp:100,score:0,isAlive:!0})}}throwLocalDisc(t){if(!this.localDisc||(!this.localDisc.isActive&&!this.fpvArms.hasDisc&&this.fpvArms.catchDisc(),this.localDisc.isActive))return;let e=this.controls.getLookDirection(),i=this.playerPos.clone();i.y=1.6;let s=1;this.activePowerup==="overcharge"&&(s=1.45),this.localDisc.launch(i,e,t,s),this.fpvArms.triggerThrow(),this.lan.isConnected&&this.lan.send({type:"throw",id:this.lan.localPlayerId,origin:{x:Math.round(i.x*100)/100,y:Math.round(i.y*100)/100,z:Math.round(i.z*100)/100},dir:{x:Math.round(e.x*100)/100,y:Math.round(e.y*100)/100,z:Math.round(e.z*100)/100},curve:t,speedMult:s})}triggerDash(){let t=this.controls.getForwardVector(),e=this.controls.isMoving?this.controls.worldMoveVec.clone().normalize():t;this.playerPos.addScaledVector(e,3.8),this.camera.position.x=this.playerPos.x,this.camera.position.z=this.playerPos.z,Jt.playUiClick(),window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(35)}takeDamage(t,e="Unknown"){if(this.isAlive){if(this.controls.isShielding&&this.shieldEnergy>20){this.shieldEnergy=Math.max(0,this.shieldEnergy-20),Jt.playDeflect(),window.AndroidBridge&&window.AndroidBridge.vibrateClash&&window.AndroidBridge.vibrateClash();return}this.playerHp=Math.max(0,this.playerHp-t),this.screenShake=.35,Jt.playHit(),window.AndroidBridge&&window.AndroidBridge.vibrate&&window.AndroidBridge.vibrate(90),this.updateHUD(),this.playerHp<=0&&this.derez(e)}}derez(t="Enemy",e=!0){if(this.isAlive){this.isAlive=!1,Jt.playDerez(),this.showBanner("YOU WERE DE-REZZED!",2500),Jt.announce("You were derezzed"),window.AndroidBridge&&window.AndroidBridge.vibrateDerez&&window.AndroidBridge.vibrateDerez(),e&&this.lan.isConnected&&this.lan.send({type:"derez",victimId:this.lan.localPlayerId,victimName:this.username,killerName:t});for(let[i,s]of this.remoteCombatants)if(s.name===t){if(s.score=(s.score||0)+1,s.score>=this.killsToWin){this.endMatch(s.name,!1);return}break}setTimeout(()=>{this.gameState==="playing"&&this.respawn()},3500)}}respawn(){this.playerHp=100,this.shieldEnergy=100,this.isAlive=!0,this.fpvArms.catchDisc(),this.localDisc.catchByOwner();let t=this.lan.localSlot||0,e=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)];this.playerPos.copy(e[t%4]),this.updateHUD()}handleNetMessage(t){if(t.type==="roster_sync"||t.type==="register")this.gameState==="lobby"&&this.updateLobbyPlayerList();else if(t.type==="start_match")this.arenaPresetKey=t.arena||"coliseum",this.arena.loadPreset(this.arenaPresetKey),this.startGridMatch();else if(t.type==="server_closed")this.showBanner("HOST DISCONNECTED",3e3),Jt.announce("Host disconnected. Returning to menu."),this.lan.disconnect(),this.returnToMenu();else if(t.type==="player_left"){let e=this.remoteCombatants.get(t.id);e&&(this.scene.remove(e.character.group),e.nameLabel&&this.scene.remove(e.nameLabel),this.remoteCombatants.delete(t.id),this.showKillfeed(e.name,"Disconnected")),this.gameState==="lobby"&&this.updateLobbyPlayerList()}else if(t.type==="hit")if(t.targetId===this.lan.localPlayerId)this.takeDamage(t.damage,t.attackerName);else{let e=this.remoteCombatants.get(t.targetId);e&&e.character&&e.character.takeDamage(t.damage)}else if(t.type==="pos"){let e=this.remoteCombatants.get(t.id);e&&e.character&&(e.targetPos||(e.targetPos=new A),e.targetPos.set(t.x,0,t.z),e.targetYaw=t.yaw,e.character.isShielding=!!t.shielding,e.hp=t.hp)}else if(t.type==="throw"){let e=this.remoteCombatants.get(t.id);if(e&&e.disc){let i=new A(t.origin.x,t.origin.y,t.origin.z),s=new A(t.dir.x,t.dir.y,t.dir.z);e.disc.launch(i,s,t.curve,t.speedMult)}}else if(t.type==="recall"){let e=this.remoteCombatants.get(t.id);e&&e.disc&&e.disc.recall()}else if(t.type==="derez"){if(this.showKillfeed(t.killerName,t.victimName),t.victimId===this.lan.localPlayerId)this.isAlive&&this.derez(t.killerName,!1);else{let e=this.remoteCombatants.get(t.victimId);e&&e.character&&(e.isAlive=!1,e.character.derez(),setTimeout(()=>{if(this.gameState==="playing"&&e.character){let s=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)][e.slot%4];e.character.reset(s.x,s.z,0),e.isAlive=!0,e.hp=100,e.disc.catchByOwner()}},3500))}if(t.killerName===this.username)this.localKills++,this.localScore+=150,this.updateScoreHUD(),this.localKills>=this.killsToWin&&this.endMatch(this.username,!0);else for(let[e,i]of this.remoteCombatants)if(i.name===t.killerName){i.score=(i.score||0)+1,i.score>=this.killsToWin&&this.endMatch(i.name,!1);break}}}endMatch(t,e){if(this.gameState==="match_over")return;this.gameState="match_over",e?(Jt.announce("Victory achieved. Champion of the Grid."),this.showBanner("VICTORY ACHIEVED!",3e3)):(Jt.announce("System purge. Match terminated."),this.showBanner("MATCH OVER",3e3)),this.viewHUD.style.display="none",this.viewLobby.style.display="none",this.viewMenu.style.display="none",this.viewGameOver.style.display="flex";let i=document.getElementById("gameover-title"),s=document.getElementById("gameover-subtitle");i&&(i.innerText=e?"GRID CHAMPION":"DE-REZZED",i.style.color=e?"#00f0ff":"#ff3800",i.style.textShadow=e?"0 0 16px #00f0ff, 0 0 30px rgba(0, 240, 255, 0.6)":"0 0 16px #ff3800, 0 0 30px rgba(255, 56, 0, 0.6)"),s&&(s.innerText=e?"MATCH CYCLE COMPLETE // VICTORY SECURED":`${t.toUpperCase()} HAS PURGED THE GRID`);let r=document.getElementById("go-kills"),o=document.getElementById("go-score"),a=document.getElementById("go-arena");r&&(r.innerText=this.localKills),o&&(o.innerText=this.localScore),a&&(a.innerText=this.arenaPresetKey.toUpperCase());let c=document.getElementById("lb-sync-status");c&&(c.innerText="SYNCING TO SUPABASE...",c.style.color="#ffaa00"),zh(this.username,this.localScore,this.localKills,this.arenaPresetKey).then(()=>{c&&(c.innerText="LIVE SUPABASE SYNCED",c.style.color="#00ffaa"),this.refreshLeaderboardTable("gameover-leaderboard-body")}).catch(()=>{c&&(c.innerText="OFFLINE MODE",c.style.color="#8899aa"),this.refreshLeaderboardTable("gameover-leaderboard-body")})}async refreshLeaderboardTable(t){let e=document.getElementById(t);if(e){e.innerHTML='<tr><td colspan="5" style="text-align:center; color:#667788; padding: 10px;">Connecting to Supabase Cloud...</td></tr>';try{let i=await Hh(10);if(!i||i.length===0){e.innerHTML='<tr><td colspan="5" style="text-align:center; color:#00f0ff; padding: 12px; font-weight:700;">No human contenders yet. Be the first to win!</td></tr>';return}e.innerHTML="",i.forEach((s,r)=>{let o=document.createElement("tr"),a=s.player_name&&s.player_name.toLowerCase()===this.username.toLowerCase();a&&(o.className="highlight-local");let c=r===0?"\u{1F451} #1":r===1?"\u{1F948} #2":r===2?"\u{1F949} #3":`#${r+1}`,l=(s.arena||"Coliseum").toUpperCase();o.innerHTML=`
                    <td style="color:${r<3?"#ffaa00":"#8899aa"}; font-weight:700;">${c}</td>
                    <td style="color:${a?"#00f0ff":"#ffffff"}; font-weight:700;">${s.player_name} ${a?"(YOU)":""}</td>
                    <td style="color:#00f0ff; font-family:'Orbitron',sans-serif;">${s.win_score}</td>
                    <td style="color:#ffaa00;">${s.kills||0}</td>
                    <td style="color:#8899aa; font-size:11px;">${l}</td>
                `,e.appendChild(o)})}catch{e.innerHTML='<tr><td colspan="5" style="text-align:center; color:#ff6666; padding: 10px;">Leaderboard network unreachable.</td></tr>'}}}showKillfeed(t,e){let i=document.getElementById("fpv-killfeed");if(!i)return;let s=document.createElement("div");s.className="killfeed-item",s.innerHTML=`<span style="color:#00f0ff;">${t}</span> [DISC] <span style="color:#ff3800;">${e}</span>`,i.appendChild(s),setTimeout(()=>{s.style.opacity="0",setTimeout(()=>s.remove(),400)},4e3)}updateHUD(){this.hudHpFill&&(this.hudHpFill.style.width=`${Math.max(0,this.playerHp)}%`),this.hudHpText&&(this.hudHpText.innerText=`${Math.ceil(this.playerHp)}%`),this.hudShieldFill&&(this.hudShieldFill.style.width=`${Math.max(0,this.shieldEnergy)}%`),this.btnThrow&&(this.btnThrow.style.opacity=!this.localDisc||!this.localDisc.isActive?"1.0":"0.4"),this.btnRecall&&(this.btnRecall.style.opacity=this.localDisc&&this.localDisc.isActive?"1.0":"0.4")}showBanner(t,e=2e3){this.bannerEl&&(this.bannerEl.innerText=t,this.bannerEl.style.opacity="1",this.bannerEl.style.transform="translate(-50%, -50%) scale(1)",setTimeout(()=>{this.bannerEl.style.opacity="0",this.bannerEl.style.transform="translate(-50%, -50%) scale(0.8)"},e))}returnToMenu(){this.gameState="menu",this.viewGameOver.style.display="none",this.viewLobby.style.display="none",this.viewHUD.style.display="none",this.viewMenu.style.display="flex",this.powerupManager.clear()}pause(){Jt.stopMusic()}resume(){this.lastTime=performance.now(),this.gameState==="playing"&&Jt.startMusic()}handleBackButton(){this.gameState==="playing"?this.returnToMenu():this.gameState==="lobby"?(this.lan.disconnect(),this.returnToMenu()):window.AndroidBridge&&window.AndroidBridge.exitGame&&window.AndroidBridge.exitGame()}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.min((t-this.lastTime)/1e3,.1);if(this.lastTime=t,this.gameState==="menu"||this.gameState==="lobby"){let i=t*3e-4;this.camera.position.set(Math.cos(i)*16,7,Math.sin(i)*16),this.camera.lookAt(0,1.5,0),this.renderer.render(this.scene,this.camera);return}if(this.gameState==="playing"){this.controls.update(e),this.controls.isShielding&&this.fpvArms.hasDisc?(this.shieldEnergy=Math.max(0,this.shieldEnergy-e*28),this.shieldEnergy<=0&&(this.controls.isShielding=!1)):this.shieldEnergy=Math.min(this.maxShieldEnergy,this.shieldEnergy+e*18),this.activePowerup&&(this.powerupTimer-=e,this.powerupTimer<=0&&(this.activePowerup=null,this.moveSpeed=7.8)),this.isAlive&&this.controls.isMoving?(this.playerVel.copy(this.controls.worldMoveVec).multiplyScalar(this.moveSpeed),this.playerPos.addScaledVector(this.controls.worldMoveVec,this.moveSpeed*e)):this.playerVel.set(0,0,0);let i=(this.arena.radius||17)-1.2,s=Math.sqrt(this.playerPos.x*this.playerPos.x+this.playerPos.z*this.playerPos.z);s>i&&(this.playerPos.x=this.playerPos.x/s*i,this.playerPos.z=this.playerPos.z/s*i),this.camera.position.x=this.playerPos.x,this.camera.position.z=this.playerPos.z;let r=0;this.controls.isMoving&&this.isAlive&&(r=Math.sin(t*.012)*.05),this.camera.position.y=1.72+r,this.screenShake>0&&(this.screenShake-=e*1.5,this.camera.position.x+=(Math.random()-.5)*this.screenShake,this.camera.position.y+=(Math.random()-.5)*this.screenShake),this.fpvArms.update(e,this.controls.isMoving,this.controls.isShielding),this.localPlayer.position.copy(this.playerPos),this.localDisc.update(e,this.arena,this.arena.obstacles,null),!this.localDisc.isActive&&!this.fpvArms.hasDisc&&this.fpvArms.catchDisc();let o=[];for(let[c,l]of this.remoteCombatants){if(l.ai&&l.isAlive?(l.ai.update(e),this.lan.isHost&&this.lan.isConnected&&(!l.lastNetSyncTime||t-l.lastNetSyncTime>=50)&&(l.lastNetSyncTime=t,this.lan.send({type:"pos",id:l.id,x:Math.round(l.character.position.x*100)/100,z:Math.round(l.character.position.z*100)/100,yaw:Math.round(l.character.rotationY*100)/100,pitch:0,shielding:l.character.isShielding?1:0,hp:Math.round(l.character.hp)}))):!l.ai&&l.targetPos&&(l.character.position.lerp(l.targetPos,Math.min(1,e*18)),l.character.group.position.copy(l.character.position),l.character.rotationY+=(l.targetYaw-l.character.rotationY)*Math.min(1,e*16),l.character.group.rotation.y=l.character.rotationY),l.nameLabel&&l.nameLabel.quaternion.copy(this.camera.quaternion),l.disc.update(e,this.arena,this.arena.obstacles,this.localPlayer),l.disc.isActive)for(let[u,d]of this.remoteCombatants)u!==c&&d.isAlive&&d.character.isAlive&&l.disc.owner!==d.character&&(l.disc.checkCombatantCollision(d.character),!d.character.isAlive&&d.isAlive&&(d.isAlive=!1,this.showKillfeed(l.name,d.name),l.disc.recall(),setTimeout(()=>{if(this.gameState==="playing"&&d.character){let p=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)][d.slot%4];d.character.reset(p.x,p.z,0),d.isAlive=!0,d.hp=100,d.disc.catchByOwner()}},3500)));if(this.localDisc.isActive&&this.localDisc.owner===this.localPlayer&&l.isAlive&&l.character.isAlive&&this.localDisc.position.distanceTo(new A(l.character.position.x,1.4,l.character.position.z))<1.1){let d=this.activePowerup==="overcharge"?40:25;Jt.playHit(),l.character.takeDamage(d),this.localDisc.recall(),this.lan.isConnected&&this.lan.send({type:"hit",targetId:l.id,damage:d,attackerName:this.username}),l.character.isAlive||(l.isAlive=!1,this.localKills++,this.localScore+=150,this.updateScoreHUD(),this.showKillfeed(this.username,l.name),this.lan.isConnected&&this.lan.send({type:"derez",victimId:l.id,victimName:l.name,killerName:this.username}),this.localKills>=this.killsToWin?this.endMatch(this.username,!0):setTimeout(()=>{if(this.gameState==="playing"&&l.character){let p=[new A(0,0,-11),new A(0,0,11),new A(-11,0,0),new A(11,0,0)][l.slot%4];l.character.reset(p.x,p.z,0),l.isAlive=!0,l.hp=100,l.disc.catchByOwner()}},3500))}o.push({position:l.character.position,isAlive:l.isAlive&&l.character.isAlive,slot:l.slot,name:l.name})}let a=[{position:this.playerPos,isAlive:this.isAlive,isLocal:!0},...Array.from(this.remoteCombatants.values()).map(c=>({position:c.character.position,isAlive:c.isAlive,isLocal:!1}))];this.powerupManager.update(e,a,(c,l)=>{c.isLocal&&(this.activePowerup=l.id,this.powerupTimer=l.duration,l.id==="speed"&&(this.moveSpeed=12.5),l.id==="shield"&&(this.shieldEnergy=150),l.id==="recall"&&this.localDisc.catchByOwner(),Jt.playDeflect(),this.showBanner(l.name,1800))}),this.updateCompassRadar(o),this.lan.isConnected&&(!this.lastNetSyncTime||t-this.lastNetSyncTime>=50)&&(this.lastNetSyncTime=t,this.lan.send({type:"pos",id:this.lan.localPlayerId,x:Math.round(this.playerPos.x*100)/100,z:Math.round(this.playerPos.z*100)/100,yaw:Math.round(this.controls.yaw*100)/100,pitch:Math.round(this.controls.pitch*100)/100,shielding:this.controls.isShielding?1:0,hp:Math.round(this.playerHp)})),this.updateHUD()}this.renderer.render(this.scene,this.camera)}updateCompassRadar(t){if(!this.radarEl||!this.radarPips)return;let e=this.controls.yaw,i=!1,s=0,r=0;for(let o of t){if(!o.isAlive)continue;let a=o.position.x-this.playerPos.x,c=o.position.z-this.playerPos.z,l=Math.hypot(a,c),d=Math.atan2(a,c)- -e;for(;d<-Math.PI;)d+=Math.PI*2;for(;d>Math.PI;)d-=Math.PI*2;Math.abs(d)<.22&&l<22&&(i=!0,s=l);let h=1.25;if(Math.abs(d)<h&&r<this.radarPips.length){let p=d/h*50+50,_=this.radarPips[r++],M=Ti[o.slot%4];_.style.display="block",_.style.background=M.hex,_.style.boxShadow=`0 0 8px ${M.hex}`,_.style.left=`${p}%`}}for(let o=r;o<this.radarPips.length;o++)this.radarPips[o].style.display="none";this.crosshairDistEl&&(this.crosshairDistEl.innerText=i?`${Math.round(s)}m`:"--"),this.crosshairLock&&(this.crosshairLock.style.opacity=i?"1.0":"0.2",this.crosshairLock.style.borderColor=i?"#ff3800":"#00f0ff")}};window.addEventListener("DOMContentLoaded",()=>{window.tronGame=new Ul});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
