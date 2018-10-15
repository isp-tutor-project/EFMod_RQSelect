

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene9 {

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
        }
        
        public $onCreateScene() { 
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            this.setSceneValue("RQSelected", false);       
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

            switch(constrainId) {

                case "!SELECTION_COMPLETE":
                    result = !this.getSceneValue("RQSelected");
                    break;
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {
            }
        }

        public $onAction(target:string, evt:string) {

            this.setSceneValue("RQSelected", true);       

            let tKey = this.getModuleValue("selectedTopic.ontologyKey");     

            switch(target) {

                case "Sbutton1":
                    this.setModuleValue("selectedRQ", {"ontologyKey":`${tKey}_RQ1`,"index":"1"});       
                    break;
                case "Sbutton2":
                    this.setModuleValue("selectedRQ", {"ontologyKey":`${tKey}_RQ2`,"index":"2"});       
                    break;
                case "Sbutton3":
                    this.setModuleValue("selectedRQ", {"ontologyKey":`${tKey}_RQ3`,"index":"3"});       
                    break;
                case "Sbutton4":
                    this.setModuleValue("selectedRQ", {"ontologyKey":`${tKey}_RQ4`,"index":"4"});       
                    break;
            }

            this.nextTrack("$onAction:" + target);
        }

        public $timedEvents(id:string) {
        }
    }
}