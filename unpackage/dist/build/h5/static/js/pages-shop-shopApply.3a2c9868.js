(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shopApply"],{"13f3":function(t,i,e){"use strict";e.r(i);var a=e("51b5"),n=e("4d29");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("4610");var l=e("2877"),d=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"327d7c1f",null);i["default"]=d.exports},4610:function(t,i,e){"use strict";var a=e("610e"),n=e.n(a);n.a},"4d29":function(t,i,e){"use strict";e.r(i);var a=e("533d"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"51b5":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"入驻申请","background-color":"#fff"},on:{clickLeft:function(i){i=t.$handleEvent(i),t.back(i)}}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"row "},[e("v-uni-text",{staticClass:"tit"},[t._v("店铺名称")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"店铺名称","placeholder-class":"placeholder"},model:{value:t.form.shop_name,callback:function(i){t.$set(t.form,"shop_name",i)},expression:"form.shop_name"}})],1),e("v-uni-view",{staticClass:"row upload"},[e("v-uni-text",{staticClass:"tit"},[t._v("店铺头像")]),t.form.avatar?e("v-uni-view",{staticClass:"upload-item"},[e("v-uni-image",{staticClass:"upload-img",attrs:{src:t.form.avatar,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.previewImage(1)}}}),e("v-uni-image",{staticClass:"upload-del-btn",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==",mode:"scaleToFill"},on:{click:function(i){i=t.$handleEvent(i),t.delImage(1)}}})],1):e("v-uni-view",{staticClass:"upload-add-btn",on:{click:function(i){i=t.$handleEvent(i),t.chooseImage(1)}}})],1),e("v-uni-view",{staticClass:"row "},[e("v-uni-text",{staticClass:"tit"},[t._v("店铺地址")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"店铺地址","placeholder-class":"placeholder"},model:{value:t.form.address,callback:function(i){t.$set(t.form,"address",i)},expression:"form.address"}})],1),e("v-uni-view",{staticClass:"row "},[e("v-uni-text",{staticClass:"tit"},[t._v("店家姓名")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"店家姓名","placeholder-class":"placeholder"},model:{value:t.form.name,callback:function(i){t.$set(t.form,"name",i)},expression:"form.name"}})],1),e("v-uni-view",{staticClass:"row "},[e("v-uni-text",{staticClass:"tit"},[t._v("联系方式")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"联系方式","placeholder-class":"placeholder"},model:{value:t.form.telephone,callback:function(i){t.$set(t.form,"telephone",i)},expression:"form.telephone"}})],1),e("v-uni-view",{staticClass:"row idCard"},[e("v-uni-text",{staticClass:"tit"},[t._v("身份证件")]),e("v-uni-view",{staticClass:"idCard-content"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-text",[t._v("正面")]),t.form.face_full_photo?e("v-uni-view",{staticClass:"upload-item"},[e("v-uni-image",{staticClass:"upload-img",attrs:{src:t.form.face_full_photo,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.previewImage(2)}}}),e("v-uni-image",{staticClass:"upload-del-btn",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==",mode:"scaleToFill"},on:{click:function(i){i=t.$handleEvent(i),t.delImage(2)}}})],1):e("v-uni-view",{staticClass:"upload-add-btn",on:{click:function(i){i=t.$handleEvent(i),t.chooseImage(2)}}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",[t._v("反面")]),t.form.negative_phone?e("v-uni-view",{staticClass:"upload-item"},[e("v-uni-image",{staticClass:"upload-img",attrs:{src:t.form.negative_phone,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.previewImage(3)}}}),e("v-uni-image",{staticClass:"upload-del-btn",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==",mode:"scaleToFill"},on:{click:function(i){i=t.$handleEvent(i),t.delImage(3)}}})],1):e("v-uni-view",{staticClass:"upload-add-btn",on:{click:function(i){i=t.$handleEvent(i),t.chooseImage(3)}}})],1)],1)],1),e("v-uni-view",{staticClass:"row upload"},[e("v-uni-text",{staticClass:"tit"},[t._v("营业执照")]),t.form.business_license?e("v-uni-view",{staticClass:"upload-item"},[e("v-uni-image",{staticClass:"upload-img",attrs:{src:t.form.business_license,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.previewImage(4)}}}),e("v-uni-image",{staticClass:"upload-del-btn",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==",mode:"scaleToFill"},on:{click:function(i){i=t.$handleEvent(i),t.delImage(4)}}})],1):e("v-uni-view",{staticClass:"upload-add-btn",on:{click:function(i){i=t.$handleEvent(i),t.chooseImage(4)}}})],1),e("v-uni-view",{staticClass:"row "},[e("v-uni-text",{staticClass:"tit"},[t._v("保证金")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",disabled:"true","placeholder-class":"placeholder"},model:{value:t.bound,callback:function(i){t.bound=i},expression:"bound"}})],1),e("v-uni-button",{staticClass:"add-btn",on:{click:function(i){i=t.$handleEvent(i),t.confirm(i)}}},[t._v("完成")])],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"533d":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("7f7f");var n=a(e("795b"));e("ac6a"),e("5df3");var o=a(e("b2cb")),l=a(e("30f9")),d=e("58cf"),c={components:{uniIcons:o.default,uniNavBar:l.default},data:function(){return{form:{shop_name:"",avatar:"",address:"",name:"",telephone:"",face_full_photo:"",negative_phone:"",business_license:""},bound:"",baseUrl:(0,d.processUrl)()}},onLoad:function(){this.init()},methods:{back:function(){uni.navigateBack({delta:1})},init:function(){return n.default.all([this.getBond()])},getBond:function(){var t=this;this.$http.get("shop.shopBond").then(function(i){console.log(i),t.bound=i.data.bound})},chooseImage:function(t){var i=this;console.log(t),uni.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(e){var a=e.tempFiles[0].size/1e3/1024,n=!1;if(a>4&&(uni.showToast({title:"上传的图片不能大于4M",icon:"none",duration:2e3}),n=!0),n)return!1;var o=e.tempFilePaths;uni.showLoading({title:"请稍后..",mask:!0}),uni.uploadFile({url:i.baseUrl+"/addons/xshop/vendor/upload",filePath:o[0],name:"file",success:function(e){uni.hideLoading();var a=JSON.parse(e.data);1==t?i.form.avatar=a.data.url:2==t?i.form.face_full_photo=a.data.url:3==t?i.form.negative_phone=a.data.url:i.form.business_license=a.data.url,console.log(i.form.avatar)},fail:function(t){uni.hideLoading(),uni.showToast({title:"上传失败",icon:"none",duration:2e3})}})}})},previewImage:function(t){var i=[];1==t?i.push(this.form.avatar):2==t?i.push(this.form.face_full_photo):3==t?i.push(this.form.negative_phone):i.push(this.form.business_license),uni.previewImage({urls:i})},delImage:function(t){var i=this;uni.showModal({content:"确定要放弃这张图片么？",success:function(e){e.confirm&&(1==t?i.form.avatar="":2==t?i.form.face_full_photo="":3==t?i.form.negative_phone="":i.form.business_license="")}})},confirm:function(){return""==this.form.shop_name?(uni.showToast({title:"店铺名称不能为空",icon:"none",duration:2e3}),!1):""==this.form.avatar?(uni.showToast({title:"店铺头像不能为空",icon:"none",duration:2e3}),!1):""==this.form.address?(uni.showToast({title:"店铺地址不能为空",icon:"none",duration:2e3}),!1):""==this.form.name?(uni.showToast({title:"店家姓名不能为空",icon:"none",duration:2e3}),!1):""==this.form.telephone?(uni.showToast({title:"联系方式不能为空",icon:"none",duration:2e3}),!1):""==this.form.face_full_photo?(uni.showToast({title:"身份证正面照片不能为空",icon:"none",duration:2e3}),!1):""==this.form.negative_phone?(uni.showToast({title:"身份证反面照片为空",icon:"none",duration:2e3}),!1):""==this.form.business_license?(uni.showToast({title:"营业执照不能为空",icon:"none",duration:2e3}),!1):void this.$http.post("shop.shop_apply",this.form).then(function(t){1==t.code?uni.navigateTo({url:"/pages/shop/applySuccess"}):uni.showToast({title:"提交失败",icon:"none",duration:2e3})})}}};i.default=c},"58cf":function(t,i,e){"use strict";function a(){return"http://ly1.wuhanlst.com"}Object.defineProperty(i,"__esModule",{value:!0}),i.processUrl=a},"5df3":function(t,i,e){"use strict";var a=e("02f4")(!0);e("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=a(i,e),this._i+=t.length,{value:t,done:!1})})},"610e":function(t,i,e){var a=e("b784");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1365bb6c",a,!0,{sourceMap:!1,shadowMode:!1})},b784:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-327d7c1f]{background:#f8f8f8;font-size:%?28?%}.content[data-v-327d7c1f]{border-top:%?2?% solid #ebeef5;background:#fff;padding-bottom:%?20?%}.content .upload[data-v-327d7c1f]{margin:%?20?% 0;height:%?250?%!important}.content .idCard[data-v-327d7c1f]{margin:%?20?% 0;height:%?700?%!important}.content .idCard .idCard-content[data-v-327d7c1f]{height:100%;width:100%}.content .idCard .idCard-content .item[data-v-327d7c1f]{height:40%;width:100%}.content .idCard .idCard-content .item uni-text[data-v-327d7c1f]{font-size:%?24?%;color:#666}.content .idCard .idCard-content .item .upload-add-btn[data-v-327d7c1f]{position:relative;float:left;width:100%;height:100%;margin-bottom:%?20?%;z-index:99;border-radius:%?8?%;background:#fff;border:%?2?% solid #ebeef5;margin:%?10?% 0}.content .idCard .idCard-content .item .upload-add-btn[data-v-327d7c1f]:after,.content .idCard .idCard-content .item .upload-add-btn[data-v-327d7c1f]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?4?%;height:%?60?%;background-color:#d6d6d6}.content .idCard .idCard-content .item .upload-add-btn[data-v-327d7c1f]:after{width:%?60?%;height:%?4?%}.content .idCard .idCard-content .item .upload-add-btn[data-v-327d7c1f]:active{background-color:#f7f7f7}.content .idCard .idCard-content .item .upload-item[data-v-327d7c1f]{position:relative;float:left;width:100%;height:100%}.content .idCard .idCard-content .item .upload-item[data-v-327d7c1f]:nth-child(4n){margin-right:0}.content .idCard .idCard-content .item .upload-item .upload-img[data-v-327d7c1f]{width:100%;height:100%;border-radius:%?8?%}.content .idCard .idCard-content .item .upload-item .upload-del-btn[data-v-327d7c1f]{position:absolute;right:%?-16?%;top:%?-14?%;width:%?60?%;height:%?60?%;border:%?4?% solid #fff;border-radius:100px}.content .idCard .idCard-content .item .upload-item .upload-progress[data-v-327d7c1f]{position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;font-size:%?24?%;border-radius:%?8?%}.content .row[data-v-327d7c1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.content .row .upload-add-btn[data-v-327d7c1f]{position:relative;float:left;width:100%;height:100%;margin-bottom:%?20?%;z-index:99;border-radius:%?8?%;background:#fff;border:%?2?% solid #ebeef5;margin:%?30?% 0}.content .row .upload-add-btn[data-v-327d7c1f]:after,.content .row .upload-add-btn[data-v-327d7c1f]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?4?%;height:%?60?%;background-color:#d6d6d6}.content .row .upload-add-btn[data-v-327d7c1f]:after{width:%?60?%;height:%?4?%}.content .row .upload-add-btn[data-v-327d7c1f]:active{background-color:#f7f7f7}.content .row .upload-item[data-v-327d7c1f]{position:relative;float:left;width:100%;height:100%}.content .row .upload-item[data-v-327d7c1f]:nth-child(4n){margin-right:0}.content .row .upload-item .upload-img[data-v-327d7c1f]{width:100%;height:100%;border-radius:%?8?%}.content .row .upload-item .upload-del-btn[data-v-327d7c1f]{position:absolute;right:%?-16?%;top:%?-14?%;width:%?60?%;height:%?60?%;border:%?4?% solid #fff;border-radius:100px}.content .row .upload-item .upload-progress[data-v-327d7c1f]{position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,.4);color:#fff;font-size:%?24?%;border-radius:%?8?%}.content .row .tit[data-v-327d7c1f]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?180?%;font-size:%?30?%;color:#606266}.content .row .address-box[data-v-327d7c1f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.content .row .input[data-v-327d7c1f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#303133;height:%?80?%;padding-left:%?10?%;border:%?2?% solid #e4e7ed}.content .row .icon-shouhuodizhi[data-v-327d7c1f]{font-size:%?36?%;color:#909399}.content .row uni-radio-group[data-v-327d7c1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .row uni-radio-group .uni-list-cell[data-v-327d7c1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?30?%;margin-right:%?20?%}.content .row .uni-list[data-v-327d7c1f]{font-size:%?30?%}.content .add-btn[data-v-327d7c1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#ff3600;border-radius:%?10?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-327d7c1f]{background:#f8f8f8}',""])}}]);