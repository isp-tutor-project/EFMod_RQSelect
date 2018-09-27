

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene1 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $onCreateScene() { 
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            
            this.Sintro4.gotoState(CONST.NORMALnoARROW);
            this.Ssample.hidden = true;
        }

        public $preExitScene() {
        }

        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) { 
        
            return this["$"+templID];
        }


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {            

            switch(nodeId) {
            }

        }

        public $nodePreExit(nodeId:string) {
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.FLATSTATE);
                            this.Sintro2.gotoState(CONST.FLATSTATE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;

                        case "$end":
                            console.log("executing CuePoint END");
                            break;

                        case "a":
                            this.Sintro4.gotoState(CONST.SELECTEDnoARROW);
                            break;
                    }
                    break;

                case "track2":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.SELECTEDSTATE);
                            this.Sintro2.gotoState(CONST.FLATSTATE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track3":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.SELECTEDwBUBBLE);
                            this.Sintro2.gotoState(CONST.FLATSTATE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;                            
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track4":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro2.gotoState(CONST.SELECTEDSTATE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track5":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro2.gotoState(CONST.SELECTEDwBUBBLE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track6":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro2.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro3.gotoState(CONST.SELECTEDSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            this.Ssample.hidden = true;
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track7":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro2.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro3.gotoState(CONST.SELECTEDwBUBBLE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            this.Ssample.hidden = false;
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track8":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro2.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro3.gotoState(CONST.NORMALwBUBBLE);
                            this.Sintro4.gotoState(CONST.SELECTEDnoARROW);
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
                case "track9":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sintro1.gotoState(CONST.SELECTEDSTATE);
                            this.Sintro2.gotoState(CONST.FLATSTATE);
                            this.Sintro3.gotoState(CONST.FLATSTATE);
                            this.Sintro4.gotoState(CONST.NORMALnoARROW);
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    
            }
        }

        public $timedEvents(id:string) {
        }
    }
}