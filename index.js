class Formatter {
  //add static methods here
 // return first letter of a string capitalized
 
  static capitalize(word){
   return  word.charAt(0).toUpperCase() + word.slice(1)
    
  }
  static sanitize(word){
    return word.replace(/[^a-zA-Z0-9- ']/g,"")

  }
  // make the first letter of each word capital
  // charAt targets index [], so toUppercase() with it 
  // except  [the, a, an, but, of, and, for, at, by, and from];
  // 
  static titleize(title){
  
        const exceptArray = ['the','a','an','but','of','and','for','at','by','from']
    
        const lowerTitle = title.toLowerCase()
        
        const titleArray =  lowerTitle.split(' ')
    
        const titleArrayCapitalzied = titleArray.map(function(word,index){
    
          if (exceptArray.includes(word) && index !== 0){
          return word
      }   else {
          const firstLetter = word[0].toUpperCase()
          const rest = word.slice(1)
    
          return firstLetter + rest
      }})
    
        const res = titleArrayCapitalzied.join(" ")
        return res 
        
      }
    
    }
  