let $$nop = function () {
};
let $$fnd = function (v) {
    return typeof v !== "undefined"
};
let $$nd = {
    "rev": "d80dfb9c356bbbb9cfeb6ac3a84cffe5", "da392213.6cda8": function ($$i) {
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
                $$nd["89a58e2f.47791"]($$i[2]);
            }
        };
        $$n((function (msg) {
            return [msg, {"payload": "test2", "field1": "field1"}, {"test": "pest"}];
        })($$i));
    }, "89a58e2f.47791": function ($$i) {
        let $$n = $$nop;
        print($$i);
    }
};
(function () {
    let $$n = function ($$i) {
        if ($$fnd($$i)$$nd["da392213.6cda8"]($$i);
        if ($$fnd($$i)$$nd["cab0bd30.540d3"]($$i);
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