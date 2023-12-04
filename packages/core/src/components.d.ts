/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonHTMLType, ButtonShape, ButtonType, Loading } from "./components/button/button-helpers";
import { SizeType } from "./components/config-provider/context";
import { MouseEventHandler } from "./utils/EventInterface";
import { SizeType as SizeType1, ThemeConfig } from "./components/config-provider/context";
import { Locale } from "@bees-ui/core/src/locale";
import { Locale as Locale1 } from "./locale";
export { ButtonHTMLType, ButtonShape, ButtonType, Loading } from "./components/button/button-helpers";
export { SizeType } from "./components/config-provider/context";
export { MouseEventHandler } from "./utils/EventInterface";
export { SizeType as SizeType1, ThemeConfig } from "./components/config-provider/context";
export { Locale } from "@bees-ui/core/src/locale";
export { Locale as Locale1 } from "./locale";
export namespace Components {
    interface BeesButton {
        "beeTitle": string;
        "block": boolean;
        "danger": boolean;
        "disabled": boolean;
        "ghost": boolean;
        "href": string;
        "htmlType": ButtonHTMLType;
        "icon": string;
        "loading": Loading;
        "prefixCls": string;
        "shape": ButtonShape;
        "size": SizeType;
        "target": string;
        "type": ButtonType;
    }
    interface BeesConfigProvider {
        "componentSize": SizeType1;
        "locale": Locale;
        "theme": ThemeConfig;
    }
    interface BeesWave {
        "disabled": boolean;
    }
    interface BeesWaveEffect {
        "myClassName": string;
        "target": HTMLElement;
    }
    interface IkunLocaleProvider {
        "locale": Locale1;
    }
}
export interface BeesButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBeesButtonElement;
}
declare global {
    interface HTMLBeesButtonElementEventMap {
        "beeClick": MouseEventHandler;
        "beeMousedown": MouseEventHandler;
    }
    interface HTMLBeesButtonElement extends Components.BeesButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLBeesButtonElementEventMap>(type: K, listener: (this: HTMLBeesButtonElement, ev: BeesButtonCustomEvent<HTMLBeesButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLBeesButtonElementEventMap>(type: K, listener: (this: HTMLBeesButtonElement, ev: BeesButtonCustomEvent<HTMLBeesButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLBeesButtonElement: {
        prototype: HTMLBeesButtonElement;
        new (): HTMLBeesButtonElement;
    };
    interface HTMLBeesConfigProviderElement extends Components.BeesConfigProvider, HTMLStencilElement {
    }
    var HTMLBeesConfigProviderElement: {
        prototype: HTMLBeesConfigProviderElement;
        new (): HTMLBeesConfigProviderElement;
    };
    interface HTMLBeesWaveElement extends Components.BeesWave, HTMLStencilElement {
    }
    var HTMLBeesWaveElement: {
        prototype: HTMLBeesWaveElement;
        new (): HTMLBeesWaveElement;
    };
    interface HTMLBeesWaveEffectElement extends Components.BeesWaveEffect, HTMLStencilElement {
    }
    var HTMLBeesWaveEffectElement: {
        prototype: HTMLBeesWaveEffectElement;
        new (): HTMLBeesWaveEffectElement;
    };
    interface HTMLIkunLocaleProviderElement extends Components.IkunLocaleProvider, HTMLStencilElement {
    }
    var HTMLIkunLocaleProviderElement: {
        prototype: HTMLIkunLocaleProviderElement;
        new (): HTMLIkunLocaleProviderElement;
    };
    interface HTMLElementTagNameMap {
        "bees-button": HTMLBeesButtonElement;
        "bees-config-provider": HTMLBeesConfigProviderElement;
        "bees-wave": HTMLBeesWaveElement;
        "bees-wave-effect": HTMLBeesWaveEffectElement;
        "ikun-locale-provider": HTMLIkunLocaleProviderElement;
    }
}
declare namespace LocalJSX {
    interface BeesButton {
        "beeTitle"?: string;
        "block"?: boolean;
        "danger"?: boolean;
        "disabled"?: boolean;
        "ghost"?: boolean;
        "href"?: string;
        "htmlType"?: ButtonHTMLType;
        "icon"?: string;
        "loading"?: Loading;
        "onBeeClick"?: (event: BeesButtonCustomEvent<MouseEventHandler>) => void;
        "onBeeMousedown"?: (event: BeesButtonCustomEvent<MouseEventHandler>) => void;
        "prefixCls"?: string;
        "shape"?: ButtonShape;
        "size"?: SizeType;
        "target"?: string;
        "type"?: ButtonType;
    }
    interface BeesConfigProvider {
        "componentSize"?: SizeType1;
        "locale"?: Locale;
        "theme"?: ThemeConfig;
    }
    interface BeesWave {
        "disabled"?: boolean;
    }
    interface BeesWaveEffect {
        "myClassName"?: string;
        "target"?: HTMLElement;
    }
    interface IkunLocaleProvider {
        "locale"?: Locale1;
    }
    interface IntrinsicElements {
        "bees-button": BeesButton;
        "bees-config-provider": BeesConfigProvider;
        "bees-wave": BeesWave;
        "bees-wave-effect": BeesWaveEffect;
        "ikun-locale-provider": IkunLocaleProvider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bees-button": LocalJSX.BeesButton & JSXBase.HTMLAttributes<HTMLBeesButtonElement>;
            "bees-config-provider": LocalJSX.BeesConfigProvider & JSXBase.HTMLAttributes<HTMLBeesConfigProviderElement>;
            "bees-wave": LocalJSX.BeesWave & JSXBase.HTMLAttributes<HTMLBeesWaveElement>;
            "bees-wave-effect": LocalJSX.BeesWaveEffect & JSXBase.HTMLAttributes<HTMLBeesWaveEffectElement>;
            "ikun-locale-provider": LocalJSX.IkunLocaleProvider & JSXBase.HTMLAttributes<HTMLIkunLocaleProviderElement>;
        }
    }
}
