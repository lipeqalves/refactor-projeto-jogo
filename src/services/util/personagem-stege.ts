
export const personageStege = (stege:number, personagem:string) => {
  if(personagem === "zeus"){
    if(stege === 1) return "c"
    if(stege === 2) return "b"
    if(stege === 3) return  "a"
  }
  if(personagem === "pandora"){
    if(stege === 1) return  "d"
    if(stege === 2) return "e"
    if(stege === 3) return  "a"
  }

  if(personagem === "epimeteu"){
    if(stege === 1) return  "c"
    if(stege === 2) return  "b"
    if(stege === 3) return  "e"
  }
}
