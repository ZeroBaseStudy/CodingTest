function solution(s) {
    if (s.length == 1) return s

    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
    s = s.replace(reg,' ').split(' ')

    let arr = s.filter((word, _) => word.length !== 0)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr
}
