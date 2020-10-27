let $$nop = function () {
};
let $$fnd = function (v) {
    return typeof v !== "undefined"
};
let $$nd = {
    "rev": "a988d1a31e844def530eab6249e04b2d", "da392213.6cda8": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i);
    }, "915bd838.c69298": function ($$i, $ctx) {
        let $$n = $$nop;
        $$nd["b49235a7.1a8298"]($$i)
    }, "f6ae5432.fadae8": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i.payload);
    }, "b49235a7.1a8298": function ($$i, $ctx) {
        let $$n = $$nd["f6ae5432.fadae8"];
        $$n($$i);
    }, "cab0bd30.540d3": function ($$i, $ctx) {
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
    }, "89a58e2f.47791": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i);
    }, "77ac0296.9c5a1c": function ($$i, $ctx) {
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["89a58e2f.47791"]($$i[0]);
            }
            if ($$fnd($$i[1])) {
                $$nd["cae8a973.d0ba98"]($$i[1]);
            }
            if ($$fnd($$i[2])) {
                $$nd["ba2c39b9.208528"]($$i[2]);
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
    }, "cae8a973.d0ba98": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i);
    }, "895ad3d4.0f524": function ($$i, $ctx) {
        let $$n = $$nd["1be1f9e2.1d6d66"];
        $$n((function (msg) {
            return msg;
        })($$i));
    }, "1be1f9e2.1d6d66": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i);
    }, "ba2c39b9.208528": function ($$i, $ctx) {
        $$n_ctx = {
            0: $$nop, 1: function ($$i) {
                $$nd["76502bf2.ac1ab4"]($$i, $$ctx);
                $$nd["f28b7782.599258"]($$i, $$ctx);
            }
        }
        let $$n = function ($$i, $ctx) {
            $$nd["895ad3d4.0f524"]($$i, $$n_ctx || $$ctx);
            $$nd["34aee50a.d1c5aa"]($$i, $$n_ctx || $$ctx);
        }
        $$n($$i);
    }, "76502bf2.ac1ab4": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i.false);
    }, "f28b7782.599258": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i.false);
    }, "34aee50a.d1c5aa": function ($$i, $ctx) {
        let $$n = $$nop;
        print($$i.false);
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