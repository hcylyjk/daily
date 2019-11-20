
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefine' ? module.exports = factory() :
        typeof exports === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Vue = factory());
    console.log(global);
    //console.log(factory);
    // console.log(exports);
    // console.log(module) define
}(this, function () {
    'use strict';
    var emptyObject = Object.freeze({});// console.dir(Object.freeze());//undefine  console.log(emptyObject);//返回传入的对象
    function isUndef(v) {
        return v === undefined || v === null; //->true or false
    }
    function isDef(v) {
        return v !== undefined && v !== null; //-> true or false
    }
    function isTrue(v) {
        return v === true;   //->true or false
    }
    function isFalse(v) {
        return v === false;  //->true or false
    }

    //检测数据是不是除了undefined null外的原始数据
    function isPrimitive(value) {
        return (
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'symbol' ||
            typeof value === 'boolean'
        )
    }//->return true or false

    //判断传入的是否是对象或对象是否为空
    function isObject(obj) {
        return obj !== null && typeof obj === 'object'; // ->true or false
    }

    var _toString = Object.prototype.toString;//console.dir(_toString); console.dir(Object)
    //_toString代表 f toString()
    //获取数据类型，返回number等数据类型明确知道value的类型
    function toRawType(value) {
        //console.log(_toString.call(value));
        //console.dir(Object)
        return _toString.call(value).slice(8, -1);
    }
    //console.log( toRawType({}));
    //console.dir(Array.prototype.toString);
    //console.dir(Object.prototype.toString.call([]).slice(8,-1));//string截取

    //判断是否是对象
    function isPlainObject(obj) {
        return _toString.call(obj) === '[object object]';  //->ture or false 
    }

    //判断是否是正则
    function isRegExp(v) {
        return _toString.call(v) === '[object RegExp]';
    }
    //判断是否有效的下标
    function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
    }
    //判断是否是promise对象 
    function isPromise(val) {
        //isDef判断值不能为空
        return (
            isDef(val) &&
            typeof val.then === 'function' &&
            typeof val.catch === 'function'
        )   // -> true or false
    }

    //转字符串
    function toString(val) {
        console.log({}.toString);
        return val == null
            ? ''
            : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
                ? JSON.stringify(val, null, 2)//缩进两格，并返回JSON字符串
                : String(val);
    } -
        //转成数字
        function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
        }

    function makeMap(str, expectsLowerCase) {
        var map = Object.create(null);//已经创建了一个空对象，没有原型的那种
        var list = str.split(',');//转数组
       
        for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
        }
        //console.dir(map)
        return expectsLowerCase
            ? function (val) { return map[val.toLowerCase()] }
            : function (val) { return map[val] }
    }
   
    var isBuiltInTag = makeMap('slot,component', true);// console.log(isBuiltInTag);console.dir(isBuiltInTag);

    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');//console.log(isReservedAttribute);

    //删除数组的某一个值，存在的情况,返回被删除的值
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1);
            }
        }
    }

    //判断一个对象是否有它自身的属性 var obj = {};obj.hasOwnProperty('hj');
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key) //obj.hasOwnProperty(key)// //->直接判断，true or false
    }
    //var kj = hasOwn({er:77},'jj');
    //console.log(kj);
    //    var hit = Object.create(null)['str'];
    //    console.log(hit)
    //    console.dir(hit)
    function cached(fn) {
        var cache = Object.create(null);
        return (function cachedFn(str) {
            var hit = cache[str];
            //console.log(cached[str]);
            return hit || (cache[str] = fn(str))
        })
    }


    var camelizeRE = /-(\w)/g;//\w包括字母，数字，下划线，汉字->被替换的对象
    var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
    });

    //11-5
    //首字母变大后面拼接
    var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    })
    //    console.log(capitalize('hhh'));
    //    console.log(capitalize('hhh'));


    var hyohenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
        return str.replace(hyohenateRE, '-$1').toLowerCase();
    })
    //console.log( hyphenate('hjjj'))

    //实现this的指向
    function polyfillBind(fn, ctx) {
        function boundFn(a) {
            var l = arguments.length;
            console.log(l);
            
            return l
                ? l > 1 ? fn.apply(ctx, arguments)
                        : fn.call(ctx, a)
                : fn.call(ctx)
        }
        boundFn._length = fn.length;
        console.log(boundFn._length);
        
        return boundFn;
    }
    //polyfillBind(function(a){console.log(a);console.log(this)},{b:3})(4);
    //直接指向
    function nativeBind(fn,ctx){
        return fn.bind(ctx);
    }
    // console.log(nativeBind(function(){
    //     console.log(this);
    // },[3,5,3])())

    var bind = Function.prototype.bind?nativeBind:polyfillBind;

    //转成数组
    function toArray(list,start){
        start = start || 0;
        var i = list.length - start;
        var ret = new Array(i);
        while(i--){
            ret[i] = list[i + start];
        }
        console.log(ret);
        return ret;
    }
   // toArray([2,3,4,5,6],2);
    //将对象整合到另一个对象中
   function extend(to, _form){
       //console.log(kl)
       for(var key in _form){
           console.log(key)
           //console.log(_form)
           to[key] = _form[key];
       }
       return to;
   }
   //console.log(extend({a:1,b:3},{name:'hcy',age:23}))

   function toObject(arr){
       var res = {};
       for(var i = 0; i< arr.length;i++){
           if(arr[i]){
              extend(res,arr[i])
           }
       }
       return res
   }
  // console.log(toObject([4,5,6,7]));
  function noop(a,b,c){}

  var no = function(a,b,c){return false};

  var identity = function(_){return _;}

   



}))