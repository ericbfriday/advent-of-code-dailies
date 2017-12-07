// r/adventofcode top ans - not brute force - part 1 and two

const input = document.body.textContent.trim().split('\n'),
    re = /([a-z-]+)-(\d+)\[([a-z]+)\]/,
    parse = s => (([, name, id, crc]) => ({ name, id: +id, crc }))(s.match(re)),
    freq = a => el => a.filter(x => x === el).length,
    stableSort = f => (x, y) => f(y) - f(x) || x.localeCompare(y),
    common5 = a => [...new Set(a)].sort(stableSort(freq(a))).slice(0, 5),
    isReal = r => common5([...r.name.replace(/-/g, '')]).join('') === r.crc,
    shiftChar = n => ch => String.fromCharCode(97 + (ch.charCodeAt() - 97 + n) % 26),
    shift = n => s => s.replace(/./g, shiftChar(n)),
    decrypt = ({ name, id }) => ({ name: name.split('-').map(shift(id)).join(' '), id }),
    sumID = rs => rs.reduce((sum, r) => sum + r.id, 0),
    poleID = rs => rs.map(decrypt).find(r => r.name.includes('pole')).id,
    realRooms = input.map(parse).filter(isReal);

console.log(sumID(realRooms), poleID(realRooms));


// better solution with both part 1 & 2
const phrases = document.body.textContent.trim().split('\n');
const noRepeats = (w, _, ws) => ws.filter(v => v === w).length === 1;
const sortLetters = w => [...w].sort().join('');
const isValid = f => ph => ph.split(' ').map(f).every(noRepeats);
const count = f => phrases.filter(isValid(f)).length;

console.log([w => w, sortLetters].map(count));
