var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "@aurelia-ux/core", "./ux-switch-theme"], function (require, exports, aurelia_templating_1, aurelia_binding_1, aurelia_dependency_injection_1, core_1, ux_switch_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = new ux_switch_theme_1.UxSwitchTheme();
    var UxSwitch = /** @class */ (function () {
        function UxSwitch(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.disabled = false;
            this.effect = 'ripple';
            this.ripple = null;
            styleEngine.ensureDefaultTheme(theme);
        }
        Object.defineProperty(UxSwitch.prototype, "isDisabled", {
            get: function () {
                return core_1.normalizeBooleanAttribute('disabled', this.disabled);
            },
            enumerable: true,
            configurable: true
        });
        UxSwitch.prototype.bind = function () {
            if (this.element.hasAttribute('id')) {
                var attributeValue = this.element.getAttribute('id');
                if (attributeValue != null) {
                    this.checkbox.setAttribute('id', attributeValue);
                }
            }
            if (this.element.hasAttribute('tabindex')) {
                var attributeValue = this.element.getAttribute('tabindex');
                if (attributeValue != null) {
                    this.checkbox.setAttribute('tabindex', attributeValue);
                }
            }
            if (this.element.hasAttribute('checked')) {
                var attributeValue = this.element.getAttribute('checked');
                if (attributeValue === 'true') {
                    this.checked = true;
                }
            }
            this.themeChanged(this.theme);
            this.disabledChanged(this.disabled);
        };
        UxSwitch.prototype.themeChanged = function (newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'switch';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        };
        UxSwitch.prototype.disabledChanged = function (newValue) {
            if (core_1.normalizeBooleanAttribute('disabled', newValue) && !this.element.classList.contains('disabled')) {
                this.checkbox.setAttribute('disabled', '');
            }
            else if (this.element.classList.contains('disabled')) {
                this.checkbox.removeAttribute('disabled');
            }
        };
        UxSwitch.prototype.onMouseDown = function (e) {
            if (e.button !== 0 || this.isDisabled) {
                return;
            }
            if (this.element.classList.contains('ripple')) {
                if (this.ripple === null) {
                    this.ripple = new core_1.PaperRipple();
                    var container = this.element.querySelector('.ripplecontainer');
                    if (container != null) {
                        container.appendChild(this.ripple.$);
                    }
                }
                this.ripple.center = true;
                this.ripple.round = true;
                this.ripple.downAction(e);
            }
            e.preventDefault();
        };
        UxSwitch.prototype.onMouseUp = function (e) {
            if (e.button !== 0 || this.isDisabled) {
                return;
            }
            if (this.element.classList.contains('ripple') && this.ripple !== null) {
                this.ripple.upAction();
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxSwitch.prototype, "disabled", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxSwitch.prototype, "effect", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxSwitch.prototype, "id", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxSwitch.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxSwitch.prototype, "checked", void 0);
        __decorate([
            aurelia_binding_1.computedFrom('disabled')
        ], UxSwitch.prototype, "isDisabled", null);
        UxSwitch = __decorate([
            aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
            aurelia_templating_1.customElement('ux-switch')
        ], UxSwitch);
        return UxSwitch;
    }());
    exports.UxSwitch = UxSwitch;
});
