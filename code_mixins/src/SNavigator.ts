

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SNavigator {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {

            // By default disable all Navigation - Let scenes decide
            // 
            this.setNavMode(CONST.NAVNONE, CONST.NAVSCENE);

            // Development only!!!!!! - define experimental group assignment
            // 
            this.setTutorValue("experimentalGroup.ontologyKey", "EG_A2");
            this.setModuleValue("selectedArea.ontologyKey", "S_A4");
            this.setModuleValue("selectedTopic.ontologyKey", "S_A4_T1");
            this.setModuleValue("selectedRQ.ontologyKey", "S_A4_T1_RQ1");
            
            this.addFeature("FTR_GRHOUSE");
            this.addFeature("FTR_NOCHOICE");
            this.addFeature("FTR_PASS1");
            this.addFeature("FTR_SHOW_SCENE1");

            this.addFeature(CONST.FTR_DEV);
        }

        public $onEnterScene() {

        }
        
        public $preEnterScene() {
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

            switch(cueID) {
                
                case "$start":
                    console.log("executing CuePoint START");
                    break;
                case "$end":
                    console.log("executing CuePoint END");
                    break;
            }
        }

        public $timedEvents(id:string) {
        }
    }
}