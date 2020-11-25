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
    "rev": "6562aef8597b6b56f3511658cfe90f56", "2": function ($i, $c) {
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
                $i["payload"] = "123";
                $$nop();
                delete $i["topic"];
                $i["payload"] = $i["topic"];
                delete $i["topic"];
                this.$c["payload"] = "111";
                $g["payload"] = "222";
                $i["payload"] = "HELLO!";
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