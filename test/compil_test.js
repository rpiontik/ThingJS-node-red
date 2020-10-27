let $$nop = function () {
}, $$fnd = function (e) {
    return "undefined" != typeof e
}, $$nd = {
    rev: "6607e20fd08fe60b010aa54e896c1999", "da392213.6cda8": function (e) {
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