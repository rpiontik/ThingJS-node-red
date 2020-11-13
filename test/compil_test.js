function $$nop() {
};

function $$fnd(v) {
    return typeof v !== "undefined"
};

function $$cpy(s) {
    return JSON.parse(JSON.stringify(s))
}

let $$nd = {
    "rev": "7fa4e337a921230ee13fb5c2514d4ee6", "895ad3d4.0f524": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["aa379f1e.a1de2"]($$cpy($$i[0]), $$ctx);
            }
            if ($$fnd($$i[0])) {
                $$ctx[1]($$cpy($$i[0]));
            }
        };
        $$n([(function (msg) {
            msg.test += "+test";
            return msg;
        })($$i)]);
    }, "ba2c39b9.208528": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n_ctx = {
            0: function ($$i) {
                $$nd["416fd74e.970088"]($$cpy($$i), $$ctx);
            }, 1: function ($$i) {
                $$nd["f28b7782.599258"]($$cpy($$i), $$ctx);
            }
        };
        let $$n = function ($$i) {
            $$nd["895ad3d4.0f524"]($$cpy($$i), $$n_ctx);
            $$nd["3195b8ed.442c18"]($$cpy($$i), $$n_ctx);
        };
        $$n($$i);
    }, "f28b7782.599258": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = $$nop;
        print($$i);
    }, "3195b8ed.442c18": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = function ($$i) {
            if ($$fnd($$i[1])) {
                $$ctx[1]($$cpy($$i[1]));
            }
        };
        let res = [];
        let els = true;
        if ($$i["topic"] === "321") {
            res[0] = $$i;
            els = false;
        }
        if ($$i["topic"] === "123") {
            res[1] = $$i;
            els = false;
        }
        $$n(res);
    }, "aa379f1e.a1de2": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["baa57f31.63c22"]($$cpy($$i[0]), $$ctx);
            }
        };
        $$n([(function (msg) {
            msg.test += "+test2";
            return msg;
        })($$i)]);
    }, "416fd74e.970088": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = $$nop;
        print($$i);
    }, "c03b1e94.e6b68": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = $$nop;
        print($$i);
    }, "4ee9b5f5.166bfc": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n_ctx = {
            0: function ($$i) {
                $$nd["5d3e1700.0077b8"]($$cpy($$i), $$ctx);
            }, 1: function ($$i) {
                $$nd["e96ea5f5.88af58"]($$cpy($$i), $$ctx);
            }
        };
        let $$n = function ($$i) {
            $$nd["895ad3d4.0f524"]($$cpy($$i), $$n_ctx);
            $$nd["3195b8ed.442c18"]($$cpy($$i), $$n_ctx);
        };
        $$n($$i);
    }, "5d3e1700.0077b8": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = $$nop;
        print($$i.test);
    }, "e96ea5f5.88af58": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = $$nop;
        print($$i.topic);
    }, "ddf061fd.dfa0d": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$nd["fe811bc2.706148"]($$cpy($$i[0]), $$ctx);
            }
        };
        $$n([(function (msg) {
            msg.topic = "blabla";
            return msg;
        })($$i)]);
    }, "baa57f31.63c22": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n_ctx = {0: $$ctx[0]};
        let $$n = function ($$i) {
            $$nd["ddf061fd.dfa0d"]($$cpy($$i), $$n_ctx);
        };
        $$n($$i);
    }, "206e25f5.bbc75a": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n = function ($$i) {
            if ($$fnd($$i[0])) {
                $$ctx[0]($$cpy($$i[0]));
            }
        };
        $$n([(function (msg) {
            msg.topic += "!!!!"
            return msg;
        })($$i)]);
    }, "fe811bc2.706148": function ($$i, $$_ctx) {
        let $$ctx = $$_ctx;
        let $$n_ctx = {0: $$ctx[0]};
        let $$n = function ($$i) {
            $$nd["206e25f5.bbc75a"]($$cpy($$i), $$n_ctx);
        };
        $$n($$i);
    }
};
(function () {
    let $$ctx = {};
    let $$n = function ($$i) {
        if ($$fnd($$i[0])) {
            $$nd["ba2c39b9.208528"]($$cpy($$i[0]), $$ctx);
        }
        if ($$fnd($$i[0])) {
            $$nd["c03b1e94.e6b68"]($$cpy($$i[0]), $$ctx);
        }
        if ($$fnd($$i[0])) {
            $$nd["4ee9b5f5.166bfc"]($$cpy($$i[0]), $$ctx);
        }
    };
    let inject = function () {
        $$n([{"test": "pest2", "topic": "123"}]);
    };
    $$r.timer.setTimeout(function () {
        inject();
    }, 100);
})();