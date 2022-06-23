function solution(s) {
  s.toLowerCase();
  // console.log(new Set(s.split("")))
  return new Set(s.split("")).size >= 26;
}

console.log(solution('abcdefghijklmnopqrstuvwxyz'));
console.log(solution('a b c d e f g h i j k l m n o p q r s t u v w x y z a b c'));
console.log(solution('bcdefghijklmnopqrstuvwxyz'));
console.log(solution('aaaaaaaaaaaaaaaaaaaaaaaaaa'));
console.log(solution('nasoiegasjflkesklfjaslkdfjsla'));
console.log(solution('thequickbrownfoxjumpsoverthelazydog'));
