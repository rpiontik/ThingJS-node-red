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
    "rev": "4221f8d7e01802186fc04a94512122c6", "6": function ($i, $c) {
        ({
            "$c": $c, "$id": 6, "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
            }
        }).$e($i);
    }, "2": function ($i, $c) {
        ({
            "$c": $c, "$id": 2, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["7"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"a": "test", "b": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "7": function ($i, $c) {
        ({
            "$c": $c,
            "count": 2,
            "joiner": "\n",
            "to": 0,
            "prop": "",
            "key": "topic",
            "accum": false,
            "full": true,
            "$id": 7,
            "$n": function ($i) {
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
                $$fnd($i[0]) && $$nd["7"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"z": "test", "y": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c, "$id": 4, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["7"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"e": "test", "r": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "8": function ($i, $c) {
        ({
            "$c": $c, "count": 2, "overlap": 1, "$id": 8, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["9"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                let pl = ($g["_bc_" + this.$id] = ($g["_bc_" + this.$id] || []));
                pl.push($i);
                if (pl.length >= this.count) {
                    let id = $$mid(), idx = 0;
                    for (let k in pl) {
                        let $i = pl[k];
                        $i.parts = {"id": id, "index": idx++, "count": this.count};
                        this.$n([$i])
                    }
                    let tl = [], i = pl.length - this.overlap;
                    for (let k in pl) {
                        if (i-- <= 0) tl.push(pl[k]);
                    }
                    $g["_bc_" + this.$id] = tl
                }
            }
        }).$e($i);
    }, "5": function ($i, $c) {
        ({
            "$c": $c, "$id": 5, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"g": "test", "h": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "9": function ($i, $c) {
        ({
            "$c": $c,
            "count": 0,
            "joiner": "\n",
            "to": 0,
            "prop": "payload",
            "key": "topic",
            "accum": false,
            "full": false,
            "$id": 9,
            "$n": function ($i) {
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            },
            "$e": function ($i) {
                this.jid = "_jn_" + this.$id;
                this.s = function ($i) {
                    if (acc.t === "array") $i.payload = acc.p; else if (acc.t === "string") $i.payload = $r.str.join(acc.p, acc.ch || ""); else if (acc.t === "object") {
                        $i.payload = {};
                        for (let i in acc.p) $i.payload[acc.p[i].k] = acc.p[i].v
                    } else $i.payload = acc.p;
                    delete $i.parts;
                    this.$n([$i]);
                    acc = null
                };
                let p = $i.parts, tp = $i.parts.type;
                let acc = $g[this.jid] || {"t": tp, "l": p.len, "c": p.count || 1, "i": p.id, "p": [], "ch": p.ch};
                if (acc.t !== tp) this.s($i);
                if (tp === "array") {
                    for (let i in $i.payload) acc.p.push($i.payload[i]);
                } else if (tp === "object") {
                    acc.p.push({"k": p.key, "v": $i.payload})
                } else if (tp === "string") {
                    acc.p.push($i.payload);
                } else acc.p.push($i.payload);
                if ((p.index + 1 >= acc.c) || (p.id !== acc.i) || (acc.t !== tp)) this.s($i);
                $g[this.jid] = acc
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
            $$fnd($i[0]) && $$nd["5"]($$cpy($i[0]), this.$c);
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