let $$nop = function () {
};
let $$nd = {
    "rev": "47252949d88b7a442c7b50208789f2cb", "f2ef097e.ccb1b8": function ($$i) {
        let $$n = $$nd["da392213.6cda8"];
        let inject = function () {
            $$n({"payload": 1});
        };
        $$r.timer.setInterval(function () {
            let tm = $$r.clock.parse();
            if ((tm.hour >= 2) && (tm.hour <= 4) && (tm.wday === 1) && (tm.wday === 2) && (tm.wday === 3) && (tm.wday === 4) && (tm.wday === 5) && (tm.wday === 0)) {
                inject();
            }
        }, 120000);
    }, "4e542ce2.dca1b4": function ($$i) {
        let $$n = function ($$i) {
            $$nd["915bd838.c69298"]($$i);
            $$nd["da392213.6cda8"]($$i);
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
    }, "da392213.6cda8": function ($$i) {
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
    }
};
$$nd["f2ef097e.ccb1b8"]();
$$nd["4e542ce2.dca1b4"]();