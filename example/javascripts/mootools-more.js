/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/more/0119174cc074dcb3c71d29e9b0ee39d9

packager build:
 - packager build More/Request.JSONP

copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/

MooTools.More={version:"1.5.0",build:"73db5e24e6e9c5c87b3a27aebef2248053f7db37"};Request.JSONP=new Class({Implements:[Chain,Events,Options],options:{onRequest:function(a){if(this.options.log&&window.console&&console.log){console.log("JSONP retrieving script with url:"+a);
}},onError:function(a){if(this.options.log&&window.console&&console.warn){console.warn("JSONP "+a+" will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs");
}},url:"",callbackKey:"callback",injectScript:document.head,data:"",link:"ignore",timeout:0,log:false},initialize:function(a){this.setOptions(a);},send:function(c){if(!Request.prototype.check.call(this,c)){return this;
}this.running=true;var d=typeOf(c);if(d=="string"||d=="element"){c={data:c};}c=Object.merge(this.options,c||{});var e=c.data;switch(typeOf(e)){case"element":e=document.id(e).toQueryString();
break;case"object":case"hash":e=Object.toQueryString(e);}var b=this.index=Request.JSONP.counter++;var f=c.url+(c.url.test("\\?")?"&":"?")+(c.callbackKey)+"=Request.JSONP.request_map.request_"+b+(e?"&"+e:"");
if(f.length>2083){this.fireEvent("error",f);}Request.JSONP.request_map["request_"+b]=function(){this.success(arguments,b);}.bind(this);var a=this.getScript(f).inject(c.injectScript);
this.fireEvent("request",[f,a]);if(c.timeout){this.timeout.delay(c.timeout,this);}return this;},getScript:function(a){if(!this.script){this.script=new Element("script",{type:"text/javascript",async:true,src:a});
}return this.script;},success:function(b,a){if(!this.running){return;}this.clear().fireEvent("complete",b).fireEvent("success",b).callChain();},cancel:function(){if(this.running){this.clear().fireEvent("cancel");
}return this;},isRunning:function(){return !!this.running;},clear:function(){this.running=false;if(this.script){this.script.destroy();this.script=null;
}return this;},timeout:function(){if(this.running){this.running=false;this.fireEvent("timeout",[this.script.get("src"),this.script]).fireEvent("failure").cancel();
}return this;}});Request.JSONP.counter=0;Request.JSONP.request_map={};
