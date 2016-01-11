/**
 * Created by David on 2016-01-08.
 */
function main() {
    var content = $('#content');
    var data = {
        members : [
            {
                name: "小明",
                number: "24",
                position: "上单",
                role: "球员"
            },
            {
                name: "小强",
                number: "16",
                position: "中单",
                role: "领队"
            }
        ],
        name : "梦之队",
        teamId: "12321",
        matches : [
            {
                time : "2016-05-01",
                detailTime: "9:20",
                opponent : "12322",
                location: "大连万达",
                id: "1"
            },
            {
                time : "2016-02-02",
                detailTime: "14:30",
                opponent : "32123",
                location: "大连理工大学",
                id: "2"
            }
        ]
    };
    var schedule = loadSchedule(data);

    content.append(schedule);
}

function loadSchedule(data) {
    var schedule = $(window.template.schedule({data: data}));
    schedule.data = data;

    schedule.find('.add').on('touchstart', function () {
        schedule.find('#addSchedule').show();
    });

    schedule.find('.closeSchedule').on('touchstart', function () {
        schedule.find('#addSchedule').hide();
    });

    schedule.find('.matchrow').on('touchstart', function () {
        $('.matchrow').removeClass('w3-teal');
        $(this).addClass('w3-teal');
        var id = $(this).attr("matchId");
        for (var i=0;i<data.matches.length;i++) {
            var match = data.matches[i];
            if (match.id === id) {
                break;
            }
        }
        var match = data.matches[i];
        var members = data.members;
        var detail = $(window.template.matchDetail({
            match:match,
            members:members
        }));
        detail.find('.closeDetail').on('touchstart', function () {
            detail.remove();
        });
        schedule.append(detail);
        detail.show();
    });

    return (schedule);
}

