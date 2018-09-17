

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene8 {

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
            this.$("Sicon.|Svar.*").hide();
            this.$("Sicon1|Svar1a").show();
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

                case "track0":
                    switch(cueID) {
                        // There are only four things....
                        
                        case "$start":
                            this.$("Stitle").hide();
                            this.$("SsubTitle.*").hide();
                            this.$("Sicon.|Svar.*").hide();

                            // Just show left icon
                            this.$("Sicon1|Svar1a").show();
                        break;

                        case "$end":
                            break;
                    }
                    break;

                case "track1":
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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

        public $onAction(target:string, evt:string) {
        }

        public $timedEvents(id:string) {
        }
    }
}