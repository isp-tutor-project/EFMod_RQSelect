

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene7 {

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
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
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

        public $onAction(target:string, evt:string) {

            switch(target) {

                case "Splay":
                    this.$("Splay.*").disable();
                    this.$("Splay.*").hide();

                    this.Smovie.playMC();
                    break;

                case "Smovie":
                    if(evt === "complete") {
                        this.nextTrack("$onAction:" + target);
                    }
                    break;
            }


        }

        public $timedEvents(id:string) {
        }
    }
}