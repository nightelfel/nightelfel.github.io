(function() {
window["template"] = window["template"] || {};

window["template"]["login"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div data-role="page" id="main">\n    <div data-role="header" data-position="fixed">\n        <h1>登陆!</h1>\n    </div>\n\n    <div data-role="main" class="ui-content">\n        <label for="username">用户名:</label>\n        <input type="text" name="username" id="username">\n        <label for="password">密码:</label>\n        <input type="text" name="password" id="password">\n        <div data-role="controlgroup" data-type="horizontal" style="text-align:center">\n            <a class="ui-btn ui-btn-inline ui-mini">确认</a>\n            <a href="#register" data-transition="slide" class="ui-btn ui-btn-inline ui-mini">注册</a>\n        </div>\n    </div>\n</div>\n\n<div data-role="page" id="register">\n    <div data-role="header" data-position="fixed">\n        <h1>注册</h1>\n    </div>\n    <div data-role="main" class="ui-content">\n        <label for="username">用户名:</label>\n        <input type="text" name="username" id="name">\n        <label for="password">密码:</label>\n        <input type="text" name="password" id="word">\n        <label for="realname">真实姓名:</label>\n        <input type="text" name="realname" id="realname">\n        <label for="phone">用户电话:</label>\n        <input type="text" name="phone" id="phone">\n        <label for="email">Email:</label>\n        <input type="text" name="email" id="email">\n        <label for="age">年龄:</label>\n        <input type="text" name="age" id="age">\n        <div data-role="controlgroup" data-type="horizontal" style="text-align:center">\n            <a href="#registerSucc" data-position-to="window" data-rel="popup" class="ui-btn ui-btn-inline ui-mini">确认</a>\n        </div>\n    </div>\n\n    <div data-role="popup" id="registerSucc" class="ui-grid-a">\n        <div class="ui-content">注册成功!</div>\n        <div data-role="controlgroup" style="text-align:center">\n            <a href="#main" data-transition="slide" class="ui-btn ui-btn-inline ui-mini">返回</a>\n        </div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {
window["template"] = window["template"] || {};

window["template"]["matchDetail"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="w3-modal detail">\n    <div class="w3-modal-content w3-animate-top w3-card-24">\n        <header class="w3-container w3-teal">\n            <h4 class="w3-closebtn closeDetail"><i class="fa fa-close"></i></h4>\n            <h4>比赛详情</h4>\n        </header>\n        <div class="w3-container" style="overflow-y:scroll">\n            <p>' +
((__t = (match.time)) == null ? '' : __t) +
' VS ' +
((__t = (match.opponent)) == null ? '' : __t) +
'</p>\n            <p>具体时间: ' +
((__t = (match.detailTime)) == null ? '' : __t) +
'</p>\n            <p>具体地点: ' +
((__t = (match.location)) == null ? '' : __t) +
'</p>\n            <table class="w3-table w3-striped w3-small" style="overflow-y:scroll">\n                <tr>\n                    <th>姓名</th>\n                    <th>出席</th>\n                </tr>\n                ';
 _.each(members, function(member) {;
__p += '\n                <tr class="matchrow" matchId="' +
((__t = (match.id)) == null ? '' : __t) +
'">\n                    <td>' +
((__t = (member.name)) == null ? '' : __t) +
'</td>\n                    <td>是</td>\n                </tr>\n                ';
 }); ;
__p += '\n            </table>\n        </div>\n        <div class="w3-container">\n            <p>\n                <label>是否出席</label>\n                <input class="w3-check" type="checkbox">\n            </p>\n        </div>\n        <footer class="w3-container w3-teal w3-center">\n            <h6><button class="w3-btn w3-teal" style="width:100%">确认</button></h6>\n        </footer>\n    </div>\n</div>';

}
return __p
}})();
(function() {
window["template"] = window["template"] || {};

window["template"]["schedule"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n    <div class="w3-container w3-teal">\n        <header class="w3-container w3-center">\n            <h4>' +
((__t = (data.name)) == null ? '' : __t) +
'</h4>\n        </header>\n    </div>\n    <table class="w3-table w3-striped w3-small" style="overflow-y:scroll">\n        <tr>\n            <th>时间</th>\n            <th>对手队</th>\n        </tr>\n        ';
 _.each(data.matches, function(match) {;
__p += '\n        <tr class="matchrow" matchId="' +
((__t = (match.id)) == null ? '' : __t) +
'">\n            <td>' +
((__t = (match.time)) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = (match.opponent)) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 }); ;
__p += '\n    </table>\n    <footer class="w3-bottom w3-container w3-teal">\n        <button class="add w3-btn w3-teal">\n            <h6>添加赛程</h6>\n        </button>\n        <button class="w3-btn w3-teal">\n            <h6>返回</h6>\n        </button>\n    </footer>\n\n    <div id="addSchedule" class="w3-modal">\n        <div class="w3-modal-content w3-animate-top w3-card-24">\n            <header class="w3-container w3-teal">\n                <h4 class="w3-closebtn closeSchedule"><i class="fa fa-close"></i></h4>\n                <h4>添加赛程</h4>\n            </header>\n            <div class="w3-container" style="overflow-y:scroll">\n                <p>\n                    <label>比赛时间</label>\n                    <input class="w3-input" type="text">\n                </p>\n                <p>\n                    <label>比赛对手</label>\n                    <input class="w3-input" type="text">\n                </p>\n                <p>\n                    <label>比赛场地</label>\n                    <input class="w3-input" type="text">\n                </p>\n                <p>\n                    <input class="w3-check" type="checkbox">\n                    <label class="w3-validate">推送通知给其他队员</label>\n                </p>\n            </div>\n            <footer class="w3-container w3-teal w3-center">\n                <h6><button class="w3-btn w3-teal" style="width:100%">确认</button></h6>\n            </footer>\n        </div>\n    </div>\n</div>';

}
return __p
}})();
(function() {
window["template"] = window["template"] || {};

window["template"]["team"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="w3-container w3-teal">\n    <header class="w3-container w3-center">\n        <h4>' +
((__t = (data.name)) == null ? '' : __t) +
'</h4>\n    </header>\n</div>\n<table class="w3-table w3-striped">\n    <tr>\n        <th>号码</th>\n        <th>姓名</th>\n        <th>位置</th>\n        <th>身份</th>\n    </tr>\n    ';
 _.each(data.members, function(member) {;
__p += '\n    <tr>\n        <td>' +
((__t = (member.name)) == null ? '' : __t) +
'</td>\n        <td>' +
((__t = (member.number)) == null ? '' : __t) +
'</td>\n        <td>' +
((__t = (member.position)) == null ? '' : __t) +
'</td>\n        <td>' +
((__t = (member.role)) == null ? '' : __t) +
'</td>\n    </tr>\n    ';
 }); ;
__p += '\n</table>\n<footer class="w3-bottom w3-container w3-teal">\n    <button class="w3-btn w3-teal">\n        <h6>球队首发</h6>\n    </button><button class="w3-btn w3-teal">\n        <h6>比赛赛程</h6>\n    </button>\n</footer>';

}
return __p
}})();