let $g = {};

function $$nop() {
}

function $$fnd(v) {
    return typeof v !== "undefined"
}

function $$cpy(s) {
    return JSON.parse(JSON.stringify(s))
}

let $$nd = {
    "rev": "53b38d5856823df404efd010f41b6fff", "2": function ($i, $c) {
        ({
            "$c": $c, "$n": $$nop, "$e": function ($i) {
                print($i);
            }
        }).$e($i);
    }, "1": function ($i, $c) {
        ({
            "$c": $c, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["3"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["payload"] = "12232";
                $i["payload"] = $r.str.replaceAll($i["payload"], "2", "7");
                this.$n([$i]);
            }
        }).$e($i);
    }, "3": function ($i, $c) {
        ({
            "$c": $c, "$n": function ($i) {
                $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
            }, "$e": function ($i) {
                $i["test"] = "This is the payload: {{payload}} !";
                this.$n([$i]);
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$n": function ($i) {
            $$fnd($i[0]) && $$nd["1"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"test": "pest2", "topic": "123"}]);
            };
            $r.timer.setTimeout(function (scope) {
                scope.inject();
                $r.timer.setInterval(function (scope) {
                    scope.inject();
                }, 5000, scope || this);
            }, 100, this);
        }
    }).$e({})
})();
