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
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
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
            $onAction(target, evt) { }
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
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
                this.addFeature("FTR_CHOICE");
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
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene2 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sbutton.*").hide();
                this.$("Sarea.*|Sselected,SsubTitle1,SsubTitle2,Sor").hide();
                this.setSceneValue("AreaSelected", false);
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
                switch (constrainId) {
                    case "NO_SELECTION":
                        result = !this.getSceneValue("AreaSelected");
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea.*|Sselected,SsubTitle1,SsubTitle2,Sor").hide();
                                this.$("Sarea1|Sselected").show();
                                this.$("Sarea1|SsubTitle1,SsubTitle2,Sor").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea1|SsubTitle1,SsubTitle2,Sor").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea?|Sselected").hide();
                                this.$("Sarea2|Sselected").show();
                                this.$("Sarea2|SsubTitle1,SsubTitle2,Sor").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea2|SsubTitle1,SsubTitle2,Sor").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track6":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea?|Sselected").hide();
                                this.$("Sarea3|Sselected").show();
                                this.$("Sarea3|SsubTitle1,SsubTitle2,Sor").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track7":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea3|SsubTitle1,SsubTitle2,Sor").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track8":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea?|Sselected").hide();
                                this.$("Sarea4|Sselected").show();
                                this.$("Sarea4|SsubTitle1,SsubTitle2,Sor").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track9":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea4|SsubTitle1,SsubTitle2,Sor").show();
                                this.$("Sbutton.*").disable();
                                this.$("Sbutton.*").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track10":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarea?|Sselected").hide();
                                this.$("Sbutton.*").show();
                                this.$("Sbutton.*").enable();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
                this.$("Sbutton.*").disable();
                this.$("Sbutton.*").hide();
                this.setSceneValue("AreaSelected", true);
                switch (target) {
                    case "Sbutton1":
                        this.setModuleValue("selectedArea", { "ontologyKey": "S_A1", "index": "1" });
                        this.$("Sarea1|Sselected").show();
                        break;
                    case "Sbutton2":
                        this.setModuleValue("selectedArea", { "ontologyKey": "S_A2", "index": "2" });
                        this.$("Sarea2|Sselected").show();
                        break;
                    case "Sbutton3":
                        this.setModuleValue("selectedArea", { "ontologyKey": "S_A3", "index": "3" });
                        this.$("Sarea3|Sselected").show();
                        break;
                    case "Sbutton4":
                        this.setModuleValue("selectedArea", { "ontologyKey": "S_A4", "index": "4" });
                        this.$("Sarea4|Sselected").show();
                        break;
                }
                this.nextTrack("$onAction:" + target);
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene2 = SScene2;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene3 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sbutton.*").show();
                this.$("Sbutton.*").enable();
                this.$("Stopic.|Sarea.topic.,Sarea.title.,Sselected").hide();
                let x = this.getModuleValue("selectedArea.index");
                this.$(`Stopic1|Sarea${x}topic1,Sarea${x}title1`).show();
                this.$(`Stopic2|Sarea${x}topic2,Sarea${x}title2`).show();
                this.setSceneValue("TopicSelected", false);
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
                switch (constrainId) {
                    case "NO_SELECTION":
                        result = !this.getSceneValue("TopicSelected");
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
                this.$("Sbutton.*").disable();
                this.$("Sbutton.*").hide();
                this.setSceneValue("TopicSelected", true);
                let x = this.getModuleValue("selectedArea.index");
                this.delFeature(EFMod_RQSelect.CONST.FTRS_ALL, EFMod_RQSelect.CONST.VAR_FTR);
                switch (target) {
                    case "Sbutton1":
                        this.setModuleValue("selectedTopic", { "ontologyKey": `S_A${x}_T1`, "index": "1" });
                        this.addFeaturebyQuery(`S_A${x}_T1|features`, EFMod_RQSelect.CONST.VAR_FTR);
                        this.$("Stopic1|Sselected").show();
                        break;
                    case "Sbutton2":
                        this.setModuleValue("selectedTopic", { "ontologyKey": `S_A${x}_T2`, "index": "2" });
                        this.addFeaturebyQuery(`S_A${x}_T2|features`, EFMod_RQSelect.CONST.VAR_FTR);
                        this.$("Stopic2|Sselected").show();
                        break;
                }
                this.nextTrack("$onAction:" + target);
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene3 = SScene3;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene4 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sarrow.*").hide();
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow1").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow2").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow3").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow4").show();
                                break;
                            case "$end":
                                this.$("Sarrow.").hide();
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene4 = SScene4;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene5 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sarrow.*").hide();
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow1").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow2").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow3").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow4").show();
                                break;
                            case "$end":
                                this.$("Sarrow.").hide();
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene5 = SScene5;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene5a {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sarrow.").hide();
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow1").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow2").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow3").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow4").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow5").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track6":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow6").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track7":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow7").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track8":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow8").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene5a = SScene5a;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene6 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sarrow.*").hide();
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow1").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow2").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow3").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.$("Sarrow.").hide();
                                this.$("Sarrow4").show();
                                break;
                            case "$end":
                                this.$("Sarrow.").hide();
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene6 = SScene6;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene7 {
            $onCreateScene() {
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("Splay").show();
                                this.$("Splay").enable();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
                switch (target) {
                    case "Splay":
                        this.$("Splay.*").disable();
                        this.$("Splay.*").hide();
                        this.Smovie.playMC();
                        break;
                    case "Smovie":
                        if (evt === "complete") {
                            this.nextTrack("$onAction:" + target);
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene7 = SScene7;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_RQSelect;
    (function (EFMod_RQSelect) {
        class SScene8 {
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$("Sicon.|Svar.*").hide();
                this.$("Sicon1|Svar1a").show();
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
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track0":
                        switch (cueID) {
                            case "$start":
                                this.$("Stitle").hide();
                                this.$("SsubTitle.*").hide();
                                this.$("Sicon.|Svar.*").hide();
                                this.$("Sicon1|Svar1a").show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.$("SsubTitle.*").hide();
                                this.$("Sicon.|Svar.*").hide();
                                this.$("Sicon1|Svar1a").show();
                                this.Stitle.setContentByIndex(1);
                                this.Stitle.show();
                                break;
                            case "a":
                                this.SsubTitle1.setContentByIndex(1);
                                this.SsubTitle1.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sicon2|Svar1b").show();
                                this.SsubTitle2.setContentByIndex(1);
                                this.SsubTitle2.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.$("SsubTitle.*").hide();
                                this.$("Sicon.|Svar.*").hide();
                                this.$("Sicon1|Svar2a").show();
                                this.Stitle.setContentByIndex(2);
                                break;
                            case "a":
                                this.SsubTitle1.setContentByIndex(2);
                                this.SsubTitle1.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sicon2|Svar2b").show();
                                this.SsubTitle2.setContentByIndex(2);
                                this.SsubTitle2.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.$("SsubTitle.*").hide();
                                this.$("Sicon.|Svar.*").hide();
                                this.$("Sicon1|Svar3a").show();
                                this.Stitle.setContentByIndex(3);
                                break;
                            case "a":
                                this.SsubTitle1.setContentByIndex(3);
                                this.SsubTitle1.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sicon2|Svar3b").show();
                                this.SsubTitle2.setContentByIndex(3);
                                this.SsubTitle2.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.$("SsubTitle.*").hide();
                                this.$("Sicon.|Svar.*").hide();
                                this.$("Sicon1|Svar4a").show();
                                this.Stitle.setContentByIndex(4);
                                break;
                            case "a":
                                this.SsubTitle1.setContentByIndex(4);
                                this.SsubTitle1.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sicon2|Svar4b").show();
                                this.SsubTitle2.setContentByIndex(4);
                                this.SsubTitle2.show();
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $onAction(target, evt) {
            }
            $timedEvents(id) {
            }
        }
        EFMod_RQSelect.SScene8 = SScene8;
    })(EFMod_RQSelect = EFTut_Suppl.EFMod_RQSelect || (EFTut_Suppl.EFMod_RQSelect = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map