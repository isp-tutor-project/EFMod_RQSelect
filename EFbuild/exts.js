System.register("thermite/TIntroControl", ["core/CEFTimeLine", "thermite/TObject", "util/CUtil"], function (exports_1, context_1) {
    "use strict";
    var CEFTimeLine_1, TObject_1, CUtil_1, TIntroControl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CEFTimeLine_1_1) {
                CEFTimeLine_1 = CEFTimeLine_1_1;
            },
            function (TObject_1_1) {
                TObject_1 = TObject_1_1;
            },
            function (CUtil_1_1) {
                CUtil_1 = CUtil_1_1;
            }
        ],
        execute: function () {
            TIntroControl = class TIntroControl extends TObject_1.TObject {
                constructor() {
                    super();
                    this.FLATSTATE = 0;
                    this.NORMALSTATE = 1;
                    this.NORMALwBUBBLE = 2;
                    this.SELECTEDSTATE = 3;
                    this.SELECTEDwBUBBLE = 4;
                    this.NORMALnoARROW = 5;
                    this.SELECTEDnoARROW = 6;
                    this.SELECTED2noARROW = 7;
                    this.init3();
                }
                TIntroControlInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_1.CUtil.trace("TIntroControl:Constructor");
                    this.effectTimeLine = new CEFTimeLine_1.CEFTimeLine(null, null, { "useTicks": false, "loop": false, "paused": true }, this.tutorDoc);
                    this.effectTweens = new Array();
                    this.FLATSTATE = 0;
                    this.NORMALSTATE = 1;
                    this.NORMALwBUBBLE = 2;
                    this.SELECTEDSTATE = 3;
                    this.SELECTEDwBUBBLE = 4;
                    this.NORMALnoARROW = 5;
                    this.SELECTEDnoARROW = 6;
                    this.SELECTED2noARROW = 7;
                }
                Destructor() {
                    super.Destructor();
                }
                addHTMLControls() {
                    this.STextBox1.addHTMLControls();
                    this.STextBox2.addHTMLControls();
                    this.gotoState(this.currState || this.FLATSTATE);
                }
                set hostScene(scene) {
                    this._hostScene = scene;
                    this.STextBox1.hostScene = scene;
                    this.STextBox2.hostScene = scene;
                }
                hideall() {
                    this.STextBox1.visible = false;
                    this.STextBox2.visible = false;
                    this.Sarrow.visible = false;
                    this.SboxNormal.visible = false;
                    this.SboxSelect.visible = false;
                    this.SboxShadow.visible = false;
                    this.SbubbleNormal.visible = false;
                    this.SbubbleSelect.visible = false;
                    this.SbubbleShadow.visible = false;
                }
                gotoState(state) {
                    this.hideall();
                    this.currState = state;
                    switch (state) {
                        case this.FLATSTATE:
                            this.STextBox1.visible = true;
                            this.SboxNormal.visible = true;
                            this.Sarrow.visible = true;
                            break;
                        case this.NORMALSTATE:
                            this.STextBox1.visible = true;
                            this.SboxNormal.visible = true;
                            this.SboxShadow.visible = true;
                            this.Sarrow.visible = true;
                            break;
                        case this.NORMALwBUBBLE:
                            this.STextBox1.visible = true;
                            this.STextBox2.visible = true;
                            this.SboxNormal.visible = true;
                            this.SboxShadow.visible = true;
                            this.SbubbleNormal.visible = true;
                            this.SbubbleShadow.visible = true;
                            this.Sarrow.visible = true;
                            break;
                        case this.SELECTEDSTATE:
                            this.STextBox1.visible = true;
                            this.SboxSelect.visible = true;
                            this.SboxShadow.visible = true;
                            this.Sarrow.visible = true;
                            break;
                        case this.SELECTEDwBUBBLE:
                            this.STextBox1.visible = true;
                            this.STextBox2.visible = true;
                            this.SboxSelect.visible = true;
                            this.SboxShadow.visible = true;
                            this.SbubbleSelect.visible = true;
                            this.SbubbleShadow.visible = true;
                            this.Sarrow.visible = true;
                            break;
                        case this.NORMALnoARROW:
                            this.STextBox1.visible = true;
                            this.SboxNormal.visible = true;
                            this.SboxShadow.visible = true;
                            break;
                        case this.SELECTEDnoARROW:
                            this.STextBox1.visible = true;
                            this.SboxSelect.visible = true;
                            this.SboxShadow.visible = true;
                            break;
                        case this.SELECTED2noARROW:
                            this.STextBox1.visible = true;
                            this.SboxSelect.visible = true;
                            this.SboxShadow.visible = true;
                            break;
                    }
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    return obj;
                }
                captureXMLState() {
                    let stateVal = { controller: {} };
                    let controller = stateVal.controller;
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                }
                compareXMLState(stateVal) {
                    var bTest = true;
                    return bTest;
                }
                deSerializeObj(objData) {
                    console.log("deserializing: TIntroControl Custom Control");
                    super.deSerializeObj(objData);
                    this.STextBox1.deSerializeObj(objData.STextBox1);
                    this.STextBox2.deSerializeObj(objData.STextBox2);
                }
            };
            exports_1("TIntroControl", TIntroControl);
        }
    };
});
//# sourceMappingURL=exts.js.map