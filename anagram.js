function areAnagrams(str1, str2) {
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
   if(str1.length !== str2.length) return false;
   let count={};
   for (let char of str1) count[char] = (count[char] || 0) + 1;
   for (let char of str2) {
    if(!count[char]) return false;
    count[char]--;
   }
   return true;
  }
  
  console.log(areAnagrams("listen", "silent"));
  console.log(areAnagrams("race", "care"));
  console.log(areAnagrams("happy", "sadness"));