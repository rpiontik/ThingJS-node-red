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
    "rev": "655afbc7d64cb4109158bbfa8f9f753a", "3": function ($i, $c) {
        ({
            "$c": $c, "$id": 3, "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
            }
        }).$e($i);
    }, "2": function ($i, $c) {
        ({
            "$c": $c, "$id": 2, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["4"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = "test";
                this.$n([$i]);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c,
            "count": 2,
            "joiner": "\n",
            "to": 3000,
            "prop": "payload",
            "key": "topic",
            "$id": 4,
            "$n": function ($i) {
                $$fnd($i[0]) && $$nd["3"]($$cpy($i[0]), this.$c);
            },
            "$e": function ($i) {
                this.jid = "_jn_" + this.$id;
                $g[this.jid] === undefined && setInterval(function (c) {
                    let acc = $g[c.jid];
                    if (acc && acc.p.length > 0) {
                        let $i = acc.i;
                        $i.payload = {};
                        for (let i in acc.p) {
                            $i.payload[acc.p[i].k] = acc.p[i].v
                        }
                        c.$n([$i])
                    }
                    $g[c.jid] = null
                }, this.to, this);
                let acc = $g[this.jid] || {"p": []};
                acc.p.push({"k": $i[this.key], "v": $i[this.prop] || ""});
                acc.i = $i;
                if ($i.complete || (acc.p.length >= this.count)) {
                    $i.payload = {};
                    for (let i in acc.p) {
                        $i.payload[acc.p[i].k] = acc.p[i].v
                    }
                    acc = null;
                    this.$n([$i])
                }
                $g[this.jid] = acc;
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": 1, "$n": function ($i) {
            $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"test": "pest2", "topic": "123"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
                $r.timer.setInterval(function (scope) {
                    scope.inject();
                }, 1000, scope || this);
            }, 100, this);
        }
    }).$e({})
})();