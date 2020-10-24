let $$nop = function () {
}, $$fnd = function (e) {
    return "undefined" != typeof e
}, $$nd = {
    rev: "18709f2b86cf2a00e83c584b2d2d0c63", "da392213.6cda8": function (e) {
        print(e)
    }, "915bd838.c69298": function (e) {
        $$nd["b49235a7.1a8298"](e)
    }, "f6ae5432.fadae8": function (e) {
        print(e.payload)
    }, "b49235a7.1a8298": function (e) {
        (0, $$nd["f6ae5432.fadae8"])(e)
    }, "cab0bd30.540d3": function (e) {
        !function (e) {
            if ($$fnd(e[0])) $$nd["915bd838.c69298"](e[0]);
            if ($$fnd(e[2])) $$nd["77ac0296.9c5a1c"](e[2])
        }([e, {payload: "test2", field1: "field1"}, {test: "pest", mest: "kest"}])
    }, "89a58e2f.47791": function (e) {
        print(e)
    }, "77ac0296.9c5a1c": function (e) {
        let t = [], f = !0;
        if ("test" === e.test) t[0] = e, f = !1; else if ("test" !== e.test) t[1] = e, f = !1; else if (e.test < 1) t[2] = e, f = !1; else if (e.test <= 2) t[3] = e, f = !1; else if (e.test > 3) t[4] = e, f = !1; else if (e.test >= 4) t[5] = e, f = !1; else if ($$fnd(e.test.key)) t[6] = e, f = !1; else if (e.test >= 11 && e.test <= 22) t[7] = e, f = !1; else if (e.test) t[8] = e, f = !1; else if (!e.test) t[9] = e, f = !1; else if (null === e.test) t[10] = e, f = !1; else if (null !== e.test) t[11] = e, f = !1; else if ("string" == typeof e.test) t[12] = e, f = !1; else if (f) t[13] = e, f = !1; else if (f) t[14] = e, f = !1;
        !function (e) {
            if ($$fnd(e[0])) $$nd["89a58e2f.47791"](e[0]);
            if ($$fnd(e[1])) $$nd["cae8a973.d0ba98"](e[1])
        }(t)
    }, "cae8a973.d0ba98": function (e) {
        print(e)
    }
};
!function () {
    let e = function () {
        !function (e) {
            if ($$fnd(e)) $$nd["da392213.6cda8"](e);
            if ($$fnd(e)) $$nd["cab0bd30.540d3"](e)
        }({payload: 333, topic: $$i.payload, field1: 123, field2: !0, field3: {test: "json"}, field4: "test"})
    };
    $$r.timer.setInterval(function () {
        let t = $$r.clock.parse();
        if (t.hour >= 0 && t.hour <= 4) e()
    }, 36e4)
}(), $$nd["77ac0296.9c5a1c"];

let $$nop = function () {
};
let $$fnd = function (v) {
    return typeof v !== "undefined"
};
let $$nd = {
    "rev": "18709f2b86cf2a00e83c584b2d2d0c63", "da392213.6cda8": function ($$i) {
        let $$n = $$nop;
        print($$i);
    }, "915bd838.c69298": function ($$i) {
        let $$n = $$nop;
        $$nd["b49235a7.1a8298"]($$i)
    }, "f6ae5432.fadae8": function ($$i) {
        let $$n = $$nop;
        print($$i.payload);
    }, "b49235a7.1a8298": function ($$i) {
        let $$n = $$nd["f6ae5432.fadae8"];
        $$n($$i);
    }, "cab0bd30.540d3": function ($$i) {
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["915bd838.c69298"]($$i[0]);
            }
            if ($$fnd($$i[2])) {
                $$nd["77ac0296.9c5a1c"]($$i[2]);
            }
        };
        $$n((function (msg) {
            return [msg, {"payload": "test2", "field1": "field1"}, {"test": "pest", "mest": "kest"}];
        })($$i));
    }, "89a58e2f.47791": function ($$i) {
        let $$n = $$nop;
        print($$i);
    }, "77ac0296.9c5a1c": function ($$i) {
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["89a58e2f.47791"]($$i[0]);
            }
            if ($$fnd($$i[1])) {
                $$nd["cae8a973.d0ba98"]($$i[1]);
            }
        };
        let res = [];
        let els = true;
        if ($$i["test"] === "test") {
            res[0] = $$i;
            els = false;
        } else if ($$i["test"] !== "test") {
            res[1] = $$i;
            els = false;
        } else if ($$i["test"] < 1) {
            res[2] = $$i;
            els = false;
        } else if ($$i["test"] <= 2) {
            res[3] = $$i;
            els = false;
        } else if ($$i["test"] > 3) {
            res[4] = $$i;
            els = false;
        } else if ($$i["test"] >= 4) {
            res[5] = $$i;
            els = false;
        } else if ($$fnd($$i["test"]["key"])) {
            res[6] = $$i;
            els = false;
        } else if (($$i["test"] >= 11 && $$i["test"] <= 22)) {
            res[7] = $$i;
            els = false;
        } else if (!!$$i["test"]) {
            res[8] = $$i;
            els = false;
        } else if (!$$i["test"]) {
            res[9] = $$i;
            els = false;
        } else if ($$i["test"] === null) {
            res[10] = $$i;
            els = false;
        } else if ($$i["test"] !== null) {
            res[11] = $$i;
            els = false;
        } else if (typeof $$i["test"] === "string") {
            res[12] = $$i;
            els = false;
        } else if (els) {
            res[13] = $$i;
            els = false;
        } else if (els) {
            res[14] = $$i;
            els = false;
        }
        $$n(res);
    }, "cae8a973.d0ba98": function ($$i) {
        let $$n = $$nop;
        print($$i);
    }
};
(function () {
    let $$n = function ($$i) {
        if ($$fnd($$i)) {
            $$nd["da392213.6cda8"]($$i);
        }
        if ($$fnd($$i)) {
            $$nd["cab0bd30.540d3"]($$i);
        }
    };
    let inject = function () {
        $$n({
            "payload": 333,
            "topic": $$i["payload"],
            "field1": 123,
            "field2": true,
            "field3": {"test": "json"},
            "field4": "\x74\x65\x73\x74"
        });
    };
    $$r.timer.setInterval(function () {
        let tm = $$r.clock.parse();
        if ((tm.hour >= 0) && (tm.hour <= 4)) {
            inject();
        }
    }, 360000);
})();
(function () {
    let $$n = $$nd["77ac0296.9c5a1c"];
    let inject = function () {
        $$n({"test": "pest2", "topic": undefined});
    };
})();