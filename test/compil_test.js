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
    "rev": "8d9e7d5d8dcd5ab2fd3f09dd8069ea06", "3": function ($i, $c) {
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
                $i["payload1"] = ["test1", "test2", "test3", "test4", "test5"];
                $i["payload2"] = "test1|test2|test3|test4|test5";
                $i["payload"] = {"a": "123", "b": 456, "c": "789", "d": "012", "e": "345"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c, "$id": 4, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["5"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                this.mki = function ($i, pl, t, k, i, c) {
                    $i.payload = pl;
                    $i.parts = {"id": this.mid, "type": t};
                    if (t === "string") {
                        $g["_spt_" + this.id] = $g["_spt_" + this.id] || 0;
                        $i.parts.index = $g["_spt_" + this.id]++
                    } else {
                        $i.parts.index = i;
                        $i.parts.key = k;
                        $i.parts.count = c
                    }
                    return $i
                };
                let tp = typeof $i.payload;
                this.mid = $$mid();
                if (tp === "string") {
                    let ch = "|", ims = $r.str.split($i.payload, ch), ln = ims.length;
                    for (let f = 0; f < ln; f++) {
                        $i = this.mki($i, ims[f], "string", f, f, ln);
                        $i.parts.ch = ch;
                        this.$n([$i])
                    }
                } else if ((tp === "array") || ($i.payload["length"])) {
                    tp = "array";
                    let pl = $$cpy($i.payload), seg = [], ind = 0,
                        cnt = JSON.parse($r.str.split(pl.length / 2 + 0.5, ".")[0]);
                    for (let k in pl) {
                        seg.push(pl[k]);
                        if (seg.length >= 2) {
                            $i = this.mki($i, seg, tp, undefined, ind++, cnt);
                            $i.parts.len = 2;
                            this.$n([$i]);
                            seg = [];
                        }
                    }
                    if (seg.length > 0) {
                        $i = this.mki($i, seg, tp, undefined, ind, cnt);
                        $i.parts.len = 2;
                        this.$n([$i]);
                    }
                } else if (tp === "object") {
                    let ln = 0, i = 0, pl = $$cpy($i.payload);
                    for (let k in pl) ln++;
                    for (let k in pl) {
                        $i = this.mki($i, pl[k], tp, k, i++, ln);
                        $i["key"] = k;
                        this.$n([$i])
                    }
                }
            }
        }).$e($i);
    }, "5": function ($i, $c) {
        ({
            "$c": $c, "$id": 5, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["3"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                this.s = function ($i) {
                    if (acc.t === "array") $i.payload = acc.p; else if (acc.t === "string") $i.payload = $r.str.join(acc.p, acc.ch || ""); else if (acc.t === "object") {
                        $i.payload = {};
                        for (let i in acc.p) $i.payload[acc.p[i].k] = acc.p[i].v
                    }
                    delete $i.parts;
                    this.$n([$i]);
                    acc = null
                };
                let p = $i.parts, tp = $i.parts.type;
                let acc = $g["_jn_" + this.$id];
                acc = acc || {"t": tp, "l": p.len, "c": p.count || 1, "i": p.id, "p": [], "ch": p.ch};
                if (acc.t !== tp) this.s($i);
                if (tp === "array") {
                    for (let i in $i.payload) acc.p.push($i.payload[i]);
                } else if (tp === "object") {
                    acc.p.push({"k": p.key, "v": $i.payload})
                } else if (tp === "string") {
                    acc.p.push($i.payload);
                }
                if ((p.index + 1 >= acc.c) || (p.id !== acc.i) || (acc.t !== tp)) this.s($i);
                $g["_jn_" + this.$id] = acc
            }
        }).$e($i);
    }, "6": function ($i, $c) {
        ({
            "$c": $c, "$id": 6, "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
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
            }, 100, this);
        }
    }).$e({})
})();