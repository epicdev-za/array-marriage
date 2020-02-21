function marry(base, income){
    for(let key in income){
        if(income.hasOwnProperty(key)){
            if(base.hasOwnProperty(key)){
                if(Array.isArray(base[key])){
                    base[key] = base[key].concat(income[key]);
                }else if(typeof(base[key]) === typeof({})){
                    base[key] = marry(base[key], income[key]);
                }else{
                    base[key] = income[key];
                }
            }else{
                base[key] = income[key];
            }
        }
    }
    return base;
}

module.exports = marry;