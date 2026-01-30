function solution(new_id) {
    // 1단계
    let id = new_id.toLowerCase();
    
    // 2단계
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
    id = id.split('')
           .filter(char => allowed.includes(char))
           .join('');
    
    // 3단계
    while (id.includes('..')) {
        id = id.split('..').join('.');
    }
    
    // 4단계
    if (id[0] === '.') id = id.slice(1);
    if (id[id.length - 1] === '.') id = id.slice(0, -1);
    
    // 5단계
    if (id === '') id += 'a';
    
    // 6단계
    if (id.length >= 16) {
        id = id.slice(0, 15);
        if (id[id.length - 1] === '.') id = id.slice(0, -1)
    }
    
    // 7단계
    while (id.length < 3) {
        id += id[id.length - 1];
    }
    
    return id;
}