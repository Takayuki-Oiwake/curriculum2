class Taiyaki{

        constructor(anko,cream,cheese){
            this.anko=anko;
            this.cream=cream;
            this.cheese=cheese;
        }


    make(){
        console.log(`中身は${this.anko}です`);
        console.log(`中身は${this.cream}です`);
        console.log(`中身は${this.cheese}です`);
    }
}

let taiyaki=new Taiyaki('あんこ','クリーム','チーズ');
taiyaki.make();
