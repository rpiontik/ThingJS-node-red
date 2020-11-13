function $$nop() {
}

function $$fnd(n) {
    return "undefined" != typeof n
}

function $$cpy(n) {
    return JSON.parse(JSON.stringify(n))
}

let $$nd = {
    rev: "4a53986d527fa2ff198751f1e80ebc69", "895ad3d4.0f524": function (n, $) {
        let f = $;
        var t;
        !function (n) {
            if ($$fnd(n[0])) $$nd["aa379f1e.a1de2"]($$cpy(n[0]), f);
            if ($$fnd(n[0])) f[1]($$cpy(n[0]))
        }([(t = n, t.test += "+test", t)])
    }, "ba2c39b9.208528": function (n, $) {
        let f = $, t = {
            0: function (n) {
                $$nd["416fd74e.970088"]($$cpy(n), f)
            }, 1: function (n) {
                $$nd["f28b7782.599258"]($$cpy(n), f)
            }
        };
        !function (n) {
            $$nd["895ad3d4.0f524"]($$cpy(n), t), $$nd["3195b8ed.442c18"]($$cpy(n), t)
        }(n)
    }, "f28b7782.599258": function (n, $) {
        print(n)
    }, "3195b8ed.442c18": function (n, $) {
        let f = $, t = [], c = !0;
        if ("321" === n.topic) t[0] = n, c = !1;
        if ("123" === n.topic) t[1] = n, c = !1;
        !function (n) {
            if ($$fnd(n[1])) f[1]($$cpy(n[1]))
        }(t)
    }, "aa379f1e.a1de2": function (n, $) {
        let f = $;
        var t;
        !function (n) {
            if ($$fnd(n[0])) f[0]($$cpy(n[0]))
        }([(t = n, t.test += "+test2", t)])
    }, "416fd74e.970088": function (n, $) {
        print(n)
    }, "c03b1e94.e6b68": function (n, $) {
        print(n)
    }, "4ee9b5f5.166bfc": function (n, $) {
        let f = $, t = {
            0: function (n) {
                $$nd["5d3e1700.0077b8"]($$cpy(n), f)
            }, 1: function (n) {
                $$nd["e96ea5f5.88af58"]($$cpy(n), f)
            }
        };
        !function (n) {
            $$nd["895ad3d4.0f524"]($$cpy(n), t), $$nd["3195b8ed.442c18"]($$cpy(n), t)
        }(n)
    }, "5d3e1700.0077b8": function (n, $) {
        print(n.test)
    }, "e96ea5f5.88af58": function (n, $) {
        print(n.topic)
    }
};
!function () {
    let n = {}, $ = function () {
        !function ($) {
            if ($$fnd($[0])) $$nd["ba2c39b9.208528"]($$cpy($[0]), n);
            if ($$fnd($[0])) $$nd["c03b1e94.e6b68"]($$cpy($[0]), n);
            if ($$fnd($[0])) $$nd["4ee9b5f5.166bfc"]($$cpy($[0]), n)
        }([{test: "pest2", topic: "123"}])
    };
    $$r.timer.setTimeout(function () {
        $()
    }, 100)
}();