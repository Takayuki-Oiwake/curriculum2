var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        search:'',
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },

    computed: {
        // 問２
        task: function() {
            return this.list.filter(function(todo) {
                return !todo.isChecked;
            }).length+ '/' + this.list.length;
        },
        // 問３
        part: function() {
            var filterList = [];
            for(var i in this.list){
                var todo = this.list[i];
                if(todo.text.indexOf(this.search)!==-1){
                    filterList.push(todo);
                }
            }
            return filterList;
        },    
        
    },

    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },

        // 問3
        addTask: function(){
            
        },
    }
});
