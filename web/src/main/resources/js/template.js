(function() {
window["template"] = window["template"] || {};

window["template"]["logIn"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div data-role="page" id="page-logIn">\n    <div data-role="header">\n        <h1>登陆</h1>\n    </div>\n\n    <div data-role="main" class="ui-content">\n        <label>用户名:</label>\n        <input type="text">\n        <label>ssss:</label>\n        <input type="text">\n        <a href="#" class="ui-btn">登陆</a>\n        <a href="#page-register" class="ui-btn">注册</a>\n    </div>\n</div>\n\n<div data-role="page" id="page-register">\n    <div data-role="header">\n        <h1>注册</h1>\n    </div>\n\n    <div data-role="main" class="ui-content">\n        <label>用户名:</label>\n        <input type="text">\n        <label>密码:</label>\n        <input type="text">\n        <label>重新出入密码:</label>\n        <input type="text">\n        <label>邮箱:</label>\n        <input type="text">\n        <a href="#" class="ui-btn">确定</a>\n        <a href="#page-logIn" class="ui-btn">取消</a>\n    </div>\n</div>';

}
return __p
}})();