(this.webpackJsonpmusicproject=this.webpackJsonpmusicproject||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"name":"Th\xea L\u01b0\u01a1ng","singer":"Ph\xfac Chinh","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1012/TheLuong-PhucChinh-6971140.mp3","image":"https://i.ytimg.com/vi/gxU-5B-nFnU/maxresdefault.jpg"},{"name":"S\xe0i G\xf2n \u0110au L\xf2ng Qu\xe1","singer":"H\u1ee9a Kim Tuy\u1ec1n, Ho\xe0ng Duy\xean","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1013/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3","image":"https://i.ytimg.com/vi/BdPk9ipvczM/maxresdefault.jpg"},{"name":"C\xe2u H\u1eb9n Th\u1ec1","singer":"\u0110\xecnh D\u0169ng, ACV","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1013/CauHenCauThe-DinhDung-6994741.mp3","image":"https://i.ytimg.com/vi/QXmn3aw-2dE/maxresdefault.jpg"},{"name":"V\xe1ch Ng\u1ecdc Ng\xe0","singer":"Anh R\u1ed3ng","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1013/VachNgocNga-AnhRong-6984991.mp3","image":"https://i.scdn.co/image/ab67616d0000b273637786fc5650a566db2d7195"},{"name":"Cafe Kh\xf4ng \u0110\u01b0\u1eddng (Ciray Remix)","singer":"JOMBIE","path":"https://dl.tainhacvip.com/wp-content/uploads/Ca-Phe-Khong-Duong-Remix-Tiktok-JOMBIE-x-TKAN-X-BEAN.mp3","image":"https://i.ytimg.com/vi/0bDkxMyfInA/sddefault.jpg"},{"name":"Tr\u1ed1m T\xecm","singer":"\u0110en V\xe2u","path":"https://data25.chiasenhac.com/download2/2172/2/2171043-de949f5d/128/Tron%20Tim%20-%20Den_%20MTV%20Band.mp3","image":"https://image.thanhnien.vn/1024/uploaded/datdt/2021_05_17/2j3a0095_erao.jpg"},{"name":"Ph\u1ed1 \u0110\xe3 L\xean \u0110\xe8n (Masew Remix)","singer":"Huy\u1ec1n T\xe2m M\xf4n","path":"https://data25.chiasenhac.com/download2/2183/2/2182207-d995845c/128/Pho%20Da%20Len%20Den%20Masew%20Remix_%20-%20Masew_%20Huy.mp3","image":"https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/07/30/0/8/e/1/1596088171189_600.jpg"},{"name":"T\u1ef1 Em \u0110a T\xecnh (Remix)","singer":"Quinn","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1016/TuEmDaTinhRemix-Quinn-7026253.mp3","image":"https://i1.sndcdn.com/artworks-JKLLOQnIN1Alge9z-2mjJbg-t500x500.jpg"},{"name":"Anh C\xf3 Mu\u1ed1n \u0110\u01b0a Em V\u1ec1 Kh\xf4ng? (Orinn EDM Remix)","singer":"Ng\xf4 Lan H\u01b0\u01a1ng","path":"https://c1-ex-swe.nixcdn.com/NhacCuaTui1016/AnhCoMuonDuaEmVeKhongOrinnEDMRemix-NgoLanHuong-7021715.mp3","image":"https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/02/12/9/2/5/0/1581490321695_600.jpg"}]')},18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(8),r=n.n(s),i=(n(18),n(2)),o=n(3),c=n(5),u=n(4),l=(n(19),n(6)),p=n(0),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"SetIsDarkTheme",value:function(){this.props.setIsDarkTheme()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"mode",children:[Object(p.jsx)("span",{className:"mode-name",children:"Light Mode:"}),Object(p.jsxs)("label",{className:"mode-switch",children:[Object(p.jsx)("input",{onClick:function(){return e.SetIsDarkTheme()},type:"checkbox",className:"mode-switch__check"}),Object(p.jsx)("span",{className:"mode-switch__slider"})]})]})}}]),n}(a.Component),m=Object(l.b)((function(e,t){return{isDarkTheme:e.isDarkTheme}}),(function(e,t){return{setIsDarkTheme:function(){e({type:"SET_ISDARKTHEME"})}}}))(h),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"player-wrapInfo",children:[Object(p.jsx)("div",{className:"player-borderImg",children:Object(p.jsx)("img",{src:this.props.currentSong.image,alt:"",className:"player-image"})}),Object(p.jsxs)("div",{className:"player-wrapSinger",children:[Object(p.jsx)("h3",{className:"player-songName",children:this.props.currentSong.name}),Object(p.jsx)("span",{className:"player-singerName",children:this.props.currentSong.singer})]})]})}}]),n}(a.Component),g=Object(l.b)((function(e,t){return{currentSong:e.currentSong,isPlaying:e.isPlaying}}),(function(e,t){return{dispatch1:function(){e()}}}))(d),j=n(9),f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"SetVolume",value:function(e){this.volumeProgress.value=e,this.props.setVolume(e)}},{key:"ChangeVolume",value:function(e,t){t?e<100&&e++:e>0&&e--,this.SetVolume(e)}},{key:"SetOnInputVolumeProgress",value:function(){var e=this.volumeProgress.value;this.SetVolume(e)}},{key:"componentDidMount",value:function(){this.rootElm=r.a.findDOMNode(this),this.volumeProgress=this.rootElm.querySelector(".player-volume__progress"),this.volumePercent=this.rootElm.querySelector(".player-volume__viewPercent")}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"player-volume",children:[Object(p.jsxs)("div",{className:"player-volume__control",children:[Object(p.jsx)("span",{onClick:function(){return e.ChangeVolume(e.props.currentVolume,!1)},className:"player-volume__down",children:"\u2796"}),Object(p.jsx)("input",{onInput:function(){return e.SetOnInputVolumeProgress()},type:"range",min:0,max:100,defaultValue:100,className:"player-volume__progress"}),Object(p.jsx)("span",{onClick:function(){return e.ChangeVolume(e.props.currentVolume,!0)},className:"player-volume__up",children:"\u2795"})]}),Object(p.jsx)("span",{className:"player-volume__viewPercent",children:"".concat(this.props.currentVolume,"%")})]})}}]),n}(a.Component),b=Object(l.b)((function(e,t){return{currentVolume:e.currentVolume}}),(function(e,t){return{setVolume:function(t){e({type:"SET_VOLUME",volume:t})}}}))(f),O=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(i.a)(this,n),a=t.call(this,e);var s=window.AudioContext||window.webkitAudioContext,r=new Audio(a.props.currentSong.path);return a.audioContext=new s,a.audioContextSrc=a.audioContext.createMediaElementSource(r),a}return Object(o.a)(n,[{key:"renderMusicWave",value:function(){var e=this.audioContext.createAnalyser(),t=this.canvasElm.getContext("2d");this.audioContextSrc.connect(e),e.connect(this.audioContext.destination),e.fftSize=256;var n,a=e.frequencyBinCount,s=new Uint8Array(a),r=this.canvasElm.offsetWidth,i=this.canvasElm.height,o=r/a*2.5,c=0;!function u(){window.requestAnimationFrame(u),c=0,e.getByteFrequencyData(s),t.fillStyle=this.props.isDarkTheme?"#2e2f34":"#dbe6f8",t.fillRect(0,0,r,i);for(var l=0;l<a;l++){n=s[l]+100;var p=l/a*50*30,h=150+l/a;t.fillStyle="rgb("+p+", "+h+", 80)",t.fillRect(c,i-n,o,n),c+=o+5}}()}},{key:"componentDidMount",value:function(){this.rootElm=r.a.findDOMNode(this),this.canvasElm=this.rootElm.querySelector(".player-wave")}},{key:"componentDidUpdate",value:function(e,t){this.props.isPlaying&&this.renderMusicWave()}},{key:"render",value:function(){return Object(p.jsx)("canvas",{className:"player-wave"})}}]),n}(a.Component),y=(Object(l.b)((function(e,t){return{currentSong:e.currentSong,isDarkTheme:e.isDarkTheme,isPlaying:e.isPlaying}}),(function(e,t){return{setIsPlaying:function(){e({type:"SET_ISPLAYING"})}}}))(O),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"SetIsplaying",value:function(){this.props.setIsPlaying()}},{key:"SetRandomSong",value:function(){var e;do{e=Math.floor(Math.random()*this.props.lengthOfSongs)}while(e===this.props.currentIndex);this.props.setSong(e)}},{key:"SetNextSong",value:function(){if(!this.props.isRepeat)if(this.props.isRandom)this.SetRandomSong();else{var e=this.props.currentIndex;++e===this.props.lengthOfSongs&&(e=0),this.props.setSong(e)}}},{key:"SetPrevSong",value:function(){if(!this.props.isRepeat)if(this.props.isRandom)this.SetRandomSong();else{var e=this.props.currentIndex;--e<0&&(e=this.props.lengthOfSongs-1),this.props.setSong(e)}}},{key:"SetRandom",value:function(){this.props.setRandom()}},{key:"SetRepeat",value:function(){this.props.setRepeat()}},{key:"SetProgressAudio",value:function(){if(this.audio.duration){var e=Math.floor(this.audio.currentTime/this.audio.duration*100);this.progressAudio.value=e;var t=parseFloat(this.audio.currentTime/60).toFixed(2);this.seekTime.textContent=t;var n=parseFloat(this.audio.duration/60).toFixed(2);this.durationTime.textContent=n}}},{key:"SetOnClickProgressAudio",value:function(){var e=this.progressAudio.value/100*this.audio.duration;this.audio.currentTime=e}},{key:"SetEndedAudio",value:function(){this.props.isRepeat?this.audio.play():this.SetNextSong()}},{key:"componentDidMount",value:function(){this.rootElm=r.a.findDOMNode(this),this.audio=this.rootElm.querySelector("#audio"),this.progressAudio=this.rootElm.querySelector("#player-progress__slider"),this.seekTime=this.rootElm.querySelector(".player-progress__time-seek"),this.durationTime=this.rootElm.querySelector(".player-progress__time-duration")}},{key:"componentDidUpdate",value:function(e,t){this.props.isPlaying?this.audio.play():this.audio.pause(),this.audio.volume=this.props.currentVolume/100}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"player-wrapControl",children:[Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"player-progress",children:[Object(p.jsxs)("div",{className:"player-progress__time",children:[Object(p.jsx)("label",{className:"player-progress__time-seek"}),Object(p.jsx)("label",{className:"player-progress__time-duration"})]}),Object(p.jsx)("input",{onInput:function(){return e.SetOnClickProgressAudio()},type:"range",id:"player-progress__slider",className:"player-progress__slider",defaultValue:0,step:1,min:0,max:100})]}),Object(p.jsx)("audio",{onTimeUpdate:function(){return e.SetProgressAudio()},onEnded:function(){return e.SetEndedAudio()},id:"audio",src:this.props.currentSong.path}),Object(p.jsxs)("div",{className:"player-control",children:[Object(p.jsx)("div",{onClick:function(){return e.SetRepeat()},className:"player-control__repeat btn ".concat(this.props.isRepeat&&"btn--active"),children:Object(p.jsx)("i",{className:"fas fa-redo"})}),Object(p.jsx)("div",{onClick:function(){return e.SetPrevSong()},className:"player-control__backward btn",children:Object(p.jsx)("i",{className:"fas fa-step-backward"})}),Object(p.jsxs)("div",{onClick:function(){return e.SetIsplaying()},className:"player-control__togglePlay btn",children:[Object(p.jsx)("i",{className:"fas fa-pause icon-pause"}),Object(p.jsx)("i",{className:"fas fa-play icon-play"})]}),Object(p.jsx)("div",{onClick:function(){return e.SetNextSong()},className:"player-control__forward btn",children:Object(p.jsx)("i",{className:"fas fa-step-forward"})}),Object(p.jsx)("div",{onClick:function(){return e.SetRandom()},className:"player-control__random btn ".concat(this.props.isRandom&&"btn--active"),children:Object(p.jsx)("i",{className:"fas fa-random"})})]})]})}}]),n}(a.Component)),x=Object(l.b)((function(e,t){var n;return n={currentIndex:e.currentIndex,currentSong:e.currentSong,currentVolume:e.currentVolume,isPlaying:e.isPlaying},Object(j.a)(n,"isPlaying",e.isPlaying),Object(j.a)(n,"isRandom",e.isRandom),Object(j.a)(n,"isRepeat",e.isRepeat),Object(j.a)(n,"lengthOfSongs",e.lengthOfSongs),n}),(function(e,t){return{setIsPlaying:function(){e({type:"SET_ISPLAYING"})},setSong:function(t){e({type:"SET_NEXT_PREV_SONG",index:t})},setRandom:function(){e({type:"SET_ISRANDOM"})},setRepeat:function(){e({type:"SET_ISREPEAT"})}}}))(y),v=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"player ".concat(this.props.isPlaying&&"playing"),children:[Object(p.jsx)("h3",{className:"player-heading",children:"playing now"}),Object(p.jsx)(g,{}),Object(p.jsx)(x,{})]})}}]),n}(a.Component),S=Object(l.b)((function(e,t){return{currentSong:e.currentSong,isPlaying:e.isPlaying}}),(function(e,t){return{dispatch1:function(){e()}}}))(v),_=n(10),N=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"SetCurrentSong",value:function(){this.props.currentIndex!==this.props.index&&this.props.setCurrentSong(this.props.index,this.props),!this.props.isPlaying&&this.props.setIsPlaying()}},{key:"renderSong",value:function(){var e=this,t=this.props.currentIndex===this.props.index;return Object(p.jsxs)("div",{onClick:function(){return e.SetCurrentSong()},className:"song ".concat(t&&"song--active"),children:[Object(p.jsx)("img",{src:this.props.image,alt:"",className:"song__thumb"}),Object(p.jsxs)("div",{className:"song__info",children:[Object(p.jsx)("h3",{className:"song__info-name",children:this.props.name}),Object(p.jsx)("p",{className:"song__info-singer",children:this.props.singer})]}),Object(p.jsxs)("div",{className:"song__effect",children:[Object(p.jsx)("div",{className:"song__effect-bar"}),Object(p.jsx)("div",{className:"song__effect-bar"}),Object(p.jsx)("div",{className:"song__effect-bar"}),Object(p.jsx)("div",{className:"song__effect-bar"}),Object(p.jsx)("div",{className:"song__effect-bar"})]})]})}},{key:"componentDidUpdate",value:function(){this.renderSong()}},{key:"render",value:function(){return this.renderSong()}}]),n}(a.Component),k=Object(l.b)((function(e,t){return{currentIndex:e.currentIndex,isPlaying:e.isPlaying}}),(function(e,t){return{setIsPlaying:function(){e({type:"SET_ISPLAYING"})},setCurrentSong:function(t,n){e({type:"SET_CURRENT_SONG",index:t,song:n})}}}))(N),T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderPlayList",value:function(){return _.map((function(e,t){return Object(p.jsx)(k,{index:t,image:e.image,name:e.name,singer:e.singer,path:e.path},t)}))}},{key:"render",value:function(){return Object(p.jsx)("section",{className:"playlist",children:this.renderPlayList()})}}]),n}(a.Component),E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("footer",{children:Object(p.jsx)("p",{style:{textAlign:"center",marginTop:"15px",fontSize:"12px",fontWeight:600,letterSpacing:"1.5px"},children:"\xa9Khanh Nghia - Practice for HTML, SCSS, JS - From F8-FullStack"})})}}]),n}(a.Component),C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"container ".concat(this.props.isDarkTheme&&"darkMode"),children:Object(p.jsxs)("div",{className:"app ".concat(this.props.isDarkTheme&&"darkMode"),children:[Object(p.jsx)(m,{}),Object(p.jsxs)("div",{className:"app-wrap",children:[Object(p.jsx)(S,{}),Object(p.jsx)(T,{})]}),Object(p.jsx)(E,{})]})})})}}]),n}(a.Component),P=Object(l.b)((function(e,t){return{isDarkTheme:e.isDarkTheme}}),(function(e,t){return{setIsDarkTheme:function(){e({type:"SET_ISDARKTHEME"})}}}))(C),R=n(7),I={currentIndex:0,currentSong:_[0],currentVolume:100,isPlaying:!1,isRandom:!1,isRepeat:!1,lengthOfSongs:_.length,isDarkTheme:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_SONG":return Object(R.a)(Object(R.a)({},e),{},{currentIndex:t.index,currentSong:t.song});case"SET_NEXT_PREV_SONG":return Object(R.a)(Object(R.a)({},e),{},{currentIndex:t.index,currentSong:_[t.index]});case"SET_ISPLAYING":return Object(R.a)(Object(R.a)({},e),{},{isPlaying:!e.isPlaying});case"SET_ISDARKTHEME":return Object(R.a)(Object(R.a)({},e),{},{isDarkTheme:!e.isDarkTheme});case"SET_ISRANDOM":return Object(R.a)(Object(R.a)({},e),{},{isRandom:!e.isRandom});case"SET_ISREPEAT":return Object(R.a)(Object(R.a)({},e),{},{isRepeat:!e.isRepeat});case"SET_VOLUME":return Object(R.a)(Object(R.a)({},e),{},{currentVolume:t.volume});default:return e}},D=n(26).createStore(w),A=D;D.subscribe((function(){console.log(JSON.stringify(D.getState()))})),r.a.render(Object(p.jsx)(l.a,{store:A,children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b41735df.chunk.js.map