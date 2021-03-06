var CARD = function () {

    'use strict';

    var initAjaxToken = function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            statusCode: {
                500: function () {
                    return;
                }
            }
        });
    };


    return {
        init: function () {
            initAjaxToken();
        },
        alert: function (response) {
            return noty({
                text: response.text,
                type: response.type,
                theme: 'relax',
                layout: 'topRight',
                timeout: 5000,
                animation: {
                    open: 'animated bounceInRight',
                    close: 'animated bounceOutUp'
                }
            });
        }
    }
}();
var socket = io.connect(':7777', {secure: true});
socket
    .on('connect', function () {
        $('#loader').hide();
    })
    .on('disconnect', function () {
        $('#loader').show();
    })
    .on('online', function (data) {
        $('#online').text(Math.abs(data));
    })
    .on('stats', function (data) {
        $('.cardals').text(data.maxgame);
        $('.maxuser').text(data.maxuser);
        $('.maxcovert').text(data.maxcovert);
        $('.maxknife').text(data.maxknife);
    })
    .on('infocase', function (data) {
        for (var i = 0; i < data.length; i++) {
            var cases = data[i];

            if (cases.counstitem > 2) {
                $('.bilets').find('#case_' + cases.id + ' .details.close').css("opacity", "0");
                $('.bilets').find('#case_' + cases.id + ' .details.open').css("opacity", "1");
            } else {
                $('.bilets').find('#case_' + cases.id + ' .details.close').css("opacity", "1");
                $('.bilets').find('#case_' + cases.id + ' .details.open').css("opacity", "0");
            }
        }


    })
    .on('chatdel', function (data) {
        info = JSON.parse(data);
        $('#chatm_' + info.time2).remove();
    })
    .on('chat', function (data) {
        msg = JSON.parse(data);
        var chat = $('.chat .inbox');
        var messages = msg.messages;
        messages = messages.replace(":)", "<img style='background-position: 0px 0px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":-d", "<img style='background-position: 0px -17px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(";-)", "<img style='background-position: 0px -34px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("xd", "<img style='background-position: 0px -51px' id=smile src='/images/chat/white.gif'>");
        messages = messages.replace(";-p", "<img style='background-position: 0px -68px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":-p", "<img style='background-position: 0px -85px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("8-)", "<img style='background-position: 0px -102px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("b-)", "<img style='background-position: 0px -119px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":-(", "<img style='background-position: 0px -136px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(";-]", "<img style='background-position: 0px -153px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("u—(", "<img style='background-position: 0px -170px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":l(", "<img style='background-position: 0px -187px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":_(", "<img style='background-position: 0px -204px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":((", "<img style='background-position: 0px -221px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":o", "<img style='background-position: 0px -238px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":|", "<img style='background-position: 0px -255px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("3-)", "<img style='background-position: 0px -272px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("o*)", "<img style='background-position: 0px -323px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(";o", "<img style='background-position: 0px -340px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("8o", "<img style='background-position: 0px -374px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("8|", "<img style='background-position: 0px -357px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":x", "<img style='background-position: 0px -391px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("*3", "<img style='background-position: 0px -442px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":-*", "<img style='background-position: 0px -409px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace("}^)", "<img style='background-position: 0px -425px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(">((", "<img style='background-position: 0px -306px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(">(", "<img style='background-position: 0px -289px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":like:", "<img style='background-position: 0px -459px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":dislike:", "<img style='background-position: 0px -476px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":u:", "<img style='background-position: 0px -493px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":v:", "<img style='background-position: 0px -510px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":kk:", "<img style='background-position: 0px -527px' id=smile src=/images/chat/white.gif>");
        messages = messages.replace(":sm1:", "<img style='background:none;' id=smile src=/images/chat/D83DDC4F.png>");
        messages = messages.replace(":sm2:", "<img style='background:none;' id=smile src=/images/chat/D83DDC4A.png>");
        messages = messages.replace(":sm3:", "<img style='background:none;' id=smile src=/images/chat/270B.png>");
        messages = messages.replace(":sm4:", "<img style='background:none;' id=smile src=/images/chat/D83DDE4F.png>");
        messages = messages.replace(":sm5:", "<img style='background:none;' id=smile src=/images/chat/D83DDC43.png>");
        messages = messages.replace(":sm6:", "<img style='background:none;' id=smile src=/images/chat/D83DDC46.png>");
        messages = messages.replace(":sm7:", "<img style='background:none;' id=smile src=/images/chat/D83DDC47.png>");
        messages = messages.replace(":sm8:", "<img style='background:none;' id=smile src=/images/chat/D83DDC48.png>");
        messages = messages.replace(":sm9:", "<img style='background:none;' id=smile src=/images/chat/D83DDCAA.png>");
        messages = messages.replace(":sm10:", "<img style='background:none;' id=smile src=/images/chat/D83DDC42.png>");
        messages = messages.replace(":sm11:", "<img style='background:none;' id=smile src=/images/chat/D83DDC8B.png>");
        messages = messages.replace(":sm12:", "<img style='background:none;' id=smile src=/images/chat/D83DDCA9.png>");
        messages = messages.replace(":sm13:", "<img style='background:none;' id=smile src=/images/chat/2744.png>");
        messages = messages.replace(":sm14:", "<img style='background:none;' id=smile src=/images/chat/D83CDF77.png>");
        messages = messages.replace(":sm15:", "<img style='background:none;' id=smile src=/images/chat/D83CDF78.png>");
        messages = messages.replace(":sm16:", "<img style='background:none;' id=smile src=/images/chat/D83CDF85.png>");
        messages = messages.replace(":sm17:", "<img style='background:none;' id=smile src=/images/chat/D83DDCA6.png>");
        messages = messages.replace(":sm18:", "<img style='background:none;' id=smile src=/images/chat/D83DDC7A.png>");
        messages = messages.replace(":sm19:", "<img style='background:none;' id=smile src=/images/chat/D83DDC28.png>");
        messages = messages.replace(":sm20:", "<img style='background:none;' id=smile src=/images/chat/D83CDF4C.png>");
        messages = messages.replace(":sm21:", "<img style='background:none;' id=smile src=/images/chat/D83CDFC6.png>");
        messages = messages.replace(":sm22:", "<img style='background:none;' id=smile src=/images/chat/D83CDFB2.png>");
        messages = messages.replace(":sm23:", "<img style='background:none;' id=smile src=/images/chat/D83CDF7A.png>");
        messages = messages.replace(":sm24:", "<img style='background:none;' id=smile src=/images/chat/D83CDF7B.png>");
        var urls = '/user/' + msg.userid;
        if (msg.admin || msg.support) {
            var urls = '#';
        }
        var style = '';
        if (!admin) {
            var style = 'style="display:none"';
        }
        chat.find('.wrapper-messages').append(
            '  <div class="short" id="chatm_' + msg.time2 + '">' +
            '<div class="top">' +
            '<div class="avatar"><a onClick="Page.Go(this.href); return false;" href="' + urls + '"><img src="' + msg.avatar + '" alt=""></a></div>' +
            '<a href="#" onclick="var u = $(this); $(\'#chatInput\').val(u.text() + \', \'); return false;" class="name">' + replaceLogin(msg.username) + '</a>' +
            '<div class="date">' + msg.time + ' <a class="admin_controls" ' + style + ' data-time="' + msg.time2 + '"  data-chat="' + msg.messages + '" data-chat-username="' + msg.username + '">[x]</a></div>' +
            '</div>' +
            '<div class="message">' + messages + '</div>' +
            '</div>');
        chatdelet();


    })
    .on('new.winner', function (data) {
        data = JSON.parse(data);
        var lastWinners = $('#lastWinners')

        var el = $(
            ' <a href="/user/' + data.user_id + '" onclick="Page.Go(this.href); return false;" class="item-history block ' + data.type + '" title="' + replaceLogin(data.userName) + '">' +
            '<img src="' + data.caseimage + '" alt="milspec" class="case-image" style="opacity: 0;">' +
            '<img  class="drop-image" src="//steamcommunity-a.akamaihd.net/economy/image/class/730/' + data.classid + '/56fx42f" alt="" title="">' +
            '<div>' + data.firstName + '</div>' +
            '</a>'
        )

        function getRandomArbitary(min, max) {
            return Math.random() * (max - min) + min;
        }

        var stavka = new Audio();
        stavka.src = '/sounds/roulette-start-' + Math.round(getRandomArbitary(1, 11)) + '.mp3';
        stavka.volume = 0.1;
        stavka.play();
        el.hide().addClass('item' + data.id);
        lastWinners.prepend(el)
        el.fadeIn(1000)
        caseitem();

        lastWinners.find("a:nth-of-type(9)").remove();

    })


function makeTabs(contId) {
    var tabContainers = $('#' + contId + ' div.tabs > .tab');
    tabContainers.hide().filter(':first').show();

    $('body').on('click', '#' + contId + ' div.tabs div.buttons a', function (e) {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('#' + contId + ' div.tabs div.buttons a').removeClass('active');
        $(this).addClass('active');
        return false
    }).filter(':first').click()
}


$('body').ready(function () {

    makeTabs('tabs-1');
    makeTabs('tabs-2');
    makeTabs('tabs-3');
    makeTabs('tabs-4');
    makeTabs('tabs-5');

    $('body').on('click', '#closeticket', function (e) {
        if ($('#supportid').val() != undefined) {
            $.post('/newticket', {
                type: 'close',
                id: $('#supportid').val()
            }, function (data) {

                if (!data.success) {
                    noty({
                        text: '<div><div><strong>Error</strong><br>' + data.errors + '</div></div>',
                        layout: 'topRight',
                        type: 'error',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });
                } else {
                    noty({
                        text: '<div><div><strong>Success</strong><br>' + data.success + '</div></div>',
                        layout: 'topRight',
                        type: 'success',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });

                    $('.support .ticket .right a').text('Ticket closed');


                }

            });
        }
    });


    $('body').on('click', '.support input[type="submit"]', function (e) {
        if ($('#supportid').val() != undefined) {
            $.post('/newticket', {
                id: $('#supportid').val(),
                messages: $('.support textarea').val()
            }, function (data) {

                if (!data.success) {
                    noty({
                        text: '<div><div><strong>Error</strong><br>' + data.errors + '</div></div>',
                        layout: 'topRight',
                        type: 'error',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });
                } else {
                    noty({
                        text: '<div><div><strong>Success</strong><br>' + data.success + '</div></div>',
                        layout: 'topRight',
                        type: 'success',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });


                    $('#ticket').append(data.html);

                }

            });
        }
    });

    $('body').on('click', '.support input[type="submit"]', function (e) {
        if ($('#supportid').val() == undefined) {
            $.post('/newticket', {
                thread: $('.support input[type="text"]').val(),
                messages: $('.support textarea').val()
            }, function (data) {

                if (!data.success) {
                    noty({
                        text: '<div><div><strong>Error</strong><br>' + data.errors + '</div></div>',
                        layout: 'topRight',
                        type: 'error',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });
                } else {
                    noty({
                        text: '<div><div><strong>Success</strong><br>' + data.success + '</div></div>',
                        layout: 'topRight',
                        type: 'success',
                        theme: 'relax',
                        timeout: 8000,
                        closeWith: ['click'],
                        animation: {
                            open: 'animated flipInX',
                            close: 'animated flipOutX'
                        }
                    });
                    $(".block:contains('Нет тикетов')").remove();
                    $('#ticket').append(data.html);
                }

            });
        }
    });

    $('.profile .avatar').each(function () {
        $(this).attr("title", replaceLogin($(this).attr("original-title")));
    });
    $('header .bottom .block').each(function () {
        $(this).attr("title", replaceLogin($(this).attr("title")));
    });
    $('.top-users .block .name a').each(function () {
        $(this).text(replaceLogin($(this).text()));
    });
    $('.profile-u .left .name').each(function () {
        $(this).text(replaceLogin($(this).text()));
    });
    $('.chat .short .top .name').each(function () {
        $(this).text(replaceLogin($(this).text()));
    });
    CARD.init();
    caseitem();
    chatdelet();
});


$(document).ready(function () {
    $('.chat .scroll').scrollTop(1e7);
    $("#unitsum").on('change', function () {
        $("#unitcnt").val($(this).val() / 5);
    });

    $('.refill').click(function (e) {
        e.preventDefault();
        $('#refill_block').modal();
    });


    $('#chatInput').bind("enterKey", function (e) {
        var input = $(this);
        var msg = input.val();
        if (msg != '') {
            $.post('/chat', {messages: msg}, function (data) {
                console.log(5);
                if (data) {
                    if (!data.success) {
                        noty({
                            text: '<div><div><strong>Error</strong><br>' + data.errors + '</div></div>',
                            layout: 'topRight',
                            type: 'error',
                            theme: 'relax',
                            timeout: 8000,
                            closeWith: ['click'],
                            animation: {
                                open: 'animated flipInX',
                                close: 'animated flipOutX'
                            }
                        });
                    } else {
                        noty({
                            text: '<div><div><strong>Успешно</strong><br>' + data.success + '</div></div>',
                            layout: 'topRight',
                            type: 'success',
                            theme: 'relax',
                            timeout: 8000,
                            closeWith: ['click'],
                            animation: {
                                open: 'animated flipInX',
                                close: 'animated flipOutX'
                            }
                        });
                        input.val('');
                    }

                }
                else {

                    input.val('');
                    setTimeout(function () {
                        $('.chat .scroll').scrollTop(1e7);
                    }, 500)
                }
            });
        }
    });
    $('#chatInput').keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });
    $('#chatInput2').on('click', function (event) {
        $('#chatInput').trigger("enterKey");
    });
});
$(document).on('click', '.faq-cat', function (e) {
    var that = $(this);
    var priced = that.data('cat');
    $('.faq-block').hide('');
    if (that.is('.active')) {
        that.removeClass('active')
        $('.faq-block').hide('');
    }
    else {
        $('.faq-block.' + priced).show('');
        $('.faq-cat').removeClass('active')
        that.addClass('active')
    }
})

$(document).on('click', '.faq-q', function (e) {
    var that = $(this);
    if (that.is('.active')) {
        that.removeClass('active').next(".faq-a").slideToggle()
    }
    else {
        that.addClass('active').next(".faq-a").slideToggle(300)
    }
})

function updateBalance(data) {
    $('.balance span').text(data);
}


function add_smile(e) {
    inner = $("#chatInput").val(), $("#chatInput").val(inner + " " + e + " "), $("#chatInput").focus()
}

function replaceLogin1(login) {
    var reg = new RegExp(BANNED_DOMAINS, 'i');
    return login.replace(reg, "");
}
function replaceLogin(login) {
    function replacer(match, p1, p2, p3, offset, string) {
        var links = ['awpking.com'];
        return links.indexOf(match.toLowerCase()) == -1 ? '' : match;
    }

    login = login.replace('сom', 'com').replace('cоm', 'com').replace('соm', 'com');
    var res = login.replace(/([а-яa-z0-9-]+) *\. *(ru|com|net|gl|su|red|ws|us|pro|one|tk)+/gi, replacer);
    if (!res.trim()) {

        var check = login.toLowerCase().split('awpking.com').length > 1;

        if (check) {
            res = login;
        }
        else {
            res = login.replace(/csgo/i, '').replace(/ *\. *ru/i, '').replace(/ *\. *com/i, '');
            if (!res.trim()) {
                res = 'UNKNOWN';
            }
        }
    }

    res = res.split('script').join('srcipt');
    return res;
}
var uagent = navigator.userAgent.toLowerCase();
var is_safari = ((uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc."));
var is_ie = ((uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv));
var is_ie4 = ((is_ie) && (uagent.indexOf("msie 4.") != -1));
var is_moz = (navigator.product == 'Gecko');
var is_ns = ((uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari));
var is_ns4 = ((is_ns) && (parseInt(navigator.appVersion) == 4));
var is_opera = (uagent.indexOf('opera') != -1);
var is_kon = (uagent.indexOf('konqueror') != -1);
var is_webtv = (uagent.indexOf('webtv') != -1);
var is_win = ((uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") != -1));
var is_mac = ((uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc."));
var is_chrome = (uagent.match(/Chrome\/\w+\.\w+/i));
if (is_chrome == 'null' || !is_chrome || is_chrome == 0) is_chrome = '';
var ua_vers = parseInt(navigator.appVersion);
var req_href = location.href;
var vii_interval = false;
var vii_interval_im = false;
var scrollTopForFirefox = 0;
var url_next_id = 1;

function chatdelet() {
    $(document).ready(function () {

        $('.admin_controls').click(function (e) {
            var it = $(this).attr("data-time");
            $.post('/chatdel', {messages: it}, function (data) {


                if (data) {
                    if (!data.success) {
                        noty({
                            text: '<div><div><strong>Error</strong><br>' + data.errors + '</div></div>',
                            layout: 'topRight',
                            type: 'error',
                            theme: 'relax',
                            timeout: 8000,
                            closeWith: ['click'],
                            animation: {
                                open: 'animated flipInX',
                                close: 'animated flipOutX'
                            }
                        });
                    } else {
                        noty({
                            text: '<div><div><strong>Успешно</strong><br>' + data.success + '</div></div>',
                            layout: 'topRight',
                            type: 'success',
                            theme: 'relax',
                            timeout: 8000,
                            closeWith: ['click'],
                            animation: {
                                open: 'animated flipInX',
                                close: 'animated flipOutX'
                            }
                        });


                    }


                }
            });
        });

    });
}
function caseitem() {
    $(document).ready(function () {


        $('body').on('mouseover', '#lastWinners .block', function (e) {
            $(this).find(".drop-image").css("opacity", "0");
            $(this).find(".case-image").css("opacity", "1");
        }).mouseout(function () {
            $(this).find(".drop-image").css("opacity", "1");
            $(this).find(".case-image").css("opacity", "0");
        });
        $('body').on('mouseover', '.inventory .block', function (e) {
            $(this).find(".drop-image").css("opacity", "0");
            $(this).find(".case-image").css("opacity", "1");
        }).mouseout(function () {
            $(this).find(".drop-image").css("opacity", "1");
            $(this).find(".case-image").css("opacity", "0");
        });

    });

}


$(document).ready(function () {

    var mw = ($('html, body').width() - 800) / 2;
    if ($('.autowr').css('padding-left', mw + 'px').css('padding-right', mw + 'px')) {
        $('body').show();
        history.pushState({link: location.href}, '', location.href);
    }

    $(window).scroll(function () {
        if ($(document).scrollTop() > ($(window).height() / 2))
            $('.scroll_fix_bg').fadeIn(200);
        else
            $('.scroll_fix_bg').fadeOut(200);
    });
});


window.onload = function () {
    window.setTimeout(function () {
            window.addEventListener('popstate', function (e) {
                    e.preventDefault();
                    if (e.state && e.state.link) Page.Go(e.state.link, {no_change_link: 1});
                },
                false);
        },
        1);
}
var Page = {
    Go: function (h) {
        CARD.init();
        history.pushState({link: h}, null, h);
        $('.content').html('<div id="loading"><div class="pad_style"><div class="loadstyle"></div></div></div>');
        caseitem();

        $.post(h, function (data) {
            $('.content').html(data);
            makeTabs('tabs-1');
            makeTabs('tabs-2');
            makeTabs('tabs-3');
            makeTabs('tabs-4');
            makeTabs('tabs-5');


        });

    },
    Prev: function (h) {
        CARD.init();
        $.post(h, function (data) {
            $('.content').html(data);
            makeTabs('tabs-1');
            makeTabs('tabs-2');
            makeTabs('tabs-3');
            makeTabs('tabs-4');
            makeTabs('tabs-5');


        });
    }
}


$(document).on('click', "a.pricebby", function (e) {
    var that = $(this);
    var type = that.is(".sellBotBtn") ? 'sell' : 'wai';
    $('.box-modal_close').show();
    $.ajax({
        url: '/select/aj_sell_or_wait',
        type: 'POST',
        dataType: 'json',
        data: {
            act: 'sellORwait',
            action: 'sellORwait', type: type, bsh: that.data('bsh'), order_id: that.data('order')
        },
        success: function (data) {
            if (data.status == 'success') {
                updateBalance(data.balance);
                noty({
                    text: '<div><div><strong>Предмет успешно продан</strong><br>Do not forget about us!</div></div>',
                    layout: 'topRight',
                    type: 'success',
                    theme: 'relax',
                    timeout: 8000,
                    closeWith: ['click'],
                    animation: {
                        open: 'animated flipInX',
                        close: 'animated flipOutX'
                    }
                });
                $('#item_' + that.data('order') + ' .get').remove();
                $('#item_' + that.data('order') + ' .queue').addClass('selled').removeClass('queue');
                $('#item_' + that.data('order') + ' .items .itm.selled').attr("title", "Продано");
                $('#item_' + that.data('order') + ' .price').removeClass('pricebby');
            }
        },
        error: function (data) {
            noty({
                text: '<div><div><strong>Error</strong><br>Something went wrong, try again!</div></div>',
                layout: 'topRight',
                type: 'error',
                theme: 'relax',
                timeout: 8000,
                closeWith: ['click'],
                animation: {
                    open: 'animated flipInX',
                    close: 'animated flipOutX'
                }
            });
        }
    });
});

$(document).on('click', ".btn-resend-item", function (e) {
    var that = $(this);
    var bsh = that.data('bsh');
    var order_id = that.data('order');
    that.hide();
    $('#kim_' + order_id).show();
    var price = that.data('price');

    $.ajax({
        url: '/select/aj_sell_transfer',
        type: 'POST',
        dataType: 'json',
        data: {
            act: 'transfer',
            action: 'transfer', bsh: bsh, order_id: order_id
        },
        success: function (data) {

            if (data.status == 'success') {
                noty({
                    text: '<div><div><strong>Item has been successfully sent to you</strong><br>Do not forget about us!</div></div>',
                    layout: 'topRight',
                    type: 'success',
                    theme: 'relax',
                    timeout: 8000,
                    closeWith: ['click'],
                    animation: {
                        open: 'animated flipInX',
                        close: 'animated flipOutX'
                    }
                });


                $('div#item_' + that.data('order') + ' div:nth-of-type(2)').addClass('selled');
                $('div#item_' + that.data('order') + ' div:nth-of-type(2)').attr("title", "Продано");
                $('div#item_' + that.data('order') + ' .price').removeClass('pricebby');
                $('#item_' + that.data('order') + ' .trade').remove();


            }
            if (data.status == 'error') {
                $('#kim_' + order_id).text('Error');
            }
        },
        error: function (data) {
            that.text('Error')
            noty({
                text: '<div><div><strong>Error</strong><br>Something went wrong, try again!</div></div>',
                layout: 'topRight',
                type: 'error',
                theme: 'relax',
                timeout: 8000,
                closeWith: ['click'],
                animation: {
                    open: 'animated flipInX',
                    close: 'animated flipOutX'
                }
            });
        }
    });
});

$(document).on('click', ".user .trade input[type='submit']", function (e) {
    var that = $(this);
    var prevHtml = that.html();


    var userPanelError = $('.userPanelError')


    $.ajax({
        url: '/save_link',
        type: 'POST',
        dataType: 'json',
        data: {
            trade_link: that.prev().val()
        },
        success: function (data) {
            if (data.status == 'success') {

                noty({
                    text: '<div><div><strong>Link successfully saved</strong><br>Do not forget to open inventory to get the win!</div></div>',
                    layout: 'topRight',
                    type: 'success',
                    theme: 'relax',
                    timeout: 8000,
                    closeWith: ['click'],
                    animation: {
                        open: 'animated flipInX',
                        close: 'animated flipOutX'
                    }
                });
            }
            else {
                noty({
                    text: '<div><div><strong>Error</strong><br>Enter the normal link and try again</div></div>',
                    layout: 'topRight',
                    type: 'error',
                    theme: 'relax',
                    timeout: 8000,
                    closeWith: ['click'],
                    animation: {
                        open: 'animated flipInX',
                        close: 'animated flipOutX'
                    }
                });
            }
        },
        error: function () {
            noty({
                text: '<div><div><strong>Error</strong><br>Enter the normal link and try again</div></div>',
                layout: 'topRight',
                type: 'error',
                theme: 'relax',
                timeout: 8000,
                closeWith: ['click'],
                animation: {
                    open: 'animated flipInX',
                    close: 'animated flipOutX'
                }
            });
        }
    })
})

(function(d){var g={type:"html",content:"",url:"",ajax:{},ajax_request:null,closeOnEsc:!0,closeOnOverlayClick:!0,clone:!1,overlay:{block:void 0,tpl:'<div class="arcticmodal-overlay"></div>',css:{backgroundColor:"#000",opacity:0.6}},container:{block:void 0,tpl:'<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},wrap:void 0,body:void 0,errors:{tpl:'<div class="arcticmodal-error arcticmodal-close"></div>',autoclose_delay:2E3,
    ajax_unsuccessful_load:"Error"},openEffect:{type:"fade",speed:400},closeEffect:{type:"fade",speed:400},beforeOpen:d.noop,afterOpen:d.noop,beforeClose:d.noop,afterClose:d.noop,afterLoading:d.noop,afterLoadingOnShow:d.noop,errorLoading:d.noop},j=0,e=d([]),m={isEventOut:function(a,b){var c=!0;d(a).each(function(){d(b.target).get(0)==d(this).get(0)&&(c=!1);0==d(b.target).closest("HTML",d(this).get(0)).length&&(c=!1)});return c}},f={getParentEl:function(a){var b=d(a);return b.data("arcticmodal")?b:(b=
    d(a).closest(".arcticmodal-container").data("arcticmodalParentEl"))?b:!1},transition:function(a,b,c,e){e=void 0==e?d.noop:e;switch(c.type){case "fade":"show"==b?a.fadeIn(c.speed,e):a.fadeOut(c.speed,e);break;case "none":"show"==b?a.show():a.hide(),e()}},prepare_body:function(a,b){d(".arcticmodal-close",a.body).unbind("click.arcticmodal").bind("click.arcticmodal",function(){b.arcticmodal("close");return!1})},init_el:function(a,b){var c=a.data("arcticmodal");if(!c){c=b;j++;c.modalID=j;c.overlay.block=
    d(c.overlay.tpl);c.overlay.block.css(c.overlay.css);c.container.block=d(c.container.tpl);c.body=d(".arcticmodal-container_i2",c.container.block);b.clone?c.body.html(a.clone(!0)):(a.before('<div id="arcticmodalReserve'+c.modalID+'" style="display: none" />'),c.body.html(a));f.prepare_body(c,a);c.closeOnOverlayClick&&c.overlay.block.add(c.container.block).click(function(b){m.isEventOut(d(">*",c.body),b)&&a.arcticmodal("close")});c.container.block.data("arcticmodalParentEl",a);a.data("arcticmodal",c);
    e=d.merge(e,a);d.proxy(h.show,a)();if("html"==c.type)return a;if(void 0!=c.ajax.beforeSend){var k=c.ajax.beforeSend;delete c.ajax.beforeSend}if(void 0!=c.ajax.success){var g=c.ajax.success;delete c.ajax.success}if(void 0!=c.ajax.error){var l=c.ajax.error;delete c.ajax.error}var n=d.extend(!0,{url:c.url,beforeSend:function(){void 0==k?c.body.html('<div class="arcticmodal-loading" />'):k(c,a)},success:function(b){a.trigger("afterLoading");c.afterLoading(c,a,b);void 0==g?c.body.html(b):g(c,a,b);f.prepare_body(c,
        a);a.trigger("afterLoadingOnShow");c.afterLoadingOnShow(c,a,b)},error:function(){a.trigger("errorLoading");c.errorLoading(c,a);void 0==l?(c.body.html(c.errors.tpl),d(".arcticmodal-error",c.body).html(c.errors.ajax_unsuccessful_load),d(".arcticmodal-close",c.body).click(function(){a.arcticmodal("close");return!1}),c.errors.autoclose_delay&&setTimeout(function(){a.arcticmodal("close")},c.errors.autoclose_delay)):l(c,a)}},c.ajax);c.ajax_request=d.ajax(n);a.data("arcticmodal",c)}},init:function(a){a=
    d.extend(!0,{},g,a);if(d.isFunction(this))if(void 0==a)d.error("jquery.arcticmodal: Uncorrect parameters");else if(""==a.type)d.error('jquery.arcticmodal: Don\'t set parameter "type"');else switch(a.type){case "html":if(""==a.content){d.error('jquery.arcticmodal: Don\'t set parameter "content"');break}var b=a.content;a.content="";return f.init_el(d(b),a);case "ajax":if(""==a.url){d.error('jquery.arcticmodal: Don\'t set parameter "url"');break}return f.init_el(d("<div />"),a)}else return this.each(function(){f.init_el(d(this),
    d.extend(!0,{},a))})}},h={show:function(){var a=f.getParentEl(this);if(!1===a)d.error("jquery.arcticmodal: Uncorrect call");else{var b=a.data("arcticmodal");b.overlay.block.hide();b.container.block.hide();d("BODY").append(b.overlay.block);d("BODY").append(b.container.block);b.beforeOpen(b,a);a.trigger("beforeOpen");if("hidden"!=b.wrap.css("overflow")){b.wrap.data("arcticmodalOverflow",b.wrap.css("overflow"));var c=b.wrap.outerWidth(!0);b.wrap.css("overflow","hidden");var g=b.wrap.outerWidth(!0);g!=
c&&b.wrap.css("marginRight",g-c+"px")}e.not(a).each(function(){d(this).data("arcticmodal").overlay.block.hide()});f.transition(b.overlay.block,"show",1<e.length?{type:"none"}:b.openEffect);f.transition(b.container.block,"show",1<e.length?{type:"none"}:b.openEffect,function(){b.afterOpen(b,a);a.trigger("afterOpen")});return a}},close:function(){if(d.isFunction(this))e.each(function(){d(this).arcticmodal("close")});else return this.each(function(){var a=f.getParentEl(this);if(!1===a)d.error("jquery.arcticmodal: Uncorrect call");
else{var b=a.data("arcticmodal");!1!==b.beforeClose(b,a)&&(a.trigger("beforeClose"),e.not(a).last().each(function(){d(this).data("arcticmodal").overlay.block.show()}),f.transition(b.overlay.block,"hide",1<e.length?{type:"none"}:b.closeEffect),f.transition(b.container.block,"hide",1<e.length?{type:"none"}:b.closeEffect,function(){b.afterClose(b,a);a.trigger("afterClose");b.clone||d("#arcticmodalReserve"+b.modalID).replaceWith(b.body.find(">*"));b.overlay.block.remove();b.container.block.remove();a.data("arcticmodal",
    null);d(".arcticmodal-container").length||(b.wrap.data("arcticmodalOverflow")&&b.wrap.css("overflow",b.wrap.data("arcticmodalOverflow")),b.wrap.css("marginRight",0))}),"ajax"==b.type&&b.ajax_request.abort(),e=e.not(a))}})},setDefault:function(a){d.extend(!0,g,a)}};d(function(){g.wrap=d(document.all&&!document.querySelector?"html":"body")});d(document).bind("keyup.arcticmodal",function(a){var b=e.last();b.length&&b.data("arcticmodal").closeOnEsc&&27===a.keyCode&&b.arcticmodal("close")});d.arcticmodal=
    d.fn.arcticmodal=function(a){if(h[a])return h[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return f.init.apply(this,arguments);d.error("jquery.arcticmodal: Method "+a+" does not exist")}})(jQuery);
