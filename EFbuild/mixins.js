var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.CLICK = "click";
        CONST.FLATSTATE = 0;
        CONST.NORMALSTATE = 1;
        CONST.NORMALwBUBBLE = 2;
        CONST.SELECTEDSTATE = 3;
        CONST.SELECTEDwBUBBLE = 4;
        CONST.NORMALnoARROW = 5;
        CONST.SELECTEDnoARROW = 6;
        CONST.SELECTED2noARROW = 7;
        EFMod_RQSelect.CONST = CONST;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $updateNav() {
                if (!this.sceneState.sceneComplete)
                    this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(false);
                else
                    this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(true);
            }
        }
        EFMod_RQSelect.$Common = $Common;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class Globals {
            constructor() {
                this.$var1 = "valname2";
            }
        }
        EFMod_RQSelect.Globals = Globals;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SNavigator {
            $preCreateScene() {
                this.connectNavButton(EFMod_RQSelect.CONST.NEXTSCENE, "Snext");
                this.connectNavButton(EFMod_RQSelect.CONST.PREVSCENE, "Sback");
                this.setNavigationTarget(EFMod_RQSelect.CONST.NAVSCENE);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        console.log("executing CuePoint START");
                        break;
                    case "$end":
                        console.log("executing CuePoint END");
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SNavigator = SNavigator;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene1 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A");
                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                this.Ssample.hidden = true;
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                            case "a":
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.SELECTEDnoARROW);
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.SELECTEDSTATE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.SELECTEDwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.SELECTEDSTATE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.SELECTEDwBUBBLE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track6":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.SELECTEDSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                this.Ssample.hidden = true;
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track7":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.SELECTEDwBUBBLE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                this.Ssample.hidden = false;
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track8":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.NORMALwBUBBLE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.SELECTEDnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track9":
                        switch (cueID) {
                            case "$start":
                                this.Sintro1.gotoState(EFMod_RQSelect.CONST.SELECTEDSTATE);
                                this.Sintro2.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro3.gotoState(EFMod_RQSelect.CONST.FLATSTATE);
                                this.Sintro4.gotoState(EFMod_RQSelect.CONST.NORMALnoARROW);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene1 = SScene1;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map