!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;t.disabled=!0,e.addEventListener("click",(function(){var a=function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};n=setInterval((function(){console.log("to jest zmiana koloru:",a())}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(){console.log("stop:",clearInterval(n)),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7685ce15.js.map
