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
    "rev": "f2ba98e5779df3490f940281ce4e362d", "1": function ($i, $c) {
        ({
            "$c": $c, "$id": "1", "$n": $$nop, "$e": function ($i) {
                print(JSON.stringify($i));
            }
        }).$e($i);
    }, "2": function ($i, $c) {
        ({
            "$c": $c, "d": 5000, "rst": "", "op2": "end", "$id": "2", "$n": function ($i) {
                $$fnd($i[0]) && $$nd["1"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                this._id = '_tgr_' + this.$id;
                this.tp = $i.topic;
                !$g[this._id] && this.$n([$i]);
                !$g[this._id] && ($g[this._id] = $r.timer.setTimeout(function (c) {
                    c.$n([{"payload": c.op2, "topic": c.tp}]);
                    $g[c._id] = null
                }, this.d, this))
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": "3", "$n": function ($i) {
            $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"payload": "1111", "topic": "1"}]);
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
(function () {
    let $c = {};
    ({
        "$c": $c, "$id": "4", "$n": function ($i) {
            $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"payload": "222", "topic": "2"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
                $r.timer.setInterval(function (scope) {
                    scope.inject();
                }, 1000, scope || this);
            }, 500, this);
        }
    }).$e({})
})();