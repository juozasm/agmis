import _ from 'lodash';
export default function getFilteredList(state, filters) {
    const filtered = state.filter((item) => {
        return item.name ? _.includes(item.name.toLowerCase().substring(0, filters.text.length),filters.text.toLowerCase()) ||  _.includes(item.category.toLowerCase().substring(0, filters.textlength),filters.text.toLowerCase()):false;   
    });
    if(filters.sort==='asc'){
         filtered.sort(function(a, b) { 
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        } 
        return 0;
       
      })
      }else{
        filtered.sort(function(a, b) { 
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      })
    
      }

      return filtered;
    
  }
  