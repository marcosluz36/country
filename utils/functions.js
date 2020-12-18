export default function wordCapitalize(word){
  let firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + word.slice(1);
}