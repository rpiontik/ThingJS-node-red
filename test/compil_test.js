let $g = {}, $_mid = 0;

function $$nop() {
}

function $$fnd(v) {
    return typeof v !== "undefined"
}

function $$cpy(s) {
    return JSON.parse(JSON.stringify(s))
}

function $$mid() {
    return JSON.stringify(++$_mid)
}

let $$nd = {
    "rev": "3f771d0d82d96aa3ec314bfc78003d24", "5": function ($i, $c) {
        ({
            "$c": $c, "$id": 5, "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
            }
        }).$e($i);
    }, "2": function ($i, $c) {
        ({
            "$c": $c, "$id": 2, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"a": "test", "b": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "6": function ($i, $c) {
        ({
            "$c": $c,
            "count": 2,
            "joiner": "\n",
            "to": 0,
            "prop": "",
            "key": "topic",
            "accum": false,
            "full": true,
            "$id": 6,
            "$n": function ($i) {
                $$fnd($i[0]) && $$nd["5"]($$cpy($i[0]), this.$c);
            },
            "$e": function ($i) {
                this.jid = "_jn_" + this.$id;
                let pl = (this.full && $$cpy($i)) || $i[this.prop];
                let acc = $g[this.jid] || {"p": [], "c": 0};
                acc.i = $i;
                acc.pl = acc.pl || {};
                if (pl) for (let k in pl) {
                    acc.pl[k] = pl[k];
                    acc.c++
                }
                if ($i.complete || (acc.c >= this.count)) {
                    $i.payload = acc.pl;
                    if (!this.accum) acc = null;
                    this.$n([$i])
                }
                $g[this.jid] = acc;
            }
        }).$e($i);
    }, "3": function ($i, $c) {
        ({
            "$c": $c, "$id": 3, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"z": "test", "y": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c, "$id": 4, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"e": "test", "r": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": 1, "$n": function ($i) {
            $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
            $$fnd($i[0]) && $$nd["3"]($$cpy($i[0]), this.$c);
            $$fnd($i[0]) && $$nd["4"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"test": "pest2", "topic": "123"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
            }, 100, this);
        }
    }).$e({})
})();