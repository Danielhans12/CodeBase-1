
export let outputgen = {

    //(array, number value)
    twosum: function(nums, target) {
        if (!Array.isArray(nums) || typeof target !== 'number') {
            throw new TypeError('Invalid input: nums should be an array and target should be a number');
        }

        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
        return [];
    },
    objecttoarray: function(obj, type = 'value') {
        if (typeof obj !== 'object' || obj === null) {
            throw new TypeError('Invalid input: obj should be a non-null object');
        }

        switch (type) {
            case 'key':
                return Object.keys(obj);
            case 'value':
                return Object.values(obj);
            default:
                throw new Error('Invalid type: Accepts "key" or any other string for values');
        }
    },
    IDlisten: function(IDelement, EVENTelement, actualevent){
        let iselement  = document.getElementById(IDelement);
        if(iselement){
            iselement.addEventListener(EVENTelement, ()=>{
                actualevent();
                console.log("actual element");
            });
        }else{
            console.log("not element");
        }
        
    }

    //! the paganation tolower and tohigher can be put here!
}