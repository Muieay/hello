function loadQexoFriends(e,t){var s,n=t+"/pub/friends/";document.getElementById(e).className="qexo-friends",document.getElementById(e).innerHTML='<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';try{s=new XMLHttpRequest}catch(e){try{s=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{s=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return alert("糟糕,你的浏览器不能上传文件!"),!1}}}s.open("get",n,!0),s.setRequestHeader("Content-Type","text/plain"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status){var t=JSON.parse(s.response);if(t.status){var n=t.data;document.getElementById(e).innerHTML="";for(let t=0;t<n.length;t++)document.getElementById(e).innerHTML+='<p><a target="_blank" href="'+n[t].url+'" title="'+n[t].name+'" class="qexo-friendurl"></p><div class="qexo-frienddiv"><div class="qexo-frienddivleft"><img class="qexo-myfriend" src="'+n[t].image+'"></div><div class="qexo-frienddivright"><span style="font-weight: bold;">'+n[t].name+"</span><br>"+n[t].description+"</div></div></a>"}else console.log(t.data.msg)}else console.log("友链获取失败! 网络错误")},s.send(null)}function loadSideBarFriends(e,t){var s,n=t+"/pub/friends/";for(let t=0;t<document.getElementsByClassName(e).length;t++)document.getElementsByClassName(e)[t].innerHTML='<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';document.getElementsByClassName(e)[1];try{s=new XMLHttpRequest}catch(e){try{s=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{s=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return alert("糟糕,你的浏览器不能上传文件!"),!1}}}s.open("get",n,!0),s.setRequestHeader("Content-Type","text/plain"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status){var t=JSON.parse(s.response);if(t.status){var n=t.data;for(let t=0;t<document.getElementsByClassName(e).length;t++)document.getElementsByClassName(e)[t].innerHTML="";for(let t=0;t<n.length;t++)for(let s=0;s<document.getElementsByClassName(e).length;s++)document.getElementsByClassName(e)[s].innerHTML+='<li><a class="level is-mobile is-mobile" href="'+n[t].url+'" target="_blank" rel="noopener"><span class="level-left"><span class="level-item">'+n[t].name+'</span></span><span class="level-right"><span class="level-item tag">'+n[t].url.split("/")[2]+"</span></span></a></li>"}else console.log(t.data.msg)}else console.log("友链获取失败! 网络错误")},s.send(null)}}
