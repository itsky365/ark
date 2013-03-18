
var PageName = 'Home';
var PageId = 'pedd7486bdb724225847cb39676d2ec91'
var PageUrl = 'Home.html'
document.title = 'Home';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u5 = document.getElementById('u5');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u7 = document.getElementById('u7');

var u2 = document.getElementById('u2');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (((GetWidgetFormText('u5')) == (PopulateVariables(''))) || ((GetWidgetFormText('u7')) == (PopulateVariables('')))) {

SetWidgetRichText('u9', PopulateVariables('<span style=" font-family:\'\\\'cb\\\'ce\\\'cc\\\'e5\'; font-size:13px;">请输入用户名或密码</span>'));

}
else
if (((GetWidgetFormText('u5')) != (PopulateVariables(''))) && ((GetWidgetFormText('u7')) != (PopulateVariables('')))) {

SetWidgetRichText('u9', PopulateVariables('<span style=" font-family:\'\\\'cb\\\'ce\\\'cc\\\'e5\'; font-size:13px;">登录成功了</span>'));

	self.location.href="Page_1.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
