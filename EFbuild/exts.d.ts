/// <reference path="../../dist/TutorEngineOne.d.ts" />
declare module "thermite/TIntroControl" {
    import { TObject } from "thermite/TObject";
    import { THtmlText } from "thermite/THtmlText";
    import { TScene } from "thermite/TScene";
    export class TIntroControl extends TObject {
        protected STextBox1: THtmlText;
        protected STextBox2: THtmlText;
        protected SboxNormal: TObject;
        protected SboxSelect: TObject;
        protected SbubbleNormal: TObject;
        protected SbubbleSelect: TObject;
        protected SboxShadow: TObject;
        protected SbubbleShadow: TObject;
        private FLATSTATE;
        private NORMALSTATE;
        private NORMALwBUBBLE;
        private SELECTEDSTATE;
        private SELECTEDwBUBBLE;
        private NORMALnoARROW;
        private SELECTEDnoARROW;
        private SELECTED2noARROW;
        private currState;
        constructor();
        TIntroControlInitialize(): void;
        initialize(): void;
        private init3;
        Destructor(): void;
        addHTMLControls(): void;
        hostScene: TScene;
        private hideall;
        gotoState(state: number): void;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        compareXMLState(stateVal: any): boolean;
        deSerializeObj(objData: any): void;
    }
}
