$(document).ready(function () {
    on_start_up();
});
function on_start_up() {
    j = $(".app"),
            k = $(".main-panel"),
            l = $("[data-toggle=layout-chat-open], [data-toggle=chat-dismiss]"),
            m = $(".chat-users #chat-list a, .chat-back"),
            n = !1,
            o = $(".app > .chat-panel");
    w = !1,
            x = !1;
    var p = $(".toggle-active"),
            q = $("[data-toggle=layout-small-menu]"),
            r = $("[data-toggle=quick-launch-panel]");
    var y = $(".sidebar-panel > nav");
    var t, u, v = $("[data-toggle=offscreen]");
    k.on("click", function (a) {
        var b = a.target;
        x && b !== v && d()
    });
    $(".sidebar-panel nav a").on("click", function (b) {
        var c = $(this),
                e = c.parents("li"),
                f = c.closest("li"),
                g = $(".sidebar-panel nav li").not(e),
                i = c.next();
        if (!i.hasClass("sub-menu"))
            return void d();
        if (!(j.hasClass("layout-small-menu") && f.parent().hasClass("nav") && $(window).width() > 768))
        {
            return g.removeClass("open"), i.is("ul") && 0 === i.height() ? f.addClass("open") : i.is("ul") && 0 !== i.height() && f.removeClass("open"), "#" === c.attr("href") && b.preventDefault(), h(), i.is("ul") ? !1 : (b.stopPropagation(), !0)
        }
    });
    p.on("click", function (b) {
        b.preventDefault(), b.stopPropagation(), $(this).toggleClass("active")
    });
    q.on("click", function (b) {
        b.preventDefault(), b.stopPropagation(), j.toggleClass("layout-small-menu"), j.hasClass("layout-small-menu") ? g() : $(window).width() > 768 && !y.hasClass("ps-container") && f()
    });
    v.on("click", function (b) {
        b.preventDefault(), b.stopPropagation(), t = $(this).data("move") ? $(this).data("move") : "ltr", u = "rtl" === t ? "move-right" : "move-left", w || (w = !0, d())
    }),
            $(".sidebar-panel").find("> li > .sub-menu").each(function () {
        $(this).find("ul.sub-menu").length > 0 && $(this).addClass("multi-level")
    });
    $(".sidebar-panel").find(".sub-menu").each(function () {
        $(this).parent("li").addClass("menu-accordion")
    });
    function h() {
        y.hasClass("ps-container") && y.perfectScrollbar("update")
    }
    function f() {
        j.hasClass("layout-small-menu") || j.hasClass("layout-static-sidebar") || j.hasClass("layout-boxed") || $(".sidebar-panel > nav").perfectScrollbar({
            wheelPropagation: !0,
            suppressScrollX: !0
        })
    }
    function g(a) {
        "undefined" == typeof a.dataset ? a.removeAttribute("data-ps-id") : delete a.dataset.psId
    }
    function d() {
        n && c(), x ? (j.removeClass("move-left move-right"), setTimeout(function () {
            j.removeClass("offscreen")
        }, 300)) : j.addClass("offscreen " + u), x = !x, e()
    }
    function e() {
        setTimeout(function () {
            w = !1
        }, 300)
    }
}