(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articleCreate~articleEdit~articleView~home~profileIndex"],{"7eab":function(e,t,r){"use strict";r("96cf");var n=r("1da1"),a=r("d4ec"),c=r("bee2"),u=r("99de"),o=r("7e84"),i=r("262e"),s=r("9ab4"),l=r("2b0e"),p=r("6fc5"),h=r("5ed2"),m="/profiles",d=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].get("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.profile);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].post("".concat(m,"/").concat(t,"/follow"));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.profile);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].delete("".concat(m,"/").concat(t,"/follow"));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.profile);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=r("0613"),w=r("6e90"),g=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments)),e._profilesCache={},e}return Object(i["a"])(t,e),Object(c["a"])(t,[{key:"addProfileToCache",value:function(e){l["default"].set(this._profilesCache,e.username,e)}},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return r=e.sent,this.addProfileToCache(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"follow",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return r=e.sent,this.addProfileToCache(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"unFollow",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return r=e.sent,this.addProfileToCache(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"profilesCache",get:function(){return this._profilesCache}}]),t}(p["d"]);Object(s["a"])([p["c"]],g.prototype,"addProfileToCache",null),Object(s["a"])([Object(p["a"])({rawError:!0})],g.prototype,"get",null),Object(s["a"])([Object(p["a"])({rawError:!0})],g.prototype,"follow",null),Object(s["a"])([Object(p["a"])({rawError:!0})],g.prototype,"unFollow",null),g=Object(s["a"])([Object(p["b"])({dynamic:!0,namespaced:!0,store:b["a"],name:w["a"].profile})],g);t["a"]=Object(p["e"])(g)},a080:function(e,t,r){"use strict";r("4160"),r("159b"),r("96cf");var n=r("1da1"),a=r("d4ec"),c=r("bee2"),u=r("99de"),o=r("7e84"),i=r("262e"),s=r("9ab4"),l=r("2b0e"),p=r("6fc5"),h=(r("99af"),r("5ed2")),m="/articles",d=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].get(m,{params:t});case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].get("".concat(m,"/feed"),{params:t});case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].get("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.article);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].post(m,{article:t});case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.article);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].put("".concat(m,"/").concat(t),{article:r});case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.article);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].delete("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.article);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].post("".concat(m,"/").concat(t,"/comments"),{comment:r});case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.comment);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].get("".concat(m,"/").concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.comments);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].delete("".concat(m,"/").concat(t,"/comments/").concat(r));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].post("".concat(m,"/").concat(t,"/favorite"));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.article);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].delete("".concat(m,"/").concat(t,"/favorite"));case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.article);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=r("0613"),R=r("7eab"),T=r("6e90"),A=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments)),e._articlesCache={},e._commentsCache={},e}return Object(i["a"])(t,e),Object(c["a"])(t,[{key:"addArticleToCache",value:function(e){var t=this._articlesCache[e.slug];(!t||e.updatedAt>=t.updatedAt)&&l["default"].set(this._articlesCache,e.slug,e),R["a"].addProfileToCache(e.author)}},{key:"clearArticlesCache",value:function(){this._articlesCache={}}},{key:"removeArticleFromCache",value:function(e){l["default"].delete(this._articlesCache,e)}},{key:"addCommentToCache",value:function(e){this._commentsCache[e.slug]||l["default"].set(this._commentsCache,e.slug,{}),l["default"].set(this._commentsCache[e.slug],e.comment.id,e.comment),R["a"].addProfileToCache(e.comment.author)}},{key:"clearCommentsCache",value:function(){this._commentsCache={}}},{key:"removeCommentFromCache",value:function(e){l["default"].delete(this._commentsCache[e.slug],e.id)}},{key:"addMultipleCommentsToCache",value:function(e){var t=this;e.comments.forEach((function(r){return t.addCommentToCache({slug:e.slug,comment:r})}))}},{key:"addMultipleArticlesToCache",value:function(e){var t=this;e.forEach((function(e){return t.addArticleToCache(e)}))}},{key:"fetchSingle",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:r=e.sent,this.addArticleToCache(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFeed",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{limit:20,offset:0},e.next=3,f(t);case 3:return r=e.sent,this.clearArticlesCache(),this.addMultipleArticlesToCache(r.articles),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getList",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return r=e.sent,this.clearArticlesCache(),this.addMultipleArticlesToCache(r.articles),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return r=e.sent,this.addArticleToCache(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w(t.slug,t.params);case 2:return r=e.sent,this.addArticleToCache(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:this.removeArticleFromCache(t);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addToFavorites",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:r=e.sent,this.addArticleToCache(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"removeFromFavorites",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:r=e.sent,this.addArticleToCache(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"fetchComments",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:r=e.sent,this.addMultipleCommentsToCache({slug:t,comments:r});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addComment",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j(t.slug,t.params);case 2:r=e.sent,this.addCommentToCache({slug:t.slug,comment:r});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteComment",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y(t.slug,t.commentId);case 2:this.removeCommentFromCache({slug:t.slug,id:t.commentId});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"articlesCache",get:function(){return this._articlesCache}},{key:"commentsCache",get:function(){return this._commentsCache}}]),t}(p["d"]);Object(s["a"])([p["c"]],A.prototype,"addArticleToCache",null),Object(s["a"])([p["c"]],A.prototype,"clearArticlesCache",null),Object(s["a"])([p["c"]],A.prototype,"removeArticleFromCache",null),Object(s["a"])([p["c"]],A.prototype,"addCommentToCache",null),Object(s["a"])([p["c"]],A.prototype,"clearCommentsCache",null),Object(s["a"])([p["c"]],A.prototype,"removeCommentFromCache",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"addMultipleCommentsToCache",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"addMultipleArticlesToCache",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"fetchSingle",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"getFeed",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"getList",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"create",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"update",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"delete",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"addToFavorites",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"removeFromFavorites",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"fetchComments",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"addComment",null),Object(s["a"])([Object(p["a"])({rawError:!0})],A.prototype,"deleteComment",null),A=Object(s["a"])([Object(p["b"])({dynamic:!0,namespaced:!0,store:k["a"],name:T["a"].article})],A);t["a"]=Object(p["e"])(A)}}]);
//# sourceMappingURL=articleCreate~articleEdit~articleView~home~profileIndex.497cf571.js.map