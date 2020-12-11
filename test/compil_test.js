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
    "rev": "615551058be861e6095b61622c5da978", "6": function ($i, $c) {
        ({
            "$c": $c, "$id": "6", "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
            }
        }).$e($i);
    }, "2": function ($i, $c) {
        ({
            "$c": $c, "$id": "2", "$n": function ($i) {
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
            "$id": "7",
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
                    !this.accum && (acc = null);
                    this.$n([$i])
                }
                $g[this.jid] = acc;
            }
        }).$e($i);
    }, "3": function ($i, $c) {
        ({
            "$c": $c, "$id": "3", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["7"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"z": "test", "y": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c, "$id": "4", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["7"]($$cpy($i[0]), this.$c);
                $$fnd($i[0]) && $$nd["8"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"e": "test", "r": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "8": function ($i, $c) {
        ({
            "$c": $c, "count": 2, "overlap": 1, "$id": "8", "$n": function ($i) {
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
            "$c": $c, "$id": "5", "$n": function ($i) {
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
            "$id": "9",
            "$n": function ($i) {
                $$fnd($i[0]) && $$nd["10"]($$cpy($i[0]), this.$c);
            },
            "$e": function ($i) {
                this.jid = "_jn_" + this.$id;
                this.s = function ($i, acc) {
                    if (acc.t === "array") {
                        $i.payload = acc.p
                    } else if (acc.t === "string") {
                        $i.payload = $r.str.join(acc.p, acc.ch || "")
                    } else if (acc.t === "object") {
                        $i.payload = {};
                        for (let i in acc.p) $i.payload[acc.p[i].k] = acc.p[i].v
                    } else {
                        $i.payload = acc.p
                    }
                    $i.parts = undefined;
                    this.$n([$i]);
                    acc = null
                };
                let p = $i.parts, tp = $i.parts.type;
                let acc = $g[this.jid] || {"t": tp, "l": p.len, "c": p.count || 1, "i": p.id, "p": [], "ch": p.ch};
                if (acc.t !== tp) {
                    this.s($i, acc)
                }
                if (tp === "array") {
                    for (let i in $i.payload) {
                        acc.p.push($i.payload[i])
                    }
                } else if (tp === "object") {
                    acc.p.push({"k": p.key, "v": $i.payload})
                } else if (tp === "string") {
                    acc.p.push($i.payload);
                } else {
                    acc.p.push($i.payload)
                }
                if ((p.index + 1 >= acc.c) || (p.id !== acc.i) || (acc.t !== tp)) {
                    this.s($i, acc)
                }
                $g[this.jid] = acc
            }
        }).$e($i);
    }, "10": function ($i, $c) {
        ({
            "$c": $c, "drop": true, "delay": 5000, "ql": 50, "$id": "10", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["6"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                this._id = '_dl_' + this.$id;
                let n = $g[this._id], clr = !n;
                n = n || ($g[this._id] = {
                    q: {}, sl: [], tmr: $r.timer.setInterval(function (c) {
                        let n = $g[c._id];
                        if (n.sl.length < 1) {
                            for (let k in n.q) {
                                if (n.q[k] && (n.q[k].length > 0)) {
                                    n.sl.push(n.q[k].splice(0, 1)[0])
                                } else {
                                    n.q[k] = undefined
                                }
                            }
                        }
                        if (n.sl.length > 0) {
                            c.$n([n.sl.splice(0, 1)[0]])
                        } else {
                            for (let k in n.q) {
                                if (n.q[k]) {
                                    return
                                }
                            }
                        }
                        $r.timer.clearInterval(n.tmr);
                        $g[c._id] = null;
                    }, this.delay, this)
                });
                let q;
                if ($i.topic) {
                    q = n.q[$i.topic];
                    clr = !q;
                    q = q || (n.q[$i.topic] = n.q[$i.topic] || []);
                }
                if ($i.flush) {
                    for (let k in n.sl) {
                        if (!$i.topic || (n.sl[k].topic === $i.topic)) {
                            this.$n([n.sl[k]])
                        }
                    }
                    if (!$i.topic) {
                        for (let qk in n.q) {
                            if (n.q[qk]) {
                                for (let k in n.q[qk]) {
                                    this.$n([n.q[qk][k]])
                                }
                            }
                        }
                    } else {
                        for (let k in q) {
                            this.$n([q[k]])
                        }
                    }
                }
                if ($i.reset || $i.flush) {
                    if (!$i.topic) {
                        n.q = {};
                        n.sl = []
                    } else {
                        n.q[$i.topic] = []
                    }
                    for (let k in n.sl) {
                        if (n.sl[k].topic === $i.topic) {
                            n.sl.splice(k, 1)
                        }
                    }
                    return
                }
                if (!$i.topic) {
                    return
                }
                if (this.drop) {
                    n.q[$i.topic] = q = [];
                    for (let k in n.sl) {
                        if (n.sl[k].topic === $i.topic) {
                            n.sl.splice(k, 1)
                        }
                    }
                }
                if (clr) {
                    this.$n([$i])
                } else {
                    if (q.length >= this.ql) {
                        q.splice(0, 1)
                    }
                    q.push($i)
                }
            }
        }).$e($i);
    }, "12": function ($i, $c) {
        ({
            "$c": $c, "$id": "12", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["10"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"g": "test", "h": "test2"};
                this.$n([$i]);
            }
        }).$e($i);
    }, "13": function ($i, $c) {
        ({
            "$c": $c, "$id": "13", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["10"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = {"g": "test3", "h": "test4"};
                this.$n([$i]);
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": "1", "$n": function ($i) {
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
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": "11", "$n": function ($i) {
            $$fnd($i[0]) && $$nd["12"]($$cpy($i[0]), this.$c);
            $$fnd($i[0]) && $$nd["13"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"payload": "", "topic": "321"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
            }, 100, this);
        }
    }).$e({})
})();
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": "14", "$n": function ($i) {
            $$fnd($i[0]) && $$nd["10"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"payload": "123", "topic": "444", "reset": "1"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
            }, 1000, this);
        }
    }).$e({})
})();