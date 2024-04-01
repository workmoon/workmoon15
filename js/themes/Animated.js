import { __extends } from "tslib";
import { Theme } from "../core/Theme";
/**
 * @ignore
 */
var AnimatedTheme = /** @class */ (function (_super) {
    __extends(AnimatedTheme, _super);
    function AnimatedTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AnimatedTheme.prototype, "setupDefaultRules", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            _super.prototype.setupDefaultRules.call(this);
            this.rule("Component").setAll({
                interpolationDuration: 600
            });
            this.rule("Hierarchy").set("animationDuration", 600);
            this.rule("Scrollbar").set("animationDuration", 600);
            this.rule("Tooltip").set("animationDuration", 300);
            this.rule("MapChart").set("animationDuration", 1000);
            this.rule("MapChart").set("wheelDuration", 300);
            this.rule("Entity").setAll({
                stateAnimationDuration: 600
            });
            this.rule("Sprite").states.create("default", { stateAnimationDuration: 600 });
            this.rule("Tooltip", ["axis"]).setAll({
                animationDuration: 200
            });
            this.rule("WordCloud").set("animationDuration", 500);
        }
    });
    return AnimatedTheme;
}(Theme));
export { AnimatedTheme };
//# sourceMappingURL=AnimatedTheme.js.map