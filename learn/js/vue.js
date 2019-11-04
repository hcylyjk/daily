
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
    function isPromise(val){
        //isDef判断值不能为空
        return (
            isDef(val) &&
            typeof val.then === 'function' &&
            typeof val.catch === 'function'
        )   // -> true or false
    }

    //转字符串
    function toString(val){
        console.log({}.toString);
        return val == null
        ? ''
        :Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val,null,2)//缩进两格，并返回JSON字符串
        : String(val);
    }-
    //转成数字
    function toNumber(val){
        var n = parseFloat(val);
        return isNaN(n) ? val : n;
    }
   
    function makeMap(str,expectsLowerCase){
        var map = Object.create(null);//已经创建了一个空对象，没有原型的那种
        var list = str.split(',');//转数组
        for(var i = 0; i< list.length; i++){
            map[list[i]]=true;
        }
        //console.dir(map)
        return expectsLowerCase
        ?function(val){return map[val.toLowerCase()]}
        :function(val){return map[val]}
    }

    var isBuiltInTag = makeMap('slot,component',true);// console.log(isBuiltInTag);console.dir(isBuiltInTag);
    
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');//console.log(isReservedAttribute);
    
    //删除数组的某一个值，存在的情况,返回被删除的值
    function remove(arr,item){
        if(arr.length){
            var index= arr.indexOf(item);
            if(index>-1){
                return arr.splice(index,1);
            }
        }
    }
   
    //判断一个对象是否有它自身的属性 var obj = {};obj.hasOwnProperty('hj');
   var hasOwnProperty = Object.prototype.hasOwnProperty;
   function hasOwn(obj,key){
       return  hasOwnProperty.call(obj,key) //obj.hasOwnProperty(key)// //->直接判断，true or false
   }
   //var kj = hasOwn({er:77},'jj');
   //console.log(kj);
 //    var hit = Object.create(null)['str'];
 //    console.log(hit)
//    console.dir(hit)
   function cached(fn){
       var cache = Object.create(null);
       return (function cachedFn(str){
           var hit = cache[str];
           return hit || (cache[str] = fn(str))
       })
   }


   var camelizeRE = /-(\w)/g;//\w包括字母，数字，下划线，汉字
   var camelize = cached(function(str){
        return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';})
   })

}))