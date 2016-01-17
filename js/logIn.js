LogIn = function () {
    var that = this;
    that.page = $(window.template.logIn());
    that.load();
    that.layout();
    return(that);
};

LogIn.prototype = {
    load : function () {
        $('#body').append(this.page);
    },
    layout: function () {
        var that = this;
        var log = that.page.siblings('#page-logIn');
        var buttons = log.find('a');
        $(buttons[0]).on('tab', function () {
            var inputs = log.find('input');
            var username = $(inputs[0]).val();
            var password = $(inputs[1]).val();
            var data = {};
            data.username = username;
            data.password = password;
            that.page.remove();
            console.log(data);
        });
    }
};
