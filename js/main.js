!function e(i,t,o){function n(r,s){if(!t[r]){if(!i[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(a)return a(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var m=t[r]={exports:{}};i[r][0].call(m.exports,function(e){var t=i[r][1][e];return n(t?t:e)},m,m.exports,e,i,t,o)}return t[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r]);return n}({1:[function(e,i,t){"use strict";!function(e){e.fn.turntable=function(i){function t(i){var t,o=i.length;t="scroll"===a.axis?e(window).height():"y"===a.axis?r.height():r.width();for(var n=t/o,c=0;c<i.length;c++)s[c]={min:n*c,max:n+n*c,index:c};a.reverse===!0&&(s.reverse(),e.each(s,function(e,i){i.index=e}))}var o=function(){var e=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},n=e("ul",this).children(),a=e.extend({},e.fn.turntable.defaults,i),r=e(this),s=[];!function(i){n.each(function(){e(this).append('<img src="'+e(this).data("imgSrc")+'">')})}(),e("li:first-child>img",r).load(function(){e(this).parent().addClass("active"),t(n)}),e(window).resize(function(){t(n)});var c=function(i,t){e.each(i,function(){t>=this.min&&t<=this.max&&(n.removeClass("active"),n.eq(this.index).addClass("active"))})};return"scroll"===a.axis?e(window).scroll(function(){var i;i="bottom"===a.scrollStart?r.height():"middle"===a.scrollStart?r.height()/2:0;var t=r.offset();console.log("scrollTop:",e(window).scrollTop()),console.log("scrollStart:",i);var o=t.top-(e(window).scrollTop()-i);console.log("position:",o),c(s,o)}):o()?r.on("touchmove",function(i){i.preventDefault();var t,o=e(this).offset(),n=i.originalEvent.touches[0]||i.originalEvent.changedTouches[0];t="y"===a.axis?n.pageY-o.top:n.pageX-o.left,c(s,t)}):r.on("mousemove",function(i){var t,o=e(this).offset();t="y"===a.axis?i.pageY-o.top:i.pageX-o.left,c(s,t)})},e.fn.turntable.defaults={axis:"x",reverse:!1,scrollStart:"middle"}}(jQuery)},{}]},{},[1]);
//# sourceMappingURL=main.js.map
