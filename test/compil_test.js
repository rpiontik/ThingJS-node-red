function $$nop() {
}

function $$fnd(v) {
    return typeof v !== "undefined"
}

function $$cpy(s) {
    return JSON.parse(JSON.stringify(s))
}

let $$nd = {
    "rev": "ff3fe82141ec81a2e045c538e3be6afb", "3": function ($i, $c) {
        ({
            "$c": $c, "$n": $$nop, "$e": function ($i) {
                print($i);
            }
        }).$e($i);
    }, "4": function ($i, $c) {
        ({
            "$c": $c, "$n": $$nop, "$e": function ($i) {
                print(this.$c["payload"]);
            }
        }).$e($i);
    }
};
(function () {
    let $c = {};
    ({
        "$c": $c, "$n": function ($i) {
            $$fnd($i[0]) && $$nd["1"]($$cpy($i[0]), this.$c);
            $$fnd($i[0]) && $$nd["2"]($$cpy($i[0]), this.$c);
        }, "$e": function ($i) {
            this.inject = function () {
                this.$n([{"test": "pest2", "topic": "123"}]);
            };
            $$r.timer.setTimeout(function (scope) {
                scope.inject();
                $$r.timer.setInterval(function (scope) {
                    scope.inject();
                }, 5000, scope || this);
            }, 100, this);
        }
    }).$e({})
})();