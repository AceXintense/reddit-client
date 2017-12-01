webpackJsonp([1],{AwBZ:function(t,s){},NHnr:function(t,s,e){"use strict";function a(t){e("QHF8")}function i(t){e("UJcV")}function n(t){e("eEhg")}function r(t){e("V2SU")}function c(t){e("UiJ/")}function l(t){e("AwBZ")}Object.defineProperty(s,"__esModule",{value:!0});var d=e("7+uW"),o={name:"app"},u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},v=[],g={render:u,staticRenderFns:v},h=g,p=e("VU/8"),m=a,_=p(o,h,!1,m,null,null),f=_.exports,b=e("/ocq"),C={name:"Index",data:function(){return{subreddits:[],subreddit:"Loading..",subredditLink:{},subredditSearch:"",showListing:!1,transparency:!0,settingsOpen:!1}},mounted:function(){this.getPopularSubreddits()},methods:{setSubreddit:function(t){this.subreddit=t,this.showListing=!1},clearSearch:function(){this.subredditSearch="",this.searchForSubreddits()},toggleSettings:function(t){this.settingsOpen=null===t||void 0===t?!this.settingsOpen:t},setTransparency:function(t){this.transparency=t},thumbnailURLIsValid:function(t){return/((http|https):\/\/(\S*))/g.test(t)},getPopularSubreddits:function(){var t=this;axios.get(baseURL+"/subreddits/popular.json").then(function(s){t.subreddits=s.data.data.children,t.subreddit=t.subreddits[0].data.display_name})},checkForImageInURL:function(t){return/.jpg|.png|.jpeg|.gif|.gifv/g.test(t)},closeListing:function(){this.showListing=!1},selectListing:function(t){this.showListing=!0,this.subredditLink=t},searchForSubreddits:function(){var t=this;this.subredditSearch.length>0&&axios.get(baseURL+"/subreddits/search.json?q="+this.subredditSearch).then(function(s){console.log(s),t.subreddits=s.data.data.children}),this.subredditSearch.length<=0&&this.getPopularSubreddits()}}},L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[t.settingsOpen?e("settings",{attrs:{outsideTransparency:t.transparency},on:{transparency:t.setTransparency,close:function(s){t.toggleSettings(!1)}}}):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 col-lg-3 left"},[e("div",{staticClass:"card subreddits"},[e("div",{class:{"card-header":!0,transparent:t.transparency}},[e("h1",[t._v("Subreddits")])]),t._v(" "),e("div",{staticClass:"view"},[t.subreddits.length<=0?e("loader"):t._e(),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"list-item no-highlight"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.subredditSearch,expression:"subredditSearch"}],attrs:{type:"text",placeholder:"Search Subreddits"},domProps:{value:t.subredditSearch},on:{keyup:t.searchForSubreddits,input:function(s){s.target.composing||(t.subredditSearch=s.target.value)}}}),t._v(" "),t.subredditSearch.length>0?e("button",{staticClass:"btn btn-default clear-search",on:{click:t.clearSearch}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]):t._e()]),t._v(" "),t._l(t.subreddits,function(s){return e("div",{class:{"list-item":!0,"selected-item":s.data.display_name===t.subreddit},on:{click:function(e){t.setSubreddit(s.data.display_name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[t.thumbnailURLIsValid(s.data.icon_img)?e("div",[e("img",{attrs:{src:s.data.icon_img,alt:""}})]):t._e(),t._v(" "),t.thumbnailURLIsValid(s.data.icon_img)?t._e():e("div",[e("p",{staticClass:"subreddit-no-thumbnail"},[t._v(t._s(s.data.display_name))])]),t._v(" "),s.data.over18?e("div",{staticClass:"nsfw"},[t._v("NSFW")]):t._e()]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("p",[t._v(t._s(s.data.display_name))])])])])})],2)],1)])]),t._v(" "),e("div",{staticClass:"col-md-7 col-lg-9 right"},[t.showListing?e("listing",{attrs:{transparency:t.transparency,subredditLink:t.subredditLink,subreddit:t.subreddit},on:{toggleSettings:t.toggleSettings,closeListing:t.closeListing}}):t._e(),t._v(" "),e("listing-list",{directives:[{name:"show",rawName:"v-show",value:!t.showListing,expression:"!showListing"}],attrs:{subreddit:t.subreddit,transparency:t.transparency},on:{toggleSettings:t.toggleSettings,selectedListing:t.selectListing}})],1)])],1)},y=[],w={render:L,staticRenderFns:y},S=w,k=e("VU/8"),R=i,U=k(C,S,!1,R,null,null),F=U.exports,$={data:function(){return{user:[]}},created:function(){var t=this;axios.get("https://www.reddit.com/user/AceXintense_Reloaded.json").then(function(s){console.log(s.data),t.user=s.data})}},x=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._v("\n    "+t._s(t.$route.params.username)+"\n    "),e("h1",[t._v("Posts")]),t._v(" "),e("div",{staticClass:"posts"},t._l(t.user.children,function(s){return e("div",{staticClass:"post"},[t._v("\n            "+t._s(s)+"\n        ")])}))])},V=[],I={render:x,staticRenderFns:V},T=I,E=e("VU/8"),j=E($,T,!1,null,null,null),H=j.exports;d.a.use(b.a);var M=new b.a({routes:[{path:"/",name:"Index",component:F},{path:"/user/:username",name:"User",component:H},{path:"/u/:username",name:"User",component:H}]}),P=e("mtWM"),J=e.n(P),O=e("Rf8U"),A=e.n(O),N=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"loader"})},B=[],D={render:N,staticRenderFns:B},W=D,q=e("VU/8"),Q=n,Z=q(null,W,!1,Q,null,null),X=Z.exports,Y={props:["comment"],data:function(){return{showReplies:!0}},methods:{checkCommentForLink:function(t){var s=/\[(.*)\]\(((http|https):\/\/(\S*))\)/gim,e=/\[(.*)\]\(((\S*))\)/gim;return s.test(t)&&(t=t.replace(s,'<a href="$2" target="_blank">$1</a>')),e.test(t)&&(t=t.replace(e,'<a href="'+baseURL+'$2" target="_blank">$1</a>')),t},timeConverter:function(t){var s=new Date(1e3*t),e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getFullYear(),i=e[s.getMonth()];return s.getDate()+" "+i+" "+a+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()}}},z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("p",{staticClass:"created"},[e("i",{staticClass:"fa fa-calendar-o",attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(t.timeConverter(t.comment.data.created))+"\n    ")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.checkCommentForLink(t.comment.data.body))}}),t._v(" "),e("div",{staticClass:"meta"},[e("p",{staticClass:"author"},[t._v(t._s(t.comment.data.author))]),t._v(" "),e("div",{staticClass:"up"},[e("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.comment.data.ups))])]),t._v(" "),e("div",{staticClass:"down"},[e("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.comment.data.downs))])])]),t._v(" "),t.showReplies?t._e():e("div",{staticClass:"btn btn-primary show-replies",on:{click:function(s){t.showReplies=!0}}},[t._v("Show Replies")]),t._v(" "),t.showReplies&&""!==t.comment.data.replies&&"more"!==t.comment.data.replies.data.children[0].kind?e("div",{staticClass:"replies"},[e("div",{staticClass:"btn btn-primary hide-replies",on:{click:function(s){t.showReplies=!1}}},[t._v("Hide Replies")]),t._v(" "),e("h4",[t._v("Replies")]),t._v(" "),t._l(t.comment.data.replies.data.children,function(s){return void 0!==s.data.body?e("comment",{attrs:{comment:s}}):t._e()})],2):t._e()])},G=[],K={render:z,staticRenderFns:G},tt=K,st=e("VU/8"),et=r,at=st(Y,tt,!1,et,null,null),it=at.exports,nt={created:function(){this.transparency=this.outsideTransparency},props:["outsideTransparency"],data:function(){return{transparency:!0}},methods:{transparencyToggle:function(){this.transparency=!this.transparency,this.$emit("transparency",this.transparency)},toggleClose:function(){this.$emit("close",!0)}}},rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{class:{overlay:!0,transparent:t.transparency}}),t._v(" "),e("div",{class:{card:!0,settings:!0,transparent:t.transparency}},[e("div",{class:{"card-header":!0,transparent:t.transparency}},[e("h1",[t._v("Settings")]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.toggleClose}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{staticClass:"view"},[e("p",[t._v("Transparency Effects")]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.transparencyToggle}},[t.transparency?e("span",[t._v("On")]):t._e(),t._v(" "),t.transparency?t._e():e("span",[t._v("Off")])])])])])},ct=[],lt={render:rt,staticRenderFns:ct},dt=lt,ot=e("VU/8"),ut=c,vt=ot(nt,dt,!1,ut,null,null),gt=vt.exports,ht={props:["title"],data:function(){return{}},methods:{toggleClose:function(){this.$emit("close",!0)}}},pt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{class:{overlay:!0,transparent:t.transparency}}),t._v(" "),e("div",{class:{card:!0,"card-modal":!0,transparent:t.transparency}},[e("div",{class:{"card-header":!0,transparent:t.transparency}},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.toggleClose}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{staticClass:"view"},[t._t("default")],2)])])},mt=[],_t={render:pt,staticRenderFns:mt},ft=_t,bt=e("VU/8"),Ct=l,Lt=bt(ht,ft,!1,Ct,null,null),yt=Lt.exports,wt={name:"Listing",props:["transparency","subredditLink","subreddit"],created:function(){var t=this;axios.get(baseURL+"/"+this.subredditLink.id+".json").then(function(s){t.listing=s.data[0].data.children[0].data,t.listing.selftext=t.checkListingForFormatting(t.listing.selftext),t.listing.title=t.checkListingForFormatting(t.listing.title),t.listingComments=s.data[1].data.children})},data:function(){return{listing:null,listingComments:null}},methods:{checkListingForFormatting:function(t){var s=/\[(.*)\]\(((?:http|https):\/\/\S*)\)/gim,e=/\[(.*)\]\(((\S*))\)/gim,a=/\*\*(.+?)\*\*/gim,i=/\*[\s|](.+?)\*/gim,n=/\*\s(.+)/gim,r=/r\/(.+?)\s/gim,c=/\n/gim;return a.test(t)&&(t=t.replace(a,"<b><b>$1</b></b>")),i.test(t)&&(t=t.replace(i,"<b>$1</b>")),n.test(t)&&(t=t.replace(n,"<b>- $1</b>")),r.test(t)&&(t=t.replace(r,"<b>$1</b> ")),s.test(t)&&(t=t.replace(s,'<a href="$2" target="_blank">$1</a>')),e.test(t)&&(t=t.replace(e,'<a href="'+baseURL+'$2" target="_blank">$1</a>')),c.test(t)&&(t=t.replace(c,"<br>")),t},closeListing:function(){this.$emit("closeListing")},toggleSettings:function(){this.$emit("toggleSettings")},thumbnailURLIsValid:function(t){return/((http|https):\/\/(\S*))/g.test(t)},selectSubreddit:function(t){console.log(t)},checkForImageInURL:function(t){return/.jpg|.png|.jpeg|.gif|.gifv/g.test(t)},checkURL:function(t){var s=/gifv/g;return t=t.replace(s,"gif")}}},St=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.listing?t._e():e("loader"),t._v(" "),e("div",{staticClass:"card"},[e("div",{class:{"card-header":!0,transparent:t.transparency}},[e("button",{staticClass:"btn btn-primary back",on:{click:t.closeListing}},[t._v("Back")]),t._v(" "),e("h1",[t._v(t._s(t.subreddit))]),t._v(" "),e("button",{staticClass:"btn btn-primary settings-btn",on:{click:function(s){t.toggleSettings()}}},[e("i",{staticClass:"fa fa-sliders",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.listing?e("div",{staticClass:"view"},[e("div",{staticClass:"listing"},[e("div",{staticClass:"description"},[t.checkForImageInURL(t.listing.url)?e("div",{staticClass:"image-check"},[e("a",{attrs:{href:t.listing.url,target:"_blank"}},[e("img",{attrs:{src:t.checkURL(t.listing.url),alt:""}})])]):t._e(),t._v(" "),e("h4",{domProps:{innerHTML:t._s(t.listing.title)}}),t._v(" "),t.checkForImageInURL(t.listing.url)?t._e():e("div",{staticClass:"image-check"},[e("a",{attrs:{href:t.listing.url,target:"_blank"}},[t._v("\n                            "+t._s(t.listing.url)+"\n                        ")])]),t._v(" "),e("p",{staticClass:"text-body",domProps:{innerHTML:t._s(t.listing.selftext)}}),t._v(" "),e("h5",{staticClass:"author"},[t._v(t._s(t.listing.author))]),t._v(" "),e("div",{staticClass:"meta"},[e("div",{staticClass:"up"},[e("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.listing.ups))])]),t._v(" "),e("div",{staticClass:"down"},[e("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.listing.downs))])]),t._v(" "),e("div",{staticClass:"comments"},[e("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.listing.num_comments)+" Comments")])])])]),t._v(" "),e("div",{staticClass:"comments"},t._l(t.listingComments,function(t){return e("div",{staticClass:"comment start-thread"},[e("comment",{attrs:{comment:t}})],1)}))])]):t._e()])],1)},kt=[],Rt={render:St,staticRenderFns:kt},Ut=Rt,Ft=e("VU/8"),$t=Ft(wt,Ut,!1,null,null,null),xt=$t.exports,Vt={name:"Listing-List",props:["transparency","subreddit"],data:function(){return{listings:[]}},methods:{toggleSettings:function(){this.$emit("toggleSettings")},thumbnailURLIsValid:function(t){return/((http|https):\/\/(\S*))/g.test(t)},selectListing:function(t){this.$emit("selectedListing",t)}},watch:{subreddit:function(t,s){var e=this;this.listings=null,axios.get(baseURL+"/r/"+this.subreddit+".json").then(function(t){e.listings=t.data.data.children})}}},It=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.listings?t._e():e("loader"),t._v(" "),e("div",{staticClass:"card"},[e("div",{class:{"card-header":!0,transparent:t.transparency}},[e("h1",[t._v(t._s(t.subreddit))]),t._v(" "),e("button",{staticClass:"btn btn-primary settings-btn",on:{click:function(s){t.toggleSettings()}}},[e("i",{staticClass:"fa fa-sliders",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.listings?e("div",{staticClass:"view"},[t.listings.length<=0?e("loader"):t._e(),t._v(" "),t._l(t.listings,function(s){return e("div",{staticClass:"subreddit"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[t.thumbnailURLIsValid(s.data.thumbnail)?e("div",[e("a",{attrs:{href:s.data.thumbnail,target:"_blank"}},[e("img",{attrs:{src:s.data.thumbnail,alt:""}})])]):t._e(),t._v(" "),t.thumbnailURLIsValid(s.data.thumbnail)?t._e():e("div",[e("p",{staticClass:"no-thumbnail"},[t._v("No Thumbnail")])])]),t._v(" "),e("div",{staticClass:"col-lg-8",on:{click:function(e){t.selectListing(s.data)}}},[e("p",[t._v(t._s(s.data.title))]),t._v(" "),e("p",{staticClass:"author"},[t._v(t._s(s.data.author))])]),t._v(" "),e("div",{staticClass:"col-lg-2",on:{click:function(e){t.selectListing(s.data)}}},[e("div",{staticClass:"meta"},[e("div",{staticClass:"up"},[e("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(s.data.ups))])]),t._v(" "),e("div",{staticClass:"down"},[e("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(s.data.downs))])]),t._v(" "),e("div",{staticClass:"comments"},[e("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(s.data.num_comments)+" Comments")])])])])])])})],2):t._e()])],1)},Tt=[],Et={render:It,staticRenderFns:Tt},jt=Et,Ht=e("VU/8"),Mt=Ht(Vt,jt,!1,null,null,null),Pt=Mt.exports;d.a.config.productionTip=!1,window.axios=J.a,window.baseURL="https://www.reddit.com",d.a.use(A.a,J.a),d.a.component("loader",X),d.a.component("comment",it),d.a.component("settings",gt),d.a.component("modal",yt),d.a.component("listing",xt),d.a.component("listing-list",Pt),new d.a({el:"#app",router:M,template:"<App/>",components:{App:f}})},QHF8:function(t,s){},UJcV:function(t,s){},"UiJ/":function(t,s){},V2SU:function(t,s){},eEhg:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.998b6a68d59fc56e6a74.js.map