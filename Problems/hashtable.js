class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash =  (hash + key.charCodeAt(i) * i) % this.data.length;  
        }
        return hash;
    }

    set(key, value){
        var address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value ]);
    }

    get(key){
        var address = this._hash(key);
        var bucket = this.data[address];
        if(bucket){
            for(let items of bucket){
                if(items[0] === key) return items[1]
            }
            return undefined;
        }
        return undefined
    }
}

var hashTable = new HashTable(20);
hashTable.set("grapes", 10000);
console.log(hashTable.get("grapes"))